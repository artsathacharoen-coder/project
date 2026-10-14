import React from 'react';

interface MPNLogoProps {
  className?: string;
  size?: number;
  color?: string;
  inverted?: boolean;
}

export const MPNLogoIcon: React.FC<MPNLogoProps> = ({
  className = 'w-8 h-8',
  color = 'currentColor',
  inverted = false,
}) => {
  // Stroke & fill colors
  const primaryColor = inverted ? '#FFFFFF' : (color || 'currentColor');
  const innerHollowFill = inverted ? '#0F172A' : '#FFFFFF';

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MPN Timeline Project Logo"
    >
      {/* 
        Timeline Base:
        Node 1 (Solid): Center (14, 62), Radius 7.5
        Node 2 (Hollow): Center (48, 62), Radius 8
        Node 3 (Hollow): Center (84, 62), Radius 7.5
      */}

      {/* Connecting Horizontal Line 1: Node 1 to Node 2 */}
      <line
        x1="21.5"
        y1="62"
        x2="40"
        y2="62"
        stroke={primaryColor}
        strokeWidth="3.8"
        strokeLinecap="round"
      />

      {/* Connecting Horizontal Line 2: Node 2 to Node 3 */}
      <line
        x1="56"
        y1="62"
        x2="76.5"
        y2="62"
        stroke={primaryColor}
        strokeWidth="3.8"
        strokeLinecap="round"
      />

      {/* Node 1: Solid Circle */}
      <circle
        cx="14"
        cy="62"
        r="7.5"
        fill={primaryColor}
      />

      {/* Vertical Stem of 'P' - Bottom Segment (below Node 2 with gap) */}
      <line
        x1="48"
        y1="75.5"
        x2="48"
        y2="95"
        stroke={primaryColor}
        strokeWidth="5.5"
        strokeLinecap="square"
      />

      {/* Vertical Stem of 'P' - Top Segment (above Node 2 with gap) */}
      <line
        x1="48"
        y1="48.5"
        x2="48"
        y2="8"
        stroke={primaryColor}
        strokeWidth="5.5"
        strokeLinecap="square"
      />

      {/* Loop of 'P' extending to the right */}
      <path
        d="M 48 8 L 68 8 C 82 8 82 40 68 40 L 59 40"
        stroke={primaryColor}
        strokeWidth="5.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />

      {/* Node 2: Center Hollow Circle (drawn on top with clean gap effect) */}
      <circle
        cx="48"
        cy="62"
        r="7.5"
        fill={innerHollowFill}
        stroke={primaryColor}
        strokeWidth="3.8"
      />

      {/* Node 3: Right Hollow Circle */}
      <circle
        cx="84"
        cy="62"
        r="7.5"
        fill={innerHollowFill}
        stroke={primaryColor}
        strokeWidth="3.8"
      />
    </svg>
  );
};

export const MPNBrandLockup: React.FC<{
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ inverted = false, size = 'md', className = '' }) => {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const textClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className={`flex items-center gap-2.5 whitespace-nowrap shrink-0 group ${className}`}>
      <div className={`p-1 rounded-lg transition-transform group-hover:scale-105 ${
        inverted ? 'bg-slate-800/80 border border-slate-700' : 'bg-slate-100 border border-slate-200'
      }`}>
        <MPNLogoIcon className={`${iconSize} ${inverted ? 'text-white' : 'text-slate-900'}`} inverted={inverted} />
      </div>
      <span className={`${textClass} font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-slate-900'}`}>
        MPN <span className="text-blue-600">PROJECT</span>
      </span>
    </div>
  );
};
