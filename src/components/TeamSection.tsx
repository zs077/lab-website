'use client';

import TeamMemberCard from '@/components/TeamMemberCard';
import { teamData } from '@/data/team';
import { useTranslation } from 'react-i18next';

export default function TeamSection() {
  const { i18n } = useTranslation();
  const lang: 'zh' | 'en' = i18n.language?.startsWith('zh') ? 'zh' : 'en';

  // 合并所有成员，按职级排序：faculty 优先，然后 researchers
  const allMembers = [...teamData.faculty, ...teamData.researchers];

  // 只有一个教授时，用 justify-center 居中；否则用默认左对齐
  const facultyCount = teamData.faculty.length;
  const gridClass =
    facultyCount === 1
      ? 'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-items-center items-start'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start';

  return (
    <>
      {/* ── 教授 / 副教授 / 助理教授（无标题） ── */}
      {teamData.faculty.length > 0 && (
        <section className="mb-16">
          <div className={gridClass}>
            {teamData.faculty.map((member) => (
              <TeamMemberCard key={member.id} member={member} lang={lang} />
            ))}
          </div>
        </section>
      )}

      {/* ── 博士后 / 研究员（无标题） ── */}
      {teamData.researchers.length > 0 && (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {teamData.researchers.map((member) => (
              <TeamMemberCard key={member.id} member={member} lang={lang} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
