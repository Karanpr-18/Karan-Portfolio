import React, { useRef, useEffect, useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { SplineScene } from '../components/SplineScene';


/* ─── HeroSection ────────────────────────────────────────────── */
export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen w-full relative overflow-hidden bg-white dark:bg-[#0C0C0C] transition-colors duration-500"
    >
      {/* ── Background ambient blobs ───────────────────────────── */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#7621B0]/10 dark:bg-[#18011F] blur-[120px] pointer-events-none z-0 transition-all duration-500" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#B600A8]/5 dark:bg-[#7621B0]/20 blur-[140px] pointer-events-none z-0 transition-all duration-500" />

      {/* ── Navbar ────────────────────────────────────────────── */}
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        {(['about', 'services', 'projects', 'contact'] as const).map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            className="relative text-black/70 dark:text-[#D7E2EA]/85 hover:text-black dark:hover:text-white font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-100 group py-1 transition-colors duration-300"
            style={{ cursor: 'pointer' }}
          >
            {id === 'services' ? 'Tech Stack' : id.charAt(0).toUpperCase() + id.slice(1)}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#B600A8] to-[#7621B0] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        ))}
      </FadeIn>

      {/* ── Hero heading (behind robot) ───────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-50 md:-translate-y-60"
        style={{ zIndex: 8 }}
      >
        <div className="w-full overflow-hidden px-4">
          <FadeIn delay={0.15} y={40} as="div" className="w-full text-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[14vw] md:text-[14vw] lg:text-[15vw] select-none">
              Hi, i&apos;m karan
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* ── Fixed Spline 3D Scene ───────────────────────────── */}
      {ready && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] pointer-events-auto"
          style={{ zIndex: 20 }}
        >
          {/* Pulsing glow orb behind robot */}
          <div
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%', height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #7621B0 0%, #B600A8 30%, transparent 72%)',
              filter: 'blur(90px)',
              zIndex: 0,
            }}
          />
          <div className="relative w-full h-full z-10">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-30">
        <FadeIn delay={0.35} y={20} as="div" className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p
            className="text-black/70 dark:text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left transition-colors duration-500"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an ai engineer driven by crafting striking, intelligent, and state-of-the-art solutions
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} as="div">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

