import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Search, BarChart3, MessageSquare, Lightbulb } from 'lucide-react';

export function ResearchPhase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personas = [
    {
      name: "Tech-Savvy Student",
      age: "19-24",
      goal: "Find budget laptops for college work",
      pain: "Confused by technical specs, needs comparison tools",
      color: "blue"
    },
    {
      name: "Professional",
      age: "28-45",
      goal: "Premium workstation for productivity",
      pain: "Time-constrained, wants expert recommendations",
      color: "purple"
    },
    {
      name: "Gamer",
      age: "18-35",
      goal: "High-performance gaming laptop",
      pain: "Needs detailed GPU/CPU specs, reviews from gamers",
      color: "red"
    },
    {
      name: "Business Buyer",
      age: "35-55",
      goal: "Bulk purchases with GST compliance",
      pain: "Requires quotes, volume discounts, invoicing",
      color: "green"
    },
    {
      name: "Creative Professional",
      age: "25-40",
      goal: "Workstation for design/video editing",
      pain: "Needs color accuracy specs, port details",
      color: "orange"
    }
  ];

  const keyFindings = [
    {
      icon: Search,
      title: "Product Discovery Issues",
      stat: "78%",
      description: "of users found the search function inadequate, struggling with technical terminology",
      color: "blue"
    },
    {
      icon: Target,
      title: "Comparison Difficulty",
      stat: "82%",
      description: "wanted easier ways to compare products side-by-side with highlighted differences",
      color: "purple"
    },
    {
      icon: Users,
      title: "Trust Concerns",
      stat: "67%",
      description: "hesitated during checkout due to unclear warranty, return policies, and security badges",
      color: "teal"
    },
    {
      icon: BarChart3,
      title: "Mobile Frustration",
      stat: "71%",
      description: "abandoned mobile purchases due to small touch targets and difficult navigation",
      color: "orange"
    },
    {
      icon: MessageSquare,
      title: "Support Needs",
      stat: "64%",
      description: "wanted instant help during product selection but couldn't find easy contact options",
      color: "green"
    },
    {
      icon: Lightbulb,
      title: "Personalization Gap",
      stat: "89%",
      description: "felt overwhelmed by choices and wanted intelligent recommendations based on needs",
      color: "red"
    }
  ];

  const researchMethods = [
    {
      method: "User Interviews",
      count: "24 participants",
      description: "In-depth 45-60 min sessions with target personas",
      icon: "👥"
    },
    {
      method: "Surveys",
      count: "247 responses",
      description: "Quantitative data on pain points and preferences",
      icon: "📊"
    },
    {
      method: "Usability Testing",
      count: "18 users",
      description: "Task-based testing on existing HP India website",
      icon: "🔍"
    },
    {
      method: "Analytics Review",
      count: "6 months data",
      description: "Heat maps, click tracking, funnel analysis",
      icon: "📈"
    },
    {
      method: "Competitor Analysis",
      count: "5 platforms",
      description: "Dell, Lenovo, Apple, Amazon, Flipkart benchmarking",
      icon: "🎯"
    },
    {
      method: "Card Sorting",
      count: "32 participants",
      description: "Information architecture and navigation structure",
      icon: "🃏"
    }
  ];

  const colorMap: { [key: string]: string } = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    teal: "from-teal-500 to-teal-600"
  };

  return (
    <section id="research" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-50 text-[#0096D6] rounded-full mb-4 text-sm">
              Research & Discovery
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Understanding Our Users
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep user research revealed critical insights that shaped our design strategy
              and informed every decision throughout the redesign process.
            </p>
          </div>

          {/* Research Methods */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">Research Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h4 className="text-xl mb-2">{method.method}</h4>
                  <div className="text-[#0096D6] mb-3">{method.count}</div>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* User Personas */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Target User Personas</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We identified five distinct user segments, each with unique needs and pain points
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {personas.map((persona, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorMap[persona.color]} mb-4`}></div>
                  <h4 className="mb-1">{persona.name}</h4>
                  <div className="text-sm text-gray-500 mb-3">Age: {persona.age}</div>
                  <div className="text-sm mb-3">
                    <div className="text-green-600 mb-1">Goal:</div>
                    <div className="text-gray-600">{persona.goal}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-red-600 mb-1">Pain:</div>
                    <div className="text-gray-600">{persona.pain}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Key Research Findings</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Data-backed insights that drove our design decisions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFindings.map((finding, index) => {
                const Icon = finding.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[finding.color]} flex items-center justify-center mb-4`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-4xl mb-2">{finding.stat}</div>
                      <h4 className="text-xl mb-3">{finding.title}</h4>
                      <p className="text-gray-600">{finding.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Opportunity Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-3xl p-12 text-white text-center"
          >
            <Lightbulb size={48} className="mx-auto mb-6" />
            <h3 className="text-3xl mb-4">Opportunity Statement</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How might we create an intuitive, trust-building e-commerce experience that helps
              users confidently find and purchase the right HP product for their needs, regardless
              of their technical expertise or device?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
