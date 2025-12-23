import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTA from './components/layout/MobileCTA';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import FeaturesSection from './components/sections/FeaturesSection';
import SafetySection from './components/sections/SafetySection';
import SpecsSection from './components/sections/SpecsSection';
import PricingSection from './components/sections/PricingSection';
import FlowSection from './components/sections/FlowSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import CTABanner from './components/sections/CTABanner';

function App() {
  return (
    <div className="min-h-screen">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        メインコンテンツへスキップ
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <CTABanner variant="minimal" />
        <SafetySection />
        <SpecsSection />
        <PricingSection />
        <CTABanner />
        <FlowSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
