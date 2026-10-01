import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { lenisScrollTo } from "../useSmoothScroll"

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  // datang dari page lain lewat nav (mis. Contact) → scroll ke section tujuan,
  // lalu hapus state-nya biar refresh gak ikut scroll lagi
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!target) return
    lenisScrollTo(target)
    navigate(location.pathname, { replace: true, state: null })
  }, [location, navigate])

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
