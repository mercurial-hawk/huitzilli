import Reveal from '../hooks/Reveal.jsx'

const QA = [
  {
    q: '¿Los programas se pueden personalizar para una organización o país específico?',
    a: 'Sí — la personalización es el punto de partida, no un extra. Cada programa comienza por entender el contexto de la organización, las culturas involucradas y el desafío que se está abordando, y a partir de ahí se construye el plan de estudios.',
    open: true,
  },
  {
    q: '¿Los programas están disponibles en línea y de forma presencial?',
    a: 'Ambos. Los programas se diseñan según el formato que mejor se adapte al grupo: presencial para talleres inmersivos y diálogo facilitado, en línea para equipos distribuidos en distintas zonas horarias, e híbrido cuando se necesitan ambos.',
  },
  {
    q: '¿Qué idiomas están disponibles?',
    a: 'Inglés, español y portugués. Los programas pueden impartirse en un solo idioma o alternar entre ellos cuando el grupo es mixto.',
  },
  {
    q: '¿Huitzilli puede apoyar tanto a empleados como a familias en reubicación?',
    a: 'Sí. La reubicación afecta a todo un hogar, no solo a un empleado. El coaching y el apoyo cultural pueden extenderse a parejas e hijos, antes, durante y después de la mudanza.',
  },
  {
    q: '¿Qué duraciones y formatos de programa están disponibles?',
    a: 'Los formatos van desde conferencias de una o dos horas, hasta talleres de cuatro horas, programas personalizados más extensos y proyectos de consultoría continua. El formato se define según el objetivo, y no al revés.',
  },
  {
    q: '¿Cómo funciona el proceso de consulta?',
    a: 'Agendas una breve conversación exploratoria con Alejandra. Ella pregunta sobre tu gente, tu contexto y el desafío que estás enfrentando. Si Huitzilli es una buena opción, sigue una propuesta a la medida. Si no lo es, ella te lo dirá directamente.',
  },
]

export default function FAQEs() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="wrap faq__grid">

        <Reveal>
          <p className="eyebrow">Preguntas</p>
          <h2 className="h2" id="faq-title">Antes de <em>hablar</em>.</h2>
          <p className="small" style={{ marginTop: '1.4rem', maxWidth: '34ch' }}>
            Cualquier cosa que no esté cubierta aquí es una buena razón para agendar una breve conversación.
          </p>
        </Reveal>

        <Reveal className="faq__list">
          {QA.map(({ q, a, open }) => (
            <details key={q} open={open}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </Reveal>

      </div>
    </section>
  )
}
