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
    id: 'project1',
    year: '2023',
    company: 'Area51',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with custom CMS integration',
    role: 'Lead Developer',
    type: 'E-commerce',
    image: '/images/projects/area51.jpg',
    website: '#'
  },
  {
    id: 'project2',
    year: '2023',
    company: 'Nova',
    title: 'Mobile App',
    description: 'Fitness tracking and workout planning application',
    role: 'UI/UX Designer',
    type: 'Mobile App',
    image: '/images/projects/nova.jpg',
    website: '#'
  },
  {
    id: 'project3',
    year: '2022',
    company: 'Horizon',
    title: 'Web Application',
    description: 'Data visualization dashboard for business analytics',
    role: 'Full-stack Developer',
    type: 'Web App',
    image: '/images/projects/horizon.jpg',
    website: '#'
  },
  {
    id: 'project4',
    year: '2022',
    company: 'Lumina',
    title: 'Brand Identity',
    description: 'Complete brand identity and website redesign',
    role: 'Creative Director',
    type: 'Branding',
    image: '/images/projects/lumina.jpg',
    website: '#'
  }
];

const WorkHorizontal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: 'x',
  });

  const x = useTransform(scrollXProgress, [0, 1], ['0%', '-50%']);

  return (
    <section className="px-4 md:px-8">
      <div className="w-full max-w-[2000px] mx-auto">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        
        <div className="pr-2">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-4">
            <h2 className="text-xl text-black max-w-lg">
              <span className="text-gray-600 mr-2">Work</span> We help our clients make an impact through informed, authentic digital identities and innovative user experiences
            </h2>
            <Link 
              href="/work"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden self-start md:self-auto"
            >
              <span>View all projects</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>

          <div className="relative">
            <div 
              ref={containerRef} 
              className="flex overflow-x-auto pb-12 scrollbar-hide"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                paddingLeft: 'calc((100vw - min(90vw, 2000px)) / 2)',
                paddingRight: 'calc((100vw - min(90vw, 2000px)) / 2)',
              }}
            >
              <div className="flex space-x-6 h-[600px] items-center">
                {projects.map((project) => (
                  <motion.div 
                    key={project.id}
                    className={`flex-shrink-0 relative ${expandedProject === project.id ? 'z-10' : 'z-0'}`}
                    initial={false}
                    animate={{
                      width: expandedProject === project.id ? 'min(90vw, 1000px)' : 'calc(50% - 12px)'
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{
                      minWidth: 'calc(50% - 12px)',
                      maxWidth: 'calc(50% - 12px)',
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-medium text-black mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{project.company}</span>
                        <span className="text-xs text-black bg-gray-100 px-2 py-0.5 rounded-full">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className={`relative w-full h-full cursor-pointer rounded-lg overflow-hidden ${
                        expandedProject === project.id ? 'bg-black text-white' : ''
                      }`}
                      initial={false}
                      animate={{
                        height: expandedProject === project.id ? 'auto' : '100%',
                        backgroundColor: expandedProject === project.id ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0)',
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    >
                      <div className="relative w-full h-full">
                        <motion.button 
                          className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center z-10 backdrop-blur-sm hover:bg-white transition-colors"
                          initial={false}
                          animate={{
                            opacity: expandedProject === project.id ? 0 : 1,
                            y: expandedProject === project.id ? -10 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-sm">Details</span>
                        </motion.button>

                        <a 
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 bg-white/90 text-black px-4 py-1 rounded-full text-sm font-medium flex items-center z-10 backdrop-blur-sm hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                          style={{
                            transform: expandedProject === project.id ? 'translateY(-10px)' : 'none',
                            opacity: expandedProject === project.id ? 0 : 1
                          }}
                        >
                          <span className="text-sm">Website</span>
                          <ArrowTopRightOnSquareIcon className="ml-1 w-3.5 h-3.5" />
                        </a>

                        <motion.div 
                          className="relative w-full overflow-hidden rounded-xl"
                          style={{
                            aspectRatio: '4/5',
                            willChange: 'opacity, transform',
                            transformOrigin: 'top left',
                            borderRadius: '0.75rem',
                            overflow: 'hidden'
                          }}
                          initial={false}
                          animate={{
                            height: expandedProject === project.id ? 'auto' : 0,
                            opacity: expandedProject === project.id ? 1 : 0,
                            y: expandedProject === project.id ? 0 : 20,
                            pointerEvents: expandedProject === project.id ? 'auto' : 'none',
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="space-y-8">
                            <div className="space-y-4">
                              <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                              <p className="text-white/80 leading-relaxed max-w-2xl">
                                {project.description}
                              </p>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                <h4 className="text-white font-medium">The Challenge</h4>
                                <PlusIcon className="w-4 h-4 text-white/60" />
                              </div>
                              <p className="text-white/60 text-sm">
                                {project.company} needed to modernize their digital presence and create a more engaging experience for their users.
                              </p>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                <h4 className="text-white font-medium">The Solution</h4>
                                <PlusIcon className="w-4 h-4 text-white/60" />
                              </div>
                              <p className="text-white/60 text-sm">
                                We delivered a comprehensive solution that addressed all their needs, resulting in improved user engagement and satisfaction.
                              </p>
                            </div>
                            
                            <div className="pt-4">
                              <a 
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-white hover:text-white/80 transition-colors group"
                              >
                                <span className="border-b border-transparent group-hover:border-white">View Project</span>
                                <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
                              </a>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                              <div>
                                <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">Role</h4>
                                <p className="text-white">{project.role}</p>
                              </div>
                              <div>
                                <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">Year</h4>
                                <p className="text-white">{project.year}</p>
                              </div>
                              <div>
                                <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">Client</h4>
                                <p className="text-white">{project.company}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
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
