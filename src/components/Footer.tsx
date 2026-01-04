import { Instagram, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-4">
              RENATO SOUSA
            </h3>
            <p className="text-muted-foreground mb-6">
              Personal Trainer especializado em transformação física e qualidade de vida. Consultoria online e presencial.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/renatosnpersonal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://l1nk.dev/ue3hZ"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-[hsl(142,70%,45%)] hover:text-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-muted-foreground hover:text-primary transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#planos" className="text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#resultados" className="text-muted-foreground hover:text-primary transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a 
                  href="https://l1nk.dev/ue3hZ"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a 
                  href="https://l1nk.dev/ue3hZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: (85) 98131-1619
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Fortaleza - CE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Renato Sousa Personal Trainer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
