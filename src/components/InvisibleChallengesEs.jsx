import Reveal from '../hooks/Reveal.jsx'

export default function InvisibleChallengesEs() {
  return (
    <section className="section" aria-labelledby="chal-title">
      <div className="wrap">

        <Reveal className="challenges__head">
          <p className="eyebrow">La capa invisible</p>
          <h2 className="h2 h2--wide" id="chal-title">
            No todo problema de colaboración es un problema de <em>comunicación</em>.
          </h2>
          <p className="lead">
            Un equipo puede compartir un idioma y aun así estar en desacuerdo sobre qué significa
            la retroalimentación, quién debe hablar primero, cómo se expresa el desacuerdo, qué
            señala el silencio, o cuánta jerarquía hay presente en una sala. Estas diferencias
            rara vez se anuncian por sí solas.
          </p>
        </Reveal>

        <Reveal className="iceberg">
          <svg className="iceberg__line" viewBox="0 0 900 24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 12h900" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" />
          </svg>

          <p className="iceberg__label">Sobre la línea de flotación — lo que se nota</p>
          <div className="iceberg__zone">
            <div className="iceberg__card">Las reuniones suceden. Las fechas límite mayormente se cumplen.</div>
            <div className="iceberg__card">Las personas son educadas, puntuales y siguen la agenda.</div>
            <div className="iceberg__card">Todos hablan el mismo idioma de trabajo.</div>
          </div>

          <p className="iceberg__label" style={{ marginTop: '2rem' }}>Bajo la línea de flotación — lo que realmente lo moldea</p>
          <div className="iceberg__zone iceberg__zone--below">
            <div className="iceberg__card">Suposiciones no dichas sobre quién debe hablar primero, y cuándo el silencio es respeto y cuándo es desconexión.</div>
            <div className="iceberg__card">Distintos niveles de comodidad con el desacuerdo, y distintas señales de cuándo la retroalimentación fue recibida.</div>
            <div className="iceberg__card">Distintas expectativas de jerarquía — a quién le pertenece una decisión, y quién puede cuestionarla.</div>
          </div>
        </Reveal>

        <Reveal className="bridge">
          <svg className="bridge__line" viewBox="0 0 900 60" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 58C150 58 220 4 450 4C680 4 750 58 900 58"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <p className="bridge__text">
            Cuando estas diferencias permanecen invisibles, moldean igualmente la confianza, la
            pertenencia y el desempeño.
          </p>
        </Reveal>

      </div>
    </section>
  )
}
