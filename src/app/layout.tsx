import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { MobileQuickBar } from '../components/home/MobileQuickBar';
import { hospital, siteUrl } from '../data/hospital';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kulved Hospital | Pediatric Hospital in Faridabad',
    template: '%s',
  },
  description:
    "Kulved Hospital is a children's super speciality hospital in Sehatpur, Faridabad, offering parent-friendly pediatric care information and appointment booking.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: hospital.name,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const hospitalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: hospital.name,
  alternateName: hospital.legalName,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: hospital.address,
    addressLocality: 'Faridabad',
    addressRegion: 'Haryana',
    postalCode: '121013',
    addressCountry: 'IN',
  },
  telephone: hospital.phone,
  sameAs: [hospital.instagramUrl],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <MobileQuickBar />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
        />
      </body>
    </html>
  );
}
