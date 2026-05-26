'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiVideo } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import { videos, VideoItem } from '@/data/videos';

type VideoSource = {
  provider: 'oss' | 'bilibili' | 'youtube';
  url: string;
};

const PLAYER_LOAD_TIMEOUT_MS = 7000;

function normalizeBilibiliId(id: string): string {
  const trimmedId = id.trim();
  const matchedId = trimmedId.match(/BV[A-Za-z0-9]+/i)?.[0] ?? trimmedId;

  return matchedId.startsWith('BV') ? matchedId : `BV${matchedId}`;
}

function uniqueSources(sources: Array<VideoSource | null>): VideoSource[] {
  const seen = new Set<string>();

  return sources.filter((source): source is VideoSource => {
    if (!source || seen.has(source.url)) return false;
    seen.add(source.url);
    return true;
  });
}

function getVideoSources(item: VideoItem, lang: 'zh' | 'en'): VideoSource[] {
  const oss = item.ossSrc
    ? {
        provider: 'oss' as const,
        url: item.ossSrc,
      }
    : null;
  const bilibili = item.bilibiliId
    ? {
        provider: 'bilibili' as const,
        url: `https://player.bilibili.com/player.html?isOutside=true&bvid=${normalizeBilibiliId(
          item.bilibiliId
        )}&page=1&autoplay=1`,
      }
    : null;
  const youtube = item.youtubeId
    ? {
        provider: 'youtube' as const,
        url: `https://www.youtube.com/watch?v=${item.youtubeId}`,
      }
    : null;

  if (lang === 'zh') {
    return uniqueSources([oss, bilibili, youtube]);
  }

  return uniqueSources([oss, youtube, bilibili]);
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
  const sources = useMemo(() => getVideoSources(item, lang), [item, lang]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const activeSource = sources[sourceIndex] ?? null;

  useEffect(() => {
    setSourceIndex(0);
    setIsReady(false);
    setLoadFailed(false);
  }, [item.id, lang]);

  useEffect(() => {
    setIsReady(false);
    setLoadFailed(false);
  }, [activeSource?.url]);

  useEffect(() => {
    if (!activeSource || isReady || loadFailed) return undefined;

    const timer = window.setTimeout(() => {
      if (sourceIndex < sources.length - 1) {
        setSourceIndex((current) => Math.min(current + 1, sources.length - 1));
      } else {
        setLoadFailed(true);
      }
    }, PLAYER_LOAD_TIMEOUT_MS);

    return () => window.clearTimeout(timer);
  }, [activeSource?.url, isReady, loadFailed, sourceIndex, sources.length]);

  const tryNextSource = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((current) => Math.min(current + 1, sources.length - 1));
    } else {
      setLoadFailed(true);
    }
  };

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
          {loadFailed ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 gap-3 px-4 text-center">
              <FiVideo size={48} />
              <p className="text-sm">Video failed to load</p>
              <p className="text-xs opacity-60">
                Please check the video links or add another fallback source.
              </p>
            </div>
          ) : activeSource ? (
            <div className="relative h-full">
              {activeSource.provider === 'bilibili' ? (
                <iframe
                  key={activeSource.url}
                  src={activeSource.url}
                  title={item.title[lang]}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsReady(true)}
                />
              ) : (
                <ReactPlayer
                  key={activeSource.url}
                  url={activeSource.url}
                  width="100%"
                  height="100%"
                  controls
                  playing
                  playsinline
                  onReady={() => setIsReady(true)}
                  onStart={() => setIsReady(true)}
                  onError={() => tryNextSource()}
                  config={{
                    file: {
                      attributes: {
                        poster: item.posterSrc || undefined,
                        preload: 'metadata',
                      },
                    },
                  }}
                />
              )}
              {!isReady && sources.length > 1 && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/70 px-4 py-2 text-xs text-gray-300">
                  Selecting an available video source...
                </div>
              )}
            </div>
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
  const [imageFailed, setImageFailed] = useState(false);
  const imgSrc = imageFailed
    ? null
    : posterSrc ?? (youtubeId ? getYoutubePoster(youtubeId) : null);

  if (imgSrc) {
    return (
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setImageFailed(true)}
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
