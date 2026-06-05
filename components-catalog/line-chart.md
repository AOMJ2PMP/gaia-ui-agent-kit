# Line Chart

A line chart for trends over time with optional dots, labels, and multiple series.

## When To Use

Use when the component name and upstream description match the requested UI surface.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/line-chart.json
```

## Dependencies

- npm dependencies: `recharts`
- registry dependencies: `chart`, `card`

## Files

- `registry/new-york/ui/line-chart.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/line-chart.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/line-chart
- Registry item: https://ui.heygaia.io/r/line-chart.json
