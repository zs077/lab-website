import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '科研实验室 | 科研成果',
  description: '查看我们团队在顶级期刊和会议发表的论文和研究成果。',
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 