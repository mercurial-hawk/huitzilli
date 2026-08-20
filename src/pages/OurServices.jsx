import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import bannerCall from '../assets/our-services/pexels-mikhail-nilov-7574366-1024x683.jpg'
import servicesWheel from '../assets/our-services/Our-Services-Web.png'
import bannerOnlineEdu from '../assets/our-services/Online-Edu-Banner-1024x299.png'
import iconLanguages from '../assets/our-services/6.png'
import iconFormats from '../assets/our-services/7.png'
import iconFocus from '../assets/our-services/8.png'
import iconBenefits from '../assets/our-services/9.png'
import bannerStudents from '../assets/our-services/Two-Students-reading-a-book-1024x299.jpg'
import bannerHuitzilli from '../assets/our-services/Huitzilli-1024x414.png'

const SERVICES = [
  'Language Education',
  'Cross-cultural Training',
  'Cultural Apapacho – Social Responsibility',
  'Workshops – Cultural Compass',
  'Research and Consulting',
]

const LANGUAGE_ED_ITEMS = [
  {
    icon: iconLanguages,
    title: 'Languages offered',
    text: 'Spanish, English, Portuguese, French, Dutch and Italian.',
  },
  {
    icon: iconFormats,
    title: 'Formats',
    text: 'Individual and group classes, online and in-person.',
  },
  {
    icon: iconFocus,
    title: 'Our focus',
    text: 'Peace Education techniques, cultural immersion, and an interactive, personalized curriculum.',
  },
  {
    icon: iconBenefits,
    title: 'Benefits',
    text: 'Enhance communication, foster confidence, and empower participants in multicultural environments.',
  },
]

export default function OurServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page title */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h1 className="h2">Our Services</h1>
        </div>
      </section>

      {/* Banner 1 */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerCall} alt="A person on a video call, connecting across cultures." />
      </div>

      {/* Services wheel + intro + checklist */}
      <section className="section">
        <div className="wrap split">
          <Reveal className="split__media">
            <img src={servicesWheel} alt="Diagram of Huitzilli's five service areas." style={{ width: '100%', height: 'auto' }} />
          </Reveal>

          <Reveal className="split__body">
            <p className="lead">
              At Huitzilli, our aim is to cultivate cultural awareness, foster effective learning,
              and drive global success through dynamic and personalized training solutions. Our
              services are built upon the transformative power of understanding, cooperation, and
              effective communication. We create an environment where participants can explore and
              embrace diverse perspectives, leading to meaningful global engagement.
            </p>

            <ul className="creds" style={{ marginTop: '1.8rem' }}>
              {SERVICES.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Banner 2 — Language Education */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerOnlineEdu} alt="Online language education session." />
      </div>

      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="h2">Language Education</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Linguistic education taught in a safe and inclusive environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Icon grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap icon-grid">
          {LANGUAGE_ED_ITEMS.map((item) => (
            <Reveal as="div" className="icon-grid__item" key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Banner 3 — Cross-Cultural Training */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerStudents} alt="Two students reading together." />
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal style={{ maxWidth: '78ch' }}>
            <h2 className="h2">Cross-Cultural Training</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Explore the cross-cultural training programs at Huitzilli Cultural Expression, where
              we offer Cross-Cultural Acculturation Training and Multicultural Business
              Communication Mastery.
            </p>
            <p style={{ color: 'var(--muted)', marginTop: '1.2rem' }}>
              These programs are meticulously designed to enhance intercultural awareness and
              seamlessly bridge culture and communication, maximizing their impact. By fostering
              adaptability and embracing diversity, Huitzilli guides participants through the
              intricacies of global interactions, cultivating meaningful connections and enriching
              their experience through seamless acculturation processes.
            </p>
            <p style={{ color: 'var(--muted)', marginTop: '1.2rem' }}>
              Utilizing Peace Education techniques, we create a nurturing and inclusive learning
              environment that allows participants to deeply connect with local heritage,
              traditions, and customs. The programs are tailored to equip individuals with the
              knowledge and skills essential for thriving in multicultural settings.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="wrap"><hr style={{ border: 0, borderTop: '1px solid rgba(26,26,26,.14)', margin: '1rem 0' }} /></div>

      {/* Banner 4 — centered */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={bannerHuitzilli} alt="Huitzilli Cultural Expression." style={{ objectFit: 'contain', background: 'var(--sand)' }} />
      </div>

      {/* Highlight box */}
      <section className="section">
        <div className="wrap">
          <Reveal className="highlight-box">
            <h3>Cross-Cultural Acculturation Training</h3>
            <p>
              The training is tailored to the specific country where participants are relocating —
              whether it's Mexico, Brazil, Colombia, Ecuador, the Dominican Republic, or any other
              nation in the region. This program delves into the unique culture of the destination
              country, covering its history, festivities, holidays, customs, cuisine, and helpful
              local facts. The training combines online sessions with immersive in-person
              experiences, allowing participants to interact with locals and truly engage with the
              culture — facilitating a smoother transition.
            </p>
          </Reveal>

          <p className="small" style={{ marginTop: '2rem' }}>
            <span className="ph">Pending: puzzle-piece diagram (Cultural insights / Adaptability / Connect / Effective communication)</span>
          </p>
        </div>
      </section>
    </>
  )
}