# File Dropzone

A drag-and-drop file upload zone with preview, validation, and file management.

## When To Use

Attachment intake for chat, document upload, and analysis flows.

## Install

```bash
npx shadcn@latest add https://ui.heygaia.io/r/file-dropzone.json
```

## Dependencies

- npm dependencies: `lucide-react`
- registry dependencies: None listed

## Files

- `registry/new-york/ui/file-dropzone.tsx` (registry:ui; captured)

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually `@/*`.
- Check `registry-snapshot/items/file-dropzone.json` for exact upstream source before editing behavior.

## URLs

- Docs: https://ui.heygaia.io/docs/components/file-dropzone
- Registry item: https://ui.heygaia.io/r/file-dropzone.json
