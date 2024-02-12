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

import multer from "multer";
import pdfParse from "pdf-parse";
import fs from "fs";

class TextExtractor {
  private upload = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 20 * 1024 * 1024 }, // Limit file size to 1MB
  });

  uploadPDFTemp = async (req: any, res: any) => {
    await new Promise((resolve, reject) => {
      this.upload.single("file")(req as any, res as any, (err: any) => {
        if (err instanceof multer.MulterError) {
          console.error(err);
          return reject({ status: 400, message: "File upload error" });
        }
        if (err) {
          console.error(err);
          return reject({ status: 500, message: "Internal server error" });
        }
        resolve("");
      });
    });
  };

  parsePDFFile = async (file: any) => {
    const fileBuffer = fs.readFileSync(file.path);
    const data = await pdfParse(fileBuffer);
    return data;
  };
}

export const pdfExtractor = new TextExtractor();
