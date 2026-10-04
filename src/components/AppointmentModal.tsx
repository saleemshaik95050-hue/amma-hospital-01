import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Clock, CheckCircle2, AlertCircle, User, Stethoscope } from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../data/hospitalData';
import { AmmaLogo } from './AmmaLogo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultDepartment = 'General Medicine',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: defaultDepartment,
    date: '',
    timeSlot: 'Morning (09:00 AM - 01:00 PM)',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (defaultDepartment) {
      setFormData((prev) => ({ ...prev, department: defaultDepartment }));
    }
  }, [defaultDepartment]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Patient name is required.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.date) {
      errs.date = 'Please select a preferred consultation date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate readable booking reference
    const ref = `AMMA-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      department: defaultDepartment || 'General Medicine',
      date: '',
      timeSlot: 'Morning (09:00 AM - 01:00 PM)',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-50/60 via-white to-green-50/40 px-6 py-4 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            <AmmaLogo variant="icon" size="sm" />
            <div>
              <h3 className="font-black text-base text-slate-900 leading-tight">Book an Appointment</h3>
              <p className="text-[11px] text-[#0054a6] font-mono font-bold">AMMA Hospital · Better Health • Brighter Tomorrow</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-50 text-[#16943c] border border-green-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Appointment Request Received</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your consultation request for the{' '}
                <strong className="text-[#0054a6]">{formData.department}</strong> unit has been submitted.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-xs mx-auto text-left text-xs space-y-1.5 font-mono shadow-xs">
                <p className="flex justify-between">
                  <span className="text-slate-500">Booking Ref:</span>
                  <span className="font-bold text-[#0054a6]">{bookingRef}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="font-bold text-slate-800">{formData.date}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-slate-500">Slot:</span>
                  <span className="font-bold text-slate-800">{formData.timeSlot.split(' ')[0]}</span>
                </p>
              </div>

              <p className="text-xs text-slate-500">
                Our reception desk will confirm your consultation time at <strong className="text-slate-800">{formData.phone}</strong>.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-[#0054a6] text-white font-bold text-xs shadow-md shadow-[#0054a6]/20 cursor-pointer"
                >
                  Done
                </button>
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                  className="px-5 py-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-[#16943c] border border-green-200 font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Hospital: {HOSPITAL_INFO.contacts.emergency}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Patient Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Full Name <span className="text-[#0054a6]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4 text-[#0054a6]" />
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter patient's full name"
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-500/20'
                        : 'border-slate-200 focus:border-[#0054a6] focus:ring-[#0054a6]/20'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone & Department Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-[#0054a6]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4 text-[#16943c]" />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      maxLength={14}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-500/20'
                          : 'border-slate-200 focus:border-[#0054a6] focus:ring-[#0054a6]/20'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Department Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Department
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Stethoscope className="w-4 h-4 text-[#0054a6]" />
                    </div>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0054a6] focus:ring-2 focus:ring-[#0054a6]/20 transition-all cursor-pointer"
                    >
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept.id} value={dept.name} className="bg-white text-slate-800">
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-[#0054a6]">*</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.date
                        ? 'border-red-400 focus:ring-red-500/20'
                        : 'border-slate-200 focus:border-[#0054a6] focus:ring-[#0054a6]/20'
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4 text-[#0054a6]" />
                    </div>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0054a6] focus:ring-2 focus:ring-[#0054a6]/20 transition-all cursor-pointer"
                    >
                      <option value="Morning (09:00 AM - 01:00 PM)" className="bg-white text-slate-800">
                        Morning (09:00 AM - 01:00 PM)
                      </option>
                      <option value="Afternoon (01:00 PM - 05:00 PM)" className="bg-white text-slate-800">
                        Afternoon (01:00 PM - 05:00 PM)
                      </option>
                      <option value="Evening (05:00 PM - 08:30 PM)" className="bg-white text-slate-800">
                        Evening (05:00 PM - 08:30 PM)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Symptoms or Reason for Visit <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Briefly state symptoms, prior treatments, or specific concerns..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:border-[#0054a6] focus:ring-2 focus:ring-[#0054a6]/20 transition-all"
                />
              </div>

              {/* Urgent Note */}
              <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-xs text-green-900 flex items-start gap-2 shadow-xs">
                <AlertCircle className="w-4 h-4 text-[#16943c] shrink-0 mt-0.5" />
                <span>
                  For urgent critical, trauma, or active labor emergencies, do not wait for an online appointment. Call{' '}
                  <strong className="text-[#16943c] underline">9542654666</strong> or proceed directly to AMMA Hospital on Siricilla Road.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0054a6] via-[#00488f] to-[#16943c] hover:opacity-95 text-white font-bold text-xs shadow-md shadow-[#0054a6]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
