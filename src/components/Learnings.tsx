import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, CheckCircle2, AlertTriangle, TrendingUp, Rocket, Globe, Users } from 'lucide-react';

export function Learnings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const keyLearnings = [
    {
      icon: CheckCircle2,
      title: "Mobile-First is Critical",
      learning: "With 68% mobile traffic, prioritizing mobile experience from day one was crucial. Mobile users now convert at nearly desktop rates.",
      color: "green"
    },
    {
      icon: CheckCircle2,
      title: "Progressive Disclosure Works",
      learning: "Breaking complex product specs into digestible, expandable sections reduced cognitive load and improved task completion by 54%.",
      color: "blue"
    },
    {
      icon: CheckCircle2,
      title: "Trust Signals Matter",
      learning: "Prominent placement of reviews, warranty info, and security badges increased checkout confidence by 67%.",
      color: "purple"
    },
    {
      icon: AlertTriangle,
      title: "Technical Constraints",
      learning: "Legacy backend systems required creative workarounds. Early collaboration with dev team prevented scope creep.",
      color: "orange"
    },
    {
      icon: CheckCircle2,
      title: "User Testing is Essential",
      learning: "Three rounds of testing caught critical issues. The filter panel redesign alone increased usage by 41%.",
      color: "teal"
    },
    {
      icon: CheckCircle2,
      title: "Design System ROI",
      learning: "Initial time investment in design system paid off exponentially in faster iterations and development.",
      color: "indigo"
    }
  ];

  const futureEnhancements = [
    {
      icon: Rocket,
      title: "Advanced AR Integration",
      description: "Expand AR product visualization to more product categories beyond laptops",
      priority: "High",
      timeline: "Q1 2024"
    },
    {
      icon: Lightbulb,
      title: "AI Chatbot Enhancement",
      description: "Train AI on product database for more accurate recommendations and troubleshooting",
      priority: "High",
      timeline: "Q2 2024"
    },
    {
      icon: TrendingUp,
      title: "Personalization Engine",
      description: "Machine learning-based product recommendations using browsing and purchase history",
      priority: "Medium",
      timeline: "Q2 2024"
    },
    {
      icon: Globe,
      title: "Voice Commerce",
      description: "Voice-activated shopping for hands-free product search and ordering",
      priority: "Medium",
      timeline: "Q3 2024"
    },
    {
      icon: Users,
      title: "Social Commerce Features",
      description: "User-generated content, social sharing, and community reviews integration",
      priority: "Medium",
      timeline: "Q3 2024"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Localization for major Indian languages to expand market reach",
      priority: "High",
      timeline: "Q4 2024"
    }
  ];

  const designDecisions = [
    {
      decision: "3-step checkout vs. one-page",
      rationale: "Testing showed users preferred clear progress over endless scrolling",
      outcome: "43% reduction in cart abandonment"
    },
    {
      decision: "Product comparison limit of 4",
      rationale: "Balances utility with cognitive load; more causes decision paralysis",
      outcome: "95% of users found 4 sufficient"
    },
    {
      decision: "Persistent search bar",
      rationale: "Search is primary discovery method; needs to be always accessible",
      outcome: "78% increase in search usage"
    }
  ];

  const scalability = [
    {
      consideration: "International Expansion",
      approach: "Design system supports RTL languages, currency conversion, and regional payment methods"
    },
    {
      consideration: "Product Catalog Growth",
      approach: "Flexible grid system and filtering accommodate unlimited SKU expansion"
    },
    {
      consideration: "Performance at Scale",
      approach: "Lazy loading, image optimization, and CDN integration ensure sub-3s load times"
    },
    {
      consideration: "Design System Evolution",
      approach: "Component library versioning and documentation enable continuous improvement"
    }
  ];

  const colorMap: { [key: string]: { bg: string; text: string } } = {
    green: { bg: "bg-green-50", text: "text-green-600" },
    blue: { bg: "bg-blue-50", text: "text-blue-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600" },
    teal: { bg: "bg-teal-50", text: "text-teal-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600" }
  };

  return (
    <section id="learnings" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full mb-4 text-sm">
              Learnings & Future
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Key Learnings & Next Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reflections on what worked, challenges overcome, and the roadmap
              for continuous improvement and innovation.
            </p>
          </div>

          {/* Key Learnings */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">What We Learned</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyLearnings.map((item, index) => {
                const Icon = item.icon;
                const colors = colorMap[item.color];
                const isSuccess = item.icon === CheckCircle2;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-8 rounded-2xl border-2 ${
                      isSuccess ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
                    }`}
                  >
                    <Icon className={isSuccess ? 'text-green-600 mb-4' : 'text-orange-600 mb-4'} size={32} />
                    <h4 className="text-xl mb-3">{item.title}</h4>
                    <p className="text-gray-700">{item.learning}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Design Decisions Rationale */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Critical Design Decisions</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              The reasoning behind key design choices and their impact
            </p>
            <div className="space-y-6">
              {designDecisions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs text-[#0096D6] mb-2">Decision</div>
                      <div>{item.decision}</div>
                    </div>
                    <div>
                      <div className="text-xs text-purple-600 mb-2">Rationale</div>
                      <div className="text-gray-700">{item.rationale}</div>
                    </div>
                    <div>
                      <div className="text-xs text-green-600 mb-2">Outcome</div>
                      <div className="text-green-700">{item.outcome}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Enhancements */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Roadmap & Future Enhancements</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Planned improvements to continue evolving the user experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureEnhancements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.priority === 'High' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.priority} Priority
                      </span>
                      <span className="text-xs text-gray-500">{item.timeline}</span>
                    </div>
                    <h4 className="text-xl mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scalability Considerations */}
          <div className="mb-20">
            <h3 className="text-3xl mb-12 text-center">Scalability & Long-term Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scalability.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
                >
                  <h4 className="text-xl mb-3">{item.consideration}</h4>
                  <p className="text-gray-700">{item.approach}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-3xl p-12 text-white text-center"
          >
            <Lightbulb size={56} className="mx-auto mb-6" />
            <h3 className="text-3xl mb-6">Continuous Improvement</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              This redesign is not an endpoint but a foundation for ongoing innovation.
              We're committed to continuously listening to users, analyzing data, and
              evolving the experience to meet changing needs and expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>User feedback loops</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>A/B testing framework</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Quarterly design reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Analytics monitoring</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}