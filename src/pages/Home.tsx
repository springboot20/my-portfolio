import { Navigation } from '../components/navigation/Navigation'
import { Fragment, useState } from 'react'
import { DetailPanel } from '../components/panels/DetailPanel'
import { HeroSection } from '../components/Hero'
import { Recommendation } from '../components/Recommendation'
import { ScrollReveal } from '../components/ScrollReveal'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { About } from '../components/About'

export const Home = () => {
  const [open, setOpen] = useState<boolean>(false)

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

      {/* Hero section begins */}
      <ScrollReveal>
        <About />
      </ScrollReveal>
      {/* Hero section ends */}

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
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      {/* Contact section ends */}
    </Fragment>
  )
}
