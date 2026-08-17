import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip" href="#main">Skip to content</a>

      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}