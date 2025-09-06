import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export const ProgressStep = ({
  stepNumber,
  isActive,
  isFinished,
  title,
  className,
}: {
  stepNumber: number;
  isActive: boolean;
  isFinished: boolean;
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all',
            'bg-white border-gray-300 text-gray-400',
            isActive && 'bg-blue-600 border-blue-600 text-white',
            isFinished && 'bg-green-600 border-green-600 text-white',
          )}
        >
          {isFinished ? <Check className="w-5 h-5" /> : stepNumber}
        </div>
        <div className="mt-2 text-center">
          <p
            className={cn('text-sm text-gray-400', isActive && 'text-gray-900')}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
