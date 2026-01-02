import { motion } from "framer-motion";
import { 
  Flame, 
  Target, 
  Heart, 
  Zap, 
  Clock, 
  Users, 
  Shield, 
  Moon 
} from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Queima de Gordura",
    description: "Emagrecimento definitivo sem efeito sanfona."
  },
  {
    icon: Target,
    title: "Definição Muscular",
    description: "Corpo firme, tonificado e estético."
  },
  {
    icon: Heart,
    title: "Autoestima Alta",
    description: "Sinta-se poderoso e confiante no espelho."
  },
  {
    icon: Zap,
    title: "Energia Total",
    description: "Mais disposição para o trabalho e rotina."
  },
  {
    icon: Clock,
    title: "Treinos Práticos",
    description: "Rápidos e adaptáveis ao seu dia a dia."
  },
  {
    icon: Users,
    title: "Acompanhamento",
    description: "Você não estará sozinho nessa jornada."
  },
  {
    icon: Shield,
    title: "Zero Dores",
    description: "Fortalecimento que elimina desconfortos."
  },
  {
    icon: Moon,
    title: "Sono Reparador",
    description: "Durma melhor e acorde renovado."
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Transformação Completa
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            O QUE VOCÊ VAI <span className="text-gradient-gold">CONQUISTAR?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Resultados reais com um método comprovado que já transformou centenas de vidas.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gold/10 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              E o melhor: <span className="text-primary">Sem Treinos Intermináveis!</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Sem precisar morar na academia. Os treinos são feitos <strong className="text-foreground">sob medida para você</strong>, considerando sua rotina real e o que traz resultados definitivos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
