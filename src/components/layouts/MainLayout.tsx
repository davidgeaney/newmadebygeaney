"use client";

import { ReactNode, useEffect, useRef } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current || !footerRef.current) return;
      
      const mainRect = mainRef.current.getBoundingClientRect();
      
      // When the bottom of the main content reaches the bottom of the viewport
      if (mainRect.bottom <= window.innerHeight) {
        footerRef.current.style.transform = 'translateY(0)';
      } else {
        footerRef.current.style.transform = 'translateY(100%)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main 
        ref={mainRef}
        className="relative z-10 bg-white min-h-screen"
      >
        {children}
        {/* Spacer to ensure content isn't hidden behind fixed footer */}
        <div className="h-[100vh]"></div>
      </main>
      
      {/* Fixed Footer */}
      <div 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full z-0 transition-transform duration-500 ease-out"
        style={{
          transform: 'translateY(100%)',
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
