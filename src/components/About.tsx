import { PORTRAIT_ABOUT } from "../assets"

function About({ detailed = false }: { detailed?: boolean }) {
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
              Two years into making things for screens. CS at Binus, Multimedia
              track — a fancy way of saying I get to design the thing and then go
              build it too. Half my time goes to overthinking grids in Figma; the
              other half to writing components that actually ship.
            </p>
            <p>
              I care about interfaces that are loud where it matters and quiet
              everywhere else. Most of what I make leans high-contrast, a little
              brutal, occasionally premium-dark — never beige.
            </p>
            <p>
              When I'm not in a code editor, I'm pointing a phone at a marker in
              Unity, pretending I summoned something into the room. That part
              never got old.
            </p>

            <div className={`about-stats${detailed ? " four" : ""}`}>
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
              {detailed && (
                <div className="stat">
                  <div className="n">05</div>
                  <div className="l">Projects shipped</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {detailed && (
          <div className="page-extra">
            <div className="page-block">
              <div className="page-block-label">Currently / Jun 2026</div>
              <div className="page-block-body">
                <ul>
                  <li>
                    <strong>Building Gadgify</strong> — marker-based AR that turns
                    a printed marker into a 3D product you can spin with your
                    thumb.
                  </li>
                  <li>
                    <strong>Shaping NATY</strong> — a Nusantara-rooted software
                    house, with a small team.
                  </li>
                  <li>
                    <strong>Quietly assembling</strong> an application for the
                    Apple Developer Academy.
                  </li>
                </ul>
              </div>
            </div>

            <div className="page-block">
              <div className="page-block-label">Principles / How I think</div>
              <div className="page-block-body">
                <ol>
                  <li>Loud where it matters, quiet everywhere else.</li>
                  <li>
                    Systems first, decoration second — steal the grid, not the
                    soul.
                  </li>
                  <li>If it doesn't ship, it didn't happen.</li>
                  <li>A little weird, on purpose.</li>
                </ol>
              </div>
            </div>

            <div className="page-block">
              <div className="page-block-label">Colophon</div>
              <div className="page-block-body colophon">
                Vol. 01 — set in Anton, Instrument Serif &amp; Space Mono.
                Hand-built in React + Vite, scrolled by Lenis. No templates were
                involved, for better or worse.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
