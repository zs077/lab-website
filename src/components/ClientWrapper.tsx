'use client';

/**
 * This component serves as a boundary between client and server components
 * All content that requires event handling should be placed inside this component
 * This prevents server components from attempting to pass event handlers to client components
 */
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 