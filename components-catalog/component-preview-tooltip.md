# Component Preview Tooltip

A hover tooltip that shows a live preview of any component.

## When To Use

Use when the component name and upstream description match the requested UI surface.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/component-preview-tooltip.json
```

## Dependencies

- npm dependencies: None listed
- registry dependencies: None listed

## Files

- `registry/new-york/ui/component-preview-tooltip.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/component-preview-tooltip.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/component-preview-tooltip
- Registry item: https://ui.heygaia.io/r/component-preview-tooltip.json
