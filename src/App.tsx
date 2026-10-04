/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { QuickAccessBar } from './components/QuickAccessBar';
import { BackgroundSlideshow } from './components/BackgroundSlideshow';
import { AtomicPortal } from './components/AtomicPortal';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';
import { DepartmentDetailModal } from './components/DepartmentDetailModal';
import { Department } from './data/hospitalData';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentDepartment, setAppointmentDepartment] = useState('General Medicine');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [bgSlideIndex, setBgSlideIndex] = useState(0);

  const handleOpenAppointmentModal = (deptName?: string) => {
    if (deptName) {
      setAppointmentDepartment(deptName);
    }
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setAppointmentModalOpen(false);
  };

  const handleSelectDepartment = (dept: Department) => {
    setSelectedDepartment(dept);
  };

  const handleCloseDepartmentModal = () => {
    setSelectedDepartment(null);
  };

  return (
    <div className="min-h-screen flex flex-col amma-theme-bg text-slate-800 font-sans selection:bg-[#0054a6] selection:text-white relative overflow-x-hidden">
      {/* Top Brand Accent Beam (Royal Blue to Leaf Green) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0054a6] via-[#16943c] to-[#0054a6] z-50 pointer-events-none opacity-90 shadow-[0_0_12px_rgba(0,84,166,0.4)]" />

      {/* Dynamic Background Slideshow (Uploaded & Hospital Facility Photos in Background) */}
      <BackgroundSlideshow currentSlideIndex={bgSlideIndex} />

      {/* Sticky Top Navigation */}
      <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Instant Emergency, WhatsApp & Quick Care Action Bar */}
      <QuickAccessBar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Content: Low-Scroll Atomic Slideshow Portal */}
      <main className="flex-1 relative z-10">
        <AtomicPortal
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onSelectDepartment={handleSelectDepartment}
          onBackgroundSlideChange={setBgSlideIndex}
        />

        {/* Compact Emergency Callout Banner */}
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-6">
          <EmergencyBanner />
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Mobile Sticky Action Bar */}
      <MobileBottomBar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        defaultDepartment={appointmentDepartment}
      />

      {/* Department Detail Modal (Learn More) */}
      <DepartmentDetailModal
        department={selectedDepartment}
        onClose={handleCloseDepartmentModal}
        onBook={handleOpenAppointmentModal}
      />
    </div>
  );
}
