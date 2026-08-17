import logoWhite from '../assets/logo-white.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">

          <div>
            <a className="brand" href="#">
              <img className="brand__logo brand__logo--lg" src={logoWhite} alt="Huitzilli Cultural Expression" height="36" width="83" />
            </a>
            <p className="footer__tag">
              <em>Huitzilli</em> means hummingbird in Nahuatl — movement between worlds, and the
              patience to stay still long enough to understand one.
            </p>
          </div>

          <div>
            <h4>How we help</h4>
            <ul>
              <li><a href="#how-we-help">Multicultural Team Integration</a></li>
              <li><a href="#how-we-help">Global Mobility &amp; Acculturation</a></li>
              <li><a href="#how-we-help">Culturally Aware Leadership</a></li>
              <li><a href="#how-we-help">Language &amp; Cultural Fluency</a></li>
              <li><a href="#how-we-help">Research &amp; Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#about">About Alejandra</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#book">Book a Consultation</a></li>
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
