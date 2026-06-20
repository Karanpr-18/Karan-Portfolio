import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  const totalChars = text.length;
  let charCount = 0;

  return (
    <p ref={containerRef} className={`${className} relative`}>
      {words.map((word, wIdx) => {
        const wordChars = word.split("");
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char, cIdx) => {
              const start = charCount / totalChars;
              const end = (charCount + 1) / totalChars;
              charCount++;
              return (
                <Character key={cIdx} progress={scrollYProgress} range={[start, end]}>
                  {char}
                </Character>
              );
            })}
            {/* Add space between words */}
            {wIdx < words.length - 1 && (
              <span className="relative inline-block">
                <span className="opacity-0">&nbsp;</span>
                {(() => {
                  const start = charCount / totalChars;
                  const end = (charCount + 1) / totalChars;
                  charCount++;
                  return (
                    <Character progress={scrollYProgress} range={[start, end]}>
                      &nbsp;
                    </Character>
                  );
                })()}
              </span>
            )}
          </span>
        );
      })}
    </p>
  );
};
