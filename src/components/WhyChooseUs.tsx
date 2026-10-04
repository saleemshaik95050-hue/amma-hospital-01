import React from 'react';
import { 
  UserCheck, 
  Users, 
  Building2, 
  AlertCircle, 
  Sparkles, 
  Crosshair, 
  Sparkle, 
  HeartHandshake,
  Check
} from 'lucide-react';
import { WHY_CHOOSE_PILLARS } from '../data/hospitalData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#0054a6]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#16943c]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#0054a6]" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-[#16943c]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0054a6]" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-[#16943c]" />;
      case 'Sparkle':
        return <Sparkle className="w-5 h-5 text-[#0054a6]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#16943c]" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16943c]" />
            <span>PATIENT TRUST & CLINICAL COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-1 text-balance">
            Why Choose AMMA Hospital
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            We are dedicated to providing accessible, dependable healthcare in Kamareddy with compassionate bedside support and modern medical facilities.
          </p>
        </div>

        {/* 8 Pillars Grid with Blue & Green Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#16943c]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0054a6]/5 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xs"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#16943c]/30 transition-all shadow-xs">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0054a6] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono font-bold text-[#16943c]">
                <Check className="w-3.5 h-3.5 text-[#16943c]" />
                <span>CLINICAL STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
