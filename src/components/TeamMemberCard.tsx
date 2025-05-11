'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiExternalLink, FiInfo } from 'react-icons/fi';

type TeamMemberProps = {
  member: {
    id: number;
    name: string;
    title: string;
    avatar: string;
    email: string;
    website: string;
    education: string;
    research: string;
    bio: string;
    category: string;
  };
};

export default function TeamMemberCard({ member }: TeamMemberProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <motion.div
      className="glassmorphism overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div 
        className="p-6 text-center cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30">
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
            onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={18} />
            </a>
          )}
          
          <button
            className={`text-gray-400 hover:text-primary transition-colors ${showDetails ? 'text-primary' : ''}`}
            aria-label="Show more info"
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
          >
            <FiInfo size={18} />
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 p-6 border-t border-gray-800"
          >
            <div className="space-y-3">
              <div>
                <h4 className="text-primary font-semibold">Education</h4>
                <p className="text-gray-300 text-sm">{member.education}</p>
              </div>
              
              <div>
                <h4 className="text-primary font-semibold">Research Interests</h4>
                <p className="text-gray-300 text-sm">{member.research}</p>
              </div>
              
              <div>
                <h4 className="text-primary font-semibold">Biography</h4>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 