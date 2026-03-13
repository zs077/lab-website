'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { FiInfo } from 'react-icons/fi';
import { teamData } from '@/data/team';

// ============================================================
// 📌 主页团队成员预览组件
//
// 自动从 src/data/team.ts 读取前 4 个成员
// 优先显示 faculty（教授），不足 4 个时补充 researchers
// 如需修改显示数量，改下方的 previewCount 变量即可
// ============================================================

// 折叠详情面板内各小标题的中英文
const DETAIL_LABELS = {
  education: { zh: '教育背景', en: 'Education' },
  researchDetails: { zh: '研究方向', en: 'Research' },
  bio: { zh: '个人简介', en: 'Biography' },
} as const;

export default function TeamPreview() {
  const { t, i18n } = useTranslation();
  const lang: 'zh' | 'en' = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 显示数量（修改此数字可改变主页显示的成员数）
  const previewCount = 4;

  // 合并 faculty 和 researchers，取前 N 个
  const allMembers = [...teamData.faculty, ...teamData.researchers];
  const previewMembers = allMembers.slice(0, previewCount);

  const toggleDetails = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section ref={ref} className="py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('team.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          {t('team.subtitle')}
        </motion.p>
      </div>

      {/* items-start 让每个卡片独立控制高度，不会因为同行其他卡片展开而被撑高 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {previewMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="glassmorphism overflow-hidden"
          >
            {/* 卡片正面 */}
            <div className="p-6 text-center">
              {/* 头像 */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                {member.avatarSrc ? (
                  <Image
                    src={member.avatarSrc}
                    alt={member.name[lang]}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500 text-4xl font-bold">
                    {member.name[lang].charAt(0)}
                  </div>
                )}
              </div>

              {/* 姓名 */}
              <h3 className="text-xl font-bold mb-1">
                {member.name[lang]}
              </h3>

              {/* 职位 */}
              <p className="text-gray-400 mb-3">{member.title[lang]}</p>

              {/* 研究方向（截取前 50 字） */}
              <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                {member.researchArea[lang]}
              </p>

              {/* 展开详情按钮 */}
              <div className="flex justify-center">
                <button
                  onClick={() => toggleDetails(member.id)}
                  className={`transition-colors ${
                    expandedId === member.id
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-label={t('team.toggleDetails')}
                >
                  <FiInfo size={18} />
                </button>
              </div>
            </div>

            {/* 折叠详情面板 */}
            <AnimatePresence>
              {expandedId === member.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/50 p-6 border-t border-gray-800"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-primary font-semibold">
                        {DETAIL_LABELS.education[lang]}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {member.education[lang]}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold">
                        {DETAIL_LABELS.researchDetails[lang]}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {member.researchDetails[lang]}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold">
                        {DETAIL_LABELS.bio[lang]}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {member.bio[lang]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/team" className="btn-primary inline-block">
          {t('common.viewMore')}
        </Link>
      </div>
    </section>
  );
}
