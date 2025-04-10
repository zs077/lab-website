import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import type { Metadata } from 'next';
import ClientWrapper from '@/components/ClientWrapper';

// 启用元数据导出
export const metadata: Metadata = {
  title: '科研实验室 | 联系我们',
  description: '欢迎联系我们的实验室，了解更多研究合作和学习机会。',
};

// 动态导入客户端组件
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>,
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <Loading height="40vh" />,
  ssr: false
});

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="page-title mb-12">联系我们</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">联系方式</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FiMail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">电子邮件</h3>
                    <a href="mailto:contact@lab.edu" className="text-gray-300 hover:text-primary">
                      contact@lab.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FiMapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">地址</h3>
                    <p className="text-gray-300">
                      某大学某学院某楼
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FiPhone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">电话</h3>
                    <p className="text-gray-300">+123 456 7890</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6">关注我们</h2>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <FiGithub size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <FiLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">发送消息</h2>
              <ClientWrapper>
                <ContactForm />
              </ClientWrapper>
            </div>
          </div>
        </div>
      </div>
      
      <ClientWrapper>
        <Footer />
      </ClientWrapper>
    </main>
  );
} 