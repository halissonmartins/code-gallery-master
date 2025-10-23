import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "IADoc",
    description: "Projeto de microsserviços com upload de documentos, processamento de perguntas com RAG dos documentos e uso de Kafka, Debezium, CDC, Spring Batch, Spring Boot, Minio, Spring AI, Ollama e Deepseek-r1 para respostas precisas.",
    link: "https://github.com/halissonmartins/IADoc"
  },
  {
    title: "React Tutorial APP",
    description: "Crie e implante um aplicativo ReactJS no AWS EC2 com Docker, NGINX e automatize com GitHub Actions.",
    link: "https://github.com/halissonmartins/react-tutorial-app"
  },
  {
    title: "Container DB2 com Docker",
    description: "Exemplo do Docker Compose para executar o IBM DB2 em contêiner que cria banco de dados, esquema e tabela na inicialização usando o Flyway",
    link: "https://github.com/halissonmartins/container-db2-with-docker-create-database-table"
  },
  {
    title: "Ticketing Microsserviços",
    description: "Crie, implante e dimensione um aplicativo de comércio eletrônico usando microsserviços criados com Node, React, Docker e Kubernetes",
    link: "https://github.com/halissonmartins/ticketing"
  },
  {
    title: "Spring, Testcontainers, RabbitMQ, Kafka and Cucumber",
    description: "Este projeto é um exemplo mínimo de teste de integração que demonstra como combinar: JDK 25, Spring Boot, Spring JPA, Oracle, Kafka, RabbitMQ, Testcontainers, Cucumber e JUnit 5.",
    link: "https://github.com/halissonmartins/spring-jpa-testcontainers-rabbitmq-kafka-oracle-cucumber"
  },
  {
    title: "CDC com Debezium, TestContainers, Cumbuber, Maven Profile",
    description: "Demonstra como implementar Change Data Capture (CDC) utilizando Apache Kafka e Debezium. Utiliza Testcontainers para ambientes de teste de integração confiáveis e isolados, Cucumber para testes baseados em BDD, Spring Boot e Maven Profiles para um gerenciamento de build flexível.",
    link: "https://github.com/halissonmartins/cdc-with-kafka-debezium-testcontainers-cumbuber-spring-profile"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projetos em <span className="text-brand-primary">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada projeto representa uma jornada de inovação, combinando as mais modernas 
            tecnologias para resolver problemas reais do desenvolvimento de software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 border border-brand-secondary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Quer ver mais projetos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore meu perfil completo no GitHub e descubra outras soluções inovadoras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                asChild
                className="text-lg px-8"
              >
                <a href="https://github.com/halissonmartins" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  Ver Todos os Projetos
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="text-lg px-8"
              >
                <a href="https://github.com/halissonmartins?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Repositórios
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
