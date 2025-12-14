import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, ShoppingCart, Clock, Users, Star, DollarSign } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function ResultsImpact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const conversionData = [
    { month: 'Pre-Launch', desktop: 2.9, mobile: 1.4, overall: 2.8 },
    { month: 'Month 1', desktop: 3.6, mobile: 2.1, overall: 3.2 },
    { month: 'Month 2', desktop: 3.9, mobile: 2.7, overall: 3.5 },
    { month: 'Month 3', desktop: 4.2, mobile: 3.1, overall: 3.8 },
    { month: 'Month 4', desktop: 4.3, mobile: 3.3, overall: 4.0 },
    { month: 'Month 5', desktop: 4.4, mobile: 3.4, overall: 4.1 },
    { month: 'Month 6', desktop: 4.5, mobile: 3.4, overall: 4.1 }
  ];

  const revenueData = [
    { month: 'Month 1', revenue: 1.8 },
    { month: 'Month 2', revenue: 3.2 },
    { month: 'Month 3', revenue: 5.4 },
    { month: 'Month 4', revenue: 7.9 },
    { month: 'Month 5', revenue: 10.2 },
    { month: 'Month 6', revenue: 12.4 }
  ];

  const metrics = [
    {
      icon: ShoppingCart,
      metric: "Conversion Rate",
      before: "2.8%",
      after: "4.1%",
      change: "+47%",
      color: "blue",
      impact: "Direct revenue impact from improved UX"
    },
    {
      icon: Users,
      metric: "Bounce Rate",
      before: "58%",
      after: "39%",
      change: "-32%",
      color: "green",
      impact: "Better engagement and content discovery"
    },
    {
      icon: Clock,
      metric: "Session Duration",
      before: "2.1 min",
      after: "5.3 min",
      change: "+152%",
      color: "purple",
      impact: "Users spending more time exploring products"
    },
    {
      icon: ShoppingCart,
      metric: "Cart Abandonment",
      before: "72%",
      after: "41%",
      change: "-43%",
      color: "orange",
      impact: "Streamlined checkout reducing drop-offs"
    },
    {
      icon: Star,
      metric: "Mobile Conversion",
      before: "14%",
      after: "34%",
      change: "+143%",
      color: "pink",
      impact: "Mobile-first design paying dividends"
    },
    {
      icon: DollarSign,
      metric: "Average Order Value",
      before: "₹42,300",
      after: "₹51,200",
      change: "+21%",
      color: "teal",
      impact: "Better product recommendations driving upsells"
    }
  ];

  const qualitativeResults = [
    {
      category: "User Satisfaction",
      score: "4.6/5.0",
      description: "Post-launch survey of 500+ customers",
      feedback: "\"Much easier to find what I need\" - 89% of respondents"
    },
    {
      category: "Net Promoter Score",
      score: "67",
      description: "Up from 42 pre-redesign",
      feedback: "\"Would definitely recommend HP India's website\" - 84%"
    },
    {
      category: "Support Tickets",
      score: "-38%",
      description: "Reduction in support inquiries",
      feedback: "Self-service features reducing support burden"
    },
    {
      category: "Accessibility Score",
      score: "98/100",
      description: "WCAG 2.1 AA compliant",
      feedback: "Lighthouse accessibility audit score"
    }
  ];

  const businessImpact = [
    { metric: "Additional Revenue", value: "₹12.4 Crores", period: "First 6 months" },
    { metric: "Customer Acquisition Cost", value: "-28%", period: "Organic traffic increase" },
    { metric: "Return Rate", value: "-15%", period: "Better product information" },
    { metric: "Customer Lifetime Value", value: "+34%", period: "Improved retention" }
  ];

  const colorMap: { [key: string]: string } = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    pink: "from-pink-500 to-pink-600",
    teal: "from-teal-500 to-teal-600"
  };

  return (
    <section id="results" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full mb-4 text-sm">
              Results & Impact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The redesign delivered significant improvements across all key performance indicators,
              directly contributing to HP India's bottom line and customer satisfaction.
            </p>
          </div>

          {/* Hero Metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-3xl p-16 text-white text-center mb-24"
          >
            <div className="text-7xl md:text-8xl mb-4">₹12.4Cr</div>
            <div className="text-2xl mb-2">Additional Revenue Generated</div>
            <div className="text-white/80">In the first 6 months post-launch</div>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">Quantitative Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metrics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[item.color]} flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl mb-4">{item.metric}</h4>
                    <div className="flex items-baseline gap-4 mb-2">
                      <div className="text-sm text-gray-500">Before: {item.before}</div>
                      <div className="text-sm text-gray-500">After: {item.after}</div>
                    </div>
                    <div className="text-3xl mb-3 text-green-600">{item.change}</div>
                    <p className="text-sm text-gray-600">{item.impact}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Conversion Rate Trend */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Conversion Rate Trend</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Steady growth in conversion rates across desktop and mobile platforms
            </p>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Conversion Rate (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="desktop" stroke="#0096D6" strokeWidth={2} name="Desktop" />
                  <Line type="monotone" dataKey="mobile" stroke="#00B8A9" strokeWidth={2} name="Mobile" />
                  <Line type="monotone" dataKey="overall" stroke="#6366F1" strokeWidth={3} name="Overall" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Growth */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Cumulative Additional Revenue</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Month-over-month revenue growth attributed to the redesign
            </p>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Revenue (₹ Crores)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#0096D6" fill="#0096D6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Qualitative Results */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">Qualitative Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualitativeResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
                >
                  <h4 className="text-xl mb-2">{result.category}</h4>
                  <div className="text-4xl text-[#0096D6] mb-3">{result.score}</div>
                  <p className="text-sm text-gray-600 mb-3">{result.description}</p>
                  <p className="text-sm italic text-gray-700">{result.feedback}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="mb-20">
            <h3 className="text-3xl mb-12 text-center">Business Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessImpact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center"
                >
                  <div className="text-3xl mb-2 text-green-600">{item.value}</div>
                  <div className="mb-2">{item.metric}</div>
                  <div className="text-xs text-gray-500">{item.period}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 text-white text-center"
          >
            <TrendingUp size={56} className="mx-auto mb-6" />
            <h3 className="text-3xl mb-6">Transformative Results</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              The redesign not only met but exceeded all success criteria, delivering measurable
              improvements in user experience, business metrics, and customer satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-2">47%</div>
                <div className="text-white/80">Conversion Increase</div>
              </div>
              <div>
                <div className="text-5xl mb-2">₹12.4Cr</div>
                <div className="text-white/80">Additional Revenue</div>
              </div>
              <div>
                <div className="text-5xl mb-2">4.6/5</div>
                <div className="text-white/80">User Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
