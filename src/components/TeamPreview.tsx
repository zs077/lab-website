'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiExternalLink } from 'react-icons/fi';

// 示例团队成员数据
const teamMembers = [
  {
    id: 1,
    name: '张教授',
    title: '教授，博士生导师',
    avatar: '/images/professor.jpg',
    email: 'professor@lab.edu',
    website: 'https://example.com/professor',
    research: '智能交通系统，计算机视觉',
  },
  {
    id: 2,
    name: '李博士',
    title: '副教授，博士生导师',
    avatar: '/images/researcher1.jpg',
    email: 'researcher1@lab.edu',
    website: 'https://example.com/researcher1',
    research: '多传感器融合，自动驾驶感知',
  },
  {
    id: 3,
    name: '王博士',
    title: '助理教授',
    avatar: '/images/researcher2.jpg',
    email: 'researcher2@lab.edu',
    website: 'https://example.com/researcher2',
    research: '低可见场景感知，计算摄像学',
  },
  {
    id: 4,
    name: '刘同学',
    title: '博士研究生',
    avatar: '/images/student1.jpg',
    email: 'student1@lab.edu',
    website: '',
    research: '深度学习，目标检测',
  },
];

export default function TeamPreview() {
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
          团队成员
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          我们的团队由顶尖科研人员组成，共同推进科学研究与技术创新
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="glassmorphism p-6 text-center group"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
              <Image
                src={member.avatar}
                alt={member.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            
            <p className="text-gray-400 mb-3">
              {member.title}
            </p>
            
            <p className="text-sm text-gray-300 mb-4">
              {member.research}
            </p>
            
            <div className="flex justify-center space-x-3">
              <a 
                href={`mailto:${member.email}`} 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
              
              {member.website && (
                <a 
                  href={member.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Personal website"
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          href="/team"
          className="btn-primary inline-block"
        >
          查看全部团队成员
        </Link>
      </div>
    </section>
  );
} 