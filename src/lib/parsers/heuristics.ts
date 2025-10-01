const DURATION_SNAPSHOTS = [15, 30, 45, 60, 90];

export function extractPriceFromText(text: string): number | null {
  const priceMatches = text.matchAll(/[¥￥円]\s*([0-9,]+)/g);
  const prices: number[] = [];
  
  for (const match of priceMatches) {
    const price = parseInt(match[1].replace(/,/g, ""), 10);
    if (!isNaN(price) && price > 0 && price < 100000) {
      prices.push(price);
    }
  }
  
  return prices.length > 0 ? Math.min(...prices) : null;
}

export function extractDurationFromText(text: string): number | null {
  // Look for patterns like "30分", "30 minutes", "30min"
  const durationMatch = text.match(/(\d+)\s*(?:分|min|minutes?)/i);
  
  if (durationMatch) {
    const duration = parseInt(durationMatch[1], 10);
    return snapDuration(duration);
  }
  
  return null;
}

export function snapDuration(duration: number): number {
  // Find the closest snapshot value
  return DURATION_SNAPSHOTS.reduce((closest, snapshot) => {
    return Math.abs(snapshot - duration) < Math.abs(closest - duration) ? snapshot : closest;
  });
}

export function extractHoursFromText(text: string): string | null {
  // Look for patterns like "営業時間", "Open", "Hours", "受付"
  const patterns = [
    /(?:営業時間|受付時間|Open|Hours)[：:\s]*([^\n<]+)/i,
    /(\d{1,2}:\d{2}\s*[-~]\s*\d{1,2}:\d{2})/,
  ];
  
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1].trim();
  }
  
  return null;
}

export function extractAddressFromText(text: string): string | null {
  // Look for Japanese addresses (prefecture + city)
  const prefectures = [
    "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
    "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
    "岐阜県", "静岡県", "愛知県", "三重県",
    "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
    "鳥取県", "島根県", "岡山県", "広島県", "山口県",
    "徳島県", "香川県", "愛媛県", "高知県",
    "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
  ];
  
  const prefecturePattern = prefectures.join("|");
  const addressMatch = text.match(new RegExp(`(${prefecturePattern}[^\\n<]{10,80})`, "i"));
  
  if (addressMatch) return addressMatch[1].trim();
  
  // Fallback: look for Tokyo, Osaka, Kyoto mentions
  const cityMatch = text.match(/(Tokyo|Osaka|Kyoto|Shibuya|Shinjuku|Roppongi)[^<\n]{10,60}/i);
  if (cityMatch) return cityMatch[0].trim();
  
  return null;
}
