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
    id: 2,
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
