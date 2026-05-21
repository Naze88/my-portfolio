import { useState } from "react"
import { Link } from "react-router-dom"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Hero from "./Hero.jsx"
import Projects from "./Projects.jsx"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="animated-shell min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/72 backdrop-blur-2xl">
        <nav className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="group flex items-center gap-3 text-base font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              <span className="elegant-button grid size-10 place-items-center rounded-md text-sm font-black shadow-lg shadow-sky-500/10">
                NZ
              </span>
              <span>
                Nyan Tun Zaw
                <span className="block text-xs font-semibold text-slate-400 transition group-hover:text-[#f7c873]">
                  Web Portfolio
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-2 text-sm font-medium text-slate-300 sm:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-yellow-200"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
              <Link
                className="shine-button elegant-button rounded-md px-4 py-2 font-bold transition hover:-translate-y-0.5"
                to="/resume"
              >
                Resume
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="grid size-10 place-items-center rounded-md border border-white/15 bg-white/5 transition hover:border-[#f7c873]/70 sm:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 rounded bg-white" />
                <span className="h-0.5 rounded bg-white" />
                <span className="h-0.5 rounded bg-white" />
              </span>
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-4 grid gap-2 rounded-md border border-white/10 bg-[#050505]/95 p-3 text-sm font-semibold text-slate-200 shadow-2xl sm:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-md px-3 py-3 transition hover:bg-white/10 hover:text-[#f7c873]"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                className="shine-button elegant-button rounded-md px-3 py-3"
                to="/resume"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </Link>
            </div>
          ) : null}
        </nav>
      </header>

      <main>
        <Hero />
        <section id="about" className="section-shell mx-auto max-w-6xl px-5 py-20">
          <About />
        </section>
        <section id="projects" className="section-shell mx-auto max-w-6xl px-5 py-20">
          <Projects />
        </section>
        <section id="contact" className="section-shell mx-auto max-w-6xl px-5 py-20">
          <Contact />
        </section>
      </main>
    </div>
  )
}
