"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface PixelHoverImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

export function PixelHoverImage({ src, alt, className = "" }: PixelHoverImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{
          filter: isHovered ? 'saturate(1.2)' : 'saturate(1)',
          scale: isHovered ? 1.02 : 1,
          transition: { duration: 0.3 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Main Image */}
        <div className="relative w-full h-0 pb-[56.25%] bg-gray-50 overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-all duration-300"
            style={{
              filter: isHovered ? 'contrast(1.1)' : 'none',
            }}
            sizes="(max-width: 1536px) 80vw, 66vw"
          />
        </div>
        
        {/* Pixelated Overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.15) 0%, rgba(0, 70, 150, 0.25) 100%)',
            opacity: isHovered ? 1 : 0,
            backdropFilter: isHovered ? 'blur(2px)' : 'none',
            transition: 'all 0.3s ease-out',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'100\' fill=\'none\'/%3E%3Crect width=\'50\' height=\'50\' x=\'0\' y=\'0\' fill=\'%230077ff\' fill-opacity=\'0.1\'/%3E%3Crect width=\'50\' height=\'50\' x=\'50\' y=\'50\' fill=\'%230077ff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E")',
              backgroundSize: '20px 20px',
              mixBlendMode: 'overlay' as const,
              opacity: isHovered ? 0.8 : 0,
              transition: 'opacity 0.3s ease-out',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
