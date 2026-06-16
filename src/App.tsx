import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import SkillsPage from "./pages/SkillsPage"
import WorkPage from "./pages/WorkPage"
import ContactPage from "./pages/ContactPage"
import { useSmoothScroll } from "./useSmoothScroll"

function App() {
  const location = useLocation()
  // re-init smooth scroll + scan elemen tiap pindah halaman
  useSmoothScroll(location.pathname)

  return (
    <>
      <Navbar />
      <main>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <div className="grid-lines"></div>
      <div className="noise"></div>
    </>
  )
}

export default App
