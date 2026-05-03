'use client';

import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';

const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>,
});

const PatentList = dynamic(() => import('@/components/PatentList'), {
  loading: () => <Loading height="30vh" />,
  ssr: false,
});

const AwardList = dynamic(() => import('@/components/AwardList'), {
  loading: () => <Loading height="40vh" />,
  ssr: false,
});

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>

      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('achievements.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            {t('achievements.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('achievements.patentsTitle')}</h2>
          <ClientWrapper>
            <PatentList />
          </ClientWrapper>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('achievements.awardsTitle')}</h2>
          <ClientWrapper>
            <AwardList />
          </ClientWrapper>
        </section>
      </div>

      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
}
