import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Navbar />
              <main className="w-full overflow-x-hidden">
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-background border-t border-foreground/10 w-full">
        
        <div className="container mx-auto px-4 sm:px-6 py-8 w-full overflow-hidden">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/90 text-sm">
              &copy; 2025 - Imed Belouettar
            </p>
            <div className="flex items-center gap-6 text-sm text-foreground/90">
              <span>Merci pour votre visite ✨</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </LanguageProvider>
  )
}

export default App
