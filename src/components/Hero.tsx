import { Button } from "@/components/ui/button";
import { ChevronDown, Code2, Rocket, Star } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-float">
          <Code2 className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Rocket className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-10 h-10 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Halisson
            <span className="block bg-gradient-to-r from-brand-secondary to-brand-light bg-clip-text text-transparent">
              Martins
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor Full-Stack especializado em <strong>microsserviços</strong>, 
            <strong> cloud computing</strong> e <strong>arquiteturas modernas</strong>
          </p>
          
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Explore projetos inovadores que combinam tecnologias de ponta com soluções práticas para o mundo real
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-6"
            >
              <Rocket className="w-5 h-5" />
              Ver Projetos Exclusivos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-dark"
            >
              <a href="https://github.com/halissonmartins" target="_blank" rel="noopener noreferrer">
                <Code2 className="w-5 h-5" />
                GitHub Profile
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">4+ Projetos</h3>
              <p className="text-white/80">Open Source no GitHub</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">Microsserviços</h3>
              <p className="text-white/80">Arquiteturas Escaláveis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">Cloud Ready</h3>
              <p className="text-white/80">Docker & Kubernetes</p>
            </div>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 mx-auto text-white/60 cursor-pointer hover:text-white transition-colors" 
            onClick={scrollToProjects}
          />
        </div>
      </div>
    </section>
  );
};