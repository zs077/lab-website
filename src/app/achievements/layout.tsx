import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '科研实验室 | 科研成果',
  description: '查看我们团队的专利、荣誉奖项和科研成果。',
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
