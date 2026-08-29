import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://premkalagate.vercel.app'),
  title: 'Prem Kalagate — Full-Stack Developer & Software Engineer',
  description:
    'Full-Stack Developer, Mobile App Developer, and AI Systems Engineer based in Mumbai, India. Specializing in Next.js, React, Node.js, Flutter, and AI integration.',
  keywords: [
    'Prem Kalagate',
    'Full Stack Developer',
    'Mobile App Developer',
    'Flutter Developer',
    'Next.js Portfolio',
    'Software Engineer India',
  ],
  authors: [{ name: 'Prem Kalagate', url: 'https://github.com/premkalagate' }],
  icons: {
    icon: '/images/profile.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-background text-foreground antialiased min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
