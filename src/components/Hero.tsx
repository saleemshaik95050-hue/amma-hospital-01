import React from 'react';
import { Phone, Calendar, Navigation, MapPin, ShieldCheck, HeartPulse, Activity, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { HospitalBuildingVisual } from './HospitalVisuals';
import { AmmaLogo } from './AmmaLogo';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white text-slate-800 pt-8 pb-20 md:py-20 border-b border-slate-100">
      {/* Subtle royal blue and leaf green ambient radial glows */}
      <div className="absolute top-10 right-5 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-brand-glow" />
      <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative hairline accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#0054a6]/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Brand Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-[#0054a6] text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16943c] animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#16943c]" />
              <span>Beside Shishuraksha Hospital · Siricilla Road · Kamareddy</span>
            </div>

            {/* Hospital Identification with Official Tagline */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#0054a6] uppercase font-sans">
                  AMMA HOSPITAL · KAMAREDDY
                </span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="text-xs sm:text-sm font-bold text-[#16943c] font-sans">
                  Better Health · Brighter Tomorrow
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.14] text-balance">
                Compassionate Care. <span className="text-gradient-brand">Advanced Treatment.</span> Better Health.
              </h1>
            </div>

            {/* Subheadline as requested */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Quality healthcare for you and your family, backed by experienced medical care and modern facilities.
            </p>

            {/* Specialties Strip */}
            <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-[#0054a6] font-bold mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16943c]" />
                <span>Specialized Care Centres:</span>
              </p>
              <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-700">
                <span className="flex items-center gap-2 font-semibold">
                  <Activity className="w-4 h-4 text-[#0054a6] shrink-0" />
                  General & Critical Care
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 font-semibold">
                  <HeartPulse className="w-4 h-4 text-[#16943c] shrink-0" />
                  Maternity Care
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#0054a6] shrink-0" />
                  Ortho & Trauma Care
                </span>
              </div>
            </div>

            {/* Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#0054a6] via-[#00488f] to-[#003d7a] hover:from-[#004182] hover:to-[#16943c] rounded-xl shadow-lg shadow-[#0054a6]/25 hover:shadow-[#0054a6]/35 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-green-50/60 border border-green-200 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#16943c]" />
                <span>Call Now: {HOSPITAL_INFO.contacts.emergency}</span>
              </a>

              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm sm:text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-[#0054a6]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust cues */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex flex-wrap items-center gap-y-2 gap-x-6">
              <span className="flex items-center gap-2 font-mono text-[11px] text-[#16943c] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#16943c] animate-beacon" />
                EMERGENCY SERVICES: 24/7 ONLINE
              </span>
              <span>·</span>
              <span>Beside Shishuraksha Hospital</span>
              <span>·</span>
              <span>Siricilla Road, Kamareddy</span>
            </div>
          </div>

          {/* Right Column: Visual Hospital Building & Facility Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-4 sm:p-5 shadow-xl border border-blue-100 overflow-hidden">
              {/* Image Frame */}
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <HospitalBuildingVisual className="w-full h-full" />
                
                {/* Floating brand chip */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-blue-100 text-[#0054a6] text-[11px] font-mono font-bold flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#16943c] animate-pulse" />
                  <span>AMMA HOSPITAL · KAMAREDDY</span>
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#16943c] text-white text-[10px] font-mono font-bold shadow-sm">
                  24/7 TRAUMA & ICU READY
                </div>
              </div>

              {/* Facility Highlights beneath the image */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-3 gap-2.5 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100">
                  <p className="text-[#0054a6] font-bold text-xs sm:text-sm">ICU Care</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Critical Units</p>
                </div>
                <div className="p-2.5 rounded-xl bg-green-50/50 border border-green-100">
                  <p className="text-[#16943c] font-bold text-xs sm:text-sm">Maternity</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Mother & Baby</p>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100">
                  <p className="text-[#0054a6] font-bold text-xs sm:text-sm">Ortho/Trauma</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Fracture Care</p>
                </div>
              </div>

              <div className="mt-3 text-center">
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0054a6] hover:text-[#16943c] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16943c]" />
                  <span>View 12 Hospital Facilities & Campus Photos →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
