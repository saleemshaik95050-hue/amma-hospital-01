import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface MobileBottomBarProps {
  onOpenAppointmentModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAppointmentModal }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-8px_20px_rgba(0,84,166,0.08)] px-3 py-2.5">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Now button in Brand Green */}
        <a
          href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#16943c] to-[#127a31] active:opacity-90 text-white text-center shadow-md shadow-green-600/25 transition-all font-mono"
        >
          <Phone className="w-4 h-4 fill-current mb-0.5 animate-pulse" />
          <span className="text-[11px] font-black tracking-tight leading-none">CALL NOW</span>
        </a>

        {/* Book Appointment button in Brand Royal Blue */}
        <button
          onClick={onOpenAppointmentModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#0054a6] hover:bg-[#004182] active:bg-[#003366] text-white text-center shadow-md shadow-blue-900/20 transition-all cursor-pointer font-sans"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight leading-none">Book Appt</span>
        </button>

        {/* Directions button */}
        <a
          href={HOSPITAL_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 border border-slate-200 active:bg-slate-100 text-slate-700 text-center shadow-xs transition-all font-sans"
        >
          <Navigation className="w-4 h-4 text-[#0054a6] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight leading-none">Directions</span>
        </a>
      </div>
    </div>
  );
};
