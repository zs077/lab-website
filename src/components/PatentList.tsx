'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiExternalLink, FiFileText } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { patents } from '@/data/patents';

export default function PatentList() {
  const { t, i18n } = useTranslation();
  const lang: 'zh' | 'en' = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const years = [...new Set(patents.map((patent) => patent.year))].sort((a, b) => b - a);

  const filteredPatents = patents
    .filter((patent) => yearFilter === null || patent.year === yearFilter)
    .sort((a, b) => b.year - a.year || b.id - a.id);

  return (
    <div>
      <div className="mb-8 flex justify-end">
        <div className="relative">
          <select
            value={yearFilter ?? 'all'}
            onChange={(event) =>
              setYearFilter(event.target.value === 'all' ? null : Number(event.target.value))
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

      <div className="space-y-6">
        {filteredPatents.length === 0 ? (
          <p className="text-center text-gray-400 py-6">{t('achievements.noPatents')}</p>
        ) : (
          filteredPatents.map((patent) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <FiFileText className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="flex-grow">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {patent.title[lang]}
                        </h3>
                        <p className="mt-2 text-gray-300">
                          <span className="text-gray-400">{t('achievements.inventors')}: </span>
                          {patent.inventors}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                        {patent.status && (
                          <span className="text-sm bg-white/10 text-gray-200 px-2 py-1 rounded-md whitespace-nowrap">
                            {patent.status[lang]}
                          </span>
                        )}
                        <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded-md whitespace-nowrap">
                          {patent.year}
                        </span>
                      </div>
                    </div>

                    {patent.patentNumber && (
                      <p className="mt-3 text-gray-400 text-sm">
                        {t('achievements.patentNumber')}: {patent.patentNumber}
                      </p>
                    )}

                    {patent.description && patent.description[lang] && (
                      <p className="mt-3 text-gray-300">{patent.description[lang]}</p>
                    )}

                    {patent.link && (
                      <a
                        href={patent.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        <FiExternalLink size={16} />
                        {t('achievements.link')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
