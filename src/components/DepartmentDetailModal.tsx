import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, ArrowRight, Activity, ShieldCheck, HeartPulse, Stethoscope, Zap } from 'lucide-react';
import { Department, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  GeneralMedicineVisual, 
  CriticalCareVisual, 
  MaternityCareVisual, 
  OrthoCareVisual, 
  TraumaCareVisual,
  HospitalBuildingVisual 
} from './HospitalVisuals';

interface DepartmentDetailModalProps {
  department: Department | null;
  onClose: () => void;
  onBook: (departmentName: string) => void;
}

export const DepartmentDetailModal: React.FC<DepartmentDetailModalProps> = ({
  department,
  onClose,
  onBook,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && department) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [department, onClose]);

  if (!department) return null;

  const renderVisual = (id: string) => {
    switch (id) {
      case 'general-medicine':
        return <GeneralMedicineVisual className="w-full h-48" />;
      case 'critical-care':
        return <CriticalCareVisual className="w-full h-48" />;
      case 'maternity-care':
        return <MaternityCareVisual className="w-full h-48" />;
      case 'orthopaedic-care':
        return <OrthoCareVisual className="w-full h-48" />;
      case 'trauma-care':
        return <TraumaCareVisual className="w-full h-48" />;
      case 'emergency-care':
      default:
        return <HospitalBuildingVisual className="w-full h-48" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-blue-50/60 via-white to-green-50/40 px-6 sm:px-8 py-5 flex items-center justify-between shrink-0 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0054a6] flex items-center justify-center font-bold shadow-xs">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#16943c] font-mono font-bold">
                Speciality Division
              </span>
              <h3 className="text-xl font-black text-slate-900 leading-tight">
                {department.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Department Themed Image Visual */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
            {renderVisual(department.id)}
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#0054a6] font-mono font-bold mb-2">
              Clinical Scope & Overview
            </h4>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {department.fullDescription}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <h4 className="text-xs uppercase tracking-wider text-slate-900 font-mono font-bold mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16943c]" />
              <span>Key Clinical Capabilities & Inclusions:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {department.keyServices.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#16943c] shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Availability Note */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span className="font-mono text-slate-500">
              Department Location: Ground & 1st Floor, Siricilla Road Wing
            </span>
            <span className="font-mono font-bold text-[#0054a6]">AMMA HOSPITAL</span>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
            className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-[#0054a6]"
          >
            <Phone className="w-4 h-4 text-[#16943c]" />
            <span>Direct Desk: {HOSPITAL_INFO.contacts.emergency}</span>
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(department.name);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0054a6] to-[#004182] hover:from-[#004182] hover:to-[#16943c] text-white text-xs font-bold shadow-md shadow-[#0054a6]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book For This Department</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
