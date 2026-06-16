import type { ReactNode } from "react"

/** Slot gambar. trio = [browser, tablet, phone]; phones = 3 layar HP. */
type Shots = {
  browser?: string
  tablet?: string
  phone?: string
  phones?: string[]
}

type Project = {
  span: "feat" | "std" | "half" | "full"
  num: string
  tag: string
  tagRed?: boolean
  ph: string
  title: ReactNode
  sub: string
  mockup?: "trio" | "phones"
  shots?: Shots
  /** kalau ada → footer pakai tombol-tombol ini, bukan "Read case". primary = merah */
  links?: { label: string; href: string; primary?: boolean }[]
}

const projects: Project[] = [
  {
    span: "half",
    num: "N° 01 / 05",
    tag: "Featured",
    tagRed: true,
    ph: "01",
    title: <>RESTMATERIAL</>,
    sub: "Surplus construction materials marketplace with CO₂ tracking. Juara Harapan 2 (Top 5) — I/O Festival 2026.",
    mockup: "trio",
    shots: {
      browser: "/RM-desktop.png",
      tablet: "/RM-tab.png",
      phone: "/RM-hp.png",
    },
    links: [
      { label: "GitHub", href: "https://github.com/bhojesssss/FE-RESTMATERIAL" },
      { label: "Deployment", href: "https://fe-restmaterial.vercel.app/", primary: true },
    ],
  },
  {
    span: "half",
    num: "N° 02 / 05",
    tag: "Web app",
    tagRed: true,
    ph: "02",
    title: <>Chi-Matcha</>,
    sub: "Placeholder description — ganti nanti.",
    mockup: "phones",
    shots: { phones: ["/Chi1.jpg", "/Chi2.jpg", "/Chi3.jpg"] },
    links: [
      { label: "GitHub", href: "https://github.com/bhojesssss/CHIMatcha" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/xPuQy1iiNdPdmb3GLpAH7O/UX-LAB?node-id=0-1&t=9kmUjxPoE1vQDFRp-1",
      },
    ],
  },
  {
    span: "half",
    num: "N° 03 / 05",
    tag: "Web App",
    tagRed: true,
    ph: "03",
    title: <>SecondSpace</>,
    sub: "Neo-brutalist thrift & preloved fashion marketplace. Vue 3 + Supabase, shipped to Vercel.",
    mockup: "trio",
    shots: {
      browser: "/SS-desktop.png",
      tablet: "/SS-tab.png",
      phone: "/SS-hp.png",
    },
    links: [
      { label: "FE GitHub", href: "https://github.com/bhojesssss/SecondSpace" },
      { label: "BE GitHub", href: "https://github.com/bhojesssss/BE_SS" },
      { label: "Deployment", href: "https://second-space-omega.vercel.app/", primary: true },
    ],
  },
  {
    span: "half",
    num: "N° 04 / 05",
    tag: "AR / Unity",
    tagRed: true,
    ph: "04",
    title: <>Gadgify</>,
    sub: "Marker-based AR product showcase for Android. Unity 6 + Vuforia — scan a marker, get an interactive 3D product.",
    mockup: "phones",
    shots: { phones: ["/gadgify1.jpg", "/gadgify2.png", "/gadgify3.jpg"] },
    links: [{ label: "GitHub", href: "https://github.com/bhojesssss/Gadgify" }],
  },
  {
    span: "full",
    num: "N° 05 / 05",
    tag: "Featured",
    tagRed: true,
    ph: "05",
    title: <>NATY</>,
    sub: "Brand and portfolio site for NATY, a Nusantara-rooted software house I'm building with a small team.",
    mockup: "trio",
    shots: {
      browser: "/NATY-desktop.png",
      tablet: "/NATY-tab.png",
      phone: "/NATY-HP.png",
    },
    links: [{ label: "Deployment", href: "https://www.natynext.com/", primary: true }],
  },
]

/** Device mockups. variant "trio" = browser+tablet+phone, "phones" = 3 HP. */
function DeviceMockups({
  variant = "trio",
  shots,
}: {
  variant?: "trio" | "phones"
  shots?: Shots
}) {
  if (variant === "phones") {
    const ph = shots?.phones ?? []
    return (
      <div className="work-media phones" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div className={`device phone p${i + 1}`} key={i}>
            <div className="notch" />
            <div className="screen">{ph[i] && <img src={ph[i]} alt="" />}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="work-media" aria-hidden="true">
      <div className="device browser">
        <div className="bar">
          <span />
          <span />
          <span />
        </div>
        <div className="screen">
          {shots?.browser && <img src={shots.browser} alt="" />}
        </div>
      </div>
      <div className="device tablet">
        <div className="screen">
          {shots?.tablet && <img src={shots.tablet} alt="" />}
        </div>
      </div>
      <div className="device phone">
        <div className="notch" />
        <div className="screen">
          {shots?.phone && <img src={shots.phone} alt="" />}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section className="section" id="work" data-screen-label="04 Work">
      <div className="wrap">
        <header className="section-head">
          <div className="section-num">N° 04</div>
          <h2 className="section-title">
            Selected <span className="it">work</span>
          </h2>
          <div className="section-meta">
            Placeholders
            <br />
            Real cases dropping soon
          </div>
        </header>

        <div className="work-grid">
          {projects.map((p) => {
            const inner = (
              <>
                <div className="ph">{p.ph}</div>
                <DeviceMockups variant={p.mockup} shots={p.shots} />
                <div className="work-head">
                  <span className={`work-tag${p.tagRed ? " red" : ""}`}>
                    {p.tag}
                  </span>
                  <span className="work-num">{p.num}</span>
                </div>
                <div className="work-foot">
                  <h3 className="work-title">{p.title}</h3>
                  <p className="work-sub">{p.sub}</p>
                  {p.links ? (
                    <div className="work-links">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          className={`work-btn${l.primary ? " primary" : ""}`}
                          href={l.href}
                          target="_blank"
                          rel="noopener"
                        >
                          {l.label} <span className="ic">↗</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="work-arrow">
                      Read case <span className="a">→</span>
                    </span>
                  )}
                </div>
              </>
            )

            // card dengan tombol = <article> (hindari <a> dalam <a>); selain itu link biasa
            return p.links ? (
              <article className={`work-card ${p.span}`} key={p.ph}>
                {inner}
              </article>
            ) : (
              <a href="#" className={`work-card ${p.span}`} key={p.ph}>
                {inner}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
