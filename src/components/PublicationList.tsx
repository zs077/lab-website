'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiChevronDown, FiChevronUp, FiSearch, FiFilter, FiHeart } from 'react-icons/fi';

type Publication = {
  id: number;
  title: string;
  authors: string;
  venue: string;
  abstract: string;
  link: string;
  pdf: string;
  year: number;
  category: string;
  likes: number;
};

export default function PublicationList() {
  // Publication data
  const publications = [
    {
      id: 1,
      title: 'Deep Learning-based All-weather Traffic Scene Perception',
      authors: 'Prof. Zhang, Dr. Li, Dr. Wang',
      venue: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
      abstract: 'This paper presents a deep learning-based approach for all-weather traffic scene perception, capable of maintaining high-precision object detection and scene understanding under various weather conditions and lighting environments. Through novel network architecture design and multi-modal fusion strategies, the system effectively improves stability in adverse conditions.',
      link: 'https://example.com/paper1',
      pdf: 'https://example.com/paper1.pdf',
      year: 2023,
      category: 'journal',
      likes: 42,
    },
    {
      id: 2,
      title: 'Multi-modal Sensor Fusion Framework for Autonomous Driving',
      authors: 'Dr. Li, Prof. Zhang',
      venue: 'Computer Vision and Pattern Recognition (CVPR), 2022',
      abstract: 'A novel multi-modal sensor fusion framework for autonomous driving environment perception is proposed. The framework effectively integrates camera, LiDAR, and millimeter-wave radar data, with specific optimization for different sensor characteristics under various environmental conditions, enhancing perception robustness.',
      link: 'https://example.com/paper2',
      pdf: 'https://example.com/paper2.pdf',
      year: 2022,
      category: 'conference',
      likes: 38,
    },
    {
      id: 3,
      title: 'Attention-based Object Detection in Low-visibility Scenes',
      authors: 'Dr. Wang, Mr. Liu, Prof. Zhang',
      venue: 'European Conference on Computer Vision (ECCV), 2022',
      abstract: 'An attention-based object detection method is proposed for fog, rain, and snow conditions. By learning key regions and features in scenes, the method effectively improves detection accuracy in adverse weather conditions while reducing computational complexity.',
      link: 'https://example.com/paper3',
      pdf: 'https://example.com/paper3.pdf',
      year: 2022,
      category: 'conference',
      likes: 29,
    },
    {
      id: 4,
      title: 'Self-supervised Contrastive Learning for Traffic Scene Understanding',
      authors: 'Dr. Chen, Prof. Zhang',
      venue: 'International Conference on Machine Learning (ICML), 2022',
      abstract: 'A new self-supervised contrastive learning method is proposed specifically for traffic scene understanding. Without relying on large amounts of labeled data, the method achieves efficient feature learning through specific data augmentation and contrastive loss functions, demonstrating excellent performance in downstream tasks.',
      link: 'https://example.com/paper4',
      pdf: 'https://example.com/paper4.pdf',
      year: 2022,
      category: 'conference',
      likes: 35,
    },
    {
      id: 5,
      title: 'Lightweight Neural Network Design for Edge Device Visual Perception',
      authors: 'Dr. Li, Dr. Chen, Dr. Huang',
      venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence, 2021',
      abstract: 'Research on lightweight neural network architecture design, focusing on resource-constrained edge devices. Through innovative model compression and optimization techniques, efficient visual perception applications are achieved while maintaining accuracy and significantly reducing computational and storage requirements.',
      link: 'https://example.com/paper5',
      pdf: 'https://example.com/paper5.pdf',
      year: 2021,
      category: 'journal',
      likes: 27,
    },
    {
      id: 6,
      title: 'Urban Traffic Flow Prediction: A Spatio-temporal Graph Neural Network Approach',
      authors: 'Prof. Zhang, Mr. Liu',
      venue: 'Transportation Research Part C: Emerging Technologies, 2021',
      abstract: 'A spatio-temporal graph neural network-based method for urban traffic flow prediction is proposed. The method considers road network topology and temporal dynamics, modeling spatio-temporal dependencies of traffic flow to achieve high-precision short-term and long-term traffic flow prediction.',
      link: 'https://example.com/paper6',
      pdf: 'https://example.com/paper6.pdf',
      year: 2021,
      category: 'journal',
      likes: 31,
    },
    {
      id: 7,
      title: '3D Point Cloud-based Road Scene Segmentation and Understanding',
      authors: 'Mr. Zhao, Dr. Wang',
      venue: 'International Conference on 3D Vision (3DV), 2021',
      abstract: 'An efficient 3D point cloud processing method is developed for road scene segmentation and understanding. Through novel point cloud feature extraction modules and context-aware segmentation networks, accurate semantic understanding of complex road environments is achieved.',
      link: 'https://example.com/paper7',
      pdf: 'https://example.com/paper7.pdf',
      year: 2021,
      category: 'conference',
      likes: 24,
    },
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [likedPublications, setLikedPublications] = useState<Set<number>>(new Set());
  const [publicationLikes, setPublicationLikes] = useState<{[key: number]: number}>({});
  const [isLoading, setIsLoading] = useState(true);
  
  // Get all publication years and sort in descending order
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  
  // Filter and sort publications
  const filteredPublications = publications
    .filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filter === 'all' || pub.category === filter;
      const matchesYear = yearFilter === null || pub.year === yearFilter;
      
      return matchesSearch && matchesCategory && matchesYear;
    })
    .sort((a, b) => b.year - a.year); // Sort by year in descending order
  
  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // 从API获取喜欢数据
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch('/api/publications/likes');
        const data = await response.json();
        setPublicationLikes(data);
      } catch (error) {
        console.error('Error fetching likes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, []);

  const handleLike = async (id: number) => {
    const isCurrentlyLiked = likedPublications.has(id);
    const action = isCurrentlyLiked ? 'unlike' : 'like';

    try {
      const response = await fetch('/api/publications/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicationId: id,
          action: action,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setPublicationLikes(prev => ({
          ...prev,
          [id]: data.likes
        }));

        setLikedPublications(prev => {
          const newLiked = new Set(prev);
          if (isCurrentlyLiked) {
            newLiked.delete(id);
          } else {
            newLiked.add(id);
          }
          return newLiked;
        });
      }
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };
  
  return (
    <div>
      {/* Search and filter toolbar */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/2">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title, authors, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white"
          />
        </div>
        
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <div className="relative">
            <FiFilter className="absolute left-3 top-3 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-8 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white appearance-none"
            >
              <option value="all">All Types</option>
              <option value="journal">Journal Papers</option>
              <option value="conference">Conference Papers</option>
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <select
              value={yearFilter || 'all'}
              onChange={(e) => setYearFilter(e.target.value === 'all' ? null : Number(e.target.value))}
              className="pl-4 pr-8 py-2 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-white appearance-none"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredPublications.length === 0 ? (
          <p className="text-center text-gray-400 py-6">No matching publications found</p>
        ) : (
          filteredPublications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiFileText className="text-primary" size={24} />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <span className="ml-2 text-sm bg-primary/20 text-primary px-2 py-1 rounded-md whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-1">
                      {pub.authors}
                    </p>
                    
                    <p className="text-gray-400 text-sm mb-3">
                      {pub.venue}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-blue-400 inline-flex items-center text-sm"
                      >
                        Read Online
                        <FiExternalLink className="ml-1" size={14} />
                      </a>
                      
                      <a 
                        href={pub.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-blue-400 inline-flex items-center text-sm"
                      >
                        Download PDF
                        <FiFileText className="ml-1" size={14} />
                      </a>
                      
                      <button
                        onClick={() => toggleExpanded(pub.id)}
                        className="text-gray-300 hover:text-white inline-flex items-center text-sm"
                      >
                        {expandedId === pub.id ? 'Hide Abstract' : 'Show Abstract'}
                        {expandedId === pub.id ? (
                          <FiChevronUp className="ml-1" size={14} />
                        ) : (
                          <FiChevronDown className="ml-1" size={14} />
                        )}
                      </button>

                      <button
                        onClick={() => handleLike(pub.id)}
                        disabled={isLoading}
                        className={`inline-flex items-center text-sm transition-colors ${
                          likedPublications.has(pub.id) 
                            ? 'text-red-500 hover:text-red-400' 
                            : 'text-gray-300 hover:text-red-500'
                        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <FiHeart className="mr-1" size={14} />
                        {likedPublications.has(pub.id) ? 'Liked' : 'Like'}
                        <span className="ml-1 text-xs bg-gray-700 px-2 py-0.5 rounded-full">
                          {isLoading ? '...' : publicationLikes[pub.id] || 0}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {expandedId === pub.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-700"
                  >
                    <p className="text-gray-300">{pub.abstract}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
} 