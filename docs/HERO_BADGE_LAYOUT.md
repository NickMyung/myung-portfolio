# Barra de áreas y separación del nombre

Actualizado: 2026-11-02, a petición del propietario.

La barra sobre el nombre usa la misma adaptación en las ramas v3 y RSCH y en
las dos copias independientes de `../Comparador/versiones/`.

- `heroAreaLabel` toma las etiquetas de cada versión; no se añaden ni se quitan
  áreas para adaptar el ancho.
- `hero-badge-container` define el contenedor de referencia. La fuente de
  `hero-area-badge` se ajusta a su ancho y a la longitud del texto monoespaciado,
  con un máximo de 12 px. El relleno, el punto y el espacio entre elementos
  usan `em` para reducirse proporcionalmente.
- El texto conserva una sola línea, sin elipsis ni recorte, mediante CSS.
- `mb-8 sm:mb-10` deja un margen inferior de 32 px en móvil y de 40 px a partir
  de 640 px, frente a los 24 px anteriores.

Los fondos, el número de pilares y los bloques académicos de cada versión
conservan sus decisiones editoriales. El detalle de los bloques reservados está
en `RSCH_HERO_PRESENTATION.md`, disponible en la rama RSCH y su copia comparativa.
