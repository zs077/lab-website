import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '科研实验室 | 团队成员',
  description: '了解我们的研究团队成员，包括教授、研究人员和学生。',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 