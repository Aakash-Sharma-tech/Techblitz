// import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to Techblitz 2025';
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-15T15:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyber-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-neon-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 m-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 via-cyber-400 to-neon-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Powered by <span className="text-primary-400 font-semibold">COSMOS</span>
            </p>
            <p className="text-lg text-gray-400">
              Science and Tech Community of Jabalpur Engineering College
            </p>
            <div className='justify-items-center m-10 '><img src="./Cosmos logo_11zon.jpg" alt="Cosmos Logo" height={150} width={150} className="block rounded-lg shadow-md object-cover border border-blue-500 animate-glow p-4" /></div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Join us for an immersive technical workshop experience featuring cutting-edge domains in technology. 
              Learn from industry experts, build projects, and earn certificates while expanding your technical horizons.
            </p>
          </motion.div>

          {/* Key Information Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300">
              <Calendar className="h-8 w-8 text-primary-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Workshop Dates</h3>
              <p className="text-gray-400">Starting July 15, 2025</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyber-500/50 transition-all duration-300">
              <Clock className="h-8 w-8 text-cyber-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Timing</h3>
              <p className="text-gray-400">3:00 PM - 4:30 PM</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-500/50 transition-all duration-300">
              <Users className="h-8 w-8 text-neon-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Expected</h3>
              <p className="text-gray-400">100+ Participants</p>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Workshop Starts In</h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                  <div className="text-2xl md:text-3xl font-bold text-primary-400">{value}</div>
                  <div className="text-xs text-gray-400 uppercase">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={scrollToRegister}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-cyber-500 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Register Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;