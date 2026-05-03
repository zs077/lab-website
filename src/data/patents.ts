// 推荐 id 使用递增整数；页面会按 year 降序、同一年按 id 降序显示，
// 所以最新年份/最新添加的条目会排在前面。
//
// 模板：
// {
//   id: 1,
//   title: {
//     zh: '专利名称（中文）',
//     en: 'Patent Title (English)',
//   },
//   inventors: '梁茨, 张三, 李四',
//   patentNumber: 'CNXXXXXXXXX',
//   year: 2025,
//   status: {
//     zh: '已授权',
//     en: 'Granted',
//   },
//   description: {
//     zh: '专利简介（可选）',
//     en: 'Patent description (optional)',
//   },
//   link: '',
// },
// ============================================================

export type Patent = {
  id: number;
  title: {
    zh: string;
    en: string;
  };
  inventors: string;
  patentNumber?: string;
  year: number;
  status?: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
  link?: string | null;
};

// ▼▼▼ 在此数组中维护所有专利数据
export const patents: Patent[] = [
  {
    id: 0,
    title: {
      zh: '一种基于RSS的自动驾驶路权优化换道方法',
      en: '一种基于RSS的自动驾驶路权优化换道方法',
    },
    inventors: '王天筱; 梁茨; 郑伟; 冉琦; 辛豪宇; 杨静; 席振杰; 于祎钒; 万泽众; 闫海奇',
    patentNumber: 'ZL 2024 1 1589507.5',
    year: 2025,
    status: {
      zh: '已授权',
      en: 'Granted',
    },
    description: {
      zh: '中国专利，ZL 2024 1 1589507.5，2025-10-10.',
      en: '中国专利，ZL 2024 1 1589507.5，2025-10-10.',
    },
    link: '',
  },
    {
    id: 1,
    title: {
      zh: 'Semantic segmentation network model uncertainty quantification method based on evidence inference',
      en: 'Semantic segmentation network model uncertainty quantification method based on evidence inference',
    },
    inventors: 'Rui Wang, Ci Liang, Wei Zheng, Yumei Zhang',
    patentNumber: 'US 12,293,278 B2',
    year: 2025,
    status: {
      zh: '已授权',
      en: 'Granted',
    },
    description: {
      zh: '美国专利，US 12,293,278 B2，May 6, 2025.',
      en: '美国专利，US 12,293,278 B2，May 6, 2025.',
    },
    link: '',
  },
];
