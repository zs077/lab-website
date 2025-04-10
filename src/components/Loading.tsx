'use client';

type LoadingProps = {
  height?: string;
};

export default function Loading({ height = '100vh' }: LoadingProps) {
  return (
    <div 
      className="flex justify-center items-center w-full bg-black/20 backdrop-blur-sm"
      style={{ height }}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
} 