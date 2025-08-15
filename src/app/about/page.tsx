"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion } from '@/components/ui/accordion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import MainLayout from '@/components/layouts/main-layout';
import HeroSection from '@/components/sections/hero';
import LogoCarousel from '@/components/ui/logo-carousel';
import Divider from '@/components/ui/divider';
import Initiatives from '@/components/sections/initiatives';
import Charities from '@/components/sections/charities';
import ArtistProgram from '@/components/sections/artist-program';
import Ventures from '@/components/sections/ventures';

// Dynamically import the Navbar component with SSR disabled
const Navbar = dynamic(() => import('@/components/ui/navbar'), { 
  ssr: false 
});

// Define the type for accordion items
interface AccordionItem {
  title: string;
  content: string;
}

// Define the type for process items
interface ProcessItem {
  number: string;
  step: string;
  title: string;
  description: string;
  accordionItems: AccordionItem[];
}

export default function AboutPage() {
  // State for expanded card index
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  // Handle card click with animation
  const handleCardClick = (index: number) => {
    if (isAnimating) return;
    
    if (expandedIndex === index) {
      // Don't close the card when clicking it - only close via close button or clicking another card
      return;
    } else if (expandedIndex !== null) {
      // If another card is open, close it first, then open the new one
      setIsAnimating(true);
      setExpandedIndex(null);
      setTimeout(() => {
        setExpandedIndex(index);
        setTimeout(() => setIsAnimating(false), 300);
      }, 300);
    } else {
      // No card is open, just open the clicked one with animation
      setIsAnimating(true);
      setExpandedIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  // Handle animation completion
  const handleAnimationComplete = () => {
    if (pendingIndex !== null) {
      setExpandedIndex(pendingIndex);
      setPendingIndex(null);
      setIsAnimating(false);
    }
  };

  // Process items data
  const processItems: ProcessItem[] = [
    {
      number: '01',
      step: '01',
      title: 'Design',
      description: 'Within our iterative, data-driven and collaborative process we ensure that our designs are both engaging and authentic. The projects we produce are tools which often have an intended job and goal, because of this we implement performance optimised design philosophies based on behavioural engineering.',
      accordionItems: [
        {
          title: 'User Research',
          content: 'Understanding user needs and behaviors through interviews, surveys, and usability testing.'
        },
        {
          title: 'UI/UX Design',
          content: 'Creating intuitive interfaces with a focus on user flows and interaction design.'
        },
        {
          title: 'Prototyping',
          content: 'Building interactive prototypes to test and validate design concepts.'
        },
        {
          title: 'Design Systems',
          content: 'Developing consistent design languages and component libraries.'
        }
      ]
    },
    {
      number: '02',
      step: '02',
      title: 'Develop',
      description: 'Utilising the best of current web technologies, we deliver high performance projects of many scales. Built with leading and proven platforms with modern build methodologies we create impactful, engaging user-experiences whilst providing robust, adaptive, future-focused solutions.',
      accordionItems: [
        {
          title: 'Frontend Development',
          content: 'Building responsive, performant user interfaces with React and Next.js.'
        },
        {
          title: 'Backend Development',
          content: 'Creating robust APIs and server-side logic with modern frameworks.'
        },
        {
          title: 'Testing',
          content: 'Implementing comprehensive testing strategies for reliability.'
        },
        {
          title: 'DevOps',
          content: 'Setting up CI/CD pipelines and cloud infrastructure.'
        }
      ]
    },
    {
      number: '03',
      step: '03',
      title: 'Grow',
      description: 'Focused on continual website optimisation, rooted in real user data analysis and the identification of conversion barriers. While continuously monitoring performance, we align our strategies with industry best practices to offer data-driven solutions that span digital marketing, enhancements to the customer experience, and website optimisations. Our aim is to unlock the maximum growth potential by fostering synergy across all platforms to ensure your digital presence evolves and excels.',
      accordionItems: [
        {
          title: 'Analytics',
          content: 'Tracking key metrics and user behavior to inform decisions.'
        },
        {
          title: 'SEO',
          content: 'Improving search visibility and organic traffic.'
        },
        {
          title: 'Performance',
          content: 'Optimizing speed and efficiency for better user experience.'
        },
        {
          title: 'Conversion',
          content: 'A/B testing and optimization to improve conversion rates.'
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="relative">
        <Navbar />
        <HeroSection />
        <div className="relative z-20 bg-white" style={{ marginTop: '25vh' }}>
          {/* Full width line divider */}
          <div className="w-screen h-[0.5px] bg-gray-200 mb-4"></div>
          
          {/* About Section with Large Image */}
          <div className="px-4">
            <div className="mb-12">
              <p className="text-3xl text-black">
                <span className="text-3xl text-gray-600 mr-2">About</span> We're a creative studio focused on building meaningful digital experiences that make an impact.
              </p>
            </div>
            <div className="w-full h-[600px] rounded-lg overflow-hidden">
              <img 
                src="/images/aboutimg.webp" 
                alt="About us" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-24 px-4">
            <div className="mb-12">
              <p className="text-2xl text-black max-w-3xl">
                <span className="text-2xl text-gray-600 mr-2">Process</span> We can create complete digital experiences from beginning to end or own either part of the process. From conceptualisation through to implementation and management post launch, we have the capabilities to turn your vision into a platform that's effective for your goals.
              </p>
            </div>

            <div className="relative w-full">
              <div className="flex flex-nowrap gap-3 pb-4 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory touch-auto"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  scrollSnapType: 'x mandatory',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  justifyContent: 'center',
                  position: 'relative',
                  scrollPadding: '0 1rem',
                  scrollBehavior: 'smooth'
                }}>
                {processItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex-shrink-0 w-[90vw] md:w-[calc(33.333%-1rem)] rounded-lg overflow-hidden h-[400px] snap-center ${
                      expandedIndex === index ? 'md:!w-[calc(66.666%-2rem)] z-10' : 'bg-gray-100 cursor-pointer'
                    }`}
                    layout
                    initial={false}
                    onClick={() => handleCardClick(index)}
                    style={{
                      position: 'relative',
                      zIndex: expandedIndex === index ? 10 : 1,
                    }}
                    animate={{
                      width: expandedIndex === index ? 'calc(66.666% - 1rem)' : 'calc(33.333% - 1rem)',
                      height: expandedIndex === index ? '500px' : '350px',
                      backgroundColor: expandedIndex === index ? '#000' : '#f3f4f6',
                      x: expandedIndex === 2 ? 
                        (index === 0 ? '-95%' : index === 1 ? '-95%' : '-50%') :
                        expandedIndex === 1 ? 
                        (index === 0 ? '-15%' : index === 2 ? '10%' : '-5%') :
                        (expandedIndex === 0 ? (index === 1 ? '20%' : '0') : '0'),
                      y: '0',
                      originX: 'left',
                      originY: 'top',
                      opacity: expandedIndex !== null && expandedIndex !== index ? 0.7 : 1,
                      scale: expandedIndex !== null && expandedIndex !== index ? 0.98 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                      when: 'beforeChildren',
                      type: 'tween'
                    }}
                    onAnimationComplete={index === expandedIndex ? handleAnimationComplete : undefined}
                  >
                    <motion.div 
                      className="p-6 h-full relative"
                      layout="position"
                      initial={false}
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transform: 'translateZ(0)',
                      }}
                      animate={{
                        opacity: expandedIndex === index ? 1 : 0.8,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        layout: {
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex justify-between w-full items-start">
                          <span className={`text-sm ${expandedIndex === index ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.number}
                          </span>
                        </div>
                        <h3 className={`text-xl ${expandedIndex === index ? 'text-white' : 'text-black'}`}>
                          {item.title}
                        </h3>

                        <AnimatePresence mode="wait">
                          {expandedIndex === index ? (
                            <motion.div 
                              key={`expanded-${index}`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="flex gap-8 mt-2"
                            >
                              <div className="max-w-md">
                                <p className="text-sm text-white/80 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <div className="w-80 flex-shrink-0">
                                <Accordion items={item.accordionItems} />
                              </div>
                            </motion.div>
                          ) : (
                            <motion.p 
                              key={`collapsed-${index}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="max-w-sm text-black font-book text-sm leading-relaxed mt-auto"
                            >
                              {item.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div 
                        className={`absolute bottom-4 right-4 transition-opacity duration-300 cursor-pointer ${
                          expandedIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (expandedIndex === index) {
                            setExpandedIndex(null);
                          } else {
                            handleCardClick(index);
                          }
                        }}
                      >
                        <svg 
                          className={`w-4 h-4 ${expandedIndex === index ? 'text-white' : 'text-gray-400'}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={expandedIndex === index ? "M6 18L18 6M6 6l12 12" : "M19 9l-7 7-7-7"}
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo Carousel Section */}
          <div className="mt-24">
            <LogoCarousel />
          </div>

          {/* Studio Section */}
          <section className="py-16 bg-gray-100">
            <div className="w-full px-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                <p className="text-2xl text-black max-w-3xl">
                  <span className="text-2xl text-gray-600 mr-2">Studio</span> We work collaboratively with our clients and partner design studios to form a rich understanding of their needs and goals. To each project we apply our own experience, our practical design philosophies, data awareness and performance oriented approach to meet the project's requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Ethos Section */}
          <section className="bg-gray-100">
            <div className="w-full">
              {/* Full-width subtle divider line - white and thinner */}
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">
                <div className="h-[1px] bg-white"></div>
              </div>

              {/* Content container with side padding */}
              <div className="px-4 md:px-6">
                {/* Section Header - Stacked on mobile, row on desktop */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-4">
                  <p className="text-2xl text-black max-w-3xl">
                    <span className="text-2xl text-gray-600 mr-2">Ethos</span> As a forward-thinking, independent studio we work with people and businesses that share our values and desire to create meaningful connections through impactful design.
                  </p>
                </div>

                {/* Ethos Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full mb-24">
                  {[
                    {
                      title: 'Practice',
                      description: 'Being a progressive, independent studio, we aspire to collaborate with individuals and organisations who align with our principles, share our passion for crafting meaningful experiences and move with intention; having the same ambitions to move the project with momentum as we do.'
                    },
                    {
                      title: 'Approach',
                      description: 'Execution and aesthetics exist in harmony for us; if it\'s not functional it\'s not beautiful, and vice versa. Our projects are treated as the tools they are - looking visually great is one thing, but doing the job correctly and effectively is the true mark of success.'
                    },
                    {
                      title: 'Culture',
                      description: 'We work with you, not just for you. We view ourselves as partners on your project investing our time and experience to ensure its success, not just a hired gun. Cultivating healthy relationships with clients is an essential part of our cultural outset.'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white rounded-lg p-8 hover:bg-black transition-all duration-300 cursor-pointer flex flex-col h-full shadow-sm"
                    >
                      <div className="mb-8">
                        <h3 className="text-xs font-normal text-gray-400 group-hover:text-white transition-colors tracking-widest uppercase">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex-grow pt-2">
                        <p className="text-base text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Initiatives Section */}
          <Initiatives />

          <Divider />

          {/* Charities Section */}
          <Charities />

          <Divider />

          {/* Artist Program Section */}
          <ArtistProgram />

          <Divider />

          {/* Ventures Section */}
          <Ventures />
        </div>
      </div>
    </MainLayout>
  );
}
