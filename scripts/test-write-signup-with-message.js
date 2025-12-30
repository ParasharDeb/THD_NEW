const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const filePath = path.join(dataDir, 'signups.xlsx');

let workbook;
if (fs.existsSync(filePath)) {
  workbook = XLSX.readFile(filePath);
  const ws = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1 }) || [];

  // ensure header has Message
  rows[0] = rows[0] || ['Name','Email','Message','Date'];
  if (!rows[0].includes('Message')) rows[0] = ['Name','Email','Message','Date'];

  rows.push(['NodeTester', 'node@test.local', 'This is a test message', new Date().toISOString()]);
  const newWs = XLSX.utils.aoa_to_sheet(rows);
  workbook.Sheets[workbook.SheetNames[0]] = newWs;
} else {
  const rows = [['Name','Email','Message','Date'], ['NodeTester', 'node@test.local', 'This is a test message', new Date().toISOString()]];
  workbook = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, ws, 'Signups');
}

XLSX.writeFile(workbook, filePath);
console.log('Wrote/updated', filePath);
