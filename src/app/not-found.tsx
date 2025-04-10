import Link from 'next/link';
import { Metadata } from 'next';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '页面未找到 | 科研实验室',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">页面未找到</h2>
        <p className="text-gray-400 mb-8">
          抱歉，您尝试访问的页面不存在或已被移动。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <FiHome size={18} />
            返回首页
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FiArrowLeft size={18} />
            返回上一页
          </button>
        </div>
      </div>
    </div>
  );
} 