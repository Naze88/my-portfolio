import { Link } from "react-router-dom"

const projects = [
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    summary: "Interactive dashboard concepts for RSU PAL Center reporting.",
    tags: ["Dashboard", "Data", "UI Design"],
    preview: "from-blue-400/35 via-gray-900 to-black",
    bar: "bg-blue-400",
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f7c873]">
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

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card glass-panel group rounded-md p-5 text-left transition hover:-translate-y-1 hover:border-[#f7c873]/50"
          >
            <div
              className={`preview-grid mb-5 aspect-[16/10] rounded-md bg-gradient-to-br ${project.preview} p-4`}
            >
              <div className="flex h-full flex-col justify-between rounded-md border border-white/10 bg-black/55 p-3">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-red-500" />
                  <span className="size-2 rounded-full bg-[#f7c873]" />
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
            <Link
              to={`/project/${project.id}`}
              className="shine-button elegant-button mt-6 inline-flex rounded-md px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7c873]"
            >
              View Project
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
