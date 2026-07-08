import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Mongoose'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'VS Code', 'Agile', 'Documentation', 'Testing'],
  },
]

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Skills
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Technologies I use to build modern web applications.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-cyan-300">{group.title}</h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}