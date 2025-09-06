import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export const PageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className={cn('max-w-6xl mx-auto px-4 py-8', className)}>
      {children}
    </main>
  );
};
