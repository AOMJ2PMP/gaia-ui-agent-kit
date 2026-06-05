# GAIA UI Agent Kit

A local reference kit for helping AI coding agents use [GAIA UI](https://ui.heygaia.io/docs) well.

This repo contains:

- Official GAIA UI registry snapshots with source fallback.
- Generated per-component Markdown catalog.
- Agent instructions for Codex, Claude Code, and Cursor.
- Reusable recipes for assistant workspaces, workflow dashboards, and landing pages.
- A runnable Next.js demo that composes GAIA UI components into a practical agent workspace.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Catalog page:

```text
http://localhost:3000/catalog
```

## Useful Commands

```bash
pnpm sync:gaia
pnpm lint
pnpm build
```

## Key Files

- `AGENTS.md`: main coding-agent instructions.
- `CLAUDE.md`: Claude Code pointer.
- `.cursor/rules/gaia-ui.mdc`: Cursor rule.
- `scripts/sync-gaia-ui.mjs`: sync official GAIA UI component metadata and source.
- `registry-snapshot/manifest.json`: captured component manifest.
- `registry-snapshot/items/*.json`: per-component registry data.
- `registry-snapshot/source/**`: captured upstream component source.
- `components-catalog/*.md`: agent-readable component notes.
- `recipes/*.md`: component composition patterns.
- `src/components/gaia-agent-demo.tsx`: live demo surface.

## Install A GAIA UI Component

```bash
npx shadcn@latest add https://ui.heygaia.io/r/<component-name>.json
```

Before installing, check `components-catalog/<component-name>.md` for dependencies and usage notes.

## Upstream URLs

- GAIA UI docs: https://ui.heygaia.io/docs
- GAIA UI llms.txt: https://ui.heygaia.io/llms.txt
- GAIA UI GitHub: https://github.com/theexperiencecompany/gaia-ui
