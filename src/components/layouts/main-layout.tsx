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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <div className="border-t border-gray-200">
        <Footer />
      </div>
    </div>
  );
}