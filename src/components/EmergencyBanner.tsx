import React from 'react';
import { Phone, Clock, MapPin, Ambulance } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#003d7a] via-[#0054a6] to-[#003366] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-md">
      {/* Decorative ambient lighting in emerald green and sapphire blue */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16943c]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="space-y-3.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22a844] animate-beacon" />
              <span>RAPID EMERGENCY & CRITICAL RESPONSE · KAMAREDDY</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Need Medical Attention?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl font-normal leading-relaxed">
              Our team is ready to provide timely medical care when you need it most.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1.5 text-xs sm:text-sm text-blue-100 font-mono">
              <span className="flex items-center gap-2 text-white font-bold">
                <Clock className="w-4 h-4 text-[#22a844]" />
                24/7 Continuous Emergency Triage
              </span>
              <span className="hidden sm:inline text-blue-300">·</span>
              <span className="flex items-center gap-2 text-blue-100">
                <Ambulance className="w-4 h-4 text-[#22a844]" />
                Emergency & Trauma Stabilization
              </span>
              <span className="hidden sm:inline text-blue-300">·</span>
              <span className="flex items-center gap-2 text-blue-100">
                <MapPin className="w-4 h-4 text-[#22a844]" />
                Siricilla Road, Kamareddy
              </span>
            </div>
          </div>

          {/* Right Action Block */}
          <div className="flex flex-col sm:flex-row items-center gap-5 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/20 shadow-lg shrink-0">
            <div className="text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-widest text-[#22a844] font-mono font-bold block">
                Emergency Hotline
              </span>
              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="text-2xl sm:text-3xl font-black text-white hover:text-[#22a844] transition-colors tracking-tight font-mono block mt-0.5"
              >
                {HOSPITAL_INFO.contacts.emergency}
              </a>
              <span className="text-xs text-blue-200 block mt-0.5 font-mono">
                Landline: {HOSPITAL_INFO.contacts.landline}
              </span>
            </div>

            <a
              href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#16943c] hover:bg-[#127a31] text-white text-base font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-current animate-pulse text-white" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
