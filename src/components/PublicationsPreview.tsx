'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FiFileText, FiVideo, FiExternalLink } from 'react-icons/fi';

// 示例发表论文数据
const publications = [
  {
    id: 1,
    title: '基于深度学习的交通场景全天候感知方法',
    authors: '张教授, 李博士, 王博士',
    venue: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
    link: 'https://example.com/paper1',
    type: 'paper',
  },
  {
    id: 2,
    title: '多模态传感器融合框架在自动驾驶中的应用',
    authors: '李博士, 张教授',
    venue: 'Computer Vision and Pattern Recognition (CVPR), 2022',
    link: 'https://example.com/paper2',
    type: 'paper',
  },
  {
    id: 3,
    title: '基于注意力机制的低可见度场景目标检测',
    authors: '王博士, 刘同学, 张教授',
    venue: 'European Conference on Computer Vision (ECCV), 2022',
    link: 'https://example.com/paper3',
    type: 'paper',
  },
  {
    id: 4,
    title: '全天候自动驾驶感知系统演示',
    authors: '张教授团队',
    venue: '人工智能与机器人大会演示, 2023',
    link: 'https://youtu.be/example1',
    type: 'video',
  },
];

export default function PublicationsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          科研成果
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          我们在顶级期刊和会议发表的最新研究成果
        </motion.p>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="glassmorphism p-6 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {pub.type === 'paper' ? (
                  <FiFileText className="text-primary" size={24} />
                ) : (
                  <FiVideo className="text-primary" size={24} />
                )}
              </div>
              
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-gray-300 mb-1">
                  {pub.authors}
                </p>
                
                <p className="text-gray-400 text-sm mb-3">
                  {pub.venue}
                </p>
                
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-blue-400 inline-flex items-center text-sm"
                >
                  查看详情
                  <FiExternalLink className="ml-1" size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          href="/publications"
          className="btn-primary inline-block"
        >
          查看全部科研成果
        </Link>
      </div>
    </section>
  );
} 