# Goal Card

A card component for displaying goal progress with status indicators and step tracking.

## When To Use

Use when the component name and upstream description match the requested UI surface.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/goal-card.json
```

## Dependencies

- npm dependencies: `lucide-react`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/goal-card.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/goal-card.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/goal-card
- Registry item: https://ui.heygaia.io/r/goal-card.json
