import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    { category: "Backend", items: ["Node.js", "MongoDB", "Java"] },
    { category: "DevOps", items: ["Git", "Docker"] },
    { category: "Ferramentas", items: ["VS Code", "Figma", "Postman", "Jest"] },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="section-container">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-4">Quem Sou</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desenvolvedor full-stack apaixonado por criar soluções
                inovadoras e eficientes. Com experiência em desenvolvimento web
                moderno, busco sempre aprender novas tecnologias e aplicar as
                melhores práticas de desenvolvimento.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Focado em criar aplicações escaláveis, com código limpo e
                experiência do usuário excepcional. Sempre buscando novos
                desafios e oportunidades de crescimento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Este Portfólio</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este portfólio foi desenvolvido utilizando tecnologias modernas
                de desenvolvimento web:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>React</strong> - Biblioteca JavaScript para
                    construção de interfaces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>TypeScript</strong> - Superset JavaScript com
                    tipagem estática
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Tailwind CSS</strong> - Framework CSS utility-first
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Vite</strong> - Build tool rápido e moderno
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>React Router</strong> - Navegação entre páginas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Shadcn/ui</strong> - Componentes UI reutilizáveis
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">
              Tecnologias & Ferramentas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4 text-primary">
                      {tech.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <Badge key={i} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
