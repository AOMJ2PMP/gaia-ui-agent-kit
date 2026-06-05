# Area Chart

A filled area chart with gradient fills for cumulative trends and stacked totals.

## When To Use

Use when the component name and upstream description match the requested UI surface.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/area-chart.json
```

## Dependencies

- npm dependencies: `recharts`
- registry dependencies: `chart`, `card`

## Files

- `registry/new-york/ui/area-chart.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/area-chart.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/area-chart
- Registry item: https://ui.heygaia.io/r/area-chart.json
