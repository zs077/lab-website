import Link from 'next/link';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';

// 导入导航栏和页脚组件
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>,
});

// 内容组件保持ssr: false，避免交互问题
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <Loading height="100vh" />,
  ssr: false
});

const ResearchHighlights = dynamic(() => import('@/components/ResearchHighlights'), {
  loading: () => <Loading height="60vh" />,
  ssr: false
});

const TeamPreview = dynamic(() => import('@/components/TeamPreview'), {
  loading: () => <Loading height="60vh" />,
  ssr: false
});

const PublicationsPreview = dynamic(() => import('@/components/PublicationsPreview'), {
  loading: () => <Loading height="60vh" />,
  ssr: false
});

// 设置页面元数据
export const metadata = {
  title: '科研实验室 | 首页',
  description: '欢迎访问我们的科研实验室官方网站，了解我们的研究方向、团队成员和最新成果。',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 使用ClientWrapper包装所有带有交互的组件 */}
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <ClientWrapper>
        <HeroSection />
      </ClientWrapper>
      
      <div className="container mx-auto px-4 py-16">
        <ClientWrapper>
          <ResearchHighlights />
        </ClientWrapper>
        
        <div className="my-24">
          <ClientWrapper>
            <TeamPreview />
          </ClientWrapper>
        </div>
        
        <div className="my-24">
          <ClientWrapper>
            <PublicationsPreview />
          </ClientWrapper>
        </div>
        
        <div className="my-24 text-center">
          <h2 className="section-title">联系我们</h2>
          <p className="text-xl mb-8">有任何问题或合作意向，欢迎随时联系我们</p>
          <Link 
            href="/contact" 
            className="btn-primary inline-block"
          >
            了解更多
          </Link>
        </div>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
} 