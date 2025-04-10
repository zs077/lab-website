'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiChevronDown, FiChevronUp, FiSearch, FiFilter } from 'react-icons/fi';

type Publication = {
  id: number;
  title: string;
  authors: string;
  venue: string;
  abstract: string;
  link: string;
  pdf: string;
  year: number;
  category: string;
};

type PublicationListProps = {
  publications: Publication[];
};

export default function PublicationList({ publications }: PublicationListProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  
  // 获取所有发表年份，并按降序排序
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  
  // 过滤并排序论文
  const filteredPublications = publications
    .filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filter === 'all' || pub.category === filter;
      const matchesYear = yearFilter === null || pub.year === yearFilter;
      
      return matchesSearch && matchesCategory && matchesYear;
    })
    .sort((a, b) => b.year - a.year); // 按年份降序排序
  
  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <div>
      {/* 搜索和过滤工具栏 */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/2">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="搜索论文标题、作者或关键词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white"
          />
        </div>
        
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <div className="relative">
            <FiFilter className="absolute left-3 top-3 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-8 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white appearance-none"
            >
              <option value="all">所有类型</option>
              <option value="journal">期刊论文</option>
              <option value="conference">会议论文</option>
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <select
              value={yearFilter || 'all'}
              onChange={(e) => setYearFilter(e.target.value === 'all' ? null : Number(e.target.value))}
              className="pl-4 pr-8 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white appearance-none"
            >
              <option value="all">所有年份</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredPublications.length === 0 ? (
          <p className="text-center text-gray-400 py-6">没有找到匹配的论文</p>
        ) : (
          filteredPublications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiFileText className="text-primary" size={24} />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <span className="ml-2 text-sm bg-primary/20 text-primary px-2 py-1 rounded-md whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-1">
                      {pub.authors}
                    </p>
                    
                    <p className="text-gray-400 text-sm mb-3">
                      {pub.venue}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-blue-400 inline-flex items-center text-sm"
                      >
                        在线阅读
                        <FiExternalLink className="ml-1" size={14} />
                      </a>
                      
                      <a 
                        href={pub.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-blue-400 inline-flex items-center text-sm"
                      >
                        PDF下载
                        <FiFileText className="ml-1" size={14} />
                      </a>
                      
                      <button
                        onClick={() => toggleExpanded(pub.id)}
                        className="text-gray-300 hover:text-white inline-flex items-center text-sm"
                      >
                        {expandedId === pub.id ? '收起摘要' : '展开摘要'}
                        {expandedId === pub.id ? (
                          <FiChevronUp className="ml-1" size={14} />
                        ) : (
                          <FiChevronDown className="ml-1" size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {expandedId === pub.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 ml-10 pl-4 border-l-2 border-gray-700"
                  >
                    <p className="text-gray-300">{pub.abstract}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
} 