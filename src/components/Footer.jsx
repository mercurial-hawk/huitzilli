import { Link } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'

export default function Footer() {
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
          <p>English · Español · Português</p>
        </div>
      </div>
    </footer>
  )
}