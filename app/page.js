import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Lifestyle from '@/components/sections/Lifestyle';
import Amenities from '@/components/sections/Amenities';
import Residences from '@/components/sections/Residences';
import SafetyCare from '@/components/sections/SafetyCare';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Enquiry from '@/components/sections/Enquiry';
import Film from '@/components/sections/Film';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Lifestyle />
        <Film />
        <Amenities />
        <Residences />
        <SafetyCare />
        <Gallery />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
