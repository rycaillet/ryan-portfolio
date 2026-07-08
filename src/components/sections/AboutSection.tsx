import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-7xl py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        About
      </p>

      <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
        I&apos;m building the habits, projects, and engineering mindset needed
        to become a strong software engineer.
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        My background combines military experience, computer science education,
        and hands-on software projects. I care deeply about writing clean code,
        building polished user experiences, solving real problems, and
        continuously improving as an engineer.
      </p>
    </motion.section>
  )
}