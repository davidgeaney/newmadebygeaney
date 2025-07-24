"use client";

import WorkPageGrid from '@/components/sections/work-page-grid';
import LogoCarousel from '@/components/ui/logo-carousel';
import MainLayout from '@/components/layouts/main-layout';

export default function WorkPage() {
  return (
    <MainLayout>
      <WorkPageGrid />
      
      {/* Partners and Collaborators Section */}
      <div className="bg-white">
        <LogoCarousel />
      </div>
    </MainLayout>
  );
}
