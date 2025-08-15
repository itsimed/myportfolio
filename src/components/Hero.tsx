import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type WordPair = { left: string; right: string };

function useTypewriterPairs(
  pairs: WordPair[],
  options?: {
    typingSpeedMs?: number;
    deletingSpeedMs?: number;
    pauseBeforeDeleteMs?: number; // time to hold full words before deleting
    pauseBeforeTypeMs?: number; // time to wait after clearing before next pair
  },
) {
  const typingSpeedMs = options?.typingSpeedMs ?? 70;
  const deletingSpeedMs = options?.deletingSpeedMs ?? 45;
  const pauseBeforeDeleteMs = options?.pauseBeforeDeleteMs ?? 5000;
  const pauseBeforeTypeMs = options?.pauseBeforeTypeMs ?? 300;

  const [pairIndex, setPairIndex] = useState<number>(0);
  const [leftIndex, setLeftIndex] = useState<number>(0);
  const [rightIndex, setRightIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const { left, right } = pairs[pairIndex];
    const leftDoneTyping = !isDeleting && leftIndex === left.length;
    const rightDoneTyping = !isDeleting && rightIndex === right.length;
    const bothTyped = leftDoneTyping && rightDoneTyping;
    const bothCleared = isDeleting && leftIndex === 0 && rightIndex === 0;

    let timeoutId: number;

    if (bothTyped) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseBeforeDeleteMs);
    } else if (bothCleared) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setPairIndex((i) => (i + 1) % pairs.length);
      }, pauseBeforeTypeMs);
    } else {
      timeoutId = window.setTimeout(() => {
        if (!isDeleting) {
          if (leftIndex < left.length) setLeftIndex((i) => i + 1);
          if (rightIndex < right.length) setRightIndex((i) => i + 1);
        } else {
          if (leftIndex > 0) setLeftIndex((i) => i - 1);
          if (rightIndex > 0) setRightIndex((i) => i - 1);
        }
      }, isDeleting ? deletingSpeedMs : typingSpeedMs);
    }

    return () => window.clearTimeout(timeoutId);
  }, [
    pairs,
    pairIndex,
    leftIndex,
    rightIndex,
    isDeleting,
    typingSpeedMs,
    deletingSpeedMs,
    pauseBeforeDeleteMs,
    pauseBeforeTypeMs,
  ]);

  const currentPair = pairs[pairIndex];
  const leftText = currentPair.left.slice(0, leftIndex);
  const rightText = currentPair.right.slice(0, rightIndex);

  return { leftText, rightText };
}

const TypeCursor = () => (
  <motion.span
    aria-hidden
    className="inline-block w-[0.08em] sm:w-[0.06em] md:w-[0.08em] h-[1em] align-middle ml-0.5 sm:ml-1 bg-white/85"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity }}
  />
);

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Synchronized typewriter for left/right titles
  const { leftText, rightText } = useTypewriterPairs(
    [
      { left: 'Front end', right: 'Developer' },
      { left: 'UI/UX', right: 'Designer' },
      { left: 'Project & Team', right: 'Manager' },
      { left: 'Data Analysis', right: 'Enthusiast' },
    ],
    { pauseBeforeDeleteMs: 5000 },
  );

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      url: 'https://github.com/itsimed' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      url: 'https://www.linkedin.com/in/ie-belouettar/' 
    },
    { 
      name: 'Telegram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ), 
      url: 'https://t.me/itsimedd' 
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 w-full">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-7xl mx-auto w-full">
          {/* Row 1: Title (left) + Projects pill (right) */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2 sm:mb-4 lg:mb-10">
            <div className="lg:flex-1 lg:pr-10 flex justify-center sm:justify-start">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[clamp(2.5rem,12vw,8rem)] font-black text-white leading-[1.1] sm:leading-[1.15] md:leading-[1.2] tracking-tight w-full pb-6 sm:pb-8 md:pb-10 text-center sm:text-left"
              >
                {/* Synchronized left text */}
                <span className="whitespace-normal sm:whitespace-nowrap flex items-baseline gap-1 sm:gap-0.5 md:gap-1 break-words overflow-hidden justify-center sm:justify-start">
                  <span className="break-words hyphens-auto">{leftText}</span>
                  <TypeCursor />
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block lg:flex-shrink-0 lg:ml-8 mt-6 lg:mt-0 self-start lg:self-auto"
            >
              <button
                aria-label="View projects"
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center bg-white/95 hover:bg-white text-black rounded-full pl-4 sm:pl-6 pr-2 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-black/5 sticky top-4 sm:top-6 lg:static"
              >
                <span className="px-1">{t('hero.projectsButton')}</span>
                <span className="ml-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-black/15">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>

          {/* Row 2: Left paragraph + Right big "Developer" */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-3 sm:gap-3 lg:gap-8 mb-6 sm:mb-10 lg:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="order-2 lg:order-1 text-base sm:text-lg leading-relaxed text-gray-300 max-w-2xl pr-0 lg:pr-6"
            >
              {t('hero.description')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="order-1 lg:order-2 text-[clamp(2.5rem,12vw,8rem)] font-black text-white leading-[1.1] sm:leading-[1.15] md:leading-[1.2] tracking-tight text-center sm:text-center lg:text-right w-full pb-6 sm:pb-8 md:pb-10"
            >
              {/* Synchronized right text */}
              <span className="inline-flex items-baseline gap-1 sm:gap-0.5 md:gap-1 whitespace-normal sm:whitespace-nowrap break-words overflow-hidden">
                <span className="break-words hyphens-auto">{rightText}</span>
                <TypeCursor />
              </span>
            </motion.h2>

            {/* Mobile-only Projects button below description */}
            <div className="order-3 lg:hidden flex justify-center sm:justify-start">
              <button
                aria-label="View projects"
                onClick={() => scrollToSection('projects')}
                className="group mt-3 sm:mt-2 inline-flex items-center bg-white/95 hover:bg-white text-black rounded-full pl-4 sm:pl-6 pr-2 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-black/5"
              >
                <span className="px-1">{t('hero.projectsButton')}</span>
                <span className="ml-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-black/15">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 border border-white/25 rounded-full text-white hover:bg-white/10 transition-all duration-300 cursor-pointer min-w-fit"
                title={link.name}
              >
                {link.icon}
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Featured Projects Carousel */}
      <Carousel />
    </section>
  );
};

export default Hero;

// --- Carousel component (local to Hero file for simplicity) ---
type Project = {
  id: number;
  title: string;
  description: string;
  href?: string;
  image?: string;
};

const Carousel = () => {
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'wassalni',
      description: t('hero.carousel.wassalni.description'),
      image: 'https://storage.googleapis.com/wiizassets/portfolio%20rayan/wass.webp',
      href: 'https://imgur.com/a/wassalni-app-B01sowE',
    },
    {
      id: 2,
      title: 'divanhane',
      description: t('hero.carousel.divanhane.description'),
      image: 'https://storage.googleapis.com/wiizassets/portfolio%20rayan/dh.webp',
      href: 'https://divanhane.vercel.app',
    },
    {
      id: 3,
      title: 'picci',
      description: t('hero.carousel.picci.description'),
      image: 'https://storage.googleapis.com/wiizassets/portfolio%20rayan/picci.webp',
      href: 'https://picci-five.vercel.app/',
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + projects.length) % projects.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      next();
    }, 5000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 pb-12 sm:pb-16 lg:pb-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {projects.map((p) => (
                <div key={p.id} className="min-w-full">
                  <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    {/* Left visual */}
                    <div className="relative h-56 md:h-72 md:w-1/2">
                      {p.image ? (
                        <img 
                          src={p.image} 
                          alt={t(`hero.carousel.${p.title}.title`)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500" />
                      )}
                      <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Right content */}
                    <div className="md:w-1/2 p-4 sm:p-5 md:p-6 lg:p-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[1.7rem] font-extrabold text-white mb-2 sm:mb-3 leading-snug">{t(`hero.carousel.${p.title}.title`)}</h3>
                      <p className="text-gray-300/90 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">{p.description}</p>
                      {p.href ? (
                        <a 
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white text-black px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold shadow hover:shadow-md transition-all duration-300 group"
                        >
                          <span>{t(`hero.carousel.${p.title}.button`)}</span>
                          <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5">
                            <svg className="w-4 h-4 sm:w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </a>
                      ) : (
                        <button className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white text-black px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold shadow hover:shadow-md transition-all duration-300 group">
                          <span>Read more</span>
                          <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5">
                            <svg className="w-4 h-4 sm:w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls (outside the card) */}
          <div className="absolute inset-y-0 -left-2 sm:-left-3 md:-left-6 -right-2 sm:-right-3 md:-right-6 lg:-left-10 lg:-right-10 flex items-center justify-between p-2 sm:p-3 pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur text-white shadow"
              aria-label="Previous"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="pointer-events-auto inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur text-white shadow"
              aria-label="Next"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {projects.map((p, i) => (
              <button
                key={p.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  i === index ? 'bg-white w-5 sm:w-6' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};