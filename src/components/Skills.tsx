type Skill = {
  num: string
  title: React.ReactNode
  tools: string[]
}

const skills: Skill[] = [
  {
    num: "01 / 04",
    title: (
      <>
        Design <span className="it">&amp;</span> Visuals
      </>
    ),
    tools: ["Figma", "Photoshop", "Canva"],
  },
  {
    num: "02 / 04",
    title: (
      <>
        Video <span className="it">editing</span>
      </>
    ),
    tools: ["Premiere Pro", "After Effects", "CapCut"],
  },
  {
    num: "03 / 04",
    title: (
      <>
        Web <span className="it">development</span>
      </>
    ),
    tools: ["Vue 3", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    num: "04 / 04",
    title: (
      <>
        Augmented <span className="it">reality</span>
      </>
    ),
    tools: ["Unity", "Vuforia"],
  },
]

function Skills() {
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

        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.num}>
              <div className="skill-head">
                <span className="skill-num">{s.num}</span>
                <span className="skill-cat">Discipline</span>
              </div>
              <h3 className="skill-title">{s.title}</h3>
              <div className="skill-tools">
                {s.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
