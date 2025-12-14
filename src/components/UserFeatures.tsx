import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  CreditCard, 
  MessageCircle,
  Bell,
  Eye,
  Shield,
  Smartphone,
  BarChart2,
  Headphones
} from 'lucide-react';

export function UserFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Search,
      category: "Smart Discovery",
      title: "AI-Powered Search",
      description: "Intelligent search with autocomplete, voice input, and visual search capabilities",
      highlights: [
        "Natural language processing",
        "Voice search support",
        "Visual search (upload image)",
        "Search history & trending"
      ],
      color: "blue"
    },
    {
      icon: Filter,
      category: "Advanced Filtering",
      title: "Smart Filter System",
      description: "Multi-dimensional filtering with real-time results and saved preferences",
      highlights: [
        "Multi-select filters",
        "Price range slider",
        "Spec-based filtering",
        "Real-time count updates"
      ],
      color: "purple"
    },
    {
      icon: BarChart2,
      category: "Product Comparison",
      title: "Compare Up to 4 Products",
      description: "Side-by-side comparison with highlighted differences and quick add to cart",
      highlights: [
        "Visual spec comparison",
        "Price comparison",
        "User ratings display",
        "Quick add from comparison"
      ],
      color: "teal"
    },
    {
      icon: Star,
      category: "Personalization",
      title: "Smart Recommendations",
      description: "AI-driven product suggestions based on browsing history and preferences",
      highlights: [
        "Browse history based",
        "Similar products",
        "Complete your setup",
        "Price drop alerts"
      ],
      color: "orange"
    },
    {
      icon: Eye,
      category: "Product Experience",
      title: "Enhanced Product Pages",
      description: "360° views, high-res gallery, videos, and detailed specifications",
      highlights: [
        "360° product rotation",
        "Zoom-capable gallery",
        "Demo videos",
        "Visual spec breakdown"
      ],
      color: "green"
    },
    {
      icon: CreditCard,
      category: "Checkout",
      title: "Seamless Payment",
      description: "Multiple payment options with EMI, UPI, and one-click checkout",
      highlights: [
        "Guest checkout option",
        "UPI integration",
        "EMI calculator",
        "Saved payment methods"
      ],
      color: "indigo"
    },
    {
      icon: MessageCircle,
      category: "Support",
      title: "Live Assistance",
      description: "AI chatbot and human support for instant help during shopping",
      highlights: [
        "24/7 AI chatbot",
        "Human agent handoff",
        "Virtual consultant",
        "Product selection help"
      ],
      color: "pink"
    },
    {
      icon: Shield,
      category: "Trust & Security",
      title: "Secure Shopping",
      description: "SSL encryption, authenticity guarantee, and clear warranty information",
      highlights: [
        "SSL certificate",
        "PCI DSS compliance",
        "Official HP warranty",
        "Authenticity badges"
      ],
      color: "red"
    },
    {
      icon: Smartphone,
      category: "Mobile Experience",
      title: "Mobile-First Features",
      description: "AR visualization, barcode scanner, and biometric login for mobile users",
      highlights: [
        "AR product preview",
        "QR code scanner",
        "Biometric login",
        "Offline cart sync"
      ],
      color: "cyan"
    },
    {
      icon: Headphones,
      category: "B2B Features",
      title: "Business Solutions",
      description: "Bulk ordering, quote requests, and corporate account management",
      highlights: [
        "Bulk order inquiry",
        "Quote request system",
        "Volume discounts",
        "GST management"
      ],
      color: "yellow"
    },
    {
      icon: Bell,
      category: "Notifications",
      title: "Smart Alerts",
      description: "Price drops, stock updates, and order tracking notifications",
      highlights: [
        "Price drop alerts",
        "Back-in-stock notify",
        "Order status updates",
        "Personalized offers"
      ],
      color: "lime"
    },
    {
      icon: ShoppingCart,
      category: "Cart Management",
      title: "Smart Cart",
      description: "Easy editing, saved carts, and smart recommendations in cart",
      highlights: [
        "Quick quantity adjust",
        "Save for later",
        "Related accessories",
        "Price breakdown"
      ],
      color: "emerald"
    }
  ];

  const colorMap: { [key: string]: { gradient: string; bg: string; text: string } } = {
    blue: { gradient: "from-blue-500 to-blue-600", bg: "bg-blue-50", text: "text-blue-600" },
    purple: { gradient: "from-purple-500 to-purple-600", bg: "bg-purple-50", text: "text-purple-600" },
    teal: { gradient: "from-teal-500 to-teal-600", bg: "bg-teal-50", text: "text-teal-600" },
    orange: { gradient: "from-orange-500 to-orange-600", bg: "bg-orange-50", text: "text-orange-600" },
    green: { gradient: "from-green-500 to-green-600", bg: "bg-green-50", text: "text-green-600" },
    indigo: { gradient: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50", text: "text-indigo-600" },
    pink: { gradient: "from-pink-500 to-pink-600", bg: "bg-pink-50", text: "text-pink-600" },
    red: { gradient: "from-red-500 to-red-600", bg: "bg-red-50", text: "text-red-600" },
    cyan: { gradient: "from-cyan-500 to-cyan-600", bg: "bg-cyan-50", text: "text-cyan-600" },
    yellow: { gradient: "from-yellow-500 to-yellow-600", bg: "bg-yellow-50", text: "text-yellow-600" },
    lime: { gradient: "from-lime-500 to-lime-600", bg: "bg-lime-50", text: "text-lime-600" },
    emerald: { gradient: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50", text: "text-emerald-600" }
  };

  return (
    <section id="features" className="py-32 bg-white">
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
              User-Friendly Features
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Features That Delight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of user-centered features designed to simplify product
              discovery, build trust, and create a seamless shopping experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorMap[feature.color];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className={`text-xs ${colors.text} mb-2`}>{feature.category}</div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-br ${colors.gradient}`}></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl mb-8 text-center">Key Feature Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-2">500+</div>
                <div className="text-sm text-white/80">Products Searchable</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">4</div>
                <div className="text-sm text-white/80">Products Comparable</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">7</div>
                <div className="text-sm text-white/80">Payment Methods</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">360°</div>
                <div className="text-sm text-white/80">Product Views</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">AR</div>
                <div className="text-sm text-white/80">Visualization</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">EMI</div>
                <div className="text-sm text-white/80">Options Available</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">3-Step</div>
                <div className="text-sm text-white/80">Checkout Process</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
