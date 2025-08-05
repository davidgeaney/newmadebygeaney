'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero';
import WorkSection from '@/components/sections/work';
import ServicesSection from '@/components/sections/services';
import ProcessSection from '@/components/sections/process';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

// Dynamically import the Navbar component with SSR disabled
const Navbar = dynamic(() => import('@/components/ui/navbar'), { 
  ssr: false 
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}