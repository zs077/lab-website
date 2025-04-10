import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';
import type { Metadata } from 'next';

// 恢复元数据导出
export const metadata: Metadata = {
  title: '科研实验室 | 团队成员',
  description: '了解我们的研究团队成员，包括教授、研究人员和学生。',
};

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
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">团队成员</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            我们的团队由来自不同背景的杰出研究人员和学生组成，
            共同致力于推动前沿科学研究和技术创新
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