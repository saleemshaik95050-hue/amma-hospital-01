import React from 'react';

interface GalleryVisualProps {
  photoId: string;
  className?: string;
}

/**
 * High-fidelity visual renderings representing the authentic facilities of AMMA Hospital.
 * Custom styled in the official Royal Blue (#0054a6) & Medical Leaf Green (#16943c) theme.
 */
export const GalleryVisual: React.FC<GalleryVisualProps> = ({ photoId, className = 'w-full h-full' }) => {
  switch (photoId) {
    case 'dsc00344':
      // Hospital Exterior Facade & Campus Entrance
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="60%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="gBlueSign" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#003d7a" />
              <stop offset="50%" stopColor="#0054a6" />
              <stop offset="100%" stopColor="#0066cc" />
            </linearGradient>
            <linearGradient id="gGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect width="600" height="380" fill="url(#gSky)" />
          {/* Landscaped ground & driveway */}
          <rect y="290" width="600" height="90" fill="#e2e8f0" />
          <path d="M0 290 Q200 275 400 285 T600 280 L600 380 L0 380 Z" fill="#86efac" opacity="0.35" />
          <rect x="0" y="325" width="600" height="55" fill="#334155" />
          <line x1="0" y1="352" x2="600" y2="352" stroke="#f8fafc" strokeWidth="2" strokeDasharray="16 16" />

          {/* Hospital Building Wing Left */}
          <rect x="70" y="100" width="130" height="200" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          {/* Main Hospital Center Structure */}
          <rect x="180" y="70" width="250" height="230" rx="8" fill="#ffffff" stroke="#93c5fd" strokeWidth="2.5" />
          {/* Right Wing */}
          <rect x="410" y="110" width="120" height="190" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />

          {/* Top Architectural Crown & AMMA Hospital Signboard */}
          <rect x="190" y="46" width="230" height="42" rx="6" fill="url(#gBlueSign)" />
          <circle cx="212" cy="67" r="14" fill="#f0fdf4" />
          <rect x="210" y="58" width="4" height="18" fill="#16943c" rx="1" />
          <rect x="203" y="65" width="18" height="4" fill="#16943c" rx="1" />
          <text x="315" y="72" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" letterSpacing="2" fontFamily="sans-serif">
            AMMA HOSPITAL
          </text>

          {/* Building Facade Windows */}
          {[0, 1, 2].map((row) => (
            <g key={row}>
              <rect x="205" y={115 + row * 45} width="45" height="28" rx="3" fill="url(#gGlass)" stroke="#93c5fd" strokeWidth="1" />
              <rect x="260" y={115 + row * 45} width="45" height="28" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="315" y={115 + row * 45} width="45" height="28" rx="3" fill="url(#gGlass)" stroke="#93c5fd" strokeWidth="1" />
              <rect x="370" y={115 + row * 45} width="45" height="28" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            </g>
          ))}

          {/* Main Entrance Canopy & Pillar */}
          <polygon points="230,250 380,250 395,275 215,275" fill="#0054a6" />
          <rect x="250" y="275" width="110" height="35" fill="#e0f2fe" stroke="#0054a6" strokeWidth="1.5" />
          <line x1="305" y1="275" x2="305" y2="310" stroke="#0054a6" strokeWidth="1.5" />

          {/* Emergency Ambulance */}
          <g transform="translate(420, 280) scale(0.65)">
            <rect x="0" y="20" width="120" height="50" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
            <rect x="90" y="28" width="25" height="22" rx="3" fill="#38bdf8" />
            <rect x="0" y="44" width="120" height="10" fill="#dc2626" />
            <circle cx="28" cy="72" r="14" fill="#1e293b" />
            <circle cx="28" cy="72" r="6" fill="#cbd5e1" />
            <circle cx="95" cy="72" r="14" fill="#1e293b" />
            <circle cx="95" cy="72" r="6" fill="#cbd5e1" />
            <rect x="18" y="26" width="28" height="12" rx="2" fill="#22c55e" />
            <text x="32" y="35" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">AMMA</text>
            <circle cx="50" cy="14" r="5" fill="#ef4444" />
          </g>

          {/* Badge Tag */}
          <g transform="translate(20, 20)">
            <rect width="130" height="26" rx="6" fill="#0054a6" />
            <text x="65" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00344 · CAMPUS
            </text>
          </g>
        </svg>
      );

    case 'dsc00346':
      // 24/7 Emergency Casualty & Ambulance Bay
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#f8fafc" />
          {/* Red Emergency Signboard */}
          <rect x="40" y="30" width="520" height="50" rx="8" fill="#be123c" />
          <circle cx="80" cy="55" r="16" fill="#ffffff" />
          <rect x="77" y="45" width="6" height="20" fill="#be123c" rx="1" />
          <rect x="70" y="52" width="20" height="6" fill="#be123c" rx="1" />
          <text x="300" y="62" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" letterSpacing="2">
            24/7 CASUALTY & EMERGENCY WING
          </text>

          {/* Triage Bays and Stretcher */}
          <rect x="60" y="110" width="480" height="220" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          {/* Medical Curtains Divider */}
          <line x1="280" y1="110" x2="280" y2="330" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 6" />

          {/* Emergency Stretcher Trolley */}
          <g transform="translate(100, 160)">
            <rect x="0" y="40" width="130" height="22" rx="4" fill="#0054a6" />
            <rect x="10" y="30" width="40" height="14" rx="4" fill="#ffffff" stroke="#93c5fd" />
            <line x1="25" y1="62" x2="25" y2="110" stroke="#64748b" strokeWidth="4" />
            <line x1="105" y1="62" x2="105" y2="110" stroke="#64748b" strokeWidth="4" />
            <line x1="20" y1="90" x2="110" y2="90" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="25" cy="115" r="8" fill="#1e293b" />
            <circle cx="105" cy="115" r="8" fill="#1e293b" />
            {/* IV Stand */}
            <line x1="135" y1="10" x2="135" y2="120" stroke="#64748b" strokeWidth="2.5" />
            <path d="M125 15 Q135 5 145 15" stroke="#64748b" strokeWidth="2" fill="none" />
            <rect x="127" y="20" width="16" height="22" rx="3" fill="#bae6fd" stroke="#0284c7" />
          </g>

          {/* Crash Cart */}
          <g transform="translate(340, 150)">
            <rect x="0" y="20" width="90" height="100" rx="6" fill="#be123c" />
            <rect x="8" y="32" width="74" height="15" rx="3" fill="#ffffff" />
            <rect x="8" y="52" width="74" height="15" rx="3" fill="#ffffff" />
            <rect x="8" y="72" width="74" height="15" rx="3" fill="#ffffff" />
            <rect x="8" y="92" width="74" height="15" rx="3" fill="#ffffff" />
            <circle cx="15" cy="125" r="6" fill="#334155" />
            <circle cx="75" cy="125" r="6" fill="#334155" />
            {/* Defibrillator Screen */}
            <rect x="15" y="-5" width="60" height="22" rx="4" fill="#0f172a" />
            <polyline points="20,6 30,6 35,0 40,14 45,6 65,6" stroke="#22c55e" strokeWidth="2" fill="none" />
          </g>

          {/* Oxygen Pipeline Console */}
          <rect x="460" y="130" width="60" height="90" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
          <circle cx="480" cy="155" r="10" fill="#ffffff" stroke="#0054a6" strokeWidth="2" />
          <circle cx="480" cy="155" r="4" fill="#0054a6" />
          <circle cx="500" cy="190" r="10" fill="#ffffff" stroke="#16943c" strokeWidth="2" />
          <circle cx="500" cy="190" r="4" fill="#16943c" />

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#be123c" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00346 · CASUALTY
            </text>
          </g>
        </svg>
      );

    case 'dsc00348':
      // Main Reception & Patient Registration Desk
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="gDesk" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
          </defs>
          <rect width="600" height="380" fill="url(#gWall)" />
          {/* Tiled Floor */}
          <rect y="240" width="600" height="140" fill="#e2e8f0" />
          {[...Array(6)].map((_, i) => (
            <line key={i} x1={i * 120} y1="240" x2={i * 120 - 40} y2="380" stroke="#cbd5e1" strokeWidth="1" />
          ))}

          {/* Backwall Brand Art & Sign */}
          <rect x="160" y="40" width="280" height="70" rx="8" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
          <circle cx="200" cy="75" r="20" fill="#0054a6" />
          <circle cx="200" cy="75" r="16" fill="#ffffff" />
          <circle cx="200" cy="75" r="8" fill="#16943c" />
          <text x="310" y="70" textAnchor="middle" fill="#0054a6" fontSize="16" fontWeight="900" letterSpacing="1.5">
            AMMA HOSPITAL
          </text>
          <text x="310" y="88" textAnchor="middle" fill="#16943c" fontSize="8" fontWeight="bold" letterSpacing="1">
            RECEPTION & OPD REGISTRATION
          </text>

          {/* Digital Queue Display Monitor */}
          <rect x="470" y="50" width="90" height="60" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <rect x="476" y="56" width="78" height="48" fill="#1e293b" />
          <text x="515" y="75" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">TOKEN #24</text>
          <text x="515" y="92" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="bold" fontFamily="monospace">DR. ROOM 2</text>

          {/* Main Curved Reception Counter */}
          <path d="M80 200 L520 200 L490 280 L110 280 Z" fill="url(#gDesk)" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="110" y="270" width="380" height="50" fill="#0054a6" rx="4" />
          <line x1="110" y1="270" x2="490" y2="270" stroke="#16943c" strokeWidth="4" />
          <text x="300" y="302" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" letterSpacing="2">
            HELP DESK · ENQUIRIES · ADMISSIONS
          </text>

          {/* Computer Monitors on Desk */}
          <rect x="190" y="165" width="45" height="32" rx="2" fill="#1e293b" />
          <rect x="207" y="197" width="12" height="6" fill="#64748b" />
          <rect x="360" y="165" width="45" height="32" rx="2" fill="#1e293b" />
          <rect x="377" y="197" width="12" height="6" fill="#64748b" />

          {/* Waiting Chairs Left */}
          <rect x="25" y="260" width="55" height="40" rx="4" fill="#3b82f6" />
          <rect x="30" y="300" width="6" height="30" fill="#64748b" />
          <rect x="70" y="300" width="6" height="30" fill="#64748b" />

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#0054a6" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00348 · RECEPTION
            </text>
          </g>
        </svg>
      );

    case 'dsc00350':
      // Doctor Consultation Suite & Clinical Chambers
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#f8fafc" />
          {/* Wall decor and Medical Degrees */}
          <rect x="50" y="40" width="60" height="45" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="55" y="45" width="50" height="35" fill="#f1f5f9" />
          <circle cx="80" cy="62" r="8" fill="#ca8a04" opacity="0.6" />

          <rect x="130" y="40" width="60" height="45" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="135" y="45" width="50" height="35" fill="#f1f5f9" />
          <circle cx="160" cy="62" r="8" fill="#0054a6" opacity="0.6" />

          {/* Doctor Executive Consultation Desk */}
          <rect x="180" y="160" width="220" height="85" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="190" y="245" width="16" height="70" fill="#64748b" />
          <rect x="374" y="245" width="16" height="70" fill="#64748b" />
          {/* Desk accessories */}
          <rect x="210" y="175" width="40" height="30" rx="3" fill="#1e293b" />
          {/* Stethoscope */}
          <path d="M280 185 Q300 200 310 180 T330 190" stroke="#0054a6" strokeWidth="2.5" fill="none" />
          <circle cx="332" cy="190" r="5" fill="#64748b" />
          {/* BP Monitor */}
          <rect x="345" y="175" width="30" height="20" rx="2" fill="#e2e8f0" stroke="#94a3b8" />

          {/* Doctor Ergonomic Chair */}
          <rect x="250" y="100" width="80" height="70" rx="8" fill="#1e293b" />
          <rect x="285" y="170" width="10" height="40" fill="#475569" />

          {/* Patient Examination Bed & Screen */}
          <g transform="translate(440, 160)">
            <rect x="0" y="30" width="130" height="25" rx="4" fill="#ffffff" stroke="#0054a6" strokeWidth="2" />
            <rect x="0" y="20" width="35" height="15" rx="3" fill="#93c5fd" />
            <line x1="20" y1="55" x2="20" y2="120" stroke="#64748b" strokeWidth="4" />
            <line x1="110" y1="55" x2="110" y2="120" stroke="#64748b" strokeWidth="4" />
            {/* Step stool */}
            <rect x="40" y="100" width="45" height="15" rx="2" fill="#cbd5e1" />
          </g>

          {/* Privacy Medical Screen */}
          <line x1="420" y1="120" x2="420" y2="300" stroke="#94a3b8" strokeWidth="3" />
          <rect x="422" y="130" width="10" height="140" fill="#bfdbfe" opacity="0.6" />

          {/* Patient Chairs */}
          <rect x="130" y="200" width="40" height="40" rx="4" fill="#0054a6" />
          <line x1="140" y1="240" x2="140" y2="280" stroke="#64748b" strokeWidth="3" />

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="165" height="26" rx="6" fill="#16943c" />
            <text x="82" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00350 · DOCTOR OPD
            </text>
          </g>
        </svg>
      );

    case 'dsc00354':
      // Intensive Critical Care Unit (ICU) Beds & Telemetry
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#0f172a" />
          {/* Ambient ICU lighting glow */}
          <circle cx="300" cy="180" r="140" fill="#0284c7" opacity="0.12" />

          {/* Headwall Central Console with Oxygen & Suction */}
          <rect x="80" y="50" width="440" height="70" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <circle cx="120" cy="85" r="12" fill="#0054a6" />
          <text x="120" y="89" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">O2</text>
          <circle cx="160" cy="85" r="12" fill="#eab308" />
          <text x="160" y="89" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">VAC</text>
          <circle cx="200" cy="85" r="12" fill="#16943c" />
          <text x="200" y="89" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">AIR</text>

          {/* High-Tech Cardiac & Telemetry Monitor */}
          <rect x="360" y="65" width="140" height="95" rx="6" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
          <rect x="368" y="73" width="124" height="79" fill="#000000" />
          {/* ECG Trace Green */}
          <path d="M375 92 L395 92 L400 82 L405 105 L410 88 L415 92 L440 92 L445 80 L450 106 L455 92 L485 92" stroke="#22c55e" strokeWidth="2" fill="none" />
          {/* SpO2 Trace Cyan */}
          <path d="M375 115 Q385 110 395 115 T415 115 T435 115 T455 115 T475 115" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          {/* Numbers */}
          <text x="475" y="90" textAnchor="end" fill="#22c55e" fontSize="14" fontWeight="bold" fontFamily="monospace">74 HR</text>
          <text x="475" y="112" textAnchor="end" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">99 %</text>
          <text x="475" y="132" textAnchor="end" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">122/80</text>

          {/* Motorized Multi-Segment ICU Hospital Bed */}
          <g transform="translate(130, 150)">
            {/* Raised Backrest */}
            <polygon points="30,80 90,40 180,40 260,80" fill="#1e293b" />
            <polygon points="35,75 88,44 175,44 255,75" fill="#f8fafc" />
            {/* Side safety rails */}
            <rect x="60" y="32" width="60" height="18" rx="4" fill="#94a3b8" opacity="0.8" />
            <rect x="150" y="32" width="60" height="18" rx="4" fill="#94a3b8" opacity="0.8" />
            {/* Bed Lower Structure */}
            <rect x="40" y="80" width="220" height="40" rx="6" fill="#334155" />
            <line x1="70" y1="120" x2="70" y2="170" stroke="#64748b" strokeWidth="8" />
            <line x1="230" y1="120" x2="230" y2="170" stroke="#64748b" strokeWidth="8" />
            <rect x="50" y="165" width="40" height="12" rx="4" fill="#0f172a" />
            <rect x="210" y="165" width="40" height="12" rx="4" fill="#0f172a" />
          </g>

          {/* Infusion Pumps Column Left */}
          <rect x="75" y="160" width="42" height="130" rx="4" fill="#1e293b" stroke="#475569" />
          <rect x="80" y="170" width="32" height="24" rx="2" fill="#020617" />
          <text x="96" y="186" textAnchor="middle" fill="#4ade80" fontSize="8" fontFamily="monospace">5.0 ml</text>
          <rect x="80" y="205" width="32" height="24" rx="2" fill="#020617" />
          <text x="96" y="221" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">12.5 ml</text>

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#0284c7" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00354 · ICU CARE
            </text>
          </g>
        </svg>
      );

    case 'dsc00355':
      // High Dependency Unit (HDU) Vital Station
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#f8fafc" />
          {/* Clean Medical Wall with Dual HDU Beds */}
          <rect x="50" y="40" width="500" height="50" rx="6" fill="#e0f2fe" stroke="#93c5fd" strokeWidth="1.5" />
          <text x="300" y="70" textAnchor="middle" fill="#0054a6" fontSize="14" fontWeight="800" letterSpacing="1">
            HIGH DEPENDENCY UNIT (HDU) · BED 1 & 2
          </text>

          {/* Bed 1 */}
          <g transform="translate(70, 130)">
            <rect x="0" y="40" width="180" height="35" rx="6" fill="#0054a6" />
            <rect x="10" y="30" width="60" height="20" rx="4" fill="#ffffff" stroke="#93c5fd" />
            <line x1="30" y1="75" x2="30" y2="150" stroke="#64748b" strokeWidth="6" />
            <line x1="150" y1="75" x2="150" y2="150" stroke="#64748b" strokeWidth="6" />
            {/* Monitor Bed 1 */}
            <rect x="15" y="-15" width="55" height="38" rx="4" fill="#0f172a" />
            <polyline points="20,5 30,5 35,-2 40,12 45,5 60,5" stroke="#22c55e" strokeWidth="1.5" fill="none" />
          </g>

          {/* Bed 2 */}
          <g transform="translate(340, 130)">
            <rect x="0" y="40" width="180" height="35" rx="6" fill="#16943c" />
            <rect x="10" y="30" width="60" height="20" rx="4" fill="#ffffff" stroke="#86efac" />
            <line x1="30" y1="75" x2="30" y2="150" stroke="#64748b" strokeWidth="6" />
            <line x1="150" y1="75" x2="150" y2="150" stroke="#64748b" strokeWidth="6" />
            {/* Monitor Bed 2 */}
            <rect x="15" y="-15" width="55" height="38" rx="4" fill="#0f172a" />
            <polyline points="20,5 30,5 35,-2 40,12 45,5 60,5" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          </g>

          {/* Nurse Calling Station Center */}
          <rect x="275" y="160" width="50" height="90" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="300" cy="185" r="10" fill="#dc2626" />
          <text x="300" y="215" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="bold">NURSE CALL</text>

          {/* Oxygen flowmeters */}
          <rect x="120" y="100" width="20" height="35" rx="2" fill="#ffffff" stroke="#0284c7" />
          <rect x="390" y="100" width="20" height="35" rx="2" fill="#ffffff" stroke="#0284c7" />

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#0054a6" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00355 · HDU BAY
            </text>
          </g>
        </svg>
      );

    case 'dsc00358':
      // Operation Theatre (OT) & Laminar Airflow Surgical Suite
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#022c22" />
          {/* Ceiling Surgical Lamps */}
          <g transform="translate(240, 20)">
            <line x1="60" y1="0" x2="60" y2="60" stroke="#94a3b8" strokeWidth="6" />
            {/* Lamp Arm 1 */}
            <line x1="60" y1="50" x2="10" y2="80" stroke="#94a3b8" strokeWidth="4" />
            <ellipse cx="5" cy="85" rx="35" ry="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="5" cy="85" rx="22" ry="7" fill="#fef08a" opacity="0.9" />
            {/* Lamp Arm 2 */}
            <line x1="60" y1="50" x2="110" y2="80" stroke="#94a3b8" strokeWidth="4" />
            <ellipse cx="115" cy="85" rx="35" ry="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="115" cy="85" rx="22" ry="7" fill="#fef08a" opacity="0.9" />
          </g>

          {/* Surgical Light Beam Cone */}
          <polygon points="210,110 390,110 440,240 160,240" fill="#fef08a" opacity="0.15" />

          {/* Operating Table */}
          <g transform="translate(180, 210)">
            <rect x="0" y="30" width="240" height="25" rx="4" fill="#0054a6" stroke="#93c5fd" strokeWidth="2" />
            <rect x="15" y="20" width="50" height="15" rx="3" fill="#ffffff" />
            {/* Center Hydraulic Pedestal */}
            <rect x="100" y="55" width="40" height="60" rx="4" fill="#64748b" />
            <rect x="80" y="110" width="80" height="15" rx="4" fill="#334155" />
          </g>

          {/* Anaesthesia Workstation Right */}
          <g transform="translate(450, 140)">
            <rect x="0" y="20" width="100" height="150" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            {/* Vaporizers */}
            <rect x="15" y="35" width="25" height="35" rx="2" fill="#eab308" />
            <rect x="55" y="35" width="25" height="35" rx="2" fill="#a855f7" />
            {/* Screen */}
            <rect x="15" y="80" width="70" height="40" rx="3" fill="#020617" />
            <polyline points="20,100 35,100 40,90 45,110 50,100 75,100" stroke="#22c55e" strokeWidth="1.5" fill="none" />
          </g>

          {/* Instrument Mayo Stand Left */}
          <g transform="translate(70, 180)">
            <rect x="0" y="20" width="80" height="15" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
            <line x1="40" y1="35" x2="40" y2="120" stroke="#64748b" strokeWidth="4" />
            <line x1="20" y1="120" x2="60" y2="120" stroke="#64748b" strokeWidth="4" />
          </g>

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#16943c" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00358 · SURGICAL OT
            </text>
          </g>
        </svg>
      );

    case 'dsc00359':
      // Orthopaedic Trauma & Minor Procedure Room
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#f1f5f9" />
          {/* Wall-mounted Backlit X-Ray View Box */}
          <rect x="210" y="40" width="180" height="110" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
          <rect x="220" y="50" width="160" height="90" fill="#0284c7" opacity="0.35" />
          {/* Bone fracture silhouette on X-ray */}
          <g transform="translate(270, 60)">
            <path d="M25 0 C20 10 20 25 25 35 L20 40 L35 45 L30 50 L35 70" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" fill="none" />
            {/* Fracture line */}
            <line x1="16" y1="38" x2="42" y2="44" stroke="#ef4444" strokeWidth="2.5" />
          </g>
          <text x="300" y="135" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">
            ORTHOPAEDIC BONE IMAGING
          </text>

          {/* Procedure & Casting Table */}
          <g transform="translate(160, 180)">
            <rect x="0" y="40" width="280" height="30" rx="4" fill="#0054a6" />
            <rect x="15" y="30" width="60" height="16" rx="3" fill="#ffffff" stroke="#93c5fd" />
            <line x1="30" y1="70" x2="30" y2="130" stroke="#475569" strokeWidth="6" />
            <line x1="250" y1="70" x2="250" y2="130" stroke="#475569" strokeWidth="6" />
            <line x1="20" y1="130" x2="260" y2="130" stroke="#64748b" strokeWidth="4" />
          </g>

          {/* Plaster & Dressing Trolley */}
          <g transform="translate(60, 190)">
            <rect x="0" y="10" width="70" height="80" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="8" y="20" width="54" height="14" fill="#f8fafc" stroke="#94a3b8" />
            <rect x="8" y="40" width="54" height="14" fill="#f8fafc" stroke="#94a3b8" />
            <circle cx="20" cy="100" r="6" fill="#334155" />
            <circle cx="50" cy="100" r="6" fill="#334155" />
            {/* Bandage rolls */}
            <circle cx="25" cy="27" r="5" fill="#e2e8f0" stroke="#64748b" />
            <circle cx="45" cy="27" r="5" fill="#e2e8f0" stroke="#64748b" />
          </g>

          {/* Skeletal anatomical model right */}
          <g transform="translate(470, 140)">
            <line x1="40" y1="20" x2="40" y2="170" stroke="#64748b" strokeWidth="3" />
            <circle cx="40" cy="30" r="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Ribcage */}
            <ellipse cx="40" cy="65" rx="18" ry="14" fill="none" stroke="#94a3b8" strokeWidth="2" />
            <rect x="15" y="170" width="50" height="10" rx="2" fill="#334155" />
          </g>

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#0054a6" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00359 · ORTHO UNIT
            </text>
          </g>
        </svg>
      );

    case 'dsc00371':
      // Maternity Delivery Ward & Labor Care Facility
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="gMatWall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff1f2" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="600" height="380" fill="url(#gMatWall)" />
          {/* Reassuring Mother & Child Wall Graphic */}
          <g transform="translate(250, 40) scale(0.6)">
            <path d="M50 20 C80 -10 140 -5 160 35 C180 80 150 130 90 170 L50 200 Z" fill="#fda4af" opacity="0.5" />
            <circle cx="70" cy="60" r="16" fill="#e11d48" opacity="0.7" />
          </g>
          <text x="300" y="85" textAnchor="middle" fill="#e11d48" fontSize="14" fontWeight="800" letterSpacing="1">
            MATERNITY & BIRTHING SUITE
          </text>

          {/* Obstetric Labor & Delivery Bed */}
          <g transform="translate(130, 160)">
            <rect x="0" y="40" width="220" height="35" rx="6" fill="#be123c" />
            <rect x="15" y="25" width="60" height="22" rx="4" fill="#ffffff" stroke="#fecdd3" />
            {/* Ergonomic Leg Supports */}
            <circle cx="160" cy="30" r="8" fill="#e2e8f0" stroke="#be123c" strokeWidth="2" />
            <circle cx="200" cy="30" r="8" fill="#e2e8f0" stroke="#be123c" strokeWidth="2" />
            <line x1="40" y1="75" x2="40" y2="140" stroke="#64748b" strokeWidth="6" />
            <line x1="180" y1="75" x2="180" y2="140" stroke="#64748b" strokeWidth="6" />
          </g>

          {/* Fetal Doppler Monitor Left */}
          <g transform="translate(60, 140)">
            <rect x="0" y="20" width="55" height="40" rx="4" fill="#0f172a" />
            <text x="27" y="42" textAnchor="middle" fill="#fb7185" fontSize="11" fontWeight="bold" fontFamily="monospace">142</text>
            <text x="27" y="54" textAnchor="middle" fill="#ffffff" fontSize="7">BPM FETAL</text>
            <line x1="27" y1="60" x2="27" y2="140" stroke="#64748b" strokeWidth="3" />
          </g>

          {/* Mother-Baby Bassinet Beside Bed */}
          <g transform="translate(390, 180)">
            <rect x="0" y="10" width="100" height="45" rx="8" fill="#fce7f3" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="50" cy="30" rx="38" ry="14" fill="#ffffff" />
            <line x1="25" y1="55" x2="25" y2="120" stroke="#94a3b8" strokeWidth="4" />
            <line x1="75" y1="55" x2="75" y2="120" stroke="#94a3b8" strokeWidth="4" />
            <circle cx="25" cy="125" r="5" fill="#334155" />
            <circle cx="75" cy="125" r="5" fill="#334155" />
          </g>

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#be123c" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00371 · MATERNITY
            </text>
          </g>
        </svg>
      );

    case 'dsc00372':
      // Neonatal Care & Radiant Infant Warmer Nursery
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#f0fdf4" />
          {/* Overhead Radiant Infant Warmer System */}
          <g transform="translate(250, 40)">
            {/* Vertical Support Column */}
            <rect x="40" y="0" width="20" height="260" rx="4" fill="#cbd5e1" stroke="#94a3b8" />
            {/* Overhead Heater Hood */}
            <path d="M-30 40 L130 40 L100 70 L0 70 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
            <ellipse cx="50" cy="70" rx="40" ry="10" fill="#fde047" opacity="0.8" />
            {/* Gentle Warmth Rays */}
            <polygon points="0,70 100,70 130,170 -30,170" fill="#fef08a" opacity="0.2" />

            {/* Baby Bassinet Tray */}
            <rect x="-40" y="170" width="180" height="30" rx="6" fill="#ffffff" stroke="#16943c" strokeWidth="2" />
            {/* Acrylic Transparent Walls */}
            <rect x="-35" y="150" width="170" height="20" fill="#bae6fd" opacity="0.5" rx="3" stroke="#38bdf8" />
            {/* Soft Baby Pillow */}
            <ellipse cx="50" cy="180" rx="50" ry="10" fill="#fbcfe8" />

            {/* Microprocessor Control Console */}
            <rect x="65" y="90" width="50" height="40" rx="3" fill="#0f172a" />
            <text x="90" y="108" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="bold" fontFamily="monospace">36.8°C</text>
            <text x="90" y="122" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="monospace">WARMER ON</text>
          </g>

          {/* Pediatric Weighing Scale Left */}
          <g transform="translate(80, 200)">
            <rect x="0" y="20" width="90" height="25" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="45" cy="20" rx="40" ry="10" fill="#f1f5f9" stroke="#94a3b8" />
            <text x="45" y="38" textAnchor="middle" fill="#0054a6" fontSize="9" fontWeight="bold" fontFamily="monospace">2.95 kg</text>
          </g>

          {/* Phototherapy lamp ready right */}
          <g transform="translate(460, 160)">
            <circle cx="30" cy="40" r="18" fill="#3b82f6" opacity="0.4" />
            <line x1="30" y1="58" x2="30" y2="150" stroke="#64748b" strokeWidth="4" />
            <rect x="15" y="145" width="30" height="10" rx="2" fill="#334155" />
          </g>

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#16943c" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00372 · NEONATAL
            </text>
          </g>
        </svg>
      );

    case 'dsc00380':
      // 24/7 Clinical Pathology & Diagnostic Laboratory
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="380" fill="#f8fafc" />
          {/* Lab Counter & Shelves */}
          <rect x="50" y="50" width="500" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Test tube rack */}
          <rect x="70" y="60" width="80" height="22" rx="2" fill="#e2e8f0" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={78 + i * 14} y="54" width="6" height="22" rx="3" fill={i % 2 === 0 ? '#ef4444' : '#3b82f6'} />
          ))}

          {/* Lab Bench Surface */}
          <rect x="50" y="160" width="500" height="80" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="50" y="235" width="500" height="70" fill="#f1f5f9" stroke="#e2e8f0" />

          {/* Automated Hematology Analyzer Machine */}
          <g transform="translate(90, 100)">
            <rect x="0" y="0" width="130" height="90" rx="6" fill="#0054a6" />
            <rect x="15" y="15" width="50" height="35" rx="3" fill="#020617" />
            <text x="40" y="32" textAnchor="middle" fill="#4ade80" fontSize="7" fontFamily="monospace">CBC STAT</text>
            <text x="40" y="43" textAnchor="middle" fill="#ffffff" fontSize="6">READY</text>
            <rect x="80" y="20" width="35" height="50" rx="2" fill="#ffffff" stroke="#93c5fd" />
            <line x1="97" y1="20" x2="97" y2="70" stroke="#ef4444" strokeWidth="2" />
          </g>

          {/* Medical Clinical Digital Microscope */}
          <g transform="translate(290, 95)">
            <ellipse cx="40" cy="110" rx="35" ry="8" fill="#334155" />
            <path d="M40 105 L40 50 L60 30" stroke="#64748b" strokeWidth="8" strokeLinecap="round" fill="none" />
            {/* Eyepieces */}
            <line x1="60" y1="30" x2="75" y2="15" stroke="#1e293b" strokeWidth="6" />
            {/* Objective Turret */}
            <circle cx="35" cy="55" r="8" fill="#e2e8f0" stroke="#64748b" />
            <rect x="32" y="63" width="6" height="12" fill="#0054a6" />
            {/* Specimen Slide Stage */}
            <rect x="15" y="75" width="45" height="6" fill="#1e293b" />
            <rect x="25" y="72" width="25" height="3" fill="#93c5fd" opacity="0.8" />
          </g>

          {/* Centrifuge Machine Right */}
          <g transform="translate(430, 110)">
            <ellipse cx="45" cy="40" rx="40" ry="25" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
            <ellipse cx="45" cy="35" rx="28" ry="16" fill="#0054a6" />
            <circle cx="45" cy="35" r="8" fill="#ffffff" />
            <text x="45" y="80" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">CENTRIFUGE</text>
          </g>

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="145" height="26" rx="6" fill="#0054a6" />
            <text x="72" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00380 · DIAGNOSTIC LAB
            </text>
          </g>
        </svg>
      );

    case 'dsc00384':
    default:
      // Deluxe Inpatient Room & Patient Recovery Ward
      return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="gInpatient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0fdf4" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="600" height="380" fill="url(#gInpatient)" />
          {/* Scenic Window in Patient Room */}
          <rect x="420" y="40" width="130" height="130" rx="4" fill="#e0f2fe" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="485" y1="40" x2="485" y2="170" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="420" y1="105" x2="550" y2="105" stroke="#cbd5e1" strokeWidth="2" />
          {/* Green tree outside window */}
          <circle cx="485" cy="115" r="28" fill="#86efac" opacity="0.6" />

          {/* Deluxe Adjustable Patient Bed */}
          <g transform="translate(140, 150)">
            <rect x="0" y="40" width="220" height="32" rx="6" fill="#16943c" />
            <rect x="15" y="25" width="65" height="20" rx="4" fill="#ffffff" stroke="#bbf7d0" strokeWidth="1.5" />
            {/* Comfortable patient bed duvet */}
            <rect x="70" y="36" width="145" height="28" rx="4" fill="#ffffff" />
            <line x1="30" y1="72" x2="30" y2="140" stroke="#64748b" strokeWidth="6" />
            <line x1="190" y1="72" x2="190" y2="140" stroke="#64748b" strokeWidth="6" />
            {/* Wall headboard panel with O2 & Call Bell */}
            <rect x="10" y="-30" width="200" height="35" rx="4" fill="#e2e8f0" stroke="#cbd5e1" />
            <circle cx="50" cy="-12" r="8" fill="#0054a6" />
            <circle cx="90" cy="-12" r="8" fill="#dc2626" />
            <text x="90" y="-9" textAnchor="middle" fill="#ffffff" fontSize="6" fontWeight="bold">BELL</text>
          </g>

          {/* Overbed Meal Table */}
          <g transform="translate(240, 160)">
            <rect x="0" y="10" width="90" height="14" rx="3" fill="#cbd5e1" stroke="#94a3b8" />
            <line x1="85" y1="24" x2="85" y2="130" stroke="#64748b" strokeWidth="4" />
            <line x1="60" y1="130" x2="95" y2="130" stroke="#64748b" strokeWidth="4" />
          </g>

          {/* Attendant Sofa Couch Left */}
          <g transform="translate(30, 200)">
            <rect x="0" y="20" width="80" height="40" rx="6" fill="#0054a6" />
            <rect x="0" y="0" width="80" height="25" rx="4" fill="#004182" />
            <line x1="10" y1="60" x2="10" y2="80" stroke="#64748b" strokeWidth="3" />
            <line x1="70" y1="60" x2="70" y2="80" stroke="#64748b" strokeWidth="3" />
          </g>

          {/* Flat Screen TV on Wall */}
          <rect x="180" y="40" width="100" height="60" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <rect x="186" y="46" width="88" height="48" fill="#1e293b" />
          <text x="230" y="74" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">AMMA HOSPITAL</text>

          {/* Badge */}
          <g transform="translate(20, 20)">
            <rect width="165" height="26" rx="6" fill="#16943c" />
            <text x="82" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              DSC00384 · DELUXE ROOM
            </text>
          </g>
        </svg>
      );
  }
};
