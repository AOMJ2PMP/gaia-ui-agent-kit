# Weather Card

A beautiful, interactive weather card component with forecast, detailed metrics, and multiple weather conditions support.

## When To Use

Use when the component name and upstream description match the requested UI surface.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/weather-card.json
```

## Dependencies

- npm dependencies: None listed
- registry dependencies: `icons`

## Files

- `registry/new-york/ui/weather-card.tsx` (registry:ui; captured)
- `registry/new-york/ui/weather-detail-item.tsx` (registry:ui; captured)
- `registry/new-york/ui/weather-icons.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/weather-card.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/weather-card
- Registry item: https://ui.heygaia.io/r/weather-card.json
