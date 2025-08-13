'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import GridToggle from '@/components/ui/grid-toggle';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  website: string;
}

type GridLayout = '2x2' | '3x3';

const projects: Project[] = [
  {
    id: 'creacy-photography',
    title: 'Creacy Photography',
    description: '→ Custom portfolio with smooth animations and responsive design',
    category: 'Photography',
    image: '/images/projects/creacyphotography.jpg',
    website: 'https://creacyphotography.vercel.app/'
  },
  {
    id: 'classcover',
    title: 'Classcover',
    description: '→ Full-stack platform with booking system and admin dashboard',
    category: 'Education',
    image: '/images/projects/creacyphotography.jpg',
    website: 'https://www.classcover.ie/'
  },
  {
    id: 'barr-build',
    title: 'Barr Build',
    description: '→ Responsive construction site with project showcase and contact forms',
    category: 'Construction',
    image: '/images/projects/creacyphotography.jpg',
    website: 'https://barr-build-h2ba.vercel.app/'
  },
  {
    id: 'project-4',
    title: 'Project 4',
    description: '→ Example project description',
    category: 'Web Design',
    image: '/images/projects/creacyphotography.jpg',
    website: '#'
  },
  {
    id: 'project-5',
    title: 'Project 5',
    description: '→ Example project description',
    category: 'Branding',
    image: '/images/projects/creacyphotography.jpg',
    website: '#'
  },
  {
    id: 'project-6',
    title: 'Project 6',
    description: '→ Example project description',
    category: 'Development',
    image: '/images/projects/creacyphotography.jpg',
    website: '#'
  }
];

const WorkPageGrid = () => {
  const [gridLayout, setGridLayout] = useState<GridLayout>('2x2');
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Log the public URL for debugging
  useEffect(() => {
    console.log('Public URL:', process.env.NEXT_PUBLIC_VERCEL_URL);
  }, []);

  return (
    <section className="py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="px-4 md:px-6">
          {/* Section Header with Grid Toggle */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <p className="text-xl text-black max-w-lg">
              <span className="text-xl text-gray-600 mr-2">Work</span> We help our clients make an impact through informed, authentic digital identities and innovative user experiences.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 hidden md:inline">View:</span>
              <GridToggle 
                onLayoutChange={(layout) => setGridLayout(layout === 'grid' ? '2x2' : '3x3')}
                initialLayout={gridLayout === '2x2' ? 'grid' : 'list'}
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="w-full mx-auto">
            <div className={`grid gap-4 md:gap-6 ${
              gridLayout === '2x2' 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {projects.map((project, index) => (
                <Link 
                  href={project.website} 
                  key={project.id} 
                  className="group cursor-pointer relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Project Image Container */}
                  <div className={`relative overflow-hidden rounded-xl w-full bg-gray-100 ${
                    gridLayout === '2x2' 
                      ? 'aspect-[4/3] h-[400px] md:h-[500px] lg:h-[600px]' 
                      : 'aspect-[4/3] h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]'
                  }`}>
                    <div className="relative w-full h-full">
                      {!loadedImages[project.id] && (
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <div className="animate-pulse text-gray-500">Loading...</div>
                        </div>
                      )}
                      <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-105">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`${
                            gridLayout === '2x2' 
                              ? 'object-cover' 
                              : 'object-cover md:object-center'
                          }`}
                          priority={index < 6} // Load first 6 images with priority
                          sizes={gridLayout === '2x2' 
                            ? "(max-width: 768px) 100vw, 50vw" 
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          }
                          onLoadingComplete={() => setLoadedImages(prev => ({ ...prev, [project.id]: true }))}
                          onError={(e) => {
                            console.error(`Error loading image: ${project.image}`);
                            console.error('Error details:', e);
                            setLoadedImages(prev => ({ ...prev, [project.id]: true }));
                          }}
                        />
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPageGrid;
