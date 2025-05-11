import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';
import type { Metadata } from 'next';

// Metadata export
export const metadata: Metadata = {
  title: 'Research Lab | Research Areas',
  description: 'Learn about our cutting-edge research in intelligent transportation, multi-sensor fusion, and low-visibility scene perception.',
};

// Dynamically import client components
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>
});

const ResearchSection = dynamic(() => import('@/components/ResearchSection'), {
  loading: () => <Loading height="50vh" />,
  ssr: false
});

export default function Research() {
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Research Areas</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Our laboratory conducts cutting-edge research in computer vision, deep learning, and intelligent transportation,
            aiming to solve practical problems and drive technological innovation
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <ClientWrapper>
          <ResearchSection />
        </ClientWrapper>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
} 