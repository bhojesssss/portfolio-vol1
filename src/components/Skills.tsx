type Tool = {
  name: string
  level: number
}

type Skill = {
  num: string
  title: React.ReactNode
  blurb: string
  detail: string
  tools: Tool[]
}

const skills: Skill[] = [
  {
    num: "01 / 04",
    title: (
      <>
        Design <span className="it">&amp;</span> Visuals
      </>
    ),
    blurb:
      "Interface systems, design tokens, and the odd poster. I think in components and 8-pt grids.",
    detail:
      "Most of my screens start in Figma — auto-layout, variables, and a token set I can hand straight to code. Photoshop covers retouching and the heavier compositing; Canva is for when something just needs to ship today.",
    tools: [
      { name: "Figma", level: 90 },
      { name: "Photoshop", level: 70 },
      { name: "Canva", level: 85 },
    ],
  },
  {
    num: "02 / 04",
    title: (
      <>
        Video <span className="it">editing</span>
      </>
    ),
    blurb:
      "Cuts that move — aftermovies, demo reels, and motion for things that needed to feel alive.",
    detail:
      "Premiere Pro is home base for timeline editing, pacing, and sound. After Effects comes in for motion graphics and the bits that need to feel kinetic, and CapCut handles fast vertical cuts for social.",
    tools: [
      { name: "Premiere Pro", level: 80 },
      { name: "After Effects", level: 55 },
      { name: "CapCut", level: 85 },
    ],
  },
  {
    num: "03 / 04",
    title: (
      <>
        Web <span className="it">development</span>
      </>
    ),
    blurb:
      "Vue-first, React when it's called for. Component-driven frontends wired to real backends, then actually shipped.",
    detail:
      "Vue 3 + TypeScript is my default stack, styled with Tailwind and component-driven from the start. React when a project calls for it, and the usual HTML/CSS/JS foundations underneath it all — then wired to a real backend and shipped.",
    tools: [
      { name: "Vue 3", level: 88 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    num: "04 / 04",
    title: (
      <>
        Augmented <span className="it">reality</span>
      </>
    ),
    blurb:
      "Point a phone at a marker, get a 3D thing in the room. Unity + Vuforia, mostly for the fun of it.",
    detail:
      "Marker-based AR experiments built in Unity with Vuforia — placing 3D objects into the camera feed. Still very much a playground for me, but enough to put something interactive on a phone screen.",
    tools: [
      { name: "Unity", level: 50 },
      { name: "Vuforia", level: 45 },
    ],
  },
]

/** SVG mentah di-inline biar bisa di-stroke (fill:none) lewat CSS. */
const rawLogos = import.meta.glob("../assets/logos/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

function logoSvg(file: string): string | null {
  const hit = Object.entries(rawLogos).find(([p]) => p.endsWith(`/${file}`))
  return hit ? hit[1] : null
}

/** nama tool → file logo. yang gak ada (CapCut, Vuforia) → null, pakai siluet teks. */
const logoFiles: Record<string, string | null> = {
  Figma: "figma.svg",
  Photoshop: "photoshop.svg",
  Canva: "canva.svg",
  "Premiere Pro": "premierepro.svg",
  "After Effects": "aftereffects.svg",
  CapCut: null,
  "Vue 3": "vue.svg",
  React: "react.svg",
  "Tailwind CSS": "tailwind.svg",
  TypeScript: "typescript.svg",
  HTML: "html.svg",
  CSS: "css.svg",
  JavaScript: "javascript.svg",
  Unity: "unity.svg",
  Vuforia: null,
}

/** posisi overlapping numpuk di kanan frame, di-cycle per index. */
const spots = [
  { top: "8%", right: "2%", rot: -8, s: 1 },
  { top: "42%", right: "15%", rot: 7, s: 1.12 },
  { top: "64%", right: "1%", rot: -5, s: 0.9 },
  { top: "20%", right: "28%", rot: 11, s: 0.85 },
  { top: "70%", right: "26%", rot: -12, s: 1 },
  { top: "46%", right: "38%", rot: 4, s: 0.78 },
  { top: "4%", right: "22%", rot: 13, s: 0.7 },
]

function Silhouettes({ tools }: { tools: Tool[] }) {
  return (
    <div className="skill-silhouettes" aria-hidden="true">
      {tools.map((t, i) => {
        const sp = spots[i % spots.length]
        const style = {
          top: sp.top,
          right: sp.right,
          transform: `rotate(${sp.rot}deg) scale(${sp.s})`,
        }
        const file = logoFiles[t.name]
        const svg = file ? logoSvg(file) : null
        return svg ? (
          <span
            className="sil-logo"
            key={`${t.name}-${i}`}
            style={style}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <span className="sil-text" key={`${t.name}-${i}`} style={style}>
            {t.name}
          </span>
        )
      })}
    </div>
  )
}

function Skills({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="section" id="skills" data-screen-label="03 Skills">
      <div className="wrap">
        <header className="section-head">
          <div className="section-num">N° 03</div>
          <h2 className="section-title">
            The <span className="it">toolkit</span>
          </h2>
          <div className="section-meta">
            04 disciplines
            <br />
            14 instruments
          </div>
        </header>

        <div className={`skills-grid${detailed ? " stacked" : ""}`}>
          {skills.map((s) => (
            <div className="skill-card" key={s.num}>
              {detailed && <Silhouettes tools={s.tools} />}
              <div className="skill-head">
                <span className="skill-num">{s.num}</span>
                <span className="skill-cat">Discipline</span>
              </div>
              <h3 className="skill-title">{s.title}</h3>
              <p className="skill-blurb">{detailed ? s.detail : s.blurb}</p>
              {detailed ? (
                <div className="skill-bars">
                  {s.tools.map((t) => (
                    <div className="skill-bar" key={t.name}>
                      <div className="skill-bar-head">
                        <span className="skill-bar-name">{t.name}</span>
                        <span className="skill-bar-pct">{t.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <span
                          className="skill-bar-fill"
                          style={{ width: `${t.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="skill-tools">
                  {s.tools.map((t) => (
                    <span key={t.name}>{t.name}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {detailed && (
          <div className="page-extra">
            <div className="page-block">
              <div className="page-block-label">Fluency / The honest version</div>
              <div className="page-block-body">
                <div className="tier">
                  <span className="tier-l">Primary</span>
                  <span className="tier-v">
                    Figma · Vue 3 · Tailwind CSS · TypeScript
                  </span>
                </div>
                <div className="tier">
                  <span className="tier-l">Comfortable</span>
                  <span className="tier-v">
                    React · Photoshop · Premiere Pro · Supabase · Node / Express ·
                    Git
                  </span>
                </div>
                <div className="tier">
                  <span className="tier-l">Exploring</span>
                  <span className="tier-v">
                    Unity AR · After Effects motion · Swift / iOS
                  </span>
                </div>
              </div>
            </div>

            <div className="page-block">
              <div className="page-block-label">Process / How it gets made</div>
              <div className="page-block-body">
                <p>
                  Design in Figma → pull the system into reusable tokens → build
                  component-first → ship to Vercel. Repomix to read codebases
                  fast, Claude Code in the terminal, and a VPS + Dokploy when
                  something needs to actually live somewhere.
                </p>
              </div>
            </div>

            <div className="page-block">
              <div className="page-block-label">Also in the bag</div>
              <div className="page-block-body">
                <div className="skill-tools">
                  {[
                    "Git",
                    "GitHub",
                    "Vercel",
                    "Vite",
                    "Pinia",
                    "Supabase",
                    "Dokploy",
                    "Repomix",
                    "Claude Code",
                    "Antigravity",
                  ].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
