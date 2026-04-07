// ============================================================
// 📌 视频演示数据文件 — 如何添加新视频：
//
// 在下方 videos 数组末尾（▲▲▲ 注释上方）按照相同格式新增一个对象。
//
// ── 字段说明 ──
//
// posterSrc : 封面图片 URL（卡片缩略图 + 视频播放前的预览图）
//             建议上传一张视频第一帧截图到 OSS，填写其直链
//             e.g. 'https://your-bucket.oss-cn-beijing.aliyuncs.com/demo1-poster.jpg'
//             不填时填 null，卡片显示渐变占位背景
//
// ossSrc    : 阿里云 OSS（或其他国内 CDN）的视频直链，中文模式下播放
//             e.g. 'https://your-bucket.oss-cn-beijing.aliyuncs.com/demo.mp4'
//             不使用时填 null
//
// bilibiliId: Bilibili 视频的 BV 号（不含 'BV' 前缀），中文模式 ossSrc 为 null 时回退到 B 站
//             e.g. '1xx411x7xx'  =>  https://player.bilibili.com/player.html?bvid=BV1xx411x7xx
//             不使用时填 null
//
// youtubeId : YouTube 视频 ID，英文模式下播放
//             e.g. 'dQw4w9WgXcQ'  =>  https://www.youtube.com/embed/dQw4w9WgXcQ
//             不使用时填 null
//
// ── 播放规则 ──
//   中文 (zh)：ossSrc 有值 → <video> 直播；否则 bilibiliId 有值 → <iframe> B站
//   英文 (en)：youtubeId 有值 → <iframe> YouTube；否则 ossSrc 有值 → <video> 直播
//   均无值  → 显示「未配置」占位
//
// 保存文件后网站自动更新，无需修改其他文件。
// ============================================================

export type VideoItem = {
  id: number;
  year: number;
  title: { en: string; zh: string };
  description: { en: string; zh: string };

  // 封面图 URL（卡片缩略图 + <video> poster），null 时显示渐变占位
  posterSrc: string | null;
  // 国内播放 —— 阿里云 OSS / 腾讯云 COS 等直链（中文模式优先）
  ossSrc: string | null;
  // 国内备选 —— Bilibili BV 号（不含 BV 前缀，中文模式 ossSrc 为 null 时使用）
  bilibiliId: string | null;
  // 海外播放 —— YouTube 视频 ID（英文模式使用）
  youtubeId: string | null;
};

// ▼▼▼ 在此数组中维护所有视频演示数据 ▼▼▼
export const videos: VideoItem[] = [
  {
    id: 1,
    year: 2026,
    title: {
      zh: '开放世界下基于图文映射语音标注与多模态大模型的自动驾驶困难场景（corner case）目标识别与预警',
      en: 'Object Detection and Risk Warning for Autonomous Driving Corner Cases Based on Image-Text Mapping Audio Annotation and Multimodal Large Models in Open World Scenarios',
    },
    description: {
      zh: '基于图文编码与视觉语言多模态大模型实现新实例标注的语音添加，以及高危目标文本语音预警，在夜间、雨、雾、雪、异常实例等自动驾驶困难场景中表现良好。',
      en: 'Utilizing image-text encoding and vision-language multimodal large models, this system implements voice annotation for new instances and provides text-to-speech risk warnings for high-risk objects. It demonstrates strong performance in challenging autonomous driving corner cases, including nighttime, rain, fog, snow, and abnormal object encounters.',
    },
    posterSrc: null,     // e.g. 'https://your-bucket.oss-cn-beijing.aliyuncs.com/demo2-poster.jpg'
    ossSrc: 'https://lab-01.oss-cn-beijing.aliyuncs.com/%E5%9C%BA%E6%99%AF%E7%9B%AE%E6%A0%87%E8%AF%86%E5%88%AB.mp4',
    bilibiliId: null,
    youtubeId: 'OoveHoq3qiU',
  },
  {
    id: 2,
    year: 2026,
    title: {
      zh: '基于多模态大模型的无人机搜救预案系统',
      en: 'UAV Search and Rescue Plan Generation System Based on Multimodal Large Models',
    },
    description: {
      zh: '利用无人机进行灾害现场侦查，并利用无人机回传数据至指挥终端，基于视觉语言多模态大模型生成实时智能搜救预案。',
      en: 'Utilizing UAVs for disaster site reconnaissance, this system transmits real-time data back to the command terminal to dynamically generate intelligent search and rescue plans based on vision-language multimodal large models.',
    },
    posterSrc: null,     // e.g. 'https://your-bucket.oss-cn-beijing.aliyuncs.com/demo2-poster.jpg'
    ossSrc: 'https://lab-01.oss-cn-beijing.aliyuncs.com/%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%90%9C%E6%95%91%E6%BC%94%E7%A4%BA.mp4',
    bilibiliId: null,
    youtubeId: '00jQXgcIMXM',
  },
  {
    id: 3,
    year: 2025,
    title: {
      zh: '自动驾驶STPA智能安全分析系统演示',
      en: 'Intelligent STPA Safety Analysis System Demo for Autonomous Driving',
    },
    description: {
      zh: '展示由团队开发的自动驾驶STPA智能安全分析系统。该系统结合大语言模型与专家知识库，通过输入顶层危害与控制行为，辅助推演不安全控制行为，最终揭示危险的根本“致因场景”。本系统致力于为行业安全人员提供强大助力，让复杂系统分析洞若观火。',
      en: "This demonstrates the Intelligent STPA Safety Analysis System for autonomous driving developed by our team. By integrating Large Language Models (LLMs) with expert knowledge bases, the system takes top-level hazards and control actions as inputs to assist in deducing Unsafe Control Actions (UCAs), ultimately uncovering the root 'causal scenarios' of potential hazards. Dedicated to empowering industry safety professionals, this system provides unprecedented clarity in the safety analysis of complex systems.",
    },
    posterSrc: null,     // e.g. 'https://your-bucket.oss-cn-beijing.aliyuncs.com/demo2-poster.jpg'
    ossSrc: 'https://lab-01.oss-cn-beijing.aliyuncs.com/b6def7cb90a5498e5beac2d3d51cad32.mp4',
    bilibiliId: null,
    youtubeId: 'JOSuxa-SUdY',
  },
  
  // ▲▲▲ 在此行上方添加新视频 ▲▲▲
];
