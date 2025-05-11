'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

// Sample research areas data
const researchAreas = [
  {
    id: 1,
    title: 'Intelligent Transportation',
    description: 'Using artificial intelligence and big data analysis to optimize traffic flow and improve road safety and efficiency.',
    image: '/images/research-1.jpg',
    slug: 'intelligent-transportation',
  },
  {
    id: 2,
    title: 'Multi-sensor Fusion',
    description: 'Integrating data from multiple sensors to enhance environmental perception capabilities and system robustness.',
    image: '/images/research-2.jpg',
    slug: 'multi-sensor-fusion',
  },
  {
    id: 3,
    title: 'Low-visibility Scene Perception',
    description: 'Addressing environmental perception challenges in adverse weather conditions such as rain, fog, and snow.',
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
          Research Areas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Our team conducts cutting-edge research in the following areas, driving technological advancement and innovative applications
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
              Learn More
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
          View All Research Areas
        </Link>
      </div>
    </section>
  );
} 