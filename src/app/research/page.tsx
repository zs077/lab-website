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

      <section className="container mx-auto px-4 py-16" aria-labelledby="open-source-title">
        <h2 id="open-source-title" className="section-title mb-8 text-center">
          Open Source
        </h2>
        <div className="glassmorphism mx-auto max-w-4xl space-y-4 p-6 md:p-8">
          <p className="text-lg text-gray-200">
            Scenario safety constraints:{' '}
            <a
              href="https://github.com/EOS-STPA/EOS-STPA"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-blue-500 underline decoration-blue-500/50 underline-offset-4 transition-colors hover:text-blue-400"
            >
              https://github.com/EOS-STPA/EOS-STPA
            </a>
          </p>
          <p className="text-lg text-gray-200">
            LE-MoE framework:{' '}
            <a
              href="https://github.com/ZMY-Research/LE-MoE-Supplementary-Materials"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-blue-500 underline decoration-blue-500/50 underline-offset-4 transition-colors hover:text-blue-400"
            >
              https://github.com/ZMY-Research/LE-MoE-Supplementary-Materials
            </a>
          </p>
        </div>
      </section>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
}
