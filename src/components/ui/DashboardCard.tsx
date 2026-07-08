const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility']

export function DashboardCard() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
      <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-5">
        <p className="text-sm text-cyan-300">Currently building</p>

        <h2 className="mt-3 text-2xl font-bold">Recruiter-ready portfolio</h2>

        <p className="mt-3 text-slate-300">
          A modern React, TypeScript, and Tailwind portfolio designed like a real
          product: responsive, accessible, animated, and built to scale.
        </p>

        <div className="mt-6 grid gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}