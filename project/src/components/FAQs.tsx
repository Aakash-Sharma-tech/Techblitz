import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect: any;

    const loadVanta = async () => {

    loadVanta();

    return () => {
      if (effect && typeof effect.destroy === 'function') {
        effect.destroy();
      }
    };
  }});

const faqs: FAQ[] = [
{
  id: 1,
  question: "Will Techblitz be beneficial for 3rd and 4th year students?",
  answer: "Yes, the workshops at Techblitz are designed to equip 3rd and 4th year students with hands-on experience in emerging technologies, real-world tools, and industry practices. They help bridge the gap between academics and practical applications, making students more job-ready.",
  category: "Workshops"
},
  {
    id: 2,
    question: 'How much does it cost to attend TechBlitz?',
    answer: 'TechBlitz is completely FREE for all participants! This includes access to all workshops, keynote sessions, networking lunch, and event materials.',
    category: 'Registration'
  },
  {
    id: 3,
    question: 'What is the registration deadline?',
    answer: 'Registration will be continued till starting of workshop, or when we reach our capacity limit of 500 participants, whichever comes first.',
    category: 'Registration'
  },
  {
    id: 4,
    question: 'Can I attend if I\'m a beginner in technology?',
    answer: 'Absolutely! TechBlitz welcomes participants of all skill levels, with workshops for beginners, intermediates, and experts.',
    category: 'General'
  },
  {
    id: 5,
    question: 'Is this only for JEC students?',
    answer: 'The workshop is primarily for JEC students.',
    category: 'Workshops'
  },
  {
    id: 6,
    question: 'Will certificates be provided?',
    answer: 'Yes! Digital participation and Certificate of Participation will be awarded on the basis of active participation. Certificate of Excellence will be provided to only top 15% students on the basis of performance and Quizzes ',
    category: 'Certificates'
  },
  {
    id: 7,
    question: 'Until when is registration open?',
    answer: 'Registration will remain open until August 1, 2025, or until we reach our capacity limit of 500 participants.',
    category: 'Registration'
  },
  {
    id: 8,
    question: 'What domains will be covered in the workshops?',
    answer: 'Full lists of domains will be provided closer to the event date.',
    category: 'Workshops'
  },
  {
    id: 9,
    question: 'Will there be any networking opportunities?',
    answer: 'Yes! There will be dedicated networking sessions after the workshops to connect with speakers and fellow participants.',
    category: 'Networking'
  },
  {
    id: 10,
    question: ' How long will each session be?',
    answer: ' Each session will typically be 60 minutes, including an interactive Q&A segment with the speaker.',
    category: 'General'
  },
  {
    id: 11,
    question: 'Do we need any prior knowledge or skills?',
    answer: 'No prior knowledge or skills are required to attend TechBlitz. We welcome participants of all skill levels!',
    category: 'General'
  },
  {
    id: 12,
    question: 'What should I bring to the event?',
    answer: 'Just bring yourself! We recommend bringing a laptop or tablet for the workshops, but it\'s not mandatory.',
    category: 'General'
  },
  {
    id: 13,
    question: 'What topics will the speakers talk about?',
    answer: 'Speakers will cover a wide range of topics, including the latest trends in technology, hands-on workshops, and career development strategies.',
    category: 'Workshops'
  },
  {
    id: 14,
    question: ' Which MNC professionals are coming?',
    answer: 'We are excited to welcome professionals from top MNCs, including Google, Microsoft, ISRO,  Amazon and many more as speakers and workshop facilitators.',
    category: 'Workshops'
  },
  {
    id: 15,
    question: 'What are the conditions to receive the Participation Certificate?',
    answer: 'You must attend the full session actively (attendance & basic engagement like polls or forms). Passive login without activity may not qualify.',
    category: 'Certificates'
  },
  {
    id: 16,
    question: 'Will this workshop help in placements?',
    answer: 'Yes! The workshops are designed to enhance your skills and knowledge, making you more competitive in the job market. You will also receive a participation certificate that can be added to your resume.',
    category: 'Certificates'
  },
  {
    id: 17,
    question: 'Can we attend more than one domain session?',
    answer: 'Yes, you can attend multiple sessions across different domains. However, please ensure you register for each session in advance as space is limited.',
    category: 'Workshops'
  },
  {
    id: 18,
    question: 'What will be future opportunity for top performers',
    answer: 'Students who is eligible for Certificate of Excellence will get the opportunity to have a insightfull talks with speaker',
    category: 'Networking'
  }
];


  const categories = ['All', 'General', 'Registration', 'Workshops', 'Certificates', 'Networking'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id='faqs' className='min-h-screen relative flex items-center justify-center overflow-hidden'>
    <div ref={vantaRef} className="min-h-screen w-full relative overflow-hidden">
      <div className="relative z-10 pt-24 pb-12 text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Got questions? We've got answers! Find everything you need to know about
                TechBlitz 2025, from registration to workshops and beyond.
              </p>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 text-white placeholder-gray-400"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                        : 'glass border border-white/20 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                  <p className="text-gray-400">Try adjusting your search term or category filter.</p>
                </div>
              ) : (
                filteredFAQs.map((faq) => (
                  <div key={faq.id} className="glass rounded-xl border border-white/20 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            faq.category === 'General' ? 'bg-blue-500/20 text-blue-400' :
                            faq.category === 'Registration' ? 'bg-green-500/20 text-green-400' :
                            faq.category === 'Workshops' ? 'bg-purple-500/20 text-purple-400' :
                            faq.category === 'Certificates' ? 'bg-yellow-500/20 text-yellow-400' :
                            faq.category === 'Networking' ? 'bg-pink-500/20 text-pink-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      <div className={`ml-4 transition-transform duration-200 ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6 border-t border-gray-700">
                        <p className="text-white/80 pt-4 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </section>

        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default FAQs;