# Propuesta: Data Engineering & Business Automation

Fecha de revisión: 1 de noviembre de 2026.
Estado: enfoque aplicado en v3; casos basados en el CV y confirmaciones del propietario.
Rama consultada: `myung-portafolio-v3`.

Preferencia editorial posterior del propietario: presentar los casos públicos con
títulos y palabras clave sobre los desarrollos, sin mencionar empresas. Los
nombres de las empresas se conservan en la trayectoria laboral y en este registro
interno de fuentes; las referencias históricas siguientes explican la procedencia.

## Posicionamiento recomendado

Conservar Mechatronics Engineer como profesión principal y mantener tres áreas
equivalentes: Data & Automation, Full-Stack y Robotics R&D.

- Nombre corto del área: **Data & Automation**.
- Título completo: **Data Engineering & Business Automation**.
- Frase de apertura: **From operational data to better business decisions.**
- Descripción propuesta: *I build and modernize data platforms, automate business
  workflows, and turn operational information into tools for finance, commercial,
  and operations teams.*

Big Data, cloud, BI y RPA siguen presentes como capacidades. La nueva temática
explica qué conecta las experiencias: integrar información, hacer los procesos
repetibles y facilitar decisiones de negocio. No implica un cambio de profesión
ni un cargo de dirección financiera.

## Referencias consultadas

Las fuentes siguientes son webs de sus autores o de sus prácticas profesionales.
Se revisó cómo presentan el trabajo; sus credenciales y resultados no se auditaron
de forma independiente. Las observaciones editoriales son interpretación propia.

| Referencia | Contenido observado | Aplicación propuesta |
| --- | --- | --- |
| [Ben Rogojan / Seattle Data Guy](https://www.theseattledataguy.com/data-engineering-and-automation/) | Conecta extracción desde sistemas operativos, pipelines, herramientas internas y dashboards con trabajo manual y preguntas de negocio. | Presentar el flujo completo y sus usuarios antes del stack. |
| [John Matthew Fonacier](https://jmfonacier.dev/) | Presenta ingeniería de datos y automatización; describe trabajo en P&G sobre Retail Executions y Supply Chain, integración, calidad y catálogo. | Dar visibilidad a dominios de consumo masivo y a automatizaciones concretas. |
| [Levan — Data Engineer & Architect](https://levanalibegashvili.com/) | Separa industrias, capacidades, casos y trayectoria; presenta un caso retail con problema, enfoque y resultado, y experiencia en un banco central. | Mostrar sector y dominio funcional como ejes distintos; conectar arquitectura y consumo analítico. |
| [Suranga Nanayakkara](https://suranga.se/work) | Agrupa encargos de retail, fabricación y fintech con una narrativa común; cada uno incluye dominio, rol, intermediario y explicación técnica/operativa. | Unificar la narrativa sin fusionar empleadores, clientes ni aportes de equipo. |
| [Simon Späti](https://www.ssp.sh/blog/business-intelligence-meets-data-engineering/) | Explica BI mediante visión de negocio, consistencia, automatización y autonomía de usuarios, enlazándolo con ingeniería de datos. | Explicar qué puede hacer el área usuaria gracias a la plataforma. El artículo de 2020 se usa como referencia editorial, no como recomendación actual de arquitectura. |

## Tres casos, tres aportes complementarios

| Caso | Título propuesto | Contexto de negocio | Diferenciador |
| --- | --- | --- | --- |
| Santander, mediante IDM y SES | Financial Data Modernization & Governance | Finanzas y Gestión de Información en servicios financieros | Equivalencias entre cores, reglas y dominios de datos, ETL en AWS y apoyo al gobierno de metadatos. |
| Thikathani, marca/plataforma de VE7 Agronegocios | End-to-End Data Platform Migration: GCP to AWS | Indicadores gerenciales y operativos; consumidores y sector exacto por precisar | Recorrido desde extracción del ERP hasta orquestación, procesamiento y visualización; gobierno según descripción actual del propietario. |
| Virutex Ilko | Cross-Functional Analytics & Process Automation | Equipos financieros, comerciales y operativos | Data warehouse, automatización con código y RPA, BI y herramientas de simulación de KPI. |

El caso de Ilko puede ser un caso paraguas con dos o tres flujos representativos,
cada uno asociado a un área, una tarea y un entregable concreto. No atribuir un
resultado específico a todos los departamentos solo por haber trabajado con ellos.

El propietario confirmó que Thikathani es la marca o plataforma de VE7. Presentar
el caso como **Thikathani / VE7 Agronegocios**, conservar VE7 como empleador y
mantener el caso de plataforma de datos separado del caso existente de desarrollo
full stack de esa misma empresa.

La migración de una plataforma analítica que extrae datos de Odoo no debe
describirse como migración del propio ERP si eso no ocurrió.

## Distribución propuesta en la interfaz

1. **Portada:** conservar un caso destacado por cada una de las tres disciplinas.
   El acceso Data & Automation debe indicar que existen más casos en el área.
2. **Vista del área:** una introducción de negocio y los tres casos en la cuadrícula
   existente de categoría, evitando cargar tres casos dentro de una sola columna
   de la selección inicial.
3. **Cada tarjeta:** sector, área usuaria, problema, aporte personal y resultado
   observado; tecnologías como apoyo. Identificar el alcance del material disponible.
4. **Cada caso:** añadir contexto de negocio y decisiones habilitadas, antes de la
   arquitectura y sus detalles técnicos.
5. **Ilko:** agrupar áreas en Finanzas y Desempeño; Comercial y Clientes; Operaciones
   y Supply Chain. Asociar cada entregable a sus consumidores reales.

Los sectores (servicios financieros, consumo masivo, distribución/retail) y las
funciones (finanzas, marketing, producción, cobranzas) son dimensiones distintas.
Confirmar la clasificación sectorial de cada caso antes de publicarla.

Un diagrama transversal puede mostrar:

```text
Necesidad o decisión de negocio
          ↓
ERP y otros sistemas operativos → Extracción → Orquestación
          → Transformación y modelado → Productos de datos
          → Visualización, escenarios y acciones de negocio

Calidad, definiciones, trazabilidad y responsabilidades: capas transversales
(incluir solo los mecanismos realmente implementados en cada caso).
```

Para hacer concreto el valor, documentar la cadena:
**pregunta de negocio → regla o indicador → datos → automatización → decisión
habilitada → evidencia y alcance personal**.

## Lenguaje de negocio y gobierno

Explicar qué significaban los datos, cómo se traducían las reglas del negocio y
quién utilizaba el resultado. Usar «conocimiento de dominios de negocio» y
«contribución al gobierno de datos» según el trabajo real. Describir la gestión
directiva de un área únicamente cuando haya existido esa responsabilidad.

Ejemplo de redacción, basado en el caso Ilko del CV:

> Developed data and automation solutions for commercial and finance teams,
> including tools to visualize business KPIs and explore alternative scenarios.

Para cada flujo seleccionar un resultado comprobable: entrega automática de un
reporte, trazabilidad de una regla, un escenario parametrizable o disponibilidad
de una fuente integrada. Si se añaden ahorros, tiempos o porcentajes, registrar
periodo, línea base, método y contribución atribuible.

## Registro de fuentes y límites

Fuente local consultada: `D:/Escritorio/Nick/Nick Soto Conde_CV2026.pdf`, páginas 1–5
de experiencia. Se usó extracción de texto con pypdf; el CV es una declaración
profesional del propietario, no una verificación externa de los empleos.

| Entidad o afirmación | Fuente | Qué respalda | Estado al 2026-11-01 |
| --- | --- | --- | --- |
| Santander: relevamiento, equivalencias de core, AWS/Spark, diccionarios y apoyo con DataHub | CV, pp. 1–2; experiencias `idm-santander` y `ses-santander` | Alcance técnico y relación con Finanzas–GI | Contenido consultado; sin nuevos artefactos de cliente verificados |
| Ilko: ETL, warehouse, Python/SQL/JavaScript, Automation Anywhere y simulaciones para equipos comerciales y financieros | CV, p. 3 | Automatización y consumo de datos para negocio | Contenido consultado; sin mediciones cuantitativas documentadas |
| Ilko: cobertura adicional de marketing, supply chain, producción, distribución, administración de ventas, planeamiento financiero, costos y cobranzas | Mensaje actual del propietario | Áreas con las que declara haber trabajado | Confirmación del propietario; falta asociar entregables concretos a cada área |
| Migración GCP → AWS, Spark/Scala/PySpark, dashboards, KPI gerenciales/operativos y patrones para marketing | CV, pp. 4–5, rol de datos de VE7, enero de 2022–enero de 2023 | Caso potencial de plataforma end to end y consumo por negocio | Contenido consultado; sin nuevos artefactos verificados |
| Odoo como origen; orquestación y gobierno en la plataforma llamada Thikathani | Mensaje actual del propietario | Alcance adicional descrito directamente por el propietario | Declarado; requiere detallar mecanismos y entregables antes de redactar la arquitectura |
| Thikathani es marca o plataforma de VE7 | Respuesta explícita del propietario en esta conversación | Relación entre nombre público del caso y empleador del CV | Confirmado por el propietario el 2026-11-01 |
| El proyecto publicado de Santander declara arquitectura y resultados profesionales | `portfolio_data.json`, `projects[id=santander-data-platform]` | Estado actual del portafolio | Fuente consultada; no implica validación independiente de la implementación |

## Material para ampliar los casos publicados

- Dos o tres entregables representativos de Ilko: área usuaria, proceso anterior,
  qué se automatizó, resultado y aporte individual o del equipo.
- Arquitectura de migración y alcance de gobierno: componentes de origen/destino,
  reglas conservadas, consumidores y mecanismos realmente implementados.
- Material compartible: diagrama autorizado o reconstrucción conceptual identificada,
  ejemplos sintéticos, documentación o capturas sin información interna.

No es necesario contar con cifras de ahorro para redactar un caso útil. Sí es
necesario describir un cambio observado y distinguirlo de un beneficio esperado.

## Implementación en v3

Por solicitud explícita del propietario se incorporaron los casos profesionales
`thikathani-cloud-data-platform` y `virutex-ilko-business-automation`, con
atribución a las experiencias `ve7-data` y `virutex-ilko`. El caso de Thikathani
permanece separado del proyecto full stack de VE7.

Se actualizaron portada, capacidades, filtros de proyectos y experiencia,
contacto y metadata con Data & Automation. La selección inicial conserva un
destacado por disciplina; el filtro de datos muestra los tres casos y una
introducción con plataformas, automatización y decisiones de negocio.

Cada caso de datos incluye sector, audiencia, contexto, dominios, decisiones
apoyadas y entregables. Las áreas de Ilko se agrupan por función, sin afirmar que
todos los entregables se utilizaron en todos los departamentos. El texto de
Thikathani describe la migración de la plataforma analítica, sin atribuir una
migración del propio ERP Odoo. Gobierno y organización compartida se presentan
como capas transversales, no como una etapa final del procesamiento.

| Campos implementados | Fuente y alcance | Estado |
| --- | --- | --- |
| `santander-data-platform.business`, `crossCutting`, título y resumen | CV pp. 1–2 y caso existente: Finanzas–GI, equivalencias, Spark/AWS y apoyo a gobierno con DataHub | Declaración profesional consultada; sin verificación externa nueva |
| `thikathani-cloud-data-platform`: narrativa, flujo, tecnologías y `business` | CV pp. 4–5 más confirmaciones del propietario: Thikathani como marca/plataforma de VE7, Odoo, orquestación y gobierno | Declarado por el propietario; diagrama conceptual y sin topología de producción afirmada |
| `virutex-ilko-business-automation`: narrativa y entregables | CV p. 3: warehouse, scripts, RPA, dashboards y simulación de KPI; áreas adicionales confirmadas por el propietario | Declarado; no se asignan métricas ni soluciones particulares a departamentos sin respaldo |
| `business.domainGroups` de Ilko | Agrupación editorial de las áreas declaradas en familias financieras, comerciales y operativas | Clasificación de presentación, no organigrama oficial ni cargo directivo |
| Sectores y audiencias | Santander (servicios financieros), Virutex Ilko (consumo masivo, según contexto del propietario), VE7 (agronegocios); funciones indicadas en CV y mensajes | Clasificación editorial basada en fuentes del propietario; no se añade retail como sector de una empresa sin una relación específica confirmada |

Los diagramas y las descripciones no convierten estas experiencias en casos
independientemente auditados. Los enlaces públicos de código y despliegue
permanecen vacíos cuando no se dispone de destinos compartibles.

La compilación de producción y las pruebas de navegador de la implementación
se completaron; el registro está en [V3_VISUAL_REVIEW.md](V3_VISUAL_REVIEW.md).

## Presentación centrada en desarrollos

Los tres casos públicos se presentan como **Financial Data Modernization &
Governance**, **End-to-End Data Platform & Cloud Migration** y **Business Analytics
& Process Automation**. Sus tarjetas y bloques de contexto utilizan `business.focus`
y `business.keywords` para destacar Cloud ETL, Core data mapping, Metadata
governance, GCP to AWS, ERP integration, Data orchestration, Process automation,
RPA y KPI scenarios.

Se retiraron las empresas de títulos, resúmenes, roles y textos de alcance de los
casos de datos. La barra lateral conserva un acceso a la trayectoria sin repetir
empleadores. Las experiencias laborales, IDs de casos, rutas y relaciones internas
se mantienen para preservar la historia y los enlaces existentes. Esta preferencia
es de presentación y no supone anonimización del repositorio o de sus URL.
