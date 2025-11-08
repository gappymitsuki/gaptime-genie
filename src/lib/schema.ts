import { z } from "zod";

export const ActivitySchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  summary: z.string(),
  coverImage: z.string().url().nullable(),
  price: z.number().nullable(),
  motivationTags: z.array(z.string()),
  duration: z.string(),
  locationFromStation: z.string().nullable(),
  address: z.string().nullable(),
  storeNameEn: z.string().nullable(),
  location: z.object({
    lat: z.number().nullable(),
    lng: z.number().nullable(),
  }).nullable(),
  mapIframe: z.string().nullable(),
  images: z.array(z.object({
    url: z.string().url(),
    alt: z.string(),
    position: z.string().default("object-center"),
  })),
  quick_overview: z.string(),
  what_youll_do_steps: z.array(z.string()),
  whats_included: z.array(z.string()),
  perfect_for: z.array(z.string()),
  hours_text: z.string().nullable(),
  source: z.object({
    url: z.string().url(),
    domain: z.string(),
  }),
  markdown: z.string().optional(),
});

export type Activity = z.infer<typeof ActivitySchema>;

export const GenerateRequestSchema = z.object({
  url: z.string().url("Valid URL is required"),
  overrides: z.object({
    title_en: z.string().optional(),
    duration_min: z.number().optional(),
    price_from_yen: z.number().optional(),
    location_address: z.string().optional(),
    hours_text: z.string().optional(),
    store_name_en: z.string().optional(),
  }).optional(),
  mvp_mode: z.boolean().default(true),
});

export type GenerateRequest = z.infer<typeof GenerateRequestSchema>;

export interface GenerateResponse extends Activity {
  markdown: string;
}

export interface ErrorResponse {
  error: string;
  details?: string;
}

// Things to Do Schema
export type ThingCategory = "restaurant" | "beauty" | "activity" | "other";

export interface ThingToDo {
  title: string;               // 動詞始まりの英語タイトル
  shortTitle?: string;         // カード用の短いタイトル
  description: string;         // 200〜400文字程度の説明（英語）
  durationMinutes: number | null; // 15 / 30 / 45 / 60 / 90 / 120 など
  minPriceJpy?: number | null;
  maxPriceJpy?: number | null;
  category: ThingCategory;
  tags: string[];              // ["nightlife","solo friendly","couple"] など
  location: {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
  };
  languageHints?: string[];    // 対応言語 ["English","Japanese"] など
  sourceUrl: string;
  notes?: string;              // 予約必須/雨の日OKなど
}
