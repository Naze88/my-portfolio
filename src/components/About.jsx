export default function About() {
  return (
    <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
      <div className="motion-in">
        <p className="eyebrow text-sm font-semibold uppercase tracking-[0.25em]">
          About
        </p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
          ICT student with a <span className="luxury-text">product mindset.</span>
        </h2>
        <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-300">
          <span className="rounded-md border border-sky-300/25 bg-sky-300/10 px-4 py-3 text-sky-100 shadow-lg shadow-sky-500/5">
            React + Vite interfaces / javaScript programming / Laravel / HTML / php / MySQL / Tailwind CSS / Figma design / UI/UX design...
          </span>
          <span className="rounded-md border border-yellow-200/25 bg-yellow-200/10 px-4 py-3 text-yellow-50 shadow-lg shadow-yellow-500/5">
            Dashboard and data layouts
          </span>
          <span className="rounded-md border border-rose-300/25 bg-rose-300/10 px-4 py-3 text-rose-100 shadow-lg shadow-rose-500/5">
            Figma prototypes
          </span>
        </div>
      </div>
      <div className="motion-in motion-delay-1 glass-panel premium-frame rounded-md p-6 text-left text-base leading-8 text-slate-300 sm:p-8">
        <p>
          I am Nyan Tun Zaw, an ICT student at Rangsit University. I enjoy
          turning ideas into responsive interfaces, dashboard layouts, and clear
          prototypes that people can actually use.
        </p>
        <p>
          My background includes digital marketing, team supervision, data
          analysis, UI/UX design, and web programming, so I like building with
          both the user experience and the business goal in view.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-sky-300/25 bg-sky-300/10 p-4 shadow-lg shadow-sky-500/5">
            <p className="text-sm font-bold text-sky-100">Design approach</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Clear hierarchy, readable spacing, and interfaces that feel calm
              to use.
            </p>
          </div>
          <div className="rounded-md border border-emerald-300/25 bg-emerald-300/10 p-4 shadow-lg shadow-emerald-500/5">
            <p className="text-sm font-bold text-emerald-100">Build approach</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Component-first React work with responsive states handled early.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
