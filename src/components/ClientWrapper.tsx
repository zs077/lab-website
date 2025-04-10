'use client';

/**
 * 这个组件的作用是作为客户端/服务器组件的边界
 * 所有需要事件处理的内容都应该放在这个组件内部
 * 这样可以防止服务器组件尝试传递事件处理函数给客户端组件
 */
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 