import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

export function DesignShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const screens = [
    {
      title: "Homepage Redesign",
      description: "Clean, focused hero with intelligent product recommendations and category navigation",
      device: "desktop",
      features: ["Dynamic hero carousel", "Smart recommendations", "Category mega menu", "Search autocomplete"]
    },
    {
      title: "Product Listing",
      description: "Advanced filtering with real-time results, grid/list views, and comparison tools",
      device: "desktop",
      features: ["Multi-select filters", "Sort options", "Quick view", "Compare checkbox"]
    },
    {
      title: "Product Detail Page",
      description: "360° product view, comprehensive specs, reviews, and trust signals",
      device: "desktop",
      features: ["360° rotation", "Spec tabs", "Customer reviews", "What's in box"]
    },
    {
      title: "Mobile Shopping",
      description: "Touch-optimized interface with gesture controls and offline cart",
      device: "mobile",
      features: ["Swipe gallery", "Bottom nav", "Quick filters", "Biometric login"]
    },
    {
      title: "Checkout Flow",
      description: "Streamlined 3-step process with guest checkout and multiple payment options",
      device: "desktop",
      features: ["Guest checkout", "UPI integration", "EMI calculator", "Order summary"]
    },
    {
      title: "AR Product View",
      description: "Augmented reality preview to visualize products in your space",
      device: "mobile",
      features: ["AR camera", "Scale adjustment", "Rotation control", "Save screenshot"]
    }
  ];

  const wireframes = [
    { name: "Information Architecture", description: "Site map and navigation structure" },
    { name: "User Flow Diagrams", description: "Product discovery to purchase journey" },
    { name: "Low-Fi Wireframes", description: "Layout and content hierarchy" },
    { name: "Interactive Prototypes", description: "Clickable prototypes for testing" }
  ];

  return (
    <section id="showcase" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full mb-4 text-sm">
              Design Showcase
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              High-Fidelity Designs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Polished, pixel-perfect interfaces designed for web and mobile platforms,
              showcasing the complete user experience from discovery to purchase.
            </p>
          </div>

          {/* Wireframes Section */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Wireframes & User Flows</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Low-fidelity wireframes and user journey maps that guided the design process
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {wireframes.map((wireframe, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-300"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Wireframe</div>
                  </div>
                  <h4 className="mb-2">{wireframe.name}</h4>
                  <p className="text-sm text-gray-600">{wireframe.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design Screens */}
          <div className="mb-20">
            <h3 className="text-3xl mb-12 text-center">Key Screens</h3>
            <div className="space-y-20">
              {screens.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Screen Preview */}
                  <div className="flex-1 w-full">
                    <div className={`relative ${screen.device === 'mobile' ? 'max-w-sm mx-auto' : ''}`}>
                      {/* Device Frame */}
                      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl ${
                        screen.device === 'mobile' ? 'pb-8' : ''
                      }`}>
                        {screen.device === 'desktop' && (
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                        )}
                        {screen.device === 'mobile' && (
                          <div className="flex justify-center mb-2">
                            <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                          </div>
                        )}
                        {/* Screen Content */}
                        <div className={`bg-white rounded-lg overflow-hidden ${
                          screen.device === 'mobile' ? 'aspect-[9/19]' : 'aspect-[16/10]'
                        }`}>
                          <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-8">
                            <div className="text-center">
                              {screen.device === 'mobile' ? (
                                <Smartphone size={48} className="mx-auto mb-4 text-[#0096D6]" />
                              ) : (
                                <Monitor size={48} className="mx-auto mb-4 text-[#0096D6]" />
                              )}
                              <div className="text-sm text-gray-400">High-Fidelity Design</div>
                            </div>
                          </div>
                        </div>
                        {screen.device === 'mobile' && (
                          <div className="flex justify-center mt-3">
                            <div className="w-12 h-12 border-2 border-gray-700 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Screen Details */}
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 rounded-full mb-4 text-xs ${
                      screen.device === 'mobile' 
                        ? 'bg-purple-50 text-purple-600' 
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {screen.device === 'mobile' ? 'Mobile' : 'Desktop'}
                    </div>
                    <h3 className="text-3xl mb-4">{screen.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{screen.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm mb-3">Key Features:</div>
                      {screen.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#0096D6] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Responsive Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center"
          >
            <h3 className="text-3xl mb-6">Responsive Across All Devices</h3>
            <p className="text-white/90 mb-12 max-w-2xl mx-auto">
              Every screen optimized for mobile, tablet, and desktop experiences
            </p>
            <div className="flex justify-center items-end gap-8">
              <div className="text-center">
                <div className="w-16 h-24 bg-white/20 backdrop-blur-sm rounded-xl mb-3 mx-auto"></div>
                <Smartphone className="mx-auto mb-2" size={24} />
                <div className="text-sm">Mobile</div>
              </div>
              <div className="text-center">
                <div className="w-24 h-32 bg-white/20 backdrop-blur-sm rounded-xl mb-3 mx-auto"></div>
                <Tablet className="mx-auto mb-2" size={28} />
                <div className="text-sm">Tablet</div>
              </div>
              <div className="text-center">
                <div className="w-40 h-24 bg-white/20 backdrop-blur-sm rounded-xl mb-3 mx-auto"></div>
                <Monitor className="mx-auto mb-2" size={32} />
                <div className="text-sm">Desktop</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
