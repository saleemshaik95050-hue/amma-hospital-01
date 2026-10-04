import React from 'react';

interface VisualProps {
  className?: string;
}

/**
 * Modern Hospital Exterior & Campus Architecture Visual - AMMA Brand Style
 * Depicts the hospital building with royal blue and green architectural facade,
 * illuminated AMMA Hospital logo signage, landscaped green grounds, and emergency ambulance.
 */
export const HospitalBuildingVisual: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50/60 to-white flex items-center justify-center group ${className}`}>
      <svg
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Morning Sky Gradient */}
          <linearGradient id="brandMorningSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="50%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Royal Blue Sign */}
          <linearGradient id="brandSignGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#003d7a" />
            <stop offset="50%" stopColor="#0054a6" />
            <stop offset="100%" stopColor="#0066cc" />
          </linearGradient>

          {/* Architectural Glass Reflection */}
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.85" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sky Background */}
        <rect width="800" height="480" fill="url(#brandMorningSky)" />

        {/* Sun / Morning Radiance */}
        <circle cx="680" cy="110" r="80" fill="#38bdf8" opacity="0.12" filter="url(#softGlow)" />
        <circle cx="680" cy="110" r="45" fill="#7dd3fc" opacity="0.3" />

        {/* Distant Trees & Green Landscape */}
        <path d="M0 340 Q180 320 380 335 T800 330 L800 480 L0 480 Z" fill="#bbf7d0" opacity="0.5" />
        <path d="M0 355 Q200 340 450 350 T800 345 L800 480 L0 480 Z" fill="#86efac" opacity="0.4" />

        {/* Rear Hospital Towers */}
        <rect x="150" y="90" width="170" height="260" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="480" y="75" width="190" height="275" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />

        {/* Main Central Hospital Facility */}
        <rect x="230" y="105" width="340" height="250" rx="12" fill="#ffffff" stroke="#93c5fd" strokeWidth="2.5" />

        {/* Rooftop Signboard - AMMA HOSPITAL */}
        <rect x="240" y="74" width="320" height="48" rx="10" fill="url(#brandSignGradient)" filter="url(#softGlow)" />
        
        {/* Brand Icon on Signboard */}
        <g transform="translate(255, 83) scale(0.075)">
          <path d="M200 70 C240 25 330 30 355 90 C380 150 345 220 280 270 L200 325" stroke="#22c55e" strokeWidth="26" fill="none" />
          <rect x="265" y="95" width="22" height="58" rx="6" fill="#22c55e" />
          <rect x="247" y="113" width="58" height="22" rx="6" fill="#22c55e" />
          <path d="M200 65 C150 25 80 45 60 115 C40 185 75 255 155 305 L200 328 Z" fill="#ffffff" />
          <circle cx="232" cy="205" r="28" fill="#ffffff" />
        </g>

        <text x="415" y="104" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" letterSpacing="3" fontFamily="system-ui, sans-serif">
          AMMA HOSPITAL
        </text>

        {/* Logo Mother & Baby Heart Emblem on Hospital Facade */}
        <circle cx="400" cy="155" r="28" fill="#f0fdf4" stroke="#16943c" strokeWidth="2" />
        {/* Medical Cross inside facade badge */}
        <rect x="396" y="142" width="8" height="26" rx="2" fill="#16943c" />
        <rect x="387" y="151" width="26" height="8" rx="2" fill="#16943c" />

        {/* Window Matrix with Blue Glass Reflections */}
        <g>
          {/* Level 3 */}
          <rect x="260" y="195" width="55" height="30" rx="4" fill="url(#glassReflection)" stroke="#93c5fd" strokeWidth="1" />
          <rect x="330" y="195" width="55" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="415" y="195" width="55" height="30" rx="4" fill="url(#glassReflection)" stroke="#93c5fd" strokeWidth="1" />
          <rect x="485" y="195" width="55" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />

          {/* Level 2 */}
          <rect x="260" y="235" width="55" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="330" y="235" width="55" height="30" rx="4" fill="url(#glassReflection)" stroke="#93c5fd" strokeWidth="1" />
          <rect x="415" y="235" width="55" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="485" y="235" width="55" height="30" rx="4" fill="url(#glassReflection)" stroke="#93c5fd" strokeWidth="1" />

          {/* Level 1 */}
          <rect x="260" y="275" width="55" height="30" rx="4" fill="url(#glassReflection)" stroke="#93c5fd" strokeWidth="1" />
          <rect x="330" y="275" width="55" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="415" y="275" width="55" height="30" rx="4" fill="url(#glassReflection)" stroke="#93c5fd" strokeWidth="1" />
          <rect x="485" y="275" width="55" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        </g>

        {/* Hospital Main Canopy Entrance */}
        <polygon points="320,320 480,320 495,355 305,355" fill="#0054a6" />
        <rect x="350" y="325" width="100" height="30" fill="#ffffff" rx="4" />
        <text x="400" y="344" textAnchor="middle" fill="#0054a6" fontSize="10.5" fontWeight="900" letterSpacing="1">
          MAIN ENTRANCE
        </text>

        {/* Sliding Glass Doors */}
        <rect x="375" y="355" width="50" height="45" fill="#e0f2fe" stroke="#0054a6" strokeWidth="1.5" />
        <line x1="400" y1="355" x2="400" y2="400" stroke="#0054a6" strokeWidth="1.5" />

        {/* Forecourt Ground & Driveway */}
        <rect x="0" y="390" width="800" height="90" fill="#f1f5f9" />
        <rect x="0" y="410" width="800" height="70" fill="#e2e8f0" />
        <line x1="0" y1="445" x2="800" y2="445" stroke="#ffffff" strokeWidth="3" strokeDasharray="25 20" />

        {/* Landscaping Flowerbeds with Green Foliage */}
        <ellipse cx="230" cy="405" rx="55" ry="14" fill="#22c55e" opacity="0.8" />
        <ellipse cx="570" cy="405" rx="55" ry="14" fill="#22c55e" opacity="0.8" />

        {/* Emergency Response Ambulance */}
        <g transform="translate(110, 395) scale(0.9)">
          <rect x="20" y="10" width="115" height="50" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="100" y="20" width="45" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Windshield */}
          <path d="M102 24 L130 24 L138 42 L102 42 Z" fill="#38bdf8" opacity="0.8" />
          {/* Green Brand Stripe & Cross */}
          <rect x="20" y="32" width="125" height="8" fill="#16943c" />
          <circle cx="55" cy="36" r="10" fill="#ffffff" />
          <rect x="52" y="29" width="6" height="14" fill="#16943c" />
          <rect x="48" y="33" width="14" height="6" fill="#16943c" />
          {/* Emergency Flashing Siren */}
          <rect x="50" y="5" width="12" height="6" rx="2" fill="#ef4444" />
          <circle cx="56" cy="7" r="9" fill="#ef4444" opacity="0.4" />
          {/* Wheels */}
          <circle cx="50" cy="62" r="13" fill="#1e293b" />
          <circle cx="50" cy="62" r="5" fill="#94a3b8" />
          <circle cx="118" cy="62" r="13" fill="#1e293b" />
          <circle cx="118" cy="62" r="5" fill="#94a3b8" />
        </g>

        {/* Live Status Badge */}
        <g transform="translate(30, 32)">
          <rect x="0" y="0" width="200" height="26" rx="13" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="14" cy="13" r="4" fill="#16943c" />
          <text x="26" y="17" fill="#0054a6" fontSize="10" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.8">
            AMMA CAMPUS · KAMAREDDY
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * Maternity & Mother-Baby Visual - AMMA Logo Style
 * Mother and baby silhouette in Royal Blue cradled by gentle caring green hands.
 */
export const MaternityCareVisual: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-50/50 via-white to-green-50/40 flex items-center justify-center group ${className}`}>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <defs>
          <radialGradient id="brandHaloSoft" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#dcfce7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="600" height="400" fill="#f8fafc" />
        <circle cx="300" cy="180" r="190" fill="url(#brandHaloSoft)" />

        {/* Gentle Heartbeat Wave in Royal Blue */}
        <path
          d="M20 320 L150 320 L160 320 L170 300 L180 340 L190 280 L200 330 L210 320 L390 320 L400 300 L410 340 L420 280 L430 330 L440 320 L580 320"
          stroke="#0054a6"
          strokeWidth="2.5"
          opacity="0.3"
          fill="none"
        />

        {/* Mother & Baby Silhouette (Directly echoing the AMMA Hospital logo) */}
        <g transform="translate(195, 30)">
          {/* Green Heart Arc with Medical Cross */}
          <path
            d="M105 45 C130 15 190 20 205 60 C220 100 195 150 150 185 L105 220"
            stroke="#16943c"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          {/* Medical Cross */}
          <rect x="145" y="65" width="14" height="38" rx="4" fill="#16943c" />
          <rect x="133" y="77" width="38" height="14" rx="4" fill="#16943c" />

          {/* Royal Blue Mother Profile */}
          <path
            d="M105 40 
               C70 15 25 30 10 75 
               C-5 125 18 170 70 205 
               L105 225
               C95 205 80 185 70 160
               C60 135 65 110 80 95
               C95 80 110 70 120 55 Z"
            fill="#0054a6"
          />

          {/* Mother Hair Curve */}
          <path
            d="M90 48 C55 60 30 95 30 130 C30 165 50 190 80 205 C60 185 45 160 45 130 C45 98 68 70 90 48 Z"
            fill="#ffffff"
          />

          {/* Mother Head Profile */}
          <circle cx="102" cy="78" r="20" fill="#0054a6" />
          <path d="M108 76 Q112 80 115 76" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Baby Head Nestled */}
          <circle cx="125" cy="135" r="18" fill="#0054a6" />
          <path d="M120 128 C126 126 132 131 132 138" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M124 134 Q127 136 129 134" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Swaddle in Royal Blue */}
          <path d="M90 155 C105 170 135 170 150 150 C145 175 115 198 80 195 Z" fill="#0054a6" />

          {/* Caring Green Hands underneath */}
          <path
            d="M105 225 C85 210 50 190 40 155 C45 175 70 205 100 220 Z"
            fill="#16943c"
          />
          <path
            d="M105 225 C125 210 160 190 170 155 C165 175 140 205 110 220 Z"
            fill="#16943c"
          />
        </g>

        {/* Clean Frame Corner Marks */}
        <path d="M 20 35 L 20 20 L 35 20" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 565 20 L 580 20 L 580 35" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 20 365 L 20 380 L 35 380" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 565 380 L 580 380 L 580 365" stroke="#0054a6" strokeWidth="2" fill="none" />

        {/* Title Bar */}
        <rect x="130" y="340" width="340" height="36" rx="18" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
        <text x="300" y="363" textAnchor="middle" fill="#0054a6" fontSize="12" fontWeight="900" letterSpacing="1.5" fontFamily="system-ui, sans-serif">
          CARE FOR MOTHER & NEWBORN
        </text>
      </svg>
    </div>
  );
};

/**
 * Orthopaedic & Joint Visual - AMMA Brand Style
 */
export const OrthoCareVisual: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-blue-50/40 flex items-center justify-center group ${className}`}>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <defs>
          <pattern id="brandOrthoGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#cbd5e1" strokeWidth="0.8" opacity="0.6" />
          </pattern>
        </defs>

        <rect width="600" height="400" fill="#ffffff" />
        <rect width="600" height="400" fill="url(#brandOrthoGrid)" />
        <circle cx="300" cy="200" r="140" fill="#e0f2fe" opacity="0.6" />

        {/* Laser Alignment Crosshair Beams */}
        <line x1="300" y1="20" x2="300" y2="380" stroke="#0054a6" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.75" />
        <line x1="40" y1="200" x2="560" y2="200" stroke="#0054a6" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.75" />

        {/* Anatomical Human Joint & Bone Structure */}
        <g transform="translate(240, 50)">
          {/* Upper Femur Bone Structure */}
          <path
            d="M50 20 L70 20 L72 100 C75 125 95 130 95 145 C95 160 70 165 60 165 C50 165 25 160 25 145 C25 130 45 125 48 100 Z"
            fill="#f8fafc"
            stroke="#0054a6"
            strokeWidth="2.5"
          />
          <path d="M30 145 Q40 165 50 165 Q60 165 70 145" fill="#bae6fd" />

          {/* Joint Articular Gap */}
          <ellipse cx="60" cy="172" rx="42" ry="8" fill="#86efac" opacity="0.8" />

          {/* Patella (Knee Cap) */}
          <ellipse cx="60" cy="155" rx="14" ry="16" fill="#ffffff" stroke="#16943c" strokeWidth="2.5" />

          {/* Lower Tibia Bone Structure */}
          <path
            d="M20 185 C20 175 40 178 60 178 C80 178 100 175 100 185 C100 198 75 205 72 260 L48 260 C45 205 20 198 20 185 Z"
            fill="#f8fafc"
            stroke="#0054a6"
            strokeWidth="2.5"
          />
          <path d="M102 195 L106 255 L96 255 L94 195 Z" fill="#bbf7d0" stroke="#16943c" strokeWidth="1.5" />

          {/* Diagnostic Reticle */}
          <circle cx="60" cy="172" r="36" stroke="#16943c" strokeWidth="2" strokeDasharray="6 4" fill="none" />
          <circle cx="60" cy="172" r="6" fill="#16943c" />
        </g>

        {/* Telemetry HUD Cards */}
        <g transform="translate(30, 40)">
          <rect x="0" y="0" width="150" height="58" rx="8" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
          <text x="12" y="24" fill="#0054a6" fontSize="10.5" fontWeight="800" fontFamily="system-ui, sans-serif">
            BONE MATRIX: SCAN
          </text>
          <text x="12" y="44" fill="#16943c" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">
            ALIGNMENT: OPTIMAL
          </text>
        </g>

        <g transform="translate(420, 40)">
          <rect x="0" y="0" width="150" height="58" rx="8" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
          <text x="12" y="24" fill="#0054a6" fontSize="10.5" fontWeight="800" fontFamily="system-ui, sans-serif">
            TRAUMA STABILIZE
          </text>
          <text x="12" y="44" fill="#16943c" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">
            READINESS: ACTIVE
          </text>
        </g>

        {/* Title Bar */}
        <rect x="135" y="342" width="330" height="34" rx="8" fill="#0054a6" />
        <text x="300" y="364" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="900" letterSpacing="1.8" fontFamily="system-ui, sans-serif">
          EXPERT ORTHOPAEDIC & TRAUMA
        </text>
      </svg>
    </div>
  );
};

/**
 * Critical Care & ICU Vital Monitor Visual - AMMA Brand Theme
 */
export const CriticalCareVisual: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center group ${className}`}>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <rect x="15" y="15" width="570" height="370" rx="14" fill="#0f172a" stroke="#0054a6" strokeWidth="2" />
        
        {/* Top Header Bar */}
        <rect x="25" y="25" width="550" height="38" fill="#1e293b" />
        <circle cx="45" cy="44" r="5" fill="#22a844" />
        <text x="60" y="48" fill="#93c5fd" fontSize="11" fontWeight="800" letterSpacing="1.5">
          AMMA ICU · CONTINUOUS VITAL TELEMETRY
        </text>
        <text x="555" y="48" textAnchor="end" fill="#86efac" fontSize="12" fontWeight="900" fontFamily="monospace">
          24/7 ONLINE
        </text>

        {/* Waveform 1: ECG / Cardiac Rhythm (Emerald Green) */}
        <g transform="translate(35, 75)">
          <text x="0" y="20" fill="#22a844" fontSize="11" fontWeight="bold">ECG-II</text>
          <svg x="65" y="-10" width="350" height="55" viewBox="0 0 350 55">
            <path
              d="M0 27 L40 27 L45 27 L50 14 L55 40 L60 6 L68 35 L75 27 L120 27 L125 27 L130 14 L135 40 L140 6 L148 35 L155 27 L200 27 L205 27 L210 14 L215 40 L220 6 L228 35 L235 27 L280 27 L285 27 L290 14 L295 40 L300 6 L308 35 L315 27 L350 27"
              fill="none"
              stroke="#22a844"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <rect x="430" y="-8" width="105" height="52" rx="8" fill="#064e3b" stroke="#16943c" strokeWidth="1" />
          <text x="442" y="12" fill="#86efac" fontSize="10" fontWeight="bold">HR bpm</text>
          <text x="482" y="36" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="monospace">76</text>
        </g>

        {/* Waveform 2: Pleth / SpO2 Oxygen (Cyan-Blue) */}
        <g transform="translate(35, 142)">
          <text x="0" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold">SpO2</text>
          <svg x="65" y="-10" width="350" height="55" viewBox="0 0 350 55">
            <path
              d="M0 27 Q15 6 25 27 Q35 42 45 27 Q60 6 70 27 Q80 42 90 27 Q105 6 115 27 Q125 42 135 27 Q150 6 160 27 Q170 42 180 27 Q195 6 205 27 Q215 42 225 27 Q240 6 250 27 Q260 42 270 27 Q285 6 295 27 Q305 42 315 27 Q330 6 350 27"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <rect x="430" y="-8" width="105" height="52" rx="8" fill="#0c4a6e" stroke="#0054a6" strokeWidth="1" />
          <text x="442" y="12" fill="#7dd3fc" fontSize="10" fontWeight="bold">SpO2 %</text>
          <text x="482" y="36" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="monospace">99</text>
        </g>

        {/* Waveform 3: Resp / Breathing (Amber) */}
        <g transform="translate(35, 208)">
          <text x="0" y="20" fill="#fb923c" fontSize="11" fontWeight="bold">RESP</text>
          <svg x="65" y="-10" width="350" height="55" viewBox="0 0 350 55">
            <path
              d="M0 30 Q30 5 60 30 Q90 48 120 30 Q150 5 180 30 Q210 48 240 30 Q270 5 300 30 Q330 48 350 30"
              fill="none"
              stroke="#fb923c"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <rect x="430" y="-8" width="105" height="52" rx="8" fill="#7c2d12" stroke="#fb923c" strokeWidth="1" />
          <text x="442" y="12" fill="#ffedd5" fontSize="10" fontWeight="bold">RESP rpm</text>
          <text x="482" y="36" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="monospace">16</text>
        </g>

        {/* Bottom Parameters */}
        <g transform="translate(35, 285)">
          <rect x="0" y="0" width="170" height="60" rx="8" fill="#0f2b48" stroke="#0054a6" strokeWidth="1" />
          <text x="14" y="20" fill="#93c5fd" fontSize="10" fontWeight="bold">NIBP mmHg</text>
          <text x="14" y="46" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="monospace">120 / 80</text>

          <rect x="185" y="0" width="170" height="60" rx="8" fill="#064e3b" stroke="#16943c" strokeWidth="1" />
          <text x="199" y="20" fill="#86efac" fontSize="10" fontWeight="bold">TEMP °C</text>
          <text x="199" y="46" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="monospace">36.8</text>

          <rect x="370" y="0" width="165" height="60" rx="8" fill="#0054a6" stroke="#38bdf8" strokeWidth="1" />
          <text x="384" y="20" fill="#e0f2fe" fontSize="10" fontWeight="bold">STATUS</text>
          <text x="384" y="45" fill="#ffffff" fontSize="15" fontWeight="bold">STABLE</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * General Medicine & Diagnostics Visual - AMMA Brand Style
 */
export const GeneralMedicineVisual: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-50/50 via-white to-green-50/40 flex items-center justify-center group ${className}`}>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <rect width="600" height="400" fill="#f8fafc" />
        <circle cx="300" cy="200" r="140" fill="#e0f2fe" opacity="0.6" />

        {/* Diagnostic Digital Tablet & Clipboard */}
        <g transform="translate(180, 50)">
          <rect x="0" y="20" width="240" height="300" rx="16" fill="#ffffff" stroke="#93c5fd" strokeWidth="2.5" />
          <rect x="70" y="5" width="100" height="30" rx="6" fill="#0054a6" />
          <rect x="90" y="12" width="60" height="10" rx="3" fill="#ffffff" />

          <circle cx="45" cy="65" r="16" fill="#f0fdf4" stroke="#16943c" strokeWidth="1.5" />
          <rect x="42" y="55" width="6" height="20" rx="2" fill="#16943c" />
          <rect x="35" y="62" width="20" height="6" rx="2" fill="#16943c" />
          
          <text x="75" y="70" fill="#0054a6" fontSize="13" fontWeight="bold" letterSpacing="1">
            GENERAL EVALUATION
          </text>

          <g transform="translate(30, 105)">
            <circle cx="10" cy="10" r="8" fill="#f0fdf4" stroke="#16943c" strokeWidth="1.5" />
            <path d="M7 10 L9 12 L13 8" stroke="#16943c" strokeWidth="2" strokeLinecap="round" />
            <rect x="30" y="6" width="140" height="8" rx="4" fill="#e2e8f0" />

            <circle cx="10" cy="40" r="8" fill="#f0fdf4" stroke="#16943c" strokeWidth="1.5" />
            <path d="M7 40 L9 42 L13 38" stroke="#16943c" strokeWidth="2" strokeLinecap="round" />
            <rect x="30" y="36" width="120" height="8" rx="4" fill="#e2e8f0" />

            <circle cx="10" cy="70" r="8" fill="#f0fdf4" stroke="#16943c" strokeWidth="1.5" />
            <path d="M7 70 L9 72 L13 68" stroke="#16943c" strokeWidth="2" strokeLinecap="round" />
            <rect x="30" y="66" width="150" height="8" rx="4" fill="#e2e8f0" />

            <circle cx="10" cy="100" r="8" fill="#f0fdf4" stroke="#16943c" strokeWidth="1.5" />
            <path d="M7 100 L9 102 L13 98" stroke="#16943c" strokeWidth="2" strokeLinecap="round" />
            <rect x="30" y="96" width="110" height="8" rx="4" fill="#e2e8f0" />
          </g>
        </g>

        {/* Precision Stethoscope in Royal Blue */}
        <g transform="translate(90, 120)">
          <path
            d="M80 20 C10 80, 20 220, 120 240 C220 260, 320 230, 320 180"
            fill="none"
            stroke="#0054a6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="320" cy="180" r="28" fill="#ffffff" stroke="#0054a6" strokeWidth="3" />
          <circle cx="320" cy="180" r="16" fill="#bbf7d0" />
          <circle cx="320" cy="180" r="7" fill="#16943c" />
        </g>

        {/* Corner Marks */}
        <path d="M 20 35 L 20 20 L 35 20" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 565 20 L 580 20 L 580 35" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 20 365 L 20 380 L 35 380" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 565 380 L 580 380 L 580 365" stroke="#0054a6" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

/**
 * Trauma & Rapid Emergency Response Visual - AMMA Brand Style
 */
export const TraumaCareVisual: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-50/50 via-white to-green-50/40 flex items-center justify-center group ${className}`}>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <rect width="600" height="400" fill="#f8fafc" />
        <circle cx="480" cy="80" r="100" fill="#e0f2fe" opacity="0.6" />
        <circle cx="120" cy="300" r="110" fill="#dcfce7" opacity="0.7" />

        {/* Emergency Beacon */}
        <g transform="translate(250, 60)">
          <ellipse cx="50" cy="70" rx="45" ry="15" fill="#bbf7d0" />
          <path d="M15 70 C15 30 85 30 85 70 Z" fill="#0054a6" opacity="0.9" />
          <path d="M25 70 C25 40 75 40 75 70 Z" fill="#16943c" />
          <circle cx="50" cy="50" r="8" fill="#ffffff" />
          
          <line x1="50" y1="20" x2="50" y2="4" stroke="#16943c" strokeWidth="4" strokeLinecap="round" />
          <line x1="15" y1="35" x2="-2" y2="25" stroke="#16943c" strokeWidth="4" strokeLinecap="round" />
          <line x1="85" y1="35" x2="102" y2="25" stroke="#16943c" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Trauma Triage Shield */}
        <g transform="translate(170, 175)">
          <path
            d="M130 10 L230 40 L230 110 C230 170 130 200 130 200 C130 200 30 170 30 110 L30 40 Z"
            fill="#ffffff"
            stroke="#0054a6"
            strokeWidth="3.5"
          />
          <circle cx="130" cy="105" r="36" fill="#f0fdf4" />
          <rect x="124" y="75" width="12" height="60" rx="3" fill="#16943c" />
          <rect x="100" y="99" width="60" height="12" rx="3" fill="#16943c" />
          <rect x="126" y="80" width="8" height="50" rx="2" fill="#ffffff" />
          <rect x="105" y="101" width="50" height="8" rx="2" fill="#ffffff" />
        </g>

        {/* Corner Marks */}
        <path d="M 20 35 L 20 20 L 35 20" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 565 20 L 580 20 L 580 35" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 20 365 L 20 380 L 35 380" stroke="#0054a6" strokeWidth="2" fill="none" />
        <path d="M 565 380 L 580 380 L 580 365" stroke="#0054a6" strokeWidth="2" fill="none" />

        {/* Title Bar */}
        <rect x="135" y="340" width="330" height="34" rx="8" fill="#0054a6" />
        <text x="300" y="362" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="900" letterSpacing="1.8" fontFamily="system-ui, sans-serif">
          IMMEDIATE ACCIDENT & TRAUMA TRIAGE
        </text>
      </svg>
    </div>
  );
};
