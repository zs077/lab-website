'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX, FiImage } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { awards } from '@/data/awards';

export default function AwardList() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('zh') ? 'zh' : 'en';

  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [selectedAwardId, setSelectedAwardId] = useState<number | null>(null);

  // 获取所有年份，按降序排列
  const years = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

  // 过滤 + 排序
  const filteredAwards = awards
    .filter((award) => {
      const matchesYear = yearFilter === null || award.year === yearFilter;
      return matchesYear;
    })
    .sort((a, b) => a.id - b.id);

  const selectedAward = awards.find(a => a.id === selectedAwardId);

  return (
    <div>
      {/* ── 年份筛选 ── */}
      <div className="mb-8 flex justify-end">
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
        </div>
      </div>

      {/* ── 奖项列表 ── */}
      <div className="space-y-6">
        {filteredAwards.length === 0 ? (
          <p className="text-center text-gray-400 py-6">
            {lang === 'zh' ? '暂无奖项' : 'No awards found'}
          </p>
        ) : (
          filteredAwards.map((award) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <FiAward className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="flex-grow">
                    {/* 奖项名称 + 年份徽章 */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {award.title[lang]}
                      </h3>
                      <span className="ml-2 text-sm bg-primary/20 text-primary px-2 py-1 rounded-md whitespace-nowrap">
                        {award.year}
                      </span>
                    </div>

                    {/* 颁发机构 */}
                    <p className="text-gray-400 text-sm mb-2">
                      {award.issuer[lang]}
                    </p>

                    {/* 奖项描述 */}
                    {award.description && (
                      <p className="text-gray-300 mb-4">
                        {award.description[lang]}
                      </p>
                    )}

                    {/* 查看证书按钮 */}
                    {award.certificateImage && (
                      <button
                        onClick={() => setSelectedAwardId(award.id)}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        <FiImage size={16} />
                        {lang === 'zh' ? '查看证书' : 'View Certificate'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* 证书图片模态框 */}
      <AnimatePresence>
        {selectedAward && selectedAward.certificateImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAwardId(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedAwardId(null)}
            >
              <FiX size={32} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black rounded-lg overflow-hidden">
                <img
                  src={selectedAward.certificateImage}
                  alt={selectedAward.title[lang]}
                  className="w-full h-auto"
                />
                <div className="p-6 bg-secondary">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {selectedAward.title[lang]}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {selectedAward.issuer[lang]} · {selectedAward.year}
                  </p>
                  {selectedAward.description && (
                    <p className="text-gray-300">
                      {selectedAward.description[lang]}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
