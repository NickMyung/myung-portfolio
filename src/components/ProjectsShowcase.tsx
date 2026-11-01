import React from 'react';
import { ExternalLink, GitBranch, Layers, CheckCircle2, Cpu, Database, Smartphone, Orbit } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const projects = [
    {
      badge: 'Bioingeniería & Robótica',
      badgeColor: 'cyan',
      title: 'Exoesqueleto Robótico de Cadera 3DoF & Análisis de Espacio de Trabajo',
      role: 'Investigador & Modelador Cinemático',
      organization: 'Medabots & Publicación CMAAE / RCAE',
      description:
        'Modelado matemático y simulación cinemática directa e inversa de un exoesqueleto de cadera de 3 Grados de Libertad enfocado en asistencia de la marcha humana y rehabilitación de extremidades inferiores.',
      highlights: [
        'Formulación matemática con parámetros Denavit-Hartenberg (D-H) y orientación mediante ángulos de Euler.',
        'Simulación tridimensional del espacio de trabajo alcanzable en Wolfram y scripts computacionales en Jupyter/Python.',
        'Publicación y presentación de 2 artículos científicos indexados en conferencias internacionales.',
      ],
      techStack: ['Python', 'Denavit-Hartenberg', 'Wolfram', 'Euler Angles', 'Cinemática Robótica', 'Bioingeniería'],
      linkText: 'Ver Publicación en CRIS UTEC',
      linkUrl: 'https://cris.utec.edu.pe/es/publications/kinematics-analysis-of-a-3dof-hip-exoskeleton-and-workspace-simul/',
    },
    {
      badge: 'Ingeniería de Datos Corporativa',
      badgeColor: 'indigo',
      title: 'Modern Data Platform & Migración Cloud Core Bancario',
      role: 'Ingeniero de Datos (Squad Finanzas Data)',
      organization: 'Santander Consumer Bank (vía IDM / SES)',
      description:
        'Relevamiento, diseño y construcción de arquitecturas de datos de misión crítica para la migración del Core Bancario tradicional hacia una infraestructura moderna en AWS Cloud.',
      highlights: [
        'Desarrollo de pipelines ETL distribuidos con Apache Spark (Scala/Python) para procesamiento de grandes volúmenes.',
        'Implementación del catálogo y gobernanza de datos corporativo con DataHub, definiendo dominios y subdominios.',
        'Gestión de equivalencias entre Core Bancario To-Be vs As-Is, acelerando los tiempos de entrega del Squad.',
      ],
      techStack: ['Apache Spark', 'Scala', 'Python', 'AWS EMR', 'AWS Glue', 'DataHub', 'SQL Server', 'Oracle'],
      linkText: 'Arquitectura Cloud Santander',
      linkUrl: '#experience',
    },
    {
      badge: 'Full Stack & Machine Learning',
      badgeColor: 'emerald',
      title: 'Plataforma Mobile & Web con Recomendación Predictiva en Tiempo Real',
      role: 'Líder de Equipo de Desarrollo Full Stack',
      organization: 'VE7 Agronegocios & Bioverse',
      description:
        'Liderazgo en la creación de aplicaciones multiplataforma móviles y web con integración directa de microservicios y modelos de Machine Learning entrenados para predicción de categorías.',
      highlights: [
        'Desarrollo de la app móvil en React Native / React + TypeScript y publicación exitosa en Google Play Store.',
        'Integración de modelo predictivo (árbol de decisión) expuesto vía API REST en Flask y microservicios Docker.',
        'Arquitectura Backend Serverless en AWS con GraphQL (AppSync), DynamoDB y autenticación Cognito.',
      ],
      techStack: ['React Native', 'React', 'TypeScript', 'GraphQL', 'Flask Python', 'Scikit-Learn', 'AWS AppSync', 'Docker'],
      linkText: 'Ver Detalle en Experiencia',
      linkUrl: '#experience',
    },
    {
      badge: 'Sistemas Ciberfísicos & Espacio',
      badgeColor: 'purple',
      title: 'NASA Human Exploration Rover & Prótesis Biónica de Mano',
      role: 'Miembro de Equipo / Investigador',
      organization: 'Grupo Tharsis UNI & IEEE EMBS UNI',
      description:
        'Diseño y manufactura de sistemas mecánicos y telemetría para el vehículo de exploración espacial de la NASA, complementado con el diseño y simulación de una prótesis de mano en la UNI.',
      highlights: [
        'Participación en el equipo Tharsis de la UNI para la competencia mundial NASA Human Exploration Rover Challenge.',
        'Dirección del área de investigación en el capítulo estudiantil IEEE EMBS UNI (Engineering in Medicine and Biology).',
        'Diseño y simulación de prototipo de prótesis de mano biónica con evaluación cinemática en la Feria de Proyectos FIM.',
      ],
      techStack: ['NASA Rover Challenge', 'IEEE EMBS', 'SolidWorks', 'Cinemática', 'Prótesis Biónica', 'ESP32'],
      linkText: 'Ver Registro FIM UNI',
      linkUrl: '#experience',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0b1021]/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Casos de Estudio Seleccionados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Proyectos Insignia de Ingeniería & R&D
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ejemplos concretos de impacto técnico cuantificado, desde la validación en laboratorio y papers internacionales hasta sistemas empresariales con millones de transacciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{proj.organization}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{proj.title}</h3>
                <p className="text-xs font-mono text-indigo-400 mb-4">{proj.role}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">{proj.description}</p>

                <div className="space-y-2 mb-6">
                  {proj.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800 mb-6">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.linkUrl}
                  target={proj.linkUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  <span>{proj.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
