'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import SearchBar from './SearchBar';
import ClientWrapper from './ClientWrapper';

const navLinks = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.research', path: '/research' },
  { name: 'nav.publications', path: '/publications' },
  { name: 'nav.team', path: '/team' },
  { name: 'nav.contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  
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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-black/80 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-1 sm:space-x-3 min-w-0">
          <Image
            src="/images/logono.png"
            alt="Lab Logo"
            width={180}
            height={60}
            className="h-7 sm:h-11 lg:h-12 w-auto"
            priority
          />
          <div className="block border-l border-primary pl-1 sm:pl-3 max-w-[162px] sm:max-w-[320px] lg:max-w-none min-w-0">
            <span className="block text-white text-[7px] sm:text-[11px] lg:text-lg font-semibold tracking-[-0.01em] whitespace-nowrap leading-none">
              Autopilot Safety Intelligence eXtended
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${pathname === link.path ? 'text-primary font-medium' : ''}`}
            >
              {t(link.name)}
            </Link>
          ))}
          
          <ClientWrapper>
            <SearchBar />
          </ClientWrapper>
          
          <div className="ml-2 flex items-center space-x-4">
            <button 
              onClick={() => changeLanguage('zh')}
              className={`${i18n.language === 'zh' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
            >
              中
            </button>
            <span className="text-gray-500">|</span>
            <button 
              onClick={() => changeLanguage('en')}
              className={`${i18n.language === 'en' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
            >
              EN
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ClientWrapper>
            <SearchBar />
          </ClientWrapper>
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
              {t(link.name)}
            </Link>
          ))}
          
          <div className="flex justify-center space-x-6 py-2">
            <button 
              onClick={() => changeLanguage('zh')}
              className={`${i18n.language === 'zh' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
            >
              中
            </button>
            <span className="text-gray-500">|</span>
            <button 
              onClick={() => changeLanguage('en')}
              className={`${i18n.language === 'en' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
            >
              EN
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
} 