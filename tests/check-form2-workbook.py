"""Privacy and official-layout checks for Form 2's isolated export fixture."""
from zipfile import ZipFile
from xml.etree import ElementTree as E
import json
import re

N={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
source_path='backups/form2-list-20261025-160825/FORM-2-LISTAHANAN-2-FS-2025-2026.xlsx'
report=json.load(open('tmp/form2-check/expected.json',encoding='utf-8'))
areas=[(36,40,41),(3,26,27),(3,28,29),(3,31,32),(3,6,7)]

def value(doc,ref,shared=None):
    cell=doc.find(f'.//m:c[@r="{ref}"]',N)
    if cell is None:return ''
    val=cell.find('m:v',N)
    if cell.attrib.get('t')=='s':return shared[int(val.text)]
    return val.text if val is not None else ''.join(cell.itertext())

with ZipFile(source_path) as original,ZipFile('public/templates/form2-list.xlsx') as safe,ZipFile('tmp/form2-check/115-form2.xlsx') as exported:
    assert 'xl/sharedStrings.xml' not in safe.namelist()
    assert 'xl/sharedStrings.xml' not in exported.namelist()
    original_shared=[''.join(e.itertext()) for e in E.fromstring(original.read('xl/sharedStrings.xml')).findall('m:si',N)]
    safe_xml=b'\n'.join(safe.read(path) for path in safe.namelist() if path.endswith('.xml'))
    original_ids=[]
    controls=[]
    for index,(start,end,total) in enumerate(areas,1):
        old=E.fromstring(original.read(f'xl/worksheets/sheet{index}.xml'))
        current=E.fromstring(exported.read(f'xl/worksheets/sheet{index}.xml'))
        original_ids.extend(value(old,f'C{r}',original_shared) for r in range(start,end+1))
        assert E.tostring(old.find('m:cols',N))==E.tostring(current.find('m:cols',N))
        for row in current.findall('m:sheetData/m:row',N):
            number=row.attrib['r'];control=value(current,'B'+number)
            if re.fullmatch(r'\d{5}',control):
                controls.append((control,value(current,'C'+number)))
                assert current.find(f'.//m:c[@r="B{number}"]',N).attrib['t']=='inlineStr'
                assert current.find(f'.//m:c[@r="Q{number}"]/m:f',N).text==f'SUM(O{number}:P{number})'
        delta=max(0,len(report['rows'])-88) if index==5 else 0
        expected_merges={re.sub(r'([A-Z]+)(\d+)',lambda m:m[1]+str(int(m[2])+(delta if int(m[2])>=total else 0)),m.attrib['ref']) for m in old.findall('m:mergeCells/m:mergeCell',N)}
        actual_merges={m.attrib['ref'] for m in current.findall('m:mergeCells/m:mergeCell',N)}
        assert expected_merges<=actual_merges
    assert all(student_id.encode() not in safe_xml for student_id in original_ids if student_id)
    assert len(controls)==len(report['rows'])==115
    assert [c for c,_ in controls]==[str(i).zfill(5) for i in range(1,116)]
    assert {student for _,student in controls}=={row['studentId'] for row in report['rows']}
    names=[sheet.attrib['name'] for sheet in E.fromstring(exported.read('xl/workbook.xml')).findall('m:sheets/m:sheet',N)]
    assert names==['Sheet1','Sheet2','Sheet3','Sheet4','Sheet5','Sheet7']
    old_styles=E.fromstring(original.read('xl/styles.xml'));styles=E.fromstring(exported.read('xl/styles.xml'))
    for part in ['fonts','fills','borders','cellXfs']:
        for index,style in enumerate(old_styles.find('m:'+part,N)):
            assert E.tostring(style)==E.tostring(styles.find('m:'+part,N)[index])
    for media in ['xl/media/image1.png','xl/media/image2.png']:
        assert original.read(media)==safe.read(media)==exported.read(media)
    final=E.fromstring(exported.read('xl/worksheets/sheet5.xml'));delta=115-88
    for row,key in [(8,'benefits'),(9,'asc'),(10,'total')]:assert round(float(value(final,f'Q{row+delta}'))*100)==report['totals'][key]
    print('PASS Form 2 workbook: source roster scrubbed, six original sheets/column widths/styles/logos retained, footer merges translated, all 115 records exported exactly once with five-digit text controls, totals reconcile.')
