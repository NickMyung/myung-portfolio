# Guía de lectura y evaluación del paquete

Guía para el evaluador y para la persona que presenta el proyecto. Autor del portafolio: **Nick Soto Conde**. Fecha de la captura de referencia: **1 de noviembre de 2026**. La versión en inglés está en [review-guide.html](review-guide.html).

## 1. Qué se está presentando

El objeto principal de revisión es una aplicación web de portafolio profesional, construida con Next.js, React, TypeScript, Tailwind CSS y Three.js. Su identidad es **Mechatronics Engineer** y organiza la trayectoria en tres áreas con la misma jerarquía visual: Big Data e ingeniería de datos, desarrollo full stack, y robótica e investigación y desarrollo.

El paquete reúne capturas reales de navegador, explicaciones del estilo y una copia del código de la aplicación del portafolio. Para comprobar la implementación original de los proyectos narrados, como los pipelines bancarios o las aplicaciones comerciales, se necesitan sus propios repositorios y artefactos.

## 2. Cómo abrir y reconocer el contenido

1. Descomprimir el ZIP completo. Mantener juntas las carpetas y los archivos; mover únicamente index.html rompería sus enlaces a imágenes.
2. Abrir [index.html](index.html) en un navegador. Es una galería estática que funciona sin iniciar un servidor.
3. Pulsar una captura para abrir el PNG original y ampliar texto o detalles. El índice en miniatura sirve para orientarse, no para juzgar la legibilidad final.
4. Leer [code-excerpts.md](code-excerpts.md) para copiar los fragmentos y contrastarlos con los archivos completos de source/.

| Elemento | Contenido | Uso recomendado |
| --- | --- | --- |
| index.html | Índice visual en inglés, paleta y explicaciones. | Punto de entrada para la presentación. |
| desktop/ | 15 PNG: panorama completo, secciones, modelo 3D y tres casos representativos. | Evaluar jerarquía, composición y consistencia en escritorio. |
| mobile/ | 7 PNG a 390 píxeles CSS. | Revisar la reorganización de contenido y controles en una pantalla estrecha. |
| code/ | 8 láminas PNG y sus páginas HTML. | Relacionar decisiones de diseño con código real. |
| code-excerpts.md | Fragmentos en texto con archivo y líneas de origen. | Leer, copiar y comprobar el código sin depender de imágenes. |
| source/ | Código y configuración de la aplicación del portafolio. | Inspección técnica y ejecución local opcional. |
| manifest.json | Rutas, tamaños, resoluciones, contexto de captura y hashes SHA-256. | Trazabilidad e integridad de los archivos. |
| README_ES.md | Instrucciones breves en español. | Consulta rápida. |

## 3. Recorrido sugerido para analizar el proyecto

1. **Identidad y alcance:** abrir desktop/01-home.png. Comprobar que la profesión principal y las tres áreas se entienden sin depender de una lista extensa de tecnologías.
2. **Organización temática:** abrir desktop/02-selected-projects.png y desktop/04-capabilities.png. Observar si los grupos reciben un tratamiento equivalente y si capacidades y proyectos se relacionan.
3. **Profundidad de los casos:** comparar desktop/12-case-data.png, desktop/13-case-full-stack.png y desktop/14-case-robotics.png. Identificar problema, rol, contexto y arquitectura conceptual.
4. **Trayectoria e investigación:** revisar desktop/03-experience.png, desktop/05-research.png, desktop/06-publications.png y desktop/11-interactive-model.png. Distinguir experiencia, publicaciones y demostración.
5. **Perfil y comunidad:** revisar desktop/07-profile.png, desktop/08-education.png y desktop/09-academic-service.png. Verificar que formación, proyectos académicos y servicio se presentan en categorías comprensibles.
6. **Adaptación móvil:** comparar las vistas de mobile/ con las de escritorio. El orden de lectura y la facilidad para acceder a los contenidos importan más que reproducir exactamente las mismas columnas.
7. **Implementación:** contrastar las láminas de code/ con los archivos completos de source/. Usar la tabla de la sección siguiente como mapa.

## 4. Cómo relacionar una captura con su implementación

| Aspecto | Vista | Lámina de código | Archivo para inspección |
| --- | --- | --- | --- |
| Pastel background / fondo pastel | desktop/01-home.png | code/01-pastel-background.png | source/src/app/globals.css |
| Area colors / colores por área | desktop/02-selected-projects.png | code/02-area-color-system.png | source/src/lib/portfolio.ts |
| Typography and grid / tipografía y cuadrícula | desktop/01-home.png | code/03-typography-and-grid.png | source/tailwind.config.js; source/src/app/globals.css |
| Responsive layout / adaptación de columnas | desktop/02-selected-projects.png; mobile/02-projects.png | code/04-responsive-three-area-layout.png | source/src/components/Hero.tsx; source/src/components/ProjectsShowcase.tsx |
| Project cards / tarjetas de proyectos | desktop/02-selected-projects.png | code/05-project-card-hierarchy.png | source/src/components/ProjectCard.tsx |
| Keyboard and motion / teclado y movimiento | mobile/07-navigation.png | code/06-keyboard-and-motion.png | source/src/app/globals.css; source/src/components/Navbar.tsx |
| On-demand model / modelo bajo demanda | desktop/11-interactive-model.png | code/07-on-demand-research-model.png | source/src/components/ResearchSection.tsx |
| Content structure / estructura del contenido | desktop/02-selected-projects.png | code/08-data-driven-growth.png | source/src/lib/portfolio.ts; source/portfolio_data.json; source/src/app/projects/[id]/page.tsx |

Las líneas indicadas en las láminas corresponden a la copia incluida en **source/**. Si el repositorio de trabajo cambia después de la exportación, sus números de línea pueden variar. Los fragmentos son selecciones de archivos; algunos empiezan o terminan dentro de una estructura mayor. El archivo completo permite reconstruir el contexto.

## 5. Cómo interpretar las imágenes

- **Captura de sección:** normalmente representa un encuadre de navegador al comienzo de la sección. Una tarjeta o una sección larga puede continuar por debajo del borde inferior de la imagen.
- **Panorama completo:** desktop/00-full-page.png contiene la página principal completa en su estado inicial, con el modelo 3D cerrado. Abrirla con zoom; verla reducida a una miniatura no permite evaluar texto.
- **Resolución CSS y resolución PNG:** el escritorio se capturó a 1440 píxeles CSS con densidad 1,5; las vistas móviles, a 390 píxeles CSS con densidad 2. Los PNG tienen más píxeles físicos que el ancho usado para el diseño. El manifiesto registra ambos datos.
- **Modelo interactivo:** desktop/11-interactive-model.png muestra un estado pausado. La captura permite examinar la interfaz; los controles, la respuesta y el comportamiento necesitan una prueba en la aplicación.
- **Láminas de código:** se generaron para facilitar la lectura. Los textos largos se ajustan visualmente al ancho; los archivos de source/ conservan el contenido original.

## 6. Criterios de revisión propuestos

Estos criterios ayudan a estructurar observaciones. No son una rúbrica oficial ni asignan una nota académica; deben adaptarse a los requisitos de la institución.

| Criterio | Qué observar | Evidencia útil |
| --- | --- | --- |
| Claridad de la identidad | Profesión, áreas y propósito comprensibles en la portada. | Portada y perfil. |
| Equilibrio multidisciplinario | Tratamiento visual equivalente de las tres áreas y navegación comprensible. | Proyectos, capacidades y filtros. |
| Coherencia visual | Fondo oscuro, difuminados pastel, tipografía, espaciado y acentos consistentes. | Capturas de secciones y láminas 01 a 05. |
| Comunicación del trabajo | Diferenciación entre problema, aporte personal, contribución de equipo y resultado. | Casos completos y datos del portafolio. |
| Adaptación e interacción | Lectura en móvil, navegación por teclado, foco y estados de controles. | Vistas móviles, código y prueba local. |
| Mantenibilidad | Componentes compartidos, categorías estables y contenido separado de la presentación. | ProjectCard.tsx, lib/portfolio.ts y portfolio_data.json. |
| Trazabilidad | Correspondencia entre lo que se muestra, la fuente disponible y el alcance declarado. | Código, manifiesto y enlaces de cada caso. |

## 7. Verificación funcional opcional

El manifiesto registra una compilación satisfactoria antes de la captura y el entorno Node.js v20.17.0. Para una revisión visual del paquete no hay que instalar nada. Para ejecutar la aplicación, abrir una terminal en **source/** y usar una instalación de Node.js compatible con el proyecto. La instalación de dependencias puede necesitar internet.

```sh
npm ci
npm run build
npm run start
```

Abrir la dirección local que muestre Next.js, normalmente http://localhost:3000. Si el puerto ya está ocupado, usar otro puerto o liberar únicamente un proceso propio. El código del portafolio genera las páginas de casos a partir de los datos incluidos.

- Probar Selected work, Big Data, Full-Stack, Robotics R&D y All projects; revisar qué contenido aparece y si los contadores corresponden al inventario.
- Acceder a un grupo desde la portada después de utilizar otro filtro; comprobar tanto el cambio de contenido como el desplazamiento.
- Abrir un caso por URL, regresar al catálogo y comprobar los enlaces disponibles. Un enlace externo requiere acceso al sitio correspondiente.
- En móvil, abrir y cerrar el menú; comprobar Escape y la devolución del foco al botón.
- Abrir el modelo de investigación, ajustar articulaciones y probar reproducir/pausar. Revisar la explicación alternativa si WebGL no está disponible.
- Comprobar navegación con teclado y preferencia de movimiento reducido. La presencia de estos mecanismos en código no equivale por sí sola a una evaluación integral de accesibilidad.

## 8. Integridad y alcance de la evidencia

La referencia de Git es **90b0f04**, pero la exportación contiene cambios locales del árbol de trabajo. Para revisar el estado presentado deben utilizarse los archivos incluidos en el paquete, en lugar de asumir que coinciden exactamente con ese commit remoto.

Un hash SHA-256 permite comprobar que los bytes de un archivo coinciden con el manifiesto. No acredita por sí mismo autoría, experiencia laboral, aceptación de una publicación ni aprobación institucional. El propio manifest.json no se incluye en su lista de hashes para evitar una referencia circular.

```powershell
$reviewManifest = Get-Content -LiteralPath '.\manifest.json' -Raw | ConvertFrom-Json
$reviewEntry = $reviewManifest.files | Where-Object { $_.path -eq 'desktop/01-home.png' }
(Get-FileHash -LiteralPath '.\desktop\01-home.png' -Algorithm SHA256).Hash.ToLower() -eq $reviewEntry.sha256
```

Este ejemplo se ejecuta desde la raíz de la carpeta extraída. True indica coincidencia con el hash registrado. Las imágenes, el código y las descripciones ayudan a evaluar el portafolio; las afirmaciones profesionales o científicas requieren las fuentes y comprobaciones correspondientes. El modelo web se presenta como una demostración ilustrativa y no establece eficacia clínica.

## 9. Cómo entregar observaciones útiles

Registrar cada observación por separado y señalar el archivo concreto. Distinguir un defecto observado de una preferencia de diseño o de información pendiente de evidencia.

```text
Observación:
Captura o URL:
Archivo y líneas de código, si aplica:
Tipo: diseño / funcionamiento / contenido / evidencia
Comportamiento observado:
Impacto para el visitante o evaluador:
Mejora propuesta:
Cómo comprobar la corrección:
Prioridad según la rúbrica de la institución:
```

Para compartir el material, enviar el ZIP completo. Las guías y el índice son documentos de apoyo; los archivos PNG y source/ son los elementos de inspección. Una eventual decisión de aprobación debe quedar en el informe del evaluador o de su institución.
