import { useLayoutEffect } from "react"
import Lenis from "lenis"

let lenisInstance: Lenis | null = null

/** Smooth-scroll ke target (selector / element / posisi) lewat Lenis. */
export function lenisScrollTo(target: string | HTMLElement | number) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -60 })
  } else if (typeof target !== "number") {
    const el =
      typeof target === "string"
        ? document.querySelector<HTMLElement>(target)
        : target
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" })
  }
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

/* ----------------------------------------------------------------
 * Konfigurasi efek (semua digerakkan murni oleh Lenis)
 * ---------------------------------------------------------------- */

// Parallax: elemen geser vertikal mengikuti posisi scroll.
// speed = faktor (besar = gerak lebih jauh). baseX jaga transform horizontal asli.
type Parallax = { sel: string; speed: number; baseX?: string }
const PARALLAX: Parallax[] = [
  { sel: ".hero-photo img", speed: 0.12 },
  { sel: ".section-title", speed: 0.09 },
  { sel: ".section-meta", speed: -0.11 },
  { sel: ".contact-title", speed: 0.09 },
  { sel: ".about-photo img", speed: 0.06, baseX: "-50%" },
  { sel: ".contact-photo img", speed: 0.06, baseX: "-50%" },
]

// Fade-only (opacity) — buat elemen yang transform-nya dipakai parallax.
const FADE: string[] = [".section-title", ".contact-title", ".about-photo", ".contact-photo"]

// Reveal: opacity + naik. start/end = posisi top elemen (fraksi viewport) saat
// progress 0→1. stagger = geser window berdasarkan posisi horizontal (efek diagonal).
type Reveal = { sel: string; y?: number; start?: number; end?: number; stagger?: boolean }
const REVEAL: Reveal[] = [
  { sel: ".section-num" },
  { sel: ".about-copy .lede", y: 50 },
  { sel: ".about-copy p", y: 40 },
  { sel: ".about-stats .stat", y: 40, stagger: true },
  { sel: ".skill-card", y: 80, stagger: true },
  { sel: ".work-card", y: 80, stagger: true },
  // block tambahan di dedicated page
  { sel: ".page-block", y: 40, stagger: true },
  { sel: ".dossier", y: 50, stagger: true },
  // baris kontak: window tinggi & cepat selesai (section terakhir, scroll mepet)
  { sel: ".contact-row", y: 30, start: 0.95, end: 0.82, stagger: true },
]

/**
 * @param routeKey ganti tiap pindah halaman → hook re-init: re-scan elemen
 * (DOM halaman baru) + reset scroll ke atas.
 */
export function useSmoothScroll(routeKey?: string) {
  useLayoutEffect(() => {
    // Reduce motion → native scroll, elemen tampil apa adanya.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0)
      return
    }

    window.scrollTo(0, 0)

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisInstance = lenis

    // Kumpulkan elemen sekali (DOM sudah ter-render saat layout effect).
    const parallaxItems = PARALLAX.flatMap((c) =>
      Array.from(document.querySelectorAll<HTMLElement>(c.sel)).map((el) => ({
        el,
        speed: c.speed,
        baseX: c.baseX ?? "0",
      }))
    )
    const fadeItems = FADE.flatMap((sel) =>
      Array.from(document.querySelectorAll<HTMLElement>(sel))
    )
    const revealItems = REVEAL.flatMap((c) =>
      Array.from(document.querySelectorAll<HTMLElement>(c.sel)).map((el) => ({
        el,
        y: c.y ?? 60,
        start: c.start ?? 0.9,
        end: c.end ?? 0.6,
        stagger: !!c.stagger,
      }))
    )

    const update = () => {
      const h = window.innerHeight
      const vw = window.innerWidth
      // ≤1024px (mobile + tablet): matikan parallax & stagger diagonal —
      // elemen besar yang digeser-geser terlihat goyang/overlap di layar kecil.
      const small = vw <= 1024

      for (const it of parallaxItems) {
        if (small) {
          // balikin ke posisi dasar (jaga translateX -50% utk foto about/contact)
          it.el.style.transform = it.baseX !== "0" ? `translate3d(${it.baseX}, 0, 0)` : ""
          continue
        }
        const r = it.el.getBoundingClientRect()
        const y = (r.top + r.height / 2 - h / 2) * it.speed
        it.el.style.transform = `translate3d(${it.baseX}, ${y.toFixed(2)}px, 0)`
      }

      for (const el of fadeItems) {
        const r = el.getBoundingClientRect()
        const p = clamp((h * 0.92 - r.top) / (h * 0.92 - h * 0.55), 0, 1)
        el.style.opacity = p.toFixed(3)
      }

      for (const it of revealItems) {
        const r = it.el.getBoundingClientRect()
        // di layar kecil: tanpa stagger diagonal + jarak naik diperkecil biar halus
        const shift = it.stagger && !small ? (r.left / vw) * 0.12 : 0
        const dist = small ? Math.min(it.y, 36) : it.y
        const start = (it.start - shift) * h
        const end = (it.end - shift) * h
        const p = clamp((start - r.top) / (start - end), 0, 1)
        if (p >= 1) {
          // sudah tampil penuh → lepas inline style biar hover/transition CSS jalan lagi
          it.el.style.opacity = ""
          it.el.style.transform = ""
        } else {
          it.el.style.opacity = p.toFixed(3)
          it.el.style.transform = `translate3d(0, ${((1 - p) * dist).toFixed(2)}px, 0)`
        }
      }
    }

    // Lenis menggerakkan update tiap frame scroll
    lenis.on("scroll", update)
    update() // set kondisi awal (cegah flash)

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onResize = () => update()
    window.addEventListener("resize", onResize)
    // recalc setelah foto besar selesai loading
    window.addEventListener("load", update)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("load", update)
      lenis.destroy()
      lenisInstance = null
    }
  }, [routeKey])
}
