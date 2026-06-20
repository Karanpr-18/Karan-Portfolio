import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "AI Engineering",
    desc: "Designing and developing autonomous agents, LLM integrations, and robust intelligent systems that solve complex, real-world problems.",
    gif: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    tags: ["LLMs", "Agents", "LangChain"]
  },
  {
    num: "02",
    name: "Machine Learning",
    desc: "Building end-to-end predictive models covering data preprocessing, feature engineering, model training, and performance evaluation.",
    gif: "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    tags: ["Scikit-Learn", "PyTorch", "NLP"]
  },
  {
    num: "03",
    name: "Full-Stack Dev",
    desc: "Creating seamless web applications with robust backends and dynamic, responsive frontends tailored for machine learning products.",
    gif: "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    tags: ["React", "Next.js", "Python"]
  },
  {
    num: "04",
    name: "Data Analytics",
    desc: "Transforming raw data into actionable insights through rigorous exploratory data analysis, SQL querying, and interactive dashboards.",
    gif: "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    tags: ["SQL", "Power-BI", "Pandas"]
  },
  {
    num: "05",
    name: "System Design",
    desc: "Architecting scalable infrastructure and data pipelines for deploying, monitoring, and maintaining robust AI solutions in production.",
    gif: "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    tags: ["FastAPI", "Docker", "Cloud"]
  },
];

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="w-full max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-24 text-[#0C0C0C]" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Services
          </h2>
        </FadeIn>

        {/* 2-Column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Services list */}
          <div className="lg:col-span-7 border-t border-[rgba(12,12,12,0.15)] w-full">
            {SERVICES.map((service, i) => {
              const isActive = hoveredIdx === i;

              return (
                <div
                  key={service.num}
                  onMouseEnter={() => setHoveredIdx(i)}
                  className="group py-8 border-b border-[rgba(12,12,12,0.15)] transition-colors duration-300 cursor-pointer text-left relative overflow-hidden"
                >
                  {/* Subtle active background glow */}
                  <motion.div
                    className="absolute inset-0 bg-[#0C0C0C]/[0.02] -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number on left */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        color: isActive ? '#B600A8' : '#0C0C0C',
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-black leading-none select-none min-w-[50px] sm:min-w-[80px]"
                      style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
                    >
                      {service.num}
                    </motion.div>

                    {/* Title & Desc stacked on right */}
                    <div className="flex-grow flex flex-col justify-center">
                      <motion.h3
                        animate={{
                          x: isActive ? 8 : 0,
                          color: isActive ? '#0C0C0C' : 'rgba(12, 12, 12, 0.8)',
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-medium uppercase leading-tight"
                        style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                      >
                        {service.name}
                      </motion.h3>
                      
                      <p
                        className="font-light leading-relaxed text-[#0C0C0C] opacity-60 mt-2 max-w-xl transition-all duration-300"
                        style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
                      >
                        {service.desc}
                      </p>

                      {/* Tags under active item (especially visible on mobile/tablet) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-wrap gap-2 mt-4"
                          >
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-[rgba(12,12,12,0.2)] bg-black/5 text-black"
                              >
                                {tag}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Active GIF inline preview on Mobile/Tablet */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden w-full overflow-hidden mt-4 rounded-xl border border-[rgba(12,12,12,0.1)] shadow-md"
                          >
                            <img
                              src={service.gif}
                              alt={service.name}
                              className="w-full h-[200px] object-cover"
                            />
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
          <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[450px]">
            <div className="w-full h-full rounded-[40px] border border-[rgba(12,12,12,0.15)] bg-gradient-to-tr from-white to-[#0C0C0C]/5 p-6 flex flex-col justify-between overflow-hidden shadow-lg relative">
              
              {/* Viewport scanline grid backing */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              {/* GIF display inside screen container */}
              <div className="w-full h-[280px] rounded-[24px] border border-[rgba(12,12,12,0.1)] overflow-hidden relative shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={hoveredIdx}
                    src={SERVICES[hoveredIdx].gif}
                    alt={SERVICES[hoveredIdx].name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </AnimatePresence>
              </div>

              {/* Detail footer of the preview */}
              <div className="mt-4 flex flex-col items-start text-left gap-2 relative z-10">
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] font-mono tracking-widest text-[#B600A8] uppercase font-bold">
                    [Viewport active: {SERVICES[hoveredIdx].num}]
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B600A8] animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                  </div>
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wide">
                  {SERVICES[hoveredIdx].name}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {SERVICES[hoveredIdx].tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase font-medium tracking-wider px-2.5 py-0.5 rounded-full border border-black/10 bg-black/5 text-black">
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
