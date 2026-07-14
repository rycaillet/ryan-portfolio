import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Rocket,
} from 'lucide-react'

import { projects, type Project } from '../../data/projects'

type ProjectShowcaseProps = {
  project: Project
}

function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const hasImages = project.images.length > 0
  const activeImage = project.images[activeImageIndex]

  function showPreviousImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? project.images.length - 1 : currentIndex - 1,
    )
  }

  function showNextImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === project.images.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/10"
    >
      <div className="p-5 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
              project.status === 'Live'
                ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-300'
                : 'border-cyan-300/30 bg-cyan-300/10 text-cyan-300'
            }`}
          >
            {project.status}
          </span>

          {project.featured && (
            <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              Featured project
            </span>
          )}
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          {project.subtitle}
        </p>

        <h3 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
          {project.description}
        </p>
      </div>

      <div className="px-5 sm:px-8 lg:px-10">
        {hasImages && activeImage ? (
          <div>
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/30">
              <motion.img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.005] sm:aspect-video"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent px-5 pb-5 pt-24 sm:px-7 sm:pb-7">
                <p className="text-sm font-semibold text-white sm:text-base">
                  {activeImage.label}
                </p>

                {project.images.length > 1 && (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label={`Show previous ${project.title} screenshot`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-white backdrop-blur transition hover:border-cyan-300 hover:text-cyan-300 sm:h-11 sm:w-11"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label={`Show next ${project.title} screenshot`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-white backdrop-blur transition hover:border-cyan-300 hover:text-cyan-300 sm:h-11 sm:w-11"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {project.images.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {project.images.map((image, imageIndex) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImageIndex(imageIndex)}
                    aria-label={`Show ${image.label}`}
                    aria-pressed={activeImageIndex === imageIndex}
                    className={`h-2 rounded-full transition-all ${
                      activeImageIndex === imageIndex
                        ? 'w-8 bg-cyan-300'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-slate-950 to-purple-500/15 p-8 sm:min-h-[420px]">
            <div className="absolute -left-16 top-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-16 right-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative max-w-lg text-center">
              {project.status === 'In Development' ? (
                <Rocket className="mx-auto h-12 w-12 text-cyan-300" />
              ) : (
                <Code2 className="mx-auto h-12 w-12 text-cyan-300" />
              )}

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {project.status}
              </p>

              <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {project.title}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.status === 'In Development'
                  ? 'This project is being planned and will become a complete engineering case study as development progresses.'
                  : 'Project screenshots will be added to this showcase next.'}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-10 p-5 pt-10 sm:p-8 sm:pt-12 lg:grid-cols-2 lg:gap-14 lg:p-10 lg:pt-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Technology
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.learned && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/35 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                What I learned
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.learned}
              </p>
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Engineering highlights
          </p>

          <ul className="mt-4 grid gap-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-slate-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                  <Check className="h-3.5 w-3.5" />
                </span>

                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  View live application
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
                >
                  View source code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Applications built around real problems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Each project represents a different stage of my growth as a
            software engineer, from focused JavaScript applications to deployed
            full-stack systems and upcoming AI-powered tools.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-6xl space-y-12 sm:mt-20 sm:space-y-16">
          {projects.map((project) => (
            <ProjectShowcase key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}