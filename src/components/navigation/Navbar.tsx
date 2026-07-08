export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
      <a href="#" className="font-semibold tracking-tight">
        Ryan Caillet
      </a>

      <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
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