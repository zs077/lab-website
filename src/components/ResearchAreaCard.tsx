'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronRight } from 'react-icons/fi';

type ResearchAreaProps = {
  area: {
    id: number;
    title: string;
    description: string;
    image: string;
    projects: string[];
    slug: string;
  };
};

export default function ResearchAreaCard({ area }: ResearchAreaProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-row md:items-start gap-8"
    >
      <div className="md:w-1/2 overflow-hidden rounded-xl">
        <Image
          src={area.image}
          alt={area.title}
          width={800}
          height={500}
          className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-primary">{area.title}</h2>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {area.description}
        </p>
        
        <div className="mb-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-primary hover:text-blue-400 transition-colors font-medium mb-4"
          >
            {isExpanded ? 'Hide Projects' : 'View Related Projects'}
            <FiChevronRight
              className={`ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
            />
          </button>
          
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-5 space-y-2 text-gray-300"
            >
              {area.projects.map((project, index) => (
                <li key={index} className="list-disc list-outside">
                  {project}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
        
        <a
          href={`/research/${area.slug}`}
          className="btn-primary inline-block"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
} 