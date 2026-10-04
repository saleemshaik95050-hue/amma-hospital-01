import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Clock, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { AmmaLogo } from './AmmaLogo';

interface NavbarProps {
  onOpenAppointmentModal: (department?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Maternity', href: '#maternity' },
    { label: 'Critical Care', href: '#critical-care' },
    { label: 'Ortho & Trauma', href: '#orthopaedics-trauma' },
    { label: 'Facilities Tour', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    let tabTarget = 'overview';
    if (href.includes('gallery') || href.includes('tour')) tabTarget = 'facilities';
    else if (href.includes('services') || href.includes('ortho')) tabTarget = 'specialties';
    else if (href.includes('maternity') || href.includes('critical')) tabTarget = 'maternity-icu';
    else if (href.includes('contact') || href.includes('about')) tabTarget = 'contact';
    
    window.dispatchEvent(new CustomEvent('amma_switch_tab', { detail: tabTarget }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar for emergency contact & location indicator */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#16943c]" />
              <span>Beside Shishuraksha Hospital · Siricilla Road, Kamareddy</span>
            </span>
            <span className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#16943c] animate-beacon" />
              <span>24/7 Emergency, Trauma & ICU Care</span>
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
              className="flex items-center gap-1.5 text-[#22a844] hover:text-white transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#22a844]" />
              <span>Emergency: {HOSPITAL_INFO.contacts.emergency}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${HOSPITAL_INFO.contacts.landline}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Tel: {HOSPITAL_INFO.contacts.landline}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-md border-b border-slate-100 py-2.5'
            : 'bg-white/95 backdrop-blur-lg border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Official Logo */}
            <a
              href="#home"
              className="group flex items-center focus:outline-none"
              aria-label="AMMA Hospital Home"
            >
              <AmmaLogo variant="horizontal" size="md" showTagline={true} />
            </a>

            {/* Zone 2: Navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-[#0054a6] transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#16943c] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-bold text-[#16943c] bg-green-50/80 border border-green-200 rounded-xl hover:bg-green-100 transition-colors whitespace-nowrap shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#16943c]" />
                <span>{HOSPITAL_INFO.contacts.emergency}</span>
              </a>
              <button
                onClick={() => onOpenAppointmentModal()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#0054a6] to-[#004182] hover:from-[#004182] hover:to-[#16943c] rounded-xl shadow-md shadow-[#0054a6]/25 transition-all whitespace-nowrap cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                aria-label="Call Hospital"
                className="w-9 h-9 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-[#16943c] sm:hidden"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0054a6] rounded-lg focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl transition-all">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-blue-50 hover:text-[#0054a6] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointmentModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#0054a6] to-[#16943c] rounded-xl shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </button>
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#16943c] bg-green-50 rounded-xl hover:bg-green-100 border border-green-200"
                >
                  <Phone className="w-4 h-4 text-[#16943c]" />
                  <span>Call Emergency: {HOSPITAL_INFO.contacts.emergency}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
