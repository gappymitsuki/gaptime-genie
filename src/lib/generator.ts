import { GenerateRequest, GenerateResponse, Activity } from "./schema";
import { fetchPage } from "./fetcher";
import { extractStructuredData } from "./extractors/structured";
import { getDomainAdapter, ExtractedData } from "./extractors/adapters";
import { 
  extractPriceFromText, 
  extractDurationFromText, 
  extractHoursFromText, 
  extractAddressFromText,
  snapDuration 
} from "./parsers/heuristics";
import { composeContent } from "./composer";
import { generateMarkdown } from "./markdown";

export async function generateActivity(request: GenerateRequest): Promise<GenerateResponse> {
  // Step 1: Fetch the page
  const fetchResult = await fetchPage(request.url);
  const { html, url: finalUrl } = fetchResult;

  // Step 2: Extract structured data
  const structuredData = extractStructuredData(html);

  // Step 3: Try domain-specific adapter
  const urlObj = new URL(finalUrl);
  const domain = urlObj.hostname;
  const adapter = getDomainAdapter(domain);
  
  let extractedData: ExtractedData = {
    raw_title: null,
    price: null,
    duration: null,
    address: null,
    hours: null,
    hero_image: null,
  };

  if (adapter) {
    extractedData = adapter(html);
  }

  // Step 4: Fallback to heuristics for missing data
  const rawText = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
                      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
                      .replace(/<[^>]+>/g, " ");

  if (!extractedData.raw_title) {
    extractedData.raw_title = structuredData.title || "Experience";
  }

  if (!extractedData.price) {
    extractedData.price = extractPriceFromText(rawText);
  }

  if (!extractedData.duration) {
    extractedData.duration = extractDurationFromText(rawText);
  }

  if (!extractedData.address) {
    extractedData.address = structuredData.address || extractAddressFromText(rawText);
  }

  if (!extractedData.hours) {
    extractedData.hours = extractHoursFromText(rawText);
  }

  if (!extractedData.hero_image) {
    extractedData.hero_image = structuredData.image || null;
  }

  // Step 5: Apply overrides
  const overrides = request.overrides || {};
  
  if (overrides.title_en) {
    extractedData.raw_title = overrides.title_en;
  }
  if (overrides.duration_min) {
    extractedData.duration = overrides.duration_min;
  }
  if (overrides.price_from_yen) {
    extractedData.price = overrides.price_from_yen;
  }
  if (overrides.location_address) {
    extractedData.address = overrides.location_address;
  }
  if (overrides.hours_text) {
    extractedData.hours = overrides.hours_text;
  }
  if (overrides.hero_image) {
    extractedData.hero_image = overrides.hero_image;
  }

  // Step 6: Normalize duration (snap to nearest valid value or default to 30)
  let normalizedDuration = extractedData.duration;
  if (normalizedDuration) {
    normalizedDuration = snapDuration(normalizedDuration);
  } else {
    normalizedDuration = 30; // Default
  }

  // Step 7: Compose content
  const composed = composeContent(
    extractedData.raw_title,
    extractedData.price,
    normalizedDuration,
    extractedData.address,
    request.mvp_mode
  );

  // Step 8: Build activity object
  const activity: Activity = {
    title: composed.title,
    slug: composed.slug,
    price_yen: extractedData.price,
    duration_min: normalizedDuration,
    hero_image: extractedData.hero_image,
    quick_overview: composed.quick_overview,
    what_youll_do_steps: composed.what_youll_do_steps,
    whats_included: composed.whats_included,
    perfect_for: composed.perfect_for,
    location_address: extractedData.address,
    hours_text: extractedData.hours,
    notes: composed.notes,
    cta_text: "Go Now !!",
    lead_capture_enabled: true,
    source: {
      url: finalUrl,
      domain,
    },
  };

  // Step 9: Generate markdown
  const markdown = generateMarkdown(activity);

  return {
    ...activity,
    markdown,
  };
}
