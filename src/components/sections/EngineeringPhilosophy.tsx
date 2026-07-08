import { motion } from 'framer-motion'

const principles = [
  {
    title: 'Clean Code',
    description:
      'I value readable, maintainable code over clever shortcuts. Good software should be easy for another engineer to understand.',
  },
  {
    title: 'User Experience',
    description:
      'Software should feel intuitive, responsive, and useful. I care about how real people experience what I build.',
  },
  {
    title: 'Performance',
    description:
      'Fast, lightweight interfaces matter. I try to build products that feel smooth across desktop and mobile devices.',
  },
  {
    title: 'Continuous Learning',
    description:
      'Every project is an opportunity to improve my technical judgment, communication, and problem-solving skills.',
  },
]

export function EngineeringPhilosophy() {
  return (
    <section className="mx-auto max-w-7xl py-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Engineering Philosophy
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          How I think about building software.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {principles.map((principle, index) => (
          <motion.article
            key={principle.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
          >
            <h3 className="text-2xl font-bold">{principle.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">
              {principle.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}