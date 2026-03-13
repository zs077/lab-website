'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiVideo } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import { videos, VideoItem } from '@/data/videos';

function resolveUrl(item: VideoItem, lang: 'zh' | 'en'): string | null {
  if (lang === 'zh') {
    if (item.ossSrc) return item.ossSrc;
    if (item.bilibiliId)
      return `https://player.bilibili.com/player.html?bvid=BV${item.bilibiliId}&page=1`;
  } else {
    if (item.youtubeId) return `https://www.youtube.com/watch?v=${item.youtubeId}`;
    if (item.ossSrc) return item.ossSrc;
  }
  return null;
}

function getYoutubePoster(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function VideoModal({
  item,
  lang,
  onClose,
}: {
  item: VideoItem;
  lang: 'zh' | 'en';
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const url = resolveUrl(item, lang);

  let lightValue: string | boolean = false;
  if (item.posterSrc) {
    lightValue = item.posterSrc;
  } else if (item.youtubeId) {
    lightValue = getYoutubePoster(item.youtubeId);
  }

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
        onClick={onClose}
        aria-label={t('videos.close')}
      >
        <FiX size={32} />
      </button>

      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-video bg-black overflow-hidden rounded-t-lg">
          {url ? (
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              controls
              playing
              light={lightValue}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 gap-3">
              <FiVideo size={48} />
              <p className="text-sm">视频链接未配置 / Video not configured</p>
              <p className="text-xs opacity-60">
                请在 src/data/videos.ts 中填写 ossSrc / bilibiliId / youtubeId
              </p>
            </div>
          )}
        </div>

        <div className="bg-secondary p-5 rounded-b-lg">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xl font-bold">{item.title[lang]}</h3>
            <span className="text-sm text-gray-400">{item.year}</span>
          </div>
          <p className="text-gray-300 text-sm">{item.description[lang]}</p>
        </div>
      </div>
    </div>
  );
}

// 卡片封面：posterSrc > YouTube 缩略图直链 > 渐变占位
function CardThumbnail({
  posterSrc,
  youtubeId,
  title,
}: {
  posterSrc: string | null;
  youtubeId: string | null;
  title: string;
}) {
  const imgSrc = posterSrc ?? (youtubeId ? getYoutubePoster(youtubeId) : null);

  if (imgSrc) {
    return (
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    );
  }
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
      <FiVideo size={48} className="text-gray-600" />
    </div>
  );
}

export default function VideoList() {
  const { i18n } = useTranslation();
  const lang: 'zh' | 'en' = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const openVideo = (video: VideoItem) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glassmorphism overflow-hidden group cursor-pointer"
            onClick={() => openVideo(video)}
          >
            <div className="relative aspect-video overflow-hidden bg-gray-900">
              {/* 封面图：自动用 YouTube 缩略图，无需手动填 posterSrc */}
              <CardThumbnail
                posterSrc={video.posterSrc}
                youtubeId={video.youtubeId}
                title={video.title[lang]}
              />

              {/* 悬停遮罩：YouTube 官方红色播放按钮 */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  viewBox="0 0 68 48"
                  width="80"
                  height="57"
                  className="drop-shadow-xl"
                >
                  {/* 红色圆角矩形背景 */}
                  <path
                    d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                    fill="#ff0000"
                  />
                  {/* 白色三角播放图标 */}
                  <path d="M45 24 27 14v20" fill="#fff" />
                </svg>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {video.title[lang]}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{video.year}</p>
              <p className="text-gray-300 text-sm line-clamp-3">
                {video.description[lang]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {activeVideo && (
        <VideoModal item={activeVideo} lang={lang} onClose={closeVideo} />
      )}
    </>
  );
}
