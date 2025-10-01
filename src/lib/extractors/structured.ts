interface StructuredData {
  title?: string;
  description?: string;
  image?: string;
  price?: string;
  address?: string;
}

export function extractStructuredData(html: string): StructuredData {
  const data: StructuredData = {};

  // Extract JSON-LD
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  if (jsonLdMatches) {
    for (const match of jsonLdMatches) {
      try {
        const content = match.replace(/<script[^>]*>|<\/script>/gi, "").trim();
        const jsonLd = JSON.parse(content);
        
        if (jsonLd.name) data.title = jsonLd.name;
        if (jsonLd.description) data.description = jsonLd.description;
        if (jsonLd.image) {
          data.image = typeof jsonLd.image === "string" ? jsonLd.image : jsonLd.image?.url || jsonLd.image?.[0];
        }
        if (jsonLd.offers?.price) data.price = jsonLd.offers.price;
        if (jsonLd.address?.streetAddress || jsonLd.location?.address) {
          const addr = jsonLd.address || jsonLd.location?.address;
          data.address = typeof addr === "string" ? addr : 
            [addr.streetAddress, addr.addressLocality, addr.addressRegion].filter(Boolean).join(", ");
        }
      } catch (e) {
        // Ignore malformed JSON-LD
      }
    }
  }

  // Extract OpenGraph
  const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  if (ogTitle && !data.title) data.title = ogTitle[1];

  const ogDescription = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  if (ogDescription && !data.description) data.description = ogDescription[1];

  const ogImage = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
  if (ogImage && !data.image) data.image = ogImage[1];

  // Extract Twitter Card
  const twitterTitle = html.match(/<meta[^>]*name=["']twitter:title["'][^>]*content=["']([^"']*)["']/i);
  if (twitterTitle && !data.title) data.title = twitterTitle[1];

  const twitterImage = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']*)["']/i);
  if (twitterImage && !data.image) data.image = twitterImage[1];

  return data;
}
