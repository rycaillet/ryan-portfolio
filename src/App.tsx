import { Navbar } from './components/navigation/Navbar'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <main className="min-h-screen overflow-hidden px-6 py-6 text-slate-100">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App