# Presentación de RSCH

Actualizado: 2026-11-02, por solicitud del propietario.

## Barra de áreas

La barra situada sobre el nombre conserva las cuatro etiquetas completas en una
sola línea. `hero-badge-container` proporciona el ancho disponible; el tamaño de
fuente de `hero-area-badge` se calcula con ese ancho y la longitud del texto
monoespaciado. La fuente tiene un máximo de 12 px a escala normal y el espaciado,
el punto decorativo y el relleno usan unidades `em` para reducirse en proporción.
La adaptación funciona con CSS, sin esperar a JavaScript ni recortar el texto.
La separación inferior es de 32 px en móvil y de 40 px a partir de 640 px,
para dejar más espacio entre la barra y el nombre.

## Bloques reservados para reutilizar

Se retiraron de `Hero.tsx` los dos bloques situados entre el resumen y las acciones:

- Technical Program Committee (TPC) Member & Scientific Reviewer — ICCRE.
- Director of Research — IEEE EMBS UNI Student Branch.

Sus registros completos permanecen en `portfolio_data.json.academicService`.
`AcademicService.tsx` continúa mostrando su detalle en la sección científica;
esta solicitud modifica únicamente la presentación de la portada. Se conservan
también los cuatro pilares, el resumen y los enlaces de navegación.

Para volver a mostrar los bloques en la portada, este es el bloque retirado. Puede
insertarse tras el párrafo del resumen dentro del primer `Reveal`, o adaptarse a
la ubicación que se elija después:

```tsx
<ul className="mb-8 grid gap-3 text-left sm:grid-cols-2" aria-label="Scientific review and research leadership">
  {portfolio.academicService.map((item) => (
    <li key={item.id} className="rounded-xl border border-rose-900/40 bg-slate-950/40 px-4 py-3">
      <p className="text-xs font-medium leading-relaxed text-rose-200">{item.role}</p>
      <p className="mt-1 text-[11px] text-slate-400">{item.shortOrganization} · {item.period}</p>
    </li>
  ))}
</ul>
```

La barra responsive y esa separación se aplican también a la rama v3 y a ambas
copias del comparador. La retirada de los dos bloques académicos de la portada
corresponde únicamente a RSCH.
