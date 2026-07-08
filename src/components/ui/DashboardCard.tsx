import { motion } from 'framer-motion'

const profileStats = [
  { label: 'Status', value: 'Active' },
  { label: 'Available', value: 'Dec 2026' },
  { label: 'Location', value: 'Northern VA' },
]

const focusAreas = ['Frontend', 'Full Stack', 'Clean Code', 'Testing', 'UX']

const floatingChips = [
  {
    label: 'Problem Solver',
    className:
      'left-6 top-0 text-cyan-200 bg-cyan-300/10 border-cyan-300/20 lg:left-8 lg:top-0',
  },
  {
    label: 'User Focused',
    className:
      'right-6 top-0 text-purple-200 bg-purple-300/10 border-purple-300/20 lg:right-8 lg:top-0',
  },
  {
    label: 'Always Learning',
    className:
      'bottom-2 left-8 text-emerald-200 bg-emerald-300/10 border-emerald-300/20 lg:-bottom-4 lg:left-10',
  },
]

export function DashboardCard() {
  return (
    <motion.div
      className="relative pt-12"
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
          animate={{ y: [0, -8, 0] }}
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
        className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-6"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/85 p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-300">
                Engineering Snapshot
              </p>

              <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">
                A quick look at what I am building toward as a software
                engineer.
              </p>
            </div>

            <span className="w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              Open
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-bold leading-tight">
            Building useful software with discipline, curiosity, and purpose.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            I specialize in engineering maintainable software solutions, with a strong focus on advancing my skills in frontend and full-stack development, testing, and software design.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {profileStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-xs text-slate-400">{stat.label}</p>

                <p className="mt-2 font-semibold text-slate-100">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Current focus
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-4">
            <p className="text-sm font-medium text-slate-200">Current goal</p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Build polished projects that show clean architecture, thoughtful
              user experience, and real software engineering growth.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}