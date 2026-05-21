export default function Contact() {
  return (
    <div className="motion-in glass-panel premium-frame overflow-hidden rounded-md text-left">
      <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.8fr] md:p-10">
        <div>
          <p className="eyebrow text-sm font-semibold uppercase tracking-[0.25em]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Let us build <span className="gradient-text">something useful.</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            Feel free to reach out for portfolio feedback, web projects,
            dashboard design, or collaboration.
          </p>
          <a
            href="mailto:nyantunzaw8888@gmail.com"
            className="shine-button elegant-button mt-7 inline-flex rounded-md px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5"
          >
            Send Email
          </a>
        </div>
        <ul className="grid gap-3 text-slate-200">
          <li>
            <a
              href="mailto:nyantunzaw8888@gmail.com"
              className="block rounded-md border border-white/10 bg-white/5 px-4 py-4 transition hover:border-yellow-200 hover:bg-yellow-200/10 hover:text-yellow-50"
            >
              <span className="block text-sm font-bold text-white">Email</span>
              <span className="mt-1 block text-sm text-slate-300">
                nyantunzaw8888@gmail.com
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Naze88"
              target="_blank"
              rel="noreferrer"
              className="block rounded-md border border-white/10 bg-white/5 px-4 py-4 transition hover:border-sky-300 hover:bg-sky-300/10 hover:text-sky-100"
            >
              <span className="block text-sm font-bold text-white">GitHub</span>
              <span className="mt-1 block text-sm text-slate-300">
                github.com/Naze88
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nyan-tun-zaw-36b03b1b3"
              target="_blank"
              rel="noreferrer"
              className="block rounded-md border border-white/10 bg-white/5 px-4 py-4 transition hover:border-emerald-300 hover:bg-emerald-300/10 hover:text-emerald-100"
            >
              <span className="block text-sm font-bold text-white">LinkedIn</span>
              <span className="mt-1 block text-sm text-slate-300">
                nyan-tun-zaw
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
