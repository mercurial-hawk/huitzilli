import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'
import hummingbird from '../assets/hummingbird.png'

const VALUES = [
  {
    title: 'Our Mission',
    body: `Our mission is to foster cultural awareness and understanding in a world that is
      increasingly interconnected. We transform language education and cross-cultural training
      by integrating Peace Education techniques into all aspects of our programs. Our tailored
      blend of language courses, cross-cultural training, and workshops is designed for
      companies, organizations, expatriates, diplomats, and families, guiding them in navigating
      and embracing diverse cultural landscapes.`,
  },
  {
    title: 'Our Vision',
    body: `We believe that cultural immersion not only accelerates language learning but also
      promotes cooperation, respect, and peace. Our approach, which is rooted in culture,
      humanism, and creativity, offers an immersive experience that strengthens identity and
      belonging. By creating safe spaces for open dialogue, empathy, and collaboration, we
      support the acculturation process, aiming to create a positive impact and contribute to
      global success while addressing sociocultural tensions.`,
  },
  {
    title: 'Our Values',
    body: `The name "Huitzilli," meaning "hummingbird" in Nahuatl, profoundly reflects our
      values and mission. In Mexican indigenous cultures, the hummingbird is more than a bird;
      it is a sacred messenger and a symbol of resilience and connection. For the Aztecs, it was
      linked to Huitzilopochtli, representing the quest for destiny and the ceaseless movement of
      the human heart toward its purpose. This symbolism aligns with our belief that
      understanding and embracing cultural roots is essential for personal and collective growth.
      Similarly, the Maya viewed the hummingbird as a vital link between worlds, emphasizing its
      role in communication and connection. At Huitzilli Cultural Expression, we draw inspiration
      from these meanings to enrich our programs, bridging diverse perspectives and fostering
      cultural awareness, much like the hummingbird connects different realms.`,
  },
]

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="section" style={{ paddingBottom: 'clamp(2.5rem,4vw,4rem)' }} aria-labelledby="aboutus-title">
        <div className="wrap hero__grid" style={{ alignItems: 'center' }}>

          <Reveal className="hero__copy">
            <p className="eyebrow">Who we are</p>
            <h1 className="hero__title" id="aboutus-title">
              Cultural immersion rooted in <em>creativity</em>.
            </h1>
            <p className="lead hero__lead">
              Huitzilli blends language education, cross-cultural training and Peace Education
              into a single, human approach to understanding — designed for companies,
              expatriates, diplomats and families navigating diverse cultural landscapes.
            </p>
          </Reveal>

          <Reveal className="hero__media">
            <img
              className="hero__photo"
              src={hummingbird}
              alt="A broad-billed hummingbird in flight."
              width="640"
              height="426"
              loading="lazy"
              style={{ width: '128%', maxWidth: 'none' }}
            />
          </Reveal>

        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="help__list" style={{ borderTopColor: 'rgba(26,26,26,.16)' }}>
            {VALUES.map((v) => (
              <Reveal as="article" className="help__row" key={v.title} style={{ gridTemplateColumns: '.6fr 1.4fr' }}>
                <h2 className="help__name" style={{ fontSize: 'var(--t-h3)' }}>{v.title}</h2>
                <p className="help__v" style={{ maxWidth: '68ch' }}>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}