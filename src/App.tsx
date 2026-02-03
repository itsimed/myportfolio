import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
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
      <ScrollToTop />
    </div>
    </LanguageProvider>
  )
}

export default App
