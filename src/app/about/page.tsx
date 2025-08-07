"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import LogoCarousel from '@/components/ui/logo-carousel';
import MainLayout from '@/components/layouts/main-layout';
import Header from '@/components/Header';

export default function AboutPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const processItems = [
    {
      number: '01',
      title: 'Design',
      description: 'Within our iterative, data-driven and collaborative process we ensure that our designs are both engaging and authentic. The projects we produce are tools which often have an intended job and goal, because of this we implement performance optimised design philosophies based on behavioural engineering.',
    },
    {
      number: '02',
      title: 'Develop',
      description: 'Utilising the best of current web technologies, we deliver high performance projects of many scales. Built with leading and proven platforms with modern build methodologies we create impactful, engaging user-experiences whilst providing robust, adaptive, future-focused solutions.',
    },
    {
      number: '03',
      title: 'Grow',
      description: 'Focused on continual website optimisation, rooted in real user data analysis and the identification of conversion barriers. While continuously monitoring performance, we align our strategies with industry best practices to offer data-driven solutions that span digital marketing, enhancements to the customer experience, and website optimisations. Our aim is to unlock the maximum growth potential by fostering synergy across all platforms to ensure your digital presence evolves and excels.',
    }
  ];

  return (
    <MainLayout>
      <Header showDescription={false} />
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
                <span className="text-xl text-gray-600 mr-2">About</span> We're a creative studio focused on building meaningful digital experiences that make an impact.
              </p>
            </div>

            {/* Large image placeholder */}
            <div className="w-full min-h-[120vh] h-[120vh] relative bg-gray-100 rounded-lg overflow-hidden mb-16">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <span className="text-gray-500 text-2xl md:text-4xl font-medium">ABOUT PAGE IMAGE</span>
              </div>
            </div>

            {/* Process Section */}
            <div className="mt-24">
              <div className="mb-12">
                <p className="text-2xl text-black max-w-3xl">
                  <span className="text-2xl text-gray-600 mr-2">Process</span> We can create complete digital experiences from beginning to end or own either part of the process. From conceptualisation through to implementation and management post launch, we have the capabilities to turn your vision into a platform that's effective for your goals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-full">
                {processItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-lg cursor-pointer overflow-hidden ${expandedIndex === index ? 'md:col-span-3 bg-black' : 'bg-gray-100'}`}
                    layout
                    initial={false}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <motion.div 
                      className="p-6 h-full relative"
                      layout
                    >
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <span className={`text-sm ${expandedIndex === index ? 'text-white' : 'text-black'} transition-colors block`}>
                            {item.number}
                          </span>
                          <h3 className={`text-xl ${expandedIndex === index ? 'text-white' : 'text-black'} transition-colors`}>
                            {item.title}
                          </h3>
                        </div>
                        
                        <motion.div 
                          className="mt-auto"
                          layout
                        >
                          <p className={`text-sm ${expandedIndex === index ? 'text-white' : 'text-black'} transition-colors`}>
                            {item.description}
                          </p>
                          
                          {expandedIndex === index && (
                            <motion.div 
                              className="mt-6 space-y-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {[
                                'Web Design',
                                'UI/UX Design',
                                'Frontend Development',
                                'Backend Development',
                                'E-commerce Solutions'
                              ].map((service, i) => (
                                <div key={i} className="border-b border-gray-700 pb-3">
                                  <h4 className="text-white text-lg font-medium">{service}</h4>
                                  <p className="text-gray-400 text-sm mt-1">
                                    {item.title} services for {service.toLowerCase()}...
                                  </p>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                      
                      <div className={`absolute bottom-4 right-4 ${expandedIndex === index ? 'text-white' : 'text-black'}`}>
                        <ArrowRightIcon className={`w-4 h-4 transition-transform ${expandedIndex === index ? 'rotate-45' : ''}`} />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <LogoCarousel />

      {/* Studio Section */}
      <section className="py-10 bg-gray-100">
        <div className="w-full">
          {/* Content container with side padding */}
          <div className="px-4 md:px-6">
            {/* Section Header - Stacked on mobile, row on desktop */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
              <p className="text-2xl text-black max-w-3xl">
                <span className="text-2xl text-gray-600 mr-2">Studio</span> We work collaboratively with our clients and partner design studios to form a rich understanding of their needs and goals. To each project we apply our own experience, our practical design philosophies, data awareness and performance oriented approach to meet the project's requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos Section with more spacing */}
      <section className="bg-gray-100 py-24 pb-40">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full">
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
                  className="relative bg-white rounded-lg p-6 flex flex-col h-full shadow-sm"
                >
                  <div className="pr-16">
                    <h3 className="text-sm font-normal text-black tracking-widest mb-8">
                      {item.title}
                    </h3>
                    <div className="flex-grow">
                      <p className="text-sm text-black leading-relaxed text-left pr-4 mb-12">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
