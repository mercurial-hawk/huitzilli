import { useEffect } from 'react'
import Reveal from '../hooks/Reveal.jsx'

import banner from '../assets/cultural-compass/banner.jpg'
import iconWhatWeDo from '../assets/cultural-compass/1.png'
import iconWhyItMatters from '../assets/cultural-compass/2.png'
import iconOurApproach from '../assets/cultural-compass/3.png'
import iconSteps from '../assets/cultural-compass/4.png'
import iconLearning from '../assets/cultural-compass/5f.png'

import imgGentrification from '../assets/cultural-compass/Community.png'
import imgSustainable from '../assets/cultural-compass/1 (1).png'
import imgCustomerService from '../assets/cultural-compass/blake-wisz-GFrBMipOd_E-unsplash-scaled.jpg'
import imgHealthcare from '../assets/cultural-compass/pexels-rdne-6519930-scaled.jpg'
import imgUniqueness from '../assets/cultural-compass/vonecia-carswell-0aMMMUjiiEQ-unsplash-scaled.jpg'
import imgHeritage from '../assets/cultural-compass/3.jpg'
import imgLeadership from '../assets/cultural-compass/pexels-hillaryfox-1595385-scaled.jpg'
import imgFeedback from '../assets/cultural-compass/pexels-yankrukov-7691723-scaled.jpg'
import imgConflict from '../assets/cultural-compass/pexels-fauxels-3184306-scaled.jpg'
import imgCommunication from '../assets/cultural-compass/pexels-artempodrez-5716037-scaled.jpg'
import imgNegotiation from '../assets/cultural-compass/2 (1).png'

const IMPACT_ITEMS = [
  {
    icon: iconWhatWeDo,
    title: 'What we do:',
    text: 'We train teams and leaders to successfully navigate multicultural environments, tailored to social and organizational needs.',
  },
  {
    icon: iconWhyItMatters,
    title: 'Why it matters:',
    list: [
      'Enhances communication & collaboration',
      'Strengthens inclusive and high-performing teams',
      'Reduces conflicts & improves decision-making',
    ],
  },
  {
    icon: iconOurApproach,
    title: 'Our approach:',
    list: [
      { strong: 'Peace Education', text: 'Fosters unity and growth' },
      { strong: 'Practical Learning', text: 'Dynamic, experiential, and applicable' },
      { strong: 'Safe Spaces', text: 'Encourages participation and diverse perspectives' },
    ],
  },
  {
    icon: iconSteps,
    title: 'Steps to success:',
    list: [
      'Identify cultural challenges.',
      'Understand their impact.',
      'Act with effective strategies.',
    ],
  },
  {
    icon: iconLearning,
    title: 'Learning:',
    list: [
      'Online, in-person & hybrid.',
      'Available in Spanish, English & Portuguese.',
    ],
  },
]

const WORKSHOPS = [
  {
    title: 'Roots in Transition: Tackling Cultural Gentrification in Global Mobility',
    image: imgGentrification,
    text: 'This workshop examines the complexities of cultural gentrification within the context of global mobility and relocation. Participants will explore how relocation impacts local communities, reshapes cultural identities, and contributes to social displacement. Through discussions and practical strategies, we’ll focus on ways to mitigate these effects, fostering inclusive practices that respect and preserve cultural heritage while supporting seamless transitions for relocated individuals and families.',
  },
  {
    title: 'Cultural Insights in Sustainable Practices',
    image: imgSustainable,
    text: 'This workshop explores how various cultures approach sustainability and environmental issues, helping participants develop culturally sensitive strategies for promoting sustainable practices. Attendees will engage in unlearning and relearning sustainable practices, fostering a deeper understanding of the cultural dimensions of sustainability.',
  },
  {
    title: 'Navigating Cultural Differences in Customer Service',
    image: imgCustomerService,
    text: 'This workshop equips participants with the skills to provide excellent customer service to a diverse clientele by understanding cultural differences in customer expectations. It covers strategies for resolving cross-cultural customer issues and emphasizes effective cross-cultural communication, ensuring participants can navigate and meet the needs of customers from various cultural backgrounds.',
  },
  {
    title: 'Cultural Sensitivity for Healthcare Providers',
    image: imgHealthcare,
    text: "Healthcare professionals will gain essential skills to provide culturally competent care in this workshop. By understanding patients' cultural backgrounds, participants will foster trust and empathy. The workshop covers strategies for effective communication in healthcare settings, ensuring that professionals can address diverse patient needs with sensitivity and respect.",
  },
  {
    title: "Embracing & Understanding Each One's Uniqueness",
    image: imgUniqueness,
    text: "This is a comprehensive workshop designed to enhance participants' understanding and practice of Diversity, Equity, and Inclusion (DEI) in both personal and professional contexts, with a cultural understanding perspective. It aims to promote a more inclusive and harmonious workplace environment.",
  },
  {
    title: 'Heritage and Identity: Reclaiming and Preserving Culture',
    image: imgHeritage,
    text: 'This workshop delves into the critical distinction between cultural appropriation and reclaiming cultural heritage, emphasizing the importance of preserving cultural traditions. Participants will learn how to reconnect with their cultural roots and understand the impact of globalization on cultural identity, fostering a respectful appreciation and preservation of diverse cultural heritages.',
  },
  {
    title: 'Culturally Aware Leadership: Inspiring with Gender Equity and Positive Reinforcement',
    image: imgLeadership,
    text: "This workshop equips leaders with the skills to create equitable teams by integrating cultural awareness, a gender perspective, and positive reinforcement techniques. Participants will learn to observe, analyze, and understand their team's cultural backgrounds to foster inclusivity and effectiveness, ultimately inspiring team members to create a supportive, empowering, and high-performing work environment.",
  },
  {
    title: 'The Art of Insightful Feedback: Fostering Empathy and Development',
    image: imgFeedback,
    text: 'This workshop equips participants with the skills to provide timely, specific, and actionable feedback while establishing trust and promoting empathy. It emphasizes the importance of being open to receiving feedback and fostering a culture of continuous growth and development. Participants will learn to deliver feedback that encourages analysis and personal growth, ultimately enhancing team dynamics and performance.',
  },
  {
    title: 'Wearing a Cultural Lens for Conflict Mediation and Management',
    image: imgConflict,
    text: 'This workshop is designed to equip participants with the skills to effectively navigate and resolve conflicts. Emphasizing the separation of the person from the problem, identifying root issues, and analyzing perspectives through a cultural lens, participants will learn to approach conflicts with empathy and openness. The workshop encourages creative, out-of-the-box solutions, fostering a collaborative environment for resolving conflicts constructively.',
  },
  {
    title: 'Culture & Clarity: Mastering Assertive Communication',
    image: imgCommunication,
    text: 'In this workshop, participants will learn the art of assertive communication, and navigating cultural backgrounds with confidence, openness, and respect. Emphasizing non-verbal cues and understanding cultural norms, the training explores how individualism and collectivism influence communication styles. Participants gain practical skills to express themselves effectively while respecting diverse cultural perspectives, fostering clear and respectful interactions in both personal and professional settings.',
  },
  {
    title: 'Strategic Negotiation in High-Stakes Settings',
    image: imgNegotiation,
    text: 'This workshop equips participants with skills to navigate challenging negotiations by understanding diverse communication styles, tactics, and decision-making processes. Emphasizing relationship building, time perception, power dynamics, and cultural backgrounds, this workshop offers comprehensive strategies for managing complex negotiations effectively.',
  },
]

export default function CulturalCompass() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page title */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <h1 className="h2">Cultural Compass</h1>
        </div>
      </section>

      {/* Banner */}
      <div className="wrap">
        <Reveal as="img" className="banner-img" src={banner} alt="A Cultural Compass sign displayed in an airport terminal." />
      </div>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal>
            <p className="lead">
              An integral part of Huitzilli Cultural Expression, serves as the focal point for
              complementing the cultural immersion experience through workshops tailored to
              enhance the evolving social landscape and needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* High Impact Workshops */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <h2 className="h2 impact-title">High Impact Workshops: From cultural awareness to effective action</h2>
          </Reveal>

          <div className="impact-grid" style={{ marginTop: 'clamp(2.5rem,4vw,3.5rem)' }}>
            {IMPACT_ITEMS.map((item) => (
              <Reveal as="div" className="impact-grid__item" key={item.title}>
                <img src={item.icon} alt="" aria-hidden="true" />
                <h3>{item.title}</h3>
                {item.text && <p>{item.text}</p>}
                {item.list && (
                  <ul>
                    {item.list.map((entry, i) =>
                      typeof entry === 'string'
                        ? <li key={i}>{entry}</li>
                        : <li key={i}><strong>{entry.strong}</strong>: {entry.text}</li>
                    )}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops list */}
      <section className="section section--sand">
        <div className="wrap">
          <Reveal>
            <h2 className="h2">Workshops</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Discover our diverse range of workshops, thoughtfully designed to meet a wide
              variety of needs.
            </p>
          </Reveal>

          <Reveal style={{ marginTop: '2.4rem' }}>
            <details className="workshops__list">
              <summary>Click here for more information</summary>
              <div className="workshops__nested">
                {WORKSHOPS.map((w) => (
                  <details key={w.title}>
                    <summary>{w.title}</summary>
                    <div className="workshop-detail">
                      <img src={w.image} alt="" aria-hidden="true" />
                      <p>{w.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </details>
          </Reveal>
        </div>
      </section>
    </>
  )
}
