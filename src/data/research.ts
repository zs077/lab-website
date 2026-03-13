// ============================================================
// 研究方向数据文件 — 如何添加新研究方向：
//
// 在下方 researchAreas 数组末尾（▲▲▲ 注释上方）按照相同格式新增一个对象。
//
// ── 字段说明 ──
//
// id          : 递增整数，全局唯一，不可重复
//
// title       : 研究方向名称（双语）
//   zh: '智能交通'
//   en: 'Intelligent Transportation'
//
// description : 该方向的总体简介（双语，支持多行文本）
//   zh: '我们的智能交通研究结合计算机视觉、深度学习和大数据分析……'
//   en: 'Our intelligent transportation research combines computer vision……'
//
// projects    : 该方向下的具体子项目或研究点数组（双语）
//   每个项目是一个对象，包含 zh 和 en 两个版本
//   [
//     { zh: '基于深度学习的全天候交通场景分析系统', en: 'All-weather traffic scene analysis system……' },
//     { zh: '城市交通流优化与拥堵预测', en: 'Urban traffic flow optimization……' },
//   ]
//
// imageSrc    : 左侧配图的路径（public/ 下的相对路径）
//   e.g. '/images/research-1.jpg'
//   如果暂无图片，可填 null，会显示占位符
//
// link        : 底部"了解更多"按钮跳转的 URL
//   e.g. '/research/intelligent-transportation'
//   如果不需要链接，填 null（按钮会隐藏）
//
// ── 新研究方向模板 ──
//
// {
//   id: 6,
//   title: {
//     zh: '新研究方向名称',
//     en: 'New Research Direction Name',
//   },
//   description: {
//     zh: '该方向的中文简介……',
//     en: 'English description of this research direction……',
//   },
//   projects: [
//     {
//       zh: '子项目 1 中文名称',
//       en: 'Sub-project 1 English name',
//     },
//     {
//       zh: '子项目 2 中文名称',
//       en: 'Sub-project 2 English name',
//     },
//   ],
//   imageSrc: '/images/research-6.jpg',
//   link: '/research/new-direction',
// },
//
// 保存文件后网站会自动更新，无需修改其他任何文件。
// ============================================================

export type ResearchProject = {
  zh: string;
  en: string;
};

export type ResearchArea = {
  id: number;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  projects: ResearchProject[];
  imageSrc: string | null;
  link: string | null;
};

// ▼▼▼ 在此数组中维护所有研究方向数据 ▼▼▼
export const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: {
      zh: '智能车辆功能与预期功能安全 (SOTIF)',
      en: 'Intelligent Vehicle Functions and Safety of the Intended Functionality (SOTIF)',
    },
    description: {
      zh: '结合在沃尔沃汽车瑞典总部的丰富工业界经验，聚焦高级别自动驾驶系统的安全性。致力于研发安全、可靠、可扩展且可部署的算法与系统，推动自动驾驶技术从理论走向实际应用。',
      en: 'Combining rich industrial experience at Volvo Cars headquarters in Sweden, focusing on the safety of high-level autonomous driving systems. Committed to developing safe, reliable, scalable, and deployable algorithms and systems, advancing autonomous driving technology from theory to practical application.',
    },
    projects: [
      {
        zh: '基于场景的自动驾驶功能与预期功能安全 (SOTIF)',
        en: 'Scenario-based autonomous driving functions and Safety of the Intended Functionality (SOTIF)',
      },
      {
        zh: '高级别自动驾驶安全保障体系建设 (国家级青年人才计划项目)',
        en: 'Construction of high-level autonomous driving safety assurance system (National Youth Talent Program)',
      },
      {
        zh: '自动驾驶芯片安全架构与预期功能安全关键技术',
        en: 'Safety architecture of autonomous driving chips and key technologies for SOTIF',
      },
      {
        zh: '汽车行业国际标准 ISO 26262 等的特邀修订与应用',
        en: 'Invited revision and application of international automotive standards such as ISO 26262',
      },
    ],
    imageSrc: '/images/项目一.jpg', // 填写图片路径，如 '/images/research-sotif.jpg'
    link: null,     // 填写详情页链接，如 '/research/sotif'
  },
  {
    id: 2,
    title: {
      zh: '复杂环境感知与智能决策规划',
      en: 'Complex Environment Perception and Intelligent Decision Planning',
    },
    description: {
      zh: '利用计算机视觉和智能系统学习方法，研究车辆在复杂多变环境下的高精度感知与理解。重点探索感知与决策算法的可靠性与可解释性，确保系统在极端条件下的鲁棒性。',
      en: 'Using computer vision and intelligent system learning methods to study high-precision perception and understanding of vehicles in complex and changing environments. Focus on exploring the reliability and interpretability of perception and decision algorithms to ensure system robustness under extreme conditions.',
    },
    projects: [
      {
        zh: '感知与决策系统的可靠性与可解释性研究',
        en: 'Research on reliability and interpretability of perception and decision systems',
      },
      {
        zh: '融合场景安全约束与视觉感知的避撞方法研究 (国家自然科学基金项目)',
        en: 'Research on collision avoidance methods integrating scene safety constraints and visual perception (NSFC Project)',
      },
      {
        zh: '基于风险融合与视觉推理的人工-自动驾驶跟驰避撞方法 (省自然科学基金项目)',
        en: 'Human-autonomous driving car-following collision avoidance method based on risk fusion and visual reasoning (Provincial NSF Project)',
      },
      {
        zh: '恶劣天气等长尾交通场景的精准感知与理解',
        en: 'Precise perception and understanding of long-tail traffic scenarios such as adverse weather',
      },
    ],
    imageSrc: '/images/项目二.jpg', // 填写图片路径
    link: null,     // 填写详情页链接
  },
  {
    id: 3,
    title: {
      zh: '人机混行交通系统与人在环仿真',
      en: 'Human-Machine Mixed Traffic Systems and Human-in-the-Loop Simulation',
    },
    description: {
      zh: '面向未来自动驾驶车辆与人工驾驶车辆长期共存的复杂交通形态，利用先进的驾驶模拟平台开展人在环 (Human-in-the-Loop) 仿真，深度剖析人机交互行为与混行系统的安全性。',
      en: 'Facing the complex traffic pattern of long-term coexistence of autonomous and human-driven vehicles in the future, using advanced driving simulation platforms to conduct Human-in-the-Loop simulation, deeply analyzing human-machine interaction behavior and the safety of mixed traffic systems.',
    },
    projects: [
      {
        zh: '人在环模拟驾驶混行安全仿真与测试',
        en: 'Human-in-the-loop simulation driving mixed traffic safety simulation and testing',
      },
      {
        zh: '自动驾驶与人工驾驶车辆的博弈、交互与协同控制',
        en: 'Game theory, interaction, and cooperative control of autonomous and human-driven vehicles',
      },
      {
        zh: '面向人机混行场景的安全评估与风险预测模型',
        en: 'Safety assessment and risk prediction models for human-machine mixed scenarios',
      },
    ],
    imageSrc: '/images/项目三.png', // 填写图片路径
    link: null,     // 填写详情页链接
  },
  {
    id: 4,
    title: {
      zh: '地-空立体智慧交通多式联运',
      en: 'Ground-Air Three-Dimensional Intelligent Transportation Multimodal Transport',
    },
    description: {
      zh: '面向国家重大交通战略需求，探索未来城市及区域的立体化交通模式。聚焦智能系统学习、控制、协同和设计，研究地面智能车辆与空中交通工具的无缝衔接与联运机制。',
      en: 'Facing major national transportation strategic needs, exploring future urban and regional three-dimensional transportation modes. Focusing on intelligent system learning, control, coordination, and design, studying the seamless connection and intermodal transport mechanisms between ground intelligent vehicles and air transportation.',
    },
    projects: [
      {
        zh: '地空立体交通网络的协同规划与资源调度',
        en: 'Collaborative planning and resource scheduling of ground-air three-dimensional transportation networks',
      },
      {
        zh: '智慧交通多式联运系统的设计与优化',
        en: 'Design and optimization of intelligent transportation multimodal transport systems',
      },
      {
        zh: '新型智能交通系统中的学习、控制与协同机制',
        en: 'Learning, control, and coordination mechanisms in new intelligent transportation systems',
      },
    ],
    imageSrc: '/images/项目四.jpg', // 填写图片路径
    link: null,     // 填写详情页链接
  },
  // ▲▲▲ 在此行上方添加新研究方向 ▲▲▲
];
