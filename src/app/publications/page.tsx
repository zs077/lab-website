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

export default function Publications() {
  const { t } = useTranslation();
  
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('publications.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            {t('publications.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="container mx-auto px-4">
          <section>
            <ClientWrapper>
              <PublicationList />
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
