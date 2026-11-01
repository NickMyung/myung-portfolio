import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nick Soto Conde | Mechatronics, Data Engineering & Bio-Robotics',
  description:
    'Portafolio profesional de Nick Soto Conde. Bachiller en Ingeniería Mecatrónica (UNI), Especialista en Big Data (UTEC), Ingeniero de Datos en Santander Consumer Bank, Full Stack & Investigador en Bio-Robótica (ICCRE Japón TPC Reviewer).',
  keywords: [
    'Nick Soto Conde',
    'Ingeniería Mecatrónica',
    'UNI',
    'UTEC Big Data',
    'Ingeniero de Datos',
    'Santander Consumer Bank',
    'Apache Spark',
    'Exoesqueleto de Cadera',
    'Robótica de Rehabilitación',
    'CMAAE 2021',
    'RCAE 2021',
    'ICCRE Japón',
  ],
  authors: [{ name: 'Nick Soto Conde' }],
  creator: 'Nick Soto Conde',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://nicksotoconde.dev',
    title: 'Nick Soto Conde | Mechatronics, Data Engineering & Bio-Robotics',
    description:
      'Portafolio profesional de Nick Soto Conde. Ingeniero Mecatrónico (UNI), Ingeniero de Datos, Full Stack e Investigador en Robótica de Rehabilitación.',
    siteName: 'Nick Soto Conde Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
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
