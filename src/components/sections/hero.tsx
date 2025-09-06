'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { untitledSans } from '@/app/fonts';

interface HeroSectionProps {
  showDescription?: boolean;
}

export default function HeroSection({ 
  showDescription = false 
}: HeroSectionProps = {}) {
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

  return (
    <div className="fixed top-0 left-0 right-0 h-screen bg-white z-10 font-untitled-sans flex flex-col">
      <div className="w-full mx-auto pl-4 pt-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <Link href="/" className="block mb-2 hover:opacity-80 transition-opacity w-56 md:w-72">
              <img 
                src="/images/logo.svg" 
                alt="Made By Geaney" 
                className="w-full h-auto"
                width={288}
                height={96}
              />
            </Link>
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
            {showDescription && (
              <p className="text-xl text-black max-w-lg">
                A local web design agency delivering fully custom websites, combining rapid development with strong performance.
              </p>
            )}
          </div>
          
          {/* Start Project CTA */}
          <div className="pr-4">
            <Link 
              href="/contact"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden shrink-0"
            >
              <span>Start Project</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}