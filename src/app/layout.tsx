import type { Metadata } from 'next';
import './globals.css';
import { portfolio } from '@/lib/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL('https://nicksotoconde.dev'),
  title: `${portfolio.profile.name} | ${portfolio.profile.headline}`,
  description:
    portfolio.profile.professionalSummary,
  keywords: [
    'Nick Soto Conde',
    'Mechatronics Engineering',
    'Data Engineer',
    'Business Process Automation',
    'Business Intelligence',
    'Software Engineer',
    'Full-Stack Developer',
    'Robotics Research',
    'Rehabilitation Robotics',
    '3DoF Hip Exoskeleton',
    'Denavit-Hartenberg',
    'Santander Consumer Bank',
    'Apache Spark',
    'DataHub',
    'CMAAE 2021',
    'RCAE 2021',
    'ICCRE Japan TPC',
    'Scientific Peer Review',
    'Research Leadership',
    'IEEE EMBS UNI',
    'Universidad Nacional de Ingenieria',
    'UTEC Big Data'
  ],
  authors: [{ name: 'Nick Soto Conde', url: 'https://github.com/NickMyung' }],
  creator: 'Nick Soto Conde',
  publisher: 'Nick Soto Conde',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nicksotoconde.dev',
    title: `${portfolio.profile.name} | ${portfolio.profile.headline}`,
    description:
      portfolio.profile.professionalSummary,
    siteName: 'Nick Soto Conde Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolio.profile.name} | ${portfolio.profile.headline}`,
    description:
      portfolio.profile.professionalSummary,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-slate-100 font-sans selection:bg-cyan-500 selection:text-black min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-300 focus:px-5 focus:py-3 focus:text-slate-950">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
