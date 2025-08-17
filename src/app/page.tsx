'use client';

import dynamic from 'next/dynamic';
import MainLayout from '@/components/layouts/main-layout';
import HeroSection from '@/components/sections/hero';
import WorkSection from '@/components/sections/work';
import ServicesSection from '@/components/sections/services';
import ProcessSection from '@/components/sections/process';
import FAQSection from '@/components/sections/faq';
import FeedSection from '@/components/sections/feed';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen">
        <HeroSection showDescription={true} />
        <div className="relative z-20 bg-white pb-20 flex-grow" style={{ marginTop: '40vh' }}>
          <WorkSection />
          <ServicesSection />
          {/* <div className="mt-16">
            <ProcessSection />
          </div> */}
          <FeedSection />
          <FAQSection />
          <ContactSection />
        </div>
      </div>
    </MainLayout>
  );
}