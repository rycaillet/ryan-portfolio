import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-7xl py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Contact
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s build something worth talking about.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m preparing for software engineering opportunities after
          graduating from George Mason University in December 2026.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:ryancaillet1995@gmail.com"
            className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/rycaillet"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  )
}