// This is a placeholder for the actual API route
// In Next.js App Router, this would be at app/api/generate/route.ts
// For this React+Vite app, we'll simulate it with a client-side service

import { GenerateRequest, GenerateResponse, ErrorResponse } from "@/lib/schema";
import { generateActivity } from "@/lib/generator";

export async function generateFromUrl(request: GenerateRequest): Promise<GenerateResponse> {
  try {
    return await generateActivity(request);
  } catch (error) {
    console.error("Generation error:", error);
    throw error;
  }
}
