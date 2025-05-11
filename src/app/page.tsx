import Link from 'next/link';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';

// Import navbar and footer components
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>,
});

// Content components with ssr: false to avoid interaction issues
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <Loading height="100vh" />,
  ssr: false
});

const ResearchHighlights = dynamic(() => import('@/components/ResearchHighlights'), {
  loading: () => <Loading height="60vh" />,
  ssr: false
});

const TeamPreview = dynamic(() => import('@/components/TeamPreview'), {
  loading: () => <Loading height="60vh" />,
  ssr: false
});

const PublicationsPreview = dynamic(() => import('@/components/PublicationsPreview'), {
  loading: () => <Loading height="60vh" />,
  ssr: false
});

// Set page metadata
export const metadata = {
  title: 'Research Lab | Home',
  description: 'Welcome to our research laboratory official website. Learn about our research areas, team members, and latest achievements.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Use ClientWrapper to wrap all components with interactions */}
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <ClientWrapper>
        <HeroSection />
      </ClientWrapper>
      
      <div className="container mx-auto px-4 py-16">
        <ClientWrapper>
          <ResearchHighlights />
        </ClientWrapper>
        
        <div className="my-24">
          <ClientWrapper>
            <TeamPreview />
          </ClientWrapper>
        </div>
        
        <div className="my-24">
          <ClientWrapper>
            <PublicationsPreview />
          </ClientWrapper>
        </div>
        
        <div className="my-24 text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-xl mb-8">For any questions or collaboration opportunities, feel free to contact us</p>
          <Link 
            href="/contact" 
            className="btn-primary inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
} 