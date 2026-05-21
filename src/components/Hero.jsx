import { useEffect, useRef } from "react"
import Typed from "typed.js"
import profilePic from "../assets/Nyan Tun Zaw Profile.jpg"

const heroRoles = [
  "ICT Major at Rangsit University(RSU)",
  "React and Vite Frontend Developer",
  "Dashboard Designer and Figma Enthusiast",
]

const heroHighlights = [
  ["React + Vite", "Frontend stack"],
  ["Figma", "UI workflow"],
  ["RSU", "ICT Major"],
]

export default function Hero() {
  const typedElement = useRef(null)

  useEffect(() => {
    if (!typedElement.current) {
      return undefined
    }

    const typed = new Typed(typedElement.current, {
      strings: heroRoles,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1200,
      cursorChar: "|",
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-14 sm:py-20 md:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="motion-in text-left">
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-sky-300/25 bg-sky-300/10 px-3 py-2 text-sm font-semibold text-sky-100 shadow-lg shadow-sky-500/10">
          <span className="size-2 rounded-full bg-green-400 shadow-[0_0_16px_rgba(74,222,128,0.9)]" />
          Available for web and UI projects
        </div>
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
          Hi, I&apos;m Nyan Tun Zaw. I build{" "}
          <span className="luxury-text">polished web interfaces.</span>
        </h1>
        <p className="mt-5 min-h-8 text-xl font-semibold text-yellow-200 sm:text-2xl">
          <span ref={typedElement} />
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          I turn ideas into responsive websites, dashboard layouts, and
          practical digital products with a strong eye for hierarchy, usability,
          and clean presentation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="shine-button elegant-button rounded-md px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="outline-button rounded-md px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
          >
            Contact Me
          </a>
        </div>

        <dl className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
          {heroHighlights.map(([value, label]) => (
            <div
              key={label}
              className="glass-panel premium-frame rounded-md p-4 transition hover:-translate-y-0.5 hover:border-sky-200/40"
            >
              <dt className="relative text-xl font-black text-yellow-50 sm:text-2xl">
                {value}
              </dt>
              <dd className="relative mt-1 text-xs font-semibold uppercase text-slate-300">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="motion-in motion-delay-2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-[320px]">
          <div className="absolute -inset-3 rounded-md bg-gradient-to-br from-yellow-200 via-sky-300 to-emerald-300 opacity-70 blur-xl" />
          <div className="glass-panel premium-frame relative rounded-md p-3">
            <img
              src={profilePic}
              alt="Nyan Tun Zaw"
              loading="eager"
              decoding="async"
              className="relative aspect-[4/5] w-full rounded-md object-cover saturate-110"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-md border border-white/12 bg-[#030712]/84 p-4 shadow-xl shadow-black/20 backdrop-blur">
              <p className="text-sm font-bold text-white">Nyan Tun Zaw</p>
              <p className="mt-1 text-xs font-semibold text-yellow-200">
                UI focused web developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
