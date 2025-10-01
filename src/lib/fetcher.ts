export interface FetchResult {
  html: string;
  url: string;
  status: number;
}

export class FetchError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "FetchError";
  }
}

export async function fetchPage(url: string): Promise<FetchResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; GaptimeBot/1.0; +https://gaptime.app/bot)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
      },
      signal: controller.signal,
      redirect: "follow",
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new FetchError(response.status, `HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    
    return {
      html,
      url: response.url, // final URL after redirects
      status: response.status,
    };
  } catch (error) {
    clearTimeout(timeout);
    
    if (error instanceof FetchError) {
      throw error;
    }
    
    if ((error as Error).name === "AbortError") {
      throw new FetchError(408, "Request timeout after 12 seconds");
    }
    
    throw new FetchError(500, `Failed to fetch: ${(error as Error).message}`);
  }
}
