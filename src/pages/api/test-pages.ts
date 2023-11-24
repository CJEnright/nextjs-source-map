import type { NextApiRequest, NextApiResponse } from "next";

require("source-map-support").install();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(new Error().stack);

  return res.status(200).json({ ok: true });
}
