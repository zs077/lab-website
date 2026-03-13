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

const TeamSection = dynamic(() => import('@/components/TeamSection'), {
  loading: () => <Loading height="30vh" />,
  ssr: false
});

export default function Team() {
  const { t } = useTranslation();
  
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('team.title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            {t('team.subtitle')}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <ClientWrapper>
          <TeamSection />
        </ClientWrapper>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
}
