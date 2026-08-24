import Reveal from '../hooks/Reveal.jsx'

const SERVICES = [
  {
    name: 'Integración de Equipos Multiculturales',
    challenge: 'Los colegas interpretan la participación, la toma de decisiones y el desacuerdo a través de distintas lógicas culturales — y se perciben entre sí como difíciles en lugar de diferentes.',
    shiftStrong: 'Los equipos adquieren un lenguaje compartido',
    shiftRest: ' para sus diferencias, y la capacidad de trabajar con ellas en vez de rodearlas.',
  },
  {
    name: 'Movilidad Global y Aculturación',
    challenge: 'La reubicación se trata como un evento logístico. El ajuste cultural del empleado — y de la familia que se mudó con él — comienza después de desempacar las cajas.',
    shiftStrong: 'Las personas llegan preparadas y siguen apoyadas',
    shiftRest: ' antes, durante y después de la mudanza, lo cual protege tanto el bienestar como la asignación.',
  },
  {
    name: 'Liderazgo Culturalmente Consciente',
    challenge: 'Los líderes gestionan distintas regiones con un solo estilo, e interpretan el silencio resultante como acuerdo.',
    shiftStrong: 'Los líderes construyen entornos',
    shiftRest: ' donde las diferentes perspectivas realmente pueden entrar en la conversación — y ser utilizadas.',
  },
  {
    name: 'Fluidez en Idiomas y Cultura',
    challenge: 'La formación en idiomas produce gramática, no confianza. Las personas pueden hablar, pero aún así leer mal la sala.',
    shiftStrong: 'El idioma se aprende dentro de su contexto cultural',
    shiftRest: ' — la comunicación profesional, la adaptación cotidiana, y el significado detrás de las palabras.',
  },
  {
    name: 'Investigación y Consultoría a la Medida',
    challenge: 'Existe una tensión sociocultural u organizacional que ningún programa estándar aborda, y que nadie ha nombrado con precisión.',
    shiftStrong: 'El desafío se estudia primero',
    shiftRest: ', y luego se responde con una solución diseñada exclusivamente para esa organización.',
  },
]

export default function HowWeHelpEs() {
  return (
    <section className="section section--sand" id="how-we-help" aria-labelledby="help-title">
      <div className="wrap">

        <Reveal className="help__head">
          <p className="eyebrow">Cómo ayudamos</p>
          <h2 className="h2 h2--wide" id="help-title">
            Apoyo diseñado en torno a las personas, el contexto y la <em>cultura</em> de tu organización.
          </h2>
        </Reveal>

        <div className="help__list">
          {SERVICES.map((s) => (
            <Reveal as="article" className="help__row" key={s.name}>
              <h3 className="help__name">{s.name}</h3>
              <div className="help__cols">
                <div>
                  <p className="help__k">El desafío</p>
                  <p className="help__v">{s.challenge}</p>
                </div>
                <div>
                  <p className="help__k">El cambio</p>
                  <p className="help__v"><strong>{s.shiftStrong}</strong>{s.shiftRest}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
