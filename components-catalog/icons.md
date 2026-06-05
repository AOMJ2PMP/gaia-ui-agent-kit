# Icons

Hugeicons wrapper for all components. Uses free icons by default - upgrade to Pro by changing imports.

## When To Use

Use when the component name and upstream description match the requested UI surface.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/icons.json
```

## Dependencies

- npm dependencies: `@hugeicons/react`, `@hugeicons/core-free-icons`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/icons.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/icons.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/icons
- Registry item: https://ui.heygaia.io/r/icons.json
