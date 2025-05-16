import React from 'react';
import { cn } from '@/lib/utils';

const GradientText = ({ className = '', children }) => {
  return (
    <span
      className={cn(
        'bg-linear-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
