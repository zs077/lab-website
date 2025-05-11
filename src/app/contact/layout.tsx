import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Lab | Contact Us',
  description: 'Contact our laboratory to learn more about research collaborations and learning opportunities.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 