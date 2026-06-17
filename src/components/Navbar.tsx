import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
]

function Navbar() {
  const [time, setTime] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const tick = () => {
      const opt: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }
      setTime(new Intl.DateTimeFormat("en-GB", opt).format(new Date()))
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  // kunci scroll body saat menu mobile kebuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
        <Link to="/" className="mark" onClick={close}>
          <div className="glyph"></div>
          <span>
            Gede Bhoja N. <span style={{ color: "var(--muted)" }}>© 2026</span>
          </span>
        </Link>
        <nav className="nav-desktop">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="time">
          Jakarta {time} <span style={{ color: "var(--red)" }}>●</span> Available
        </div>
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
      </div>

      <div className={`nav-mobile${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="nav-mobile-top">
          <span className="eyebrow">
            <span className="dot"></span>Index
          </span>
          <span>Vol. 01 / 2026</span>
        </div>
        <nav>
          {NAV_LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={close}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="n">0{i + 1}</span>
              <span className="t">{l.label}</span>
              <span className="ar">→</span>
            </NavLink>
          ))}
        </nav>
        <div className="nav-mobile-foot">
          Jakarta {time} <span style={{ color: "var(--red)" }}>●</span> Available
        </div>
      </div>
    </>
  )
}

export default Navbar
