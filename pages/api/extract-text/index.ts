import { pdfExtractor } from "@/server/PDFTextExtractor";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface Request extends NextApiRequest {
  file: any;
}

export default async function handler(req: Request, res: NextApiResponse) {
  try {
    await pdfExtractor.uploadPDFTemp(req, res);
    const data = await pdfExtractor.parsePDFFile(req.file);
    return res.status(200).json({ data: data });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
