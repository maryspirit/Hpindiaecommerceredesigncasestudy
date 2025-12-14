import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Users, 
  Search, 
  Target, 
  TrendingUp, 
  ShoppingCart, 
  Star,
  CheckCircle2,
  Lightbulb,
  Layers,
  Smartphone,
  Monitor,
  Zap,
  Eye,
  Filter,
  CreditCard,
  MessageCircle,
  Shield,
  BarChart3,
  MousePointerClick,
  Clock,
  Award,
  ChevronRight
} from 'lucide-react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { ProjectOverview } from './components/ProjectOverview';
import { ResearchPhase } from './components/ResearchPhase';
import { DesignPrinciples } from './components/DesignPrinciples';
import { UXPrinciples } from './components/UXPrinciples';
import { UserFeatures } from './components/UserFeatures';
import { DesignShowcase } from './components/DesignShowcase';
import { UsabilityTesting } from './components/UsabilityTesting';
import { DesignSystem } from './components/DesignSystem';
import { ResultsImpact } from './components/ResultsImpact';
import { Learnings } from './components/Learnings';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'hero';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#0096D6] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <Navigation activeSection={activeSection} />
      
      <Hero />
      
      <ProjectOverview />
      
      <ResearchPhase />
      
      <DesignPrinciples />
      
      <UXPrinciples />
      
      <UserFeatures />
      
      <DesignShowcase />
      
      <UsabilityTesting />
      
      <DesignSystem />
      
      <ResultsImpact />
      
      <Learnings />
      
      <Footer />
    </div>
  );
}
