---
name: gaia-ui
description: Build, design, or refactor React/Next.js apps with the local GAIA UI component kit. Use when the user mentions GAIA UI, the `/Users/luxlu/Desktop/GAIA` folder, GAIA components, assistant/chat UI, workflow dashboards, AI agent workspaces, tool-call traces, slash commands, model selectors, pricing pages, or asks to make a new project consistently use the GAIA UI component library.
---

# GAIA UI

Use the local GAIA UI Agent Kit as the source of truth:

```text
/Users/luxlu/Desktop/GAIA
```

Public fallback:

```text
https://github.com/AOMJ2PMP/gaia-ui-agent-kit
```

## Core Workflow

1. Inspect the target project first: framework, Tailwind setup, `@/*` alias, existing UI patterns, package manager.
2. Inspect the GAIA kit before choosing components:
   - `AGENTS.md` for repo conventions.
   - `components-catalog/README.md` and relevant `components-catalog/*.md` files.
   - `recipes/*.md` for composition patterns.
   - `registry-snapshot/items/<component>.json` for exact dependencies and files.
3. Prefer installing from the official GAIA registry:

```bash
npx shadcn@latest add https://ui.heygaia.io/r/<component-name>.json
```

4. If a component needs local adaptation, copy from `registry-snapshot/source/**` or the curated demo sources in `src/registry/new-york/ui/**`.
5. Build the actual product surface first. Do not turn app/workspace requests into marketing-only pages.
6. Verify with `pnpm lint` and `pnpm build` when available. For UI changes, run a local preview and check desktop/mobile widths.

## Component Selection

- AI chat input: `Composer`, `SlashCommandDropdown`, `FilePreview`.
- Chat transcript: `MessageBubble` or `ChatDemo`.
- Tool execution transparency: `ToolCallsSection`.
- Agent/workflow hub: `WorkflowCard`, `NotificationCard`, `TodoItem` pattern, `CalendarEventCard`.
- Model/provider control: `ModelSelector`.
- Metrics: `StatRow`, chart components.
- Subscription/onboarding: `PricingCard`, `RaisedButton`.
- Knowledge/memory map: `KnowledgeGraph`.
- Loading states: `WaveSpinner`.

Do not rebuild an equivalent generic component when GAIA UI already has the pattern.

## New Project Bootstrap

When starting or preparing a new project, run:

```bash
python3 /Users/luxlu/.codex/skills/gaia-ui/scripts/bootstrap_gaia_project.py /path/to/project
```

Use `--with-catalog` when the target project should carry a local copy of the GAIA component catalog and manifest.

After bootstrapping, tell the user what was added and which file the next agent should read first.

## Quick Component Lookup

Run:

```bash
python3 /Users/luxlu/.codex/skills/gaia-ui/scripts/inspect_gaia_kit.py --component composer
```

Use this before giving install commands or writing imports.

## References

- Read `references/component-map.md` when deciding which component fits a requested UI.
- Read `references/project-patterns.md` when composing whole pages or app shells.

## Important Notes

- GAIA's primary accent is `#00bbff`.
- Keep dark mode support unless the target project explicitly does not support it.
- Preserve the target project's package manager and folder conventions.
- For Next.js projects, prefer App Router + TypeScript + Tailwind.
- When answering user-facing questions, cite the important URLs at the bottom.
