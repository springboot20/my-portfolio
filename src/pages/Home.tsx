import { Navigation } from '../components/navigation/Navigation';
import { Fragment, useState } from 'react';
import { DetailPanel } from '../components/panels/DetailPanel';
import { HeroSection } from '../components/Hero';
import { Recommendation } from '../components/Recommendation';
import { Education } from '../components/Education';
import { ScrollReveal } from '../components/ScrollReveal';
import { Portfolio } from '../components/Portfolio';

export const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      {/* Navigation menu begins */}
      <Navigation setOpen={setOpen} />
      {/* Navigation menu ends */}

      {/* Detail menu panel begins */}
      <ScrollReveal>
        <DetailPanel open={open} setOpen={setOpen} />
      </ScrollReveal>
      {/* Detail menu panel ends */}

      {/* Hero section begins */}
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      {/* Hero section ends */}

      {/* Recommendation section begins */}
      <ScrollReveal>
        <Recommendation />
      </ScrollReveal>
      {/* Recommendation section ends */}

      {/* Education section begins */}
      <ScrollReveal>
        <Education />
      </ScrollReveal>
      {/* Education section ends */}

      {/* Education section begins */}
      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>
      {/* Education section ends */}
    </Fragment>
  );
};
