"use client";

import dynamic from 'next/dynamic';
import { ReactNode } from "react";
import Footer from "@/components/sections/footer";

// Dynamically import the Navbar component with SSR disabled
const Navbar = dynamic(() => import('@/components/ui/navbar'), { 
  ssr: false 
});

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Navbar />
      <main className="flex-grow overflow-auto">
        {children}
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200">
        <Footer />
      </div>
    </div>
  );
}