import type { ReactNode } from "react"
import { Link } from "react-router-dom"

/** Slot gambar. trio = [browser, tablet, phone]; phones = 3 layar HP. */
type Shots = {
  browser?: string
  tablet?: string
  phone?: string
  phones?: string[]
}

/** Detail ringkas buat dossier di halaman /work. */
type Detail = {
  year: string
  type: string
  role: string
  stack: string
  summary: string
  built: string[]
  status: string
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
  detail?: Detail
}

const projects: Project[] = [
  {
    span: "full",
    num: "N° 01 / 05",
    tag: "Featured",
    tagRed: true,
    ph: "01",
    title: <>NATY</>,
    sub: "Brand and portfolio site for NATY, a Nusantara-rooted software house I'm building with a small team.",
    mockup: "trio",
    shots: {
      browser: "/NATY-desktop.png",
      tablet: "/NATY-tab.png",
      phone: "/NATY-HP.png",
    },
    links: [{ label: "Deployment", href: "https://www.natynext.com/", primary: true }],
    detail: {
      year: "2026",
      type: "Brand + site",
      role: "Design + frontend",
      stack: "Next.js · React",
      summary:
        "Brand and portfolio site for NATY — a Nusantara-rooted software house I'm building with a small team. The public face of the studio.",
      built: [
        "Defined the brand direction and visual language.",
        "Designed and built the marketing site, responsive across every breakpoint.",
      ],
      status: "Live · natynext.com",
    },
  },
  {
    span: "half",
    num: "N° 02 / 05",
    tag: "Web App",
    tagRed: true,
    ph: "02",
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
    detail: {
      year: "2026",
      type: "Web app / Marketplace",
      role: "Frontend + design system + video",
      stack: "React · Vite · REST API",
      summary:
        "A marketplace for surplus construction materials — the leftover bricks, tiles, and steel that usually end up as waste — with CO₂ saved tracked on every listing. Built for I/O Festival 2026, where it took Juara Harapan 2 (Top 5).",
      built: [
        "Extracted the design system and wired the frontend to the API, end-to-end.",
        "Shipped a live chat widget, inline listing edits, and category filtering.",
        "Produced the demo video — script, voiceover, and assets.",
      ],
      status: "Top 5 @ I/O Festival 2026 · Live",
    },
  },
  {
    span: "half",
    num: "N° 03 / 05",
    tag: "Web app",
    tagRed: true,
    ph: "03",
    title: <>Chi-Matcha</>,
    sub: "Premium matcha-café ordering app — Figma design system, built native on Android with Java + XML.",
    mockup: "phones",
    shots: { phones: ["/Chi1.jpg", "/Chi2.jpg", "/Chi3.jpg"] },
    links: [
      { label: "GitHub", href: "https://github.com/bhojesssss/CHIMatcha" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/xPuQy1iiNdPdmb3GLpAH7O/UX-LAB?node-id=0-1&t=9kmUjxPoE1vQDFRp-1",
      },
    ],
    detail: {
      year: "2025–26",
      type: "Mobile app (Android) / UX",
      role: "Design + Android dev",
      stack: "Java · XML · Android Studio · Figma",
      summary:
        "A premium matcha-café ordering app — browse the menu, customize your drink, check out, all in a calm matcha-green world. Designed in Figma first, then built native on Android.",
      built: [
        "Designed the full system in Figma — Fraunces + DM Sans, a matcha-green palette.",
        "Built the Android UI in Java + XML straight from that design.",
        "Menu browsing, drink customization, and an ordering/checkout flow.",
      ],
      status: "Course project (UX / Mobile Programming) · Figma + build",
    },
  },
  {
    span: "half",
    num: "N° 04 / 05",
    tag: "Web App",
    tagRed: true,
    ph: "04",
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
    detail: {
      year: "2025",
      type: "Web app / Marketplace",
      role: "Full-stack (~60%)",
      stack:
        "Vue 3 · Vite · Tailwind v4 · Pinia · Node / Express 5 · Supabase (Postgres, RLS, JWT) · Vercel",
      summary:
        "A neo-brutalist marketplace for preloved fashion and sports gear. An end-to-end build — frontend, backend, auth, database — shipped to Vercel.",
      built: [
        "Built the full Vue 3 + Tailwind frontend and the Express backend.",
        "Set up Supabase Postgres with row-level security and JWT auth.",
        "Owned ~60% of the project, pitch deck included.",
      ],
      status: "AoL Software Engineering · Live",
    },
  },
  {
    span: "half",
    num: "N° 05 / 05",
    tag: "AR / Unity",
    tagRed: true,
    ph: "05",
    title: <>Gadgify</>,
    sub: "Marker-based AR product showcase for Android. Unity 6 + Vuforia — scan a marker, get an interactive 3D product.",
    mockup: "phones",
    shots: { phones: ["/gadgify1.jpg", "/gadgify2.png", "/gadgify3.jpg"] },
    links: [{ label: "GitHub", href: "https://github.com/bhojesssss/Gadgify" }],
    detail: {
      year: "2026",
      type: "AR / Unity",
      role: "Solo build",
      stack: "Unity 6 · Vuforia · C# · Android",
      summary:
        "Marker-based AR product showcase. Scan a printed marker and an interactive 3D product appears — spin it, drag it, zoom into the details.",
      built: [
        "A MacBook scene with auto-rotate, drag-to-rotate, and pinch-to-zoom.",
        "A ProductDetail UI driven by a Render Texture.",
        "More markers on the way (ROG Ally, Galaxy S25 Ultra, Switch).",
      ],
      status: "In progress · Demo soon",
    },
  },
]

/** Work kecil/lain yang gak di-highlight — cuma muncul di halaman /work. */
type MoreProject = {
  title: string
  type: string
  year: string
  href?: string
}

const moreProjects: MoreProject[] = [
  { title: "Project name", type: "Web · Course project", year: "2025", href: "#" },
  { title: "Project name", type: "UI / UX · Figma", year: "2025", href: "#" },
  { title: "Project name", type: "Video · Aftermovie", year: "2024", href: "#" },
  { title: "Project name", type: "Design · Poster", year: "2024", href: "#" },
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

function Projects({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="section" id="work" data-screen-label="04 Work">
      <div className="wrap">
        <header className="section-head">
          <div className="section-num">N° 04</div>
          <h2 className="section-title">
            All of my <span className="it">works</span>
          </h2>
          <div className="section-meta">
            05 works
            <br />
            2025—26
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

        {/* landing cuma nampilin highlight; daftar lengkap + arsip ada di /work */}
        {!detailed && (
          <div className="work-more">
            <Link to="/work" className="work-btn work-more-btn">
              See more works <span className="ic">→</span>
            </Link>
          </div>
        )}

        {detailed && (
          <div className="more-work">
            <header className="more-work-head">
              <span className="more-work-label">Also in the archive</span>
              <span className="more-work-meta">{moreProjects.length} more</span>
            </header>
            <div className="more-grid">
              {moreProjects.map((m, i) => {
                const inner = (
                  <>
                    <div className="more-card-top">
                      <span className="more-card-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="more-card-year">{m.year}</span>
                    </div>
                    <h4 className="more-card-title">{m.title}</h4>
                    <span className="more-card-type">{m.type}</span>
                    {m.href && (
                      <span className="more-card-arrow" aria-hidden="true">
                        ↗
                      </span>
                    )}
                  </>
                )
                return m.href ? (
                  <a
                    className="more-card"
                    key={i}
                    href={m.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="more-card" key={i}>
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
