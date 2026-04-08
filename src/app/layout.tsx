import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SITE } from '@/lib/constants';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Crown Roofing LLC | Roofing, Gutters & Siding in Livingston County MI',
    template: '%s | Crown Roofing LLC',
  },
  description:
    'Crown Roofing LLC serves Brighton, Hamburg, Howell & Pinckney MI with expert roofing, roof replacement, gutters, and siding. Free inspections. Licensed & insured. Call (734) 561-4098.',
  keywords: [
    'roofing Brighton MI',
    'roof replacement Howell MI',
    'gutters Hamburg MI',
    'siding Pinckney MI',
    'roofing company Livingston County',
    'roof repair Michigan',
    'Crown Roofing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    title: 'Crown Roofing LLC | Livingston County MI Roofing Experts',
    description:
      'Trusted roofing, roof replacement, gutters & siding in Brighton, Hamburg, Howell & Pinckney MI. Free drone inspections. Call (734) 561-4098.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8433 Thurston Rd',
      addressLocality: 'Pinckney',
      addressRegion: 'MI',
      postalCode: '48169',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.4534,
      longitude: -83.9469,
    },
    areaServed: [
      { '@type': 'City', name: 'Brighton', addressRegion: 'MI' },
      { '@type': 'City', name: 'Hamburg', addressRegion: 'MI' },
      { '@type': 'City', name: 'Howell', addressRegion: 'MI' },
      { '@type': 'City', name: 'Pinckney', addressRegion: 'MI' },
    ],
    serviceType: [
      'Roofing',
      'Roof Replacement',
      'Gutter Installation',
      'Siding Installation',
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
    founder: { '@type': 'Person', name: SITE.owner },
    sameAs: [],
  };

  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
