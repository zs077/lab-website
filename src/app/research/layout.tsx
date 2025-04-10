import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '科研实验室 | 研究方向',
  description: '了解我们在智能交通、多传感器融合和低可见场景感知等领域的前沿研究。',
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 