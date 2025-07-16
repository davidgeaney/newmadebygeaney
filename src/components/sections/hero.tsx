'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Set timezone to Dublin/Ireland
      const dublinTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Dublin"}));
      
      // Format time as HH:MM:SS
      const hours = dublinTime.getHours().toString().padStart(2, '0');
      const minutes = dublinTime.getMinutes().toString().padStart(2, '0');
      const seconds = dublinTime.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
      
      // Check if within working hours (9 AM to 6 PM Dublin time)
      const currentHour = dublinTime.getHours();
      setIsAvailable(currentHour >= 9 && currentHour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Feed', href: '#feed' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <section className="bg-white mb-32 py-10 relative">
      {/* Start Project Link - Top right (hidden on mobile) */}
      <div className="absolute top-8 right-8 z-10 hidden md:block">
        <Link 
          href="/contact"
          className="group relative text-sm font-medium text-black hover:text-black transition-all duration-300 flex items-center gap-1"
        >
          <span className="relative overflow-hidden h-5 flex items-center">
            <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
              Start your project
            </span>
            <span className="absolute left-0 top-full w-full text-black transform group-hover:-translate-y-full transition-transform duration-300">
              Start your project
            </span>
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
      
      {/* Navigation - Fixed bottom on mobile, fixed top on larger screens */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:bottom-auto md:top-4">
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 shadow-md">
          <div className="flex items-center space-x-4 md:space-x-6 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm text-black hover:text-black transition-all duration-300 h-full flex items-center overflow-hidden"
              >
                <span className="relative overflow-hidden h-5 flex items-center">
                  <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                    {link.name}
                  </span>
                  <span className="absolute left-0 top-full w-full text-black transform group-hover:-translate-y-full transition-transform duration-300">
                    {link.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="w-full">
        <div className="px-4 md:px-6">
          <h1 className="text-4xl font-bold text-black mb-2 tracking-tight">
            MADE BY GEANEY
          </h1>
          <div className="flex items-center space-x-2 mb-4 cursor-default">
            <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm font-medium text-gray-700">Donegal</span>
            <div className="relative group h-[20px] flex items-center">
              <span className="inline-block text-sm font-mono text-gray-700 transition-opacity duration-200 group-hover:opacity-0 min-w-[100px]">
                {currentTime} GMT+1
              </span>
              <span className="absolute left-0 text-xs font-mono text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {isAvailable ? "Here to help :)" : "We're asleep :("}
              </span>
            </div>
          </div>
          <p className="text-xl text-black max-w-lg leading-relaxed">
            A globally operating digital design studio, offering purposeful design, goal orientated development and dependable growth.
          </p>
        </div>
      </div>
    </section>
  )
}