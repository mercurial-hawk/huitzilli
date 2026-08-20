import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurServices from './pages/OurServices.jsx'
import CulturalCompass from './pages/CulturalCompass.jsx'
import CulturalApapacho from './pages/CulturalApapacho.jsx'
import OurCeo from './pages/OurCeo.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip" href="#main">Skip to content</a>

      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/cultural-compass" element={<CulturalCompass />} />
          <Route path="/cultural-apapacho" element={<CulturalApapacho />} />
          <Route path="/our-ceo" element={<OurCeo />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}