import { Link, useLocation } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'
import { EN_TO_ES } from '../i18n-routes.js'

export default function Footer() {
  const { pathname } = useLocation()
  const isEs = pathname.startsWith('/es')
  const aboutUsTo = isEs ? EN_TO_ES['/about-us'] : '/about-us'
  const homeTo = isEs ? EN_TO_ES['/'] : '/'

  if (isEs) {
    return (
      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">

            <div>
              <Link className="brand" to={homeTo}>
                <img className="brand__logo brand__logo--lg" src={logoWhite} alt="Huitzilli Cultural Expression" height="36" width="83" />
              </Link>
              <p className="footer__tag">
                <em>Huitzilli</em> significa colibrí en náhuatl — movimiento entre mundos, y la
                paciencia de quedarse quieto el tiempo suficiente para entender uno.
              </p>
            </div>

            <div>
              <h4>Cómo ayudamos</h4>
              <ul>
                <li><Link to="/#how-we-help">Integración de Equipos Multiculturales</Link></li>
                <li><Link to="/#how-we-help">Movilidad Global y Aculturación</Link></li>
                <li><Link to="/#how-we-help">Liderazgo Culturalmente Consciente</Link></li>
                <li><Link to="/#how-we-help">Fluidez en Idiomas y Cultura</Link></li>
                <li><Link to="/#how-we-help">Investigación y Consultoría</Link></li>
              </ul>
            </div>

            <div>
              <h4>Empresa</h4>
              <ul>
                <li><Link to={aboutUsTo}>Acerca de Nosotros</Link></li>
                <li><Link to="/#approach">Nuestro Enfoque</Link></li>
                <li><Link to="/#about">Sobre Alejandra</Link></li>
                <li><Link to="/#contact">Agenda una Consulta</Link></li>
              </ul>
            </div>

            <div>
              <h4>Contacto</h4>
              <ul>
                <li><a href="#"><span className="ph">Correo electrónico</span></a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
                <li><span className="ph">Ciudad, México</span></li>
              </ul>
            </div>

          </div>

          <div className="footer__bottom">
            <p>© 2026 Huitzilli Cultural Expression. Todos los derechos reservados.</p>
            <p>English · Español</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">

          <div>
            <Link className="brand" to="/">
              <img className="brand__logo brand__logo--lg" src={logoWhite} alt="Huitzilli Cultural Expression" height="36" width="83" />
            </Link>
            <p className="footer__tag">
              <em>Huitzilli</em> means hummingbird in Nahuatl — movement between worlds, and the
              patience to stay still long enough to understand one.
            </p>
          </div>

          <div>
            <h4>How we help</h4>
            <ul>
              <li><Link to="/#how-we-help">Multicultural Team Integration</Link></li>
              <li><Link to="/#how-we-help">Global Mobility &amp; Acculturation</Link></li>
              <li><Link to="/#how-we-help">Culturally Aware Leadership</Link></li>
              <li><Link to="/#how-we-help">Language &amp; Cultural Fluency</Link></li>
              <li><Link to="/#how-we-help">Research &amp; Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/#approach">Our Approach</Link></li>
              <li><Link to="/#about">About Alejandra</Link></li>
              <li><Link to="/#contact">Book a Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="#"><span className="ph">Email address</span></a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><span className="ph">City, Mexico</span></li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p>© 2026 Huitzilli Cultural Expression. All rights reserved.</p>
          <p>English · Español</p>
        </div>
      </div>
    </footer>
  )
}
