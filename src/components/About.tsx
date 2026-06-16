import { PORTRAIT_ABOUT } from "../assets"

function About() {
  return (
    <section className="section" id="about" data-screen-label="02 About">
      <div className="wrap">
        <header className="section-head">
          <div className="section-num">N° 02</div>
          <h2 className="section-title">
            About <span className="it">the</span> <span className="red">Maker</span>
          </h2>
          <div className="section-meta">
            Bio &amp; principles
            <br />
            Last updated May 2026
          </div>
        </header>

        <div className="about-grid">
          <div className="about-photo">
            <div className="tape">
              The <span className="it">maker</span>
              <br />
              at work.
            </div>
            <div className="stars">
              N° 02 / 05
              <br />
              Bio &amp; principles
              <br />
              Vol. 01 / 2026
            </div>
            <img src={PORTRAIT_ABOUT} alt="Gede Bhoja portrait" />
          </div>

          <div className="about-copy">
            <p className="lede">
              I design <span className="it">interfaces</span> and occasionally{" "}
              <span className="it">augment reality</span>.
            </p>
            <p>
              Two years deep into making things for screens, half of those spent
              overthinking pixel-perfect grids and the other half writing
              components that ship. I think a good interface is loud where it
              matters and quiet everywhere else.
            </p>
            <p>
              When I'm not in Figma or a code editor, I'm building AR demos in
              Unity — pointing a phone at a marker and pretending I summoned
              something into the room never stopped being fun.
            </p>

            <div className="about-stats">
              <div className="stat">
                <div className="n">
                  02<span className="red">+</span>
                </div>
                <div className="l">Years designing</div>
              </div>
              <div className="stat">
                <div className="n">
                  12<span className="red">+</span>
                </div>
                <div className="l">Tools fluent in</div>
              </div>
              <div className="stat">
                <div className="n">∞</div>
                <div className="l">Ideas in backlog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
