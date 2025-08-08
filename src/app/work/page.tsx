"use client";

import WorkPageGrid from '@/components/sections/work-page-grid';
import SelectedClients from '@/components/sections/selected-clients';
import LogoCarousel from '@/components/ui/logo-carousel';
import MainLayout from '@/components/layouts/main-layout';

export default function WorkPage() {
  return (
    <MainLayout>
      <WorkPageGrid />
      
      {/* Selected Clients Section */}
      <div className="mt-16">
        <SelectedClients />
      </div>
      
      {/* Partners and Collaborators Section */}
      <div className="mt-16 bg-white">
        <LogoCarousel />
      </div>
    </MainLayout>
  );
}
