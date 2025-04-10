import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';
import type { Metadata } from 'next';

// 恢复元数据导出
export const metadata: Metadata = {
  title: '科研实验室 | 研究方向',
  description: '了解我们在智能交通、多传感器融合和低可见场景感知等领域的前沿研究。',
};

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

export default function Research() {
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">研究方向</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            我们的实验室在计算机视觉、深度学习和智能交通领域进行尖端研究，
            旨在解决实际问题并推动科技创新
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <ClientWrapper>
          <ResearchSection />
        </ClientWrapper>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
} 