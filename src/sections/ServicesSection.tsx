import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

// High-fidelity official developer logos with brand-colored CDN URLs and fallback custom paths
const TECH_INFO: Record<string, { color: string; logoUrl?: string; svg?: React.ReactNode }> = {
  "PYTHON": {
    color: "#3776AB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  "JAVA": {
    color: "#007396",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  "C": {
    color: "#659AD2",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  },
  "C++": {
    color: "#00599C",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  "SQL": {
    color: "#00758F",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
  },
  "HTML": {
    color: "#E34F26",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  "CSS": {
    color: "#1572B6",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  "JS": {
    color: "#F7DF1E",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  "TENSORFLOW": {
    color: "#FF6F00",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  "PYTORCH": {
    color: "#EE4C2C",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
  },
  "KERAS": {
    color: "#D00000",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"
  },
  "SCIKIT-LEARN": {
    color: "#F7931E",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
  },
  "SPACY": {
    color: "#09A3D5",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spacy.svg"
  },
  "PANDAS": {
    color: "#150458",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  "NUMPY": {
    color: "#013243",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  },
  "MATPLOTLIB": {
    color: "#11557C",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
  },
  "STREAMLIT": {
    color: "#FF4B4B",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"
  },
  "REACT": {
    color: "#61DAFB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  "NEXT.JS": {
    color: "#000000",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg"
  },
  "FASTAPI": {
    color: "#009688",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
  },
  "FLASK": {
    color: "#000000",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
  },
  "ONNX": {
    color: "#005C99",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/onnx.svg"
  },
  "PYDANTIC": {
    color: "#E1145C",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pydantic.svg"
  },
  "TAILWIND CSS": {
    color: "#06B6D4",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  "SURREALDB": {
    color: "#FF00A0",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/surrealdb.svg"
  },
  "POSTGRESQL": {
    color: "#4169E1",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  "GIT": {
    color: "#F05032",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  "POWER BI": {
    color: "#F2C811",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg"
  },
  "CANVA": {
    color: "#00C4CC",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg"
  },
  "LINUX": {
    color: "#FCC624",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  "JUPYTER": {
    color: "#F37626",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
  },
  "GEMINI": {
    color: "#1A73E8",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg"
  },
  "GROQ": {
    color: "#F55036",
    logoUrl: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/groq.svg"
  },
  "MISTRAL": {
    color: "#FD5A24",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mistralai.svg"
  },
  "CRAWL4AI": {
    color: "#50ffff",
    logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQFyGRIuF2bqeQ/company-logo_200_200/B56ZfTe2EtHoAI-/0/1751599768258/crawl4ai_logo?e=2147483647&v=beta&t=skhRct8O4VaW42IwD7eC9Eqc9Pbavt7n6q7QgaJTQE8"
  },
  "AGENTSCOPE": {
    color: "#8B5CF6",
    logoUrl: "https://img.alicdn.com/imgextra/i1/O1CN01nTg6w21NqT5qFKH1u_!!6000000001621-55-tps-550-550.svg"
  },
  "CREWAI": {
    color: "#B600A8",
    logoUrl: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/crewai.svg"
  },
  "LANGGRAPH": {
    color: "#3B82F6",
    logoUrl: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langgraph.svg"
  },
  "ADVANCED RAG": {
    color: "#10B981",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#10B981]" strokeWidth="2">
        <path d="M4 6c0-1.66 4-3 9-3s9 1.34 9 3-4 3-9 3-9-1.34-9-3z" fill="#10B981" />
        <path d="M4 6v6c0 1.66 4 3 9 3s9-1.34 9-3V6" />
        <path d="M4 12v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        <path d="M12 11l4 4m0 0l-4 4m4-4H8" strokeWidth="2.5" />
      </svg>
    )
  }
};

const TECH_STACK = [
  {
    num: "01",
    name: "Languages",
    desc: "Robust foundation for implementing machine learning algorithms, building backend APIs, styling, and general programming.",
    image: "/images/career_orbit.png",
    tags: ["Python", "Java", "C", "C++", "SQL", "HTML", "CSS", "JS"]
  },
  {
    num: "02",
    name: "AI & Machine Learning",
    desc: "Comprehensive toolkit for data manipulation, predictive modeling, deep learning, NLP, and model evaluation.",
    image: "/images/talent_ai.png",
    tags: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "SpaCy", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    num: "03",
    name: "Agentic & LLM Frameworks",
    desc: "Building sophisticated multi-agent orchestrations, advanced RAG architectures, and complex language model applications.",
    image: "/images/techhubai.png",
    tags: ["AgentScope", "CrewAI", "LangGraph", "Advanced RAG", "Gemini", "Groq", "Mistral", "Crawl4AI"]
  },
  {
    num: "04",
    name: "Libraries & Frameworks",
    desc: "Core packages and utility frameworks for building modern web frontends, API servers, and interactive dashboards.",
    image: "/images/job_scanner.png",
    tags: ["Streamlit", "React", "Next.js", "FastAPI", "Flask", "Tailwind CSS", "ONNX", "Pydantic"]
  },
  {
    num: "05",
    name: "Databases & Tools",
    desc: "Relational, document, and vector-oriented databases optimized for fast retrieval, search, and development.",
    image: "/images/news_analyser.png",
    tags: ["SurrealDB", "PostgreSQL", "Git", "Power BI", "Canva", "Linux", "Jupyter"]
  },
];

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  return (
    <section id="services" className="bg-white dark:bg-[#0C0C0C] text-black dark:text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 transition-colors duration-500">
      <div className="w-full max-w-7xl mx-auto">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-24 text-black dark:text-[#D7E2EA]" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Tech Stack
          </h2>
        </FadeIn>

        {/* 2-Column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tech Stack list */}
          <div className="lg:col-span-7 border-t border-[rgba(12,12,12,0.15)] dark:border-[rgba(215,226,234,0.15)] w-full">
            {TECH_STACK.map((tech, i) => {
              const isActive = hoveredIdx === i;

              return (
                <div
                  key={tech.num}
                  onMouseEnter={() => setHoveredIdx(i)}
                  className="group py-8 border-b border-[rgba(12,12,12,0.15)] dark:border-[rgba(215,226,234,0.15)] transition-colors duration-300 cursor-pointer text-left relative overflow-hidden"
                >
                  {/* Subtle active background glow */}
                  <motion.div
                    className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number on left */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        color: isActive ? '#B600A8' : (isDark ? '#D7E2EA' : '#A0AEC0'),
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-black leading-none select-none min-w-[50px] sm:min-w-[80px]"
                      style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
                    >
                      {tech.num}
                    </motion.div>

                    {/* Title & Desc stacked on right */}
                    <div className="flex-grow flex flex-col justify-center">
                      <motion.h3
                        animate={{
                          x: isActive ? 8 : 0,
                          color: isActive ? (isDark ? '#D7E2EA' : '#0C0C0C') : (isDark ? 'rgba(215, 226, 234, 0.6)' : 'rgba(12, 12, 12, 0.6)'),
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-medium uppercase leading-tight"
                        style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                      >
                        {tech.name}
                      </motion.h3>
                      
                      <p
                        className="font-light leading-relaxed text-black/70 dark:text-[#D7E2EA] opacity-60 mt-2 max-w-xl transition-all duration-300"
                        style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
                      >
                        {tech.desc}
                      </p>

                      {/* Interactive logo cards on Mobile/Tablet */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden w-full overflow-hidden mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2.5 p-3.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-[24px]"
                          >
                            {tech.tags.map((tag) => {
                              const info = TECH_INFO[tag.toUpperCase()] || {
                                color: "#B600A8",
                                svg: (
                                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border border-[#B600A8] bg-[#B600A8]/10">
                                    {tag.substring(0, 2).toUpperCase()}
                                  </div>
                                )
                              };
                              const isDarkLogo = info.color === '#000000' || 
                                (info.logoUrl && (
                                  info.logoUrl.includes('simple-icons') || 
                                  info.logoUrl.includes('lobehub') || 
                                  info.logoUrl.includes('alicdn') || 
                                  info.logoUrl.includes('media.licdn.com') ||
                                  info.logoUrl.includes('crawl4ai') ||
                                  tag.toUpperCase() === 'FLASK'
                                ));
                              const shouldInvert = isDark && isDarkLogo;

                              return (
                                <div
                                  key={tag}
                                  className="flex flex-col items-center justify-between p-2 rounded-2xl bg-white dark:bg-[#141414] border border-black/10 dark:border-white/10 shadow-sm hover:border-[#B600A8]/30 transition-all duration-300 min-h-[104px] [&_svg]:w-14 [&_svg]:h-14"
                                >
                                  <div className="flex-grow flex items-center justify-center h-14 w-14">
                                    {info.logoUrl ? (
                                      <img
                                        src={info.logoUrl}
                                        className={`w-14 h-14 object-contain ${shouldInvert ? 'invert brightness-200' : ''}`}
                                        alt={tag}
                                      />
                                    ) : (
                                      info.svg
                                    )}
                                  </div>
                                  <span className="text-[9px] font-black text-center uppercase tracking-wider text-black/90 dark:text-[#D7E2EA]/90 font-mono mt-1">
                                    {tag}
                                  </span>
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic interactive preview card (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[580px]">
            <div className="w-full h-full rounded-[40px] border border-black/10 dark:border-white/10 bg-gradient-to-tr from-white/90 to-[#0C0C0C]/5 dark:from-[#0C0C0C] dark:to-[#141414]/50 p-6 flex flex-col justify-between overflow-hidden shadow-lg relative transition-colors duration-500">
              
              {/* Viewport scanline grid backing */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              {/* Grid of Mini Cards instead of Image */}
              <div className="w-full h-[400px] rounded-[24px] border border-black/5 dark:border-white/5 overflow-hidden relative shadow-inner p-4 bg-black/[0.01] dark:bg-white/[0.01] transition-colors duration-500">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-3 gap-3.5 w-full h-full content-center"
                  >
                    {TECH_STACK[hoveredIdx].tags.map((tag) => {
                      const info = TECH_INFO[tag.toUpperCase()] || {
                        color: "#B600A8",
                        svg: (
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border border-[#B600A8] bg-[#B600A8]/10">
                            {tag.substring(0, 2).toUpperCase()}
                          </div>
                        )
                      };
                      const isDarkLogo = info.color === '#000000' || 
                        (info.logoUrl && (
                          info.logoUrl.includes('simple-icons') || 
                          info.logoUrl.includes('lobehub') || 
                          info.logoUrl.includes('alicdn') || 
                          info.logoUrl.includes('media.licdn.com') ||
                          info.logoUrl.includes('crawl4ai') ||
                          tag.toUpperCase() === 'FLASK'
                        ));
                      const shouldInvert = isDark && isDarkLogo;

                      return (
                        <motion.div
                          key={tag}
                          className="flex flex-col items-center justify-between p-2 rounded-2xl bg-white dark:bg-[#141414] border border-black/10 dark:border-white/10 shadow-sm hover:border-[#B600A8]/40 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-md cursor-pointer h-28 [&_svg]:w-16 [&_svg]:h-16 text-black dark:text-[#D7E2EA]"
                          whileHover={{ y: -2 }}
                        >
                          <div className="flex-grow flex items-center justify-center h-16 w-16">
                            {info.logoUrl ? (
                              <img
                                src={info.logoUrl}
                                className={`w-16 h-16 object-contain ${shouldInvert ? 'invert brightness-200' : ''}`}
                                alt={tag}
                              />
                            ) : (
                              info.svg
                            )}
                          </div>
                          <span className="text-[9px] font-black text-center uppercase tracking-wider text-black/90 dark:text-[#D7E2EA]/90 font-mono mt-1">
                            {tag}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Detail footer of the preview */}
              <div className="mt-4 flex flex-col items-start text-left gap-2 relative z-10">
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] font-mono tracking-widest text-[#B600A8] uppercase font-bold">
                    [Stack Category: {TECH_STACK[hoveredIdx].num}]
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B600A8] animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/20" />
                  </div>
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wide">
                  {TECH_STACK[hoveredIdx].name}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {TECH_STACK[hoveredIdx].tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase font-medium tracking-wider px-2.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-[#D7E2EA]/5 text-black dark:text-[#D7E2EA]/95">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
