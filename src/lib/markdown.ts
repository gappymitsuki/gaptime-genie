import { Activity } from "./schema";

export function generateMarkdown(activity: Activity): string {
  const lines: string[] = [];

  // Title
  lines.push(`# ${activity.title}`);
  lines.push("");

  // Price, Duration, Location (one line)
  const details: string[] = [];
  if (activity.price_yen) details.push(`¥${activity.price_yen.toLocaleString()}`);
  if (activity.duration_min) details.push(`${activity.duration_min} minutes`);
  if (activity.location_address) details.push(activity.location_address);
  
  if (details.length > 0) {
    lines.push(`**${details.join(" • ")}**`);
    lines.push("");
  }

  // Quick Overview
  lines.push("## Quick Overview");
  lines.push(activity.quick_overview);
  lines.push("");

  // What You'll Do
  lines.push("## What You'll Do");
  activity.what_youll_do_steps.forEach((step, i) => {
    lines.push(`${i + 1}. ${step}`);
  });
  lines.push("");

  // What's Included
  lines.push("## What's Included");
  activity.whats_included.forEach(item => {
    lines.push(`- ${item}`);
  });
  lines.push("");

  // Perfect For
  lines.push("## Perfect For");
  activity.perfect_for.forEach(item => {
    lines.push(`- ${item}`);
  });
  lines.push("");

  // Notes
  if (activity.notes) {
    lines.push("## Important Notes");
    lines.push(activity.notes);
    lines.push("");
  }

  // Experience Information
  lines.push("## Experience Information");
  if (activity.location_address) {
    lines.push(`**Address:** ${activity.location_address}`);
  }
  if (activity.hours_text) {
    lines.push(`**Hours:** ${activity.hours_text}`);
  }
  lines.push("");

  // CTA
  lines.push(`**${activity.cta_text}**`);

  return lines.join("\n");
}
