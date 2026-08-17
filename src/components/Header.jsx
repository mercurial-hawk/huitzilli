import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

        <Link className="brand" to="/" aria-label="Huitzilli Cultural Expression, home" onClick={closeNav}>
          <img className="brand__logo" src={logoDark} alt="Huitzilli Cultural Expression" height="30" width="70" />
        </Link>

        <nav className="nav" id="nav" aria-label="Main">
          <ul className="nav__list">
            <li><Link className="nav__link" to="/#how-we-help" onClick={closeNav}>How We Help</Link></li>
            <li><Link className="nav__link" to="/#approach" onClick={closeNav}>Our Approach</Link></li>
            <li><Link className="nav__link" to="/#insights" onClick={closeNav}>Insights</Link></li>
            <li><Link className="nav__link" to="/#readiness" onClick={closeNav}>Readiness Check</Link></li>
            <li><Link className="nav__link" to="/#about" onClick={closeNav}>About</Link></li>
            <li><Link className="nav__link" to="/about-us" onClick={closeNav}>About Us</Link></li>
          </ul>

          <div className="lang" role="group" aria-label="Language">
            <a href="#" aria-current="true" lang="en">EN</a><span aria-hidden="true">/</span>
            <a href="#" lang="es">ES</a><span aria-hidden="true">/</span>
            <a href="#" lang="pt">PT</a>
          </div>

          <Link className="btn btn--primary btn--sm" to="/#book" onClick={closeNav}>Start a Conversation</Link>
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