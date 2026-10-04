import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  Heart, 
  Shield, 
  Zap, 
  PlusCircle, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { DEPARTMENTS, Department } from '../data/hospitalData';
import { 
  GeneralMedicineVisual, 
  CriticalCareVisual, 
  MaternityCareVisual, 
  OrthoCareVisual, 
  TraumaCareVisual,
  HospitalBuildingVisual 
} from './HospitalVisuals';

interface DepartmentsProps {
  onSelectDepartment: (dept: Department) => void;
  onBookAppointment: (departmentName: string) => void;
}

export const Departments: React.FC<DepartmentsProps> = ({ 
  onSelectDepartment,
  onBookAppointment 
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-[#0054a6]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#16943c]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#0054a6]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#16943c]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#0054a6]" />;
      default:
        return <PlusCircle className="w-5 h-5 text-[#16943c]" />;
    }
  };

  const renderDepartmentVisual = (id: string) => {
    switch (id) {
      case 'general-medicine':
        return <GeneralMedicineVisual className="w-full h-44" />;
      case 'critical-care':
        return <CriticalCareVisual className="w-full h-44" />;
      case 'maternity-care':
        return <MaternityCareVisual className="w-full h-44" />;
      case 'orthopaedic-care':
        return <OrthoCareVisual className="w-full h-44" />;
      case 'trauma-care':
        return <TraumaCareVisual className="w-full h-44" />;
      case 'emergency-care':
      default:
        return <HospitalBuildingVisual className="w-full h-44" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-100">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-brand-glow" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16943c]" />
            <span>CLINICAL EXCELLENCE · KAMAREDDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-1 text-balance">
            Key Departments & Medical Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Delivering multidisciplinary healthcare at AMMA Hospital in Kamareddy, ensuring high standards of patient safety, clinical diagnosis, and caring support.
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-[#16943c]/60 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-[#0054a6]/10"
            >
              {/* Visual Image Header */}
              <div className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
                {renderDepartmentVisual(dept.id)}
                
                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-800">
                  {getIcon(dept.icon)}
                  <span>{dept.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0054a6] transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {dept.shortDescription}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {dept.keyServices.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16943c] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectDepartment(dept)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0054a6] hover:text-[#16943c] transition-colors group/btn cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onBookAppointment(dept.name)}
                    className="px-3.5 py-1.5 text-xs font-bold text-[#0054a6] bg-blue-50/70 hover:bg-[#0054a6] hover:text-white rounded-xl transition-all cursor-pointer border border-blue-200 hover:border-[#0054a6] shadow-xs"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
