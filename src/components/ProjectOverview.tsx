import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Target, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

export function ProjectOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="overview" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-50 text-[#0096D6] rounded-full mb-4 text-sm">
              Project Overview
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Transforming Digital Commerce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic redesign of HP India's e-commerce platform to enhance user experience,
              streamline product discovery, and boost conversion rates across web and mobile.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-2">47%</div>
              <div className="text-sm text-gray-600">Conversion Increase</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100">
              <div className="text-4xl mb-2">₹12.4Cr</div>
              <div className="text-sm text-gray-600">Additional Revenue</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl mb-2">6</div>
              <div className="text-sm text-gray-600">Months Duration</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
              <div className="text-4xl mb-2">32%</div>
              <div className="text-sm text-gray-600">Lower Bounce Rate</div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Problem Statement */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">The Challenge</h3>
                  <p className="text-gray-600">
                    HP India's e-commerce platform faced significant user experience challenges
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-16">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Complex Navigation:</strong> Users struggled to find specific products
                    among 500+ SKUs, leading to high abandonment rates
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Overwhelming Information:</strong> Technical specifications presented
                    in dense, difficult-to-compare formats
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Poor Mobile Experience:</strong> 68% of traffic from mobile with only
                    14% conversion rate (vs. 29% on desktop)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Checkout Friction:</strong> 7-step checkout process with 72% cart
                    abandonment rate
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Trust Barriers:</strong> Limited social proof, unclear warranty info,
                    and security concerns
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Solution Overview */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">The Solution</h3>
                  <p className="text-gray-600">
                    A user-centered redesign focused on simplification and personalization
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-16">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Intelligent Product Discovery:</strong> AI-powered search,
                    visual filters, and smart recommendations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Simplified Information Architecture:</strong> Progressive disclosure
                    with comparison tools and visual spec sheets
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Mobile-First Redesign:</strong> Touch-optimized interface with
                    gesture controls and offline capabilities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Streamlined Checkout:</strong> Reduced to 3 steps with guest
                    checkout, UPI integration, and smart defaults
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Trust Building:</strong> Prominent reviews, security badges,
                    warranty highlights, and live chat support
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Highlights */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-3xl p-12 text-white">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-3xl mb-2">Measurable Impact</h3>
                <p className="text-white/90">
                  The redesign delivered significant improvements across all key metrics
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-2">47%</div>
                <div className="text-white/80 text-sm">Conversion Rate Increase</div>
                <div className="text-white/60 text-xs mt-1">From 2.8% to 4.1%</div>
              </div>
              <div>
                <div className="text-5xl mb-2">32%</div>
                <div className="text-white/80 text-sm">Bounce Rate Reduction</div>
                <div className="text-white/60 text-xs mt-1">From 58% to 39%</div>
              </div>
              <div>
                <div className="text-5xl mb-2">2.4x</div>
                <div className="text-white/80 text-sm">Mobile Conversion Growth</div>
                <div className="text-white/60 text-xs mt-1">From 14% to 34%</div>
              </div>
              <div>
                <div className="text-5xl mb-2">43%</div>
                <div className="text-white/80 text-sm">Cart Abandonment Drop</div>
                <div className="text-white/60 text-xs mt-1">From 72% to 41%</div>
              </div>
              <div>
                <div className="text-5xl mb-2">+3.2min</div>
                <div className="text-white/80 text-sm">Session Duration</div>
                <div className="text-white/60 text-xs mt-1">From 2.1 to 5.3 minutes</div>
              </div>
              <div>
                <div className="text-5xl mb-2">₹12.4Cr</div>
                <div className="text-white/80 text-sm">Additional Revenue</div>
                <div className="text-white/60 text-xs mt-1">First 6 months post-launch</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
