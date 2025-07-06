// import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gradient Mesh */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyber-500 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-neon-500 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70" style={{animationDelay: '4s'}}></div>
      </div> */}

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 20 20 L 80 20 L 80 80 L 140 80 L 140 140 L 180 140" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    fill="none" 
                    className="text-primary-500" />
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary-500" />
              <circle cx="80" cy="80" r="3" fill="currentColor" className="text-cyber-500" />
              <circle cx="140" cy="140" r="3" fill="currentColor" className="text-neon-500" />
              <circle cx="180" cy="140" r="3" fill="currentColor" className="text-primary-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.6, 0.2, 0.6],
              backgroundColor: [
                'rgba(0, 212, 255, 0.6)',
                'rgba(255, 0, 150, 0.6)',
                'rgba(0, 212, 255, 0.6)',
              ],
              scale: [3, 0.5, 3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundEffects;