import React from 'react';
import { Phone, Calendar, Navigation, MessageCircle, AlertCircle, Heart, Activity, ShieldCheck, Stethoscope } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface QuickAccessBarProps {
  onOpenAppointmentModal: (dept?: string) => void;
}

export const QuickAccessBar: React.FC<QuickAccessBarProps> = ({ onOpenAppointmentModal }) => {
  const quickServices = [
    { name: 'General Medicine', icon: Stethoscope, color: 'text-[#0054a6] bg-blue-50 border-blue-200' },
    { name: 'Maternity Care', icon: Heart, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { name: 'Critical Care (ICU)', icon: Activity, color: 'text-[#0054a6] bg-blue-50 border-blue-200' },
    { name: 'Ortho & Trauma', icon: ShieldCheck, color: 'text-[#16943c] bg-green-50 border-green-200' },
  ];

  return (
    <div className="bg-white border-b border-slate-200 shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Simple 3-step urgent actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left: Emergency Status */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">
              <span className="font-bold text-red-600">24/7 OPEN:</span> Emergency, Casualty, Maternity & ICU
            </div>
          </div>

          {/* Center / Right: Big, Simple One-Touch Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-start md:justify-end">
            {/* Call Button */}
            <a
              href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call: {HOSPITAL_INFO.contacts.emergency}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/91${HOSPITAL_INFO.contacts.emergency}?text=Hello%20AMMA%20Hospital,%20I%20need%20information%20about%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>

            {/* Quick Book */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0054a6] hover:bg-[#004182] text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Doctor</span>
            </button>

            {/* Directions */}
            <a
              href={HOSPITAL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-200 transition-all whitespace-nowrap"
            >
              <Navigation className="w-3.5 h-3.5 text-[#0054a6]" />
              <span>Directions</span>
            </a>
          </div>
        </div>

        {/* Quick Service Buttons for Easy Navigation */}
        <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
            Direct Care Needs:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {quickServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onOpenAppointmentModal(srv.name)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold hover:shadow-xs transition-all whitespace-nowrap cursor-pointer ${srv.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{srv.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
