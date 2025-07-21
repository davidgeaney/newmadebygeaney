'use client';

import { useEffect, useRef } from 'react';

const LOGOS = [
  { id: 1, name: 'Logo 1', src: '/path/to/logo1.png' },
  { id: 2, name: 'Logo 2', src: '/path/to/logo2.png' },
  { id: 3, name: 'Logo 3', src: '/path/to/logo3.png' },
  { id: 4, name: 'Logo 4', src: '/path/to/logo4.png' },
  { id: 5, name: 'Logo 5', src: '/path/to/logo5.png' },
  { id: 6, name: 'Logo 6', src: '/path/to/logo6.png' },
  { id: 7, name: 'Logo 7', src: '/path/to/logo7.png' },
  { id: 8, name: 'Logo 8', src: '/path/to/logo8.png' },
];

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="px-4 md:px-6">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-6">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        <div className="mb-16">
          <p className="text-2xl text-black max-w-3xl">
            <span className="text-2xl text-gray-600 mr-2">Partners and Collaborators</span> We work with specialist partners from around the world, using our combined expertise to deliver on the specific needs of our clients using a dedicated workflow process.
          </p>
          <div className="mb-12 mt-6">
            <a 
              href="#" 
              className="group relative text-sm text-black bg-gray-100 px-6 py-3 pr-8 rounded-full hover:pr-10 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
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
            className="flex items-center gap-8 w-max animate-scroll whitespace-nowrap"
            style={{
              animationDuration: '40s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="relative h-16 w-32 flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-white p-4 rounded-lg flex items-center justify-center h-full w-full">
                  <span className="text-gray-400">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
