// ============================================================
// 📌 团队成员数据文件
//
// ── 如何添加新成员 ──
//
// 1. 确定该成员属于哪个分组：
//      faculty    → 教授/副教授/助理教授（博士生导师等）
//      researcher → 博士后、研究员
//      student    → 博士生、硕士生
//
// 2. 在对应数组末尾的 // ▲▲▲ 注释上方，复制下面的模板并填写信息：
//
// ─────────────── 新成员模板（复制此块，按需填写） ───────────────
// {
//   id: 10,                          // ① 递增整数，全局唯一，不可重复
//   avatarSrc: null,                 // ② 头像图片路径，放在 public/images/ 下
//                                    //    例如 '/images/student5.jpg'
//                                    //    暂无图片填 null，会显示默认占位头像
//   email: 'newstudent@lab.edu',     // ③ 邮箱（纯文本，不分语言）
//   personalLink: '',                // ④ 个人主页 URL；没有就填空字符串 ''
//
//   // ── 以下字段均需填写中英两个版本 ──
//   name: {
//     zh: '张同学',                  // ⑤ 中文姓名
//     en: 'Zhang',                   //    英文姓名
//   },
//   title: {
//     zh: '硕士研究生',              // ⑥ 中文职称/身份
//     en: 'Master Student',          //    英文职称/身份
//   },
//   researchArea: {
//     zh: '目标检测，迁移学习',       // ⑦ 中文研究方向（卡片正面简短展示）
//     en: 'Object Detection, Transfer Learning',
//   },
//   education: {
//     zh: '本实验室在读硕士生',       // ⑧ 中文教育背景（折叠详情里展示）
//     en: 'Master student at this lab',
//   },
//   researchDetails: {
//     zh: '研究基于迁移学习的小目标检测方法……', // ⑨ 中文研究方向详情（折叠详情）
//     en: 'Research on small object detection via transfer learning...',
//   },
//   bio: {
//     zh: '张同学 2024 年加入实验室……',  // ⑩ 中文个人简介（折叠详情）
//     en: 'Zhang joined the lab in 2024...',
//   },
// },
// ────────────────────────────────────────────────────────────────
//
// 保存后网站自动更新，无需修改其他任何文件。
// ============================================================

/** 双语字符串 */
export type BilingualStr = { zh: string; en: string };

/** 单个团队成员的完整数据结构 */
export type TeamMember = {
  id: number;
  /** 头像图片路径（public/ 下的相对路径），暂无时填 null */
  avatarSrc: string | null;
  /** 邮箱，不分语言 */
  email: string;
  /** 个人主页，没有填空字符串 */
  personalLink: string;
  /** 姓名（双语） */
  name: BilingualStr;
  /** 职称 / 身份（双语） */
  title: BilingualStr;
  /** 研究方向简短版，显示在卡片正面（双语） */
  researchArea: BilingualStr;
  /** 教育背景，显示在折叠详情（双语） */
  education: BilingualStr;
  /** 研究方向详情，显示在折叠详情（双语） */
  researchDetails: BilingualStr;
  /** 个人简介，显示在折叠详情（双语） */
  bio: BilingualStr;
};

/** 按分组组织的团队数据 */
export type TeamData = {
  /** 教授 / 副教授 / 助理教授 */
  faculty: TeamMember[];
  /** 博士后 / 研究员 */
  researchers: TeamMember[];
  /** 博士生 / 硕士生 */
  students: TeamMember[];
};

// ============================================================
// ▼▼▼ 在对应数组中维护团队成员数据 ▼▼▼
// ============================================================
export const teamData: TeamData = {

  // ──────────────────────────────────────
  // 教授 / 副教授 / 助理教授
  // ──────────────────────────────────────
  faculty: [
    {
      id: 1,
      avatarSrc: '/images/下载.jpg',
      email: 'liangci321@hit.edu.cn',
      personalLink: 'https://homepage.hit.edu.cn/liangci?lang=zh',
      name:          { zh: '梁茨',   en: 'Ci Liang' },
      title:         { zh: '教授，博士生导师', en: 'Professor, Ph.D. Supervisor' },
      researchArea:  { zh: '自动驾驶安全，智能交通系统安全，人类行为分析', en: 'Autonomous Driving Safety, ITS Safety, Human Behavior Analysis' },
      education:     { zh: '法国交通、发展与网络科学技术研究院 (IFSTTAR) / 里尔大学，计算机科学博士', en: 'The FrenchI nstitute of Science and Technology for Transport, Development and Networks (IFSTTAR)，French National Railway Company (SNCF)/Université de Lille，Ph.D. COMPUTER SCIENCE' },
      researchDetails: {
        zh: '主要研究领域包括自动驾驶安全、道路与铁路安全、智能交通系统（ITS）安全及人类行为分析 。在技术方法上，专注于概率与统计方法、数据科学、贝叶斯推理以及机器学习 。',
        en: 'Focuses on Autonomous driving safety, Road/Railway safety, ITS safety, and Human behavior analysis. Technical expertise includes Probabilistic/Statistical Methods, Data Science, Bayesian Inference, and Machine Learning.',
      },
      bio: {
        zh: '梁茨教授目前就职于哈尔滨工业大学，担任教授及博士生导师 。在加入学术界前，她曾在瑞典沃尔沃汽车总部担任高级工程师，负责L4级自动驾驶系统及电动汽车动力与能源控制系统的功能安全 。她是 IEEE 高级会员 ，并于2024年入选国家交通行业高层次领军人才项目 。此外，她还在多个国际组织任职，如担任 SafeComp 研讨会主席及 SAE 国际期刊客座主编等',
        en: 'Prof. Ci Liang is a Professor and Ph.D. Supervisor at Harbin Institute of Technology. Prior to her academic career, she worked as a Senior Engineer at Volvo Cars Headquarters in Sweden, where she was responsible for the functional safety of L4 Autonomous Driving Systems and Electric Vehicle Power & Energy control systems. She is an IEEE Senior Member and was awarded the National Transportation Leadership Talent Program in 2024. She also actively serves the international academic community, holding roles such as SafeComp Workshop Chair and Guest Editor for the SAE International Journal.',
      },
    },
    // ▲▲▲ 在此行上方添加新教授 ▲▲▲
  ],

  // ──────────────────────────────────────
  // 博士后 / 研究员
  // ──────────────────────────────────────
  researchers: [
    {
      id: 4,
      avatarSrc: '/images/postdoc1.jpg',
      email: 'postdoc1@lab.edu',
      personalLink: 'https://example.com/postdoc1',
      name:          { zh: '陈研究员', en: 'Dr. Chen' },
      title:         { zh: '博士后研究员', en: 'Postdoctoral Researcher' },
      researchArea:  { zh: '神经网络压缩，边缘计算', en: 'Neural Network Compression, Edge Computing' },
      education:     { zh: '清华大学计算机科学博士', en: 'PhD in Computer Science, Tsinghua University' },
      researchDetails: {
        zh: '神经网络压缩与边缘计算，开发了多个适用于资源受限设备的轻量级深度学习模型。',
        en: 'Neural network compression and edge computing, developing lightweight deep learning models for resource-constrained devices.',
      },
      bio: {
        zh: '陈研究员致力于将大型模型部署到边缘端，相关工作已在多个顶级会议发表。',
        en: 'Dr. Chen focuses on deploying large models to the edge, with publications at top conferences.',
      },
    },
    {
      id: 5,
      avatarSrc: '/images/postdoc2.jpg',
      email: 'postdoc2@lab.edu',
      personalLink: 'https://example.com/postdoc2',
      name:          { zh: '黄研究员', en: 'Dr. Huang' },
      title:         { zh: '博士后研究员', en: 'Postdoctoral Researcher' },
      researchArea:  { zh: '强化学习，自动驾驶决策', en: 'Reinforcement Learning, Autonomous Driving Decision' },
      education:     { zh: '北京大学人工智能博士', en: 'PhD in Artificial Intelligence, Peking University' },
      researchDetails: {
        zh: '强化学习与自动驾驶决策系统，设计了多个高效决策算法，在国际竞赛中屡获奖项。',
        en: 'Reinforcement learning and autonomous driving decision systems, with award-winning algorithms in international competitions.',
      },
      bio: {
        zh: '黄研究员在强化学习领域拥有丰富经验，研究成果已应用于自动驾驶仿真平台。',
        en: 'Dr. Huang has extensive expertise in RL, with results integrated into autonomous driving simulation platforms.',
      },
    },
    // ▲▲▲ 在此行上方添加新研究员 ▲▲▲
  ],

  // ──────────────────────────────────────
  // 博士生 / 硕士生
  // ──────────────────────────────────────
  // 💡 新同学入学后，在此处 ▲▲▲ 注释上方添加对象即可
  students: [
    {
      id: 6,
      avatarSrc: null,
      email: 'student1@lab.edu',
      personalLink: '',
      name:          { zh: '刘同学', en: 'Liu' },
      title:         { zh: '博士研究生', en: 'PhD Student' },
      researchArea:  { zh: '深度学习，目标检测', en: 'Deep Learning, Object Detection' },
      education:     { zh: '本实验室在读博士生', en: 'PhD student at this lab' },
      researchDetails: {
        zh: '研究基于深度学习的目标检测算法，重点关注小目标和遮挡场景下的性能优化。',
        en: 'Research on deep learning-based object detection, focusing on small object and occlusion scenarios.',
      },
      bio: {
        zh: '刘同学在读博士期间已在国内外重要学术会议发表多篇论文。',
        en: 'Liu has published multiple papers at major domestic and international conferences during PhD study.',
      },
    },
    {
      id: 7,
      avatarSrc: null,
      email: 'student2@lab.edu',
      personalLink: '',
      name:          { zh: '赵同学', en: 'Zhao' },
      title:         { zh: '博士研究生', en: 'PhD Student' },
      researchArea:  { zh: '3D 点云处理，场景理解', en: '3D Point Cloud Processing, Scene Understanding' },
      education:     { zh: '本实验室在读博士生', en: 'PhD student at this lab' },
      researchDetails: {
        zh: '专注于 3D 点云处理和场景理解，开发了高效的点云分割与识别算法。',
        en: 'Focused on 3D point cloud processing and scene understanding, developing efficient segmentation and recognition algorithms.',
      },
      bio: {
        zh: '赵同学积极参与国内外学术交流，研究成果获多个学术奖励。',
        en: 'Zhao actively participates in academic exchanges and has received multiple academic awards.',
      },
    },
    {
      id: 8,
      avatarSrc: null,
      email: 'student3@lab.edu',
      personalLink: '',
      name:          { zh: '杨同学', en: 'Yang' },
      title:         { zh: '硕士研究生', en: 'Master Student' },
      researchArea:  { zh: '多模态学习，视频分析', en: 'Multimodal Learning, Video Analysis' },
      education:     { zh: '本实验室在读硕士生', en: 'Master student at this lab' },
      researchDetails: {
        zh: '研究结合视觉与语言信息的视频理解模型，探索多模态学习在场景分析中的应用。',
        en: 'Research on video understanding models combining visual and language information, exploring multimodal learning for scene analysis.',
      },
      bio: {
        zh: '杨同学对多模态人工智能有浓厚兴趣，积极参与实验室各类科研项目。',
        en: 'Yang has a strong interest in multimodal AI and actively participates in various lab research projects.',
      },
    },
    {
      id: 9,
      avatarSrc: null,
      email: 'student4@lab.edu',
      personalLink: '',
      name:          { zh: '孙同学', en: 'Sun' },
      title:         { zh: '硕士研究生', en: 'Master Student' },
      researchArea:  { zh: '自监督学习，图像分割', en: 'Self-Supervised Learning, Image Segmentation' },
      education:     { zh: '本实验室在读硕士生', en: 'Master student at this lab' },
      researchDetails: {
        zh: '研究自监督学习方法在图像分割任务中的应用，致力于减少对大量标注数据的依赖。',
        en: 'Research on self-supervised learning for image segmentation, aiming to reduce reliance on large-scale annotated data.',
      },
      bio: {
        zh: '孙同学研究方向聚焦于少标注场景下的视觉感知，已在相关方向取得初步成果。',
        en: 'Sun focuses on visual perception with limited annotations and has achieved initial results in this direction.',
      },
    },
    // ▲▲▲ 在此行上方添加新学生 ▲▲▲
  ],
};
