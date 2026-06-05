# Model Selector

A dropdown selector for choosing AI models with provider information and pro badges.

## When To Use

Provider/model selection for chat, agent runs, and advanced settings.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/model-selector.json
```

## Dependencies

- npm dependencies: `lucide-react`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/model-selector.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/model-selector.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/model-selector
- Registry item: https://ui.heygaia.io/r/model-selector.json
