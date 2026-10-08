import { setCorsHeaders } from "./_supabase";

interface ServerlessRequest {
  method?: string;
}

interface ServerlessResponse {
  setHeader?: (key: string, value: string) => void;
  status: (code: number) => { json: (data: unknown) => void };
}

export default async function handler(req: ServerlessRequest, res: ServerlessResponse) {
  setCorsHeaders(res);
  return res.status(200).json({
    status: "healthy",
    framework: "Vercel Serverless Function",
    timestamp: new Date().toISOString(),
  });
}
