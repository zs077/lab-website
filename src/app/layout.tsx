import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Research Lab',
    default: 'Research Lab | Home',
  },
  description: 'Welcome to our research laboratory official website. Learn about our research areas, team members, and latest achievements.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
} 