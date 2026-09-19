# Guía de calidad — tudi-website

Este documento define cómo se trabaja en este proyecto. Cualquier cambio (feature, fix, contenido) debe pasar por aquí antes de darse por terminado. Si algo aquí ya no aplica, se actualiza este documento primero, no se ignora en silencio.

Para convenciones concretas de código (nombres, formato, estilo) ver [CODE_STANDARDS.md](./CODE_STANDARDS.md).

## Principios

1. **HTML estático por defecto.** Astro renderiza cada página como HTML plano; JavaScript en cliente solo se agrega donde hay interactividad real (formularios, estado, listeners). Si una página se ve y funciona bien sin JS, no lleva JS.
2. **SEO y accesibilidad no son "extras".** Son parte de la definición de "terminado" de cualquier página, no una revisión posterior.
3. **Simplicidad sobre abstracción prematura.** No crear componentes, hooks o capas genéricas para un solo caso de uso. Preferir repetir código simple antes que inventar una abstracción para "por si acaso".
4. **No mezclar decisiones ya tomadas sin justificarlo.** La arquitectura (Astro, Tailwind v4, content collections, dominio `tudi.mx`) es la base del proyecto — cambiarla requiere una razón explícita, no una preferencia de momento.

## Checklist obligatorio antes de dar algo por terminado

```
npm run verify
```

Este comando corre, en orden:

- `astro check` — type-check de `.astro`/`.ts`/`.tsx`
- `oxlint` — lint de `.ts`/`.tsx`
- `stylelint` — lint de CSS (`.css` y `<style>` en `.astro`)
- `astro build` — build de producción completo

Si `npm run verify` falla, la tarea no está lista. Además, verificar manualmente:

- [ ] Se probó la página/feature en `npm run dev` en el navegador (no solo que compile).
- [ ] Cada página nueva tiene `title` y `description` propios y descriptivos (vía `BaseLayout`/`Seo.astro`), no genéricos ni copiados de otra página.
- [ ] Las imágenes de contenido usan `astro:assets` (`<Image />`), no `<img>` crudo, y tienen `alt` descriptivo.

## Estructura del proyecto

- `src/content/` — contenido versionable (proyectos, etc.). El schema en `src/content.config.ts` es la fuente de verdad: si un campo no está en el schema, no se usa en el frontmatter de un `.md`.
- `src/layouts/` — layouts compartidos (`BaseLayout.astro` centraliza `<head>` y SEO).
- `src/components/seo/` — meta tags reutilizables.
- `src/components/ui/` — componentes `.astro` sin JavaScript.
- `src/components/react/` — solo componentes que necesitan interactividad real en cliente.
- `src/pages/` — rutas del sitio.
- `src/styles/global.css` — tokens de diseño (colores, tipografía) + Tailwind.

## Componentes: `.astro` vs React

- Por defecto, todo componente nuevo es `.astro`.
- Un componente pasa a React **solo** si necesita estado, efectos, o manejo de eventos complejo que no se resuelve con HTML/CSS.
- Si se usa React, la directiva `client:*` debe ser la más restrictiva posible que funcione: preferir `client:visible` o `client:idle` sobre `client:load`.

## TypeScript

- Proyecto en modo `strict` (`astro/tsconfigs/strict`). No usar `any` — si el tipo es genuinamente desconocido, usar `unknown` y angostarlo.
- Props de componentes `.astro`/React se tipan con `interface Props`, no inline sueltos repetidos.

## Estilos (Tailwind v4)

- Usar utilidades de Tailwind primero. CSS a mano solo para los tokens de diseño en `src/styles/global.css`.
- No usar colores, tamaños o espaciados "mágicos" fuera de las variables (`--text`, `--accent`, `--border`, etc.) ya definidas ahí.
- Todo estilo debe verse correcto en modo claro y oscuro (`prefers-color-scheme`).

## Accesibilidad

- HTML semántico: `<nav>`, `<main>`, `<article>`, jerarquía de encabezados sin saltos (no pasar de `h1` a `h3`).
- Todo elemento interactivo (links, botones, formularios) debe ser operable por teclado.
- Contraste de color suficiente en ambos temas — no bajar el contraste de los tokens existentes sin revisarlo.

## Rendimiento

- No agregar una dependencia de JavaScript nueva sin evaluar antes si se puede resolver con HTML/CSS o con una isla mínima.
- Imágenes siempre vía `astro:assets` para optimización automática (formatos modernos, tamaños responsive).

## Git

- Un commit = un cambio coherente. No mezclar un refactor con una feature nueva en el mismo commit.
- El mensaje de commit explica el *por qué*, no solo repite el *qué* (que ya se ve en el diff).

## Antes de considerar terminada una tarea, preguntarse

- ¿Esto se pudo resolver más simple?
- ¿Rompí alguna convención de este documento? Si sí, ¿por qué está justificado, y quedó anotado aquí si es una excepción permanente?
- ¿Agregué algo (feature, config, dependencia) que no se pidió?
