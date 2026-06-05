# GAIA UI Agent Kit

This repository is a local reference pack for using GAIA UI correctly from Codex, Claude Code, Cursor, or any other AI coding agent.

## What This Repo Contains

- `registry-snapshot/`: official GAIA UI registry items plus source fallback captured from GitHub.
- `components-catalog/`: one Markdown file per component with install command, dependencies, files, and usage notes.
- `recipes/`: product patterns that combine components into realistic AI assistant surfaces.
- `src/registry/new-york/ui/`: curated official component sources used by the live demo.
- `src/components/gaia-agent-demo.tsx`: runnable Next.js demo showing component composition.

## Default Stack

- Next.js App Router with TypeScript.
- Tailwind CSS v4.
- GAIA UI components copied from the shadcn-compatible registry.
- Path alias: `@/*` points to `src/*`.

## How To Add GAIA UI Components

Prefer the official registry command:

```bash
npx shadcn@latest add https://ui.heygaia.io/r/<component-name>.json
```

For this repo, inspect `components-catalog/<component-name>.md` and `registry-snapshot/items/<component-name>.json` first. If the component is already copied into `src/registry/new-york/ui`, import it from there.

## Component Selection Rules

- Use `Composer` for AI inputs, file attachments, slash commands, and tool routing.
- Pair `Composer` with `SlashCommandDropdown`, `FilePreview`, and `ToolCallsSection` for agent workspaces.
- Use `MessageBubble` for chat transcripts and mobile-style assistant conversations.
- Use `WorkflowCard`, `NotificationCard`, `CalendarEventCard`, and `TodoItem` patterns for automation/productivity views.
- Use `ModelSelector` for choosing model/provider modes.
- Use `PricingCard` and `RaisedButton` for subscription, onboarding, and CTA surfaces.
- Use chart components and `StatRow` for metric dashboards.
- Do not rebuild an equivalent generic card, button, composer, or trace panel when a GAIA component exists.

## Design Guidance

- GAIA UI is for AI assistants, workflows, automations, and productivity products.
- Keep interfaces dense enough to be useful but visually quiet.
- Use `#00bbff` as the primary GAIA accent unless the app has a stronger existing brand.
- Preserve dark-mode support and keyboard-accessible controls.
- Do not add marketing-only hero fluff when the user asks for an app/tool/workspace.

## Syncing Upstream

Run:

```bash
pnpm sync:gaia
```

This refreshes:

- `registry-snapshot/items/*.json`
- `registry-snapshot/source/**`
- `registry-snapshot/manifest.json`
- `components-catalog/*.md`

The sync script reads the official docs, `llms.txt`, the GitHub registry, and GitHub raw source fallback.

## Verification

Before handing off changes:

```bash
pnpm lint
pnpm build
```

For UI work, also run the dev server and visually inspect desktop and mobile widths.

## Response Rule

When answering user-facing questions from this repo, cite the essential URLs at the bottom of the response.

## Essential URLs

- GAIA UI docs: https://ui.heygaia.io/docs
- GAIA UI llms.txt: https://ui.heygaia.io/llms.txt
- GAIA UI GitHub: https://github.com/theexperiencecompany/gaia-ui
