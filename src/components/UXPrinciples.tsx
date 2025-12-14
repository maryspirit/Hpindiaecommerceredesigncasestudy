import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  Eye, 
  Users, 
  RefreshCw, 
  CheckSquare, 
  AlertTriangle, 
  Brain,
  Zap,
  Heart,
  Shield,
  HelpCircle,
  Navigation2,
  Layers
} from 'lucide-react';

export function UXPrinciples() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nielsenHeuristics = [
    {
      icon: Eye,
      title: "Visibility of System Status",
      examples: [
        "Loading indicators for product searches",
        "Cart quantity badges in header",
        "Real-time order tracking progress",
        "Filter application feedback"
      ],
      color: "blue"
    },
    {
      icon: Users,
      title: "Match System & Real World",
      examples: [
        "Natural language in descriptions",
        "Familiar e-commerce patterns",
        "Industry-standard terminology",
        "Visual metaphors for actions"
      ],
      color: "green"
    },
    {
      icon: RefreshCw,
      title: "User Control & Freedom",
      examples: [
        "Easy cart editing and removal",
        "Clear breadcrumb navigation",
        "Undo for critical actions",
        "Back button functionality"
      ],
      color: "purple"
    },
    {
      icon: CheckSquare,
      title: "Consistency & Standards",
      examples: [
        "Uniform button styling",
        "Standardized form layouts",
        "Platform convention adherence",
        "Component library usage"
      ],
      color: "teal"
    },
    {
      icon: AlertTriangle,
      title: "Error Prevention",
      examples: [
        "Real-time form validation",
        "Confirmation for deletions",
        "Stock availability upfront",
        "Smart input suggestions"
      ],
      color: "orange"
    },
    {
      icon: Brain,
      title: "Recognition Over Recall",
      examples: [
        "Recently viewed products",
        "Saved filters and preferences",
        "Visual comparison tools",
        "Search history suggestions"
      ],
      color: "pink"
    },
    {
      icon: Zap,
      title: "Flexibility & Efficiency",
      examples: [
        "Quick filters for power users",
        "Advanced search options",
        "Keyboard shortcuts",
        "Bulk actions support"
      ],
      color: "indigo"
    },
    {
      icon: Heart,
      title: "Aesthetic & Minimalist",
      examples: [
        "Clean, uncluttered layouts",
        "Progressive disclosure",
        "Essential info priority",
        "Generous white space"
      ],
      color: "red"
    },
    {
      icon: HelpCircle,
      title: "Help Users with Errors",
      examples: [
        "Clear error messages",
        "Recovery suggestions",
        "Inline validation feedback",
        "Helpful microcopy"
      ],
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Help & Documentation",
      examples: [
        "Contextual tooltips",
        "Live chat support",
        "Comprehensive FAQ",
        "Video tutorials"
      ],
      color: "cyan"
    }
  ];

  const uxFocus = [
    {
      icon: Navigation2,
      title: "Information Architecture",
      description: "Logical, intuitive navigation structure",
      features: [
        "Mega menu with visual categories",
        "Persistent search bar",
        "Breadcrumb trails",
        "Secondary quick actions"
      ]
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Designed for diverse user segments",
      features: [
        "Accessibility-first (WCAG 2.1 AA)",
        "Mobile-first responsive",
        "Persona-driven features",
        "Inclusive design patterns"
      ]
    },
    {
      icon: Layers,
      title: "Content Strategy",
      description: "Scannable, actionable information",
      features: [
        "Progressive disclosure",
        "Visual specification sheets",
        "Customer-focused copy",
        "Comparison tables"
      ]
    }
  ];

  const colorMap: { [key: string]: { bg: string; text: string } } = {
    blue: { bg: "bg-blue-50", text: "text-blue-600" },
    green: { bg: "bg-green-50", text: "text-green-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600" },
    teal: { bg: "bg-teal-50", text: "text-teal-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600" },
    pink: { bg: "bg-pink-50", text: "text-pink-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
    red: { bg: "bg-red-50", text: "text-red-600" },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-600" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600" }
  };

  return (
    <section id="ux-principles" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full mb-4 text-sm">
              UX Principles
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              User Experience Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every design decision grounded in proven UX principles and Nielsen's usability
              heuristics to ensure an intuitive, efficient, and delightful experience.
            </p>
          </div>

          {/* Nielsen's 10 Heuristics */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Nielsen's Usability Heuristics</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Applied throughout the design to ensure industry-standard usability
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {nielsenHeuristics.map((heuristic, index) => {
                const Icon = heuristic.icon;
                const colors = colorMap[heuristic.color];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={colors.text} size={24} />
                    </div>
                    <h4 className="mb-3 text-sm">{heuristic.title}</h4>
                    <ul className="space-y-2">
                      {heuristic.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <div className={`w-1 h-1 ${colors.bg} rounded-full mt-1.5 flex-shrink-0`}></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* UX Focus Areas */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">Core UX Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {uxFocus.map((focus, index) => {
                const Icon = focus.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200"
                  >
                    <div className="w-14 h-14 bg-[#0096D6] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-2xl mb-2">{focus.title}</h4>
                    <p className="text-gray-600 mb-6">{focus.description}</p>
                    <ul className="space-y-2">
                      {focus.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#00B8A9] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Accessibility Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Shield size={48} className="mb-6" />
                <h3 className="text-3xl mb-4">Accessibility First</h3>
                <p className="text-white/90 mb-6">
                  Designed to WCAG 2.1 Level AA standards, ensuring everyone can use
                  HP India's e-commerce platform regardless of ability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare size={20} className="mt-0.5 flex-shrink-0" />
                    <span>Keyboard navigation support throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare size={20} className="mt-0.5 flex-shrink-0" />
                    <span>Screen reader compatibility with ARIA labels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare size={20} className="mt-0.5 flex-shrink-0" />
                    <span>4.5:1 minimum color contrast ratio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare size={20} className="mt-0.5 flex-shrink-0" />
                    <span>Focus indicators on all interactive elements</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">100%</div>
                  <div className="text-sm text-white/80">Keyboard Accessible</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">AA</div>
                  <div className="text-sm text-white/80">WCAG 2.1 Level</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">4.5:1</div>
                  <div className="text-sm text-white/80">Contrast Ratio</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">0</div>
                  <div className="text-sm text-white/80">Accessibility Errors</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
