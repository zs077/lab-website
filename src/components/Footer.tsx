import Link from 'next/link';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">科研实验室</h3>
            <p className="text-gray-400 mb-6">
              致力于前沿科学研究，培养创新型人才，解决行业实际问题。
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="text-gray-400 hover:text-white transition-colors">
                  研究方向
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  团队成员
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-400 hover:text-white transition-colors">
                  科研成果
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="text-primary mr-2" />
                <a href="mailto:contact@lab.edu" className="text-gray-400 hover:text-white transition-colors">
                  contact@lab.edu
                </a>
              </li>
              <li className="flex items-center">
                <FiMapPin className="text-primary mr-2" />
                <span className="text-gray-400">某大学某学院某楼</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} 科研实验室. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 