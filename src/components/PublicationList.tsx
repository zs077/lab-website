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

export default function PublicationList() {
  // 发表论文数据
  const publications = [
    {
      id: 1,
      title: '基于深度学习的交通场景全天候感知方法',
      authors: '张教授, 李博士, 王博士',
      venue: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
      abstract: '本文提出了一种基于深度学习的交通场景全天候感知方法，能够在各种天气条件和光照环境下保持高精度的目标检测和场景理解。通过设计新型网络结构和多模态融合策略，有效提高了系统在恶劣环境下的稳定性。',
      link: 'https://example.com/paper1',
      pdf: 'https://example.com/paper1.pdf',
      year: 2023,
      category: 'journal',
    },
    {
      id: 2,
      title: '多模态传感器融合框架在自动驾驶中的应用',
      authors: '李博士, 张教授',
      venue: 'Computer Vision and Pattern Recognition (CVPR), 2022',
      abstract: '提出了一种新型多模态传感器融合框架，用于自动驾驶环境感知。该框架能够有效集成摄像头、激光雷达和毫米波雷达数据，特别针对不同传感器在各种环境条件下的优缺点进行优化融合，提高了感知鲁棒性。',
      link: 'https://example.com/paper2',
      pdf: 'https://example.com/paper2.pdf',
      year: 2022,
      category: 'conference',
    },
    {
      id: 3,
      title: '基于注意力机制的低可见度场景目标检测',
      authors: '王博士, 刘同学, 张教授',
      venue: 'European Conference on Computer Vision (ECCV), 2022',
      abstract: '针对雾、雨、雪等低可见度场景，提出了基于注意力机制的目标检测方法。该方法通过学习场景中的关键区域和特征，有效提高了在恶劣天气条件下的检测准确率，并降低了计算复杂度。',
      link: 'https://example.com/paper3',
      pdf: 'https://example.com/paper3.pdf',
      year: 2022,
      category: 'conference',
    },
    {
      id: 4,
      title: '自监督对比学习在交通场景理解中的应用',
      authors: '陈研究员, 张教授',
      venue: 'International Conference on Machine Learning (ICML), 2022',
      abstract: '提出了一种新的自监督对比学习方法，专门用于交通场景理解。该方法不依赖大量标注数据，通过设计特定的数据增强和对比损失函数，实现了高效的特征学习，在下游任务中表现出色。',
      link: 'https://example.com/paper4',
      pdf: 'https://example.com/paper4.pdf',
      year: 2022,
      category: 'conference',
    },
    {
      id: 5,
      title: '轻量级神经网络设计在边缘设备中的视觉感知应用',
      authors: '李博士, 陈研究员, 黄研究员',
      venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence, 2021',
      abstract: '研究了轻量级神经网络架构设计，专注于资源受限的边缘设备。通过创新的模型压缩和优化技术，实现了高效率的视觉感知应用，在保持准确率的同时显著降低了计算和存储需求。',
      link: 'https://example.com/paper5',
      pdf: 'https://example.com/paper5.pdf',
      year: 2021,
      category: 'journal',
    },
    {
      id: 6,
      title: '城市交通流预测：融合时空图神经网络的方法',
      authors: '张教授, 刘同学',
      venue: 'Transportation Research Part C: Emerging Technologies, 2021',
      abstract: '提出了一种基于时空图神经网络的城市交通流预测方法，该方法考虑了路网拓扑结构和时间动态特性，通过建模交通流的时空依赖关系，实现了高精度的短期和长期交通流预测。',
      link: 'https://example.com/paper6',
      pdf: 'https://example.com/paper6.pdf',
      year: 2021,
      category: 'journal',
    },
    {
      id: 7,
      title: '基于3D点云的道路场景分割与理解',
      authors: '赵同学, 王博士',
      venue: 'International Conference on 3D Vision (3DV), 2021',
      abstract: '开发了一种高效的3D点云处理方法，用于道路场景分割与理解。通过设计新型的点云特征提取模块和上下文感知分割网络，实现了对复杂道路环境的准确语义理解。',
      link: 'https://example.com/paper7',
      pdf: 'https://example.com/paper7.pdf',
      year: 2021,
      category: 'conference',
    },
  ];

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