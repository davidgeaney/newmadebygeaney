"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
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
      
      // Format date as Month Day, Year (e.g., July 16th, 2025)
      const options: Intl.DateTimeFormatOptions = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      };
      const formattedDate = dublinTime.toLocaleDateString('en-IE', options);
      // Add 'th', 'st', 'nd', 'rd' to the day
      const day = dublinTime.getDate();
      const suffix = (day >= 4 && day <= 20) || (day >= 24 && day <= 30) ? 'th' : 
                   (day % 10 === 1) ? 'st' : 
                   (day % 10 === 2) ? 'nd' : 
                   (day % 10 === 3) ? 'rd' : 'th';
      setCurrentDate(formattedDate.replace(/(\d+)/, `$1${suffix}`));
      
      // Check if within working hours (9 AM to 6 PM Dublin time)
      const currentHour = dublinTime.getHours();
      setIsAvailable(currentHour >= 9 && currentHour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Add a ref for the footer element if needed for intersection observer
  // const footerRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false
  });

  const [showCookieSettings, setShowCookieSettings] = useState(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter signup:', formData);
  };

  const handleCookieToggle = (type: 'essential' | 'analytics') => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleCookieAction = (action: 'optOut' | 'accept' | 'save') => {
    switch (action) {
      case 'optOut':
        setCookiePreferences({ essential: true, analytics: false });
        setShowCookieSettings(false);
        break;
      case 'accept':
        setCookiePreferences({ essential: true, analytics: true });
        setShowCookieSettings(false);
        break;
      case 'save':
        setShowCookieSettings(false);
        break;
    }
  };

  return (
    <footer className="relative bg-white text-black py-10 -mt-px z-0">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="px-4 md:px-6">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Contact Info */}
            <div className="space-y-3 mb-8 lg:mb-0 lg:pr-8">
              <div className="group cursor-default">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-sm font-regular text-black">Donegal</span>
                    <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {isAvailable ? "We're here to help :)" : "Sorry we're asleep :("}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-mono text-black">
                  {currentTime} GMT+1
                </p>
                <p className="text-sm font-mono text-black tracking-tighter">
                  {currentDate}
                </p>
                <a href="tel:+3533793342" className="text-sm text-black block mt-2 mb-2 hover:text-gray-500 transition-colors duration-200">+353 379 3342</a>
                <p className="text-sm text-black">Falcarragh</p>
                <p className="text-sm text-black">Donegal, Ireland</p>
              </div>
            </div>

            {/* Right side - Sections */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 lg:flex lg:flex-row lg:space-x-12 lg:ml-auto lg:pl-16 w-full lg:w-auto">
              {/* Business */}
              <div>
                <h3 className="text-xs font-regular text-gray-500 mb-1">Business</h3>
                <ul className="space-y-0.5 text-xs text-black">
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Careers</a></li>
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Terms</a></li>
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Privacy</a></li>
                </ul>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-xs font-regular text-gray-500 mb-1">Links</h3>
                <ul className="space-y-0.5 text-xs text-black">
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Instagram</a></li>
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Facebook</a></li>
                </ul>
              </div>

              {/* Playlists */}
              <div>
                <h3 className="text-xs font-regular text-gray-500 mb-1">Playlists</h3>
                <ul className="space-y-0.5 text-xs text-black">
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Hardgroove</a></li>
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Hard House</a></li>
                  <li><a href="#" className="hover:text-gray-500 transition-colors duration-200">Low Poly Mix</a></li>
                </ul>
              </div>

              {/* Copyright and Flag */}
              <div>
                <h3 className="text-xs font-regular text-gray-500 mb-1">&copy; 2025</h3>
                <div className="flex items-center space-x-3">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    title="Ireland"
                    aria-label="Ireland"
                  >
                    <span className="text-xs">🇮🇪</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Made By Geaney SVG */}
          <div className="mt-12 md:mt-16 w-full">
            <div className="w-full max-w-4xl mx-auto px-2 md:px-4">
              <div className="relative w-full h-auto">
                <img 
                  src="/images/MADEBYGEANEY.svg" 
                  alt="Made By Geaney" 
                  className="w-full h-auto"
                  width="2000"
                  height="200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}