import React from 'react';

interface AmmaLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

/**
 * Official AMMA Hospital Vector Logo Component
 * Matches the user-provided brand identity:
 * - Royal Blue Mother & Baby Heart
 * - Medical Leaf Green caring hands & cross
 * - "AMMA" with the leaf-shaped 'A' crossbar
 * - "— HOSPITAL —" in green
 * - "Better Health • Brighter Tomorrow" tagline
 */
export const AmmaLogo: React.FC<AmmaLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  showTagline = true,
}) => {
  // Sizing definitions
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const IconEmblem = ({ emblemClass = 'w-full h-full' }: { emblemClass?: string }) => (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={emblemClass}
    >
      <defs>
        {/* Royal Blue Gradient for Mother & Baby */}
        <linearGradient id="ammaRoyalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b63b8" />
          <stop offset="50%" stopColor="#0054a6" />
          <stop offset="100%" stopColor="#003d7a" />
        </linearGradient>

        {/* Leaf Green Gradient */}
        <linearGradient id="ammaLeafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22a844" />
          <stop offset="100%" stopColor="#158234" />
        </linearGradient>
      </defs>

      {/* RIGHT: Green Medical Heart Outline */}
      <path
        d="M200 70 C240 25 330 30 355 90 C380 150 345 220 280 270 L200 325"
        stroke="url(#ammaLeafGreen)"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />

      {/* RIGHT: Medical Green Cross inside Heart */}
      <g transform="translate(255, 95)">
        <rect x="18" y="0" width="22" height="58" rx="6" fill="url(#ammaLeafGreen)" />
        <rect x="0" y="18" width="58" height="22" rx="6" fill="url(#ammaLeafGreen)" />
      </g>

      {/* LEFT & CENTER: Royal Blue Mother & Baby Heart Silhouette */}
      <path
        d="M200 65 
           C150 25 80 45 60 115 
           C40 185 75 255 155 305 
           C170 315 188 323 200 328
           C185 300 160 275 145 240
           C130 205 135 170 155 145
           C175 120 205 110 220 85
           C212 75 206 70 200 65 Z"
        fill="url(#ammaRoyalBlue)"
      />

      {/* Mother's Flowing Hair Outline Curve */}
      <path
        d="M175 75 
           C125 90 90 140 90 190 
           C90 240 120 275 160 295
           C135 270 115 235 115 190
           C115 145 145 105 175 75 Z"
        fill="#ffffff"
        opacity="0.95"
      />

      {/* Mother's Face and Head Profile in Royal Blue */}
      <path
        d="M165 95 
           C195 105 220 135 220 170 
           C220 205 200 230 185 240
           C175 225 170 210 170 195
           C170 170 185 150 180 130
           C178 125 172 120 165 95 Z"
        fill="url(#ammaRoyalBlue)"
      />

      {/* Mother's serene face features (delicate eye profile) */}
      <path
        d="M198 145 C203 150 208 148 212 143"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Gentle smile/lip line */}
      <path
        d="M202 165 Q206 169 211 166"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Newborn Baby Head & Swaddle (Nestled in mother's embrace) */}
      <circle cx="232" cy="205" r="28" fill="url(#ammaRoyalBlue)" />
      
      {/* Baby face highlight curve */}
      <path
        d="M225 192 C235 190 245 198 245 210 C245 220 238 226 228 225"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Baby peaceful eye */}
      <path
        d="M232 202 Q235 204 238 202"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Swaddling curve wrapping mother and baby */}
      <path
        d="M175 235 C200 255 240 255 265 225 C260 260 215 295 165 290 Z"
        fill="url(#ammaRoyalBlue)"
      />

      {/* BOTTOM: Caring Green Hands Cradling the Heart */}
      {/* Left Hand */}
      <path
        d="M200 330 
           C170 310 120 280 100 230 
           C110 260 145 300 190 322 
           C150 300 125 260 115 220
           C125 250 160 295 200 330 Z"
        fill="url(#ammaLeafGreen)"
      />
      <path
        d="M195 328 C155 295 110 245 105 210 C125 250 165 295 200 330 Z"
        fill="#1e993c"
      />

      {/* Right Hand */}
      <path
        d="M200 330 
           C230 310 280 280 300 230 
           C290 260 255 300 210 322 
           C250 300 275 260 285 220
           C275 250 240 295 200 330 Z"
        fill="url(#ammaLeafGreen)"
      />
      <path
        d="M205 328 C245 295 290 245 295 210 C275 250 235 295 200 330 Z"
        fill="#1e993c"
      />
    </svg>
  );

  // Icon only
  if (variant === 'icon') {
    return (
      <div className={`shrink-0 ${iconSizes[size]} ${className}`}>
        <IconEmblem />
      </div>
    );
  }

  // Full stacked brand mark (Great for Hero, About Us, Footer)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Emblem */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-sm hover:scale-105 transition-transform duration-300">
          <IconEmblem />
        </div>

        {/* Brand Name with Leaf on first A */}
        <div className="mt-3 relative flex items-center justify-center">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0054a6] font-sans flex items-center">
            {/* First 'A' with leaf crossbar */}
            <span className="relative inline-block">
              A
              {/* Green Leaf on first A */}
              <svg
                viewBox="0 0 30 18"
                className="absolute left-1/2 -translate-x-1/2 top-[52%] w-4 h-2.5 -rotate-12 pointer-events-none"
                fill="#16943c"
              >
                <path d="M0 9 C8 0 22 2 30 9 C22 16 8 18 0 9 Z" />
              </svg>
            </span>
            <span>MMA</span>
          </span>
        </div>

        {/* HOSPITAL flanked with horizontal rules */}
        <div className="flex items-center gap-2 mt-1 w-full max-w-[240px] justify-center">
          <span className="h-[2px] w-6 bg-[#16943c] rounded-full" />
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.28em] text-[#16943c] uppercase font-sans">
            HOSPITAL
          </span>
          <span className="h-[2px] w-6 bg-[#16943c] rounded-full" />
        </div>

        {/* Tagline */}
        {showTagline && (
          <p className="text-[11px] sm:text-xs font-semibold text-[#0054a6] tracking-wider mt-1.5 flex items-center gap-1.5">
            <span>Better Health</span>
            <span className="w-1 h-1 rounded-full bg-[#0054a6]" />
            <span>Brighter Tomorrow</span>
          </p>
        )}
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <div className={`${iconSizes[size]} shrink-0 drop-shadow-xs group-hover:scale-105 transition-transform`}>
        <IconEmblem />
      </div>

      {/* Text block */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0054a6] font-sans flex items-center">
            {/* First A with leaf */}
            <span className="relative inline-block">
              A
              <svg
                viewBox="0 0 30 18"
                className="absolute left-1/2 -translate-x-1/2 top-[52%] w-3 h-2 -rotate-12 pointer-events-none"
                fill="#16943c"
              >
                <path d="M0 9 C8 0 22 2 30 9 C22 16 8 18 0 9 Z" />
              </svg>
            </span>
            <span>MMA</span>
          </span>
        </div>

        {/* HOSPITAL rule */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1.5px] w-3 bg-[#16943c]" />
          <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.24em] text-[#16943c] uppercase">
            HOSPITAL
          </span>
          <span className="h-[1.5px] w-3 bg-[#16943c]" />
        </div>

        {/* Tagline */}
        {showTagline && (
          <span className="text-[9px] text-[#0054a6] font-semibold tracking-tight mt-1 hidden sm:inline">
            Better Health • Brighter Tomorrow
          </span>
        )}
      </div>
    </div>
  );
};
