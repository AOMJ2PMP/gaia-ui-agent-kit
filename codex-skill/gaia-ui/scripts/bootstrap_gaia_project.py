#!/usr/bin/env python3
import argparse
import json
import os
import shutil
from datetime import datetime, timezone
from pathlib import Path

DEFAULT_KIT = Path("/Users/luxlu/Desktop/GAIA")
REPO_URL = "https://github.com/AOMJ2PMP/gaia-ui-agent-kit"


def kit_path() -> Path:
    return Path(os.environ.get("GAIA_UI_KIT_PATH", DEFAULT_KIT)).expanduser()


def copy_file(src: Path, dst: Path) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)


def upsert_agents_section(target: Path, kit: Path) -> None:
    agents_path = target / "AGENTS.md"
    marker_start = "<!-- BEGIN:gaia-ui-skill -->"
    marker_end = "<!-- END:gaia-ui-skill -->"
    section = f"""{marker_start}
## GAIA UI

Use the GAIA UI Agent Kit when building assistant, workflow, dashboard, pricing, or agent UI:

- Local kit: `{kit}`
- Public kit: {REPO_URL}
- Target-local quickstart: `docs/gaia-ui/agent-quickstart.md`
- Target-local recipes: `docs/gaia-ui/recipes/`

Prefer official registry installs:

```bash
npx shadcn@latest add https://ui.heygaia.io/r/<component-name>.json
```

Read the component catalog before installing or adapting components.
{marker_end}
"""

    if agents_path.exists():
        current = agents_path.read_text()
        if marker_start in current and marker_end in current:
            before = current.split(marker_start)[0].rstrip()
            after = current.split(marker_end, 1)[1].lstrip()
            next_text = f"{before}\n\n{section}\n{after}".rstrip() + "\n"
        else:
            next_text = current.rstrip() + "\n\n" + section
    else:
        next_text = "# Agent Instructions\n\n" + section

    agents_path.write_text(next_text)


def main() -> None:
    parser = argparse.ArgumentParser(description="Seed a project with GAIA UI agent guidance.")
    parser.add_argument("target", help="Target project directory.")
    parser.add_argument("--with-catalog", action="store_true", help="Copy component catalog and manifest into docs/gaia-ui.")
    args = parser.parse_args()

    target = Path(args.target).expanduser().resolve()
    kit = kit_path()

    if not target.exists() or not target.is_dir():
        raise SystemExit(f"Target project does not exist: {target}")
    if not kit.exists() or not (kit / "AGENTS.md").exists():
        raise SystemExit(f"GAIA UI kit not found or incomplete: {kit}")

    gaia_docs = target / "docs" / "gaia-ui"
    copy_file(kit / "docs" / "agent-quickstart.md", gaia_docs / "agent-quickstart.md")
    copy_file(kit / "docs" / "design-notes.md", gaia_docs / "design-notes.md")

    recipes_src = kit / "recipes"
    recipes_dst = gaia_docs / "recipes"
    if recipes_dst.exists():
        shutil.rmtree(recipes_dst)
    shutil.copytree(recipes_src, recipes_dst)

    cursor_rule = kit / ".cursor" / "rules" / "gaia-ui.mdc"
    if cursor_rule.exists():
        copy_file(cursor_rule, target / ".cursor" / "rules" / "gaia-ui.mdc")

    if args.with_catalog:
        catalog_dst = gaia_docs / "components-catalog"
        if catalog_dst.exists():
            shutil.rmtree(catalog_dst)
        shutil.copytree(kit / "components-catalog", catalog_dst)
        copy_file(kit / "registry-snapshot" / "manifest.json", gaia_docs / "registry-manifest.json")

    upsert_agents_section(target, kit)

    metadata = {
        "kitPath": str(kit),
        "repoUrl": REPO_URL,
        "bootstrappedAt": datetime.now(timezone.utc).isoformat(),
        "withCatalog": args.with_catalog,
    }
    (target / ".gaia-ui-kit.json").write_text(json.dumps(metadata, indent=2) + "\n")

    print(json.dumps({
        "target": str(target),
        "added": [
            "AGENTS.md GAIA UI section",
            "docs/gaia-ui/agent-quickstart.md",
            "docs/gaia-ui/design-notes.md",
            "docs/gaia-ui/recipes/",
            ".cursor/rules/gaia-ui.mdc",
            ".gaia-ui-kit.json",
        ] + (["docs/gaia-ui/components-catalog/", "docs/gaia-ui/registry-manifest.json"] if args.with_catalog else []),
    }, indent=2))


if __name__ == "__main__":
    main()
