import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '科研实验室 | 联系我们',
  description: '欢迎联系我们的实验室，了解更多研究合作和学习机会。',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 