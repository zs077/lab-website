'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiPlay, FiX } from 'react-icons/fi';

type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  year: number;
};

// 不再需要 VideoListProps
// type VideoListProps = {
//   videos: Video[];
// };

export default function VideoList() {
  // 视频演示数据
  const videos = [
    {
      id: 1,
      title: '全天候自动驾驶感知系统演示',
      description: '展示我们实验室开发的全天候自动驾驶感知系统，该系统能够在各种恶劣天气条件下保持稳定的感知性能。视频包含雨天、雾天和夜间场景的实时检测结果。',
      thumbnail: '/images/video-thumbnail1.jpg',
      link: 'https://youtu.be/example1',
      year: 2023,
    },
    {
      id: 2,
      title: '多传感器融合平台及应用',
      description: '演示我们的多传感器融合平台如何整合摄像头、激光雷达和毫米波雷达数据，以提高环境感知能力。视频包含实验室测试和实际道路测试场景。',
      thumbnail: '/images/video-thumbnail2.jpg',
      link: 'https://youtu.be/example2',
      year: 2022,
    },
    {
      id: 3,
      title: '智能交通系统实时监控与分析演示',
      description: '展示我们开发的智能交通系统如何实时监控和分析城市交通流量，预测拥堵情况，并提供智能路线规划建议。',
      thumbnail: '/images/video-thumbnail3.jpg',
      link: 'https://youtu.be/example3',
      year: 2022,
    },
  ];

  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  
  // 获取YouTube视频ID（从YouTube链接中）
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  // 打开视频模态框
  const openVideo = (video: Video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden'; // 禁止背景滚动
  };
  
  // 关闭视频模态框
  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto'; // 恢复背景滚动
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
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={480}
                height={270}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center text-white">
                  <FiPlay size={30} />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-2">
                {video.year}
              </p>
              
              <p className="text-gray-300 text-sm line-clamp-3">
                {video.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* 视频模态框 */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary"
            onClick={closeVideo}
          >
            <FiX size={32} />
          </button>
          
          <div 
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(activeVideo.link)}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="bg-secondary p-6">
              <h3 className="text-xl font-bold mb-2">{activeVideo.title}</h3>
              <p className="text-gray-300">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 