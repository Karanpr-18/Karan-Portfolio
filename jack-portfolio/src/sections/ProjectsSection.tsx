import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const PROJECTS = [
  {
    num: "01",
    category: "Full Stack & Multi-Agent",
    name: "Career-Orbit",
    image: "/images/used_car.png",
    github: "https://github.com/Karanpr-18/Career-Orbit",
    live: ""
  },
  {
    num: "02",
    category: "Multi-Agent AI",
    name: "TechHubAI",
    image: "/images/talent_ai.png",
    github: "https://github.com/Karanpr-18/TechHubAI",
    live: ""
  },
  {
    num: "03",
    category: "AI HR Platform",
    name: "Talent AI",
    image: "/images/talent_ai.png",
    github: "https://github.com/Karanpr-18/HR-management-app",
    live: "https://hr-management-app-w6xc.onrender.com/"
  },
  {
    num: "04",
    category: "NLP Tool",
    name: "CV Job Matcher",
    image: "/images/job_scanner.png",
    github: "https://github.com/Karanpr-18/Job_matcher",
    live: "https://job-scan-app.streamlit.app/"
  },
  {
    num: "05",
    category: "Data Analytics",
    name: "Used Car Project",
    image: "/images/used_car.png",
    github: "https://github.com/Karanpr-18/Used_car_project",
    live: "https://karanpr-18.github.io/Used_car_project/"
  },
  {
    num: "06",
    category: "NLP Platform",
    name: "AI News Analyser",
    image: "/images/news_analyser.png",
    github: "https://github.com/Karanpr-18/AI-news-analyser",
    live: "https://ai-news-analyser.streamlit.app/"
  }
];

interface ProjectCardProps {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  num: string;
  category: string;
  name: string;
  image: string;
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, total, progress, num, category, name, image, github, live }) => {
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
        <div className="flex justify-between items-center w-full z-10 relative">
          <div className="flex items-center gap-4">
            <span className="font-black text-[#D7E2EA] text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-none select-none">
              {num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[#D7E2EA] opacity-60 uppercase text-xs md:text-sm tracking-wider font-light">
                {category}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold text-sm sm:text-base md:text-2xl uppercase tracking-wide">
                {name}
              </h3>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-end">
            {github && <LiveProjectButton href={github} label="GitHub" />}
            {live && <LiveProjectButton href={live} label="Live Demo" />}
          </div>
        </div>

        {/* Image Display */}
        <div className="w-full h-full mt-6 flex-grow overflow-hidden z-10 relative">
          <div className="w-full h-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 relative group">
            <img
              src={image}
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
