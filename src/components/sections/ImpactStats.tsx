import { motion } from 'framer-motion'

const stats = [
  { value: '2026', label: 'Graduating from GMU CS' },
  { value: 'React', label: 'Frontend focus' },
  { value: 'Mobile', label: 'Responsive design' },
  { value: 'Clearable', label: 'Security clearance' },
]

export function ImpactStats() {
  return (
    <motion.section
      className="mx-auto max-w-7xl py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <p className="text-3xl font-bold text-cyan-300">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}