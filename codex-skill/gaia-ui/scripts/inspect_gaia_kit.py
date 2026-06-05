#!/usr/bin/env python3
import argparse
import json
import os
from pathlib import Path

DEFAULT_KIT = Path("/Users/luxlu/Desktop/GAIA")


def kit_path() -> Path:
    return Path(os.environ.get("GAIA_UI_KIT_PATH", DEFAULT_KIT)).expanduser()


def read_manifest(root: Path) -> dict:
    manifest_path = root / "registry-snapshot" / "manifest.json"
    if not manifest_path.exists():
        raise SystemExit(f"Missing GAIA manifest: {manifest_path}")
    return json.loads(manifest_path.read_text())


def main() -> None:
    parser = argparse.ArgumentParser(description="Inspect the local GAIA UI Agent Kit.")
    parser.add_argument("--component", help="Show catalog details for one component slug.")
    parser.add_argument("--json", action="store_true", help="Emit JSON summary.")
    args = parser.parse_args()

    root = kit_path()
    manifest = read_manifest(root)

    if args.component:
        slug = args.component.strip().lower()
        catalog = root / "components-catalog" / f"{slug}.md"
        item = root / "registry-snapshot" / "items" / f"{slug}.json"
        if not catalog.exists() or not item.exists():
            available = ", ".join(c["name"] for c in manifest["components"])
            raise SystemExit(f"Unknown component '{slug}'. Available: {available}")

        if args.json:
            payload = {
                "kit": str(root),
                "component": slug,
                "catalog": str(catalog),
                "registryItem": str(item),
                "data": json.loads(item.read_text()),
            }
            print(json.dumps(payload, indent=2))
        else:
            print(catalog.read_text())
        return

    summary = {
        "kit": str(root),
        "generatedAt": manifest.get("generatedAt"),
        "itemCount": manifest.get("itemCount"),
        "components": [c["name"] for c in manifest.get("components", [])],
    }

    if args.json:
        print(json.dumps(summary, indent=2))
    else:
        print(f"GAIA UI kit: {summary['kit']}")
        print(f"Generated at: {summary['generatedAt']}")
        print(f"Components: {summary['itemCount']}")
        print(", ".join(summary["components"]))


if __name__ == "__main__":
    main()
