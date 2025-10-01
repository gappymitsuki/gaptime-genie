import { ExtractedData } from "./hotpepper";

export function extractTabelogData(html: string): ExtractedData {
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
  const titleMatch = html.match(/<h1[^>]*class=["'][^"']*display-name[^"']*["'][^>]*>([^<]+)<\/h1>/i) ||
                     html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (titleMatch) data.raw_title = titleMatch[1].trim();

  // Price (average budget)
  const priceMatch = html.match(/[¥￥円]\s*([0-9,]+)\s*～\s*[¥￥円]\s*([0-9,]+)/);
  if (priceMatch) {
    const price1 = parseInt(priceMatch[1].replace(/,/g, ""), 10);
    const price2 = parseInt(priceMatch[2].replace(/,/g, ""), 10);
    data.price = Math.min(price1, price2);
  }

  // Duration - typically not listed, will default
  
  // Address
  const addressMatch = html.match(/<p[^>]*class=["'][^"']*rstinfo-table__address[^"']*["'][^>]*>([^<]+)<\/p>/i) ||
                       html.match(/住所[：:]\s*([^<\n]+)/i);
  if (addressMatch) data.address = addressMatch[1].trim();

  // Hours
  const hoursMatch = html.match(/営業時間[：:]\s*([^<\n]+)/i);
  if (hoursMatch) data.hours = hoursMatch[1].trim();

  // Store name
  const storeMatch = html.match(/<h1[^>]*class=["'][^"']*display-name[^"']*["'][^>]*>([^<]+)<\/h1>/i);
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
