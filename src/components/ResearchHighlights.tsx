'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

// 示例研究方向数据
const researchAreas = [
  {
    id: 1,
    title: '智能交通',
    description: '利用人工智能和大数据分析优化交通流量，提高道路安全性和效率。',
    image: '/images/research-1.jpg',
    slug: 'intelligent-transportation',
  },
  {
    id: 2,
    title: '多传感器融合',
    description: '通过集成多种传感器数据，提高环境感知能力和系统鲁棒性。',
    image: '/images/research-2.jpg',
    slug: 'multi-sensor-fusion',
  },
  {
    id: 3,
    title: '低可见场景感知',
    description: '解决在雨、雾、雪等恶劣天气条件下的环境感知挑战。',
    image: '/images/research-3.jpg',
    slug: 'low-visibility-perception',
  },
];

export default function ResearchHighlights() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="research" ref={ref} className="py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          研究方向
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          我们的团队在以下领域进行尖端科研，推动技术发展和创新应用
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {researchAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            onMouseEnter={() => setSelectedArea(area.id)}
            onMouseLeave={() => setSelectedArea(null)}
            className="glassmorphism p-6 group"
          >
            <div className="h-48 mb-4 overflow-hidden rounded-lg relative">
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={400}
                  height={300}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    selectedArea === area.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {area.title}
            </h3>
            
            <p className="text-gray-300 mb-4">
              {area.description}
            </p>
            
            <Link
              href={`/research/${area.slug}`}
              className="text-primary hover:text-blue-400 font-medium inline-flex items-center"
            >
              了解更多
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          href="/research"
          className="btn-primary inline-block"
        >
          查看全部研究方向
        </Link>
      </div>
    </section>
  );
} 