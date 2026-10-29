/**
 * Svavass — central site content.
 *
 * Everything marked `PLACEHOLDER` has NOT been verified with DFPL and must be
 * confirmed or replaced before launch: contact details, location, services,
 * residence configurations and testimonials. Keeping it all here means the
 * components never need to be touched to update copy.
 */

export const site = {
  name: 'Svavass',
  fullName: 'Svavass Senior Living',
  tagline: 'An Estate for Wellbeing & Senior Living',
  developer: 'DFPL',
  // PLACEHOLDER: production domain, used for canonical URLs, sitemap and OG tags.
  url: 'https://www.svavass.com',
  description:
    'Svavass by DFPL is an estate for wellbeing and senior living — calm, nature-led homes designed around independence, community and care.',
};

// PLACEHOLDER: replace every value below with verified contact details.
export const contact = {
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  whatsappHref: '', // e.g. 'https://wa.me/910000000000' — leave empty to hide
  email: 'enquiry@yourdomain.com',
  address: ['Site address to be announced', 'City, State — PIN'],
  visitingHours: 'Visits by appointment',
  mapHref: '', // Google Maps link — leave empty to hide the "Get directions" link
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'residences', label: 'Residences' },
  { id: 'care', label: 'Safety & Care' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'enquire', label: 'Contact' },
];

export const pillars = [
  {
    title: 'Room to breathe',
    text: 'Homes that open onto greenery, with quiet corners, morning light and unhurried paths to wander.',
  },
  {
    title: 'Company, when you want it',
    text: 'Shared tables, hobby circles and celebrations — and the freedom to close your door whenever you wish.',
  },
  {
    title: 'Care close at hand',
    text: 'Support that stays discreetly in the background, so independence always comes first.',
  },
];

// An illustrative rhythm of life — aspirational, not a published programme.
export const dayRhythm = [
  { time: 'Morning', title: 'Slow starts', text: 'A walk through the gardens, gentle stretching, tea on the verandah.' },
  { time: 'Afternoon', title: 'Shared pursuits', text: 'Reading, music, a game of chess or a hobby circle with friends.' },
  { time: 'Evening', title: 'Gathering in', text: 'Conversation over dinner, a quiet sunset, family on a video call.' },
];

export const lifestyle = [
  { img: 'walkBridge', alt: 'An older couple walking together along a wooden boardwalk through trees', title: 'Mornings outdoors', text: 'Shaded walks and green views to begin each day.' },
  { img: 'chess', alt: 'Older men playing chess at an outdoor table', title: 'Friendly rivalries', text: 'Board games, cards and long conversations.' },
  { img: 'album', alt: 'Three older friends laughing over a photo album', title: 'Stories worth sharing', text: 'Old photographs, new friendships.' },
  { img: 'flowersCouple', alt: 'A smiling older couple standing in a field of yellow flowers', title: 'Seasons in bloom', text: 'Gardens that change with every month.' },
];

// PLACEHOLDER: indicative amenities — confirm the final list with DFPL.
export const amenityFeatures = [
  { img: 'gardenPath', alt: 'A gravel garden path lined with flowering shrubs', title: 'Landscaped gardens', text: 'Planted walkways, seating alcoves and quiet green rooms.' },
  { img: 'spa', alt: 'Folded towels, a candle and fresh tulips in a calm wellness room', title: 'Wellness & recovery', text: 'Space for yoga, meditation, physiotherapy and rest.' },
  { img: 'dining', alt: 'A warmly lit dining room with timber tables and chairs', title: 'Community dining', text: 'Wholesome meals in a warm, sociable setting.' },
];

export const amenityList = [
  { icon: 'leaf', label: 'Walking trails' },
  { icon: 'lotus', label: 'Yoga & meditation' },
  { icon: 'book', label: 'Library & reading lounge' },
  { icon: 'palette', label: 'Hobby & craft studio' },
  { icon: 'music', label: 'Music & events hall' },
  { icon: 'cup', label: 'Café & tea garden' },
  { icon: 'water', label: 'Pool / hydrotherapy' },
  { icon: 'temple', label: 'Prayer & reflection space' },
];

// PLACEHOLDER: configurations, sizes and features are indicative only.
export const residences = [
  {
    id: 'studio',
    name: 'Garden Studio',
    img: 'readingNook',
    summary:
      'A light-filled, easy-to-manage home for those who want simplicity without compromise.',
    details: [
      ['Configuration', 'Studio'],
      ['Carpet area', 'To be confirmed'],
      ['Outlook', 'Garden facing (indicative)'],
    ],
  },
  {
    id: 'one',
    name: 'One-Bedroom Residence',
    img: 'livingRoom',
    summary:
      'A separate bedroom and generous living space — room for a reading chair, a writing desk and visiting family.',
    details: [
      ['Configuration', '1 bedroom'],
      ['Carpet area', 'To be confirmed'],
      ['Outlook', 'To be confirmed'],
    ],
  },
  {
    id: 'two',
    name: 'Two-Bedroom Residence',
    img: 'livingOpen',
    summary:
      'Open, airy living for couples or those who love to host, with space for a guest room or study.',
    details: [
      ['Configuration', '2 bedrooms'],
      ['Carpet area', 'To be confirmed'],
      ['Outlook', 'To be confirmed'],
    ],
  },
];

// Design intentions shown alongside residences. PLACEHOLDER: verify against final specifications.
export const residenceDesign = [
  'Step-free entrances and level thresholds',
  'Wide doorways and turning space',
  'Grab rails and non-slip bathroom flooring',
  'Easy-reach switches and good, glare-free lighting',
  'Emergency call points in key rooms',
];

// PLACEHOLDER: care services must be confirmed before publishing.
export const care = [
  { icon: 'bell', title: 'Emergency response', text: 'A responsive support team and call points throughout the home.' },
  { icon: 'heart', title: 'Health support', text: 'Access to wellness checks, medical tie-ups and assistance when needed.' },
  { icon: 'shield', title: 'Secure estate', text: 'Controlled entry and a watchful, familiar team on site.' },
  { icon: 'home', title: 'Everyday ease', text: 'Help with housekeeping, maintenance and the small things.' },
];

export const gallery = [
  { img: 'courtyard', alt: 'Manicured hedges and garden seating in a quiet residential courtyard', wide: true },
  { img: 'gardenFriends', alt: 'Two older women admiring pink peonies in a garden' },
  { img: 'livingOpen', alt: 'Open-plan living room with soft seating and garden views' },
  // Order matters: it packs the 4-column (desktop) and 2-column (mobile) grids without gaps.
  { img: 'pool', alt: 'Sun loungers beside a calm pool at dusk' },
  { img: 'greenWalk', alt: 'Two people walking along a shaded garden path', tall: true },
  { img: 'lakeside', alt: 'An older couple resting on a stone seat beside a lake under trees' },
  { img: 'vineyardCouple', alt: 'An older couple sitting together looking out over green hills' },
  { img: 'albumCouple', alt: 'An older couple smiling at each other on a sofa' },
  { img: 'benchView', alt: 'A couple on a bench overlooking the sea and distant hills', wide: true },
];

// PLACEHOLDER: replace with real, consented resident or family testimonials.
export const testimonials = [
  {
    quote:
      'Placeholder — replace with a verified resident testimonial about everyday life, community or peace of mind at Svavass.',
    name: 'Resident name',
    role: 'Resident · Placeholder',
  },
  {
    quote:
      'Placeholder — replace with a verified quote from a family member about the care, safety or reassurance they experience.',
    name: 'Family member name',
    role: 'Daughter of a resident · Placeholder',
  },
  {
    quote:
      'Placeholder — replace with a verified testimonial about the homes, gardens or the welcome from the Svavass team.',
    name: 'Resident name',
    role: 'Resident · Placeholder',
  },
];
