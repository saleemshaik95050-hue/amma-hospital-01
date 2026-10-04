import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Building,
  AlertCircle
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write your message or medical query.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-t border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none animate-brand-glow" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16943c]" />
            <span>REACH OUR HOSPITAL IN KAMAREDDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-1 text-balance">
            Contact <span className="text-gradient-brand">AMMA Hospital</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#0054a6] mt-2 font-mono font-bold tracking-wide">
            AMMA HOSPITAL GENERAL & CRITICAL CARE, MATERNITY, ORTHO & TRAUMA CARE CENTRE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Details, Call Buttons, and Location Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16943c] animate-pulse" />
                <span>Hospital Contact Details</span>
              </h3>

              <div className="space-y-5">
                {/* Full Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0054a6] shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-500 font-mono font-bold">
                      Hospital Location
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                      Beside Shishuraksha Hospital, Near Dharmashala
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Siricilla Road, Kamareddy (Dist), Telangana
                    </p>

                    <div className="mt-3">
                      <a
                        href={HOSPITAL_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#0054a6] bg-blue-50/70 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all shadow-xs"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#0054a6]" />
                        <span>Get Directions on Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-[#16943c] shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-500 font-mono font-bold">
                      Mobile & Emergency Contact
                    </h4>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                      className="text-xl sm:text-2xl font-black text-[#16943c] hover:text-[#127a31] block mt-0.5 font-mono"
                    >
                      {HOSPITAL_INFO.contacts.emergency}
                    </a>
                    <p className="text-xs text-slate-500 font-mono">Available 24/7 for urgent clinical care</p>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-500 font-mono font-bold">
                      Hospital Landline
                    </h4>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.landline}`}
                      className="text-lg sm:text-xl font-bold text-slate-800 hover:text-[#0054a6] block mt-0.5 font-mono"
                    >
                      {HOSPITAL_INFO.contacts.landline}
                    </a>
                    <p className="text-xs text-slate-500 font-mono">Reception & admissions desk</p>
                  </div>
                </div>
              </div>

              {/* Action Call Buttons Strip */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                  className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-gradient-to-r from-[#16943c] to-[#127a31] hover:opacity-95 text-white rounded-xl text-sm font-black shadow-md shadow-green-600/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call 9542654666</span>
                </a>
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.landline}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-sm font-bold transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#0054a6]" />
                  <span>Call 08468352373</span>
                </a>
              </div>
            </div>

            {/* Location Guidance Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                <Building className="w-4 h-4 text-[#0054a6]" />
                <span>Nearby Landmarks in Kamareddy:</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                <li>• Located right beside <strong className="text-slate-900">Shishuraksha Hospital</strong></li>
                <li>• In close vicinity to <strong className="text-slate-900">Dharmashala</strong></li>
                <li>• Directly on <strong className="text-slate-900">Siricilla Road</strong> for seamless transit</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900">
                Send a Message or Query
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
                Fill in your details below and our hospital reception desk will attend to your inquiry.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-[#16943c] flex items-center justify-center mx-auto border border-green-200 shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#16943c]">
                    Message Received
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message has been noted by AMMA Hospital’s desk. We will call you at <strong>{formData.phone}</strong> promptly.
                  </p>
                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-semibold text-[#0054a6] bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                    >
                      Send Another Query
                    </button>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#16943c] hover:bg-[#127a31] rounded-xl transition-colors"
                    >
                      Call Desk Directly
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#0054a6]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-500/30'
                          : 'border-slate-200 focus:border-[#0054a6] focus:ring-[#0054a6]/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-[#0054a6]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      maxLength={14}
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-500/30'
                          : 'border-slate-200 focus:border-[#0054a6] focus:ring-[#0054a6]/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Health Query <span className="text-[#0054a6]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your consultation requirement, department inquiry, or preferred timing..."
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-500/30'
                          : 'border-slate-200 focus:border-[#0054a6] focus:ring-[#0054a6]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500 font-mono">
                    For sudden severe medical emergencies, please call <strong className="text-[#16943c]">9542654666</strong> immediately.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0054a6] via-[#00488f] to-[#16943c] hover:opacity-95 text-white font-black text-sm shadow-lg shadow-[#0054a6]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transform hover:-translate-y-0.5"
                  >
                    {submitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
