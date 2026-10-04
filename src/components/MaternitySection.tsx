import React from 'react';
import { Heart, Calendar, Phone, CheckCircle, Sparkles } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { MaternityCareVisual } from './HospitalVisuals';
import { AmmaLogo } from './AmmaLogo';

interface MaternitySectionProps {
  onOpenAppointmentModal: (department?: string) => void;
}

export const MaternitySection: React.FC<MaternitySectionProps> = ({ onOpenAppointmentModal }) => {
  const maternityFeatures = [
    {
      title: 'Comfortable Maternity Suites',
      desc: 'Clean, peaceful, and family-friendly recovery spaces designed for the privacy and calm of mother and infant.'
    },
    {
      title: 'Prenatal & Postnatal Care',
      desc: 'Regular antenatal consultations, nutritional guidance, vital monitoring, and reassuring follow-up after birth.'
    },
    {
      title: 'Safe Delivery Environment',
      desc: 'Experienced medical oversight and prompt readiness for both normal labor and caesarean deliveries.'
    },
    {
      title: 'Newborn Support & Monitoring',
      desc: 'Immediate newborn health assessment, vital monitoring, lactation support, and gentle pediatric screening.'
    }
  ];

  return (
    <section id="maternity" className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden border-b border-slate-100">
      {/* Soft blue and green radial atmosphere */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-brand-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composition with Mother & Baby Theme */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xl shadow-blue-500/5">
              {/* Image Frame */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <MaternityCareVisual className="w-full h-full" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-blue-100 text-[#0054a6] text-[11px] font-mono font-bold flex items-center gap-2 shadow-xs">
                  <Heart className="w-3.5 h-3.5 text-[#0054a6] fill-current" />
                  <span>MATERNITY & NEWBORN WING</span>
                </div>
              </div>

              {/* Quick direct contact prompt */}
              <div className="mt-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0054a6] block">
                    Maternity Inquiries
                  </span>
                  <p className="text-sm font-bold font-mono text-slate-900 mt-0.5">
                    Call: {HOSPITAL_INFO.contacts.emergency}
                  </p>
                </div>
                <button
                  onClick={() => onOpenAppointmentModal('Maternity Care')}
                  className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#0054a6] to-[#16943c] hover:opacity-95 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Consult Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#16943c]" />
                <span>MATERNITY & WOMEN’S HEALTH · KAMAREDDY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-1 text-balance">
                Care for <span className="text-gradient-brand">Mother & Baby</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Welcoming a new life is a sacred family journey. At AMMA Hospital in Kamareddy, our dedicated maternity wing provides a reassuring, comfortable, and safe atmosphere where mothers receive empathetic medical attention and newborns receive gentle clinical care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {maternityFeatures.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#16943c]/50 transition-colors shadow-xs">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#16943c] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAppointmentModal('Maternity Care')}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-[#0054a6] via-[#00488f] to-[#003d7a] hover:from-[#004182] hover:to-[#16943c] rounded-xl shadow-lg shadow-[#0054a6]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Maternity Consultation</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="inline-flex items-center gap-2 px-5 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-green-50/60 border border-green-200 rounded-xl transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#16943c]" />
                <span>Call Maternity Desk: {HOSPITAL_INFO.contacts.emergency}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
