import React, { useState, useEffect } from 'react';
import { HOSPITAL_GALLERY_IMAGES } from '../data/hospitalData';
import { GalleryVisual } from './GalleryVisuals';

const STORAGE_KEY = 'amma_hospital_custom_photos_v1';

interface BackgroundSlideshowProps {
  currentSlideIndex?: number;
  onSlideChange?: (index: number) => void;
  autoPlay?: boolean;
}

export const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({
  currentSlideIndex,
  onSlideChange,
  autoPlay = true,
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});

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

  const activeIndex = currentSlideIndex !== undefined ? currentSlideIndex : internalIndex;

  useEffect(() => {
    if (!autoPlay || currentSlideIndex !== undefined) return;
    const interval = setInterval(() => {
      setInternalIndex((prev) => {
        const next = (prev + 1) % HOSPITAL_GALLERY_IMAGES.length;
        onSlideChange?.(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, currentSlideIndex, onSlideChange]);

  const currentItem = HOSPITAL_GALLERY_IMAGES[activeIndex] || HOSPITAL_GALLERY_IMAGES[0];
  const customImg = customPhotos[currentItem.id];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Background Image / Visual */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {customImg ? (
          <div
            className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-10000 ease-out"
            style={{ backgroundImage: `url(${customImg})` }}
          />
        ) : (
          <div className="w-full h-full opacity-25 scale-105 transition-transform duration-10000 ease-out">
            <GalleryVisual photoId={currentItem.id} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Activative Vibrant Gradient Overlays to keep content 100% legible & energetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/95 via-white/85 to-[#f1f5f9]/95 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-radial from-blue-500/10 via-transparent to-green-500/10" />

      {/* Floating Active Background Indicator Pill */}
      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm text-[11px] font-mono font-bold text-slate-700 pointer-events-auto">
        <span className="w-2 h-2 rounded-full bg-[#16943c] animate-pulse" />
        <span className="text-[#0054a6]">{currentItem.filename}</span>
        <span className="text-slate-400">·</span>
        <span className="text-slate-600 truncate max-w-[150px]">{currentItem.title}</span>
      </div>
    </div>
  );
};
