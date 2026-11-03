# Contexto homogéneo en las tarjetas de proyectos

Actualizado: 2026-11-02, por solicitud del propietario.

Todas las áreas muestran el mismo bloque **Industry / For**. Para los proyectos
de datos se reutilizan `business.industry` y `business.audience`; los demás usan
`context.industry` y `context.audience` en `portfolio_data.json`. Esto evita añadir
a los casos de investigación una ficha completa de negocio que no les corresponde.

El espacio de palabras clave se reserva en todos los encabezados. El contexto usa
el mismo formato y altura mínima en escritorio para alinear los tres bloques.

| Proyecto | Industry | For | Fuente y alcance editorial |
| --- | --- | --- | --- |
| `ve7-fullstack-ml-platform` | Agriculture & distribution | Commercial teams & agricultural distributors | `problem`, `summary` y `objective`: catálogos agrícolas, distribuidores y equipos comerciales de la plataforma móvil y web |
| `hip-exoskeleton-kinematics` | Rehabilitation robotics | Robotics & rehabilitation researchers | `summary`, `objective` y `results`: análisis cinemático, simulación de espacio de trabajo y paper del exoesqueleto de cadera; audiencia de investigación, sin atribuir uso clínico |
| `nasa-rover-tharsis` | Space exploration robotics | University rover engineering teams | `approach`, `role` y `evidence`: contribuciones mecánicas y de telemetría dentro de Grupo Tharsis UNI; no se presenta a NASA como empleador ni cliente |

Estado: síntesis editorial a partir de los casos existentes. Las audiencias de
investigación describen el contexto y los destinatarios del trabajo, no usuarios
de producción verificados. No se añaden métricas, clientes ni validaciones nuevas.

El ajuste se comparte entre las dos presentaciones de `main`, las ramas v3 y RSCH
y sus copias del comparador. Los resultados, límites, autorías y evidencias de los
casos permanecen intactos.
