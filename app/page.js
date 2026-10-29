import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Highlights from '@/components/sections/Highlights';
import Project from '@/components/sections/Project';
import Living from '@/components/sections/Living';
import Day from '@/components/sections/Day';
import Film from '@/components/sections/Film';
import Residences from '@/components/sections/Residences';
import Stories from '@/components/sections/Stories';
import Gallery from '@/components/sections/Gallery';
import AboutDfpl from '@/components/sections/AboutDfpl';
import Location from '@/components/sections/Location';
import VisitBand from '@/components/sections/VisitBand';
import Enquiry from '@/components/sections/Enquiry';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Highlights />
        <Project />
        <Living />
        <Day />
        <Film />
        <Residences />
        <Stories />
        <Gallery />
        <AboutDfpl />
        <Location />
        <VisitBand />
        <Enquiry />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
