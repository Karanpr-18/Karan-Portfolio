import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen w-full relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glowing Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#7621B0] filter blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#B600A8] filter blur-[120px] pointer-events-none z-0"
      />

      {/* Corner Decorative 3D Images with floating animations */}
      {/* Top-Left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 4, -2, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
          className="w-full"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon icon"
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="w-full"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object"
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>
      </FadeIn>

      {/* Top-Right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, -4, 2, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 0.2
          }}
          className="w-full"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego icon"
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
            rotate: [0, 3, -3, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 0.8
          }}
          className="w-full"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group"
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>
      </FadeIn>

      {/* Content Container */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center z-20">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center px-4">
          <div style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }} className="w-full max-w-[560px]">
            <AnimatedText
              text="I am an AI Engineer passionate about building intelligent, scalable, and autonomous systems. I focus on multi-agent architectures, natural language processing, and RAG applications, and I truly enjoy crafting state-of-the-art solutions that stand out. Let's build something incredible together!"
              className="text-[#D7E2EA] font-medium leading-relaxed text-center flex flex-wrap justify-center"
            />
          </div>
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
