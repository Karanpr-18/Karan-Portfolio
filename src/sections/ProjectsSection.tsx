import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const PROJECTS = [
  {
    num: "01",
    category: "Autonomous Multi-Agent Swarm & Graph RAG",
    name: "Career-Orbit",
    desc: "A fully autonomous multi-agent swarm and Graph RAG job hunter command center. Autonomously crawls job portals, evaluates fit via semantic scoring, auto-fills application forms with target email fallbacks, and tracks applications using a local Graph database with conversational RAG query capabilities.",
    tags: ["Next.js", "Python", "SurrealDB", "Playwright", "Docker", "Crawl4AI", "AgentScope"],
    image: "/images/career_orbit.png",
    github: "https://github.com/Karanpr-18/Career-Orbit",
    live: "https://career-orbit-karan.vercel.app/",
    isOpenSource: true
  },
  {
    num: "02",
    category: "Multi-Agent Swarm Debate Engine",
    name: "TechHubAI",
    desc: "A next-generation multi-agent swarm debate engine to orchestrate and observe complex AI debates between independent LLM agents in a real-time interactive claymorphic environment. Features token optimization, pre-summarization, and sliding-window context compression.",
    tags: ["Next.js", "TypeScript", "FastAPI", "AgentScope", "Crawl4AI"],
    image: "/images/techhubai.png",
    github: "https://github.com/Karanpr-18/TechHubAI",
    live: "https://tech-hub-ai-karan.vercel.app/",
    isOpenSource: true
  },
  {
    num: "03",
    category: "AI HR Platform",
    name: "Talent AI",
    desc: "AI-powered hiring platform with Gemini-based resume parsing, intelligent candidate scoring, and automated recruitment workflows.",
    tags: ["Python", "Flask", "Gemini API", "Pandas", "Pydantic"],
    image: "/images/talent_ai.png",
    github: "https://github.com/Karanpr-18/HR-management-app",
    live: "https://hr-management-app-w6xc.onrender.com/",
    isOpenSource: false
  },
  {
    num: "04",
    category: "NLP Tool",
    name: "CV Job Matcher",
    desc: "NLP-based CV–job matching tool that scores resume relevance against job descriptions for fast recruitment filtering.",
    tags: ["SpaCy", "Scikit-Learn", "Streamlit", "NLP"],
    image: "/images/job_scanner.png",
    github: "https://github.com/Karanpr-18/Job_matcher",
    live: "https://job-scan-app.streamlit.app/",
    isOpenSource: false
  },
  {
    num: "05",
    category: "Data Analytics & Pricing Model",
    name: "Used Car Project",
    desc: "End-to-end used car price analysis with EDA, SQL-based cleaning, and interactive client-side price prediction on GitHub Pages.",
    tags: ["HTML/CSS/JS", "Power-BI", "PostgreSQL"],
    image: "/images/used_car.png",
    github: "https://github.com/Karanpr-18/Used_car_project",
    live: "https://karanpr-18.github.io/Used_car_project/",
    isOpenSource: false
  },
  {
    num: "06",
    category: "NLP Platform",
    name: "AI News Analyser",
    desc: "News Intelligence Toolkit with three NLP models — Fake News Detection (89%), Hate Speech Detection (80%), and News Category Classification (89%) — deployed live.",
    tags: ["NLP", "Scikit-Learn", "Streamlit", "Python"],
    image: "/images/news_analyser.png",
    github: "https://github.com/Karanpr-18/AI-news-analyser",
    live: "https://ai-news-analyser.streamlit.app/",
    isOpenSource: false
  }
];

interface ProjectCardProps {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  num: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
  isOpenSource?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, total, progress, num, category, name, desc, tags, image, github, live, isOpenSource }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Spotlight state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseLeave = () => setIsHovered(false);

  // targetScale shrinks earlier cards as later ones come in
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1, targetScale]
  );

  const topOffset = 96 + index * 28; // sticky top accumulates per card

  return (
    <div
      className="sticky flex items-start justify-center w-full"
      style={{ top: `${topOffset}px`, height: '75vh' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ scale, willChange: 'transform', transformOrigin: 'top center' }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden hover:shadow-[0_10px_40px_rgba(182,0,168,0.2)] transition-shadow duration-300"
      >
        {/* Spotlight Overlay */}
        <div
          className="absolute pointer-events-none inset-0 transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(182, 0, 168, 0.12), transparent 80%)`,
          }}
        />

        {/* Top Row */}
        <div className="flex justify-between items-start w-full z-10 relative">
          <div className="flex items-center gap-4">
            <span className="font-black text-[#D7E2EA] text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-none select-none">
              {num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[#D7E2EA] opacity-60 uppercase text-xs md:text-sm tracking-wider font-light">
                {category}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold text-sm sm:text-base md:text-2xl uppercase tracking-wide flex items-center gap-2.5 flex-wrap">
                <span>{name}</span>
                {isOpenSource && (
                  <span className="inline-flex items-center gap-1.5 text-[8px] sm:text-[9px] font-black tracking-widest text-[#B600A8] uppercase px-2.5 py-1 rounded-full bg-[#B600A8]/10 border border-[#B600A8]/30 select-none shadow-[0_0_15px_rgba(182,0,168,0.15)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-pulse" />
                    Open Source
                  </span>
                )}
              </h3>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-end">
            {github && <LiveProjectButton href={github} label="GitHub" />}
            {live && <LiveProjectButton href={live} label="Live Demo" />}
          </div>
        </div>

        {/* Description & Tags */}
        <div className="w-full text-left mt-4 mb-4 z-10 relative">
          <p className="text-[#D7E2EA]/85 font-light text-xs sm:text-sm md:text-base leading-relaxed mb-3">
            {desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA]/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="w-full h-0 flex-grow overflow-hidden z-10 relative">
          <div className="w-full h-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 relative group">
            <img
              src={image.startsWith('/') ? `${import.meta.env.BASE_URL}${image.slice(1)}` : image}
              alt={`${name} preview`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0C0C0C]/10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  // One scroll tracker for the entire stacking area
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-40 relative z-20"
    >
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Scroll surface for stacking: height = cards * 100vh */}
        <div
          ref={sectionRef}
          style={{ height: `${PROJECTS.length * 100}vh` }}
          className="relative"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.num}
              index={i}
              total={PROJECTS.length}
              progress={scrollYProgress}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
