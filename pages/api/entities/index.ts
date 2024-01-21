import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    return res.status(200).json({ name: "John Doe" });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
