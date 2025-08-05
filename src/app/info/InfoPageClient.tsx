"use client";

import MainLayout from '@/components/layouts/main-layout';
import Header from '@/components/Header';

export default function InfoPageClient() {
  const experience = [
    {
      company: 'MADE BY GEANEY',
      role: 'FOUNDER & LEAD DESIGNER',
      year: '2020–PRESENT',
    },
    {
      company: 'DROPBOX',
      role: 'PRODUCT DESIGN INTERN',
      year: '2024',
    },
    {
      company: 'HAPPIED',
      role: 'UX/UI DESIGNER',
      year: '2022–2023',
    },
  ];

  const awards = [
    {
      name: 'HIDA DESIGN EXCELLENCE AWARD',
      year: '2025',
    },
    {
      name: 'HIDA DESIGN EXCELLENCE AWARD',
      year: '2024',
    },
    {
      name: 'HIDA DESIGN EXCELLENCE AWARD',
      year: '2021',
    },
  ];

  const education = [
    {
      institution: 'ARIZONA STATE UNIVERSITY',
      degree: '',
      year: '2021–2025',
    },
    {
      institution: 'CHANDLER-GILBERT COMMUNITY COLLEGE',
      degree: '',
      year: '2018–2021',
    },
  ];

  return (
    <MainLayout>
      <Header showDescription={false} />
      {/* Divider line */}
      <div className="w-full pt-10">
        <div className="border-t border-gray-200"></div>
      </div>
      <div className="pr-6 md:pr-12 lg:pr-24">
        <div className="w-full pl-6 pt-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column - Bio */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">
                  I'm Miggy Fajardo, a digital product designer who believes technology should be simple, intuitive, and inspiring. Born in the Philippines and now based in Arizona, I'm always searching for ways to turn ideas into beautiful experiences that reduce friction and enrich daily life.
                </p>
                <p className="text-xl leading-relaxed">
                  I'm a maker and a dreamer. My love for creating has also led me to explore various mediums from 3D visualization, prototyping, interaction design, digital art, and most recently, motion design. If I can imagine it, I'll find a way to make it.
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

            {/* Right Column - Experience, Awards, Education */}
            <div className="lg:w-1/2 space-y-12 lg:pl-4">
              {/* Experience Section */}
              <div>
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-4 text-sm font-normal text-gray-500 uppercase tracking-wider mb-2">
                    <div>COMPANY</div>
                    <div>ROLE</div>
                    <div className="text-right">YEAR</div>
                  </div>
                  <div className="border-b border-gray-200"></div>
                </div>
                <div className="space-y-2">
                  {experience.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                      <div className="text-sm">{item.company}</div>
                      <div className="text-sm text-gray-600">{item.role}</div>
                      <div className="text-xs text-gray-500 text-right">{item.year}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards Section */}
              <div>
                <div className="mb-4">
                  <h2 className="text-sm font-normal uppercase tracking-wider text-gray-500 mb-2">Awards</h2>
                  <div className="border-b border-gray-200"></div>
                </div>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div key={index} className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                      <h3 className="text-sm font-normal">{award.name}</h3>
                      <span className="text-xs text-gray-500">{award.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <div className="mb-4">
                  <h2 className="text-sm font-normal uppercase tracking-wider text-gray-500 mb-2">Education</h2>
                  <div className="border-b border-gray-200"></div>
                </div>
                <div className="space-y-3">
                  {education.map((item, index) => (
                    <div key={index} className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                      <div>
                        <h3 className="text-sm font-normal">{item.institution}</h3>
                        {item.degree && <p className="text-xs text-gray-600 mt-0.5">{item.degree}</p>}
                      </div>
                      <span className="text-xs text-gray-500">{item.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
