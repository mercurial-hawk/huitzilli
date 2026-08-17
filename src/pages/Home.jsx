import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import CredibilityStrip from '../components/CredibilityStrip.jsx'
import InvisibleChallenges from '../components/InvisibleChallenges.jsx'
import QuietWithdrawal from '../components/QuietWithdrawal.jsx'
import HowWeHelp from '../components/HowWeHelp.jsx'
import Approach from '../components/Approach.jsx'
import WorkshopExperience from '../components/WorkshopExperience.jsx'
import Outcomes from '../components/Outcomes.jsx'
import Proof from '../components/Proof.jsx'
import Alejandra from '../components/Alejandra.jsx'
import InsightsAndMagnet from '../components/InsightsAndMagnet.jsx'
import ReadinessCheck from '../components/ReadinessCheck.jsx'
import FAQ from '../components/FAQ.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

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
      <QuietWithdrawal />
      <HowWeHelp />
      <Approach />
      <WorkshopExperience />
      <Outcomes />
      <Proof />
      <Alejandra />
      <InsightsAndMagnet />
      <ReadinessCheck />
      <FAQ />
      <FinalCTA />
    </>
  )
}