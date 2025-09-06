'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  year: string;
  company: string;
  isVideo?: boolean;
  title: string;
  description: string;
  role: string;
  contributions: string[];
  timeline: string;
  image: string;
  website: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'classcover',
    year: '2024',
    company: 'ClassCover',
    title: 'ClassCover Ireland',
    description: 'Seamless substitute teacher management platform connecting schools with qualified substitute teachers instantly.\n\nThe platform streamlines the process of finding and booking substitute teachers, reducing administrative overhead and ensuring classroom continuity.',
    role: 'Founder',
    contributions: [
      'Full-stack Development',
      'User Experience Design',
      'API Integration',
      'Database Design',
      'Performance Optimization',
      'Mobile Responsiveness',
      'User Authentication'
    ],
    timeline: '6 Months',
    image: '/images/projects/classcovermp4.mp4',
    website: 'https://classcover.com.au/'
  },
  {
    id: 'eli-raurich',
    year: '2024',
    company: 'Eli Raurich',
    title: 'Eli Raurich Photography',
    description: 'Minimalist photography portfolio showcasing clean, elegant visual storytelling.\n\nThe website embodies the photographer\'s minimalist aesthetic with a focus on simplicity, clean lines, and letting the photography speak for itself through thoughtful composition and negative space.',
    role: 'Web Developer',
    contributions: [
      'Minimalist Design Implementation',
      'Image Optimization',
      'Gallery Curation',
      'Clean Typography',
      'Mobile-First Approach',
      'Performance Optimization',
      'Aesthetic Alignment'
    ],
    timeline: '1 Week',
    image: '/images/projects/eliraurich2.mp4',
    website: 'https://minimalist-photographer.vercel.app/'
  },
  {
    id: 'creacy-photography',
    year: '2023',
    company: 'Creacy Photography',
    title: 'Creacy Photography',
    description: 'Modern photography studio showcasing stunning visual work and client galleries.\n\nThe website features a clean, image-focused design that highlights the photographer\'s portfolio while providing an easy way for potential clients to view work and get in touch.',
    role: 'Full Stack Developer',
    image: '/images/projects/creacy-showcase.mp4',
    contributions: [
      'Responsive Design',
      'Image Optimization',
      'Gallery Implementation',
      'Contact Form Integration',
      'SEO Optimization',
      'Performance Tuning',
      'Content Management'
    ],
    timeline: '4 Weeks',
    website: 'https://creacyphotography.vercel.app/'
  },
  {
    id: 'beltany-build',
    year: '2022',
    company: 'Beltany Build',
    title: 'Beltany Build',
    description: 'A construction company specializing in high-quality residential and commercial projects.\n\nThe website showcases their portfolio, services, and company values while providing an easy way for potential clients to request quotes and view past work.',
    role: 'Full Stack Developer',
    image: '/images/projects/beltanybuild.mp4',
    contributions: [
      'Custom Theme Development',
      'Project Gallery',
      'Quote Request System',
      'Mobile Optimization',
      'Content Strategy',
      'Performance Optimization',
      'Security Implementation'
    ],
    timeline: '8 Weeks',
    website: 'https://beltanybuild.com/'
  }
];

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center pb-3 text-left text-[14px] font-normal text-[#252525] hover:opacity-80 focus:outline-none transition-opacity"
      >
        {title}
        <motion.span 
          className="ml-2 w-4 h-4 flex items-center justify-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-lg leading-none">+</span>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { 
                opacity: { duration: 0.2 },
                height: { duration: 0.3, ease: 'easeInOut' }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                opacity: { duration: 0.15 },
                height: { duration: 0.2, ease: 'easeInOut' }
              }
            }}
            className="overflow-hidden"
          >
            <div className="pb-3 text-[14px] text-[#7A7A7A] font-book">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WorkSection = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of the video is visible
        rootMargin: '0px 0px -10% 0px' // Start playing slightly before fully in view
      }
    );

    // Observe all video elements
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="pb-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="px-4">
          {/* Section Header - Single Line Layout */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <p className="text-xl text-black max-w-lg">
              <span className="text-xl text-gray-600 mr-2">Work</span> We design and build websites that reflect your business, not a one-size-fits-all template.
            </p>
            <Link 
              href="/work"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden shrink-0"
            >
              <span>View all projects</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>
          
          <div className="w-full">
            <div className="space-y-24">
              {caseStudies.map((caseStudy) => (
                <article key={caseStudy.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column - Text Content - Made even more compact and thinner */}
                  <div className="lg:col-span-4 max-w-[280px] pt-12">
                    <div className="mb-8 mt-2 pb-6">
                      <div className="text-[14px] text-[#7A7A7A] font-book mb-2">
                        {caseStudy.year}
                      </div>
                      <h3 className="text-[20px] text-[#252525] font-normal leading-tight">{caseStudy.title}</h3>
                    </div>
                    
                    <div className="text-[14px] text-[#252525] font-book space-y-3 leading-relaxed">
                      {caseStudy.description.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>

                    {/* Collapsible Sections - Made more compact and aligned with reference */}
                    <div className="space-y-0.5 mt-8">
                      <CollapsibleSection 
                        title="Role"
                        isOpen={openSection === `role-${caseStudy.id}`}
                        onClick={() => toggleSection(`role-${caseStudy.id}`)}
                      >
                        <p>{caseStudy.role}</p>
                      </CollapsibleSection>
                      
                      <CollapsibleSection 
                        title="Contributions" 
                        isOpen={openSection === `${caseStudy.id}-contributions`}
                        onClick={() => toggleSection(`${caseStudy.id}-contributions`)}
                      >
                        <ul className="list-disc pl-5 space-y-1">
                          {caseStudy.contributions.map((contribution, idx) => (
                            <li key={idx}>{contribution}</li>
                          ))}
                        </ul>
                      </CollapsibleSection>
                      
                      <CollapsibleSection 
                        title="Timeline" 
                        isOpen={openSection === `${caseStudy.id}-timeline`}
                        onClick={() => toggleSection(`${caseStudy.id}-timeline`)}
                      >
                        {caseStudy.timeline}
                      </CollapsibleSection>
                      
                      {caseStudy.website && (
                        <div className="pt-4">
                          <a 
                            href={caseStudy.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                          >
                            <span>Visit Project</span>
                            <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Right Column - Image - Extended to align with section below */}
                  <div className="lg:col-span-8 xl:col-span-8">
                    <div className="relative w-full h-full">
                      <div className="relative w-full h-0 pb-[56.25%] bg-gray-50 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-black/5">
                        {caseStudy.image.endsWith('.mp4') ? (
                          <video
                            ref={(el) => {
                              if (el) {
                                videoRefs.current[caseStudy.id] = el;
                              }
                            }}
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          >
                            <source src={caseStudy.image} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 pointer-events-none" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;