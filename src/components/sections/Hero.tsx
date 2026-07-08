import { motion } from 'framer-motion'
import { DashboardCard } from '../ui/DashboardCard'
import { HeroPortrait } from '../ui/HeroPortrait'

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
          Ryan Caillet Portfolio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
          Software engineer in training, building polished products with
          purpose.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          I’m a George Mason University computer science student and Navy veteran
          focused on building modern, accessible, mobile-friendly software that
          solves real problems.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            href="#projects"
          >
            View Projects
          </a>

          <a
            className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <div className="space-y-10">
        <HeroPortrait />
        <DashboardCard />
      </div>
    </section>
  )
}