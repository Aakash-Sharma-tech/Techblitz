// import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Zap } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 overflow-hidden"
    >
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-green-400 rounded-lg animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-400 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-cyan-400"
          >
            <Cpu size={32} />
          </motion.div>
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="text-purple-400"
          >
            <Code size={32} />
          </motion.div>
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            className="text-green-400"
          >
            <Zap size={32} />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            TECHBLITZ
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-300 text-lg mb-8"
        >
          Initializing Future Tech Experience...
        </motion.p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full"
          />
        </div>

        {/* Loading Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-cyan-400 font-mono text-sm"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading...
          </motion.span>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;