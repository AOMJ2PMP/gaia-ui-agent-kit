# Knowledge Graph

An interactive D3.js-powered knowledge graph visualization with zoom, pan, drag, tooltips, and export functionality.

## When To Use

Knowledge maps, memory graphs, source relationships, and entity exploration.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/knowledge-graph.json
```

## Dependencies

- npm dependencies: `d3`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/knowledge-graph.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/knowledge-graph.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/knowledge-graph
- Registry item: https://ui.heygaia.io/r/knowledge-graph.json
