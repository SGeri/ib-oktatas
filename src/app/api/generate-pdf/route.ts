import { GeneratePdfRequest } from "@/lib/types";
import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";

const TEMPLATE_PATH = "src/server/template.pdf";
const TEXT_X = 72;
const TEXT_Y = 125;
const TEXT_SIZE = 11;

export async function POST(request: Request) {
  const { name }: GeneratePdfRequest = await request.json();
  if (!name) return new Response("Missing name", { status: 400 });

  const fileBuffer = getFile();
  const fileName = generateFileName(name);
  const modifiedUintArray8 = await addTextToPdf(fileBuffer, name);

  return new Response(modifiedUintArray8, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Length": `${modifiedUintArray8.length}`,
      "X-File-Name": fileName,
    },
  });
}

const getFile = () => {
  const filePath = path.resolve(".", TEMPLATE_PATH);
  return fs.readFileSync(filePath);
};

function generateFileName(name: string) {
  return `${name.toLowerCase().replace(" ", "_")}_ib_jegyzokonyv.pdf`;
}

async function addTextToPdf(
  fileBuffer: Buffer,
  text: string
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(fileBuffer);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  firstPage.drawText(text, {
    x: TEXT_X,
    y: firstPage.getHeight() - TEXT_Y,
    size: TEXT_SIZE,
  });

  const modifiedPdfBytes = await pdfDoc.save();

  return modifiedPdfBytes;
}
