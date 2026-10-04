import React from 'react';
import { MapPin, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { HospitalBuildingVisual } from './HospitalVisuals';
import { AmmaLogo } from './AmmaLogo';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Representation & Trust Markers */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xl overflow-hidden">
              {/* Brand Logo Presentation Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-50/40 via-white to-green-50/30 border border-slate-100 flex flex-col items-center justify-center mb-6 shadow-xs">
                <AmmaLogo variant="full" showTagline={true} />
              </div>

              {/* Image Frame */}
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-slate-100 mb-6">
                <HospitalBuildingVisual className="w-full h-full" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-blue-100 text-[#0054a6] text-[11px] font-mono font-bold flex items-center gap-2 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#16943c]" />
                  <span>Siricilla Road, Kamareddy</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 leading-tight">
                AMMA HOSPITAL
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#0054a6] font-mono font-bold mt-1">
                Siricilla Road · Kamareddy, Telangana
              </p>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Established to bring comprehensive and dependable healthcare under one roof for the residents of Kamareddy and neighboring rural and town communities.
              </p>

              {/* Key Pillars */}
              <div className="mt-5 space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#16943c] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    General & Critical Care with dedicated vital monitoring
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#16943c] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Maternity care for expecting mothers and newborns
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#16943c] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Orthopaedic & emergency trauma management
                  </span>
                </div>
              </div>

              {/* Address card */}
              <div className="mt-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0054a6] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600">
                  <p className="font-bold text-slate-900">Hospital Location:</p>
                  <p className="mt-0.5 text-slate-600 font-medium">{HOSPITAL_INFO.address.full}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#16943c]" />
                <span>DEDICATED HEALTHCARE IN KAMAREDDY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-1 text-balance">
                About <span className="text-gradient-brand">AMMA Hospital</span>
              </h2>
              <p className="text-sm font-bold text-[#16943c] mt-1 tracking-wide font-sans">
                Better Health • Brighter Tomorrow
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              AMMA Hospital provides comprehensive healthcare services in Kamareddy across general care, critical care, maternity, orthopaedics, and trauma care. We are committed to making quality medical treatment readily accessible to local individuals and families.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Located beside Shishuraksha Hospital near Dharmashala on Siricilla Road, our hospital was designed to cater to both routine medical needs and acute emergency situations. Whether a patient requires general diagnosis for sudden illness, intensive critical-care vital support, maternal guidance for childbirth, or rapid orthopaedic treatment for accidental injuries, our team is dedicated to providing timely, compassionate care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#16943c]/50 transition-colors shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#0054a6]" />
                  <span>Patient Dignity & Care</span>
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Every patient receives respectful, courteous attention with clear explanations from our clinical staff throughout diagnosis and treatment.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#16943c]/50 transition-colors shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#16943c]" />
                  <span>Clean & Hygienic Facility</span>
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We maintain sanitized wards, consultation rooms, and patient recovery areas to foster a healthy, comfortable healing environment.
                </p>
              </div>
            </div>

            {/* Quick Link to Photo Tour */}
            <div className="pt-2">
              <a
                href="#gallery"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50 hover:from-blue-100 hover:to-green-100 border border-blue-200/80 text-[#0054a6] hover:text-[#004182] font-bold text-xs sm:text-sm transition-all shadow-xs group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#16943c] animate-pulse" />
                <span>Take Visual Tour of 12 Hospital Facilities (ICU, OT, Maternity, Wards)</span>
                <span className="text-[#16943c] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
