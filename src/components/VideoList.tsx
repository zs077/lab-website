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

// No longer need VideoListProps
// type VideoListProps = {
//   videos: Video[];
// };

export default function VideoList() {
  // Video demonstration data
  const videos = [
    {
      id: 1,
      title: 'All-Weather Autonomous Driving Perception System Demo',
      description: 'Demonstration of our lab-developed all-weather autonomous driving perception system, which maintains stable perception performance under various adverse weather conditions. The video includes real-time detection results in rainy, foggy, and nighttime scenarios.',
      thumbnail: '/images/video-thumbnail1.jpg',
      link: 'https://youtu.be/example1',
      year: 2023,
    },
    {
      id: 2,
      title: 'Multi-Sensor Fusion Platform and Applications',
      description: 'Demonstration of how our multi-sensor fusion platform integrates camera, LiDAR, and millimeter-wave radar data to enhance environmental perception capabilities. The video includes laboratory tests and real-road test scenarios.',
      thumbnail: '/images/video-thumbnail2.jpg',
      link: 'https://youtu.be/example2',
      year: 2022,
    },
    {
      id: 3,
      title: 'Intelligent Transportation System Real-time Monitoring and Analysis Demo',
      description: 'Demonstration of how our developed intelligent transportation system monitors and analyzes urban traffic flow in real-time, predicts congestion, and provides intelligent route planning suggestions.',
      thumbnail: '/images/video-thumbnail3.jpg',
      link: 'https://youtu.be/example3',
      year: 2022,
    },
  ];

  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  
  // Get YouTube video ID (from YouTube link)
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  // Open video modal
  const openVideo = (video: Video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  // Close video modal
  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
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
      
      {/* Video Modal */}
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