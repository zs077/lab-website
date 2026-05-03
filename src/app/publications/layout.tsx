import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '科研实验室 | 论文发表',
  description: '查看我们团队在期刊、会议和学术出版物中发表的论文。',
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
