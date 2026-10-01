import { PORTRAIT_CONTACT } from "../assets"

function Contact({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="contact" id="contact" data-screen-label="05 Contact">
      <div className="wrap">
        <header className="section-head">
          <div className="section-num">N° 05</div>
          <h2 className="section-title">
            Get in <span className="it">touch</span>
          </h2>
          <div className="section-meta">
            Inbox open
            <br />
            Replying within 24h
          </div>
        </header>

        <div className="contact-stage">
          <div className="contact-photo">
            <div className="badge">Say hi</div>
            <div className="badge-r">
              Open for
              <br />
              collaborations
            </div>
            <img src={PORTRAIT_CONTACT} alt="Gede Bhoja portrait" />
            <div className="signature">
              <span>— Bhoja, 2026.</span>
              <span className="small">Jakarta · ID</span>
            </div>
          </div>

          <div className="contact-right">
            <h2 className="contact-title">
              <span className="row">Let's</span>
              <span className="row">
                <span className="it">make</span>
              </span>
              <span className="row">things.</span>
            </h2>

            <div className="contact-list">
              <a className="contact-row" href="mailto:bhojanaradhipa@gmail.com">
                <span className="lbl">Email</span>
                <span className="val">bhojanaradhipa@gmail.com</span>
                <span className="ch">↗</span>
              </a>
              <a
                className="contact-row"
                href="https://github.com/bhojesssss"
                target="_blank"
                rel="noopener"
              >
                <span className="lbl">GitHub</span>
                <span className="val">github.com/bhojesssss</span>
                <span className="ch">↗</span>
              </a>
              <a
                className="contact-row"
                href="https://www.linkedin.com/in/bhoja-naradhipa-12a38a287/"
                target="_blank"
                rel="noopener"
              >
                <span className="lbl">LinkedIn</span>
                <span className="val">Bhoja Naradhipa</span>
                <span className="ch">↗</span>
              </a>
              <a
                className="contact-row"
                href="https://instagram.com/bhojanaradhipa"
                target="_blank"
                rel="noopener"
              >
                <span className="lbl">Instagram</span>
                <span className="val">@bhojanaradhipa</span>
                <span className="ch">↗</span>
              </a>
              <a
                className="contact-row"
                href="https://www.tiktok.com/@bhojanaradhipa167?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener"
              >
                <span className="lbl">TikTok</span>
                <span className="val">@bhojanaradhipa167</span>
                <span className="ch">↗</span>
              </a>
            </div>
          </div>
        </div>

        {detailed && (
          <div className="page-extra">
            <div className="page-block">
              <div className="page-block-label">Availability / What's open</div>
              <div className="page-block-body">
                Open for internships (yes — Apple Developer Academy, I see you),
                freelance interface &amp; frontend work, AR experiments, brand and
                design systems, and student collabs that actually ship.
              </div>
            </div>

            <div className="page-block">
              <div className="page-block-label">Best fit</div>
              <div className="page-block-body">
                <span className="page-quote">
                  Best fit: a team that wants a designer who codes — or a
                  developer who cares what it looks like.
                </span>
              </div>
            </div>

            <div className="page-block">
              <div className="page-block-label">Sign-off</div>
              <div className="page-block-body">
                Send something. Worst case you get a fast, polite reply; best case
                we make something slightly weird together.
                <br />
                <span className="page-signoff">— Bhoja · Jakarta · GMT+7</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
