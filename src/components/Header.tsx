'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  showDescription?: boolean;
  description?: string;
}

export default function Header({ showDescription = true, description }: HeaderProps) {
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
    <div className="w-full pt-4 pl-4">
      <div className="relative">
        <Link href="/" className="block mb-2 hover:opacity-80 transition-opacity w-48 md:w-64">
          <img 
            src="/images/logo.svg" 
            alt="Made By Geaney" 
            className="w-full h-auto"
            width={264}
            height={88}
          />
        </Link>
        {showDescription && (
          <p className="text-xl font-book text-black max-w-lg leading-relaxed mt-4">
            {description || "We design and build fully custom websites that look sharp, load fast, and are built to convert the right visitors into customers."}
          </p>
        )}
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
          <p className="text-xl font-book text-black max-w-lg leading-relaxed">
            A globally operating digital design studio, offering purposeful design, goal orientated development and dependable growth.
          </p>
        )}
      </div>
    </div>
  );
}
