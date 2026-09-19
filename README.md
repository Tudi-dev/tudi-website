# tudi-website

Portafolio construido con [Astro](https://astro.build) + React (para islas interactivas) + Tailwind v4. Renderiza HTML estático por página para maximizar SEO/Core Web Vitals.

## Estructura

- `src/content/projects/` — un archivo Markdown por proyecto del portafolio (colección tipada en `src/content/config.ts`).
- `src/layouts/BaseLayout.astro` — layout compartido, incluye `<head>` con meta tags de SEO.
- `src/components/seo/Seo.astro` — meta tags (title, description, canonical, Open Graph, Twitter card) por página.
- `src/components/ui/` — componentes `.astro` sin JavaScript.
- `src/components/react/` — componentes React, solo para lo que necesite interactividad real (usar directivas `client:*`).
- `src/pages/` — rutas del sitio (home, about, contact, listado y detalle de proyectos).

## Comandos

| Comando           | Acción                                      |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Servidor de desarrollo                       |
| `npm run build`    | Type-check (`astro check`) + build estático  |
| `npm run preview`  | Sirve el build de `dist/` localmente         |
| `npm run check`    | Solo type-check                              |
| `npm run lint`     | Lint de `.ts`/`.tsx` con oxlint              |

## SEO

- `site` en `astro.config.mjs` apunta a `https://tudi.mx` — necesario para URLs absolutas correctas en canonical/sitemap/OG.
- `@astrojs/sitemap` genera `sitemap-index.xml` en cada build.
- `public/robots.txt` referencia el sitemap.
