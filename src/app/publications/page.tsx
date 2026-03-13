'use client';

import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';

// 动态导入客户端组件
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

export default function Publications() {
  const { t } = useTranslation();
  
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="page-title mb-12">{t('publications.title')}</h1>
          
          <section className="mb-20">
            <h2 className="section-title mb-8">
              {t('publications.filter.journal')} & {t('publications.filter.conference')}
            </h2>
            <ClientWrapper>
              <PublicationList />
            </ClientWrapper>
          </section>
          
          <section>
            <h2 className="section-title mb-8">
              {t('common.viewMore')}
            </h2>
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
