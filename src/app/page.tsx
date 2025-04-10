'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ResearchHighlights from '@/components/ResearchHighlights';
import TeamPreview from '@/components/TeamPreview';
import PublicationsPreview from '@/components/PublicationsPreview';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
        <ResearchHighlights />
        
        <div className="my-24">
          <TeamPreview />
        </div>
        
        <div className="my-24">
          <PublicationsPreview />
        </div>
        
        <div className="my-24 text-center">
          <h2 className="section-title">联系我们</h2>
          <p className="text-xl mb-8">有任何问题或合作意向，欢迎随时联系我们</p>
          <Link 
            href="/contact" 
            className="btn-primary inline-block"
          >
            了解更多
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 