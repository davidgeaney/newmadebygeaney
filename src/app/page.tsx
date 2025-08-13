'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero';
import WorkSection from '@/components/sections/work';
import WorkHorizontal from '@/components/sections/work-horizontal';
import ServicesSection from '@/components/sections/services';
import ProcessSection from '@/components/sections/process';
import FAQSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

// Dynamically import the Navbar component with SSR disabled
const Navbar = dynamic(() => import('@/components/ui/navbar'), { 
  ssr: false 
});

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <div className="relative z-20 bg-white" style={{ marginTop: '40vh' }}>
        <WorkHorizontal />
        <ServicesSection />
        <div className="mt-16">
          <ProcessSection />
        </div>
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}