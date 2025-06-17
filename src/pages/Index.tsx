
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CreatorShowcase from "@/components/CreatorShowcase";
import FeatureComparison from "@/components/FeatureComparison";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CreatorShowcase />
      <FeatureComparison />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
