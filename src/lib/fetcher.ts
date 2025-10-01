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
  try {
    const { supabase } = await import("@/integrations/supabase/client");
    
    const { data, error } = await supabase.functions.invoke('fetch-page', {
      body: { url }
    });

    if (error) {
      console.error("Edge function error:", error);
      throw new FetchError(500, `Failed to fetch: ${error.message}`);
    }

    if (data.error) {
      throw new FetchError(data.status || 500, data.error);
    }

    return {
      html: data.html,
      url: data.url,
      status: data.status,
    };
  } catch (error) {
    if (error instanceof FetchError) {
      throw error;
    }
    
    throw new FetchError(500, `Failed to fetch: ${(error as Error).message}`);
  }
}
