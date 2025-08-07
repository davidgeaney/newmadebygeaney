'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlusIcon, MinusIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Project {
  id: string;
  year: string;
  company: string;
  title: string;
  description: string;
  role: string;
  tag?: string;
  type?: string;
  image: string;
  website: string;
}

const projects: Project[] = [
  {
    id: 'classcover',
    year: '2024',
    company: 'ClassCover',
    title: 'ClassCover Ireland',
    description: 'Seamless substitute teacher management platform connecting schools with qualified substitute teachers instantly.',
    role: 'Lead Developer',
    image: '/images/projects/classcover.webp',
    website: 'https://classcover.com.au/'
  },
  {
    id: '2',
    year: '2023',
    company: 'Creacy',
    title: 'Creacy Photography',
    description: 'Modern photography studio showcasing stunning visual work and client galleries.',
    role: 'Web Developer',
    tag: 'Web Design',
    image: '/images/projects/creacyphotography.webp',
    website: 'https://creacyphotography.com/'
  },
  {
    id: '3',
    year: '2023',
    company: 'CQS',
    title: 'CQS',
    description: 'Professional quantity surveying firm providing comprehensive cost management services.',
    role: 'Frontend Developer',
    tag: 'Web App',
    image: '/images/projects/cqs.webp',
    website: 'https://cqssurveyors.com/'
  },
  {
    id: '1',
    year: '2022',
    company: 'Beltany Build',
    title: 'Beltany Build',
    description: 'A construction company specializing in high-quality residential and commercial projects.',
    role: 'Full Stack Developer',
    image: '/images/projects/beltanybuild.webp',
    website: 'https://beltanybuild.com/'
  }
];

const WorkHorizontal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: 'x',
  });

  // For any potential scroll-based animations
  const x = useTransform(scrollXProgress, [0, 1], ['0%', '-50%']);

  return (
    <section className="py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="px-4 md:px-6">
          {/* Section Header - Single Line Layout */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-4">
            <p className="text-2xl text-black max-w-xl">
              <span className="text-2xl text-gray-600 mr-2">Work</span> Selected projects and case studies that showcase my approach to design and problem-solving.
            </p>
            <Link 
              href="/work"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden self-start md:self-auto"
            >
              <span>View all projects</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>

          {/* Horizontal Scrollable Projects */}
          <div className="relative">
            <div 
              ref={containerRef} 
              className="flex overflow-x-auto pb-12 scrollbar-hide"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <div className="flex space-x-6 pl-4 md:pl-6 pr-4 md:pr-6 h-[600px] items-center">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    className={`flex-shrink-0 ${expandedProject === project.id ? 'z-10' : 'z-0'}`}
                    initial={false}
                    animate={{
                      width: expandedProject === project.id ? '1000px' : 'min(90vw, 1000px)'
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{
                      willChange: 'width, max-width'
                    }}
                  >
                    {/* Project Name and Tag - Above Image */}
                    <div className="mb-3 flex items-center space-x-3">
                      <span className="text-base text-gray-800 font-medium">{project.company}</span>
                      <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        {project.type || 'Project'}
                      </span>
                    </div>
                    
                    <motion.div 
                      className={`relative group h-[500px] w-full cursor-pointer ${expandedProject === project.id ? 'text-white' : 'rounded-lg overflow-hidden'}`}
                      style={{
                        scrollSnapAlign: 'start',
                        aspectRatio: expandedProject === project.id ? 'auto' : '16/9',
                        willChange: 'background-color, border-radius, transform',
                        transformOrigin: 'top left'
                      }}
                      initial={false}
                      animate={{
                        backgroundColor: expandedProject === project.id ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0)',
                        borderRadius: '0.5rem',
                      }}
                      transition={{
                        backgroundColor: { duration: 0.3, ease: 'easeInOut' },
                        borderRadius: { duration: 0.3, ease: 'easeInOut' }
                      }}
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    >
                      {/* View Details Button - Top Left */}
                      <motion.button 
                        className="absolute top-3 left-3 bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-sans font-medium hover:bg-white flex items-center z-10"
                        initial={false}
                        animate={{
                          backgroundColor: expandedProject === project.id ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.9)',
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <span className="text-sm font-normal tracking-wider">Details</span>
                        <motion.span
                          initial={false}
                          animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          className="ml-1 h-3.5 w-3.5 flex items-center justify-center"
                        >
                          {expandedProject === project.id ? (
                            <MinusIcon className="h-3.5 w-3.5" />
                          ) : (
                            <PlusIcon className="h-3.5 w-3.5" />
                          )}
                        </motion.span>
                      </motion.button>

                      {/* Website Button - Top Right (Hover Only) */}
                      <a 
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-gray-100 text-black px-4 py-1.5 rounded-full text-sm font-sans font-normal hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center z-10 opacity-0 group-hover:opacity-100 overflow-hidden"
                      >
                        <span className="text-sm font-normal tracking-wider">Website</span>
                        <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
                      </a>

                      {/* Project Image with Fade Transition */}
                      <motion.div 
                        className="absolute inset-0 overflow-hidden rounded-lg"
                        initial={false}
                        animate={{
                          opacity: expandedProject === project.id ? 0 : 1
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                          willChange: 'opacity, transform',
                          transformOrigin: 'top left'
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>

                      {/* Expanded Content */}
                      <motion.div 
                        className="relative h-full w-full flex items-center px-6 py-8 rounded-xl overflow-hidden"
                        initial={false}
                        animate={{
                          opacity: expandedProject === project.id ? 1 : 0,
                          display: expandedProject === project.id ? 'flex' : 'none'
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                          willChange: 'opacity, transform',
                          pointerEvents: expandedProject === project.id ? 'auto' : 'none',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0
                        }}>
                          <div className="w-full max-w-2xl space-y-8 ml-3">
                            <p className="text-white text-base leading-relaxed mb-8 max-w-2xl">
                              We led the rebrand, design, and development of a new e-commerce platform for Area51, a Wellington-based fashion retailer, to modernise their digital presence and empower their in-house team. Initially focused on unlocking functionality from a restrictive previous build, the project expanded into a full creative rethink — refining the brand's identity, eCommerce strategy, and user experience. The new site brings a clean, utilitarian sensibility to the forefront, free from sci-fi tropes, and is built on Shopify to scale with the business.
                            </p>
                            <div className="space-y-4">
                              <div className="space-y-0.5">
                                <h3 className="text-white text-sm font-medium">Rebrand</h3>
                                <p className="text-gray-400 text-xs">Brand strategy and visual identity refresh</p>
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="text-white text-sm font-medium">Design</h3>
                                <p className="text-gray-400 text-xs">UI/UX design and user experience strategy</p>
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="text-white text-sm font-medium">Development</h3>
                                <p className="text-gray-400 text-xs">Frontend and backend development</p>
                              </div>
                            </div>
                          </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHorizontal;
