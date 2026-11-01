import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nicksotoconde.dev'),
  title: 'Nick Soto Conde | Mechatronics Engineer | Data & Software Engineering | Robotics Research',
  description:
    'Professional portfolio of Nick Soto Conde. Mechatronics Engineer (UNI), Big Data Specialist (UTEC), Data Engineer at Santander Consumer Bank, Full-Stack Developer, and Robotics & Rehabilitation Researcher.',
  keywords: [
    'Nick Soto Conde',
    'Mechatronics Engineer',
    'Data Engineer',
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
    title: 'Nick Soto Conde | Mechatronics Engineer | Data & Software Engineering | Robotics Research',
    description:
      'Professional engineering portfolio bridging distributed cloud data pipelines, full-stack application development, and peer-reviewed rehabilitation robotics research.',
    siteName: 'Nick Soto Conde Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Soto Conde | Mechatronics Engineer | Data & Software Engineering',
    description:
      'Data Engineering, Full-Stack Software Development, and Robotics & Rehabilitation Research.',
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
      <body className="bg-[#070a12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
