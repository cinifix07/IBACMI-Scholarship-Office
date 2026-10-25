"""Validate the synthetic workbook emitted by billing-browser-check.mjs."""
import json
import re
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
report = json.loads(Path("tmp/billing-check/expected-report.json").read_text())


def cell(document, ref):
    return document.find(f'.//m:c[@r="{ref}"]', NS)


def value(document, ref):
    found = cell(document, ref)
    if found is None:
        return ""
    numeric = found.find("m:v", NS)
    return numeric.text if numeric is not None else "".join(found.itertext())


with ZipFile("public/templates/tes-billing.xlsx") as source, ZipFile("tmp/billing-check/88-students.xlsx") as generated:
    first = ET.fromstring(generated.read("xl/worksheets/sheet1.xml"))
    second = ET.fromstring(generated.read("xl/worksheets/sheet2.xml"))
    old_styles = ET.fromstring(source.read("xl/styles.xml"))
    new_styles = ET.fromstring(generated.read("xl/styles.xml"))
    for component in ["fonts", "fills", "borders", "cellStyleXfs", "cellXfs"]:
        old = old_styles.find("m:" + component, NS)
        new = new_styles.find("m:" + component, NS)
        for index, style in enumerate(old):
            assert ET.tostring(style) == ET.tostring(new[index]), (component, index)

    changed_parts = {"xl/worksheets/sheet1.xml", "xl/worksheets/sheet2.xml", "xl/workbook.xml", "xl/styles.xml", "xl/calcChain.xml", "xl/_rels/workbook.xml.rels", "[Content_Types].xml"}
    for name in source.namelist():
        if name not in changed_parts:
            assert generated.read(name) == source.read(name), name

    students = []
    for row in second.findall("m:sheetData/m:row", NS):
        number = row.attrib["r"]
        control = value(second, "A" + number)
        if re.fullmatch(r"\d{5}", control):
            students.append((number, control))
    assert len(students) == len(report["rows"]) == 88
    assert [control for _, control in students] == [str(i).zfill(5) for i in range(1, 89)]
    for (number, _), expected in zip(students, report["rows"]):
        assert value(second, "B" + number) == expected["studentId"]
        assert value(second, "C" + number) == expected["tesAwardNumber"]
        assert cell(second, "B" + number).attrib["t"] == "inlineStr"
        assert cell(second, "L" + number).attrib["t"] == "inlineStr"
        assert cell(second, "S" + number).find("m:f", NS).text == f"P{number}+Q{number}+R{number}"
    assert round(sum(float(value(second, "S" + n)) for n, _ in students) * 100) == report["totals"]["benefits"]
    assert int(value(first, "P22")) == len(students)
    for ref, key in [("S25", "benefits"), ("S26", "asc"), ("S27", "total")]:
        assert round(float(value(first, ref)) * 100) == report["totals"][key]

    delta = len(students) + len({row["profile"]["campus"] for row in report["rows"]}) * 4 - 6
    original_second = ET.fromstring(source.read("xl/worksheets/sheet2.xml"))
    translated_merges = {re.sub(r"([A-Z]+)(\d+)", lambda match: match[1] + str(int(match[2]) + (delta if int(match[2]) >= 44 else 0)), merge.attrib["ref"]) for merge in original_second.findall("m:mergeCells/m:mergeCell", NS)}
    actual_merges = {merge.attrib["ref"] for merge in second.findall("m:mergeCells/m:mergeCell", NS)}
    assert translated_merges <= actual_merges
    workbook = ET.fromstring(generated.read("xl/workbook.xml"))
    assert [sheet.attrib["name"] for sheet in workbook.findall("m:sheets/m:sheet", NS)] == ["TES Billing Form 1", "TES Billing Form 2"]
    assert "xl/calcChain.xml" not in generated.namelist()
    print("PASS workbook preservation: original styles and other parts intact, footer merges translated, both sheets retained, all 88 students exported, typed identifiers preserved, formulas and cached totals reconcile.")
