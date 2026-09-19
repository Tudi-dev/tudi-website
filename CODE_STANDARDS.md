# Estándares de código — tudi-website

Convenciones concretas de cómo se escribe el código en este proyecto. Para principios de arquitectura y el checklist de "terminado", ver [CONTRIBUTING.md](./CONTRIBUTING.md). Aplicado y verificado automáticamente con `npm run verify` (`astro check` + `oxlint` + `stylelint` + `astro build`).

## Nombres de archivos y carpetas

- Componentes (`.astro`, `.tsx`): `PascalCase` — `BaseLayout.astro`, `Seo.astro`.
- Páginas (`src/pages/`): `kebab-case`, siguen la URL — `src/pages/projects/index.astro` → `/projects`.
- Contenido (`src/content/**/*.md`): `kebab-case`, el nombre de archivo es el `id`/slug de la entrada.
- Utilidades, hooks: `camelCase` — `formatDate.ts`, `useScrollPosition.ts`.

## Formato

- 2 espacios de indentación, comillas simples, sin punto y coma — es el estilo ya usado en todo el código existente (`src/content.config.ts`, `astro.config.mjs`, componentes `.astro`); mantenerlo por consistencia, no reformatear archivos completos por preferencia personal.
- CSS: propiedades de color en notación moderna (`rgb(r g b / a%)`, no `rgba(r, g, b, a)`), lo aplica `stylelint --fix` automáticamente.

## TypeScript / JavaScript

- Sin `any`. Si el tipo es desconocido, `unknown` + narrowing.
- Props de componentes: `interface Props { ... }`, no tipos inline repetidos.
- Imports: librerías externas primero, luego internas (`../layouts/...`, `../components/...`), sin reordenar manualmente más allá de eso — no hay un enforcement automático de orden todavía.
- Un archivo, una responsabilidad: si un componente `.astro` empieza a mezclar mucha lógica de datos con presentación, extraer la lógica a una función en `src/lib/` (crear la carpeta cuando haga falta, no antes).

## CSS / Tailwind

- Utilidades de Tailwind primero; CSS a mano solo en `src/styles/global.css` para tokens de diseño (`--text`, `--accent`, `--border`, etc.).
- No colores/tamaños sueltos fuera de esos tokens.
- `npm run lint:css` (stylelint, config en `.stylelintrc.json`) cubre `src/**/*.{css,astro}`, incluyendo bloques `<style>` dentro de `.astro`.

## Componentes

- `.astro` por defecto (cero JS). React solo con justificación de interactividad real — ver criterio completo en CONTRIBUTING.md.
- Un componente por archivo. Sin "god components" que mezclen layout de página + lógica de negocio + presentación.

## Commits

- Mensaje en modo imperativo, explica el porqué cuando no es obvio por el diff.
- Un commit, un cambio coherente.

## Herramientas que enforzan esto

| Herramienta  | Qué cubre                          | Comando           |
| ------------ | ----------------------------------- | ------------------ |
| `astro check`| Type-check de `.astro`/`.ts`/`.tsx` | `npm run check`    |
| `oxlint`     | Lint de `.ts`/`.tsx`                | `npm run lint`     |
| `stylelint`  | Lint de CSS (`.css` y `<style>` en `.astro`) | `npm run lint:css` |
| `astro build`| Que el sitio realmente compile      | `npm run build`    |

Los cuatro corren juntos con `npm run verify`.
