import { Link } from "react-router-dom"

const projects = [
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    summary: "Interactive dashboard concepts for RSU PAL Center reporting.",
    tags: ["Dashboard", "Data", "UI Design"],
    preview: "from-blue-400/35 via-gray-900 to-black",
    bar: "bg-blue-400",
    liveUrl: "http://127.0.0.1:8000/admin/database-analytics",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    summary: "A responsive personal site built with React, Vite, and Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind"],
    preview: "from-[#f7c873]/35 via-gray-900 to-black",
    bar: "bg-[#f7c873]",
  },
  {
    id: "leo-corgi-hoouse-web",
    title: "Leo Corgi Hoouse Web",
    summary:
      "A friendly web experience for Leo Corgi Hoouse with clear sections, warm visuals, and easy browsing.",
    tags: ["Website", "React", "Vercel"],
    preview: "from-orange-400/35 via-gray-900 to-black",
    bar: "bg-orange-400",
    liveUrl: "https://leo-web-jet.vercel.app",
  },
  {
    id: "tommy-runner",
    title: "TommyRunner",
    summary: "A Unity game design project focused on simple, readable gameplay.",
    tags: ["Unity", "Game Design", "Prototype"],
    preview: "from-red-500/35 via-gray-900 to-black",
    bar: "bg-red-500",
  },
]

export default function Projects() {
  return (
    <div className="motion-in">
      <div className="mb-8 flex flex-col justify-between gap-4 text-left sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow text-sm font-semibold uppercase tracking-[0.25em]">
            Work
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Selected <span className="gradient-text">projects</span>
          </h2>
        </div>
        <Link
          to="/resume"
          className="shine-button elegant-button w-fit rounded-md px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7c873]"
        >
          View Resume
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card glass-panel premium-frame group rounded-md p-5 text-left transition hover:-translate-y-1 hover:border-sky-200/45"
          >
            <div
              className={`preview-grid relative mb-5 aspect-[16/10] overflow-hidden rounded-md bg-gradient-to-br ${project.preview} p-4`}
            >
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative flex h-full flex-col justify-between rounded-md border border-white/10 bg-black/50 p-3 shadow-xl shadow-black/20">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-red-500" />
                  <span className="size-2 rounded-full bg-yellow-300" />
                  <span className="size-2 rounded-full bg-green-400" />
                </div>
                <div className="space-y-2">
                  <span className={`block h-2 w-2/3 rounded ${project.bar}`} />
                  <span className="block h-2 w-full rounded bg-white/25" />
                  <span className="block h-2 w-4/5 rounded bg-white/15" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 min-h-20 leading-7 text-slate-200">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[#f7c873]/30 bg-[#f7c873]/10 px-2 py-1 text-xs font-semibold text-[#fff7d6]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={`/project/${project.id}`}
                className="shine-button elegant-button inline-flex rounded-md px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                View Project
              </Link>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shine-button outline-button inline-flex rounded-md px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  View Web
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
