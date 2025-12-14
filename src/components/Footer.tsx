import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Globe, Github, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const contactLinks = [
    { icon: Mail, label: "Email", value: "designer@example.com", href: "mailto:designer@example.com" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/uxdesigner", href: "https://linkedin.com" },
    { icon: Globe, label: "Portfolio", value: "www.portfolio.com", href: "#" },
    { icon: Github, label: "GitHub", value: "/designer", href: "https://github.com" }
  ];

  const projectLinks = [
    { label: "View on Behance", href: "#" },
    { label: "Live Website", href: "https://www.hp.com/in-en/shop/" },
    { label: "Case Study PDF", href: "#" }
  ];

  const otherProjects = [
    { name: "Flipkart Checkout Redesign", type: "E-commerce" },
    { name: "Zomato Restaurant Discovery", type: "Food Tech" },
    { name: "Paytm Financial Dashboard", type: "Fintech" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#0096D6] rounded-lg flex items-center justify-center">
                  <span>HP</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Case Study</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                A comprehensive UI/UX redesign of HP India's e-commerce platform,
                delivering measurable business impact and exceptional user experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Heart size={16} className="text-red-500" />
                <span>Designed with passion</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6">Get in Touch</h4>
              <div className="space-y-3">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-[#0096D6] transition-colors group"
                    >
                      <Icon size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.value}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Project Links */}
            <div>
              <h4 className="mb-6">Project Links</h4>
              <div className="space-y-3">
                {projectLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.05 }}
                    className="block text-sm text-gray-400 hover:text-[#0096D6] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div>
              <h4 className="mb-6">Other Projects</h4>
              <div className="space-y-3">
                {otherProjects.map((project, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.05 }}
                    className="block group"
                  >
                    <div className="text-sm text-white group-hover:text-[#0096D6] transition-colors">
                      {project.name}
                    </div>
                    <div className="text-xs text-gray-500">{project.type}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">
              © {currentYear} UI/UX Case Study. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-[#0096D6] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#0096D6] transition-colors">
                Terms of Use
              </a>
            </div>
          </div>

          {/* Attribution */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              This case study demonstrates UI/UX design expertise and methodology.
              <br />
              HP and HP logo are trademarks of HP Inc. used for educational purposes.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0096D6] opacity-5 rounded-full blur-3xl"></div>
    </footer>
  );
}
