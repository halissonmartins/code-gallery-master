import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  delay?: number;
}

export const ProjectCard = ({ title, description, link, delay = 0 }: ProjectCardProps) => {
  return (
    <Card 
      className="hover-lift animate-slide-up gradient-card border-brand-secondary/20 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">
            {title}
          </CardTitle>
          <div className="flex items-center gap-1 text-brand-secondary">
            <Star className="w-4 h-4 fill-current" />
            <Github className="w-4 h-4" />
          </div>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gap-3">
          <Button 
            variant="project" 
            size="sm" 
            asChild
            className="flex-1"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View Project
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};