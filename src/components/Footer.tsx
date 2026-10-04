import React from 'react';
import { Phone, MapPin, Navigation, Clock, ShieldCheck, Heart } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { AmmaLogo } from './AmmaLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 lg:pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info with White Card for Logo Clarity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block p-2.5 rounded-2xl bg-white shadow-md">
              <AmmaLogo variant="horizontal" size="md" showTagline={true} />
            </div>

            <p className="text-xs uppercase tracking-widest text-[#22a844] font-mono font-bold mt-2">
              GENERAL & CRITICAL CARE | MATERNITY | ORTHO & TRAUMA CARE CENTRE
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Serving the community of Kamareddy and surrounding areas with dedicated general healthcare, intensive critical care, maternal and neonatal services, and comprehensive orthopaedic and emergency trauma management.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 font-mono">
              <p>Beside Shishuraksha Hospital · Near Dharmashala · Siricilla Road · Kamareddy (Dist), Telangana</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Medical Specialities
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  General Medicine
                </a>
              </li>
              <li>
                <a href="#critical-care" className="hover:text-blue-400 transition-colors">
                  Critical Care & ICU
                </a>
              </li>
              <li>
                <a href="#maternity" className="hover:text-[#22a844] transition-colors">
                  Maternity & Mother-Baby Care
                </a>
              </li>
              <li>
                <a href="#orthopaedics-trauma" className="hover:text-blue-400 transition-colors">
                  Orthopaedic & Joint Care
                </a>
              </li>
              <li>
                <a href="#orthopaedics-trauma" className="hover:text-[#22a844] transition-colors">
                  Trauma & Emergency Care
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#22a844] font-semibold hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22a844]" />
                  <span>Hospital Photo Tour (12 Units)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              24/7 Hospital Helplines
            </h4>

            <div className="space-y-3">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#16943c] transition-all text-slate-200 group shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#16943c] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#22a844] font-mono font-bold block">
                    Emergency & Mobile
                  </span>
                  <span className="text-sm font-black text-white group-hover:text-[#22a844] font-mono">
                    {HOSPITAL_INFO.contacts.emergency}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.contacts.landline}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#0054a6] transition-all text-slate-200 group shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold block">
                    Hospital Landline
                  </span>
                  <span className="text-sm font-black text-white group-hover:text-blue-400 font-mono">
                    {HOSPITAL_INFO.contacts.landline}
                  </span>
                </div>
              </a>

              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors pt-1 font-bold text-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Tagline & Local Search Keywords */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-500 leading-relaxed font-mono">
          <p className="font-bold text-slate-300 mb-1">LOCAL HEALTHCARE DIRECTORY KAMAREDDY:</p>
          <p>
            AMMA Hospital Kamareddy · General Hospital Kamareddy · Critical Care Kamareddy · Maternity Hospital Kamareddy · Orthopaedic Hospital Kamareddy · Trauma Care Kamareddy · Multi-Speciality Hospital Siricilla Road Telangana.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>© {currentYear} AMMA Hospital, Kamareddy. All rights reserved.</p>
          <p className="text-slate-400">
            Beside Shishuraksha Hospital, Near Dharmashala, Siricilla Road, Kamareddy (Dist), Telangana
          </p>
        </div>
      </div>
    </footer>
  );
};
