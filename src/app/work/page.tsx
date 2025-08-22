"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import HeroSection from '@/components/sections/hero';
import { caseStudies } from '@/data/caseStudies';
import SelectedClients from '@/components/sections/selected-clients';

// Dynamically import the LogoCarousel component with SSR disabled
const LogoCarousel = dynamic(() => import('@/components/ui/logo-carousel'), { 
  ssr: false 
});

// Dynamically import the Navbar component with SSR disabled
const Navbar = dynamic(() => import('@/components/ui/navbar'), { 
  ssr: false 
});

// Collapsible Section Component
const CollapsibleSection = ({ 
  title, 
  children, 
  isOpen, 
  onClick 
}: { 
  title: string; 
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-gray-200 pb-2">
    <button 
      onClick={onClick}
      className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
    >
      <span className="font-medium">{title}</span>
      <svg 
        className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <div className="pb-4">
        {children}
      </div>
    )}
  </div>
);

export default function WorkPage() {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection showDescription={false} />
      <div className="relative z-20 bg-white pb-20 flex-grow" style={{ marginTop: '25vh' }}>
        {/* Full width divider */}
        <div className="w-screen border-t border-gray-200 -ml-4 md:-ml-8 lg:-ml-16 xl:-ml-24"></div>
        {/* Work Showcase Section */}
        <section className="pt-4 pb-20 pl-4">
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <p className="text-3xl text-black">
                <span className="text-gray-600 mr-2">Work</span> Our clients are recognised brands, best in class creatives, innovative retailers, and global organisations; unleashing their potential with projects that engage and inspire.
              </p>
            </div>
          </div>
          
          {/* Projects List */}
          <div className="space-y-20">
            {caseStudies.map((project) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Details */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{project.year}</p>
                    <h2 className="text-3xl font-medium">{project.title}</h2>
                  </div>
                  
                  <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
                  
                  <div className="space-y-4 pt-4">
                    <CollapsibleSection 
                      title="Role & Responsibilities"
                      isOpen={openSections[`${project.id}-role`]}
                      onClick={() => toggleSection(`${project.id}-role`)}
                    >
                      <ul className="list-disc pl-5 space-y-1">
                        {project.contributions.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CollapsibleSection>
                    
                    <CollapsibleSection 
                      title="Timeline" 
                      isOpen={openSections[`${project.id}-timeline`]}
                      onClick={() => toggleSection(`${project.id}-timeline`)}
                    >
                      {project.timeline}
                    </CollapsibleSection>
                    
                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200"
                      >
                        <span>Visit Project</span>
                        <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Right Column - Media (Video or Image) */}
                <div className="lg:col-span-8">
                  <div className="relative w-full h-0 pb-[56.25%] bg-gray-50 overflow-hidden rounded-lg">
                    {project.isVideo ? (
                      <video
                        src={project.media}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={project.media}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          priority
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Selected Clients Section */}
        <SelectedClients />
        
        {/* Logo Carousel Section */}
        <div className="w-full">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div className="h-[0.5px] bg-gray-200"></div>
          </div>
          <LogoCarousel />
        </div>
      </div>
    </div>
  );
}