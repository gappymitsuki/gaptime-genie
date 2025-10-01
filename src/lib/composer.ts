interface ComposedContent {
  title: string;
  slug: string;
  summary: string;
  duration: string;
  motivationTags: string[];
  quick_overview: string;
  what_youll_do_steps: string[];
  whats_included: string[];
  perfect_for: string[];
}

const TITLE_VERBS = [
  "Try", "Enjoy", "Make", "Write", "Flip", "Sip", "Ride", 
  "Whisk", "Taste", "Grill", "Experience", "Discover", "Learn"
];

function getRandomVerb(): string {
  return TITLE_VERBS[Math.floor(Math.random() * TITLE_VERBS.length)];
}

export function composeContent(
  rawTitle: string | null,
  duration: number | null
): ComposedContent {
  // Generate English title with verb
  const baseTitle = rawTitle || "Experience";
  const verb = getRandomVerb();
  const title = `${verb} ${baseTitle}`;
  
  // Generate slug
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Summary
  const summary = `A ${duration || 30}-minute ${baseTitle.toLowerCase()} experience in the heart of Tokyo`;

  // Duration text
  const durationText = `${duration || 30} min`;

  // Motivation tags
  const motivationTags = ["culture-heritage", "taste-local-flavors"];

  // Quick overview
  const quick_overview = 
    "A quick, hands-on mini experience designed for gap time. Perfect for travelers looking to immerse themselves in authentic Japanese culture during their visit.";

  // What you'll do
  const what_youll_do_steps = [
    "Check in at the counter and meet your guide",
    "Enjoy the core experience with hands-on activities",
    "Wrap up with a quick souvenir or photo opportunity"
  ];

  // What's included
  const whats_included = [
    "Professional guidance throughout the experience",
    "All necessary tools and materials",
    "Complimentary refreshments or tasting (where applicable)"
  ];

  // Perfect for
  const perfect_for = [
    "Travelers interested in authentic Japanese culture",
    "Families with children (ages 6+)",
    "First-time visitors to Tokyo",
    "Anyone with 30-60 minutes of free time"
  ];

  return {
    title,
    slug,
    summary,
    duration: durationText,
    motivationTags,
    quick_overview,
    what_youll_do_steps,
    whats_included,
    perfect_for,
  };
}
