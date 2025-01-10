// import { Navigation } from "../components/navigation/Navigation";
import { Fragment } from "react";
import { HeroSection } from "../components/Hero";
import { Recommendation } from "../components/Recommendation";
import { ScrollReveal } from "../components/ScrollReveal";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import ServiceSection from "../components/Service";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <Fragment>
      {/* Hero section begins */}
      <HeroSection />
      {/* Hero section ends */}

      {/* service section begins */}
        <ServiceSection />
      {/* service section ends */}

      {/* Recommendation section begins */}
      <ScrollReveal>
        <Recommendation />
      </ScrollReveal>
      {/* Recommendation section ends */}

      {/* Portfolio section begins */}
      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>
      {/* Portfolio section ends */}

      {/* Contact section begins */}
        <Contact />
      {/* Contact section ends */}

      <Footer />
    </Fragment>
  );
};
