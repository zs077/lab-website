import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Lab | Research Areas',
  description: 'Learn about our cutting-edge research in intelligent transportation, multi-sensor fusion, and low-visibility scene perception.',
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 