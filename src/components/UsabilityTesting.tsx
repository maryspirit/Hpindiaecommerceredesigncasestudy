import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Clock, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export function UsabilityTesting() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testingData = {
    participants: 20,
    sessions: "45-60 min",
    method: "Moderated Remote",
    tools: "Zoom, Hotjar, Figma Prototype"
  };

  const tasks = [
    {
      task: "Find and purchase a specific laptop",
      successBefore: 45,
      successAfter: 92,
      timeBefore: 8.2,
      timeAfter: 3.1
    },
    {
      task: "Compare two products",
      successBefore: 38,
      successAfter: 95,
      timeBefore: 6.5,
      timeAfter: 1.8
    },
    {
      task: "Apply for EMI option",
      successBefore: 52,
      successAfter: 88,
      timeBefore: 5.3,
      timeAfter: 2.4
    },
    {
      task: "Track an existing order",
      successBefore: 61,
      successAfter: 97,
      timeBefore: 4.1,
      timeAfter: 1.2
    },
    {
      task: "Contact customer support",
      successBefore: 43,
      successAfter: 91,
      timeBefore: 7.8,
      timeAfter: 0.9
    }
  ];

  const successRateData = [
    { task: 'Find Product', before: 45, after: 92 },
    { task: 'Compare', before: 38, after: 95 },
    { task: 'Apply EMI', before: 52, after: 88 },
    { task: 'Track Order', before: 61, after: 97 },
    { task: 'Support', before: 43, after: 91 }
  ];

  const satisfactionData = [
    { metric: 'Overall', score: 87 },
    { metric: 'Ease of Use', score: 92 },
    { metric: 'Visual Design', score: 94 },
    { metric: 'Trust', score: 89 },
    { metric: 'Mobile', score: 91 }
  ];

  const keyFindings = [
    {
      icon: CheckCircle2,
      type: "Success",
      title: "Intuitive Navigation",
      finding: "95% of users successfully found products without assistance",
      color: "green"
    },
    {
      icon: CheckCircle2,
      type: "Success",
      title: "Trust Signals Working",
      finding: "89% felt confident completing purchases due to clear warranty info and reviews",
      color: "green"
    },
    {
      icon: CheckCircle2,
      type: "Success",
      title: "Mobile Experience",
      finding: "91% preferred the mobile experience over competitors",
      color: "green"
    },
    {
      icon: AlertCircle,
      type: "Issue",
      title: "EMI Information",
      finding: "12% wanted EMI calculator more prominent on product pages",
      color: "orange"
    },
    {
      icon: AlertCircle,
      type: "Issue",
      title: "Comparison Limit",
      finding: "8% wished to compare more than 4 products simultaneously",
      color: "orange"
    }
  ];

  const iterations = [
    {
      issue: "Filter panel hidden on mobile",
      solution: "Added persistent filter button with badge count",
      impact: "+18% mobile filter usage"
    },
    {
      issue: "EMI calculator not discoverable",
      solution: "Moved EMI badge to product card and detail page hero",
      impact: "+34% EMI inquiries"
    },
    {
      issue: "Comparison button placement",
      solution: "Added to product cards with visual feedback",
      impact: "+41% comparison feature usage"
    }
  ];

  return (
    <section id="testing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full mb-4 text-sm">
              Usability Testing
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Validating Design Decisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous testing with real users to validate design decisions,
              identify pain points, and iterate towards the optimal experience.
            </p>
          </div>

          {/* Testing Methodology */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 text-center"
            >
              <Users size={32} className="mx-auto mb-3 text-[#0096D6]" />
              <div className="text-3xl mb-1">{testingData.participants}</div>
              <div className="text-sm text-gray-600">Participants</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 text-center"
            >
              <Clock size={32} className="mx-auto mb-3 text-purple-600" />
              <div className="text-3xl mb-1">{testingData.sessions}</div>
              <div className="text-sm text-gray-600">Session Length</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100 text-center"
            >
              <Target size={32} className="mx-auto mb-3 text-teal-600" />
              <div className="text-xl mb-1">{testingData.method}</div>
              <div className="text-sm text-gray-600">Method</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 text-center"
            >
              <TrendingUp size={32} className="mx-auto mb-3 text-orange-600" />
              <div className="text-xl mb-1">5</div>
              <div className="text-sm text-gray-600">Core Tasks</div>
            </motion.div>
          </div>

          {/* Task Success Rate Comparison */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Task Success Rate: Before vs After</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Dramatic improvements across all core user tasks
            </p>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={successRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="task" />
                  <YAxis label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="before" fill="#E5E7EB" name="Before Redesign" />
                  <Bar dataKey="after" fill="#0096D6" name="After Redesign" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Satisfaction Scores */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">User Satisfaction Scores</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              High satisfaction across all measured dimensions (out of 100)
            </p>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={satisfactionData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="metric" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#00B8A9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Findings */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">Key Testing Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFindings.map((finding, index) => {
                const Icon = finding.icon;
                const isSuccess = finding.color === 'green';
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border-2 ${
                      isSuccess 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-orange-50 border-orange-200'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className={isSuccess ? 'text-green-600' : 'text-orange-600'} size={24} />
                      <div className={`text-xs px-2 py-1 rounded ${
                        isSuccess ? 'bg-green-200 text-green-700' : 'bg-orange-200 text-orange-700'
                      }`}>
                        {finding.type}
                      </div>
                    </div>
                    <h4 className="mb-2">{finding.title}</h4>
                    <p className="text-sm text-gray-700">{finding.finding}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Iterations */}
          <div className="mb-20">
            <h3 className="text-3xl mb-4 text-center">Design Iterations</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Based on testing feedback, we made these key improvements
            </p>
            <div className="space-y-6">
              {iterations.map((iteration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div>
                      <div className="text-xs text-red-600 mb-2">Issue Identified</div>
                      <div className="text-gray-900">{iteration.issue}</div>
                    </div>
                    <div>
                      <div className="text-xs text-blue-600 mb-2">Solution Applied</div>
                      <div className="text-gray-900">{iteration.solution}</div>
                    </div>
                    <div>
                      <div className="text-xs text-green-600 mb-2">Impact Measured</div>
                      <div className="text-green-700">{iteration.impact}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-3xl p-12 text-white text-center"
          >
            <h3 className="text-3xl mb-8">Overall Testing Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl mb-2">90%</div>
                <div className="text-sm text-white/80">Avg. Task Success</div>
              </div>
              <div>
                <div className="text-5xl mb-2">87</div>
                <div className="text-sm text-white/80">SUS Score</div>
              </div>
              <div>
                <div className="text-5xl mb-2">-62%</div>
                <div className="text-sm text-white/80">Time on Task</div>
              </div>
              <div>
                <div className="text-5xl mb-2">94%</div>
                <div className="text-sm text-white/80">Would Recommend</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
