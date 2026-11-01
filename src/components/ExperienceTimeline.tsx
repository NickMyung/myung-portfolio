'use client';

import React, { useState } from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, GraduationCap, ChevronRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'data' | 'fullstack' | 'robotics'>('all');

  const experiences = [
    {
      category: 'data',
      role: 'Ingeniero de Datos',
      company: 'IDM Technology',
      client: 'Santander Consumer Bank',
      period: 'Agosto 2026 – Actualidad',
      summary:
        'Relevamiento y migración de procesos financieros de Gestión de Información (GI) hacia AWS Cloud bajo el nuevo modelo internacional de Santander.',
      points: [
        'Desarrollo de pipelines ETL distribuidos con Apache Spark en AWS EMR y orquestación con Step Functions.',
        'Gestión de equivalencias entre el Core Bancario To-Be vs As-Is, acelerando la homologación con sistemas satélites.',
        'Implementación del marco de gobierno de datos corporativo con DataHub, definiendo esquemas, dominios y subdominios.',
      ],
      stack: ['Python', 'Spark', 'Scala', 'AWS EMR', 'AWS Glue', 'DataHub', 'SQL Server', 'Oracle'],
    },
    {
      category: 'data',
      role: 'Ingeniero de Datos',
      company: 'SES',
      client: 'Santander Consumer Bank',
      period: 'Agosto 2025 – Julio 2026',
      summary:
        'Estandarización y optimización de flujos de transformación de datos para el Squad Finanzas Data.',
      points: [
        'Definición de estructura y estándares de desarrollo de subdominios de GI según lineamientos de la casa matriz en España.',
        'Optimización de queries de transformación, reduciendo tiempos de ejecución y simplificando el mantenimiento.',
        'Elaboración de diccionarios de datos y modelamiento dimensional para analítica financiera.',
      ],
      stack: ['Python', 'SQL Server', 'Scala', 'Spark', 'Athena', 'EMR', 'S3', 'DataHub'],
    },
    {
      category: 'data',
      role: 'Analista de Datos y BI',
      company: 'Virutex Ilko',
      period: 'Enero 2024 – Julio 2025',
      summary:
        'Automatización integral de flujos ETL, desarrollo de Data Warehouse y simuladores predictivos de KPIs de negocio.',
      points: [
        'Diseño y gestión de Data Warehouse para analítica comercial, de inventarios y logística.',
        'Creación de aplicación interactiva para simulación de KPIs empresariales y escenarios de negocio comerciales.',
        'Desarrollo de bots de automatización de procesos (RPA con Automation Anywhere) y scripts de Web Scraping con Selenium.',
      ],
      stack: ['Python', 'Pandas', 'SQL Server', 'PySpark', 'Power BI', 'Automation Anywhere', 'Selenium', 'Jenkins'],
    },
    {
      category: 'fullstack',
      role: 'Desarrollador Backend',
      company: 'Bioverse',
      period: '2024',
      summary:
        'Arquitectura serverless en AWS y APIs GraphQL para consumo desde frontend desarrollado en Next.js.',
      points: [
        'Diseño y modelado de bases de datos NoSQL con Amazon DynamoDB optimizadas para consultas GraphQL con AppSync.',
        'Desarrollo de flujos ETL serverless para monitorización y análisis de comportamiento de usuarios en la plataforma web.',
        'Endurecimiento de seguridad en contenido multimedia protegido mediante políticas IAM y AWS Cognito.',
      ],
      stack: ['Next.js', 'Node.js', 'GraphQL', 'DynamoDB', 'AWS AppSync', 'Lambda', 'Cognito', 'Athena', 'Step Functions'],
    },
    {
      category: 'fullstack',
      role: 'Desarrollador Web Full Stack - Líder de Equipo',
      company: 'VE7 Agronegocios S.A.C.',
      period: 'Enero 2023 – Enero 2024',
      summary:
        'Liderazgo de equipo bajo metodología Scrum, desarrollo web y móvil e integración de modelos de Machine Learning.',
      points: [
        'Desarrollo de aplicaciones móviles con React Native y React + TypeScript; despliegue en Google Play Store y AWS.',
        'Entrenamiento e integración de modelos predictivos (árboles de decisión) en APIs REST de alto rendimiento con Flask/Python.',
        'Optimización de tiempo de respuesta mediante arquitectura de microservicios y contenedorización con Docker.',
      ],
      stack: ['React', 'React Native', 'TypeScript', 'Flask Python', 'Scikit-Learn', 'AWS', 'GCP', 'Docker', 'Tailwind CSS'],
    },
    {
      category: 'data',
      role: 'Ingeniero de Datos',
      company: 'VE7 Agronegocios S.A.C.',
      period: 'Enero 2022 – Enero 2023',
      summary:
        'Construcción de canalizaciones de Big Data y migración de nube entre proveedores.',
      points: [
        'Migración exitosa de toda la infraestructura y estructuras ETL desde Google Cloud Platform (GCP) hacia AWS.',
        'Procesamiento distribuido con Apache Spark, Hadoop, Airflow y Google BigQuery.',
        'Modelos analíticos de segmentación y clustering para optimización de campañas de marketing.',
      ],
      stack: ['Apache Spark', 'PySpark', 'Apache Airflow', 'Hadoop', 'GCP BigQuery', 'AWS Cloud', 'Scala'],
    },
    {
      category: 'robotics',
      role: 'Practicante de Ingeniería y Desarrollo R&D',
      company: 'Medabots S.A.C.',
      period: 'Abril 2021 – Septiembre 2021',
      summary:
        'Investigación y desarrollo de dispositivos robóticos para rehabilitación y cálculos cinemáticos.',
      points: [
        'Creación de software para asistencia de diseño de manipuladores robóticos y cálculos de cinemática directa/inversa.',
        'Análisis de espacios de trabajo tridimensionales y redacción de 2 artículos científicos para congresos internacionales.',
      ],
      stack: ['Python', 'Cinemática Robótica', 'Simulación Numérica', 'Redacción Científica'],
    },
  ];

  const filtered = experiences.filter(
    (exp) => activeFilter === 'all' || exp.category === activeFilter
  );

  return (
    <section id="experience" className="py-20 bg-[#0b1021]/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Trayectoria Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Experiencia Laboral & Formación
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Progresión continua en el liderazgo de datos, desarrollo de software cloud y sistemas robóticos aplicados.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 font-mono text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Todos los Roles
            </button>
            <button
              onClick={() => setActiveFilter('data')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeFilter === 'data'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Ingeniería de Datos & BI
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeFilter === 'fullstack'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Full Stack & Cloud
            </button>
            <button
              onClick={() => setActiveFilter('robotics')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeFilter === 'robotics'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Robótica & R&D
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filtered.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-all shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{exp.role}</span>
                    {exp.client && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-800">
                        Cliente: {exp.client}
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm mb-4 font-light leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-2 mb-5">
                {exp.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                {exp.stack.map((stk, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {stk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Academic Honors Sub-section */}
        <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <span>Formación Académica & Proyectos Universitarios</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                2017 – 2022
              </span>
              <h4 className="text-base font-bold text-white font-sans mb-1">
                Bachiller en Ingeniería Mecatrónica
              </h4>
              <p className="text-indigo-300 mb-3">Universidad Nacional de Ingeniería (UNI)</p>
              <ul className="space-y-1.5 text-slate-300 text-[11px] font-sans">
                <li>• Miembro de Grupo Tharsis - UNI (NASA Human Exploration Rover Challenge).</li>
                <li>• Director de Investigación IEEE EMBS UNI (Engineering in Medicine and Biology).</li>
                <li>• Proyecto FIM UNI: Diseño y simulación de prótesis de mano (Asesor: Ing. Oliden Martinez).</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider block mb-1">
                2024
              </span>
              <h4 className="text-base font-bold text-white font-sans mb-1">
                Especialización en Big Data
              </h4>
              <p className="text-indigo-300 mb-3">UTEC (Universidad de Ingeniería y Tecnología)</p>
              <ul className="space-y-1.5 text-slate-300 text-[11px] font-sans">
                <li>• Arquitecturas analíticas modernas, procesamiento distribuido y Data Lakes.</li>
                <li>• Gobernanza, calidad y procesamiento de datos a gran escala.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
