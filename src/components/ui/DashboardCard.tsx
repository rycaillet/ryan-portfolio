import { motion } from 'framer-motion'

const metrics = [
  { label: 'Portfolio build', value: 'Live' },
  { label: 'Accessibility', value: 'A11y' },
  { label: 'Mobile first', value: 'Ready' },
]

const skills = ['React', 'TypeScript', 'Tailwind', 'Git', 'Testing', 'UX']

const floatingChips = [
  { label: 'React', className: '-left-8 top-12 text-cyan-200 bg-cyan-300/10 border-cyan-300/20' },
  { label: 'TypeScript', className: '-right-6 top-28 text-purple-200 bg-purple-300/10 border-purple-300/20' },
  { label: 'Accessible UI', className: 'bottom-0 left-10 text-emerald-200 bg-emerald-300/10 border-emerald-300/20' },
]

export function DashboardCard() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {floatingChips.map((chip, index) => (
        <motion.div
          key={chip.label}
          className={`absolute z-20 rounded-full border px-3 py-1.5 text-xs shadow-xl backdrop-blur sm:px-4 sm:py-2 sm:text-sm ${chip.className}`}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {chip.label}
        </motion.div>
      ))}

      <motion.div
        className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/85 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-cyan-300">RyanOS Dashboard</p>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              Online
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-bold">
            Building recruiter-ready software
          </h2>

          <p className="mt-3 text-slate-300">
            A personal engineering platform designed to showcase clean code,
            strong UX, accessibility, and project-level thinking.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs text-slate-400">{metric.label}</p>
                <p className="mt-2 font-semibold text-slate-100">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Core stack
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-4">
            <p className="text-sm font-medium text-slate-200">
              Current milestone
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Designing and building the portfolio foundation.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}