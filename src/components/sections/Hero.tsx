import { DashboardCard } from '../ui/DashboardCard'

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Ryan Caillet Portfolio
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Software engineer in training, building polished products with
          purpose.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I’m a George Mason University computer science student and Navy veteran
          focused on building modern, accessible, mobile-friendly software that
          solves real problems.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <DashboardCard />
    </section>
  )
}