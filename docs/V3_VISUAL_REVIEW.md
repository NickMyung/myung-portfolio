# Revisión visual de la versión v3

Fecha: 1 de noviembre de 2026. Rama: `myung-portafolio-v3`, derivada de `myung-portafolio-v2`.

## Alcance

Se conserva la identidad Mechatronics Engineer y la misma jerarquía para datos,
full stack y robótica e I+D. Las tarjetas presentan mapas conceptuales generados
con `projects[].flow` y resúmenes breves en `projects[].preview`. El contenido
completo, los roles y el alcance de la evidencia permanecen en cada caso.

Los mapas son ilustraciones editoriales del contenido existente. No son capturas
de aplicaciones originales, planos CAD, topologías de producción ni validaciones
del modelo robótico. No se incorporaron fotografías, métricas ni nuevas credenciales.

## Trazabilidad de los resúmenes

Fuente consultada: `portfolio_data.json` en el commit base `252676d` y su copia
actual. La revisión comprueba coherencia con ese contenido; no verifica las
afirmaciones profesionales o científicas mediante fuentes externas.

| Entidad | Afirmación resumida | Fuente concreta | Qué respalda y estado | Fecha |
| --- | --- | --- | --- | --- |
| `santander-data-platform.preview` | Modernización financiera, Spark, AWS y DataHub | Proyecto con el mismo ID: `problem`, `contributions`, `results`, `flow` | Síntesis del caso profesional declarado; contenido local consultado, sin nueva verificación externa | 2026-11-01 |
| `ve7-fullstack-ml-platform.preview` | Catálogo, recomendaciones, APIs y despliegues móvil/web | Proyecto con el mismo ID: `problem`, `contributions`, `results`, `flow` | Síntesis del caso profesional declarado; los enlaces de aplicación y despliegue siguen pendientes en el caso | 2026-11-01 |
| `hip-exoskeleton-kinematics.preview` | Formulación D-H, simulación y coautoría del paper | Proyecto con el mismo ID: `problem`, `contributions`, `results`, `flow` | Síntesis del caso existente; no se revalidaron aquí publicación, autoría ni parámetros de la demo | 2026-11-01 |
| `nasa-rover-tharsis.preview` | Contribución de equipo a mecánica y telemetría, participación en el reto | Proyecto con el mismo ID: `problem`, `contributions`, `results`, `flow` | Conserva la atribución al equipo y el alcance declarado; no hay nuevos registros externos consultados | 2026-11-01 |

## Implementación

- `ProjectVisual.tsx`: usa las tres primeras etapas del flujo como nodos; las
  etapas adicionales aparecen en el pie del mapa. La categoría determina el acento.
- `ProjectCard.tsx`: muestra problema, aporte y resultado sin recortar texto.
  Si no existe `preview`, utiliza los campos originales del caso.
- `Reveal.tsx`: animación de entrada con IntersectionObserver y CSS. El contenido
  es visible por defecto; no depende de completar una animación para ser legible.
- `globals.css`: movimiento condicionado por preferencias del usuario y capacidad
  de hover; espaciado compartido de 4, 6 y 8 rem según el ancho disponible.
- Portada: accesos equivalentes a las áreas y enlace real a contacto.

## Comprobaciones realizadas

- `npm run build` con `PORTFOLIO_BUILD_DIR=.next-review`: compilación, tipos y
  generación de la portada y los cuatro casos completadas correctamente.
- Navegador Edge sobre la compilación de producción local: columnas equivalentes,
  mapas, filtros, contadores, enlaces a grupos después de filtrar y cuatro rutas de casos.
- Menú móvil: apertura, cierre con Escape y devolución del foco. Tab real al enlace
  de contacto y foco visible.
- Sin desbordamiento horizontal a 320, 390, 768, 1024 y 1440 píxeles CSS.
- Movimiento reducido: entradas desactivadas y tarjetas sin desplazamiento al hover.
- Contenido inicial y enlaces de casos visibles sin JavaScript y sin IntersectionObserver.
- Inspección de capturas de escritorio y móvil; sin excepciones JavaScript no capturadas.

Estas comprobaciones no constituyen una auditoría integral de accesibilidad.
Los paquetes `output/portfolio-review-2026-11-01*` conservan la captura histórica
de v2 y no se regeneraron como parte de este cambio.
