'use client';

import { useTranslation } from 'react-i18next';
import ResearchAreaCard from '@/components/ResearchAreaCard';
import { researchAreas } from '@/data/research';

export default function ResearchSection() {
  const { i18n } = useTranslation();
  const lang: 'zh' | 'en' = i18n.language?.startsWith('zh') ? 'zh' : 'en';

  return (
    <div className="space-y-24">
      {researchAreas.map((area) => (
        <ResearchAreaCard key={area.id} area={area} lang={lang} />
      ))}
    </div>
  );
}
