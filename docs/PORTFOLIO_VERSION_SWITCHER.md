# Selector V3 / RSCH en main

Actualizado: 2026-11-02.

`main` integra las dos presentaciones en una sola aplicación Next.js. El selector
horizontal de la navegación cambia entre ellas, también desde un caso de estudio.

- `/?version=v3`: tres áreas principales y servicio académico dentro de Profile.
- `/?version=rsch`: cuatro pilares y contribución científica antes de Experience.
- `/`: RSCH por defecto. Un valor de versión desconocido también usa RSCH.

La elección permanece en la URL: se conserva al recargar, compartir, volver con
el historial y abrir o regresar de un proyecto. El selector usa controles de radio
nativos con foco visible y admite las flechas del teclado. El indicador horizontal
respeta la preferencia de movimiento reducido.

## Fuentes de cada presentación

La vista V3 del comparador se ha consolidado en la rama `myung-portafolio-v3`.
RSCH corresponde a `myung-portafolio-RSCH`. `main` reproduce sus diferencias de
contenido, jerarquía y ubicación del servicio académico; añade una fila común de
navegación para el selector y ajusta el espacio superior y los anclajes.

Los proyectos, publicaciones, experiencia y datos de contacto se mantienen en
`portfolio_data.json`. Los textos que varían se guardan en `presentations.v3` y
`presentations.rsch`; no se mantienen dos catálogos de proyectos. El comportamiento
de URL y la numeración de secciones están en `src/lib/portfolio-versions.ts`.

No se necesitan los servidores locales del comparador para desplegar `main`.
En Vercel se utiliza una sola aplicación Next.js desde la raíz del repositorio.

## Comprobación

Compilar con `npm run build`, iniciar con `npm start` y ejecutar desde otra terminal
`npm run test:versions`. Para probar otro puerto, en PowerShell:

```powershell
$env:PORTFOLIO_TEST_URL = 'http://127.0.0.1:3070'
npm run test:versions
```

Además, revisar escritorio y móvil: selección con clic y flechas, recarga, atrás
y adelante, filtros de proyectos y enlaces de ida y vuelta a un caso. La vista
del simulador conserva su carga dinámica con `ssr: false`.
