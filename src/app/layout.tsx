import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '科研实验室',
  description: '展示我们的研究方向、团队成员、科研成果和联系方式',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${inter.variable}`}>
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
} 