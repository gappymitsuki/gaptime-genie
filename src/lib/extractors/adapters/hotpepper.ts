export interface ExtractedData {
  raw_title: string | null;
  price: number | null;
  duration: number | null;
  address: string | null;
  hours: string | null;
  hero_image: string | null;
}

export function extractHotPepperData(html: string): ExtractedData {
  const data: ExtractedData = {
    raw_title: null,
    price: null,
    duration: null,
    address: null,
    hours: null,
    hero_image: null,
  };

  // Title extraction
  const titleMatch = html.match(/<h1[^>]*class=["'][^"']*slnName[^"']*["'][^>]*>([^<]+)<\/h1>/i) ||
                     html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (titleMatch) data.raw_title = titleMatch[1].trim();

  // Price extraction (look for menu items with yen)
  const priceMatches = html.matchAll(/[¥￥円]\s*([0-9,]+)/g);
  const prices: number[] = [];
  for (const match of priceMatches) {
    const price = parseInt(match[1].replace(/,/g, ""), 10);
    if (!isNaN(price) && price > 0) prices.push(price);
  }
  if (prices.length > 0) data.price = Math.min(...prices);

  // Duration extraction (look for 分 or minutes)
  const durationMatch = html.match(/(\d+)\s*[分]/);
  if (durationMatch) data.duration = parseInt(durationMatch[1], 10);

  // Address extraction
  const addressMatch = html.match(/<p[^>]*class=["'][^"']*adr[^"']*["'][^>]*>([^<]+)<\/p>/i) ||
                       html.match(/<span[^>]*itemprop=["']address["'][^>]*>([^<]+)<\/span>/i) ||
                       html.match(/住所[：:]\s*([^<\n]+)/i);
  if (addressMatch) data.address = addressMatch[1].trim();

  // Hours extraction
  const hoursMatch = html.match(/営業時間[：:]\s*([^<\n]+)/i) ||
                    html.match(/受付時間[：:]\s*([^<\n]+)/i);
  if (hoursMatch) data.hours = hoursMatch[1].trim();

  // Hero image
  const imageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i) ||
                    html.match(/<img[^>]*class=["'][^"']*mainPhoto[^"']*["'][^>]*src=["']([^"']*)["']/i);
  if (imageMatch) data.hero_image = imageMatch[1];

  return data;
}
