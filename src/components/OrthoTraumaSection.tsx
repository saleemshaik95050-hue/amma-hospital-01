import React from 'react';
import { ShieldCheck, AlertTriangle, Calendar, Phone } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { OrthoCareVisual } from './HospitalVisuals';

interface OrthoTraumaSectionProps {
  onOpenAppointmentModal: (department?: string) => void;
}

export const OrthoTraumaSection: React.FC<OrthoTraumaSectionProps> = ({ onOpenAppointmentModal }) => {
  const treatmentAreas = [
    {
      title: 'Fracture Management & Splinting',
      description: 'Accurate clinical diagnosis and emergency stabilization for acute bone fractures, dislocations, and cracks.'
    },
    {
      title: 'Joint & Arthritis Care',
      description: 'Careful diagnostic evaluation and conservative management plans for knee, hip, shoulder, and spinal joint pain.'
    },
    {
      title: 'Road & Accidental Trauma Care',
      description: 'Immediate trauma triage, wound care, hemorrhage control, and systematic clinical intervention for accident victims.'
    },
    {
      title: 'Musculoskeletal Rehabilitation',
      description: 'Guided post-injury recovery, limb mobilization guidance, and continuous follow-up to restore everyday mobility.'
    }
  ];

  return (
    <section id="orthopaedics-trauma" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      {/* Background medical ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-brand-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold tracking-widest uppercase shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16943c]" />
              <span>ORTHOPAEDIC & TRAUMA CENTRE · KAMAREDDY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance">
              Expert <span className="text-gradient-brand">Orthopaedic & Trauma</span> Care
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Accidental injuries and musculoskeletal problems require prompt assessment and systematic care. At AMMA Hospital on Siricilla Road, we deliver dedicated diagnosis and treatment for bone fractures, joint discomfort, and urgent physical trauma.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {treatmentAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#16943c]/50 transition-colors shadow-xs"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#16943c]" />
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAppointmentModal('Orthopaedic Care')}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-black text-white bg-gradient-to-r from-[#0054a6] via-[#00488f] to-[#003d7a] hover:from-[#004182] hover:to-[#16943c] rounded-xl shadow-lg shadow-[#0054a6]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Orthopaedic Appointment</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="inline-flex items-center gap-2 px-5 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-green-50/60 border border-green-200 rounded-xl transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#16943c]" />
                <span>Emergency Trauma: {HOSPITAL_INFO.contacts.emergency}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xl relative overflow-hidden">
              {/* Image Frame */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <OrthoCareVisual className="w-full h-full" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-blue-100 text-[#0054a6] text-[11px] font-mono font-bold flex items-center gap-2 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16943c]" />
                  <span>BONE & JOINT DIAGNOSTICS</span>
                </div>
              </div>

              {/* Trauma Priority Tag & Location Note */}
              <div className="mt-4 p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#0054a6] font-mono font-bold">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#16943c]" />
                  <span>IMMEDIATE ACCIDENT TRIAGE READY</span>
                </div>
                <span className="text-slate-500 font-mono">Siricilla Rd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
