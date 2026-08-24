import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoDark from '../assets/logo-dark.png'
import { EN_TO_ES, ES_TO_EN } from '../i18n-routes.js'

const LABELS = {
  en: {
    home: 'Home', about: 'About Us', services: 'What We Do',
    compass: 'Cultural Compass', apapacho: 'Cultural Apapacho', ceo: 'Our CEO',
  },
  es: {
    home: 'Inicio', about: 'Acerca de Nosotros', services: 'Qué Hacemos',
    compass: 'Brújula Cultural', apapacho: 'Cultural Apapacho', ceo: 'Nuestra CEO',
  },
}

export default function Header() {
  const [isStuck, setIsStuck] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const isEs = pathname.startsWith('/es')
  const t = isEs ? LABELS.es : LABELS.en

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeNav = () => setIsOpen(false)

  const p = (enPath) => (isEs ? EN_TO_ES[enPath] : enPath)
  const homeTo = p('/')
  const enTarget = ES_TO_EN[pathname] || '/'
  const esTarget = EN_TO_ES[pathname] || '/es'

  return (
    <header className={`header${isStuck ? ' is-stuck' : ''}${isOpen ? ' is-open' : ''}`} id="header">
      <div className="wrap header__inner">

        <Link className="brand" to={homeTo} aria-label="Huitzilli Cultural Expression, home" onClick={closeNav}>
          <img className="brand__logo" src={logoDark} alt="Huitzilli Cultural Expression" height="30" width="70" />
        </Link>

        <nav className="nav" id="nav" aria-label="Main">
          <ul className="nav__list">
            <li><Link className="nav__link" to={homeTo} onClick={closeNav}>{t.home}</Link></li>
            <li><Link className="nav__link" to={p('/about-us')} onClick={closeNav}>{t.about}</Link></li>
            <li><Link className="nav__link" to={p('/our-services')} onClick={closeNav}>{t.services}</Link></li>
            <li><Link className="nav__link" to={p('/cultural-compass')} onClick={closeNav}>{t.compass}</Link></li>
            <li><Link className="nav__link" to={p('/cultural-apapacho')} onClick={closeNav}>{t.apapacho}</Link></li>
            <li><Link className="nav__link" to={p('/our-ceo')} onClick={closeNav}>{t.ceo}</Link></li>
          </ul>

          <div className="lang" role="group" aria-label="Language">
            <Link to={enTarget} aria-current={!isEs ? 'true' : undefined} lang="en" onClick={closeNav}>EN</Link><span aria-hidden="true">/</span>
            <Link to={esTarget} aria-current={isEs ? 'true' : undefined} lang="es" onClick={closeNav}>ES</Link>
          </div>
        </nav>

        <button
          className="burger"
          id="burger"
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="nav"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>

      </div>
    </header>
  )
}
