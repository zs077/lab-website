'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Client components cannot export metadata
// export const metadata = {
//   title: 'Page Not Found | Research Lab',
// };

export default function NotFound() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="glassmorphism p-8 md:p-12 max-w-lg text-center">
        <div className="text-7xl font-bold text-primary mb-6">404</div>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          Sorry, the page you are trying to access does not exist or has been moved.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="btn-primary"
          >
            Return to Home
          </Link>
          
          <button 
            onClick={() => router.back()}
            className="btn-secondary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
} 