# Workflow Card

A card for displaying workflow automations with rotated tool icons, execution stats, and action buttons.

## When To Use

Automation catalog, workflow marketplace, scheduled jobs, and integration recipes.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/workflow-card.json
```

## Dependencies

- npm dependencies: `lucide-react`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/workflow-card.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/workflow-card.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/workflow-card
- Registry item: https://ui.heygaia.io/r/workflow-card.json
