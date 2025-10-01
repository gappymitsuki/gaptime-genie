import { z } from "zod";

export const ActivitySchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  price_yen: z.number().nullable(),
  duration_min: z.number().nullable(),
  hero_image: z.string().url().nullable().or(z.null()),
  quick_overview: z.string(),
  what_youll_do_steps: z.array(z.string()),
  whats_included: z.array(z.string()),
  perfect_for: z.array(z.string()),
  location_address: z.string().nullable(),
  hours_text: z.string().nullable(),
  notes: z.string(),
  cta_text: z.string().default("Go Now !!"),
  lead_capture_enabled: z.boolean().default(true),
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
    hero_image: z.string().optional(),
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
