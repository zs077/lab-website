import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Lab | Team Members',
  description: 'Learn about our research team members, including professors, researchers, and students.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 