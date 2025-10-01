interface ComposedContent {
  title: string;
  slug: string;
  quick_overview: string;
  what_youll_do_steps: string[];
  whats_included: string[];
  perfect_for: string[];
  notes: string;
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
  price: number | null,
  duration: number | null,
  address: string | null,
  mvpMode: boolean
): ComposedContent {
  // Generate English title with verb
  const baseTitle = rawTitle || "Experience";
  const verb = getRandomVerb();
  const durationText = duration ? ` (${duration} min)` : " (30 min)";
  const title = `${verb} ${baseTitle}${durationText}`;
  
  // Generate slug
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Quick overview
  const quick_overview = 
    "A quick, hands-on mini experience designed for gap time. Pay at store; timing may be adjusted on arrival.";

  // What you'll do
  const what_youll_do_steps = [
    "Check in at the counter (show your QR).",
    "Enjoy the core experience guided by staff.",
    "Wrap up with a quick tip or photo."
  ];

  // What's included
  const whats_included = [
    "Guidance",
    "Essential tools or amenities",
    "Quick tasting or takeaway (if applicable)"
  ];

  // Perfect for
  const perfect_for = [
    "Travelers on the go",
    "Solo explorers",
    "Anyone with 30–60 minutes"
  ];

  // Notes (MVP disclaimers)
  let notes = "Walk-in friendly / Time not guaranteed.";
  if (price && mvpMode) {
    notes += ` From ¥${price.toLocaleString()} (pay at store).`;
  }

  return {
    title,
    slug,
    quick_overview,
    what_youll_do_steps,
    whats_included,
    perfect_for,
    notes,
  };
}
