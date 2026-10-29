import { Cormorant_Garamond, Outfit } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';
import './enhancements.css';

// Brand typefaces are Gohdtail (display) and Grift (sans). Until web licences are
// added, Cormorant Garamond and Outfit stand in; globals.css lists the brand fonts
// first so they take over automatically once @font-face files are supplied.
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display-fallback',
  display: 'swap',
});

const sans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans-fallback',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | ${site.tagline}`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  applicationName: site.fullName,
  keywords: [
    'senior living',
    'retirement homes',
    'assisted living',
    'senior citizen homes',
    'wellbeing estate',
    'Svavass',
    'DFPL',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.fullName,
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/images/hero.webp', width: 2400, height: 1600, alt: 'A laughing older couple holding hands beneath shady trees' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
    images: ['/images/hero.webp'],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#2B3324',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.fullName,
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}/brand/svavass-logo.svg`,
  parentOrganization: { '@type': 'Organization', name: site.developer },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
