import { PORTRAIT_HERO } from "../assets"

function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-top">
            <div className="meta">
              <div>
                <strong>Creative Portfolio</strong>
              </div>
              <div>Vol. 01 / 2026</div>
            </div>
            <div className="meta" style={{ textAlign: "center" }}>
              <div>An anthology of</div>
              <div>
                <strong>interfaces &amp; experiments</strong>
              </div>
            </div>
            <div className="meta" style={{ textAlign: "right" }}>
              <div>Jakarta, ID</div>
              <div>
                <strong>06° 12' S / 106° 50' E</strong>
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <h1 className="hero-title">
              <span className="row">Port&shy;folio</span>
              <span className="row outline">of &mdash; the&mdash;works</span>
            </h1>
            <div className="hero-photo">
              <img src={PORTRAIT_HERO} alt="Portrait of Gede Bhoja Naradhipa" />
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-name">
              Gede Bhoja
              <br />
              <span className="it">Naradhipa</span>
            </div>
            <div className="hero-role">
              <div>
                <span className="accent">●</span> UI/UX Designer
              </div>
              <div>
                <span className="accent">●</span> Frontend Developer
              </div>
              <div>
                <span className="accent">●</span> AR Tinkerer
              </div>
            </div>
            <div className="hero-bio">
              I design interfaces and occasionally augment reality. Based in
              Jakarta — making things that are clear, opinionated, and slightly
              weird.
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">Scroll &nbsp;/&nbsp; 01</div>
    </section>
  )
}

export default Hero
