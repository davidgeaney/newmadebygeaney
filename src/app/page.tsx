import HeroSection from '@/components/sections/hero';
import WorkSection from '@/components/sections/work';
import ServicesSection from '@/components/sections/services';
import ProcessSection from '@/components/sections/process';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}