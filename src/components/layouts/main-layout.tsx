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
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}