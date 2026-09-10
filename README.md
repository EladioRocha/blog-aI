# AI Blog — Next.js Prototype

An early **Next.js 14, React 18, TypeScript, and Tailwind CSS** interface for an AI-assisted publishing concept. The current repository contains a landing page and post-route placeholders.

## Current scope

| Route | Implementation |
| --- | --- |
| `/` | Landing page with links to the creation route. |
| `/post/create` | Placeholder page displaying “Create post”. |
| `/post/[id]` | Post route scaffold. |

The landing page's sign-in and generation buttons lead to `/post/create`. They do not implement authentication or content generation. There is no AI service integration, publishing backend, or database in the current tree.

## Run locally

With Node.js and npm installed, run from the repository root:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. The project does not pin a Node.js runtime version; the dependency manifest pins Next.js to `14.2.18`.

## Build and checks

```sh
npm run lint
npm run build
npm start
```

Production startup requires a completed build. There is no automated test script. These are the declared commands, not a claim that all scaffolding currently passes a production build.

## Where to work

- [src/app/page.tsx](src/app/page.tsx): landing page.
- [src/app/post/create/page.tsx](src/app/post/create/page.tsx): creation placeholder.
- [src/app/post/[id]/page.tsx](src/app/post/[id]/page.tsx): post route.
- [src/app/layout.tsx](src/app/layout.tsx): shared layout and local Geist fonts.
- [src/app/globals.css](src/app/globals.css) and [tailwind.config.ts](tailwind.config.ts): styling.
- [next.config.mjs](next.config.mjs): Next.js configuration.

Useful next steps are defining the post model, implementing an editor and persistence, and designing authentication and server-side generation. These are future work, not existing features. The application's original Spanish copy is unchanged by this documentation update.
