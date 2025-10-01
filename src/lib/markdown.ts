import { Activity } from "./schema";

export function generateMarkdown(activity: Activity): string {
  const lines: string[] = [];

  // Frontmatter
  lines.push('---');
  lines.push(`title: "${activity.title}"`);
  lines.push(`summary: "${activity.summary}"`);
  lines.push(`coverImage: ${activity.coverImage ? `"${activity.coverImage}"` : 'null'}`);
  lines.push(`price: ${activity.price || 'null'}`);
  lines.push(`motivationTags: [${activity.motivationTags.map(t => `"${t}"`).join(', ')}]`);
  lines.push(`duration: "${activity.duration}"`);
  lines.push(`locationFromStation: ${activity.locationFromStation ? `"${activity.locationFromStation}"` : 'null'}`);
  lines.push(`address: ${activity.address ? `"${activity.address}"` : 'null'}`);
  lines.push(`storeNameEn: ${activity.storeNameEn ? `"${activity.storeNameEn}"` : 'null'}`);
  
  if (activity.location && activity.location.lat && activity.location.lng) {
    lines.push('location:');
    lines.push(`  lat: ${activity.location.lat}`);
    lines.push(`  lng: ${activity.location.lng}`);
  } else {
    lines.push('location: null');
  }

  if (activity.mapIframe) {
    lines.push('mapIframe: |');
    activity.mapIframe.split('\n').forEach(line => {
      lines.push(`  ${line}`);
    });
  } else {
    lines.push('mapIframe: null');
  }

  if (activity.images.length > 0) {
    lines.push('images:');
    activity.images.forEach(img => {
      lines.push(`  - url: "${img.url}"`);
      lines.push(`    alt: "${img.alt}"`);
      lines.push(`    position: "${img.position}"`);
    });
  } else {
    lines.push('images: []');
  }

  lines.push('---');
  lines.push('');

  // Quick Overview
  lines.push('## Quick Overview');
  lines.push(activity.quick_overview);
  lines.push('');

  // What You'll Do
  lines.push("## What You'll Do");
  activity.what_youll_do_steps.forEach((step, i) => {
    lines.push(`- *Step ${i + 1}*: ${step}`);
  });
  lines.push('');

  // What's Included
  lines.push("## What's Included");
  activity.whats_included.forEach(item => {
    lines.push(`- ${item}`);
  });
  lines.push('');

  // Perfect For
  lines.push('## Perfect For');
  activity.perfect_for.forEach(item => {
    lines.push(`- ${item}`);
  });
  lines.push('');

  // Footer
  lines.push('---');
  lines.push('*Ready to join this amazing experience?* Click the coupon button below to get your discount and start your adventure.');

  return lines.join('\n');
}
