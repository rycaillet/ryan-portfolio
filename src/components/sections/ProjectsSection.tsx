import { motion } from 'framer-motion'
import { projects } from '../../data/projects'

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-7xl py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        Featured Projects
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Projects designed to show real engineering growth.
      </h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          >
            <div className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Case Study
              </p>
              <p className="mt-8 text-3xl font-bold text-white">
                {project.title}
              </p>
            </div>

            <p className="text-sm font-medium text-cyan-300">
              {project.status}
            </p>

            <p className="mt-4 text-slate-300">{project.description}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Tech stack
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              <a
                href="#"
                className="rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Case Study
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 px-5 py-3 text-center font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                GitHub Repo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}