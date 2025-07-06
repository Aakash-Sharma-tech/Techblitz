// import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Mic, Zap, Medal } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: BookOpen, number: '5', label: 'Domains', color: 'primary' },
    { icon: Mic, number: '11+', label: 'Sessions', color: 'cyber' },
    { icon: Medal, number: '1', label: 'Certificate for each', color: 'neon' },
    { icon:  Users, number: '100+', label: 'Learners', color: 'orange' }
  ];

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

  const counterVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-400 to-cyber-400 bg-clip-text text-transparent">
              About COSMOS
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Empowering the next generation of technologists through innovation, collaboration, and hands-on learning experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary-400" />
                Our Mission
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                COSMOS: Science and Tech Community is dedicated to fostering a culture of innovation and technological excellence at Jabalpur Engineering College. We believe in enabling future-tech learning through practical workshops, collaborative projects, and industry exposure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">What We Offer</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-400" />
                  Industry-relevant technical workshops
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-400" />
                  Hands-on project-based learning
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-400" />
                  Expert mentorship and guidance
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-400" />
                  Certification for skill validation
                </li>
              </ul>
            </motion.div>

            {/* Mentor Highlight */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-cyber-500/10 to-primary-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyber-500/30"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 bg-gradient-to-br from-cyber-500 to-primary-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Expert Mentorship</h4>
                  <p className="text-sm text-gray-400">Under Professional Guidance</p>
                </div>
              </div>
              <p className="text-gray-300">
                Workshop conducted under the mentorship of 
                <span className="text-primary-400 font-semibold mx-1">
                  Dr. Jitendra Singh Thakur
                </span>
                HOD of CSE, JEC
              </p>
            </motion.div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                primary: 'from-primary-500 to-primary-600 border-primary-500/30 text-primary-400',
                cyber: 'from-cyber-500 to-cyber-600 border-cyber-500/30 text-cyber-400',
                neon: 'from-neon-500 to-neon-600 border-neon-500/30 text-neon-400',
                orange: 'from-orange-500 to-orange-600 border-orange-500/30 text-orange-400'
              };

              return (
                <motion.div
                  key={index}
                  variants={counterVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    rotateX: 10 
                  }}
                  className={`relative bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[1]}/20 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[2]} text-center group cursor-pointer`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[1]} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className="mb-4"
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className={`h-12 w-12 mx-auto ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[3]}`} />
                  </motion.div>

                  {/* Number */}
                  <motion.div 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100 
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div className="text-gray-300 font-medium">{stat.label}</div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[1]} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To create a thriving ecosystem where students can explore emerging technologies, collaborate on innovative projects, 
              and develop the skills needed to excel in the rapidly evolving tech industry. Through Techblitz and other initiatives, 
              we aim to bridge the gap between academic learning and industry requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;