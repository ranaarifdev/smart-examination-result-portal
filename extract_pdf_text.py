from pathlib import Path
from PyPDF2 import PdfReader

pdf_path = Path(r'd:\Timetable\Sir Zia Ur Rehman Zia.pdf')
output_path = Path('pdf_extracted_sir_zia_ur_rehman_zia.txt')
reader = PdfReader(pdf_path)
lines = []
for i, page in enumerate(reader.pages):
    page_text = page.extract_text() or ''
    lines.append(f'--- PAGE {i+1} ---')
    lines.append(page_text)

output_path.write_text('\n'.join(lines), encoding='utf-8')
print('PAGES', len(reader.pages))
print('SAVED', output_path.resolve())
