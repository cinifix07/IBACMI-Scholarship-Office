"""Build a reusable official-layout template without the source student roster."""
import argparse
import re
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from xml.etree import ElementTree as E

M = 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
N = {'m': M}
E.register_namespace('', M)


def serialize_sheet(document, original):
    # Preserve declarations referenced by Excel's mc:Ignorable attribute as well
    # as prefixes used in element/attribute names.
    namespaces = re.findall(r'xmlns(?::([\w.-]+))?="([^"]+)"', original.decode('utf-8').split('>')[1] if original.startswith(b'<?xml') else original.decode('utf-8').split('>')[0])
    for prefix, uri in namespaces:
        if prefix and not re.fullmatch(r'ns\d+', prefix): E.register_namespace(prefix, uri)
    result = E.tostring(document, encoding='unicode')
    end = result.index('>')
    head = result[:end]
    for prefix, uri in namespaces:
        if prefix and f'xmlns:{prefix}=' not in head:
            head += f' xmlns:{prefix}="{uri}"'
    return ('<?xml version="1.0" encoding="utf-8"?>\n'+head+result[end:]).encode('utf-8')


def sanitize(source, destination):
    ranges = {1: (36, 40), 2: (3, 26), 3: (3, 28), 4: (3, 31), 5: (3, 6), 6: (3, 99)}
    with ZipFile(source) as original:
        shared = [''.join(t.itertext()) for t in E.fromstring(original.read('xl/sharedStrings.xml')).findall('m:si', N)]
        entries = {name: original.read(name) for name in original.namelist()}
        student_ids = []
        for index, (first, last) in ranges.items():
            name = f'xl/worksheets/sheet{index}.xml'
            sheet = E.fromstring(entries[name])
            for row in sheet.findall('m:sheetData/m:row', N):
                number = int(row.attrib['r'])
                for cell in row.findall('m:c', N):
                    value = cell.find('m:v', N)
                    if first <= number <= last:
                        if index <= 5 and cell.attrib['r'].startswith('C') and value is not None:
                            student_ids.append(shared[int(value.text)] if cell.attrib.get('t') == 's' else value.text)
                        for child in list(cell): cell.remove(child)
                        cell.attrib.pop('t', None)
                    elif cell.attrib.get('t') == 's':
                        text = shared[int(value.text)]
                        cell.remove(value)
                        cell.set('t', 'inlineStr')
                        inline = E.SubElement(cell, '{'+M+'}is')
                        E.SubElement(inline, '{'+M+'}t').text = text
                    elif cell.find('m:f', N) is not None and value is not None:
                        value.text = '0'
            # Clear sample totals and the issued reference; the generator supplies actual values.
            clear_refs = {1: ['Q10', 'Q11'], 5: ['O7', 'Q7', 'Q8', 'Q9', 'Q10']}.get(index, [])
            for ref in clear_refs:
                cell = sheet.find(f'.//m:c[@r="{ref}"]', N)
                if cell is not None:
                    for child in list(cell):
                        if not child.tag.endswith('}f'): cell.remove(child)
                    cell.attrib.pop('t', None)
                    if cell.find('m:f', N) is not None: E.SubElement(cell, '{'+M+'}v').text = '0'
            if index == 6:
                cell = sheet.find('.//m:c[@r="A1"]', N)
                for child in list(cell): cell.remove(child)
                cell.set('t', 'inlineStr')
                E.SubElement(E.SubElement(cell, '{'+M+'}is'), '{'+M+'}t').text = 'TES batch reference list'
            entries[name] = serialize_sheet(sheet, original.read(name))
        for name in ['xl/sharedStrings.xml', 'xl/calcChain.xml']:
            entries.pop(name, None)
        for name in ['xl/_rels/workbook.xml.rels', '[Content_Types].xml']:
            document = E.fromstring(entries[name])
            for child in list(document):
                if any('sharedStrings' in val or 'calcChain' in val for val in child.attrib.values()): document.remove(child)
            E.register_namespace('', document.tag.split('}')[0][1:])
            entries[name] = E.tostring(document, encoding='utf-8', xml_declaration=True)
        all_xml = b'\n'.join(value for key, value in entries.items() if key.endswith('.xml'))
        assert all(student_id.encode() not in all_xml for student_id in student_ids if student_id), 'A source Student ID remains in the template.'
        Path(destination).parent.mkdir(parents=True, exist_ok=True)
        with ZipFile(destination, 'w', ZIP_DEFLATED) as output:
            for name, content in entries.items(): output.writestr(name, content)
        print('Sanitized template: six worksheets, original styles and logos, no source Student IDs or shared-string roster.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('source')
    parser.add_argument('destination')
    args = parser.parse_args()
    sanitize(args.source, args.destination)
