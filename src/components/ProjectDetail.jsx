import { Link, useParams } from "react-router-dom"

const projectDetails = {
  "analytics-dashboard": {
    title: "Analytics Dashboard",
    description:
      "Dashboard concepts for tracking RSU PAL Center activity, designed around readable reporting and quick status checks.",
    stack: ["React", "Charts", "Responsive UI"],
    liveUrl: "http://127.0.0.1:8000/admin/database-analytics",
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Vite, and Tailwind CSS to present profile information, projects, and resume details.",
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  "tommy-runner": {
    title: "TommyRunner",
    description:
      "A Unity game prototype created as a game design project with a focus on simple controls and clear visual feedback.",
    stack: ["Unity", "Game Design", "Prototype"],
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectDetails[id]

  return (
    <section className="min-h-screen bg-slate-950 px-5 py-12 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-200"
        >
          Back Home
        </Link>

        <div className="mt-10 rounded-md border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Project
          </p>
          <h1 className="mt-4 text-4xl font-black text-white">
            {project?.title ?? "Project Not Found"}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {project?.description ??
              "This project does not exist yet. Return home to choose one of the available projects."}
          </p>
          {project ? (
            <>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-sm font-semibold text-amber-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shine-button elegant-button mt-8 inline-flex rounded-md px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                >
                  View Web
                </a>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}
