'use client';

import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';

// 动态导入客户端组件
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

const VideoList = dynamic(() => import('@/components/VideoList'), {
  loading: () => <Loading height="40vh" />,
  ssr: false
});

export default function Research() {
  const { t } = useTranslation();
  
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('research.title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            {t('research.subtitle')}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <ClientWrapper>
          <ResearchSection />
        </ClientWrapper>
      </div>

      {/* 视频演示部分 */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title mb-8 text-center">
          {t('videos.sectionTitle')}
        </h2>
        <ClientWrapper>
          <VideoList />
        </ClientWrapper>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
}
