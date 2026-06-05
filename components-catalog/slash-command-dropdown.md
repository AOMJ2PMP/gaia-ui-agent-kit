# Slash Command Dropdown

A slash command dropdown for selecting tools and actions with categorization and search.

## When To Use

Tool picker for agent actions, MCP tools, command routing, and power-user shortcuts.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/slash-command-dropdown.json
```

## Dependencies

- npm dependencies: None listed
- registry dependencies: `icons`

## Files

- `registry/new-york/ui/slash-command-dropdown.tsx` (registry:ui; captured)
- `lib/utils/tool-icons.tsx` (registry:lib; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/slash-command-dropdown.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/slash-command-dropdown
- Registry item: https://ui.heygaia.io/r/slash-command-dropdown.json
