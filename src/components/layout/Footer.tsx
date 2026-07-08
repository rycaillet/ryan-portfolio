export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-white/10 py-8 text-sm">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Ryan Caillet</h3>

          <p className="mt-2 text-slate-400">
            Software Engineer • George Mason University
          </p>

          <p className="mt-1 text-slate-500">Graduating December 2026</p>

          <p className="mt-5 max-w-2xl text-slate-500">
            Designed and developed by Ryan Caillet using
            <span className="text-cyan-300"> React</span>,
            <span className="text-cyan-300"> TypeScript</span>,
            <span className="text-cyan-300"> Tailwind CSS</span>, and
            <span className="text-cyan-300"> Framer Motion</span>.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <a
            href="mailto:ryancaillet1995@gmail.com"
            className="transition-all hover:translate-x-1 hover:text-cyan-300 md:hover:-translate-x-1"
          >
            Email
          </a>

          <a
            href="https://github.com/rycaillet"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:translate-x-1 hover:text-cyan-300 md:hover:-translate-x-1"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ryan-caillet"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:translate-x-1 hover:text-cyan-300 md:hover:-translate-x-1"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-white/5 pt-6 text-center text-slate-500">
        © {new Date().getFullYear()} Ryan Caillet
      </div>
    </footer>
  )
}