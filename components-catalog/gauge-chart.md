# Gauge Chart

A radial gauge for a single value with thresholds, plus text and stacked variants.

## When To Use

Use when the component name and upstream description match the requested UI surface.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/gauge-chart.json
```

## Dependencies

- npm dependencies: `recharts`
- registry dependencies: `chart`

## Files

- `registry/new-york/ui/gauge-chart.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/gauge-chart.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/gauge-chart
- Registry item: https://ui.heygaia.io/r/gauge-chart.json
