import { motion } from 'framer-motion'

const steps = [
  {
    title: 'U.S. Navy Veteran',
    detail: 'Built discipline, teamwork, and resilience through military service.',
  },
  {
    title: 'General Assembly',
    detail: 'Completed software engineering training and started building real applications.',
  },
  {
    title: 'George Mason CS',
    detail: 'Studying computer science while strengthening algorithms, systems, and software engineering fundamentals.',
  },
  {
    title: 'Software Engineering',
    detail: 'Preparing for junior software engineering roles after graduation in December 2026.',
  },
]

export function JourneyTimeline() {
  return (
    <section className="mx-auto max-w-5xl py-24 text-center">
      <motion.p
        className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Journey
      </motion.p>

      <div className="relative mt-14">
        <motion.div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300 via-purple-400 to-emerald-300"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="relative mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-xl backdrop-blur"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 text-sm font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                {index + 1}
              </motion.div>

              <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}