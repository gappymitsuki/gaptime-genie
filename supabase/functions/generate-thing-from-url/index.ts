import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Anthropic from "npm:@anthropic-ai/sdk@0.24.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// ThingToDo type definition
interface ThingToDo {
  title: string;
  shortTitle?: string;
  description: string;
  durationMinutes: number | null;
  minPriceJpy?: number | null;
  maxPriceJpy?: number | null;
  category: "restaurant" | "beauty" | "activity" | "other";
  tags: string[];
  location: {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
  };
  languageHints?: string[];
  sourceUrl: string;
  notes?: string;
}

// Helper function to fetch HTML using fetch-page function
async function fetchHTML(url: string): Promise<{ html: string; finalUrl: string }> {
  const response = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/fetch-page`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`,
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch HTML: ${response.status}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return {
    html: data.html,
    finalUrl: data.url,
  };
}

// Extract basic info from HTML
function extractBasicInfo(html: string, url: string): {
  rawTitle: string;
  rawDescription: string;
  price: number | null;
  duration: number | null;
  address: string | null;
  lat: number | null;
  lng: number | null;
  storeName: string | null;
} {
  // Remove scripts and styles
  const cleanText = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Extract title
  const titleMatch = cleanText.match(/<title[^>]*>([^<]+)<\/title>/i);
  const rawTitle = titleMatch ? titleMatch[1].trim() : "Experience";

  // Extract meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const rawDescription = descMatch ? descMatch[1].trim() : "";

  // Extract price (simple regex for Japanese yen)
  const priceMatch = cleanText.match(/[¥￥][\s]*([0-9,]+)/);
  const price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, ''), 10) : null;

  // Extract duration (minutes)
  const durationMatch = cleanText.match(/(\d+)\s*(分|min|mins|minutes)/i);
  const duration = durationMatch ? parseInt(durationMatch[1], 10) : null;

  // Extract address (Japanese postal code pattern)
  const addressMatch = cleanText.match(/〒?\s*\d{3}-?\d{4}\s*[^\n<]+/);
  const address = addressMatch ? addressMatch[0].trim() : null;

  // Extract coordinates from Google Maps URLs or structured data
  let lat: number | null = null;
  let lng: number | null = null;
  const coordMatch = html.match(/["']?lat["']?\s*[:=]\s*["']?(-?\d+\.?\d*)["']?\s*,?\s*["']?lng["']?\s*[:=]\s*["']?(-?\d+\.?\d*)["']?/i);
  if (coordMatch) {
    lat = parseFloat(coordMatch[1]);
    lng = parseFloat(coordMatch[2]);
  }

  // Extract store/venue name
  const h1Match = cleanText.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const storeName = h1Match ? h1Match[1].trim() : null;

  return {
    rawTitle,
    rawDescription,
    price,
    duration,
    address,
    lat,
    lng,
    storeName,
  };
}

// Snap duration to valid values
function snapDuration(duration: number | null): number | null {
  if (!duration) return null;

  const validDurations = [15, 30, 45, 60, 90, 120];

  // Find the closest valid duration
  let closest = validDurations[0];
  let minDiff = Math.abs(duration - closest);

  for (const valid of validDurations) {
    const diff = Math.abs(duration - valid);
    if (diff < minDiff) {
      closest = valid;
      minDiff = diff;
    }
  }

  return closest;
}

// Generate attractive content using Claude API
async function generateContent(
  basicInfo: ReturnType<typeof extractBasicInfo>,
  url: string
): Promise<{
  title: string;
  shortTitle: string;
  description: string;
  category: "restaurant" | "beauty" | "activity" | "other";
  tags: string[];
  languageHints: string[];
  notes: string;
}> {
  const anthropic = new Anthropic({
    apiKey: Deno.env.get('ANTHROPIC_API_KEY'),
  });

  const prompt = `You are a travel content writer specializing in creating compelling "Things to Do" entries for travelers in Japan.

Based on the following information extracted from a webpage, create an attractive "Thing to Do" entry:

Raw Title: ${basicInfo.rawTitle}
Raw Description: ${basicInfo.rawDescription || "N/A"}
Store/Venue Name: ${basicInfo.storeName || "N/A"}
Price: ${basicInfo.price ? `¥${basicInfo.price}` : "N/A"}
Duration: ${basicInfo.duration ? `${basicInfo.duration} minutes` : "N/A"}
Address: ${basicInfo.address || "N/A"}
URL: ${url}

Please provide a JSON response with the following fields:

1. "title": An engaging, verb-led English title (e.g., "Enjoy Authentic Ramen Making", "Experience Traditional Tea Ceremony", "Discover Hidden Izakaya Gems"). Keep it under 60 characters.

2. "shortTitle": A shorter version (under 30 characters) suitable for cards/buttons.

3. "description": A compelling 200-400 character description in English that:
   - Explains what the visitor will experience
   - Highlights unique aspects or cultural significance
   - Mentions practical details (duration, difficulty level if relevant)
   - Uses engaging, active language

4. "category": One of: "restaurant", "beauty", "activity", or "other"

5. "tags": Array of 3-5 relevant tags (e.g., ["authentic", "cultural", "solo-friendly", "couple-friendly", "family-friendly", "nightlife", "daytime", "indoor", "outdoor", "walk-in"])

6. "languageHints": Array of supported languages (e.g., ["English", "Japanese"], ["Japanese only"])

7. "notes": Brief practical notes (e.g., "Reservation recommended", "Walk-ins welcome", "English menu available", "Rain or shine")

Return ONLY valid JSON without any markdown formatting or code blocks.`;

  const message = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: prompt,
    }],
  });

  const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

  // Parse JSON response
  let parsedResponse;
  try {
    parsedResponse = JSON.parse(responseText);
  } catch (e) {
    // If parsing fails, try to extract JSON from markdown code blocks
    const jsonMatch = responseText.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
    if (jsonMatch) {
      parsedResponse = JSON.parse(jsonMatch[1]);
    } else {
      throw new Error("Failed to parse AI response as JSON");
    }
  }

  return {
    title: parsedResponse.title || "Experience Japan",
    shortTitle: parsedResponse.shortTitle || "Experience",
    description: parsedResponse.description || "A unique experience in Japan",
    category: parsedResponse.category || "other",
    tags: parsedResponse.tags || [],
    languageHints: parsedResponse.languageHints || ["Japanese"],
    notes: parsedResponse.notes || "",
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Generating Thing to Do for URL:', url);

    // Step 1: Fetch HTML
    const { html, finalUrl } = await fetchHTML(url);
    console.log('HTML fetched, size:', html.length);

    // Step 2: Extract basic information
    const basicInfo = extractBasicInfo(html, finalUrl);
    console.log('Basic info extracted:', {
      title: basicInfo.rawTitle,
      price: basicInfo.price,
      duration: basicInfo.duration,
    });

    // Step 3: Generate content with AI
    const generatedContent = await generateContent(basicInfo, finalUrl);
    console.log('Content generated:', {
      title: generatedContent.title,
      category: generatedContent.category,
    });

    // Step 4: Build ThingToDo object
    const snappedDuration = snapDuration(basicInfo.duration);

    const thingToDo: ThingToDo = {
      title: generatedContent.title,
      shortTitle: generatedContent.shortTitle,
      description: generatedContent.description,
      durationMinutes: snappedDuration,
      minPriceJpy: basicInfo.price,
      maxPriceJpy: basicInfo.price ? Math.round(basicInfo.price * 1.2) : null, // Estimate max as 20% higher
      category: generatedContent.category,
      tags: generatedContent.tags,
      location: {
        name: basicInfo.storeName || undefined,
        address: basicInfo.address || undefined,
        lat: basicInfo.lat || undefined,
        lng: basicInfo.lng || undefined,
      },
      languageHints: generatedContent.languageHints,
      sourceUrl: finalUrl,
      notes: generatedContent.notes,
    };

    console.log('ThingToDo generated successfully');

    return new Response(
      JSON.stringify(thingToDo),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in generate-thing-from-url function:', error);
    return new Response(
      JSON.stringify({
        error: (error as Error).message || 'Internal server error',
        details: (error as Error).stack,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
