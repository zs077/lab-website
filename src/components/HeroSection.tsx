'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute w-full h-full">
          <Image
            src="/images/hero-background.jpg"
            alt="Lab Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 内容 */}
      <div ref={ref} className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
        >
          科研实验室
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
        >
          探索未知，创新科技，引领未来
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#research"
            className="btn-primary"
          >
            了解研究方向
          </a>
          <a
            href="/contact"
            className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            联系我们
          </a>
        </motion.div>
      </div>
      
      {/* 下滑指示器 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
} 