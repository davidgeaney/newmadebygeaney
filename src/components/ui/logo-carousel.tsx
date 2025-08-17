'use client';

import { useRef, useState } from 'react';

const LOGOS = [
  { id: 1, name: 'VeeFriends', src: '/images/logos/veefriends.svg' },
  { id: 2, name: 'Coldharbour', src: '/images/logos/coldharbour.svg' },
  { id: 3, name: 'Made by Geaney', src: '/images/logos/florianpicasso.svg' },
  { id: 4, name: 'VeeFriends', src: '/images/logos/giza.svg' },
  { id: 5, name: 'Coldharbour', src: '/images/logos/fullsend.svg' },
];

// Create multiple sets of logos for smooth infinite scroll
const LOGO_SETS = 2; // Two identical sets for seamless looping

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Create three sets of logos for smoother infinite scrolling
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-animate="true"] {
            animation: none !important;
          }
        }
      `}</style>
      <div className="px-4 md:px-6">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-6">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        <div className="mb-16">
          <p className="text-2xl text-black max-w-3xl">
            <span className="text-2xl text-gray-600 mr-2">Clients and Partners</span> From local businesses to global collaborators, our clients and partners trust us to bring clarity, creativity, and results to their projects.
          </p>
          <div className="mb-12 mt-6">
            <a 
              href="#" 
              className="group relative text-sm text-black bg-gray-100 px-3 py-2 pr-3 rounded-full hover:pr-10 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
            >
              <span>Partner Workflow</span>
              <svg className="absolute w-3.5 h-3.5 right-2 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="relative w-full" ref={containerRef}>
          <div 
            ref={scrollerRef}
            className="flex items-center gap-2 w-max whitespace-nowrap"
            style={{
              animation: 'scroll 40s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              transition: 'animation-play-state 0.2s ease-out'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            data-animate="true"
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="group relative h-24 w-56 flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24 w-56 transition-all duration-300 group-hover:bg-black">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-3/5 w-auto object-contain transition-all duration-300 group-hover:invert"
                    loading="lazy"
                  />
                  <svg 
                    className="absolute top-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H7m10 0v10"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
