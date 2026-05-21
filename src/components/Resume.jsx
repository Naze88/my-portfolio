import { Link } from "react-router-dom"
import MyCV from "../assets/CV form (NTZ).pdf";

export default function Resume() {
  return (
    <section className="min-h-screen bg-slate-950 px-5 py-10 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-10">
        <Link
          to="/"
          className="mb-8 inline-flex rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-200"
        >
          Back Home
        </Link>

        <h1 className="text-3xl font-extrabold text-amber-300 sm:text-4xl">
          Nyan Tun Zaw (Naze)
        </h1>
        <div className="mt-4 space-y-2 text-slate-300">
          <p>Email: nyantunzaw8888@gmail.com</p>
          <p>Location: Ek Parachim Road, Pathum Thani, Bangkok, Thailand</p>
          <p>
            <a
              href="https://www.linkedin.com/in/nyan-tun-zaw-36b03b1b3"
              target="_blank"
              rel="noreferrer"
              className="text-amber-300 hover:text-amber-200"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://www.facebook.com/nyantun.zaw.9"
              target="_blank"
              rel="noreferrer"
              className="text-amber-300 hover:text-amber-200"
            >
              Facebook
            </a>
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-amber-300">Objective</h2>
        <p className="mt-3 text-slate-300">
          To enhance my professional skills, capabilities and knowledge in an
          organization which recognizes the value of hard work and trusts me
          with responsibilities and challenges.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-amber-300">Experience</h2>
        <ul className="mt-4 space-y-4 text-slate-300">
          <li>
            <strong className="text-white">Digital Marketing Executive</strong>{" "}
            (2018-2020) - Royal Ever Truth
            <br />
            Handled social media, B2C planning, strategies, and daily reports.
          </li>
          <li>
            <strong className="text-white">B2C Supervisor</strong> (2021-2022) -
            MMRD
            <br />
            Managed guides' web and social media, data analysis, web design, and
            a team of 5.
          </li>
          <li>
            <strong className="text-white">Supervisor</strong> (2017-2018) -
            Galaxy Bar & BBQ
            <br />
            Managed staff, appointments, expenses, and customer service.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-amber-300">Education</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>NCC (Greenwich UK) - BIT, KMD University (2017)</li>
          <li>ICT - Rangsit University (2023-2025)</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-amber-300">Skills</h2>
        <p className="mt-4 text-slate-300">
          UI/UX Design, Data Analysis, E-commerce, Communication, Web
          Programming, Animation/Game Design
        </p>

        <h2 className="mt-10 text-2xl font-bold text-amber-300">Projects</h2>
        <ul className="mt-4 space-y-3 text-slate-300">
          <li>Hotel Management Website - team project, coding and design.</li>
          <li>
            Product Development - web design and maintenance for 13 guides at
            MMRD.
          </li>
          <li>Game Design - TommyRunner built with Unity and VS Code.</li>
          <li>Data Entry and Analysis - SQL, Excel, Google Sheets.</li>
          <li>Intelligent System (AI) - ABMS algorithms, Google Colab, and Figma.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-amber-300">Languages</h2>
        <p className="mt-4 text-slate-300">English, Burmese, Thai</p>

        <h2 className="mt-10 text-2xl font-bold text-amber-300">Interests</h2>
        <p className="mt-4 text-slate-300">
          UI/UX Design, Travel, Swimming, Martial Arts, Badminton, Analysis
        </p>
        <div className="mt-10">
         <a
          href={MyCV}
          target="_blank"
          rel="noreferrer"
          className="shine-button outline-button inline-flex rounded-md px-4 py-2 text"
        >
          Check In Resume
        </a>
        </div>
      </div>
    </section>
  )
}
