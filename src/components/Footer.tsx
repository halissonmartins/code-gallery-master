import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-brand-secondary" />
              <h3 className="text-2xl font-bold">Halisson Martins</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Desenvolvedor Full-Stack especializado em arquiteturas modernas, 
              microsserviços e soluções cloud-native.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-brand-secondary">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="https://github.com/halissonmartins" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-brand-secondary transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://github.com/halissonmartins?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-brand-secondary transition-colors">
                  Todos os Repositórios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-brand-secondary">Conecte-se</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-brand-secondary hover:border-brand-secondary"
              >
                <a href="https://github.com/halissonmartins" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-brand-secondary hover:border-brand-secondary"
              >
                <a href="https://linkedin.com/in/halissonmartins" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-brand-secondary hover:border-brand-secondary"
              >
                <a href="mailto:contact@halissonmartins.dev">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Halisson Martins. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Feito com ❤️ e tecnologias modernas
          </p>
        </div>
      </div>
    </footer>
  );
};