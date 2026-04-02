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
      avatarSrc: '/images/梁.jpg',
      email: 'liangci321@hit.edu.cn',
      personalLink: 'https://homepage.hit.edu.cn/liangci?lang=zh',
      name:          { zh: '梁茨',   en: 'Ci LIANG' },
      title:         { zh: '教授，博士生导师，国家级青年人才', en: 'Full Professor, Ph.D. Supervisor' },
      researchArea:  { zh: '自动驾驶安全，智能交通系统安全，驾驶行为分析', en: 'Autonomous Driving Safety, ITS Safety, Driving Behavior Analysis' },
      education:     { zh: '法国交通、发展与网络科学技术研究院 (IFSTTAR) / 里尔大学，计算机科学博士', en: 'The French Institute of Science and Technology for Transport, Development and Networks (IFSTTAR), French National Railway Company (SNCF)/Université de Lille, Ph.D. COMPUTER SCIENCE' },
      researchDetails: {
        zh: '主要研究领域包括自动驾驶安全、道路与铁路安全、智能交通系统（ITS）安全及驾驶行为分析。在技术方法上，专注于机器学习、概率与统计方法、数据科学以及贝叶斯推理。',
        en: 'Focusing on Autonomous driving safety, ITS safety, and Driving behavior analysis. Technical expertise includes Machine Learning, Probabilistic/Statistical Methods, Data Science, and Bayesian Inference.',
      },
      bio: {
        zh: '梁茨教授现任职于哈尔滨工业大学，担任教授及博士生导师，国家级青年人才。曾任沃尔沃汽车瑞典总部高级工程师，并荣获第八届 ABERTIS 国际奖（七国联盟）交通与道路安全奖提名。担任国际自动控制联合会IFAC-TC 7.4交通系统委员会委员，计算机安全与可靠性国际会议SafeComp（工业计算机系统欧盟第7技术委员会主办）分会主席/国际项目委员等学术兼职、SAE旗舰期刊客座编辑，IEEE Senior Member。',
        en: 'Ci LIANG currently serves as a Professor and Doctoral Supervisor at Harbin Institute of Technology (HIT), and is recognized as a National-level Young Talent. She previously worked as a Senior Engineer at the Volvo Cars Headquarters in Sweden,and won a nomination of 8th ABERTIS International Prize (Seven-country Alliance) for transport and road safety. Her academic affiliations include serving as a committee member for the International Federation of Automatic Control (IFAC) TC 7.4 on Transportation Systems, and as Workshop Chair and International Program Committee Member for SafeComp (the International Conference on Computer Safety, Reliability, and Security, hosted by the European Workshop on Industrial Computer Systems Technical Committee 7). Additionally, she serves as a Guest Editor for SAE flagship journals and is an IEEE Senior Member.',
      },
    },
    // ▲▲▲ 在此行上方添加新教授 ▲▲▲
  ],

  // ──────────────────────────────────────
  // 博士后 / 研究员
  // ──────────────────────────────────────
  researchers: [
    {
      id: 2,
      avatarSrc: '/images/黄.jpg',
      email: '',
      personalLink: '',
      name:          { zh: '黄兰', en: 'Lan Huang' },
      title:         { zh: '副研究员', en: 'Associate Research Fellow' },
      researchArea:  { zh: '道路交通安全', en: 'Road Traffic Safety' },
      education:     { zh: '工学博士，交通运输工程', en: 'Doctor of Engineering, Major in Transportation Engineering' },
      researchDetails: {
        zh: '道路交通安全',
        en: 'Road Traffic Safety',
      },
      bio: {
        zh: '黄兰是交通工程专业博士学位的副研究员，主要从事道路交通安全研究。',
        en: 'Huang Lan is an associate research fellow with a doctoral degree in transportation engineering, specializing in road traffic safety research.',
      },
    },
    {
      id: 3,
      avatarSrc: '/images/赵.jpg',
      email: '',
      personalLink: '', 
      name: { zh: '赵明阳', en: 'Mingyang Zhao' },
      title: { zh: '博士', en: 'Ph.D.' },
      researchArea: { 
        zh: '自动驾驶安全分析，基于强化学习的自动驾驶决策方法', 
        en: 'Autonomous Driving Safety Analysis, Reinforcement Learning-based Autonomous Driving Decision-making' 
      },
      education: { 
        zh: '哈尔滨工业大学，交通运输工程博士', 
        en: 'Harbin Institute of Technology, Ph.D. in Traffic and Transportation Engineering' 
      },
      researchDetails: {
        zh: '主要研究方向为自动驾驶安全分析及基于强化学习的决策方法。参与多项科研项目，包括国家自然科学基金及黑龙江省自然科学基金项目。',
        en: 'Research focuses on safety analysis for autonomous driving and decision-making methods based on reinforcement learning. Involved in multiple research initiatives, including projects funded by the National Natural Science Foundation of China and the Natural Science Foundation of Heilongjiang Province.',
      },
      bio: {
        zh: '在Applied Mathematical Modelling、Physica A等交通领域国内外顶级期刊及会议上发表论文6篇。授权及受理中国发明专利5项，瑞典发明专利1项。现任SafeComp（由欧洲EWICS TC7于1979年成立）分会SRToITS项目委员会成员，并获评FTTE 2025交通运输领域“未来之星”。',
        en: 'Published 6 papers in top-tier international journals and conferences in the transportation field, such as Applied Mathematical Modelling and Physica A. Holds 5 Chinese invention patents (authorized or pending) and 1 Swedish invention patent. He is a member of the SRToITS Project Committee of SafeComp (founded by European EWICS TC7 in 1979) and was recognized as a "Future Star" in the transportation field at FTTE 2025.',
      },
    },
    {
      id: 4, 
      avatarSrc: '/images/吕.jpg',
      email: '', 
      personalLink: '',
      name: { zh: '吕周杭', en: 'Zhouhang Lv' }, 
      title: { zh: '博士研究生', en: 'Ph.D. Student' },
      researchArea: { 
        zh: '预期功能安全（SOTIF），VLA，安全分析，驾驶员模型', 
        en: 'Safety of the Intended Functionality (SOTIF), VLA, Safety Analysis, Driver Modeling' 
      },
      education: { 
        zh: '哈尔滨工业大学，交通信息与控制工程系博士研究生', 
        en: 'Harbin Institute of Technology, Ph.D. Student in Dept. of Traffic Information and Control Engineering' 
      },
      researchDetails: {
        zh: '主要研究方向聚焦于自动驾驶系统的预期功能安全（SOTIF）、VLA、安全分析、驾驶员模型。',
        en: 'Research primarily focuses on the Safety of the Intended Functionality (SOTIF) for autonomous driving systems,  VLA, Safety Analysis, Driver Modeling.',
      },
      bio: {
        zh: '哈尔滨工业大学交通信息与控制工程系在读博士研究生。主要致力于自动驾驶系统的前沿安全理论与模型研究。',
        en: 'Currently a Ph.D. student in the Department of Traffic Information and Control Engineering at Harbin Institute of Technology, dedicated to cutting-edge safety theories and modeling for autonomous driving systems.',
      },
    },
    {
      id: 5, // ID顺延，可根据你的实际情况修改
      avatarSrc: '/images/卢1.jpg',
      email: '',
      personalLink: '',
      name: { zh: '卢唯', en: 'Wei Lu' },
      title: { zh: '博士研究生', en: 'Ph.D. Student' },
      researchArea: { 
        zh: '车辆编队协同驾驶，多传感器融合，大模型算法，强化学习', 
        en: 'Cooperative Driving of Vehicle Platoons, Multi-sensor Fusion, Large Model Algorithms, Reinforcement Learning' 
      },
      education: { 
        zh: '哈尔滨工业大学，交通信息与控制工程系博士研究生', 
        en: 'Harbin Institute of Technology, Ph.D. Student in Dept. of Traffic Information and Control Engineering' 
      },
      researchDetails: {
        zh: '主要研究方向包括车辆编队协同驾驶控制技术、多传感器融合、大模型算法和强化学习。',
        en: 'Research primarily focuses on cooperative driving control technologies for vehicle platoons, multi-sensor fusion, Large Model Algorithms and Reinforcement Learning.',
      },
      bio: {
        zh: '哈尔滨工业大学交通信息与控制工程系在读博士研究生。致力于研究基于新一代人工智能与大模型算法的自动驾驶协同与控制技术。',
        en: 'Currently a Ph.D. student in the Department of Traffic Information and Control Engineering at Harbin Institute of Technology, dedicated to researching collaborative and control technologies for autonomous driving based on next-generation artificial intelligence and Large Model algorithms.',
      },
    },
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



