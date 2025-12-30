import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    const filePath = path.join(dataDir, "signups.xlsx");

    let workbook: XLSX.WorkBook;
    const sheetName = "Signups";

    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      const ws = workbook.Sheets[workbook.SheetNames[0]];
      const rows = (XLSX.utils.sheet_to_json(ws, { header: 1 }) as any[][]) || [];

      // Ensure header contains Message column
      const header = rows[0] || ["Name", "Email", "Message", "Date"];
      if (!header.includes("Message")) {
        rows[0] = ["Name", "Email", "Message", "Date"];
        // pad existing rows to have 4 columns
        for (let i = 1; i < rows.length; i++) {
          if (!rows[i]) rows[i] = [];
          while (rows[i].length < 4) rows[i].splice(2, 0, "");
        }
      }

      rows.push([name, email, message || "", new Date().toISOString()]);
      const newWs = XLSX.utils.aoa_to_sheet(rows);
      workbook.Sheets[workbook.SheetNames[0]] = newWs;
    } else {
      const rows = [["Name", "Email", "Message", "Date"], [name, email, message || "", new Date().toISOString()]];
      workbook = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet(rows);
      XLSX.utils.book_append_sheet(workbook, ws, sheetName);
    }

    XLSX.writeFile(workbook, filePath);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
