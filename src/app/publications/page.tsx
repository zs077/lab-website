import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import type { Metadata } from 'next';
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

// 启用元数据导出
export const metadata: Metadata = {
  title: '科研实验室 | 科研成果',
  description: '查看我们团队在顶级期刊和会议发表的论文和研究成果。',
};

export default function Publications() {
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="page-title mb-12">科研成果</h1>
          
          <section className="mb-20">
            <h2 className="section-title mb-8">发表论文</h2>
            <ClientWrapper>
              <PublicationList />
            </ClientWrapper>
          </section>
          
          <section>
            <h2 className="section-title mb-8">研究视频</h2>
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