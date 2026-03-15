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

const AwardList = dynamic(() => import('@/components/AwardList'), {
  loading: () => <Loading height="40vh" />,
  ssr: false
});

export default function Publications() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* 论文列表 - 无主标题 */}
          <section className="mb-20">
            <ClientWrapper>
              <PublicationList />
            </ClientWrapper>
          </section>

          {/* 荣誉奖项版块 */}
          <section>
            <h2 className="section-title mb-8">
              {lang === 'zh' ? '荣誉奖项' : 'Honors & Awards'}
            </h2>
            <ClientWrapper>
              <AwardList />
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
