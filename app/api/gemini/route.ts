import { SYSTEM_PROMPT } from "@/data/gemini";
import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const runtime = "edge";

const generateID = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generateID(),
    role: "user",
    content: SYSTEM_PROMPT,
  },
  ...messages.map((message) => ({
    id: message.id || generateID(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("Received messages:", messages);

    const stream = await streamText({
      model: google("gemini-1.5-flash"),
      messages: buildGoogleGenAIPrompt(messages),
    });

    console.log("Stream created successfully");
    return stream.toDataStreamResponse();
  } catch (error) {
    console.error("Error in Gemini API:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate response" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
