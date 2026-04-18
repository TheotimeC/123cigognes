import { Fraunces, DM_Sans, Kalam } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const kalam = Kalam({
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
  weight: ['300', '400', '700'],
});

export const metadata = {
  metadataBase: new URL('https://123cigognes.fr'),
  title: {
    default: '1 2 3 Cigognes — Balades solidaires nature contre le cancer | Haguenau, Alsace',
    template: '%s | 1 2 3 Cigognes',
  },
  description:
    'Association 1 2 3 Cigognes : des balades solidaires en pleine nature avec des ânes et des lamas, pour les personnes touchées par le cancer. Retrouvez du souffle, marchez à votre rythme et reconnectez-vous à la nature. Haguenau, Alsace.',
  keywords: [
    '1 2 3 Cigognes',
    '123 Cigognes',
    'association cancer Haguenau',
    'balade solidaire cancer',
    'balade avec ânes Vosges',
    'bien-être cancer Alsace',
    'balade nature cancer',
    'soutien cancer Haguenau Strasbourg',
    'balade Zen Oxygène',
    'association bien-être Alsace',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: '1 2 3 Cigognes',
    title: '1 2 3 Cigognes — Balades solidaires nature contre le cancer',
    description:
      'Des balades solidaires en pleine nature avec des ânes et des lamas, pour les personnes touchées par le cancer. Haguenau, Alsace.',
    images: ['/img/LOGO sans fond.png'],
  },
  icons: {
    icon: '/img/LOGO sans fond.png',
    apple: '/img/LOGO sans fond.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${dmSans.variable} ${kalam.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: '1 2 3 Cigognes',
              alternateName: '123 Cigognes',
              url: 'https://123cigognes.fr',
              logo: 'https://123cigognes.fr/img/LOGO sans fond.png',
              description:
                "Association proposant des balades solidaires en pleine nature avec des ânes et des lamas, pour les personnes touchées par le cancer. Haguenau, Alsace.",
              email: 'undeuxtroiscigognes@gmail.com',
              telephone: '+33695947907',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Haguenau',
                addressRegion: 'Alsace',
                addressCountry: 'FR',
              },
              sameAs: [
                'https://www.facebook.com/p/123-Cigognes-100093365425948/',
                'https://www.helloasso.com/associations/1-2-3-cigognes',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
