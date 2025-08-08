"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import LogoCarousel from '@/components/ui/logo-carousel';
import MainLayout from '@/components/layouts/main-layout';
import Header from '@/components/Header';
import AboutInfo from '@/components/sections/about-info';

export default function AboutPage() {
  const [activeArtist, setActiveArtist] = useState<number | null>(null);

  const toggleArtist = (index: number) => {
    setActiveArtist(activeArtist === index ? null : index);
  };
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const processItems = [
    {
      number: '01',
      title: 'Design',
      description: 'Within our iterative, data-driven and collaborative process we ensure that our designs are both engaging and authentic. The projects we produce are tools which often have an intended job and goal, because of this we implement performance optimised design philosophies based on behavioural engineering.'
    },
    {
      number: '02',
      title: 'Develop',
      description: 'Utilising the best of current web technologies, we deliver high performance projects of many scales. Built with leading and proven platforms with modern build methodologies we create impactful, engaging user-experiences whilst providing robust, adaptive, future-focused solutions.'
    },
    {
      number: '03',
      title: 'Grow',
      description: 'Focused on continual website optimisation, rooted in real user data analysis and the identification of conversion barriers. While continuously monitoring performance, we align our strategies with industry best practices to offer data-driven solutions that span digital marketing, enhancements to the customer experience, and website optimisations. Our aim is to unlock the maximum growth potential by fostering synergy across all platforms to ensure your digital presence evolves and excels.'
    }
  ];

  return (
    <MainLayout>
      <Header showDescription={false} />
      
      {/* Custom Description */}
      <div className="px-4 pt-4">
        <p className="text-xl font-book text-black max-w-lg leading-relaxed">
          A globally operating digital design studio, offering purposeful design, goal oriented development and dependable growth.
        </p>
      </div>
      
      {/* Divider */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12">
        <div className="h-px bg-gray-200"></div>
      </div>

      {/* Main Content Section */}
      <div className="mt-4" style={{ backgroundColor: '#F0F0F0' }}>
        <section className="pt-4 pl-4">
          <div className="w-full pr-4">
            {/* About Info Content */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <p className="text-xl leading-relaxed">
                      I'm Miggy Fajardo, a digital product designer who believes technology should be simple, intuitive, and inspiring. Born in the Philippines and now based in Arizona, I'm always searching for ways to turn ideas into beautiful experiences that reduce friction and enrich daily life.
                    </p>
                    <p className="text-xl leading-relaxed">
                      I'm a maker and a dreamer. My love for creating has also led me to explore various mediums from 3D visualization, prototyping, interaction design, digital art, and most recently, motion design. If I can imagine it, I'll find a way to make it.
                    </p>
                    <p className="text-xl leading-relaxed">
                      When I'm not designing, I'm usually trying to survive the Arizona heat, cooking at home, or attempting to revive my gaming career.
                    </p>
                    <div className="pt-4">
                      <p className="mb-4">Open to full time opportunities.</p>
                      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-6">
                        <a href="/resume.pdf" className="text-sm hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                          <span>→</span>
                          <span className="ml-2">Resume</span>
                        </a>
                        <a href="mailto:hello@miggyfajardo.com" className="text-sm hover:underline flex items-center">
                          <span>→</span>
                          <span className="ml-2">Say hello@miggyfajardo.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-12 lg:pl-4">
                  <div>
                    <div className="mb-4">
                      <div className="grid grid-cols-3 gap-4 text-sm font-normal text-gray-500 uppercase tracking-wider mb-2">
                        <div>COMPANY</div>
                        <div>ROLE</div>
                        <div className="text-right">YEAR</div>
                      </div>
                      <div className="border-b border-gray-200"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                        <div className="text-sm">MADE BY GEANEY</div>
                        <div className="text-sm text-gray-600">FOUNDER & LEAD DESIGNER</div>
                        <div className="text-xs text-gray-500 text-right">2020–PRESENT</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                        <div className="text-sm">DROPBOX</div>
                        <div className="text-sm text-gray-600">PRODUCT DESIGN INTERN</div>
                        <div className="text-xs text-gray-500 text-right">2024</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                        <div className="text-sm">HAPPIED</div>
                        <div className="text-sm text-gray-600">UX/UI DESIGNER</div>
                        <div className="text-xs text-gray-500 text-right">2022–2023</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h2 className="text-sm font-normal uppercase tracking-wider text-gray-500 mb-2">Awards</h2>
                      <div className="border-b border-gray-200"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                        <h3 className="text-sm font-normal">HIDA DESIGN EXCELLENCE AWARD</h3>
                        <span className="text-xs text-gray-500">2025</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h2 className="text-sm font-normal uppercase tracking-wider text-gray-500 mb-2">Education</h2>
                      <div className="border-b border-gray-200"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                        <h3 className="text-sm font-normal">BACHELOR OF DESIGN IN VISUAL COMMUNICATION</h3>
                        <span className="text-xs text-gray-500">2020</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                        <h3 className="text-sm font-normal">DIPLOMA IN DIGITAL DESIGN</h3>
                        <span className="text-xs text-gray-500">2018</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-width Divider */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-4">
              <div className="h-px bg-gray-200"></div>
            </div>

            {/* Process Section */}
            <div className="mt-4 mb-12">
              <div className="mb-12">
                <p className="text-2xl text-black max-w-3xl">
                  <span className="text-2xl text-gray-600 mr-2">Process</span> We can create complete digital experiences from beginning to end or own either part of the process. From conceptualisation through to implementation and management post launch, we have the capabilities to turn your vision into a platform that's effective for your goals.
                </p>
              </div>

              <div className="relative w-full overflow-hidden">
                <div className="flex flex-row gap-3 transition-all duration-300 ease-in-out" 
                  style={{
                    transform: expandedIndex !== null ? `translateX(calc(${-expandedIndex * 33.333}% + ${expandedIndex * 0.5}rem))` : 'none',
                    width: expandedIndex !== null ? '150%' : '100%'
                  }}
                >
                  {processItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`relative rounded-lg overflow-hidden ${expandedIndex === index ? 'md:w-2/3' : 'md:w-1/3'} ${expandedIndex === index ? 'bg-black' : 'bg-gray-100'}`}
                      layout
                      initial={false}
                      onClick={() => expandedIndex !== index && setExpandedIndex(index)}
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
                        
                        <div 
                          className={`absolute bottom-4 right-4 cursor-pointer ${expandedIndex === index ? 'text-white' : 'text-black'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedIndex(expandedIndex === index ? null : index);
                          }}
                        >
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
      </div>

      {/* Studio Section */}
      <section className="py-4" style={{ backgroundColor: '#F0F0F0' }}>
        <div className="w-full">
          {/* Content container with side padding */}
          <div className="px-4 md:px-6">
            {/* Section Header - Stacked on mobile, row on desktop */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <p className="text-3xl text-black">
                <span className="text-gray-600 mr-2">Studio</span> We work collaboratively with our clients and partner design studios to form a rich understanding of their needs and goals. To each project we apply our own experience, our practical design philosophies, data awareness and performance oriented approach to meet the project's requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos Section with more spacing */}
      <section className="py-10 pb-40" style={{ backgroundColor: '#F0F0F0' }}>
        <div className="w-full">
          {/* Full-width subtle divider line - white and thinner */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
            <div className="h-[2px] bg-white"></div>
          </div>

          {/* Content container with side padding */}
          <div className="px-4 md:px-6">
            {/* Section Header - Stacked on mobile, row on desktop */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-4">
              <p className="text-xl text-black max-w-3xl">
                <span className="text-gray-600 mr-2">Ethos</span> As a forward-thinking, independent studio we work with people and businesses that share our values and desire to create meaningful connections through impactful design.
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
                  description: 'Execution and aesthetics exist in harmony for us; if it\'s not functional it\'s not beautiful, and vice versa. Our projects are treated as the tools they are - looking visually great is one thing, but doing the job correctly and effectively is the true mark of success.\n\nAuthenticity and innovation are central to how we address a brief. We are devoid of a \'house-style\' as our approach is client-centric, ensuring we create digital experiences that genuinely communicate client values and offerings.'
                },
                {
                  title: 'Culture',
                  description: 'We work with you, not just for you. We view ourselves as partners on your project investing our time and experience to ensure its success, not just a hired gun. Cultivating healthy relationships with clients is an essential part of our cultural outset. Each of our project teams is kept purposely tight and small to streamline communication and maximise on the project\'s efficiency.\n\nIrrespective of department or role, each member of our team takes pride in their craft; bringing the care and attention to detail that comes with being an independent studio, whilst providing the expertise, vision and ability of a large agency.'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative bg-white rounded-lg p-4 flex flex-col h-full shadow-sm"
                >
                  <div className="pr-16">
                    <h3 className="text-sm font-normal text-black mb-14">
                      {item.title}
                    </h3>
                    <div className="flex-grow">
                      {item.description.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-sm text-black leading-relaxed text-left pr-4 mb-4 last:mb-12">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="pt-4 pb-12 text-white" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="w-full">
          <div className="px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <p className="text-3xl text-white">
                <span className="text-gray-400 mr-2">Initiatives</span> We regularly engage in initiatives beyond our paid work by donating our time, skills, and resources to help support various causes. This includes volunteering, pro-bono work, donating money or services, and offering our equipment to support community projects. By leveraging our expertise and resources, we drive meaningful impact in the communities around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="h-px bg-gray-700"></div>
      </div>

      {/* Charities Section */}
      <section className="py-4 text-white" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="w-full">
          <div className="px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Text Content */}
                  <div className="md:w-1/2">
                    <p className="text-xl text-white mb-12">
                      <span className="text-gray-400 mr-2">Charities</span> Service to our communities allows us to benefit our world in more ways than just for pure financial gain. As a studio, we contribute or donate to charitable causes on a regular schedule.
                    </p>
                    <p className="text-sm text-gray-300 mb-20">
                      By fostering a commitment to social responsibility we aim to have an active role in making a positive impact on society. It is an excellent way for us to engage our team beyond their roles around a common cause creating a more positive and inclusive workplace culture.
                    </p>
                  </div>
                  
                  {/* Charity Lists */}
                  <div className="md:w-1/2 mt-20 md:mt-32 md:ml-16">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-sm font-normal text-neutral-500 mb-1">Charities we've worked for</h3>
                        <ul className="flex flex-wrap gap-2">
                          {['Mate Act Now', 'Koha Apparel', 'Mothers All Together', 'SPCA'].map((charity, index) => (
                            <li key={index}>
                              <a 
                                href="#" 
                                className="group relative text-sm text-white bg-[#999999] px-4 py-1 pr-6 rounded-full hover:pr-8 hover:bg-white hover:text-black transition-all duration-200 flex items-center w-fit overflow-hidden"
                              >
                                <span>{charity}</span>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth="1.5" 
                                  stroke="currentColor" 
                                  className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-black"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-normal text-neutral-500 mb-1">Regular donators</h3>
                        <ul className="flex flex-wrap gap-2">
                          {['St John', 'Wheelchair Rugby New Zealand'].map((donor, index) => (
                            <li key={index}>
                              <a 
                                href="#" 
                                className="group relative text-sm text-white bg-[#999999] px-4 py-1 pr-6 rounded-full hover:pr-8 hover:bg-white hover:text-black transition-all duration-200 flex items-center w-fit overflow-hidden"
                              >
                                <span>{donor}</span>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth="1.5" 
                                  stroke="currentColor" 
                                  className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-black"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="h-px bg-gray-700"></div>
      </div>

      {/* Artist Program Section */}
      <section className="py-4 text-white" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="w-full">
          <div className="px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Text Content */}
                  <div className="md:w-1/2">
                    <p className="text-xl text-white mb-12">
                      <span className="text-gray-400 mr-2">Artist program</span> This initiative is our way of celebrating the immeasurable impact art has on the philosophy and practice of our studio.
                    </p>
                    <p className="text-sm text-gray-300 mb-20">
                      We donate our time to design and develop a portfolio for an up-and-coming artist of any discipline, biannually. Our intention is to provide talented individuals a digital launchpad that allows access to their work and the conversations of their folios. We dedicate collective time, energy and a small financial contribution to provide a platform for artists to break out.
                    </p>
                  </div>
                  
                  {/* Artists List */}
                  <div className="md:w-1/2 mt-14 md:pt-16 md:ml-16">
                    <div className="w-full max-w-2xl">
                      <h3 className="text-sm font-normal text-white mb-3">Artists we've worked with:</h3>
                      <div className="space-y-2 w-full">
                        {[
                          { 
                            name: 'Alexander Schipper',
                            description: 'Contemporary artist specializing in abstract expressionism. Alexander has exhibited in galleries worldwide and his work explores the intersection of technology and traditional mediums.',
                            website: 'alexanderschipper.com'
                          },
                          { 
                            name: 'Josiah Watson',
                            description: 'Multimedia artist known for immersive installations. Josiah\'s work often incorporates found objects and digital elements to create thought-provoking experiences.',
                            website: 'josiahwatson.art'
                          }
                        ].map((artist, index) => (
                          <div key={index} className="w-full bg-gray-100 rounded-md overflow-hidden transition-colors duration-200" style={{ backgroundColor: activeArtist === index ? 'white' : '#f3f4f6' }}>
                            <button 
                              className="w-full text-left text-black px-6 py-3 pr-10 relative flex justify-between items-center"
                              onClick={() => toggleArtist(index)}
                            >
                              <span className="font-medium">{artist.name}</span>
                              <motion.span
                                className="text-gray-400"
                                initial={false}
                                animate={{
                                  rotate: activeArtist === index ? 0 : 0,
                                  opacity: 1
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth="1.5" 
                                  stroke="currentColor" 
                                  className="w-4 h-4"
                                >
                                  {activeArtist === index ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                  ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                  )}
                                </svg>
                              </motion.span>
                            </button>
                            <AnimatePresence>
                              {activeArtist === index && (
                                <motion.div 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden bg-white"
                                >
                                  <div className="px-6 pb-4">
                                    <p className="text-gray-600 text-sm mb-3">{artist.description}</p>
                                    <a 
                                      href={`https://${artist.website}`} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="group relative text-sm text-white bg-[#999999] px-4 py-1 pr-6 rounded-full hover:pr-8 hover:bg-white hover:text-black transition-all duration-200 flex items-center w-fit overflow-hidden"
                                    >
                                      <span>Website</span>
                                      <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5" 
                                        stroke="currentColor" 
                                        className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-black"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                      </svg>
                                    </a>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="h-px bg-gray-700"></div>
      </div>

      {/* Ventures Section */}
      <section className="pt-4 pb-10 text-white" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="w-full">
          <div className="px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Text Content */}
                  <div className="md:w-1/2">
                    <p className="text-xl text-white mb-6">
                      <span className="text-gray-400 mr-2">Ventures</span> If an attractive enough opportunity arises we offer an equity-for-service model where our compensation is replaced by co-ownership of the project we are working on.
                    </p>
                  </div>
                  
                  {/* Additional Content and CTA */}
                  <div className="md:w-1/2 md:ml-16">
                    <div className="space-y-4 text-gray-300">
                      <p>For opportunities with excellent potential but limitations in its resourcing, we may forgo our usual monetary compensation in exchange for an ownership stake in the success of the project.</p>
                      <p>We only offer this for projects with potential we consider highly motivating as to warrant onboarding the risks associated with the project alongside operators that we can foresee an excellent working relationship with, creating a more collaborative and mutually beneficial project with greater potential from our involvement.</p>
                      <p>If you have an idea but don't know where to start, please get in touch.</p>
                    </div>
                    <div className="mt-8">
                      <a 
                        href="/contact" 
                        className="group relative text-sm text-white bg-[#999999] px-4 py-1.5 pr-6 rounded-full hover:pr-8 hover:bg-white hover:text-black transition-all duration-200 flex items-center w-fit overflow-hidden"
                      >
                        <span>Contact us</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth="1.5" 
                          stroke="currentColor" 
                          className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-black"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
