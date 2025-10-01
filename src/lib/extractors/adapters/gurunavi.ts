import { ExtractedData } from "./hotpepper";

export function extractGurunaviData(html: string): ExtractedData {
  const data: ExtractedData = {
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

  // Title
  const titleMatch = html.match(/<h1[^>]*class=["'][^"']*restaurant-name[^"']*["'][^>]*>([^<]+)<\/h1>/i) ||
                     html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (titleMatch) data.raw_title = titleMatch[1].trim();

  // Price
  const priceMatches = html.matchAll(/[¥￥円]\s*([0-9,]+)/g);
  const prices: number[] = [];
  for (const match of priceMatches) {
    const price = parseInt(match[1].replace(/,/g, ""), 10);
    if (!isNaN(price) && price > 0) prices.push(price);
  }
  if (prices.length > 0) data.price = Math.min(...prices);

  // Duration - typically not listed
  
  // Address
  const addressMatch = html.match(/住所[：:]\s*([^<\n]+)/i);
  if (addressMatch) data.address = addressMatch[1].trim();

  // Hours
  const hoursMatch = html.match(/営業時間[：:]\s*([^<\n]+)/i);
  if (hoursMatch) data.hours = hoursMatch[1].trim();

  // Store name
  const storeMatch = html.match(/<h1[^>]*class=["'][^"']*restaurant-name[^"']*["'][^>]*>([^<]+)<\/h1>/i);
  if (storeMatch) data.store_name = storeMatch[1].trim();

  // Image
  const imageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
  if (imageMatch) data.hero_image = imageMatch[1];

  // Extract multiple images
  const imageMatches = html.matchAll(/<img[^>]*src=["']([^"']*(?:jpg|jpeg|png|webp)[^"']*)["']/gi);
  for (const match of imageMatches) {
    const imgUrl = match[1];
    if (imgUrl && imgUrl.startsWith('http') && !data.images.includes(imgUrl)) {
      data.images.push(imgUrl);
    }
  }

  // Coordinates
  const latMatch = html.match(/latitude["']?\s*[:=]\s*["']?(-?\d+\.?\d*)["']?/i);
  const lngMatch = html.match(/longitude["']?\s*[:=]\s*["']?(-?\d+\.?\d*)["']?/i);
  if (latMatch) data.lat = parseFloat(latMatch[1]);
  if (lngMatch) data.lng = parseFloat(lngMatch[1]);

  return data;
}
