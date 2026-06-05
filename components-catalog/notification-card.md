# Notification Card

An enhanced notification card with action buttons, read/unread states, and timestamp display.

## When To Use

Activity feed, system events, reminders, and unread actionable messages.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/notification-card.json
```

## Dependencies

- npm dependencies: `lucide-react`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/notification-card.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/notification-card.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/notification-card
- Registry item: https://ui.heygaia.io/r/notification-card.json
