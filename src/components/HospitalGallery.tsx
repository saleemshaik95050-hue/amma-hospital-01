import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  Maximize2, 
  Upload, 
  Trash2, 
  Image as ImageIcon,
  ShieldCheck,
  Building2,
  Stethoscope,
  Heart,
  Activity,
  Bed,
  Microscope,
  Ambulance,
  Users
} from 'lucide-react';
import { HOSPITAL_GALLERY_IMAGES, GalleryItem, HOSPITAL_INFO } from '../data/hospitalData';
import { GalleryVisual } from './GalleryVisuals';

interface HospitalGalleryProps {
  onOpenAppointmentModal: (deptName?: string) => void;
}

const STORAGE_KEY = 'amma_hospital_custom_photos_v1';

export const HospitalGallery: React.FC<HospitalGalleryProps> = ({ onOpenAppointmentModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);
  
  const bulkFileInputRef = useRef<HTMLInputElement>(null);
  const singleFileInputRef = useRef<HTMLInputElement>(null);
  const [targetPhotoIdForSingleUpload, setTargetPhotoIdForSingleUpload] = useState<string | null>(null);

  // Load custom photos from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCustomPhotos(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const savePhotos = (updated: Record<string, string>) => {
    setCustomPhotos(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage limit reached', e);
    }
  };

  const handleBulkFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newMap = { ...customPhotos };
    let matchedCount = 0;

    Array.from(files).forEach((file) => {
      const fileNameLower = file.name.toLowerCase();
      // Try to match by DSC number or name
      const matchedItem = HOSPITAL_GALLERY_IMAGES.find((item) => {
        const itemCode = item.id.toLowerCase(); // e.g. dsc00384
        const itemNumber = itemCode.replace('dsc00', '').replace('dsc0', '').replace('dsc', '');
        return fileNameLower.includes(itemCode) || fileNameLower.includes(itemNumber);
      });

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          if (matchedItem) {
            newMap[matchedItem.id] = result;
            matchedCount++;
          } else {
            // Assign to first empty slot or currently selected
            const firstEmpty = HOSPITAL_GALLERY_IMAGES.find((img) => !newMap[img.id]);
            if (firstEmpty) {
              newMap[firstEmpty.id] = result;
              matchedCount++;
            }
          }
          savePhotos({ ...newMap });
          setUploadSuccessMessage(`Successfully uploaded ${matchedCount} hospital photo(s)!`);
          setTimeout(() => setUploadSuccessMessage(null), 4000);
        }
      };
      reader.readAsDataURL(file);
    });

    if (bulkFileInputRef.current) {
      bulkFileInputRef.current.value = '';
    }
  };

  const handleSingleCardUploadClick = (photoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTargetPhotoIdForSingleUpload(photoId);
    singleFileInputRef.current?.click();
  };

  const handleSingleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !targetPhotoIdForSingleUpload) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        const updated = {
          ...customPhotos,
          [targetPhotoIdForSingleUpload]: result
        };
        savePhotos(updated);
        setUploadSuccessMessage(`Photo updated for ${targetPhotoIdForSingleUpload.toUpperCase()}!`);
        setTimeout(() => setUploadSuccessMessage(null), 3000);
      }
    };
    reader.readAsDataURL(file);

    if (singleFileInputRef.current) {
      singleFileInputRef.current.value = '';
    }
  };

  const handleRemovePhoto = (photoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...customPhotos };
    delete updated[photoId];
    savePhotos(updated);
  };

  const categories = [
    { id: 'all', label: 'All Photos (12)' },
    { id: 'exterior', label: 'Exterior & Campus' },
    { id: 'emergency', label: 'Casualty & Trauma' },
    { id: 'icu', label: 'Critical Care ICU' },
    { id: 'maternity', label: 'Maternity & Baby' },
    { id: 'ortho', label: 'Surgical & Ortho' },
    { id: 'diagnostics', label: 'Lab & Diagnostics' },
    { id: 'inpatient', label: 'Patient Rooms' },
  ];

  const filteredImages = activeCategory === 'all'
    ? HOSPITAL_GALLERY_IMAGES
    : HOSPITAL_GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = HOSPITAL_GALLERY_IMAGES.findIndex((img) => img.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % HOSPITAL_GALLERY_IMAGES.length;
    setSelectedPhoto(HOSPITAL_GALLERY_IMAGES[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = HOSPITAL_GALLERY_IMAGES.findIndex((img) => img.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + HOSPITAL_GALLERY_IMAGES.length) % HOSPITAL_GALLERY_IMAGES.length;
    setSelectedPhoto(HOSPITAL_GALLERY_IMAGES[prevIndex]);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'exterior': return <Building2 className="w-3.5 h-3.5 text-[#0054a6]" />;
      case 'emergency': return <Ambulance className="w-3.5 h-3.5 text-rose-600" />;
      case 'icu': return <Activity className="w-3.5 h-3.5 text-[#0054a6]" />;
      case 'maternity': return <Heart className="w-3.5 h-3.5 text-rose-500" />;
      case 'ortho': return <ShieldCheck className="w-3.5 h-3.5 text-[#16943c]" />;
      case 'diagnostics': return <Microscope className="w-3.5 h-3.5 text-[#0054a6]" />;
      case 'inpatient': return <Bed className="w-3.5 h-3.5 text-[#16943c]" />;
      case 'reception': return <Users className="w-3.5 h-3.5 text-[#0054a6]" />;
      default: return <Camera className="w-3.5 h-3.5 text-[#0054a6]" />;
    }
  };

  const uploadedCount = Object.keys(customPhotos).length;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Hidden file inputs for photo upload */}
      <input
        type="file"
        ref={bulkFileInputRef}
        onChange={handleBulkFilesSelected}
        multiple
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={singleFileInputRef}
        onChange={handleSingleFileSelected}
        accept="image/*"
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Simple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0054a6] text-xs font-mono font-bold tracking-wide mb-3 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-[#16943c]" />
            <span>HOSPITAL FACILITIES & REAL PHOTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See Inside <span className="bg-gradient-to-r from-[#0054a6] to-[#16943c] bg-clip-text text-transparent">AMMA Hospital</span>
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
            Clean, modern, and patient-friendly environment in Kamareddy. Browse photos of our building, ICU beds, maternity rooms, and doctor clinics.
          </p>

          {/* Simple Upload & Status Bar */}
          <div className="mt-6 p-4 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0054a6] flex items-center justify-center shrink-0">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {uploadedCount > 0 
                    ? `${uploadedCount} of 12 Real Hospital Photos Active` 
                    : 'View Facility Visuals or Upload Your Real Photos'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  Select your camera photos (DSC00344 to DSC00384) to display them directly here.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => bulkFileInputRef.current?.click()}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#0054a6] hover:bg-[#004182] text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Photos from Device</span>
              </button>
              {uploadedCount > 0 && (
                <button
                  onClick={() => savePhotos({})}
                  className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 text-xs transition-colors"
                  title="Reset to default visuals"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Success Banner */}
          {uploadSuccessMessage && (
            <div className="mt-3 p-3 rounded-xl bg-green-50 border border-green-200 text-[#16943c] text-xs font-bold flex items-center justify-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>{uploadSuccessMessage}</span>
            </div>
          )}
        </div>

        {/* Easy Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#0054a6] to-[#004182] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-[#0054a6]'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Simple & Clean Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => {
            const hasCustomPhoto = !!customPhotos[item.id];
            const photoUrl = customPhotos[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Image Frame */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  {hasCustomPhoto ? (
                    <img 
                      src={photoUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <GalleryVisual 
                      photoId={item.id} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider">
                      {item.filename}
                    </span>
                    {hasCustomPhoto && (
                      <span className="px-2 py-0.5 rounded-md bg-[#16943c] text-white text-[10px] font-bold shadow-xs flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>Uploaded</span>
                      </span>
                    )}
                  </div>

                  {/* Quick Card Upload Button & Enlarge Icon */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-90">
                    <button
                      onClick={(e) => handleSingleCardUploadClick(item.id, e)}
                      className="p-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-700 hover:text-[#0054a6] shadow-sm transition-colors text-xs font-semibold flex items-center gap-1"
                      title="Upload custom photo for this room"
                    >
                      <Upload className="w-3.5 h-3.5" />
                    </button>
                    <span className="p-1.5 rounded-lg bg-white/90 text-slate-700 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom category tag */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0054a6] border border-blue-100 text-[10px] font-bold flex items-center gap-1 shadow-xs">
                      {getCategoryIcon(item.category)}
                      <span>{item.categoryLabel}</span>
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#16943c] uppercase tracking-wider mb-1">
                      {item.department}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0054a6] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>

                    {/* Features list */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.features.slice(0, 2).map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#16943c]" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#0054a6] font-bold flex items-center gap-1">
                      <span>Click to View Full Size</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      Kamareddy
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Easy Action Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Need assistance or want to visit AMMA Hospital?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Siricilla Road, Beside Shishuraksha Hospital, Kamareddy. 24/7 doctors and beds available.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call: {HOSPITAL_INFO.contacts.emergency}</span>
            </a>
            <button
              onClick={() => onOpenAppointmentModal()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0054a6] hover:bg-[#004182] text-white font-bold text-xs sm:text-sm shadow-xs transition-all whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md bg-[#0054a6] text-white text-xs font-mono font-bold">
                  {selectedPhoto.filename}
                </span>
                <span className="text-xs font-bold text-slate-700">
                  {selectedPhoto.department}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevPhoto}
                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-5 flex-1">
              <div className="relative aspect-16/10 rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100">
                {customPhotos[selectedPhoto.id] ? (
                  <img 
                    src={customPhotos[selectedPhoto.id]} 
                    alt={selectedPhoto.title} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <GalleryVisual photoId={selectedPhoto.id} className="w-full h-full object-cover" />
                )}

                {/* Upload or Change button inside lightbox */}
                <button
                  onClick={(e) => handleSingleCardUploadClick(selectedPhoto.id, e)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 text-slate-800 hover:bg-white text-xs font-bold shadow-md flex items-center gap-1.5 border border-slate-200"
                >
                  <Upload className="w-3.5 h-3.5 text-[#0054a6]" />
                  <span>{customPhotos[selectedPhoto.id] ? 'Change Photo' : 'Upload Real Photo'}</span>
                </button>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>

              {/* Simple 2 column details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0054a6] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16943c]" />
                    <span>Facility Highlights</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPhoto.features.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16943c] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#16943c] mb-2 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-[#0054a6]" />
                    <span>Key Medical Equipment</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPhoto.equipment.map((eq, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0054a6] mt-1.5 shrink-0" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                {HOSPITAL_GALLERY_IMAGES.findIndex((img) => img.id === selectedPhoto.id) + 1} of {HOSPITAL_GALLERY_IMAGES.length}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.emergency}`}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  <span>Call Emergency</span>
                </a>
                <button
                  onClick={() => {
                    const dept = selectedPhoto.department;
                    setSelectedPhoto(null);
                    onOpenAppointmentModal(dept);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0054a6] hover:bg-[#004182] text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Book for this Unit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
