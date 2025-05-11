import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import type { Metadata } from 'next';
import ClientWrapper from '@/components/ClientWrapper';

// Dynamically import client components
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>,
});

const PublicationList = dynamic(() => import('@/components/PublicationList'), {
  loading: () => <Loading height="40vh" />,
  ssr: false
});

const VideoList = dynamic(() => import('@/components/VideoList'), {
  loading: () => <Loading height="40vh" />,
  ssr: false
});

// Enable metadata export
export const metadata: Metadata = {
  title: 'Research Lab | Publications',
  description: 'View papers and research results published by our team in top journals and conferences.',
};

export default function Publications() {
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="page-title mb-12">Publications</h1>
          
          <section className="mb-20">
            <h2 className="section-title mb-8">Published Papers</h2>
            <ClientWrapper>
              <PublicationList />
            </ClientWrapper>
          </section>
          
          <section>
            <h2 className="section-title mb-8">Research Videos</h2>
            <ClientWrapper>
              <VideoList />
            </ClientWrapper>
          </section>
        </div>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
} 