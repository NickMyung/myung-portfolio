import React from 'react';
import { Layers, Database, Bot, HeartPulse, BookOpen, ShieldCheck } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      color: 'cyan',
      title: 'Full Stack & Mobile Architecture',
      subtitle: 'Frontend reactivo, APIs distribuidas & Cloud',
      description:
        'Liderazgo en diseño de interfaces y aplicaciones móviles con React Native, React, TypeScript y Tailwind. Arquitectura backend con GraphQL, Flask, Node.js y despliegues en contenedores Docker sobre AWS y GCP.',
      skills: ['React / React Native', 'TypeScript', 'GraphQL & REST', 'Docker & CI/CD', 'AWS / GCP'],
    },
    {
      icon: Database,
      color: 'indigo',
      title: 'Ingeniería de Datos & Big Data',
      subtitle: 'Pipelines distribuidos, Lakehouses & Gobierno',
      description:
        'Construcción de arquitecturas de datos de misión crítica para el sector financiero e industrial. Procesamiento distribuido con Apache Spark (Scala/Python), orquestación con Step Functions/Airflow y gobierno con DataHub.',
      skills: ['Apache Spark & Scala', 'AWS EMR / Glue / Athena', 'DataHub Governance', 'SQL Server & Oracle', 'Data Warehousing'],
    },
    {
      icon: Bot,
      color: 'emerald',
      title: 'Robótica & Sistemas Embebidos',
      subtitle: 'Cinemática, control dinámico & espacio de trabajo',
      description:
        'Modelado matemático de manipuladores y cadenas cinemáticas abiertas/cerradas con convención Denavit-Hartenberg. Simulación de espacios de trabajo, telemetría y experiencia en el NASA Human Rover Challenge con Grupo Tharsis.',
      skills: ['Denavit-Hartenberg', 'Cinemática Directa/Inversa', 'ESP32 / PIC / C++', 'Simulación Numérica', 'NASA Rover UNI'],
    },
    {
      icon: HeartPulse,
      color: 'pink',
      title: 'Investigación en Bioingeniería',
      subtitle: 'Biomecatrónica, exoesqueletos & rehabilitación',
      description:
        'Diseño de dispositivos de asistencia para rehabilitación de miembros inferiores y superiores. Dirección de investigación en IEEE EMBS UNI y desarrollo de prótesis de mano biónica para recuperación funcional.',
      skills: ['Exoesqueletos de Cadera', 'Prótesis Biónicas', 'IEEE EMBS UNI', 'Bioseñales & Biomecánica', 'Medabots R&D'],
    },
    {
      icon: BookOpen,
      color: 'amber',
      title: 'Publicaciones Científicas Internacionales',
      subtitle: 'Investigación indexada y revisada por pares',
      description:
        'Autor de artículos científicos en conferencias internacionales indexadas sobre cinemática de exoesqueletos 3DoF y revisiones esquemáticas de tecnologías mecatrónicas para rehabilitación articular.',
      skills: ['CMAAE 2021', 'RCAE 2021', 'Denavit-Hartenberg', 'Workspace Simulation', 'Redacción Científica'],
    },
    {
      icon: ShieldCheck,
      color: 'purple',
      title: 'Miembro de Comité Técnico (TPC Reviewer)',
      subtitle: 'Evaluación y servicio a la comunidad científica',
      description:
        'Designado como Miembro del Comité Técnico de Revisión (Technical Program Committee / Peer Reviewer) en la prestigiosa conferencia ICCRE en Japón de manera continua para las ediciones 2024, 2025 y 2026.',
      skills: ['ICCRE Japón (2024-2026)', 'Peer-Review Rigor', 'Robotics & Automation', 'Control Systems', 'Criterio Académico'],
    },
  ];

  return (
    <section id="pillars" className="py-20 bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Competencias de Alto Rendimiento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Los 6 Pilares de Mi Perfil Técnico
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Una sinergia multidisciplinaria diseñada para resolver problemas complejos donde el hardware, los datos masivos y el software de alto nivel interactúan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 mb-3 font-medium">
                    {pillar.subtitle}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
