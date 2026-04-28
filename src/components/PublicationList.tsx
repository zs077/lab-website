'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiFileText,
  FiChevronDown,
  FiChevronUp,
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { publications } from '@/data/publications';

const PUBLICATIONS_PER_PAGE = 7;

export default function PublicationList() {
  const { t, i18n } = useTranslation();

  // 当前语言：'zh' 显示中文摘要，其余显示英文摘要
  const lang = i18n.language?.startsWith('zh') ? 'zh' : 'en';

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 获取所有发表年份，按降序排列
  const years = [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a);

  // 过滤 + 排序
  const filteredPublications = publications
    .filter((pub) => {
      // 搜索时同时在中英文摘要里匹配
      const abstractText = pub.abstract.en + ' ' + pub.abstract.zh;
      const matchesSearch =
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        abstractText.toLowerCase().includes(searchTerm.toLowerCase());

      // 筛选逻辑：journal/conference 精确匹配，其他归为 'other'
      let matchesCategory = false;
      if (filter === 'all') {
        matchesCategory = true;
      } else if (filter === 'journal') {
        matchesCategory = pub.category === 'journal';
      } else if (filter === 'conference') {
        matchesCategory = pub.category === 'conference';
      } else if (filter === 'other') {
        matchesCategory = pub.category !== 'journal' && pub.category !== 'conference';
      }

      const matchesYear = yearFilter === null || pub.year === yearFilter;

      return matchesSearch && matchesCategory && matchesYear;
    })
    .sort((a, b) => b.year - a.year);

  const totalPages = Math.ceil(filteredPublications.length / PUBLICATIONS_PER_PAGE);
  const activePage = Math.min(currentPage, totalPages || 1);
  const pageStart = (activePage - 1) * PUBLICATIONS_PER_PAGE;
  const paginatedPublications = filteredPublications.slice(
    pageStart,
    pageStart + PUBLICATIONS_PER_PAGE
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filter, yearFilter]);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* ── 搜索 & 过滤工具栏 ── */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        {/* 搜索框 */}
        <div className="relative w-full md:w-1/2">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder={t('publications.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white"
          />
        </div>

        {/* 类型 & 年份筛选 */}
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          {/* 论文类型 */}
          <div className="relative">
            <FiFilter className="absolute left-3 top-3 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-8 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white appearance-none"
            >
              <option value="all">{t('publications.filter.all')}</option>
              <option value="journal">{t('publications.filter.journal')}</option>
              <option value="conference">{t('publications.filter.conference')}</option>
              <option value="other">{t('publications.filter.other')}</option>
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>

          {/* 年份筛选 */}
          <div className="relative">
            <select
              value={yearFilter ?? 'all'}
              onChange={(e) =>
                setYearFilter(e.target.value === 'all' ? null : Number(e.target.value))
              }
              className="pl-4 pr-8 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white appearance-none"
            >
              <option value="all">{t('publications.filter.allYears')}</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* ── 论文列表 ── */}
      <div className="space-y-6">
        {filteredPublications.length === 0 ? (
          <p className="text-center text-gray-400 py-6">{t('publications.noResults')}</p>
        ) : (
          paginatedPublications.map((pub) => (
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
                    {/* 标题 + 年份徽章（固定显示，不随语言切换） */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold mb-1 hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <span className="ml-2 text-sm bg-primary/20 text-primary px-2 py-1 rounded-md whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>

                    {/* 作者（固定显示） */}
                    <p className="text-gray-300 mb-1">{pub.authors}</p>

                    {/* 期刊/会议（固定显示） */}
                    <p className="text-gray-400 text-sm mb-3">{pub.venue}</p>

                    {/* 操作区：仅保留「展开/收起摘要」 */}
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => toggleExpanded(pub.id)}
                        className="text-gray-300 hover:text-white inline-flex items-center text-sm"
                      >
                        {expandedId === pub.id
                          ? t('publications.collapseAbstract')
                          : t('publications.expandAbstract')}
                        {expandedId === pub.id ? (
                          <FiChevronUp className="ml-1" size={14} />
                        ) : (
                          <FiChevronDown className="ml-1" size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 摘要展开区：随界面语言切换中/英文摘要 */}
                {expandedId === pub.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 ml-10 pl-4 border-l-2 border-gray-700"
                  >
                    <p className="text-gray-300">{pub.abstract[lang]}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            {lang === 'zh'
              ? `第 ${activePage} / ${totalPages} 页，共 ${filteredPublications.length} 篇`
              : `Page ${activePage} of ${totalPages}, ${filteredPublications.length} publications`}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage(Math.max(activePage - 1, 1))}
              disabled={activePage === 1}
              aria-label={t('common.previous')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-secondary/50 text-gray-300 transition-colors hover:border-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-700 disabled:hover:text-gray-300"
            >
              <FiChevronLeft size={18} />
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-current={activePage === page ? 'page' : undefined}
                className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-medium transition-colors ${
                  activePage === page
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-700 bg-secondary/50 text-gray-300 hover:border-primary hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setCurrentPage(Math.min(activePage + 1, totalPages))}
              disabled={activePage === totalPages}
              aria-label={t('common.next')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-secondary/50 text-gray-300 transition-colors hover:border-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-700 disabled:hover:text-gray-300"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
