import { ThemeProvider } from "./hooks/useTheme.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-ink-950">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-solid focus:px-4 focus:py-2 focus:text-sm focus:text-solid-fg"
        >
          Skip to content
        </a>

        {/* Sidebar is fixed-positioned (out of flow), so the left padding
            below is what actually reserves its space — keep both in sync
            with the aside's own w-72 / xl:w-80 in Sidebar.jsx. */}
        <Sidebar />

        <div className="lg:pl-72 xl:pl-80">
          <main>
            <Hero />
            <TechMarquee />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
