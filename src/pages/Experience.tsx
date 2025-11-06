import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const professionalExp = [
    {
      title: "Coordenador Administrativo",
      company: "R.P.L Engenharia e Serviços LTDA",
      period: "2024 - Presente",
      description:
        "Atuação de suporte como elo entre a equipe operacional e os demais profissionais.",
      achievements: [
        "Elaborar e acompanhar planos de trabalho, cronogramas e metas administrativas",
        "Promover treinamentos e integração de novos colaboradores",
        "Organizar e manter atualizados arquivos, contratos e documentos internos;",
      ],
    },
  ];

  const academicExp = [
    {
      title: "Técnologo em Sistema para Internet",
      institution: "Universidade Católica de Pernambuco (UNICAP)",
      period: "2024 - Presente",
      description:
        "Formação sólida em fundamentos de computação, algoritmos, estruturas de dados e desenvolvimento de software.",
      highlights: [
        "Desenvolvivemehnto de projetos sobre Machine Learning aplicado a sistemas web",
        "Participação em hackathons e projetos de pesquisa",
      ],
    },
    {
      title: "Curso Técnico em Análise e Desenvolvimento de Sistemas",
      institution: "Escola Técnica Estadual Porto Digital (ETEPD)",
      period: "2021 - 2023",
      description:
        "Especialização focada em tecnologias web modernas e desenvolvimento full-stack.",
      highlights: [
        "React, Node.js, MySQL, Javascript, HTML, CSS",
        "Projetos práticos com metodologias ágeis",
      ],
    },
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

          {/* Experiência Profissional */}
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
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">
                        Principais Realizações:
                      </p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary">•</span>
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

          {/* Formação Acadêmica */}
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
                        <p className="text-primary font-medium">
                          {exp.institution}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Destaques:</p>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary">•</span>
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
