import { GeneratePdfRequest } from "@/lib/types";
import fontkit from "@pdf-lib/fontkit";
import dayjs from "dayjs";
import { PDFDocument } from "pdf-lib";

const TEMPLATE_URL =
  "https://cdn.discordapp.com/attachments/1196170300321185876/1196170339818930217/INNOPAY_IB_CERT_TEMPLATE.pdf?ex=65b6a770&is=65a43270&hm=f57061e74f82937dce77a0ac9be09a122c4fbd89198ab0009a0325099ee76a77&";
const FONT_URL =
  "https://cdn.discordapp.com/attachments/1196170300321185876/1196170340104155327/Inter-Regular.ttf?ex=65b6a770&is=65a43270&hm=89188c4c54aabefe8be40500b6d9afaf47841ea28639216158a88d552d2e7672&";

export async function POST(request: Request) {
  const { name }: GeneratePdfRequest = await request.json();
  if (!name) return new Response("Missing name", { status: 400 });

  const fileBuffer = await getFile(TEMPLATE_URL);
  const fileName = encodeURI(generateFileName(name));
  const modifiedUintArray8 = await addTextToPdf(fileBuffer, name, new Date());

  return new Response(modifiedUintArray8, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Length": `${modifiedUintArray8.length}`,
      "X-File-Name": fileName,
    },
  });
}

const getFile = async (url: string): Promise<Buffer> => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

function generateFileName(name: string) {
  return `${name.toLowerCase().replace(" ", "_")}_ib_jegyzokonyv.pdf`;
}

async function addTextToPdf(
  fileBuffer: Buffer,
  name: string,
  now: Date
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(fileBuffer);
  pdfDoc.registerFontkit(fontkit);

  const fontResponse = await fetch(FONT_URL);
  const fontArrayBuffer = await fontResponse.arrayBuffer();
  const fontBytes = new Uint8Array(fontArrayBuffer);

  const customFont = await pdfDoc.embedFont(fontBytes);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  const expirationDate = dayjs(now).add(364, "day").format("YYYY. MM. DD.");
  const date = "Budapest, " + dayjs(now).format("YYYY. MM. DD.");

  // Name
  firstPage.drawText(name, {
    x: 200,
    y: firstPage.getHeight() - 326,
    size: 14,
    font: customFont,
  });

  // Expire date
  firstPage.drawText(expirationDate, {
    x: 190,
    y: firstPage.getHeight() - 470,
    size: 14,
    font: customFont,
  });

  // Date
  firstPage.drawText(date, {
    x: 108,
    y: firstPage.getHeight() - 523,
    size: 14,
    font: customFont,
  });

  const modifiedPdfBytes = await pdfDoc.save();

  return modifiedPdfBytes;
}
