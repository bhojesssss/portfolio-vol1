import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"

function Navbar() {
  const [time, setTime] = useState("")

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

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="mark">
          <div className="glyph"></div>
          <span>
            Gede Bhoja N. <span style={{ color: "var(--muted)" }}>© 2026</span>
          </span>
        </Link>
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="time">
          Jakarta {time} <span style={{ color: "var(--red)" }}>●</span> Available
        </div>
      </div>
    </div>
  )
}

export default Navbar
