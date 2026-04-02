export default {
  // 导航栏
  nav: {
    home: '首页',
    research: '研究方向',
    team: '团队成员',
    publications: '科研成果',
    contact: '联系我们',
  },
  
  // 首页 Hero 区域
  hero: {
    title: '科研实验室',
    subtitle: '探索未知，创新科技，引领未来',
    learnMore: '了解研究方向',
    contactUs: '联系我们',
  },
  
  // 研究方向
  research: {
    title: '研究方向',
    subtitle: '自动驾驶安全，感知可靠性、决策多目标优化、难例场景生成、地-空联运',
    learnMore: '了解更多',
    viewProjects: '查看相关项目',
    hideProjects: '收起项目',
  },
  
  // 团队成员
  team: {
    personalWebsite: '个人主页',
    toggleDetails: '展开/收起详情',
    title: '团队成员',
    subtitle: '共同推进科学研究与技术创新',
    viewAll: '查看全部团队成员',
    roles: {
      professor: '教授，博士生导师',
      associateProfessor: '副教授，博士生导师',
      assistantProfessor: '助理教授',
      phdStudent: '博士研究生',
      masterStudent: '硕士研究生',
    },
    members: {
      zhang: {
        name: '张教授',
        research: '智能交通系统，计算机视觉',
      },
      li: {
        name: '李博士',
        research: '多传感器融合，自动驾驶感知',
      },
      wang: {
        name: '王博士',
        research: '低可见场景感知，计算摄像学',
      },
      liu: {
        name: '刘同学',
        research: '深度学习，目标检测',
      },
    },
  },
  
  // 科研成果
  publications: {
    title: '科研成果',
    subtitle: '我们的最新研究成果和学术论文',
    viewAll: '查看全部成果',
    filter: {
      all: '全部',
      journal: '期刊论文',
      conference: '会议论文',
      patent: '专利',
      allYears: '所有年份',
      other: '其他',
    },
    search: '搜索论文标题、作者或关键词...',
    noResults: '没有找到匹配的论文',
    expandAbstract: '展开摘要',
    collapseAbstract: '收起摘要',
  },
  
  // 联系我们
  contact: {
    title: '联系我们',
    subtitle: '有任何问题或合作意向，欢迎随时联系我们',
    form: {
      name: '姓名',
      email: '邮箱',
      subject: '主题',
      message: '留言',
      send: '发送消息',
      sending: '发送中...',
      success: '消息发送成功！',
      error: '发送失败，请稍后重试。',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '您的邮箱地址',
      subjectPlaceholder: '请选择主题',
      messagePlaceholder: '请详细描述您的问题或需求...',
      required: '必填',
      invalidEmail: '请输入有效的邮箱地址',
      nameRequired: '请输入您的姓名',
      emailRequired: '请输入您的邮箱',
      subjectRequired: '请输入主题',
      messageRequired: '请输入消息内容',
      subjects: {
        cooperation: '合作咨询',
        project: '项目洽谈',
        admission: '招生信息',
        other: '其他问题',
      },
    },
    info: {
      address: '地址',
      email: '邮箱',
      phone: '电话',
    },
    followUs: '关注我们',
  },
  
  // 页脚
  footer: {
    title: '科研实验室',
    description: '致力于前沿科学研究，培养创新型人才，解决行业实际问题。',
    quickLinks: '快速链接',
    contactInfo: '联系方式',
    copyright: '科研实验室. All rights reserved.',
    address: 'Room 405, Chenghe Building, 2nd Campus, Harbin Institute of Technology',
  },
  
  // 视频演示
  videos: {
    sectionTitle: '视频演示',
    close: '关闭视频',
    notConfigured: '视频链接未配置',
    notConfiguredHint: '请在 src/data/videos.ts 中填写 videoSrc 或 iframeSrc',
  },

  // 通用
  common: {
    loading: '加载中...',
    error: '出错了',
    retry: '重试',
    back: '返回',
    next: '下一步',
    previous: '上一步',
    save: '保存',
    cancel: '取消',
    confirm: '确认',
    delete: '删除',
    edit: '编辑',
    search: '搜索',
    filter: '筛选',
    sort: '排序',
    viewMore: '查看更多',
  },
};
