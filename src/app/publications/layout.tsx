import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Lab | Publications',
  description: 'View papers and research results published by our team in top journals and conferences.',
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 