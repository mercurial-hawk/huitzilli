import { useEffect, useState } from 'react'
import logoDark from '../assets/logo-dark.png'

export default function Header() {
  const [isStuck, setIsStuck] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeNav = () => setIsOpen(false)

  return (
    <header className={`header${isStuck ? ' is-stuck' : ''}${isOpen ? ' is-open' : ''}`} id="header">
      <div className="wrap header__inner">

        <a className="brand" href="#" aria-label="Huitzilli Cultural Expression, home">
          <img className="brand__logo" src={logoDark} alt="Huitzilli Cultural Expression" height="30" width="70" />
        </a>

        <nav className="nav" id="nav" aria-label="Main">
          <ul className="nav__list">
            <li><a className="nav__link" href="#how-we-help" onClick={closeNav}>How We Help</a></li>
            <li><a className="nav__link" href="#approach" onClick={closeNav}>Our Approach</a></li>
            <li><a className="nav__link" href="#insights" onClick={closeNav}>Insights</a></li>
            <li><a className="nav__link" href="#readiness" onClick={closeNav}>Readiness Check</a></li>
            <li><a className="nav__link" href="#about" onClick={closeNav}>About</a></li>
          </ul>

          <div className="lang" role="group" aria-label="Language">
            <a href="#" aria-current="true" lang="en">EN</a><span aria-hidden="true">/</span>
            <a href="#" lang="es">ES</a><span aria-hidden="true">/</span>
            <a href="#" lang="pt">PT</a>
          </div>

          <a className="btn btn--primary btn--sm" href="#book" onClick={closeNav}>Start a Conversation</a>
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
