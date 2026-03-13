'use client';

import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/Loading';
import { FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import ClientWrapper from '@/components/ClientWrapper';

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
  const { t } = useTranslation();
  
  return (
    <main className="flex min-h-screen flex-col">
      <ClientWrapper>
        <Navbar />
      </ClientWrapper>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="page-title mb-12">{t('contact.title')}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('footer.contactInfo')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FiMail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('contact.info.email')}</h3>
                    <a href="mailto:liangci321@hit.edu.cn" className="text-gray-300 hover:text-primary">
                      liangci321@hit.edu.cn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FiMapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('contact.info.address')}</h3>
                    <p className="text-gray-300">
                      {t('footer.address')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FiPhone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('contact.info.phone')}</h3>
                    <p className="text-gray-300">13811187674</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6">
                  {t('common.viewMore')}
                </h2>
                <div className="flex space-x-4">
                  <a href="https://homepage.hit.edu.cn/liangci?lang=zh" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-lg hover:bg-primary/20 transition-colors" aria-label="Teacher Homepage">
                    <FiUser size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.send')}</h2>
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
