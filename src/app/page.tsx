'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

// 将Navbar和Footer设置为客户端组件
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>,
  ssr: true // 仍然在服务器端渲染，但确保客户端激活
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>,
  ssr: true // 仍然在服务器端渲染，但确保客户端激活
});

// 内容组件保持ssr: false，避免交互问题
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