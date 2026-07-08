import { Navbar } from './components/navigation/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { Hero } from './components/sections/Hero'
import { ImpactStats } from './components/sections/ImpactStats'
import { JourneyTimeline } from './components/sections/JourneyTimeline'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { EngineeringPhilosophy } from './components/sections/EngineeringPhilosophy'
import { SkillsSection } from './components/sections/SkillsSection'

function App() {
  return (
    <main className="min-h-screen overflow-hidden px-6 py-6 text-slate-100">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AboutSection />
      <ImpactStats />
      <JourneyTimeline />
      <EngineeringPhilosophy />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App