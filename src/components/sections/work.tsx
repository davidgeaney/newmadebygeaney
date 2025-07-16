'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const projects = [
    {
      id: 'creacy-photography',
      title: 'Creacy Photography',
      description: '→ Custom portfolio with smooth animations and responsive design',
      category: 'Photography',
      outerImage: '/images/projects/creacyphotographyouterimg.jpg',
      innerImage: '/images/projects/creacyphotographyimg.jpg',
      website: 'https://creacyphotography.vercel.app/'
    },
    {
      id: 'classcover',
      title: 'Classcover',
      description: '→ Full-stack platform with booking system and admin dashboard',
      category: 'Education',
      outerImage: '/images/projects/classcoverouterimg.jpg',
      innerImage: '/images/projects/classcoverinnerimg.jpg',
      website: 'https://www.classcover.ie/'
    },
    {
      id: 'barr-build',
      title: 'Barr Build',
      description: '→ Responsive construction site with project showcase and contact forms',
      category: 'Construction',
      outerImage: '/images/projects/barrbuildouterimg.jpg',
      innerImage: '/images/projects/barrbuildinnerimg.jpg',
      website: 'https://barr-build-h2ba.vercel.app/'
    },
    {
      id: 'smile-dublin',
      title: 'Smile Dublin',
      description: '→ Modern dental practice website with appointment booking system',
      category: 'Healthcare',
      outerImage: '/images/projects/smiledublinouterimg.jpg',
      innerImage: '/images/projects/smiledublininnerimg.jpg',
      website: 'https://dentist-hazel-one.vercel.app/'
    }
  ];

const WorkSection = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  
  // Log the public URL for debugging
  useEffect(() => {
    console.log('Public URL:', process.env.PUBLIC_URL);
  }, []);
  return (
    <section className="py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="px-4 md:px-6">
          {/* Section Header - Stacked on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
            <p className="text-xl text-black max-w-lg">
              <span className="text-xl text-gray-600 mr-2">Work</span> We help our clients make an impact through informed, authentic digital identities and innovative user experiences.
            </p>
          
          <a 
            href="mailto:hello@newterritory.studio"
            className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
          >
            <span>View all projects</span>
            <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
          </a>
        </div>

        {/* Projects Grid - Colossal images with minimal spacing */}
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-full">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer relative">
                {/* Outer Image - Background */}
                <div className="relative overflow-hidden aspect-[4/3] h-[400px] md:h-[500px] lg:h-[600px] rounded-xl w-full max-w-full bg-gray-100">
                  {/* Outer Image */}
                  <div className="relative w-full h-full min-h-[400px]">
                    {!loadedImages[`${project.id}-outer`] && (
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <div className="animate-pulse text-gray-500">Loading...</div>
                      </div>
                    )}
                    <Image
                      src={project.outerImage}
                      alt={`${project.title} background`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onLoadingComplete={() => setLoadedImages(prev => ({ ...prev, [`${project.id}-outer`]: true }))}
                    />
                  </div>
                
                  {/* Inner Image - Website screenshot (16:9) centered */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16 z-10">
                    <div className="relative w-full max-w-2xl group-hover:scale-105 transition-transform duration-700 ease-out" style={{ aspectRatio: '16/9' }}>
                      <div className="relative w-full h-full bg-transparent overflow-hidden rounded-xl">
                        {!loadedImages[`${project.id}-inner`] && (
                          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                            <div className="animate-pulse text-gray-500">Loading...</div>
                          </div>
                        )}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.innerImage}
                            alt={project.title}
                            fill
                            className="object-contain w-full h-full"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onLoadingComplete={() => {
                              console.log(`Image loaded: ${project.innerImage}`);
                              setLoadedImages(prev => ({ ...prev, [`${project.id}-inner`]: true }));
                            }}
                            onError={(e) => {
                              console.error(`Error loading image: ${project.innerImage}`);
                              console.error('Error details:', e);
                              setLoadedImages(prev => ({ ...prev, [`${project.id}-inner`]: true }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                
                {/* Bottom text overlay - slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 overflow-hidden">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pt-8 -mt-8">
                    <p className="text-white text-sm font-medium">
                      {project.title} <span className="text-white/70 font-normal">{project.description}</span>
                    </p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;