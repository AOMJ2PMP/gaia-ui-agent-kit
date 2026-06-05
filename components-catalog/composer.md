# Composer

A chat message input component with file attachments, auto-growing textarea, and tool integration support.

## When To Use

Primary AI input surface with slash commands, attachments, and submit handling.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/composer.json
```

## Dependencies

- npm dependencies: None listed
- registry dependencies: `icons`, `file-preview`, `slash-command-dropdown`

## Files

- `registry/new-york/ui/composer.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/composer.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/composer
- Registry item: https://ui.heygaia.io/r/composer.json
