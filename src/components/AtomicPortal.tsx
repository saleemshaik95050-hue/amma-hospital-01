import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Upload, 
  Phone, 
  Calendar, 
  Navigation, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Heart, 
  HeartPulse, 
  Stethoscope, 
  Building2, 
  MapPin, 
  Clock, 
  Sparkles, 
  Maximize2,
  Send,
  User,
  AlertCircle
} from 'lucide-react';
import { 
  HOSPITAL_INFO, 
  DEPARTMENTS, 
  HOSPITAL_GALLERY_IMAGES, 
  GalleryItem,
  Department
} from '../data/hospitalData';
import { GalleryVisual } from './GalleryVisuals';
import { AmmaLogo } from './AmmaLogo';
import { 
  HospitalBuildingVisual, 
  MaternityCareVisual, 
  OrthoCareVisual, 
  CriticalCareVisual 
} from './HospitalVisuals';

const STORAGE_KEY = 'amma_hospital_custom_photos_v1';

interface AtomicPortalProps {
  onOpenAppointmentModal: (deptName?: string) => void;
  onSelectDepartment: (dept: Department) => void;
  onBackgroundSlideChange?: (index: number) => void;
}

export const AtomicPortal: React.FC<AtomicPortalProps> = ({
  onOpenAppointmentModal,
  onSelectDepartment,
  onBackgroundSlideChange
}) => {
  // Main Atomic Tabs
  const [activeTab, setActiveTab] = useState<'overview' | 'facilities' | 'specialties' | 'maternity-icu' | 'contact'>('overview');

  // Facilities Slideshow State
  const [gallerySlide, setGallerySlide] = useState(0);
  const [galleryAutoPlay, setGalleryAutoPlay] = useState(true);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [selectedModalPhoto, setSelectedModalPhoto] = useState<GalleryItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Specialties Slideshow State
  const [specialtySlide, setSpecialtySlide] = useState(0);
  const [specialtyAutoPlay, setSpecialtyAutoPlay] = useState(false);

  // Load custom photos on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCustomPhotos(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }

    const handleSwitchTab = (e: any) => {
      if (e.detail) {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener('amma_switch_tab', handleSwitchTab);
    return () => window.removeEventListener('amma_switch_tab', handleSwitchTab);
  }, []);

  // Sync background slideshow when gallery slide changes
  useEffect(() => {
    onBackgroundSlideChange?.(gallerySlide);
  }, [gallerySlide, onBackgroundSlideChange]);

  // Gallery Auto-Slide Timer
  useEffect(() => {
    if (!galleryAutoPlay || activeTab !== 'facilities') return;
    const timer = setInterval(() => {
      setGallerySlide((prev) => (prev + 1) % HOSPITAL_GALLERY_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [galleryAutoPlay, activeTab]);

  // Handle Photo Upload from Device
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const currentItem = HOSPITAL_GALLERY_IMAGES[gallerySlide];
    const reader = new FileReader();
    reader.onload = (ev) => {
      const res = ev.target?.result as string;
      if (res) {
        const updated = { ...customPhotos, [currentItem.id]: res };
        setCustomPhotos(updated);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (err) {
          console.warn('Storage error', err);
        }
      }
    };
    reader.readAsDataURL(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const currentGalleryItem = HOSPITAL_GALLERY_IMAGES[gallerySlide];
  const customPhotoUrl = customPhotos[currentGalleryItem.id];

  const currentSpecialty = DEPARTMENTS[specialtySlide];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Hidden file input for uploading real camera photos */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Activative Atomic Top Navigation Pills (Low-Scroll Hub) */}
      <div className="bg-white/90 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-blue-200/80 shadow-md mb-5 sm:mb-6">
        <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none">
          {[
            { id: 'overview', label: 'Overview & Urgent Care', icon: Sparkles, badge: 'Home' },
            { id: 'facilities', label: 'Facilities Slideshow (12)', icon: Camera, badge: '12 Photos' },
            { id: 'specialties', label: 'Medical Specialties', icon: Stethoscope, badge: '4 Wings' },
            { id: 'maternity-icu', label: 'Maternity & ICU', icon: HeartPulse, badge: '24/7' },
            { id: 'contact', label: 'Location & Booking', icon: MapPin, badge: 'Kamareddy' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[130px] sm:min-w-[170px] py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer relative ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0054a6] to-[#004182] text-white shadow-md shadow-[#0054a6]/25 transform scale-[1.02]'
                    : 'text-slate-700 hover:text-[#0054a6] hover:bg-blue-50/60'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-green-300' : 'text-[#0054a6]'}`} />
                <span className="truncate">{tab.label}</span>
                {isActive && (
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#16943c] animate-beacon ml-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: OVERVIEW & URGENT CARE (Compact, Low-Scroll Hero) */}
      {activeTab === 'overview' && (
        <div className="space-y-5 animate-fade-in">
          {/* Main Hero Showcase Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-8 border border-blue-200 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Hospital Identity & Call to Action */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#16943c] animate-pulse" />
                  <span>KAMAREDDY · SIRICILLA ROAD</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  AMMA HOSPITAL <br />
                  <span className="bg-gradient-to-r from-[#0054a6] via-[#004182] to-[#16943c] bg-clip-text text-transparent">
                    Better Health · Brighter Tomorrow
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  24/7 General healthcare, high-dependency critical care ICU, compassionate maternity suites, and emergency orthopaedic trauma center.
                </p>

                {/* Big Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <a
                    href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Call 24/7: {HOSPITAL_INFO.contacts.emergency}</span>
                  </a>

                  <button
                    onClick={() => onOpenAppointmentModal()}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0054a6] to-[#004182] hover:to-[#16943c] text-white font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book Appointment</span>
                  </button>

                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm border border-slate-200 transition-all whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 text-[#0054a6]" />
                    <span>Maps Directions</span>
                  </a>
                </div>

                {/* Quick Trust Badges */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-blue-50/60 border border-blue-100">
                    <span className="block text-base sm:text-lg font-black text-[#0054a6]">24/7</span>
                    <span className="text-[11px] text-slate-600 font-medium">Emergency Care</span>
                  </div>
                  <div className="p-2 rounded-xl bg-green-50/60 border border-green-100">
                    <span className="block text-base sm:text-lg font-black text-[#16943c]">12+</span>
                    <span className="text-[11px] text-slate-600 font-medium">Equipped Units</span>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-50/60 border border-blue-100">
                    <span className="block text-base sm:text-lg font-black text-[#0054a6]">100%</span>
                    <span className="text-[11px] text-slate-600 font-medium">Sanitized Beds</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hospital Campus Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-16/10 group">
                  <HospitalBuildingVisual className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Floating Interactive Badge */}
                  <button
                    onClick={() => setActiveTab('facilities')}
                    className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-bold flex items-center justify-between shadow-lg hover:bg-white transition-all cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-[#0054a6]" />
                      <span>Take 12-Unit Hospital Photo Tour</span>
                    </span>
                    <span className="text-[#16943c] font-black">View →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick 4 Specialties Strip (Instant 1-Click Access) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {DEPARTMENTS.map((dept, idx) => (
              <div
                key={dept.id}
                onClick={() => {
                  setSpecialtySlide(idx);
                  setActiveTab('specialties');
                }}
                className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0054a6] transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 group-hover:bg-[#0054a6] text-[#0054a6] group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0054a6] transition-colors line-clamp-1">
                  {dept.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {dept.shortDescription}
                </p>
                <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#16943c]">
                  <span>Explore Wing</span>
                  <span>→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: FACILITIES SLIDESHOW (Atomic 12-Photo Carousel with Upload) */}
      {activeTab === 'facilities' && (
        <div className="space-y-4 animate-fade-in">
          {/* Main Atomic Slideshow Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-blue-200 shadow-xl overflow-hidden">
            {/* Slideshow Control Header */}
            <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#0054a6] text-white text-xs font-mono font-bold">
                  {currentGalleryItem.filename}
                </span>
                <span className="text-xs font-bold text-[#16943c] uppercase tracking-wider font-mono">
                  {currentGalleryItem.department}
                </span>
              </div>

              {/* Slideshow Actions: Prev, Play/Pause, Next, Upload */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGalleryAutoPlay(!galleryAutoPlay)}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {galleryAutoPlay ? <Pause className="w-3.5 h-3.5 text-[#0054a6]" /> : <Play className="w-3.5 h-3.5 text-[#16943c]" />}
                  <span className="hidden sm:inline">{galleryAutoPlay ? 'Pause' : 'Auto Play'}</span>
                </button>

                <button
                  onClick={() => setGallerySlide((prev) => (prev - 1 + HOSPITAL_GALLERY_IMAGES.length) % HOSPITAL_GALLERY_IMAGES.length)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="text-xs font-mono font-bold text-slate-600 px-1">
                  {gallerySlide + 1} / {HOSPITAL_GALLERY_IMAGES.length}
                </span>

                <button
                  onClick={() => setGallerySlide((prev) => (prev + 1) % HOSPITAL_GALLERY_IMAGES.length)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Upload Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="ml-2 px-3 py-1.5 rounded-lg bg-[#16943c] hover:bg-[#127a31] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  title="Upload real camera photo for this unit"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Upload Real Photo</span>
                </button>
              </div>
            </div>

            {/* Slideshow Progress Bar */}
            {galleryAutoPlay && (
              <div className="w-full bg-slate-100 h-1 overflow-hidden">
                <div 
                  key={gallerySlide}
                  className="bg-gradient-to-r from-[#0054a6] to-[#16943c] h-full animate-[progress_4.5s_linear]"
                  style={{ animationDuration: '4.5s' }}
                />
              </div>
            )}

            {/* Slideshow Main Content (Photo + Information) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-7 items-center">
              {/* Image Frame */}
              <div className="lg:col-span-7">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
                  {customPhotoUrl ? (
                    <img
                      src={customPhotoUrl}
                      alt={currentGalleryItem.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <GalleryVisual
                      photoId={currentGalleryItem.id}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md text-white text-xs font-mono font-bold">
                      {currentGalleryItem.filename}
                    </span>
                    {customPhotoUrl && (
                      <span className="px-2.5 py-1 rounded-md bg-[#16943c] text-white text-xs font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Uploaded</span>
                      </span>
                    )}
                  </div>

                  {/* Fullscreen zoom */}
                  <button
                    onClick={() => setSelectedModalPhoto(currentGalleryItem)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 hover:bg-white text-slate-800 shadow-md text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#0054a6]" />
                    <span className="hidden sm:inline">Enlarge</span>
                  </button>
                </div>
              </div>

              {/* Details & Specs */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#0054a6] uppercase tracking-wider block mb-1">
                    {currentGalleryItem.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {currentGalleryItem.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentGalleryItem.caption}
                  </p>
                </div>

                {/* Capabilities list */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16943c]" />
                    <span>Unit Capabilities:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {currentGalleryItem.features.map((feat, i) => (
                      <span key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16943c] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                  <h4 className="text-xs font-bold text-[#0054a6] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0054a6]" />
                    <span>Medical Equipment:</span>
                  </h4>
                  <p className="text-xs text-slate-700">
                    {currentGalleryItem.equipment.join(' · ')}
                  </p>
                </div>

                {/* Instant Action */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onOpenAppointmentModal(currentGalleryItem.department)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0054a6] to-[#004182] hover:to-[#16943c] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book for this Unit</span>
                  </button>
                  <a
                    href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                    className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip for Direct Navigation */}
            <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center gap-2 overflow-x-auto scrollbar-none">
              {HOSPITAL_GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setGallerySlide(idx)}
                  className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all relative cursor-pointer ${
                    gallerySlide === idx
                      ? 'border-[#0054a6] ring-2 ring-[#0054a6]/30 scale-105'
                      : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <GalleryVisual photoId={img.id} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-[8px] text-white font-mono text-center">
                    {img.filename.replace('.JPG', '')}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MEDICAL SPECIALTIES SLIDESHOW (Atomic Specialty Slider) */}
      {activeTab === 'specialties' && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-blue-200 shadow-xl overflow-hidden p-5 sm:p-7">
            {/* Header with Navigation Pills */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 flex-wrap gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#16943c] uppercase tracking-wider block">
                  Core Clinical Divisions
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  {currentSpecialty.name}
                </h3>
              </div>

              {/* Specialty Switcher Pills */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                {DEPARTMENTS.map((dept, idx) => (
                  <button
                    key={dept.id}
                    onClick={() => setSpecialtySlide(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      specialtySlide === idx
                        ? 'bg-[#0054a6] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Specialty Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {currentSpecialty.fullDescription}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0054a6] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16943c]" />
                    <span>Specialized Clinical Services:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentSpecialty.keyServices.map((service, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16943c] mt-1 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={() => onOpenAppointmentModal(currentSpecialty.name)}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#0054a6] to-[#004182] hover:to-[#16943c] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {currentSpecialty.name} Consultation</span>
                  </button>
                  <button
                    onClick={() => onSelectDepartment(currentSpecialty)}
                    className="px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <span>View Division Details</span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Graphic */}
              <div className="lg:col-span-5">
                <div className="aspect-16/11 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 flex items-center justify-center p-4">
                  {specialtySlide === 0 && <HospitalBuildingVisual className="w-full h-full" />}
                  {specialtySlide === 1 && <CriticalCareVisual className="w-full h-full" />}
                  {specialtySlide === 2 && <MaternityCareVisual className="w-full h-full" />}
                  {specialtySlide === 3 && <OrthoCareVisual className="w-full h-full" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MATERNITY & ICU WINGS (Side-by-Side Focused Showcase) */}
      {activeTab === 'maternity-icu' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
          {/* Maternity Wing */}
          <div className="bg-white/95 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-rose-200 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-mono font-bold border border-rose-200">
                <Heart className="w-3.5 h-3.5" />
                <span>MATERNITY & NEONATAL CENTER</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Safe Mother & Baby Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prenatal consultations, normal & caesarean deliveries, compassionate midwifery, and temperature-controlled radiant infant nursery.
              </p>

              <div className="aspect-16/9 rounded-2xl overflow-hidden border border-rose-100 shadow-sm my-3">
                <MaternityCareVisual className="w-full h-full" />
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                  <span>24/7 Delivery Suite & Labor Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                  <span>Radiant Baby Warmer & Pediatric Support</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-rose-100 flex items-center gap-2">
              <button
                onClick={() => onOpenAppointmentModal('Maternity Care')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all text-center cursor-pointer"
              >
                Book Maternity Consult
              </button>
              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="py-2.5 px-3 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 font-bold text-xs"
              >
                Labor Helpline
              </a>
            </div>
          </div>

          {/* Critical Care ICU Wing */}
          <div className="bg-white/95 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-blue-200 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0054a6] text-xs font-mono font-bold border border-blue-200">
                <Activity className="w-3.5 h-3.5" />
                <span>CRITICAL CARE & ICU WING</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                24/7 Intensive Care Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Multi-parameter cardiac telemetry (ECG, SpO2, BP), central medical gas pipelines, motorized ICU beds, and continuous high-dependency oversight.
              </p>

              <div className="aspect-16/9 rounded-2xl overflow-hidden border border-blue-100 shadow-sm my-3">
                <CriticalCareVisual className="w-full h-full" />
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16943c]" />
                  <span>Real-time Multi-Parameter ECG Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16943c]" />
                  <span>Central Medical Gas & Oxygen Supply</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-blue-100 flex items-center gap-2">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition-all text-center"
              >
                Call ICU Desk: {HOSPITAL_INFO.contacts.emergency}
              </a>
              <button
                onClick={() => onOpenAppointmentModal('Critical Care')}
                className="py-2.5 px-3 rounded-xl border border-blue-200 text-[#0054a6] hover:bg-blue-50 font-bold text-xs cursor-pointer"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: LOCATION & FAST BOOKING (Compact, Low-Scroll Contact) */}
      {activeTab === 'contact' && (
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-8 border border-blue-200 shadow-xl animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Location & Contact Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#16943c] text-xs font-mono font-bold border border-green-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>KAMAREDDY LOCATION & DIRECTIONS</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Visit AMMA Hospital
              </h3>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Hospital Address:</span>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Beside Shishuraksha Hospital, Near Dharmashala, Siricilla Road, Kamareddy (Dist), Telangana – 503111
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                    className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2.5 hover:bg-red-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    <div>
                      <span className="text-[10px] font-bold block uppercase">Emergency Phone</span>
                      <span className="text-sm font-black">{HOSPITAL_INFO.contacts.emergency}</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/91${HOSPITAL_INFO.contacts.emergency}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-center gap-2.5 hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <div>
                      <span className="text-[10px] font-bold block uppercase">WhatsApp Direct</span>
                      <span className="text-sm font-black">9542654666</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0054a6] hover:bg-[#004182] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  <span>Open in Google Maps Navigation</span>
                </a>
              </div>
            </div>

            {/* Quick 30-Second Consultation Card */}
            <div className="lg:col-span-6 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0054a6]" />
                <span>Fast Appointment Request</span>
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Click below to book your doctor consultation in under 30 seconds.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#16943c]" />
                  <span>OPD Timing: Mon - Sat (9:00 AM - 8:00 PM) · 24/7 Emergency</span>
                </div>

                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0054a6] via-[#004182] to-[#16943c] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Online Booking Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Enlarge */}
      {selectedModalPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedModalPhoto(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#0054a6] text-white text-xs font-mono font-bold">
                  {selectedModalPhoto.filename}
                </span>
                <span className="text-xs font-bold text-slate-700">
                  {selectedModalPhoto.department}
                </span>
              </div>
              <button
                onClick={() => setSelectedModalPhoto(null)}
                className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600"
              >
                ✕
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                {customPhotos[selectedModalPhoto.id] ? (
                  <img
                    src={customPhotos[selectedModalPhoto.id]}
                    alt={selectedModalPhoto.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <GalleryVisual photoId={selectedModalPhoto.id} className="w-full h-full object-cover" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedModalPhoto.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{selectedModalPhoto.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
