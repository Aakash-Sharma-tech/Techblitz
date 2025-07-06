// import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Mail, GraduationCap, Heart, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/cosmos.jec/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/cosmos-jec', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/cosmos-jec-jabalpur', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:cosmos.jec@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative py-12 bg-gradient-to-t from-gray-900 to-gray-800/50 backdrop-blur-sm border-t border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-primary-500 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 bg-primary-500/20 rounded-full animate-ping" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-cyber-400 bg-clip-text text-transparent">
                  Techblitz
                </h3>
                <p className="text-xs text-gray-400">COSMOS Community</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Concept to Creation: 
              <span>Empowering Tomorrow's Innovators</span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                    <div className="absolute inset-0 bg-primary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className=" animate-float text-primary-400 font-semibold">
                COSMOS Community
              </p>
              <p>cosmos.jec@gmail.com </p>
              <p>Jabalpur Engineering College</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
            © 2025 COSMOS: Science and Tech Community | Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
            by TechForge of COSMOS
          </p>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary-500/5 rounded-full blur-xl" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyber-500/5 rounded-full blur-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;