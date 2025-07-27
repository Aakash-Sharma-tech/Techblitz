import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Hash, GraduationCap, Calendar, Send, CheckCircle } from 'lucide-react';


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    rollNumber: '',
    domain: '',
    department: '',
    semester: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const domains = [
    'AIML',
    'CyberSecurity',
    'AIML webinar',
    'DevOps',
    'VLSI',
    'Application of AIML in Space Science',
    'App Development',
    'UI/UX',
    'Backend Development',
    'Management Aspects in Engineering',
    'AWS'
  ]

  const departments = [
    'Computer Science & Engineering',
    'Information Technology',
    'Artificial Intelligence & Data Science',
    'Electronics & Communication',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Mechatronics Engineering',
    'Civil Engineering',
    'Industrial Production'
  ];

  const semesters = ['3rd', '4th', '5th', '6th', '7th', '8th'];

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'firstName':
        return value.length < 2 ? 'Must be at least 2 characters' : '';
      case 'lastName':
        return value.length < 2 ? 'Must be at least 2 characters' : '';
      case 'contactNumber':
        return !/^\d{10}$/.test(value) ? 'Invalid contact number' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'rollNumber':
        return value.length < 3 ? 'Invalid roll number' : '';
      case 'domain':
        return !value ? 'Please select a domain' : '';
      case 'department':
        return !value ? 'Please select a department' : '';
      case 'semester':
        return !value ? 'Please select a semester' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate all fields
  const newErrors: Record<string, string> = {};
  Object.entries(formData).forEach(([key, value]) => {
    const error = validateField(key, value);
    if (error) newErrors[key] = error;
  });

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setIsSubmitting(true);

    try {
      const res = await fetch("https://techblitz-djrr.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Server responded with an error:", data);
        alert(data.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
};


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

  if (isSubmitted) {
    return (
      <>
        <section id="register" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-md mx-auto text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="bg-gradient-to-br from-neon-500/20 to-primary-500/20 backdrop-blur-sm rounded-2xl p-8 border border-neon-500/30">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="h-16 w-16 text-neon-400 mx-auto mb-6" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-4">Registration Successful!</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for registering for Techblitz 2025. You'll receive a confirmation message with further details soon.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Another
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 🔔 Custom Instagram Alert */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.01, opacity: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="max-w-xl mx-auto mb-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 px-6 py-4 rounded-md shadow-md"
        >
          <strong className="font-semibold">⚠️ Warning!</strong>
          <p className="mt-1">
            Don’t forget to follow our official{" "}
            <a
              href="https://instagram.com/cosmos.jec"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-blue-600"
            >
              Instagram page
            </a>{" "}

          </p>
        </motion.div>


        {/* <motion.div
          initial={{ y: -20, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto mb-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 px-6 py-4 rounded-md shadow-md"
        >
        <strong className="font-semibold">⚠️ Just One More Step!</strong>
          <p className="mt-1">
            Don’t forget to follow our official{" "}
            <a
              href="https://instagram.com/cosmos.jec"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-blue-600"
            >
              Instagram page
            </a>{" "}
            for live updates and event highlights!
          </p>
        </motion.div> */}
      </>
    );
  }

  return (
    <section id="register" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
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
              Register Now
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Secure your spot in Techblitz 2025 and embark on an exciting journey of technical learning and innovation.
            Register multiple times for multiple domains. 
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/70">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.firstName 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      placeholder="Enter your first name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.lastName 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      placeholder="Enter your last name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                  )}
                </motion.div>
              </div>
              
              {/* Contact Number */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Number *
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.contactNumber 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                    }`}
                    placeholder="Enter your contact number"
                  />
                </div>
                {errors.contactNumber && (
                  <p className="mt-1 text-sm text-red-400">{errors.contactNumber}</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </motion.div>

              {/* Roll Number */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Roll Number *
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.rollNumber 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                    }`}
                    placeholder="Enter your roll number"
                  />
                </div>
                {errors.rollNumber && (
                  <p className="mt-1 text-sm text-red-400">{errors.rollNumber}</p>
                )}
              </motion.div>

              {/* Domain Selection */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Domain of Interest *
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.domain 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                    }`}
                  >
                    <option value="" className='bg-blue-900'>Select Domain</option>
                    {domains.map(domain => (
                      <option key={domain} value={domain} className='text-black bg-white'>{domain}</option>
                    ))}
                  </select>
                </div>
                {errors.domain && (
                  <p className="mt-1 text-sm text-red-400">{errors.domain}</p>
                )}
              </motion.div>

              {/* Department and Semester */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Department *
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.department 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept} className='text-black bg-white'>{dept}</option>
                      ))}
                    </select>
                  </div>
                  {errors.department && (
                    <p className="mt-1 text-sm text-red-400">{errors.department}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Semester *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.semester 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                    >
                      <option value="">Select Semester (After Endsem Consideration)</option>
                      {semesters.map(sem => (
                        <option key={sem} value={sem} className='text-black bg-white'>{sem} Semester</option>
                      ))}
                    </select>
                  </div>
                  {errors.semester && (
                    <p className="mt-1 text-sm text-red-400">{errors.semester}</p>
                  )}
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-cyber-500 hover:from-primary-600 hover:to-cyber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Registering...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Register for Techblitz
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
  
};

export default Register;