// import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundEffects = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-based transforms
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.15]);
  const yPattern = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      {/* 🌈 Gradient Mesh fades in on scroll */}
      <motion.div className="absolute inset-0 z-[-2]" style={{ opacity: bgOpacity }}>
        {/* <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0ff] rounded-full filter blur-3xl opacity-50 mix-blend-screen animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#f0f] rounded-full filter blur-3xl opacity-50 mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#00f] rounded-full filter blur-3xl opacity-50 mix-blend-screen animate-pulse" /> */}
      </motion.div>

      {/* 🧠 Matrix-style Binary Code Rain */}
      <motion.div className="absolute inset-0 z-[-2]">
        {Array.from({ length: 20 }).map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute text-green-400 text-[12px] font-mono opacity-20"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: ["-10%", "110%"],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                repeat: Infinity,
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 4,
                ease: "linear",
              }}
            >
              {'010101101100110010101001011011'.slice(0, 16)}
            </motion.div>
          );
        })}
      </motion.div>

      {/* SVG Circuit Pattern */}
      <motion.div className="absolute inset-0 opacity-10 z-[-1]" style={{ y: yPattern }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M 20 20 L 80 20 L 80 80 140 L 180 140"
                stroke="currentColor"
                strokeWidth="1"
                fill="True"
                className="text-cyber-700"
              />
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary-600" />
              <circle cx="80" cy="80" r="3" fill="currentColor" className="text-cyber-600" />
              <circle cx="140" cy="140" r="3" fill="currentColor" className="text-neon-600" />
              <circle cx="180" cy="140" r="3" fill="currentColor" className="text-primary-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </motion.div>

      {/* 🚀 Rocket Animations */}
      <motion.div className="absolute inset-0 z-[-1]">
        {Array.from({ length: 3 }).map((_, i) => {
          const baseX = 100 + i * 200;
          const baseY = 300 + i * 150;

          const x = useTransform(scrollYProgress, [0, 1], [baseX, baseX + 400]);
          const y = useTransform(scrollYProgress, [0, 1], [baseY, baseY - 700]);

          return (
            <motion.div
              key={i}
              style={{ x, y, rotate: i % 2 === 0 ? -20 : 20 }}
              className="absolute"
            >
                {/* <svg
                width="24"
                height="40"
                viewBox="0 0 24 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-cyber-500"
                >
                <path
                  d="M12 0C9 8 6 20 6 28C6 30.2091 7.79086 32 10 32H14C16.2091 32 18 30.2091 18 28C18 20 15 8 12 0Z"
                  fill="currentColor"
                />
                <circle cx="12" cy="22" r="2" fill="#fff" />
                </svg> */}
            </motion.div>
          );
        })}
      </motion.div>

      {/* 📐 Grid Overlay */}
      <motion.div className="absolute inset-0" style={{ opacity: gridOpacity }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>
    </div>
  );
};

export default BackgroundEffects;