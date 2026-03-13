'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FiMail, FiMapPin, FiUser } from 'react-icons/fi';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.title')}</h3>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://homepage.hit.edu.cn/liangci?lang=zh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Teacher Homepage">
                <FiUser size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.research')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.publications')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="text-primary mr-2" />
                <a href="mailto:liangci321@hit.edu.cn" className="text-gray-400 hover:text-white transition-colors">
                  liangci321@hit.edu.cn
                </a>
              </li>
              <li className="flex items-center">
                <FiMapPin className="text-primary mr-2" />
                <span className="text-gray-400">{t('footer.address')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
