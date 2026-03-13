'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from '@/data/team';

type Props = {
  member: TeamMember;
  lang: 'zh' | 'en';
};

// 折叠详情面板内各小标题的中英文
const DETAIL_LABELS = {
  education:       { zh: '教育背景', en: 'Education' },
  researchDetails: { zh: '研究方向', en: 'Research' },
  bio:             { zh: '个人简介', en: 'Biography' },
} as const;

export default function TeamMemberCard({ member, lang }: Props) {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  const toggle = () => setShowDetails((v) => !v);

  return (
    <motion.div
      className="glassmorphism overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* ── 卡片正面（点击整块切换详情） ── */}
      <div
        className="p-6 text-center cursor-pointer"
        onClick={toggle}
      >
        {/* 头像 */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 bg-gray-800">
          {member.avatarSrc ? (
            <Image
              src={member.avatarSrc}
              alt={member.name[lang]}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-primary/60">
              {member.name[lang].charAt(0)}
            </div>
          )}
        </div>

        {/* 姓名 */}
        <h3 className="text-xl font-bold mb-1">
          {member.name[lang]}
        </h3>

        {/* 职称 */}
        <p className="text-gray-400 mb-3">
          {member.title[lang]}
        </p>

        {/* 研究方向简短版 */}
        <p className="text-sm text-gray-300 mb-4">
          {member.researchArea[lang]}
        </p>

        {/* 展开详情按钮 */}
        <div className="flex justify-center">
          <button
            className={`transition-colors ${
              showDetails ? 'text-primary' : 'text-gray-400 hover:text-primary'
            }`}
            aria-label={t('team.toggleDetails')}
            onClick={(e) => { e.stopPropagation(); toggle(); }}
          >
            <FiInfo size={18} />
          </button>
        </div>
      </div>

      {/* ── 折叠详情面板 ── */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 p-6 border-t border-gray-800"
          >
            <div className="space-y-3">
              <div>
                <h4 className="text-primary font-semibold">{DETAIL_LABELS.education[lang]}</h4>
                <p className="text-gray-300 text-sm">{member.education[lang]}</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold">{DETAIL_LABELS.researchDetails[lang]}</h4>
                <p className="text-gray-300 text-sm">{member.researchDetails[lang]}</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold">{DETAIL_LABELS.bio[lang]}</h4>
                <p className="text-gray-300 text-sm">{member.bio[lang]}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
