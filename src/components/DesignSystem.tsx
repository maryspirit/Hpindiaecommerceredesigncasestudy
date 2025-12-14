import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Layers, Grid, Type, Palette, Component } from 'lucide-react';

export function DesignSystem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const atomicLayers = [
    {
      name: "Atoms",
      icon: "⚛️",
      description: "Basic building blocks",
      components: ["Buttons", "Inputs", "Icons", "Colors", "Typography", "Spacing"]
    },
    {
      name: "Molecules",
      icon: "🧬",
      description: "Simple component groups",
      components: ["Search Bar", "Product Card", "Filter Chip", "Breadcrumb", "Rating Star", "Price Tag"]
    },
    {
      name: "Organisms",
      icon: "🦠",
      description: "Complex UI sections",
      components: ["Header Nav", "Product Grid", "Filter Panel", "Footer", "Checkout Form", "Reviews Section"]
    },
    {
      name: "Templates",
      icon: "📄",
      description: "Page layouts",
      components: ["Homepage", "PLP Layout", "PDP Layout", "Checkout", "Account", "Search Results"]
    }
  ];

  const buttonVariants = [
    { name: "Primary", class: "bg-[#0096D6] text-white hover:bg-[#0085c0]" },
    { name: "Secondary", class: "bg-gray-200 text-gray-900 hover:bg-gray-300" },
    { name: "Outline", class: "border-2 border-[#0096D6] text-[#0096D6] hover:bg-blue-50" },
    { name: "Ghost", class: "text-[#0096D6] hover:bg-blue-50" },
    { name: "Destructive", class: "bg-red-600 text-white hover:bg-red-700" }
  ];

  const designTokens = [
    {
      category: "Spacing Scale",
      values: ["4px", "8px", "12px", "16px", "24px", "32px", "40px", "48px"]
    },
    {
      category: "Border Radius",
      values: ["4px", "8px", "12px", "16px", "20px", "24px", "full"]
    },
    {
      category: "Shadow Levels",
      values: ["sm", "md", "lg", "xl", "2xl"]
    },
    {
      category: "Breakpoints",
      values: ["320px", "768px", "1024px", "1440px"]
    }
  ];

  return (
    <section id="design-system" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full mb-4 text-sm">
              Design System
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Scalable Component Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive design system built on atomic design principles,
              ensuring consistency, scalability, and maintainability across the platform.
            </p>
          </div>

          {/* Atomic Design Layers */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Atomic Design Structure</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From smallest building blocks to complete page templates
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {atomicLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-5xl mb-4">{layer.icon}</div>
                  <h4 className="text-xl mb-2">{layer.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{layer.description}</p>
                  <ul className="space-y-1">
                    {layer.components.map((component, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#0096D6] rounded-full mt-2"></div>
                        <span>{component}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Button Component Examples */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Component Showcase: Buttons</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Consistent button styles with clear visual hierarchy
            </p>
            <div className="bg-white rounded-2xl p-12 border border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {buttonVariants.map((variant, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-6 py-3 rounded-lg transition-all ${variant.class}`}
                  >
                    {variant.name}
                  </motion.button>
                ))}
              </div>
              <div className="mt-8 text-center text-sm text-gray-500">
                Each state includes hover, active, focus, and disabled variants
              </div>
            </div>
          </div>

          {/* Color System */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">Color System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h4 className="text-xl mb-6">Primary Colors</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-[#0096D6] shadow-md"></div>
                    <div>
                      <div>HP Blue</div>
                      <div className="text-sm text-gray-500">#0096D6</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-[#00B8A9] shadow-md"></div>
                    <div>
                      <div>Teal Accent</div>
                      <div className="text-sm text-gray-500">#00B8A9</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-black shadow-md"></div>
                    <div>
                      <div>Black</div>
                      <div className="text-sm text-gray-500">#000000</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h4 className="text-xl mb-6">Neutral & Semantic Colors</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 border border-gray-300 shadow-md"></div>
                    <div>
                      <div>Light Gray</div>
                      <div className="text-sm text-gray-500">Backgrounds</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-green-500 shadow-md"></div>
                    <div>
                      <div>Success Green</div>
                      <div className="text-sm text-gray-500">Confirmations</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-red-500 shadow-md"></div>
                    <div>
                      <div>Error Red</div>
                      <div className="text-sm text-gray-500">Alerts</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Design Tokens */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12 text-center">Design Tokens</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designTokens.map((token, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <h4 className="mb-4 text-sm">{token.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {token.values.map((value, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded text-xs text-gray-700"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Component Documentation */}
          <div className="mb-20">
            <h3 className="text-3xl mb-12 text-center">Component Documentation</h3>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Component size={48} className="mx-auto mb-4 text-[#0096D6]" />
                  <div className="text-3xl mb-2">80+</div>
                  <div className="text-sm text-gray-600">Reusable Components</div>
                </div>
                <div className="text-center">
                  <Layers size={48} className="mx-auto mb-4 text-[#00B8A9]" />
                  <div className="text-3xl mb-2">4</div>
                  <div className="text-sm text-gray-600">Atomic Layers</div>
                </div>
                <div className="text-center">
                  <Grid size={48} className="mx-auto mb-4 text-purple-600" />
                  <div className="text-3xl mb-2">100%</div>
                  <div className="text-sm text-gray-600">Design-Dev Sync</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl mb-8 text-center">Design System Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">70%</div>
                <div className="text-lg mb-2">Faster Design</div>
                <div className="text-sm text-white/80">Reusable components speed up iteration</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">100%</div>
                <div className="text-lg mb-2">Consistency</div>
                <div className="text-sm text-white/80">Unified experience across all pages</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">85%</div>
                <div className="text-lg mb-2">Dev Efficiency</div>
                <div className="text-sm text-white/80">Pre-built components reduce dev time</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
