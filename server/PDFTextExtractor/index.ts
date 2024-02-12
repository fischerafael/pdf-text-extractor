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
