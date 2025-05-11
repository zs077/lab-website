'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiX } from 'react-icons/fi';

// Define search result type
type SearchResult = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'research' | 'team' | 'publication' | 'page';
};

// Mock search results data - in a real project, this would be retrieved via API
const mockSearchResults: SearchResult[] = [
  {
    id: 'research-1',
    title: 'Intelligent Transportation',
    description: 'Using artificial intelligence and big data analysis to optimize traffic flow and improve road safety and efficiency.',
    url: '/research/intelligent-transportation',
    category: 'research',
  },
  {
    id: 'research-2',
    title: 'Multi-sensor Fusion',
    description: 'Integrating data from multiple sensors to enhance environmental perception capabilities and system robustness.',
    url: '/research/multi-sensor-fusion',
    category: 'research',
  },
  {
    id: 'team-1',
    title: 'Prof. Zhang',
    description: 'Professor, PhD Supervisor, focusing on intelligent transportation systems and computer vision research.',
    url: '/team#professor',
    category: 'team',
  },
  {
    id: 'pub-1',
    title: 'Deep Learning-based All-Weather Traffic Scene Perception Methods',
    description: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
    url: '/publications#paper-1',
    category: 'publication',
  },
];

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  // Handle search operation
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (term.length < 2) {
      setResults([]);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API search delay
    setTimeout(() => {
      // Filter search results
      const filtered = mockSearchResults.filter(result => 
        result.title.toLowerCase().includes(term.toLowerCase()) || 
        result.description.toLowerCase().includes(term.toLowerCase())
      );
      
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  };
  
  // Handle click on search result
  const handleResultClick = (url: string) => {
    setIsOpen(false);
    setSearchTerm('');
    setResults([]);
    router.push(url);
  };
  
  // Close search box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Focus input field when search box opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Handle ESC key to close search box
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  return (
    <div className="relative" ref={searchRef}>
      {/* Search button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
        aria-label="Search"
      >
        <FiSearch size={18} />
        <span className="text-sm hidden md:inline">Search</span>
      </button>
      
      {/* Search modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-24 px-4">
          <div className="w-full max-w-2xl bg-secondary rounded-xl shadow-2xl overflow-hidden">
            {/* Search input field */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search research areas, team members, or publications..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-secondary border-b border-gray-700 focus:outline-none text-white"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>
            
            {/* Search results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : results.length > 0 ? (
                <div>
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="p-4 hover:bg-white/5 cursor-pointer"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-1 rounded ${
                          result.category === 'research' ? 'bg-blue-900/50 text-blue-300' :
                          result.category === 'team' ? 'bg-green-900/50 text-green-300' :
                          'bg-purple-900/50 text-purple-300'
                        }`}>
                          {result.category === 'research' ? 'Research Area' : 
                           result.category === 'team' ? 'Team Member' : 'Publication'}
                        </span>
                        <h3 className="text-white font-medium">{result.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{result.description}</p>
                    </div>
                  ))}
                </div>
              ) : searchTerm.length >= 2 ? (
                <div className="p-8 text-center text-gray-400">
                  No matching results found
                </div>
              ) : null}
              
              {/* Quick search suggestions */}
              {searchTerm.length < 2 && (
                <div className="p-6">
                  <h3 className="text-gray-400 mb-4 text-sm">Quick Search</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Intelligent Transportation', 'Multi-sensor Fusion', 'Prof. Zhang', 'Dr. Li', 'Deep Learning'].map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSearch(term)}
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Search tips */}
            <div className="p-4 border-t border-gray-700 text-xs text-gray-500 flex justify-between">
              <div>Press ESC to close</div>
              <div>Press Enter to go to first result</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 