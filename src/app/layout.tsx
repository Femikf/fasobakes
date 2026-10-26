import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'FASO Bakes — Baking Delectable Dreams | Artisanal Breads & Bakery',
  description:
    'FASO Bakes crafts premium sliced brown breads, jumbo long breads, pillow-soft white breads, buttery brioche rolls, and handcrafted confectionery. Daily oven fresh with untouched hygiene.',
  keywords: [
    'FASO Bakes',
    'FASO Food Products',
    'Sliced Brown Bread',
    'Sliced Long Bread',
    'Sliced White Bread',
    'Bakery near me',
    'Artisanal Bread',
    'Wholesale Bakery Supply',
  ],
  authors: [{ name: 'FASO Food Products' }],
  openGraph: {
    title: 'FASO Bakes — Baking Delectable Dreams',
    description: 'Wholesome, daily fresh sliced breads, golden brioche buns, and artisan bakery delights.',
    url: 'https://fasobakes.com',
    siteName: 'FASO Bakes',
    images: [
      {
        url: '/images/breads-group.png',
        width: 1200,
        height: 630,
        alt: 'FASO Bakes Premium Breads',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/images/hero-video-poster.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority is standard in modern HTML
          fetchpriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
