/**
 * Svavass — central site content.
 *
 * Everything marked `PLACEHOLDER` has NOT been verified with DFPL and must be
 * confirmed or replaced before launch: contact details, location, services,
 * residence configurations, developer facts and testimonials. Keeping it all
 * here means the components never need to be touched to update copy.
 */

export const site = {
  name: 'Svavass',
  fullName: 'Svavass Senior Living',
  tagline: 'A New Chapter Called Home',
  developer: 'DFPL Builders',
  // PLACEHOLDER: production domain, used for canonical URLs, sitemap and OG tags.
  url: 'https://www.svavass.com',
  description:
    'Svavass Senior Living by DFPL Builders — thoughtfully designed residences for a healthier, happier and more independent later life, with care close at hand and a community to belong to.',
};

// PLACEHOLDER: replace every value below with verified contact details.
export const contact = {
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  whatsappHref: '', // e.g. 'https://wa.me/910000000000' — leave empty to hide
  email: 'enquiry@svavass.com',
  address: ['Site address to be announced', 'City, State — PIN'],
  visitingHours: 'Every day, 10 am – 6 pm, by appointment',
  mapHref: '', // Google Maps link — leave empty to hide the "Get directions" link
};

export const nav = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About DFPL' },
  { id: 'svavass', label: 'Svavass' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'location', label: 'Location' },
  { id: 'enquire', label: 'Contact' },
];

// PLACEHOLDER: "24x7" and healthcare claims must be confirmed with DFPL.
export const highlights = [
  { icon: 'leaf', label: 'Peaceful', sub: 'surroundings' },
  { icon: 'shield', label: '24×7 care', sub: '& security' },
  { icon: 'home', label: 'Premium', sub: 'residences' },
  { icon: 'people', label: 'Active & social', sub: 'community' },
  { icon: 'heart', label: 'Healthcare', sub: 'support' },
  { icon: 'lotus', label: 'Designed for', sub: 'a better tomorrow' },
];

export const projectFacts = [
  { title: 'Premium', text: 'residences' },
  { title: 'Everyday', text: 'amenities on site' },
  { title: 'Serene', text: 'green spaces' },
  { title: 'A supportive,', text: 'like-minded community' },
];

// PLACEHOLDER: indicative — confirm the final amenity list with DFPL.
export const living = [
  {
    icon: 'lotus',
    img: 'yogaLawn',
    alt: 'An older man and woman meditating cross-legged on a lawn',
    title: 'Health & wellness',
    text: 'Morning yoga on the lawn, a gym built for older joints, and regular health check-ups.',
  },
  {
    icon: 'people',
    img: 'anniversary',
    alt: 'An elderly couple in flower garlands celebrating their anniversary',
    title: 'Community spaces',
    text: 'A clubhouse, library, card room and a hall that fills up for every festival.',
  },
  {
    icon: 'water',
    img: 'pool',
    alt: 'Sun loungers beside a calm pool in the evening',
    title: 'Leisure amenities',
    text: 'A shallow-entry pool, landscaped gardens and level walking tracks.',
  },
  {
    icon: 'heart',
    img: 'careCheck',
    alt: 'A carer checking an older person’s pulse with a fingertip oximeter',
    title: 'Healthcare support',
    text: 'Nursing staff on site, doctor visits, and help in an emergency at any hour.',
  },
];

export const amenityList = [
  'Walking track & garden loop',
  'Yoga & meditation deck',
  'Physiotherapy room',
  'Library & reading lounge',
  'Card, carrom & chess room',
  'Prayer & satsang hall',
  'Dining hall with home-style food',
  'Guest rooms for visiting family',
];

// An illustrative day — aspirational, not a published timetable.
export const day = [
  { time: '6:30 am', title: 'The garden loop', text: 'A slow walk while it’s still cool, then yoga on the east lawn for whoever turns up.' },
  { time: '8:00 am', title: 'Breakfast, unhurried', text: 'Poha, idli or toast in the dining hall — and chai exactly the way you take it.' },
  { time: '10:30 am', title: 'Your morning, your call', text: 'Physio, the visiting doctor, a trip to the bank with our driver, or nothing at all.' },
  { time: '1:30 pm', title: 'The afternoon rest', text: 'Lunch, then the quiet hour the whole building quietly agrees on.' },
  { time: '4:30 pm', title: 'Chai and company', text: 'Carrom, the newspaper debate, a craft class, grandchildren on a video call.' },
  { time: '7:00 pm', title: 'Evening aarti', text: 'Bhajans in the prayer hall, or a walk under the lights with a friend.' },
];

// PLACEHOLDER: configurations, sizes and features are indicative only.
export const residences = [
  {
    id: 'studio',
    name: 'Garden Studio',
    img: 'readingNook',
    alt: 'A bright corner of a studio home with an armchair and reading lamp',
    summary: 'Light, easy to keep, and everything within a few steps — for those who want simplicity without compromise.',
    details: [
      ['Configuration', 'Studio'],
      ['Carpet area', 'To be confirmed'],
      ['Outlook', 'Garden facing'],
    ],
  },
  {
    id: 'one',
    name: '1 BHK Residence',
    img: 'livingRoom',
    alt: 'A sunlit living room with a sofa and armchairs',
    summary: 'A separate bedroom and a proper living room — space for a writing desk, a puja corner and visiting family.',
    details: [
      ['Configuration', '1 bedroom'],
      ['Carpet area', 'To be confirmed'],
      ['Outlook', 'To be confirmed'],
    ],
  },
  {
    id: 'two',
    name: '2 BHK Residence',
    img: 'livingOpen',
    alt: 'An open-plan living and dining space with large windows',
    summary: 'For couples, or anyone who loves to host — with a second room for a study or the grandchildren.',
    details: [
      ['Configuration', '2 bedrooms'],
      ['Carpet area', 'To be confirmed'],
      ['Outlook', 'To be confirmed'],
    ],
  },
];

// PLACEHOLDER: verify against final specifications.
export const residenceDesign = [
  'Step-free entrances and level thresholds',
  'Wide doorways with room to turn a wheelchair',
  'Grab rails and anti-skid bathroom floors',
  'Switches at easy reach, glare-free lighting',
  'Emergency call points in every bedroom and bathroom',
];

export const gallery = [
  { img: 'familyGarden', alt: 'Grandparents laughing with their grandson in a garden', wide: true },
  { img: 'morningPaper', alt: 'An elderly couple reading the morning newspaper together' },
  { img: 'festiveCouple', alt: 'An elderly couple dressed for a festival', tall: true },
  { img: 'gardenPath', alt: 'A garden path lined with flowering shrubs' },
  { img: 'granddaughter', alt: 'A grandmother and granddaughter looking at a phone together' },
  { img: 'couplePorch', alt: 'An elderly Sikh couple seated outside their home', wide: true },
  { img: 'seaside', alt: 'An elderly couple sitting by the sea', tall: true },
  { img: 'dining', alt: 'A warmly lit dining room with timber tables' },
];

// PLACEHOLDER: sample copy only — replace with real, consented testimonials before launch.
export const stories = [
  {
    img: 'residentPortrait',
    quote: 'Here, I found more than a home. I found a new family.',
    name: 'Mr. R. S. Bedi',
    role: 'Resident',
  },
  {
    img: 'coupleVines',
    quote: 'We moved for the safety. We stayed for the evenings on the lawn with friends.',
    name: 'Mr. & Mrs. Nair',
    role: 'Residents',
  },
  {
    img: 'grandfatherChild',
    quote: 'I live in Pune and my father is two states away. For the first time, I sleep without worrying.',
    name: 'Anjali M.',
    role: 'Daughter of a resident',
  },
];

// PLACEHOLDER: replace with verified facts about DFPL Builders.
export const developer = {
  intro:
    'DFPL Builders develops homes that are meant to be lived in for a long time. Svavass is our senior living initiative — planned with doctors, care professionals and families who told us what their parents actually needed.',
  principles: [
    { title: 'Built to last', text: 'Sound construction, honest specifications and approvals in place before we sell.' },
    { title: 'Designed with care', text: 'Every corridor, ramp and bathroom drawn with an older body in mind.' },
    { title: 'There after handover', text: 'We stay on as the people who run Svavass — not just the ones who built it.' },
  ],
};

// PLACEHOLDER: add distances once the site address is confirmed.
export const nearby = [
  { icon: 'heart', label: 'Multi-speciality hospital' },
  { icon: 'temple', label: 'Temple & gurudwara' },
  { icon: 'cup', label: 'Markets & pharmacies' },
  { icon: 'train', label: 'Railway station & airport' },
];
