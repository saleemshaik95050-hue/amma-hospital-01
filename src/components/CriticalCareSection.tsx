import React from 'react';
import { Activity, Phone, Check } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { CriticalCareVisual } from './HospitalVisuals';

interface CriticalCareSectionProps {
  onOpenAppointmentModal: (department?: string) => void;
}

export const CriticalCareSection: React.FC<CriticalCareSectionProps> = ({ onOpenAppointmentModal }) => {
  const icuHighlights = [
    {
      label: '24/7 Continuous Monitoring',
      detail: 'High-precision vital parameter tracking ensuring uninterrupted clinical observation.'
    },
    {
      label: 'High-Dependency Bed Units',
      detail: 'Equipped critical-care beds designed for patients requiring intensive clinical attention.'
    },
    {
      label: 'Acute Stabilization Protocol',
      detail: 'Structured medical interventions for respiratory distress, cardiac anomalies, and acute crisis.'
    },
    {
      label: 'Dedicated Critical Care Nursing',
      detail: 'Experienced bedside nursing staff providing continuous patient observation and care.'
    }
  ];

  return (
    <section id="critical-care" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      {/* Glow rings & medical grid */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none animate-brand-glow" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual ICU Monitor Panel Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xl relative overflow-hidden">
              {/* Image Frame */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <CriticalCareVisual className="w-full h-full" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-blue-100 text-[#0054a6] text-[11px] font-mono font-bold flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#16943c] animate-pulse" />
                  <span>24/7 ICU TELEMETRY STREAM</span>
                </div>
              </div>

              {/* Vitals Summary Rows */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-sans font-bold">Heart Rhythm</p>
                  <p className="text-sm font-bold text-[#0054a6] mt-0.5">Continuous ECG</p>
                </div>
                <div className="p-3 rounded-2xl bg-green-50/60 border border-green-100">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-sans font-bold">Pulse & Oxygen</p>
                  <p className="text-sm font-bold text-[#16943c] mt-0.5">SpO2 Monitored</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
              <Activity className="w-3.5 h-3.5 text-[#16943c]" />
              <span>INTENSIVE CARE UNIT (ICU) · KAMAREDDY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance">
              Advanced <span className="text-gradient-brand">Critical Care</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              When every second matters, our Critical Care Unit provides steady, round-the-clock medical attention. AMMA Hospital’s intensive care setting combines continuous electronic vital monitoring with prompt clinical supervision to support patients in critical health conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {icuHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#16943c]/50 transition-colors shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#16943c] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.label}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-black text-white bg-gradient-to-r from-[#0054a6] via-[#00488f] to-[#003d7a] hover:from-[#004182] hover:to-[#16943c] rounded-xl shadow-lg shadow-[#0054a6]/20 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Critical Care Desk: {HOSPITAL_INFO.contacts.emergency}</span>
              </a>

              <button
                onClick={() => onOpenAppointmentModal('Critical Care')}
                className="inline-flex items-center gap-2 px-5 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>Inquire About ICU / Admissions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
