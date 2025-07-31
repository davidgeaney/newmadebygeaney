import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface DeviceMockupProps {
  image: string | StaticImageData;
  alt: string;
  className?: string;
  device?: "macbook" | "iphone";
  rotate?: number;
  scale?: number;
}

export function DeviceMockup({
  image,
  alt,
  className,
  device = "macbook",
  rotate = 0,
  scale = 1,
}: DeviceMockupProps) {
  const baseClasses = "relative mx-auto";
  const deviceClasses = {
    macbook: "w-full max-w-4xl",
    iphone: "w-full max-w-xs",
  };

  const containerStyle = {
    transformStyle: 'preserve-3d' as const,
    width: '100%',
  };

  // Calculate aspect ratio for 16:9 images
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = typeof image === 'string' ? image : image.src;
    img.onload = () => {
      setIsWide(img.width / img.height > 1.5);
    };
  }, [image]);

  return (
    <motion.div 
      className={cn('w-full', baseClasses, deviceClasses[device], className, {
        'max-w-4xl': isWide,
        'max-w-3xl': !isWide,
      })}
      style={{
        ...containerStyle,
        transform: `perspective(1000px) rotateX(${rotate}deg) scale(${scale * 0.8})`,
      }}
      whileHover={{
        y: -5,
        scale: 0.82,
        transition: { duration: 0.3 },
      }}
    >
      {device === "macbook" ? (
        <div className="relative">
          {/* Laptop Screen */}
          <div className="relative rounded-t-2xl rounded-b-3xl bg-gray-900 p-3 shadow-2xl">
            <div className="relative overflow-hidden rounded-lg bg-white" 
                 style={isWide ? { aspectRatio: '16/9' } : { aspectRatio: '16/10' }}>
              <div className="relative w-full h-full flex items-center justify-center p-1">
                <Image
                  src={image}
                  alt={alt}
                  width={1920}
                  height={1080}
                  className={isWide ? "object-contain h-full w-auto" : "object-cover w-full h-full"}
                  sizes="(max-width: 1536px) 80vw, 66vw"
                />
              </div>
            </div>
          </div>
          
          {/* Laptop Base */}
          <div className="relative mx-auto h-6 w-3/4 rounded-b-3xl bg-gray-200 shadow-2xl">
            <div className="absolute left-0 right-0 mx-auto h-1 w-1/3 rounded-b-md bg-gray-400"></div>
          </div>
          
          {/* Reflection */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
        </div>
      ) : (
        <div className="relative mx-auto">
          {/* Phone Frame */}
          <div className="relative rounded-[2.5rem] border-[14px] border-gray-900 bg-gray-900 p-1 shadow-2xl">
            {/* Notch */}
            <div className="absolute left-1/2 top-0 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-gray-900"></div>
            
            {/* Screen */}
            <div className="relative aspect-[9/19] overflow-hidden rounded-3xl bg-white">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            
            {/* Home Button */}
            <div className="absolute bottom-4 left-1/2 h-1 w-1/4 -translate-x-1/2 rounded-full bg-gray-900"></div>
          </div>
          
          {/* Shadow */}
          <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/20 blur-md"></div>
        </div>
      )}
    </motion.div>
  );
}
