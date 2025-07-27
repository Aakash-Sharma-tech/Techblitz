// import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Mic, Zap, Medal } from 'lucide-react';
import Speakers from './speakers';


const About = () => {
  const stats = [
    { icon: BookOpen, number: '11', label: 'Domains', color: 'primary' },
    { icon: Mic, number: '20+', label: 'Sessions', color: 'cyber' },
    { icon: Medal, number: '2', label: 'Valuable Certificate', color: 'neon' },
    { icon: Users, number: '300+', label: 'Learners', color: 'orange' }
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
            Empowering tomorrow’s tech leaders through a culture of innovation, collaboration, and experiential learning where ideas spark action, and students become changemakers.          </motion.p>
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
              <p>Faculty Coordinator -
                <span className='text-blue-300/60 font-semibold'> Prof. Madhvi Soni</span>
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
                  // whileHover={{ 
                  //   scale: 1.1, 
                  //   rotateY: 10,
                  //   rotateX: 10 
                  // }}
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
            <p className="text-sm text-gray-300 leading-relaxed">
              To foster a dynamic ecosystem where innovation thrives, ideas turn into impact, and students evolve into future-ready technologists. At Cosmos, we believe in more than just learning we believe in transformation. Through TechBlitz and a series of cutting-edge initiatives, we’re creating a bridge between academic curiosity and industry excellence empowering young minds to explore emerging technologies, build disruptive solutions, and lead the tech revolution of tomorrow.
            </p>
          </div>

          {/* Section having images and video and show the image or video on given page which is hovered and rest will become looking different styled  */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-20 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-400 to-cyan-400">
            Speakers
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Meet our esteemed speakers who are leaders in their fields and are here to share their insights and experiences.
          </p>
          <span className="text-red-400 leading-relaxed border-2 rounded-xl text-sm p-0.5 border-opacity-60 border-blue-300 hover:bg-gray-100/20">Tap Images to Explore</span>
          <div className="mt-1">
            <Speakers />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;