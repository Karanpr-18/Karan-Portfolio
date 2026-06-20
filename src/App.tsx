import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { Mail, Github, Linkedin } from 'lucide-react';
import { FadeIn } from './components/FadeIn';

function App() {
  return (
    <div
      className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#0C0C0C] py-20 px-6 md:px-10 border-t border-[#D7E2EA]/10 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <FadeIn delay={0} y={20} className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="hero-heading font-black uppercase text-3xl md:text-5xl tracking-tight mb-2">
              Let&apos;s Connect
            </h2>
            <p className="text-[#D7E2EA] opacity-60 font-light max-w-sm">
              Ready to build something incredible? Reach out for collaborations and projects.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="flex flex-col items-center md:items-end gap-4">
            <a
              href="mailto:Karanpr1806@gmail.com"
              className="flex items-center gap-3 text-lg md:text-xl font-medium hover:text-[#B600A8] transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Karanpr1806@gmail.com
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Karanpr-18" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#D7E2EA]/5 hover:bg-[#B600A8]/20 hover:text-white transition-all duration-200" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/karan-bhoriya-b5a3382b7/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#D7E2EA]/5 hover:bg-[#B600A8]/20 hover:text-white transition-all duration-200" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-[#D7E2EA]/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#D7E2EA]/40">
          <p>© {new Date().getFullYear()} Karan Bhoriya. All rights reserved.</p>
          <p className="uppercase tracking-widest font-mono">AI Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
