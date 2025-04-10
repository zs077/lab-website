'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiX } from 'react-icons/fi';

// 定义搜索结果类型
type SearchResult = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'research' | 'team' | 'publication' | 'page';
};

// 模拟搜索结果数据 - 实际项目中可通过API获取
const mockSearchResults: SearchResult[] = [
  {
    id: 'research-1',
    title: '智能交通',
    description: '利用人工智能和大数据分析优化交通流量，提高道路安全性和效率。',
    url: '/research/intelligent-transportation',
    category: 'research',
  },
  {
    id: 'research-2',
    title: '多传感器融合',
    description: '通过集成多种传感器数据，提高环境感知能力和系统鲁棒性。',
    url: '/research/multi-sensor-fusion',
    category: 'research',
  },
  {
    id: 'team-1',
    title: '张教授',
    description: '教授，博士生导师，专注于智能交通系统和计算机视觉研究。',
    url: '/team#professor',
    category: 'team',
  },
  {
    id: 'pub-1',
    title: '基于深度学习的交通场景全天候感知方法',
    description: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
    url: '/publications#paper-1',
    category: 'publication',
  },
];

export default function SearchBar() {
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
      const filtered = mockSearchResults.filter(result => 
        result.title.toLowerCase().includes(term.toLowerCase()) || 
        result.description.toLowerCase().includes(term.toLowerCase())
      );
      
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
  
  return (
    <div className="relative" ref={searchRef}>
      {/* 搜索按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
        aria-label="搜索"
      >
        <FiSearch size={18} />
        <span className="text-sm hidden md:inline">搜索</span>
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
                placeholder="搜索研究方向、团队成员或科研成果..."
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
                          {result.category === 'research' ? '研究方向' : 
                           result.category === 'team' ? '团队成员' : '科研成果'}
                        </span>
                        <h3 className="text-white font-medium">{result.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{result.description}</p>
                    </div>
                  ))}
                </div>
              ) : searchTerm.length >= 2 ? (
                <div className="p-8 text-center text-gray-400">
                  没有找到匹配的结果
                </div>
              ) : null}
              
              {/* 快捷搜索提示 */}
              {searchTerm.length < 2 && (
                <div className="p-6">
                  <h3 className="text-gray-400 mb-4 text-sm">快速搜索</h3>
                  <div className="flex flex-wrap gap-2">
                    {['智能交通', '多传感器融合', '张教授', '李博士', '深度学习'].map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSearch(term)}
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* 搜索提示 */}
            <div className="p-4 border-t border-gray-700 text-xs text-gray-500 flex justify-between">
              <div>按 ESC 关闭</div>
              <div>按 Enter 跳转到第一个结果</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 