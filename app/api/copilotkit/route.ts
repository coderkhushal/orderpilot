import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/backend";

export async function POST(req: Request): Promise<Response> {
  const copilotKit = new CopilotRuntime();
  console.log("this is request")
  return copilotKit.response(req, new OpenAIAdapter({model: process.env.OPENAI_MODEL} ));
}
export async function GET(req: Request){
  return new Response("Hello World");
}
