import { motion } from "framer-motion";
import { ClipboardCheck, Dumbbell, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Avaliação Completa",
    description: "Análise física detalhada, histórico de saúde, objetivos e rotina. Entendo tudo sobre você antes de começar."
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Treino Personalizado",
    description: "Protocolo 100% individualizado criado exclusivamente para suas necessidades e metas específicas."
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Evolução Constante",
    description: "Acompanhamento contínuo com ajustes periódicos para garantir resultados progressivos e duradouros."
  }
];

const MethodSection = () => {
  return (
    <section id="metodologia" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            O Método é Único
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            COMO <span className="text-gradient-emerald">FUNCIONA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Um processo simples e eficaz que entrega resultados reais.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group">
                {/* Number Badge */}
                <div className="absolute -top-4 left-8">
                  <span className="font-display text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
