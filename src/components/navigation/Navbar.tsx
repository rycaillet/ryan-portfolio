export function Navbar() {
  return (
    <nav className="sticky top-6 z-50 mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
      <a href="#" className="text-lg font-semibold tracking-tight">
        Ryan Caillet
      </a>

      <div className="flex items-center gap-5 text-sm text-slate-300">
        <a href="#about" className="transition hover:text-cyan-300">
          About
        </a>
        <a href="#projects" className="transition hover:text-cyan-300">
          Projects
        </a>
        <a href="#contact" className="transition hover:text-cyan-300">
          Contact
        </a>
      </div>
    </nav>
  )
}