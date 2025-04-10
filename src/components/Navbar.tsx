'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import SearchBar from './SearchBar';

const navLinks = [
  { name: '首页', path: '/' },
  { name: '研究方向', path: '/research' },
  { name: '团队成员', path: '/team' },
  { name: '科研成果', path: '/publications' },
  { name: '联系我们', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-black/80 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          实验室
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${pathname === link.path ? 'text-primary font-medium' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <SearchBar />
          
          <div className="ml-2 flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">中</button>
            <span className="text-gray-500">|</span>
            <button className="text-gray-500 hover:text-white">EN</button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <SearchBar />
          <button
            className="ml-2 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 bg-secondary/90 backdrop-blur-lg flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`py-2 text-center ${pathname === link.path ? 'text-primary font-medium' : 'text-gray-300'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex justify-center space-x-6 py-2">
            <button className="text-gray-300 hover:text-white">中</button>
            <span className="text-gray-500">|</span>
            <button className="text-gray-500 hover:text-white">EN</button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
} 