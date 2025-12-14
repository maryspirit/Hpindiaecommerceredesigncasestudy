import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Palette, Layout, Layers, Type, Smartphone, Monitor } from 'lucide-react';

export function DesignPrinciples() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const principles = [
    {
      icon: Layout,
      title: "Visual Hierarchy",
      description: "Strategic use of scale, contrast, and white space to guide user attention",
      points: [
        "Hero images: 1200x800px minimum for impact",
        "Typography scale: 48px → 36px → 24px → 16px",
        "40px section padding for breathing room",
        "F-pattern for product listings, Z-pattern for heroes"
      ]
    },
    {
      icon: Palette,
      title: "Color Psychology",
      description: "Purposeful color choices that build trust and drive action",
      points: [
        "HP Blue (#0096D6): Trust, technology, professionalism",
        "Black (#000000): Sophistication, premium feel",
        "Teal (#00B8A9): Innovation, energy, accents",
        "4.5:1 contrast ratio for WCAG AA compliance"
      ]
    },
    {
      icon: Type,
      title: "Typography System",
      description: "Clear hierarchical type scale for scannable content",
      points: [
        "HP Simplified for headings (brand consistency)",
        "Inter/Roboto for body text (readability)",
        "Font weights: 300, 400, 500, 700",
        "1.5 line-height for comfortable reading"
      ]
    },
    {
      icon: Layers,
      title: "Grid System",
      description: "Flexible 12-column grid ensuring consistency across breakpoints",
      points: [
        "12-column responsive grid system",
        "Mobile: 320px, Tablet: 768px, Desktop: 1024px",
        "8px base unit for spacing harmony",
        "Asymmetrical balance for dynamic showcases"
      ]
    }
  ];

  const colorPalette = [
    { name: "HP Blue", hex: "#0096D6", usage: "Primary actions, links, brand" },
    { name: "Black", hex: "#000000", usage: "Headings, primary text" },
    { name: "Teal", hex: "#00B8A9", usage: "Accents, highlights, CTAs" },
    { name: "Light Gray", hex: "#F5F5F5", usage: "Backgrounds, sections" },
    { name: "Dark Gray", hex: "#333333", usage: "Body text, secondary info" },
    { name: "White", hex: "#FFFFFF", usage: "Cards, containers, contrast" }
  ];

  const layoutPrinciples = [
    {
      title: "F-Pattern Layout",
      description: "For product listing pages",
      usage: "Users scan horizontally at top, then vertically down left side"
    },
    {
      title: "Z-Pattern Layout",
      description: "For landing pages and heroes",
      usage: "Eye movement: top-left → top-right → bottom-left → bottom-right"
    },
    {
      title: "Golden Ratio",
      description: "Section proportions",
      usage: "1.618:1 ratio for harmonious visual balance"
    },
    {
      title: "Negative Space",
      description: "Breathing room",
      usage: "Minimum 20% white space for clarity and focus"
    }
  ];

  return (
    <section id="design-principles" className="py-32 bg-white">
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
              Design Principles
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Visual Design Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to visual design ensuring consistency, accessibility,
              and aesthetic excellence across all touchpoints.
            </p>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
                >
                  <div className="w-12 h-12 bg-[#0096D6] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl mb-2">{principle.title}</h3>
                  <p className="text-gray-600 mb-6">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#0096D6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Color Palette */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Color Palette</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A carefully selected palette that balances brand identity with usability
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div
                    className="w-full h-32 rounded-xl shadow-lg mb-3 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="text-sm mb-1">{color.name}</div>
                  <div className="text-xs text-gray-500 mb-2">{color.hex}</div>
                  <div className="text-xs text-gray-600">{color.usage}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Typography Example */}
          <div className="mb-24 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl border border-gray-200">
            <h3 className="text-3xl mb-8 text-center">Typography Hierarchy</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-[#0096D6] pl-6">
                <div className="text-xs text-gray-500 mb-2">H1 - 48px / HP Simplified Medium</div>
                <h1 className="text-5xl">Discover Innovation</h1>
              </div>
              <div className="border-l-4 border-[#00B8A9] pl-6">
                <div className="text-xs text-gray-500 mb-2">H2 - 36px / HP Simplified Medium</div>
                <h2 className="text-4xl">Premium Workstations</h2>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="text-xs text-gray-500 mb-2">H3 - 24px / HP Simplified Medium</div>
                <h3 className="text-2xl">Featured Products</h3>
              </div>
              <div className="border-l-4 border-gray-400 pl-6">
                <div className="text-xs text-gray-500 mb-2">Body - 16px / Inter Regular</div>
                <p className="text-base text-gray-700">
                  Body text maintains readability with 1.5 line-height and optimal character
                  length of 60-75 characters per line for comfortable reading.
                </p>
              </div>
            </div>
          </div>

          {/* Layout Principles */}
          <div className="mb-24">
            <h3 className="text-3xl mb-4 text-center">Composition Techniques</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Proven layout patterns that guide user attention and improve comprehension
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {layoutPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="mb-2">{principle.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{principle.description}</p>
                  <p className="text-xs text-gray-500">{principle.usage}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Responsive Breakpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#0096D6] to-[#00B8A9] rounded-3xl p-12 text-white"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl mb-4">Responsive Design System</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Mobile-first approach with optimized layouts for every screen size
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Smartphone size={32} className="mx-auto mb-3" />
                <div className="text-2xl mb-1">320px+</div>
                <div className="text-sm text-white/80 mb-2">Mobile</div>
                <div className="text-xs text-white/60">Single column, touch-optimized</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Smartphone size={32} className="mx-auto mb-3" />
                <div className="text-2xl mb-1">768px+</div>
                <div className="text-sm text-white/80 mb-2">Tablet</div>
                <div className="text-xs text-white/60">2-column grid, hybrid navigation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Monitor size={32} className="mx-auto mb-3" />
                <div className="text-2xl mb-1">1024px+</div>
                <div className="text-sm text-white/80 mb-2">Desktop</div>
                <div className="text-xs text-white/60">Full grid, expanded features</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Monitor size={32} className="mx-auto mb-3" />
                <div className="text-2xl mb-1">1440px+</div>
                <div className="text-sm text-white/80 mb-2">Large</div>
                <div className="text-xs text-white/60">Max-width 1440px, centered</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
