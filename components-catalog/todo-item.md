# Todo Item

An interactive todo item with priority colors, due dates, labels, and subtask support.

## When To Use

Task queues, agent-generated checklists, review queues, and goal subtasks.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/todo-item.json
```

## Dependencies

- npm dependencies: `lucide-react`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/todo-item.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/todo-item.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/todo-item
- Registry item: https://ui.heygaia.io/r/todo-item.json
