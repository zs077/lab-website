'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { FiImage } from 'react-icons/fi';
import { researchAreas } from '@/data/research';

// ============================================================
// 📌 主页研究方向预览组件
//
// 自动从 src/data/research.ts 读取前 3 个研究方向
// 如需修改显示数量，改下方的 .slice(0, 3) 中的数字即可
// ============================================================

export default function ResearchHighlights() {
  const { t, i18n } = useTranslation();
  const lang: 'zh' | 'en' = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 取前 3 个研究方向（修改数字可改变显示数量）
  const highlightedAreas = researchAreas.slice(0, 3);

  return (
    <section id="research" ref={ref} className="py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('research.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          {t('research.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlightedAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="glassmorphism p-6 group"
          >
            {/* 封面图 */}
            <div className="h-48 mb-4 overflow-hidden rounded-lg relative bg-gray-800">
              {area.imageSrc ? (
                <>
                  <Image
                    src={area.imageSrc}
                    alt={area.title[lang]}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FiImage size={48} className="text-gray-600" />
                </div>
              )}
            </div>

            {/* 标题 */}
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {area.title[lang]}
            </h3>

            {/* 描述（截取前 100 字） */}
            <p className="text-gray-300 mb-4 line-clamp-3">
              {area.description[lang]}
            </p>

            {/* "了解更多"链接 */}
            {area.link && (
              <Link
                href={area.link}
                className="text-primary hover:text-blue-400 font-medium inline-flex items-center"
              >
                {t('research.learnMore')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/research" className="btn-primary inline-block">
          {t('common.viewMore')}
        </Link>
      </div>
    </section>
  );
}
