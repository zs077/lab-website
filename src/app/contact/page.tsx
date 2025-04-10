'use client';

import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import type { Metadata } from 'next';

// 客户端组件不能直接导出metadata
// export const metadata: Metadata = {
//   title: '科研实验室 | 联系我们',
//   description: '欢迎联系我们的实验室，了解更多研究合作和学习机会。',
// };

// 动态导入客户端组件
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16 bg-black"></div>,
  ssr: true // 仍然在服务器端渲染，但确保客户端激活
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-black"></div>,
  ssr: true // 仍然在服务器端渲染，但确保客户端激活
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <Loading height="40vh" />,
  ssr: false
});

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">联系我们</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            欢迎联系我们，了解更多研究合作和学习机会
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div>
            <h2 className="text-3xl font-bold mb-8">联系方式</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FiMapPin className="text-primary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-medium mb-2">地址</h3>
                  <p className="text-gray-300">
                    某大学某学院某楼<br />
                    某市某区某路某号<br />
                    邮编：100000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMail className="text-primary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-medium mb-2">邮箱</h3>
                  <p className="text-gray-300">
                    <a href="mailto:contact@lab.edu" className="hover:text-primary">
                      contact@lab.edu
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="text-primary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-medium mb-2">电话</h3>
                  <p className="text-gray-300">
                    +86 123 4567 8910
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-4">
                  <FiGithub size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">GitHub</h3>
                  <p className="text-gray-300">
                    <a 
                      href="https://github.com/lab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      github.com/lab
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-4">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
                  <p className="text-gray-300">
                    <a 
                      href="https://linkedin.com/company/lab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      linkedin.com/company/lab
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* 地图嵌入 */}
            <div className="mt-10 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative glassmorphism p-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.xxxxx!2d116.xxxxx!3d40.xxxxx!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM4JzUzLjMiTiAxMTHCsDIwJzIxLjciRQ!5e0!3m2!1sen!2scn!4v1618xxxxx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="实验室位置"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* 联系表单 */}
          <div>
            <h2 className="text-3xl font-bold mb-8">发送消息</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 