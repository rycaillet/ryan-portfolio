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
        I didn't take the traditional path into software engineering—and that's
        become one of my biggest strengths.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
        After serving in the U.S. Navy, I returned to school determined to build
        a career creating software that people genuinely enjoy using. Today I'm
        completing my Computer Science degree at George Mason University while
        continuously building projects that challenge me to become a better
        engineer.
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        I'm especially interested in clean code, thoughtful user experiences,
        accessibility, responsive design, and writing software that's both
        maintainable and practical. Every project in this portfolio represents a
        new skill learned, a problem solved, or a challenge that pushed me
        forward.
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        My goal isn't simply to land my first software engineering job; it's to
        become the kind of engineer teammates enjoy working with and users trust
        to build reliable products.
      </p>
    </motion.section>
  )
}