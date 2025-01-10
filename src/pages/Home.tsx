import { Fragment } from "react";
import { HeroSection } from "../components/Hero";
import { Recommendation } from "../components/Recommendation";
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
        <Recommendation />
      {/* Recommendation section ends */}

      {/* Portfolio section begins */}
        <Portfolio />
      {/* Portfolio section ends */}

      {/* Contact section begins */}
        <Contact />
      {/* Contact section ends */}

      <Footer />
    </Fragment>
  );
};
