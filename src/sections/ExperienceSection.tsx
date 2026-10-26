import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  Download,
  Sparkles,
  Award,
  Building2,
  FileText,
  TrendingUp,
} from 'lucide-react';

type TabType = 'work' | 'publications' | 'education';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('work');

  const cvPdfUrl = `${import.meta.env.BASE_URL}Karan_Bhoriya_CV_ATS.pdf`;

  return (
    <section
      id="experience"
      className="min-h-screen w-full relative bg-white dark:bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-24 sm:py-28 md:py-32 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
    >
      {/* Anchor for backward compatibility with #about */}
      <div id="about" className="absolute -top-20" />

      {/* Ambient glowing blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[5%] w-[340px] h-[340px] rounded-full bg-[#7621B0] filter blur-[110px] pointer-events-none z-0 transition-all duration-500 opacity-[0.04] dark:opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.18, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="absolute bottom-[15%] right-[5%] w-[380px] h-[380px] rounded-full bg-[#B600A8] filter blur-[130px] pointer-events-none z-0 transition-all duration-500 opacity-[0.03] dark:opacity-[0.15]"
      />

      {/* Decorative 3D elements in corners with floating animations */}
      <FadeIn
        delay={0.1}
        x={-60}
        y={0}
        duration={0.9}
        className="hidden xl:block absolute top-[6%] left-[2%] z-10 w-[140px] pointer-events-none select-none opacity-80"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 4, -2, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon icon"
            className="w-full h-auto"
          />
        </motion.div>
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={60}
        y={0}
        duration={0.9}
        className="hidden xl:block absolute top-[6%] right-[2%] z-10 w-[130px] pointer-events-none select-none opacity-80"
      >
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, -4, 2, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.3 }}
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego icon"
            className="w-full h-auto"
          />
        </motion.div>
      </FadeIn>

      {/* Main Section Content */}
      <div className="w-full max-w-6xl flex flex-col items-center z-20">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono tracking-widest uppercase text-black/70 dark:text-[#D7E2EA]/70 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            Background &amp; Track Record
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
          >
            Experience
          </h2>
          <p className="mt-4 text-black/70 dark:text-[#D7E2EA]/75 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light leading-relaxed">
            AI Engineer focused on architecting production-grade autonomous agent swarms,
            enterprise knowledge graph RAG, and edge-native model optimizations.
          </p>
        </FadeIn>

        {/* Interactive Tab Switcher & Resume Action */}
        <FadeIn delay={0.15} y={20} className="mt-10 sm:mt-12 w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('work')}
              className={`relative px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === 'work'
                  ? 'text-white'
                  : 'text-black/70 dark:text-[#D7E2EA]/70 hover:text-black dark:hover:text-white'
              }`}
            >
              {activeTab === 'work' && (
                <motion.div
                  layoutId="activeExperienceTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'work' ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60'}`}>
                2
              </span>
            </button>

            <button
              onClick={() => setActiveTab('publications')}
              className={`relative px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === 'publications'
                  ? 'text-white'
                  : 'text-black/70 dark:text-[#D7E2EA]/70 hover:text-black dark:hover:text-white'
              }`}
            >
              {activeTab === 'publications' && (
                <motion.div
                  layoutId="activeExperienceTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <BookOpen className="w-4 h-4" />
              <span>Research</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'publications' ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60'}`}>
                3
              </span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`relative px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === 'education'
                  ? 'text-white'
                  : 'text-black/70 dark:text-[#D7E2EA]/70 hover:text-black dark:hover:text-white'
              }`}
            >
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeExperienceTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>

          {/* Download CV button */}
          <a
            href={cvPdfUrl}
            download="Karan_Bhoriya_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-black/20 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.03] hover:border-[#B600A8]/60 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black dark:text-[#D7E2EA] hover:text-[#B600A8] dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 group"
          >
            <Download className="w-4 h-4 text-[#B600A8] group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span>Download CV (PDF)</span>
          </a>
        </FadeIn>

        {/* Tab Content Display */}
        <div className="w-full mt-8 sm:mt-12 min-h-[420px]">
          <AnimatePresence mode="wait">
            {/* ── TAB 1: Work Experience ── */}
            {activeTab === 'work' && (
              <motion.div
                key="work-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6 sm:space-y-8"
              >
                {/* 1. Sopra Steria */}
                <div className="group relative rounded-3xl p-6 sm:p-8 md:p-10 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md shadow-sm hover:shadow-[0_12px_40px_rgba(182,0,168,0.12)] transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7621B0] to-[#B600A8] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-black dark:text-white">
                            Sopra Steria
                          </h3>
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#B600A8]/15 text-[#B600A8] border border-[#B600A8]/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-pulse" />
                            Enterprise AI &amp; Agentic RAG
                          </span>
                        </div>
                        <p className="text-sm sm:text-base font-medium text-black/80 dark:text-[#D7E2EA] mt-1">
                          AI/ML Engineer
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs font-mono text-black/60 dark:text-[#D7E2EA]/60">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-[#B600A8]" />
                        May 2026 – Aug 2026
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-[#7621B0]" />
                        Noida, India
                      </span>
                    </div>
                  </div>

                  {/* Bullet points with quantifiable metrics */}
                  <ul className="space-y-3.5 text-sm sm:text-base text-black/80 dark:text-[#D7E2EA]/85 font-light leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#B600A8] flex-shrink-0 shadow-[0_0_8px_#B600A8]" />
                      <span>
                        <strong className="font-semibold text-black dark:text-white">Enterprise SAP OData Gateway:</strong>{' '}
                        Architected and deployed high-performance gateway (FastAPI, LangGraph) with Hybrid Knowledge Graph-RAG over SurrealDB, slashing enterprise data retrieval times from{' '}
                        <span className="font-semibold text-[#B600A8] dark:text-[#E255D5]">hours to sub-5 seconds</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7621B0] flex-shrink-0 shadow-[0_0_8px_#7621B0]" />
                      <span>
                        <strong className="font-semibold text-black dark:text-white">Ephemeral Air-Gapped Python Sandbox:</strong>{' '}
                        Engineered secure Docker container with AST linting for automated SAP data extraction, cutting enterprise reporting latency by{' '}
                        <span className="font-semibold text-[#B600A8] dark:text-[#E255D5]">90%</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#B600A8] flex-shrink-0 shadow-[0_0_8px_#B600A8]" />
                      <span>
                        <strong className="font-semibold text-black dark:text-white">Next.js 15 Conversational Interfaces:</strong>{' '}
                        Shipped multi-channel real-time SSE streaming interfaces across Web, Telegram, and Microsoft Teams, reducing LLM token consumption by{' '}
                        <span className="font-semibold text-[#B600A8] dark:text-[#E255D5]">85%</span>.
                      </span>
                    </li>
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-black/5 dark:border-white/5">
                    {['FastAPI', 'LangGraph', 'SurrealDB', 'Knowledge Graph RAG', 'Docker', 'AST Linting', 'Next.js 15', 'SSE Streaming', 'SAP OData'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-[#D7E2EA]/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Humana People to People India */}
                <div className="group relative rounded-3xl p-6 sm:p-8 md:p-10 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md shadow-sm hover:shadow-[0_12px_40px_rgba(182,0,168,0.12)] transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-black dark:text-white">
                            Humana People to People India
                          </h3>
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#7621B0]/15 text-[#7621B0] dark:text-[#D7E2EA] border border-[#7621B0]/30">
                            LLM Pipelines &amp; Analytics
                          </span>
                        </div>
                        <p className="text-sm sm:text-base font-medium text-black/80 dark:text-[#D7E2EA] mt-1">
                          Prompt Engineer &amp; Data Analyst
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs font-mono text-black/60 dark:text-[#D7E2EA]/60">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-[#B600A8]" />
                        Apr 2025 – Aug 2025
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-[#7621B0]" />
                        Vasant Kunj, New Delhi
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3.5 text-sm sm:text-base text-black/80 dark:text-[#D7E2EA]/85 font-light leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#B600A8] flex-shrink-0 shadow-[0_0_8px_#B600A8]" />
                      <span>
                        <strong className="font-semibold text-black dark:text-white">Automated QA &amp; Validation Pipelines:</strong>{' '}
                        Engineered Python validation pipelines with schema checks, slashing QA testing turnaround from{' '}
                        <span className="font-semibold text-[#B600A8] dark:text-[#E255D5]">4 days to 2 hours</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7621B0] flex-shrink-0 shadow-[0_0_8px_#7621B0]" />
                      <span>
                        <strong className="font-semibold text-black dark:text-white">LLM Prompt Automation Utility:</strong>{' '}
                        Applied LLM prompt engineering to automate data cleaning and geographic code-matching, performing{' '}
                        <span className="font-semibold text-[#B600A8] dark:text-[#E255D5]">87% faster</span> than human operators.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#B600A8] flex-shrink-0 shadow-[0_0_8px_#B600A8]" />
                      <span>
                        <strong className="font-semibold text-black dark:text-white">Executive Power BI Dashboards:</strong>{' '}
                        Designed dynamic data pipelines and visualization dashboards translating complex operations into actionable executive insights.
                      </span>
                    </li>
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-black/5 dark:border-white/5">
                    {['Python', 'Prompt Engineering', 'Large Language Models', 'Power BI', 'Automated QA', 'Schema Validation', 'Data Pipelines'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-[#D7E2EA]/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── TAB 2: Research & Publications ── */}
            {activeTab === 'publications' && (
              <motion.div
                key="publications-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Paper 1 */}
                <div className="group rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md shadow-sm hover:shadow-[0_12px_40px_rgba(182,0,168,0.12)] transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 w-fit">
                      <Award className="w-3.5 h-3.5" />
                      Accepted
                    </span>
                    <span className="text-xs font-mono text-black/50 dark:text-[#D7E2EA]/50">
                      Peer-Reviewed Research
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white leading-snug">
                    High-Fidelity Digital Twins: Explainable AI for Fleet-Wide Battery State-of-Health Prognostics in Industry 4.0
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-black/75 dark:text-[#D7E2EA]/85 font-light leading-relaxed">
                    Pioneered an explainability-first digital twin combining a 2-layer Attention-LSTM with TimeSHAP pruning (<span className="font-semibold text-[#B600A8]">83% reduction</span>) for Battery State-of-Health (SoH) forecasting and sensor attribution. Achieved <span className="font-semibold text-[#B600A8]">RMSE 0.0359</span> and <span className="font-semibold text-[#B600A8]">R² 0.64</span> on the NASA dataset with Dockerized dual-explanation deployment.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-black/5 dark:border-white/5">
                    {['Explainable AI', 'Attention-LSTM', 'TimeSHAP (83% Pruning)', 'NASA Dataset', 'Streamlit', 'Docker'].map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-[#D7E2EA]/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Paper 2 */}
                <div className="group rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md shadow-sm hover:shadow-[0_12px_40px_rgba(182,0,168,0.12)] transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 w-fit">
                      <Award className="w-3.5 h-3.5" />
                      Accepted
                    </span>
                    <span className="text-xs font-mono text-black/50 dark:text-[#D7E2EA]/50">
                      Peer-Reviewed Research
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white leading-snug">
                    Edge-Native Fault Detection in Smart Inverters via End-to-End Graph Optimization
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-black/75 dark:text-[#D7E2EA]/85 font-light leading-relaxed">
                    Engineered a novel architecture uniting physics-informed deep autoencoders, monolithic ONNX graph compilation, and INT8 quantization for real-time edge anomaly detection on solar smart inverters. Delivered <span className="font-semibold text-[#B600A8]">97.75% accuracy</span>, <span className="font-semibold text-[#B600A8]">72.34% compression</span>, and ultra-low <span className="font-semibold text-[#B600A8]">0.0686 ms latency</span>.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-black/5 dark:border-white/5">
                    {['Physics-Informed Autoencoders', 'ONNX INT8 Quantization', '97.75% Accuracy', '0.0686 ms Latency', 'Edge ML'].map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-[#D7E2EA]/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Paper 3 */}
                <div className="group rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md shadow-sm hover:shadow-[0_12px_40px_rgba(182,0,168,0.12)] transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 w-fit">
                      <FileText className="w-3.5 h-3.5" />
                      Under Publication
                    </span>
                    <span className="text-xs font-mono text-black/50 dark:text-[#D7E2EA]/50">
                      NLP &amp; Sentiment Modeling
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white leading-snug">
                    Human-Centered Emotion Classification Using Classical Machine Learning Models on the GoEmotions Dataset
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-black/75 dark:text-[#D7E2EA]/85 font-light leading-relaxed">
                    Conducted an extensive benchmark comparing classical ML models with Transformers (RoBERTa, DistilBERT) over 58K Reddit comments. Designed an Ekman mapping and spaCy NLP pipeline that achieves competitive precision while delivering <span className="font-semibold text-[#B600A8]">120x lower inference latency</span>.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-black/5 dark:border-white/5">
                    {['GoEmotions', 'Ekman Mapping', 'spaCy NLP', '120x Latency Reduction', 'Comparative Study'].map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-[#D7E2EA]/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── TAB 3: Education & Leadership ── */}
            {activeTab === 'education' && (
              <motion.div
                key="education-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Degree Card */}
                <div className="rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md shadow-sm hover:shadow-[0_12px_40px_rgba(182,0,168,0.12)] transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7621B0] to-[#B600A8] flex items-center justify-center text-white mb-6 shadow-md">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-black/60 dark:text-[#D7E2EA]/60 uppercase tracking-widest">
                      2023 – Present
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-black dark:text-white mt-1">
                      Sushant University
                    </h3>
                    <p className="text-sm font-mono text-black/60 dark:text-[#D7E2EA]/60">
                      Gurugram, Haryana
                    </p>
                    <div className="mt-4 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                      <p className="font-semibold text-black dark:text-white text-base">
                        Bachelor of Technology (B.Tech)
                      </p>
                      <p className="text-sm text-[#B600A8] font-medium mt-0.5">
                        Computer Science Engineering (AI &amp; ML)
                      </p>
                    </div>
                    <p className="mt-4 text-sm text-black/70 dark:text-[#D7E2EA]/80 font-light leading-relaxed">
                      Specialized in deep learning, autonomous multi-agent architectures, neural networks, natural language processing, graph structures, and computational optimization.
                    </p>
                  </div>
                </div>

                {/* Leadership & Activities */}
                <div className="rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md shadow-sm hover:shadow-[0_12px_40px_rgba(182,0,168,0.12)] transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white mb-6 shadow-md">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-black/60 dark:text-[#D7E2EA]/60 uppercase tracking-widest">
                      Extracurricular Leadership
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-black dark:text-white mt-1">
                      Rotaract Club
                    </h3>
                    <p className="text-sm font-mono text-black/60 dark:text-[#D7E2EA]/60">
                      Sushant University
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                        <div className="flex items-center justify-between text-xs font-mono text-black/60 dark:text-[#D7E2EA]/60 mb-1">
                          <span className="font-semibold text-black dark:text-white">Community Service Director</span>
                          <span>Aug 2024 – Jul 2025</span>
                        </div>
                        <p className="text-xs text-black/70 dark:text-[#D7E2EA]/80 font-light">
                          Spearheaded cross-campus social initiatives, volunteer mobilization, and public outreach drives.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                        <div className="flex items-center justify-between text-xs font-mono text-black/60 dark:text-[#D7E2EA]/60 mb-1">
                          <span className="font-semibold text-black dark:text-white">Active Member</span>
                          <span>Aug 2023 – Jul 2024</span>
                        </div>
                        <p className="text-xs text-black/70 dark:text-[#D7E2EA]/80 font-light">
                          Contributed to youth leadership workshops and educational resource distribution campaigns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 sm:mt-20">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
