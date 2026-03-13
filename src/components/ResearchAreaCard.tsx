'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronRight, FiImage } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import type { ResearchArea } from '@/data/research';

type Props = {
  area: ResearchArea;
  lang: 'zh' | 'en';
};

export default function ResearchAreaCard({ area, lang }: Props) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-row md:items-start gap-8"
    >
      {/* 左侧配图 */}
      <div className="md:w-1/2 overflow-hidden rounded-xl bg-gray-800">
        {area.imageSrc ? (
          <Image
            src={area.imageSrc}
            alt={area.title[lang]}
            width={800}
            height={500}
            className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full aspect-video rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <FiImage size={48} className="text-gray-600" />
          </div>
        )}
      </div>

      {/* 右侧内容 */}
      <div className="md:w-1/2">
        {/* 标题 — 随语言切换 */}
        <h2 className="text-3xl font-bold mb-4 text-primary">{area.title[lang]}</h2>

        {/* 描述 — 随语言切换 */}
        <p className="text-gray-300 mb-6 leading-relaxed">{area.description[lang]}</p>

        {/* 项目列表展开/收起 */}
        <div className="mb-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-primary hover:text-blue-400 transition-colors font-medium mb-4"
          >
            {isExpanded
              ? t('research.hideProjects')
              : t('research.viewProjects')}
            <FiChevronRight
              className={`ml-1 transition-transform duration-300 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </button>

          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-5 space-y-2 text-gray-300"
            >
              {area.projects.map((project, index) => (
                <li key={index} className="list-disc list-outside">
                  {project[lang]}
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* "了解更多"按钮 — 有链接时显示，文字随语言切换 */}
        {area.link && (
          <a href={area.link} className="btn-primary inline-block">
            {t('research.learnMore')}
          </a>
        )}
      </div>
    </motion.div>
  );
}
