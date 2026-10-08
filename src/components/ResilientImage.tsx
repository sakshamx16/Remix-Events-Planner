import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackLabel,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#1D1B18] text-[#FAF8F5] p-6 text-center border border-[#B8924A]/20 ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <Sparkles className="w-6 h-6 text-[#B8924A] mb-3 opacity-80" />
        <span className="font-serif-display text-lg tracking-wide text-[#FAF8F5]/90">
          {fallbackLabel || alt}
        </span>
        <span className="text-xs text-[#A39E93] mt-1">
          Remix Events Planner · Patna
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
