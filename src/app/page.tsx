import HeroSection from '@/components/sections/hero';
import WorkSection from '@/components/sections/work';
import ServicesSection from '@/components/sections/services';
import FeedSection from '@/components/sections/feed';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow space-y-16">
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <FeedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}