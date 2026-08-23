import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import CredibilityStrip from '../components/CredibilityStrip.jsx'
import InvisibleChallenges from '../components/InvisibleChallenges.jsx'
import ServicesOverview from '../components/ServicesOverview.jsx'
import HowWeHelp from '../components/HowWeHelp.jsx'
import Approach from '../components/Approach.jsx'
import Outcomes from '../components/Outcomes.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Alejandra from '../components/Alejandra.jsx'
import ReadinessCheck from '../components/ReadinessCheck.jsx'
import FAQ from '../components/FAQ.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <Hero />
      <CredibilityStrip />
      <InvisibleChallenges />
      <ServicesOverview />
      <HowWeHelp />
      <Approach />
      <Outcomes />
      <Testimonials />
      <Alejandra />
      <ReadinessCheck />
      <FAQ />
      <Contact />
    </>
  )
}