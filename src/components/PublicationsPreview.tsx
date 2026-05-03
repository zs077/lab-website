'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { FiFileText } from 'react-icons/fi';
import { publications } from '@/data/publications';

// ============================================================
// 📌 主页论文预览组件
//
// 自动从 src/data/publications.ts 读取前 4 篇论文
// 按年份降序、同一年按 id 降序排列后取前 N 篇
// 如需修改显示数量，改下方的 previewCount 变量即可
// ============================================================

export default function PublicationsPreview() {
  const { t, i18n } = useTranslation();
  const lang: 'zh' | 'en' = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  const subtitle = t('publications.subtitle');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 显示数量（修改此数字可改变主页显示的论文数）
  const previewCount = 4;

  // 按年份降序排列，同一年按 id 降序，取前 N 篇
  const sortedPublications = [...publications].sort(
    (a, b) => b.year - a.year || b.id - a.id
  );
  const previewPublications = sortedPublications.slice(0, previewCount);

  return (
    <section ref={ref} className="py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('publications.title')}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="space-y-6">
        {previewPublications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="glassmorphism p-6 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiFileText className="text-primary" size={24} />
              </div>

              <div className="ml-4 flex-grow">
                {/* 标题 + 年份徽章 */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <span className="ml-2 text-sm bg-primary/20 text-primary px-2 py-1 rounded-md whitespace-nowrap">
                    {pub.year}
                  </span>
                </div>

                {/* 作者 */}
                <p className="text-gray-300 mb-1">{pub.authors}</p>

                {/* 期刊/会议 */}
                <p className="text-gray-400 text-sm">{pub.venue}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/publications" className="btn-primary inline-block">
          {t('common.viewMore')}
        </Link>
      </div>
    </section>
  );
}
