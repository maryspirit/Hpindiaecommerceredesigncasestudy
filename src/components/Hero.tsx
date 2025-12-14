import { motion } from 'motion/react';
import { ArrowRight, Award } from 'lucide-react';

export function Hero() {
  const scrollToOverview = () => {
    const element = document.getElementById('overview');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230096D6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-[#0096D6] px-4 py-2 rounded-full mb-8"
          >
            <Award size={20} />
            <span className="text-sm">UI/UX Design Excellence</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 text-gray-900"
          >
            Reimagining HP India's
            <br />
            <span className="bg-gradient-to-r from-[#0096D6] to-[#00B8A9] bg-clip-text text-transparent">
              E-Commerce Experience
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto"
          >
            A comprehensive UX redesign driving 47% increase in conversion rates
            and ₹12.4 crores in additional revenue
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0096D6] rounded-full"></div>
              <span>6 Months Duration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B8A9] rounded-full"></div>
              <span>Lead UI/UX Designer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0096D6] rounded-full"></div>
              <span>Web & Mobile Platform</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={scrollToOverview}
            className="group inline-flex items-center gap-2 bg-[#0096D6] text-white px-8 py-4 rounded-xl hover:bg-[#0085c0] transition-all shadow-lg hover:shadow-xl"
          >
            <span>Explore Case Study</span>
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </motion.button>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <p className="text-sm text-gray-500 mb-4">Tools & Technologies</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Figma</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Adobe XD</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Photoshop</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Illustrator</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">After Effects</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm">React</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#0096D6] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
