// import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Figma, Smartphone, Calendar, Award, Cpu, Tv, Cloud, BrainCircuit, Briefcase, BrainCog, Workflow} from 'lucide-react';

const Workshops = () => {

  const workshops = [
    {
      id: 1,
      title: 'AI/ML',
      icon: Brain,
      duration: '3 days',
      description: 'Dive into Artificial Intelligence and Machine Learning fundamentals, algorithms, and practical implementations.',
      certificate:'Certificate of Participation and Excellence',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600',
      level: 'Level - Beginner'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      icon: Shield,
      duration: '2 days',
      description: 'Learn ethical hacking, network security, vulnerability assessment, and modern cybersecurity practices.',
      certificate: 'Certificate of Participation and Excellence',
      color: 'cyber',
      gradient: 'from-cyber-500 to-cyber-600',
      level: 'Level - Intermediate'
    },
    {
      id: 3,
      title: 'VLSI',
      icon: Cpu,
      duration: '2 days',
      description: 'Explore VLSI design principles, digital circuits, and modern semiconductor technologies.',
      certificate: 'Certificate of Participation and Excellence',
      color: 'neon',
      gradient: 'from-neon-500 to-neon-600',
      level: 'Level - Intermediate'
    },
    // {
    //   id: 4,
    //   title: 'AutoCAD',
    //   icon: PenTool,
    //   duration: '2 days',
    //   description: 'Master 2D and 3D design with AutoCAD, technical drawing, and computer-aided design principles.',
    //   // certificate: '80%',
    //   color: 'orange',
    //   gradient: 'from-orange-500 to-orange-600',
    //   level: 'Level - Beginner'
    // },
    {
      id: 5,
      title: 'App Development',
      icon: Smartphone,
      duration: '3 days',
      description: 'Build mobile applications using modern frameworks, UI/UX principles, and deployment strategies.',
      certificate: 'Certificate of Participation and Excellence',
      color: 'purple',
      gradient: 'from-blue-800 to-blue-900',
      level: 'Level - Intermediate'
    },
    {
      id: 6,
      title: 'UI/UX Design',
      icon: Figma,
      duration: '2 days',
      description: 'Learn user interface and user experience design principles, prototyping, and usability testing.',
      certificate: 'Certificate of Participation',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-600',
      level: 'Level - Beginner'
    },
    {
      id: 7,
      title: 'DevOps',
      icon: Tv,
      duration: '3 days',
      description: 'Understand DevOps practices, CI/CD pipelines, and infrastructure as code for modern software development.',
      certificate:'Certificate of Participation and Excellence',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      level: 'Level - Advanced'
    },
   {
  id: 13,
  title: 'Management Aspects in Engineering',
  icon: Briefcase, // You can swap this with any management/strategy-related icon
  duration: '1 day',
  description: 'Understand the intersection of engineering and management through project planning, resource allocation, and strategic decision-making principles.',
  certificate: 'Certificate of Participation',
  color: 'teal',
  gradient: 'from-teal-500 to-teal-600',
  level: 'Level - Beginner to Intermediate'
},
   {
  id: 12,
  title: 'AIML Webinar',
  icon: BrainCircuit, // Use an appropriate icon, e.g., a brain or neural network symbol
  duration: '1 day',
  description: 'Explore the Industrial use of Artificial Intelligence and Machine Learning, including real-world applications, model training, and ethical considerations.',
  certificate: 'Certificate of Participation',
  color: 'indigo',
  gradient: 'from-indigo-500 to-indigo-600',
  level: 'Level - Advanced'
},
    {
      id: 11,
      title: 'Backend development',
      icon: Workflow,
      duration: '2 days',
      description: 'Learn backend development using modern frameworks, databases, and API design principles.',
      certificate: 'Certificate of Participation and Excellence',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      level: 'Level - Intermediate'
    },
    {
      id: 12,
      title: 'Applications of AIML in Space Science',
      icon: BrainCog,
      duration: '1 day',
      description: 'Explore the applications of AI/ML in space science using advanced simulation techniques.',
      certificate: 'Certificate of Participation',
      color: 'cyan',
      gradient: 'from-cyan-500 to-cyan-600',
      level: 'Level - Advanced'
    },
    {
  id: 14,
  title: 'AWS Cloud Essentials',
  icon: Cloud, // Use a cloud-related icon like 'Cloud', 'CloudUpload', etc.
  duration: '1 day',
  description: 'Get introduced to the fundamentals of AWS Cloud, core services, deployment models, and how cloud computing is transforming modern businesses.',
  certificate: 'Certificate of Participation',
  color: 'yellow',
  gradient: 'from-yellow-400 to-yellow-500',
  level: 'Level - Beginner'
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="workshops" className="py-20 relative">
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
              Workshop Domains
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Explore cutting-edge technology domains with hands-on learning, expert mentorship, and industry-relevant projects.
          </motion.p>
        </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {workshops.map((workshop) => {
              const IconComponent = workshop.icon;
              return (
                <motion.div
                  key={workshop.id}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${workshop.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${workshop.gradient} rounded-xl`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 rounded-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-primary-400" />
                      <span className="text-gray-300">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Award className="h-4 w-4 text-neon-400" />
                      <span className="text-gray-300">{workshop.certificate}</span>
                    </div>
                    
                  </div>

                  {/* Floating Time Badge */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-400 border border-primary-500/30">
                    {workshop.level}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Workshop Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">📅 Schedule</h4>
                <p className="text-gray-300">Daily 2 sessions between 6:00 PM to 10 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyber-400 mb-2">🏆 Certification</h4>
                <p className="text-gray-300">Based on certificate requirements and quizzes</p>
              </div>
              <div>
                <h4 className="font-semibold text-neon-400 mb-2">🎤 Speakers</h4>
                <p className="text-gray-300">Expert guidance throughout</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">🛠️ Hands-on</h4>
                <p className="text-gray-300">Practical project-based learning</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;