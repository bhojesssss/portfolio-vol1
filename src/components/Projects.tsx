import { useEffect, useRef, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import GlassFolder, {
  type FolderFile,
  type GlassFolderProps,
} from "./ui/glass-folder-cards"

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
  tag: string
  tagRed?: boolean
  title: ReactNode
  sub: string
  mockup?: "trio" | "phones"
  shots?: Shots
  /** kalau ada → footer pakai tombol-tombol ini, bukan "Read case". primary = merah */
  links?: { label: string; href: string; primary?: boolean }[]
  detail?: Detail
  /** true → cuma tampil di /work, gak di landing */
  workOnly?: boolean
}

/** Urutan di sini = urutan tampil. Nomor "N° xx / yy" dihitung otomatis. */
const projects: Project[] = [
  {
    span: "full",
    tag: "Featured",
    tagRed: true,
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
    tag: "E-commerce",
    tagRed: true,
    title: <>Lacroi</>,
    sub: "Drop store for LACROI, a clothing label from Rengat. Limited-quota drops, catalog filters, cart, and Biteship shipping. Built with NATY.",
    mockup: "trio",
    shots: {
      browser: "/LC-desktop.png",
      tablet: "/LC-tab.png",
      phone: "/LC-hp.png",
    },
    links: [{ label: "Deployment", href: "https://lacroidept.com/", primary: true }],
    detail: {
      year: "2026",
      type: "E-commerce / Drop store",
      role: "Design + frontend · via NATY",
      stack: "Next.js · React · Biteship",
      summary:
        "A drop store for LACROI, a clothing label founded in 2026 and rooted in Danau Raja, a lake in Rengat. Every drop has a limited quota — first come, first served.",
      built: [
        "Catalog with filters for product type, size, availability, and price.",
        "Cart and customer accounts: orders, profile, and settings.",
        "Shipping through Biteship courier partners.",
      ],
      status: "Client work via NATY · Live · lacroidept.com",
    },
  },
  {
    span: "half",
    tag: "Heritage / 3D",
    tagRed: true,
    title: <>Mataram</>,
    sub: "Bilingual digital-heritage site for the House of Mataram: an interactive timeline, a Three.js 3D scene, and a CMS for the royal archive.",
    mockup: "trio",
    shots: {
      browser: "/MT-desktop.png",
      tablet: "/MT-tab.png",
      phone: "/MT-hp.png",
    },
    links: [{ label: "Deployment", href: "https://mataram3-d.vercel.app/", primary: true }],
    detail: {
      year: "2026",
      type: "Web / Digital heritage",
      role: "Design + frontend",
      stack: "React · Vite · Tailwind · Three.js",
      summary:
        "A digital heritage experience for the House of Mataram: two centuries of Javanese royal history, from the granted forest of 1556 to the Treaty of Giyanti in 1755, told in Indonesian and English.",
      built: [
        "Keyboard-navigable timeline, plus pages for the royal house, the palace, and the archive.",
        "A lazy-loaded Three.js scene that renders GLB models.",
        "ID / EN language toggle and an admin dashboard for publishing archive entries.",
      ],
      status: "Live · mataram3-d.vercel.app",
    },
  },
  {
    span: "half",
    tag: "Web App",
    tagRed: true,
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
    tag: "Web app",
    tagRed: true,
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
    tag: "Web App",
    tagRed: true,
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
    workOnly: true,
  },
  {
    span: "half",
    tag: "AR / Unity",
    tagRed: true,
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
    workOnly: true,
  },
]

/** Work kecil/lain yang gak di-highlight — cuma muncul di halaman /work. */
type MoreProject = {
  title: string
  type: string
  year: string
  href?: string
  /** teks outline gede di depan folder — format file-nya */
  stamp: string
  /** isi folder yang nongol pas di-hover. maks 4 yang keliatan */
  files: FolderFile[]
}

// TODO: tahun + link tiap arsip
// TODO: ganti placeholder — tambahin `image: "/nama-file.png"` (rasio ±3:2), plus name-nya.
//       tanpa image = kertas polos; gambar otomatis monokrom, berwarna pas hover
const moreProjects: MoreProject[] = [
  {
    title: "Photoshop works",
    type: "Design · Photoshop",
    year: "2025",
    href: "#",
    stamp: "PSD",
    files: [
      { name: "Untitled 01", meta: "PSD" },
      { name: "Untitled 02", meta: "PSD" },
      { name: "Untitled 03", meta: "PSD" },
    ],
  },
  {
    title: "Video editing works",
    type: "Video · Editing",
    year: "2025",
    href: "#",
    stamp: "MP4",
    files: [
      { name: "Untitled 01", meta: "MP4" },
      { name: "Untitled 02", meta: "MP4" },
      { name: "Untitled 03", meta: "MP4" },
    ],
  },
  {
    title: "Figma works",
    type: "UI / UX · Figma",
    year: "2024",
    href: "#",
    stamp: "FIG",
    files: [
      { name: "Untitled 01", meta: "FIG" },
      { name: "Untitled 02", meta: "FIG" },
      { name: "Untitled 03", meta: "FIG" },
    ],
  },
  {
    title: "Lightroom works",
    type: "Photo · Lightroom",
    year: "2024",
    href: "#",
    stamp: "RAW",
    files: [
      { name: "Untitled 01", meta: "RAW" },
      { name: "Untitled 02", meta: "RAW" },
      { name: "Untitled 03", meta: "RAW" },
    ],
  },
]

const pad2 = (n: number) => String(n).padStart(2, "0")

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

/** Ukuran asli GlassFolder di width 340: tinggi = (272 + 54 headroom). */
const FOLDER_W = 340
const FOLDER_H = 326

/**
 * GlassFolder digambar fix di 340px lalu di-scale pakai CSS ngikutin lebar kotak.
 * Kalau `width`-nya yang diganti, art canvas-nya di-render ulang tiap resize.
 */
function FitFolder(props: GlassFolderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) =>
      setScale(Math.min(1, e.contentRect.width / FOLDER_W)),
    )
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} className="more-card-folder" style={{ height: FOLDER_H * scale }}>
      {scale > 0 && (
        <div className="more-card-folder-inner" style={{ transform: `scale(${scale})` }}>
          <GlassFolder width={FOLDER_W} {...props} />
        </div>
      )}
    </div>
  )
}

function Projects({ detailed = false }: { detailed?: boolean }) {
  // landing cuma highlight; /work tampilin semuanya
  const list = detailed ? projects : projects.filter((p) => !p.workOnly)
  const total = pad2(list.length)

  return (
    <section className="section" id="work" data-screen-label="04 Work">
      <div className="wrap">
        <header className="section-head">
          <div className="section-num">N° 04</div>
          <h2 className="section-title">
            All of my <span className="it">works</span>
          </h2>
          <div className="section-meta">
            {total} works
            <br />
            2025—26
          </div>
        </header>

        <div className="work-grid">
          {list.map((p, i) => {
            const n = pad2(i + 1)
            const inner = (
              <>
                <div className="ph">{n}</div>
                <DeviceMockups variant={p.mockup} shots={p.shots} />
                <div className="work-head">
                  <span className={`work-tag${p.tagRed ? " red" : ""}`}>
                    {p.tag}
                  </span>
                  <span className="work-num">
                    N° {n} / {total}
                  </span>
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
              <article className={`work-card ${p.span}`} key={i}>
                {inner}
              </article>
            ) : (
              <a href="#" className={`work-card ${p.span}`} key={i}>
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
              {/* kotak = <article>, bukan <a>: folder isinya button, gak boleh di dalem link */}
              {moreProjects.map((m, i) => (
                <article className="more-card" key={i}>
                  <div className="more-card-top">
                    <span className="more-card-num">{pad2(i + 1)}</span>
                    <span className="more-card-year">{m.year}</span>
                  </div>
                  <FitFolder
                    label={m.title}
                    stamp={m.stamp}
                    files={m.files}
                    action="none"
                    appearDelay={i * 140}
                  />
                  <h4 className="more-card-title">
                    {m.href ? (
                      <a className="more-card-link" href={m.href} target="_blank" rel="noopener">
                        {m.title}
                        <span className="more-card-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ) : (
                      m.title
                    )}
                  </h4>
                  <span className="more-card-type">{m.type}</span>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
