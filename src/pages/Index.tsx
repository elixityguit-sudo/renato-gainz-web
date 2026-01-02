import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import MethodSection from "@/components/MethodSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Renato Sousa | Personal Trainer - Consultoria Online e Presencial</title>
        <meta 
          name="description" 
          content="Transforme seu corpo com o Personal Trainer Renato Sousa. Consultoria fitness online e presencial com treinos personalizados para resultados reais." 
        />
        <meta name="keywords" content="personal trainer, consultoria fitness, treino personalizado, emagrecimento, definição muscular" />
        <link rel="canonical" href="https://renatosousa.com" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <MethodSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
