import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CredibilityStrip from './components/CredibilityStrip.jsx'
import InvisibleChallenges from './components/InvisibleChallenges.jsx'
import QuietWithdrawal from './components/QuietWithdrawal.jsx'
import HowWeHelp from './components/HowWeHelp.jsx'
import Approach from './components/Approach.jsx'
import WorkshopExperience from './components/WorkshopExperience.jsx'
import Outcomes from './components/Outcomes.jsx'
import Proof from './components/Proof.jsx'
import Alejandra from './components/Alejandra.jsx'
import InsightsAndMagnet from './components/InsightsAndMagnet.jsx'
import ReadinessCheck from './components/ReadinessCheck.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <Header />

      <main id="main">
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
      </main>

      <Footer />
    </>
  )
}
