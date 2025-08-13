import React from 'react';

const AboutInfo = () => {
  return (
    <div className="w-full pt-6 pl-6">
      <div>
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-6">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        <p className="text-xl text-black max-w-lg leading-relaxed">
          <span className="text-gray-600">About</span> We're a creative studio focused on building meaningful digital experiences that make an impact.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              I'm Miggy Fajardo, a digital product designer who believes technology should be simple, intuitive, and inspiring. 
              Born in the Philippines and now based in Arizona, I'm always searching for ways to turn ideas into beautiful 
              experiences that reduce friction and enrich daily life.
            </p>
            <p className="text-xl leading-relaxed">
              I'm a maker and a dreamer. My love for creating has also led me to explore various mediums from 3D visualization, 
              prototyping, interaction design, digital art, and most recently, motion design. If I can imagine it, I'll find a way to make it.
            </p>
            <p className="text-xl leading-relaxed">
              When I'm not designing, I'm usually trying to survive the Arizona heat, cooking at home, or attempting to revive my gaming career.
            </p>
            <div className="pt-4">
              <p className="mb-4">Open to full time opportunities.</p>
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-6">
                <a 
                  href="/resume.pdf" 
                  className="text-sm hover:underline flex items-center" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>→</span>
                  <span className="ml-2">Resume</span>
                </a>
                <a 
                  href="mailto:hello@miggyfajardo.com" 
                  className="text-sm hover:underline flex items-center"
                >
                  <span>→</span>
                  <span className="ml-2">Say hello@miggyfajardo.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-12 lg:pl-4">
          {/* Experience Section */}
          <div>
            <div className="mb-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-normal text-gray-500 uppercase tracking-wider mb-2">
                <div>COMPANY</div>
                <div>ROLE</div>
                <div className="text-right">YEAR</div>
              </div>
              <div className="border-b border-gray-100 pb-3" style={{ borderBottomWidth: '0.5px' }}></div>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                <div className="text-sm">MADE BY GEANEY</div>
                <div className="text-sm text-gray-600">FOUNDER & LEAD DESIGNER</div>
                <div className="text-xs text-gray-500 text-right">2020–PRESENT</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                <div className="text-sm">DROPBOX</div>
                <div className="text-sm text-gray-600">PRODUCT DESIGN INTERN</div>
                <div className="text-xs text-gray-500 text-right">2024</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                <div className="text-sm">HAPPIED</div>
                <div className="text-sm text-gray-600">UX/UI DESIGNER</div>
                <div className="text-xs text-gray-500 text-right">2022–2023</div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <div className="mb-4">
              <h2 className="text-sm font-normal uppercase tracking-wider text-gray-500 mb-2">Awards</h2>
              <div className="border-b border-gray-100 pb-3" style={{ borderBottomWidth: '0.5px' }}></div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                <h3 className="text-sm font-normal">HIDA DESIGN EXCELLENCE AWARD</h3>
                <span className="text-xs text-gray-500">2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
