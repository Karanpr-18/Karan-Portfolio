import React, { useRef, useState, useEffect } from 'react';

const ROW1_IMAGES = [
  "/images/career_orbit.png",
  "/images/techhubai.png",
  "/images/talent_ai.png",
  "/images/mail_classifier.png",
];

const ROW2_IMAGES = [
  "/images/job_scanner.png",
  "/images/news_analyser.png",
  "/images/used_car.png",
  "/images/yt_downloader.png",
];

const row1Tripled = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const row2Tripled = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    // Calculate initial
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <div ref={sectionRef} className="bg-white dark:bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3 transition-colors duration-500">
      {/* Row 1 - moves right */}
      <div className="w-full flex overflow-hidden">
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{ transform: row1Transform, willChange: 'transform' }}
        >
          {row1Tripled.map((url, idx) => (
            <img
              key={`r1-${idx}`}
              src={url.startsWith('/') ? `${import.meta.env.BASE_URL}${url.slice(1)}` : url}
              alt={`GIF r1-${idx}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 select-none pointer-events-none border border-black/10 dark:border-white/10 shadow-sm dark:shadow-none transition-all duration-500"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - moves left */}
      <div className="w-full flex overflow-hidden">
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{ transform: row2Transform, willChange: 'transform' }}
        >
          {row2Tripled.map((url, idx) => (
            <img
              key={`r2-${idx}`}
              src={url.startsWith('/') ? `${import.meta.env.BASE_URL}${url.slice(1)}` : url}
              alt={`GIF r2-${idx}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 select-none pointer-events-none border border-black/10 dark:border-white/10 shadow-sm dark:shadow-none transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
