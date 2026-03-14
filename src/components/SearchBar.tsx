'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiX } from 'react-icons/fi';

// 定义搜索结果类型
type SearchResult = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  category: 'research' | 'team' | 'publication' | 'page';
};

// 模拟搜索结果数据 - 实际项目中可通过API获取
const mockSearchResults: SearchResult[] = [
  {
    id: 'research-1',
    title: '智能交通',
    titleEn: 'Intelligent Transportation',
    description: '利用人工智能和大数据分析优化交通流量，提高道路安全性和效率。',
    descriptionEn: 'Optimizing traffic flow and improving road safety using AI and big data analytics.',
    url: '/research/intelligent-transportation',
    category: 'research',
  },
  {
    id: 'research-2',
    title: '多传感器融合',
    titleEn: 'Multi-Sensor Fusion',
    description: '通过集成多种传感器数据，提高环境感知能力和系统鲁棒性。',
    descriptionEn: 'Enhancing environmental perception by integrating multiple sensor data.',
    url: '/research/multi-sensor-fusion',
    category: 'research',
  },
  {
    id: 'team-1',
    title: '张教授',
    titleEn: 'Prof. Zhang',
    description: '教授，博士生导师，专注于智能交通系统和计算机视觉研究。',
    descriptionEn: 'Professor, PhD Supervisor, focusing on intelligent transportation and computer vision.',
    url: '/team#professor',
    category: 'team',
  },
  {
    id: 'pub-1',
    title: '基于深度学习的交通场景全天候感知方法',
    titleEn: 'All-Weather Perception Method for Traffic Scenes Based on Deep Learning',
    description: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
    descriptionEn: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
    url: '/publications#paper-1',
    category: 'publication',
  },
];

export default function SearchBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  // 处理搜索操作
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (term.length < 2) {
      setResults([]);
      return;
    }
    
    setIsLoading(true);
    
    // 模拟API搜索延迟
    setTimeout(() => {
      // 过滤搜索结果
      const filtered = mockSearchResults.filter(result => {
        const title = i18n.language === 'zh' ? result.title : result.titleEn;
        const description = i18n.language === 'zh' ? result.description : result.descriptionEn;
        return title.toLowerCase().includes(term.toLowerCase()) || 
               description.toLowerCase().includes(term.toLowerCase());
      });
      
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  };
  
  // 处理点击搜索结果
  const handleResultClick = (url: string) => {
    setIsOpen(false);
    setSearchTerm('');
    setResults([]);
    router.push(url);
  };
  
  // 点击外部关闭搜索框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // 搜索框打开时聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // 处理ESC键关闭搜索框
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const getCategoryLabel = (category: string) => {
    if (i18n.language === 'zh') {
      return category === 'research' ? '研究方向' : 
             category === 'team' ? '团队成员' : '科研成果';
    } else {
      return category === 'research' ? 'Research' : 
             category === 'team' ? 'Team' : 'Publication';
    }
  };
  
  return (
    <div className="relative" ref={searchRef}>
      {/* 搜索按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
        aria-label={t('common.search')}
      >
        <FiSearch size={18} />
        <span className="text-sm hidden md:inline">{t('common.search')}</span>
      </button>
      
      {/* 搜索模态框 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-24 px-4">
          <div className="w-full max-w-2xl bg-secondary rounded-xl shadow-2xl overflow-hidden">
            {/* 搜索输入框 */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder={t('publications.search')}
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-secondary border-b border-gray-700 focus:outline-none text-white"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>
            
            {/* 搜索结果 */}
            <div className="max-h-[60vh] overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : results.length > 0 ? (
                <div>
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="p-4 hover:bg-white/5 cursor-pointer"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-1 rounded ${
                          result.category === 'research' ? 'bg-blue-900/50 text-blue-300' :
                          result.category === 'team' ? 'bg-green-900/50 text-green-300' :
                          'bg-purple-900/50 text-purple-300'
                        }`}>
                          {getCategoryLabel(result.category)}
                        </span>
                        <h3 className="text-white font-medium">
                          {i18n.language === 'zh' ? result.title : result.titleEn}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {i18n.language === 'zh' ? result.description : result.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              ) : searchTerm.length >= 2 ? (
                <div className="p-8 text-center text-gray-400">
                  {i18n.language === 'zh' ? '没有找到匹配的结果' : 'No results found'}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400">
                  {i18n.language === 'zh' ? '请输入至少2个字符开始搜索' : 'Enter at least 2 characters to search'}
                </div>
              )}
            </div>
            
            {/* 搜索提示 */}
            <div className="p-4 border-t border-gray-700 text-xs text-gray-500 flex justify-between">
              <div>{i18n.language === 'zh' ? '按 ESC 关闭' : 'Press ESC to close'}</div>
              <div>{i18n.language === 'zh' ? '按 Enter 跳转到第一个结果' : 'Press Enter to jump to first result'}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
