'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  interval?: number;
}

export default function ImageCarousel({ 
  images, 
  interval = 5000 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const timerRef = useRef<NodeJS.Timeout>();

  const goToNext = () => {
    setCurrentIndex(nextIndex);
    setNextIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    // Set initial next index
    setNextIndex((currentIndex + 1) % images.length);
    
    // Set up the interval
    timerRef.current = setInterval(goToNext, interval);
    
    // Clear interval on cleanup
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      {/* Current Image */}
      <motion.div
        key={`current-${currentIndex}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        {images[currentIndex].caption && (
          <div className="absolute bottom-4 left-4 text-white text-sm font-light tracking-wide">
            {images[currentIndex].caption}
          </div>
        )}
      </motion.div>
      
      {/* Next Image (preloaded and ready to fade in) */}
      <motion.div
        key={`next-${nextIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentIndex === nextIndex ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={images[nextIndex].src}
          alt={images[nextIndex].alt}
          className="w-full h-full object-cover"
        />
        {images[nextIndex].caption && (
          <div className="absolute bottom-4 left-4 text-white text-sm font-light tracking-wide">
            {images[nextIndex].caption}
          </div>
        )}
      </motion.div>
    </div>
  );
}
