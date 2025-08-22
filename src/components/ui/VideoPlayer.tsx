'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({ 
  src, 
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false
}: VideoPlayerProps) {
  // Add cache busting to ensure we're not getting a cached error
  const cacheBuster = `?t=${new Date().getTime()}`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState('');

  // Update video source when src changes
  useEffect(() => {
    if (!src) return;
    
    // Add cache buster to prevent caching issues
    const cacheBuster = `?t=${new Date().getTime()}`;
    setVideoSrc(`${src}${cacheBuster}`);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error('Video error:', e);
    setHasError(true);
    setIsLoading(false);
  }, []);

  const handleCanPlay = useCallback(() => {
    console.log('Video can play');
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleWaiting = useCallback(() => {
    console.log('Video waiting for data');
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    // Set up event listeners
    video.addEventListener('error', handleError as any);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('stalled', () => console.log('Video stalled'));
    video.addEventListener('loadstart', () => console.log('Video loading started'));
    video.addEventListener('canplaythrough', () => console.log('Video can play through'));

    // Try to play the video
    const playPromise = video.play().catch(error => {
      console.error('Autoplay failed:', error);
      // If autoplay fails, show controls
      video.controls = true;
    });

    return () => {
      video.removeEventListener('error', handleError as any);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('stalled', () => {});
      video.removeEventListener('loadstart', () => {});
      video.removeEventListener('canplaythrough', () => {});
    };
  }, [videoSrc, handleError, handleCanPlay, handleWaiting]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="animate-pulse text-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">Loading video...</p>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 p-4 text-center">
          <p className="text-red-600 font-medium">Failed to load video</p>
          <p className="text-sm text-gray-600 mt-2">Please check the console for more details.</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          playsInline
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={videoSrc} type="video/mp4" key={videoSrc} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
