import { handleProjectSubmission, ProjectFormPayload } from "../server/sheetsBackend.ts";

interface ServerlessRequest {
  method?: string;
  body?: ProjectFormPayload;
}

interface ServerlessResponse {
  status: (code: number) => { json: (data: unknown) => void };
}

export default async function handler(req: ServerlessRequest, res: ServerlessResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const result = await handleProjectSubmission(req.body || {});
    return res.status(result.status || (result.success ? 200 : 400)).json({
      success: result.success,
      message: result.message,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[Vercel API] Error in /api/start-project:", error.message);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while processing your project brief.",
    });
  }
}
