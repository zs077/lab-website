// ============================================================
// 📌 荣誉奖项数据文件
//
// ── 如何添加新奖项 ──
//
// 在 awards 数组末尾的 // ▲▲▲ 注释上方，复制下面的模板并填写信息：
//
// ─────────────── 新奖项模板（复制此块，按需填写） ───────────────
// {
//   id: 10,                          // ① 递增整数，全局唯一，不可重复；同一年 id 越大越靠前
//   title: {
//     zh: '奖项名称（中文）',
//     en: 'Award Name (English)',
//   },
//   issuer: {
//     zh: '颁发机构（中文）',
//     en: 'Issuing Organization (English)',
//   },
//   year: 2024,                      // ② 获奖年份
//   description: {
//     zh: '奖项描述或获奖理由（中文）',
//     en: 'Award description or reason (English)',
//   },  // ④ 可选，不填则不显示
//   certificateImage: '/images/awards/award1.jpg',  // ③ 证书图片路径（可选，填 null 则不显示）
// },
// ─────────────────────────────────────────────────────────
//
// 证书图片说明：
// - 将证书图片放到 public/images/awards/ 目录下
// - 填写相对路径，如：'/images/awards/award1.jpg'
// - 如果没有证书图片，填 null
//
// 页面会按 year 降序、同一年按 id 降序显示。保存后网站自动更新，
// 无需修改其他任何文件。
// ============================================================

/** 单个奖项的数据结构 */
export type Award = {
  id: number;
  /** 奖项名称 */
  title: { zh: string; en: string };
  /** 颁发机构 */
  issuer: { zh: string; en: string };
  /** 获奖年份 */
  year: number;
  /** 奖项描述或获奖理由（可选） */
  description?: { zh: string; en: string };
  /** 证书图片路径（可选） */
  certificateImage: string | null;
};

// ============================================================
// ▼▼▼ 在此维护荣誉奖项数据 ▼▼▼
// ============================================================
export const awards: Award[] = [
  {
    id: 2,
    title: {
      zh: '中国研究生智慧城市技术与创意设计大赛二等奖',
      en: 'Second Prize, China Graduate Smart City Technology and Creative Design Competition',
    },
    issuer: {
      zh: '中国学位与研究生教育学会',
      en: 'Chinese Academy of Degree and Graduate Education',
    },
    year: 2025,
    certificateImage: null,
  },
  {
    id: 3,
    title: {
      zh: '国际交通基础设施仿真大赛二等奖',
      en: 'Second Prize, International Traffic Infrastructure Simulation Competition',
    },
    issuer: {
      zh: '国际交通运输协会',
      en: 'International Transportation Association',
    },
    year: 2024,
    certificateImage: null,
  },
  {
    id: 1,
    title: {
      zh: '全国"启真问智"人工智能模型&智能体大赛一等奖',
      en: 'First Prize, National "Qizhen Wenzhi" AI Model & Intelligent Agent Competition',
    },
    issuer: {
      zh: '中国人工智能学会',
      en: 'Chinese Association for Artificial Intelligence',
    },
    year: 2025,
    certificateImage: '/images/awards/f0ba41f3e7c9ee02f4bb848b879b4e3a.jpg',
  },
  {
    id: 4,
    title: {
      zh: '中国机器人及人工智能大赛三等奖',
      en: 'Third Prize, China Robotics and Artificial Intelligence Competition',
    },
    issuer: {
      zh: '中国机器人产业联盟',
      en: 'China Robot Industry Alliance',
    },
    year: 2024,
    certificateImage: null,
  },
  // ▲▲▲ 在此行上方添加新奖项 ▲▲▲
];
