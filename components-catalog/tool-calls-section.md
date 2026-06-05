# Tool Calls Section

An expandable section showing AI agent tool usage with icons, inputs, and outputs.

## When To Use

Execution trace for workflows that call email, calendar, search, code, or automation tools.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/tool-calls-section.json
```

## Dependencies

- npm dependencies: None listed
- registry dependencies: `icons`

## Files

- `registry/new-york/ui/tool-calls-section.tsx` (registry:ui; captured)
- `registry/new-york/ui/compact-markdown.tsx` (registry:ui; captured)
- `lib/utils/tool-icons.tsx` (registry:lib; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/tool-calls-section.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/tool-calls-section
- Registry item: https://ui.heygaia.io/r/tool-calls-section.json
