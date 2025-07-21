"use client";

import WorkPageGrid from '@/components/sections/work-page-grid';
import Navbar from '@/components/ui/navbar';
import LogoCarousel from '@/components/ui/logo-carousel';
import Footer from '@/components/sections/footer';

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar />
        <WorkPageGrid />
        
        {/* Partners and Collaborators Section */}
        <div className="bg-white">
          <LogoCarousel />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
