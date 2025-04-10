import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '科研实验室 | 首页',
  description: '欢迎访问我们的科研实验室官方网站，了解我们的研究方向、团队成员和最新成果。',
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