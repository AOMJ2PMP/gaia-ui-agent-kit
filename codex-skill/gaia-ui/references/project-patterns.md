# Project Patterns

## AI Chat Workspace

Use when the user asks for an assistant, copilot, chat product, agent workspace, or prompt surface.

Recommended composition:

- Left rail: `ModelSelector`, context files, session controls.
- Center: `MessageBubble`, `ToolCallsSection`, `Composer`.
- Right rail: `WorkflowCard`, `NotificationCard`, relevant files or outputs.

Rules:

- Keep tool execution visible.
- Put file previews close to the composer.
- Use slash commands when users need explicit tools.
- Keep the first screen usable, not a landing page.

## Workflow Dashboard

Use when the user asks for automations, scheduled workflows, productivity systems, task queues, or agent runs.

Recommended composition:

- Top bar with workspace name and primary action via `RaisedButton`.
- Workflow grid using `WorkflowCard`.
- Side rail with `NotificationCard`, calendar events, and task-list pattern.
- Metrics strip using `StatRow` or chart components.

Rules:

- Show trigger, integrations/tools, run count, and action state.
- Avoid generic cards when workflow-specific components exist.

## GAIA-Style Landing Page

Use only when the user explicitly asks for a landing page or product page.

Recommended composition:

- First viewport: product name, concise offer, primary CTA, actual product/workflow visual.
- Product proof: `ChatDemo`, `WorkflowCard`, `StatRow`, or chart components.
- Pricing: `PricingCard`.
- CTA: `RaisedButton`.

Rules:

- The hero must show the actual product/workflow signal.
- Do not use a decorative-only hero.
- Keep the headline literal and specific.

## New Project Setup Checklist

- Confirm React/Next.js and Tailwind are installed.
- Confirm `@/*` alias.
- Confirm `cn()` helper exists.
- Read relevant catalog files before install.
- Install only the components needed for the requested surface.
- Verify with build/lint and browser preview.
