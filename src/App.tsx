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
      <footer className="bg-gradient-to-br from-foreground/5 via-foreground/3 to-foreground/5 border-t border-foreground/10 relative overflow-hidden w-full">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10 w-full overflow-hidden">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              &copy; 2025 - Imed Eddine Belouettar. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted">
              <span>Made with ❤️ using Vite, React & TailwindCSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </LanguageProvider>
  )
}

export default App
