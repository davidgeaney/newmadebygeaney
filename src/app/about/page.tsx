"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion } from '@/components/ui/accordion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import HeroSection from '@/components/sections/hero';
import MainLayout from '@/components/layouts/main-layout';
import LogoCarousel from '@/components/ui/logo-carousel';
import { ProcessSection } from '@/components/sections/ProcessSection';
import Initiatives from '@/components/sections/initiatives';
import Charities from '@/components/sections/charities';
import ArtistProgram from '@/components/sections/artist-program';
import Ventures from '@/components/sections/ventures';
import Divider from '@/components/ui/divider';

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
  // Keep track of which card is expanded (if any)
  const [expandedIndex] = useState<number | null>(null);

  // Process items data
  const processItems: ProcessItem[] = [
    {
      number: '01',
      step: '01',
      title: 'Design',
      description: 'We draw inspiration from proven designs and combine it with a collaborative, data-driven process to create work that is both engaging and authentic. Every layout, color, and interaction is intentional, built to serve a clear purpose. Not just visuals, but solutions built to perform and deliver results.',
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
      description: 'By combining advanced frameworks with AI-assisted workflows, we craft websites that perform exceptionally and remain easy to manage. Keeping pace with modern tech means every build is faster, more efficient, and ready for whatever comes next.',
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
      description: 'We continually refine and optimise websites using real user data, identifying friction points and conversion barriers. By monitoring performance, following best practices, and ensuring SEO-friendly implementations, we deliver improvements that enhance user experience, boost engagement, and grow your online presence.',
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
                <span className="text-3xl text-gray-600 mr-2">About</span> We are a local web design agency focused on creating websites that cut through the noise and actually support your business.
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
          <ProcessSection />

        {/* Logo Carousel Section */}
          <div className="mt-24">
            <LogoCarousel />
          </div>

          {/* Studio Section */}
          <section className="pt-4 pb-10 bg-[#F0F0F0]">
            <div className="w-full px-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                <p className="text-3xl text-black font-light">
                  <span className="text-3xl text-gray-600 font-light mr-2">Studio</span> We’re not a big agency. We’re a small team who work directly with clients, keeping things simple and focused on what matters. Our job is to understand your business, your goals, and where a website can <span className="relative inline-block">
  <span className="relative z-10">actually make a difference</span>
  <span className="absolute bottom-1 left-0 w-full h-4 bg-blue-300/70 -z-0 transform -rotate-0.5"></span>
</span>. From there, we design and build sites that are clear, reliable, and easy to manage, without any unnecessary bs.
                </p>
              </div>
            </div>
          </section>

          {/* Ethos Section */}
          <section className="bg-[#F0F0F0]">
            <div className="w-full">
              {/* Full-width subtle divider line - white and thinner */}
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
                <div className="h-[1px] bg-white"></div>
              </div>

              {/* Content container with side padding */}
              <div className="px-4 pb-6">
                {/* Section Header - Stacked on mobile, row on desktop */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-4">
                  <p className="text-xl text-black max-w-xl">
                    <span className="text-xl text-gray-600 mr-2">Ethos</span> We know how important it is for businesses to have a strong online presence today. Without it, opportunities are missed and competitors get ahead. That’s why we keep our approach practical and honest: no overcomplication, no unnecessary add-ons, just websites built to help businesses like yours thrive online. Our goal is straightforward. We want to give you the best possible site to support your growth now and in the future.
                  </p>
                </div>

                {/* Ethos Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full mb-24">
                  {[
                    {
                      title: 'Impact',
                      description: 'We focus on creating websites that truly make a difference for our clients. Every project starts with understanding your business, your goals, and the opportunities a strong online presence can unlock. By keeping our approach practical and intentional, we ensure your website isn’t just another online space—it’s a tool designed to help your business grow and stand out.'
                    },
                    {
                      title: 'Quality',
                      description: 'We believe that design and functionality must work hand in hand. A site that looks great but fails to perform isn’t doing its job. Every project we take on is built to be reliable, easy to manage, and tailored to the client’s goals. No generic templates—every website is crafted to reflect your brand and deliver real results.\n\nAuthenticity drives our approach. We don’t rely on a fixed style or trends; instead, we create digital experiences that communicate your values clearly and effectively. Every decision we make is focused on usability, longevity, and making your online presence genuinely impactful.'
                    },
                    {
                      title: 'Support',
                      description: 'We see ourselves as partners, not just builders. From the initial concept to post-launch, we’re here to guide, advise, and solve problems so your website works for you. Our aim is to make the process clear and manageable, removing stress and uncertainty from your project.\n\nBeyond launch, we provide practical guidance and ongoing support. Whether it’s updates, optimisations, or helping you understand how to manage your site, we ensure you have the confidence and tools to maintain a strong online presence long after your site goes live.'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white rounded-lg px-4 pt-4 pb-6 flex flex-col h-full shadow-sm"
                    >
                      <div className="mb-8">
                        <h3 className="text-sm font-normal text-black transition-colors tracking-widest mb-12">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex-grow pt-2 max-w-sm">
                        <div className="mt-2 text-gray-600 text-sm leading-relaxed space-y-3">
                          {item.description.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
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
