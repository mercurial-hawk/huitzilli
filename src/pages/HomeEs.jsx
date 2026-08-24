import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroEs from '../components/HeroEs.jsx'
import InvisibleChallengesEs from '../components/InvisibleChallengesEs.jsx'
import ServicesOverviewEs from '../components/ServicesOverviewEs.jsx'
import HowWeHelpEs from '../components/HowWeHelpEs.jsx'
import ApproachEs from '../components/ApproachEs.jsx'
import OutcomesEs from '../components/OutcomesEs.jsx'
import TestimonialsEs from '../components/TestimonialsEs.jsx'
import AlejandraEs from '../components/AlejandraEs.jsx'
import ReadinessCheckEs from '../components/ReadinessCheckEs.jsx'
import FAQEs from '../components/FAQEs.jsx'
import ContactEs from '../components/ContactEs.jsx'

export default function HomeEs() {
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
      <HeroEs />
      <InvisibleChallengesEs />
      <ServicesOverviewEs />
      <HowWeHelpEs />
      <ApproachEs />
      <OutcomesEs />
      <TestimonialsEs />
      <AlejandraEs />
      <ReadinessCheckEs />
      <FAQEs />
      <ContactEs />
    </>
  )
}
