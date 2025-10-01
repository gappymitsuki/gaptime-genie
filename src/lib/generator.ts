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
    images: [],
    lat: null,
    lng: null,
    store_name: null,
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

  // If no images extracted, use hero_image
  if (extractedData.images.length === 0 && extractedData.hero_image) {
    extractedData.images.push(extractedData.hero_image);
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
  if (overrides.store_name_en) {
    extractedData.store_name = overrides.store_name_en;
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
    normalizedDuration
  );

  // Step 7.5: Generate location info
  let locationFromStation: string | null = null;
  if (extractedData.address) {
    // Simple heuristic: extract station info if mentioned
    const stationMatch = extractedData.address.match(/(\d+)\s*min.*?from\s+([^,]+)/i);
    if (stationMatch) {
      locationFromStation = `${stationMatch[1]} min walk from ${stationMatch[2]}`;
    }
  }

  // Generate map iframe if coordinates available
  let mapIframe: string | null = null;
  if (extractedData.lat && extractedData.lng) {
    mapIframe = `<iframe
  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${extractedData.lat},${extractedData.lng}&language=en&region=JP"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`;
  }

  // Process images
  const images = extractedData.images.slice(0, 3).map((url, i) => ({
    url,
    alt: `${composed.title} - Image ${i + 1}`,
    position: "object-center" as const,
  }));

  // Step 8: Build activity object
  const activity: Activity = {
    title: composed.title,
    slug: composed.slug,
    summary: composed.summary,
    coverImage: extractedData.hero_image,
    price: extractedData.price,
    motivationTags: composed.motivationTags,
    duration: composed.duration,
    locationFromStation,
    address: extractedData.address,
    storeNameEn: extractedData.store_name,
    location: extractedData.lat && extractedData.lng ? {
      lat: extractedData.lat,
      lng: extractedData.lng,
    } : null,
    mapIframe,
    images,
    quick_overview: composed.quick_overview,
    what_youll_do_steps: composed.what_youll_do_steps,
    whats_included: composed.whats_included,
    perfect_for: composed.perfect_for,
    hours_text: extractedData.hours,
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
