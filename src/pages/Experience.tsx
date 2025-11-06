import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const professionalExp = [
    {
      title: "Desenvolvedor Full Stack Senior",
      company: "Tech Solutions Inc.",
      period: "2022 - Presente",
      description: "Desenvolvimento de aplicações web escaláveis utilizando React, Node.js e PostgreSQL. Liderança técnica de equipe de 5 desenvolvedores.",
      achievements: [
        "Implementou arquitetura de microserviços que melhorou a performance em 40%",
        "Mentoria de desenvolvedores júnior e estagiários",
        "Criação de design system e biblioteca de componentes reutilizáveis"
      ]
    },
    {
      title: "Desenvolvedor Front-end",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description: "Desenvolvimento de interfaces modernas e responsivas para diversos clientes, com foco em performance e experiência do usuário.",
      achievements: [
        "Desenvolveu +15 projetos web com React e Vue.js",
        "Implementou testes automatizados com Jest e Testing Library",
        "Reduziu tempo de carregamento em média 50% com otimizações"
      ]
    },
    {
      title: "Desenvolvedor Júnior",
      company: "StartupTech",
      period: "2019 - 2020",
      description: "Início da carreira desenvolvendo features para aplicação SaaS B2B, trabalhando com tecnologias web modernas.",
      achievements: [
        "Contribuiu para desenvolvimento de +50 features",
        "Participou de code reviews e pair programming",
        "Aprendizado acelerado de tecnologias e boas práticas"
      ]
    }
  ];

  const academicExp = [
    {
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal",
      period: "2015 - 2019",
      description: "Formação sólida em fundamentos de computação, algoritmos, estruturas de dados e desenvolvimento de software.",
      highlights: [
        "TCC sobre Machine Learning aplicado a sistemas web",
        "Monitor de Programação Web por 2 anos",
        "Participação em hackathons e projetos de pesquisa"
      ]
    },
    {
      title: "Curso de Especialização em Web Development",
      institution: "Tech Academy Online",
      period: "2020",
      description: "Especialização focada em tecnologias web modernas e desenvolvimento full-stack.",
      highlights: [
        "React, Node.js, MongoDB, DevOps",
        "Projetos práticos com metodologias ágeis",
        "Certificação reconhecida internacionalmente"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="section-container">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiência</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12"></div>
          </div>

          {/* Professional Experience */}
          <section className="mb-16 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Experiência Profissional</h2>
            </div>
            <div className="space-y-6">
              {professionalExp.map((exp, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Principais Realizações:</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Academic Experience */}
          <section className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Formação Acadêmica</h2>
            </div>
            <div className="space-y-6">
              {academicExp.map((exp, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Destaques:</p>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
