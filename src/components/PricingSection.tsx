import { motion } from "framer-motion";
import { MessageCircle, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5585981311619?text=Olá! Quero saber mais sobre os planos!";

const plans = [
  {
    name: "Mensal",
    duration: "1 mês",
    price: "Consulte",
    popular: false,
    features: [
      "Treino 100% personalizado",
      "Acompanhamento semanal",
      "Suporte via WhatsApp",
      "Ajustes de treino",
    ],
  },
  {
    name: "Trimestral",
    duration: "3 meses",
    price: "Consulte",
    popular: true,
    features: [
      "Treino 100% personalizado",
      "Acompanhamento semanal",
      "Suporte via WhatsApp",
      "Ajustes de treino",
      "Avaliação física completa",
      "Orientação nutricional",
    ],
  },
  {
    name: "Semestral",
    duration: "6 meses",
    price: "Consulte",
    popular: false,
    features: [
      "Treino 100% personalizado",
      "Acompanhamento semanal",
      "Suporte via WhatsApp",
      "Ajustes de treino",
      "Avaliação física completa",
      "Orientação nutricional",
      "Periodização avançada",
    ],
  },
  {
    name: "Anual",
    duration: "12 meses",
    price: "Melhor custo-benefício",
    popular: false,
    features: [
      "Treino 100% personalizado",
      "Acompanhamento semanal",
      "Suporte via WhatsApp",
      "Ajustes de treino",
      "Avaliação física completa",
      "Orientação nutricional",
      "Periodização avançada",
      "Bônus exclusivos",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Planos e Ofertas</span>
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            ESCOLHA SEU <span className="text-gradient-gold">PLANO</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invista em você! Quanto maior o período, melhores condições e resultados mais consistentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary shadow-glow" 
                  : "bg-card/80 border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Star className="w-3 h-3" />
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.duration}</p>
                <div className="text-primary font-display text-lg font-bold">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  QUERO ESSE
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-8 text-sm"
        >
          * Valores e condições especiais disponíveis. Clique no plano desejado para saber mais!
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
