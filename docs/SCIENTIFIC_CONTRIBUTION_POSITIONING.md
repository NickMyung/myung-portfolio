# Contribución científica como pilar profesional

Fecha: 1 de noviembre de 2026. Rama: `myung-portafolio-v3`.

## Petición y estructura

El propietario solicitó un cuarto bloque principal de contribución científica,
mayor presencia de su participación en un comité técnico de revisión de artículos
y de su dirección de investigación, y el detalle antes de la experiencia laboral.
También pidió explicar cómo la investigación forma parte de su formación y de su
desenvolvimiento en las otras disciplinas.

La portada muestra cuatro accesos equivalentes. Data & Automation, Full-Stack y
Robotics R&D conservan sus tres categorías de proyectos. Scientific Contribution
& Research Leadership enlaza con el bloque `#academic-service`, ahora entre los
proyectos y la experiencia profesional. El cuarto acceso no crea una categoría
vacía de proyectos ni convierte el servicio académico en un empleo adicional.

La identidad principal continúa siendo Mechatronics Engineering Graduate. El fondo cálido,
las tarjetas de proyectos y sus títulos centrados en desarrollos se conservan.

## Fuente de contenido y alcance

| Contenido | Fuente | Estado y límites |
| --- | --- | --- |
| Technical Program Committee (TPC) Member & Scientific Reviewer, ICCRE, Japón, 2024/2025/2026 | Entrada existente `academicService[id=iccre-japan-tpc]`; reafirmación del propietario en esta conversación | Declaración profesional existente; no se cambian cargo, fechas, afiliación ni alcance, y no se añaden cantidades de revisiones |
| Director of Research, IEEE EMBS–UNI Student Branch, 2021 | Entrada existente `academicService[id=ieee-embs-uni]`; reafirmación del propietario | Dirección dentro de la rama estudiantil identificada, sin atribuir dirección de investigación de toda la universidad |
| Formulación de problemas, evaluación de evidencia y documentación como base transversal | Petición explícita del propietario; experiencia de investigación y enfoque profesional ya descritos en el repositorio | Narrativa de primera persona sobre métodos; no implica causalidad medida, mejoras porcentuales ni certificación de calidad de los otros proyectos |
| Aplicación a datos, software y robótica | Síntesis editorial del enfoque anterior y del contenido existente de las tres áreas | Perspectivas metodológicas, no nuevos resultados de producción ni responsabilidades no documentadas |
| Publicaciones y autoría | `portfolio_data.json.publications` | Metadata y orden de autores conservados; la sección científica enlaza con el bloque bibliográfico existente |

No se consultaron fuentes externas nuevas ni se presenta una nueva verificación
independiente de las credenciales.

## Implementación

- `scientificContribution` mantiene los textos, métodos y aplicaciones en la misma
  fuente editorial `portfolio_data.json`. Las aplicaciones usan IDs de categoría.
- `AcademicService.tsx` presenta los dos roles y sus instituciones completas,
  métodos compartidos y enlaces a capacidades y publicaciones.
- La portada muestra los cargos con afiliaciones abreviadas y el cuarto acceso.
- Navegación: Science lleva al detalle científico; Robotics conserva el acceso
  al modelo y las publicaciones. Se mantiene `#academic-service` para enlaces existentes.
- Presentación, proyectos, capacidades, trayectoria, perfil y contacto explican
  la investigación como fundamento transversal, sin duplicar el bloque de detalle.

`tsconfig.json` excluye `output/` del chequeo de TypeScript: esa carpeta contiene
una copia histórica de las fuentes de v2, cuyos alias apuntaban a tipos actuales
durante el chequeo global. Los archivos y ZIP históricos se preservaron.

## Validación

- Compilación de producción y generación de la portada y los seis casos correctas.
- Comparación con el commit anterior: proyectos, experiencia, capacidades,
  educación y metadata de publicaciones conservados. Las entradas de servicio
  académico solo añaden una afiliación abreviada para su presentación en portada.
- Cuatro accesos equivalentes en escritorio; el cuarto funciona con Tab y Enter.
- Un único bloque `#academic-service`, con dos roles, antes de experiencia y fuera
  del perfil. Enlaces a capacidades y publicaciones funcionales.
- Filtros: tres categorías técnicas, selección inicial de tres casos y catálogo
  de seis. Navegación científica disponible también desde un caso de proyecto.
- Sin desbordamiento a 320, 390, 768, 1024 y 1440 píxeles CSS; sin solapamientos
  entre elementos de navegación en escritorio. Capturas de escritorio y móvil revisadas.
- Menú móvil: acceso Science, cierre al navegar, Escape y devolución del foco.
- Contenido legible con movimiento reducido y sin JavaScript; sin excepciones
  JavaScript no capturadas durante la revisión.

Estas comprobaciones no constituyen una auditoría integral de accesibilidad ni
una validación independiente de las credenciales académicas.
