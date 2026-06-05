import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SNAPSHOT_DIR = path.join(ROOT, "registry-snapshot");
const ITEMS_DIR = path.join(SNAPSHOT_DIR, "items");
const SOURCE_DIR = path.join(SNAPSHOT_DIR, "source");
const CATALOG_DIR = path.join(ROOT, "components-catalog");

const SOURCES = {
  docs: "https://ui.heygaia.io/docs",
  llms: "https://ui.heygaia.io/llms.txt",
  registry:
    "https://raw.githubusercontent.com/theexperiencecompany/gaia-ui/main/registry.json",
  rawBase:
    "https://raw.githubusercontent.com/theexperiencecompany/gaia-ui/main",
  itemBase: "https://ui.heygaia.io/r",
  componentDocsBase: "https://ui.heygaia.io/docs/components",
};

const USE_CASES = {
  composer:
    "Primary AI input surface with slash commands, attachments, and submit handling.",
  "slash-command-dropdown":
    "Tool picker for agent actions, MCP tools, command routing, and power-user shortcuts.",
  "tool-calls-section":
    "Execution trace for workflows that call email, calendar, search, code, or automation tools.",
  "message-bubble":
    "Conversational message history, mobile chat previews, and assistant transcripts.",
  "workflow-card":
    "Automation catalog, workflow marketplace, scheduled jobs, and integration recipes.",
  "todo-item":
    "Task queues, agent-generated checklists, review queues, and goal subtasks.",
  "notification-card":
    "Activity feed, system events, reminders, and unread actionable messages.",
  "raised-button":
    "Primary CTAs with GAIA's tactile accent treatment and dynamic text contrast.",
  "pricing-card":
    "Subscription, plan, upgrade, and entitlement presentation.",
  "knowledge-graph":
    "Knowledge maps, memory graphs, source relationships, and entity exploration.",
  "model-selector":
    "Provider/model selection for chat, agent runs, and advanced settings.",
  "stat-row":
    "Compact metrics for dashboards, usage summaries, and product-health strips.",
  "calendar-event-card":
    "Calendar reminders, meeting cards, agenda views, and scheduling workflows.",
  "file-dropzone":
    "Attachment intake for chat, document upload, and analysis flows.",
  "file-preview":
    "Attached file chips, upload states, and document/image previews.",
  "code-block":
    "Generated code, tool output, snippets, and copyable implementation examples.",
};

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "gaia-ui-agent-kit-sync",
      Accept: "application/json,text/plain,text/html,*/*",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }

  return response.text();
}

async function fetchJson(url) {
  return JSON.parse(await fetchText(url));
}

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function componentNamesFromText(text) {
  return new Set(
    Array.from(text.matchAll(/\/docs\/components\/([a-z0-9-]+)/g), (match) =>
      match[1],
    ),
  );
}

async function enrichFile(file) {
  if (file.content) return file;

  const rawUrl = `${SOURCES.rawBase}/${file.path}`;
  try {
    return {
      ...file,
      content: await fetchText(rawUrl),
      sourceUrl: rawUrl,
    };
  } catch (error) {
    return {
      ...file,
      missingContentReason: error.message,
      sourceUrl: rawUrl,
    };
  }
}

function catalogMarkdown(item) {
  const dependencies = item.dependencies?.length
    ? item.dependencies.map((dep) => `\`${dep}\``).join(", ")
    : "None listed";
  const registryDependencies = item.registryDependencies?.length
    ? item.registryDependencies.map((dep) => `\`${dep}\``).join(", ")
    : "None listed";
  const files =
    item.files
      ?.map((file) => {
        const status = file.content ? "captured" : "metadata only";
        return `- \`${file.path}\` (${file.type}; ${status})`;
      })
      .join("\n") || "- No files listed";

  return `# ${item.title || slugToTitle(item.name)}

${item.description || "No description provided by the upstream registry."}

## When To Use

${USE_CASES[item.name] || "Use when the component name and upstream description match the requested UI surface."}

## Install

\`\`\`bash
npx shadcn@latest add https://ui.heygaia.io/r/${item.name}.json
\`\`\`

## Dependencies

- npm dependencies: ${dependencies}
- registry dependencies: ${registryDependencies}

## Files

${files}

## Agent Notes

- Prefer this component over rebuilding the same pattern from generic UI primitives.
- Keep imports aligned with the consuming app's alias, usually \`@/*\`.
- Check \`registry-snapshot/items/${item.name}.json\` for exact upstream source before editing behavior.

## URLs

- Docs: ${SOURCES.componentDocsBase}/${item.name}
- Registry item: ${SOURCES.itemBase}/${item.name}.json
`;
}

async function main() {
  await mkdir(ITEMS_DIR, { recursive: true });
  await mkdir(SOURCE_DIR, { recursive: true });
  await mkdir(CATALOG_DIR, { recursive: true });

  const [docsHtml, llmsText, registry] = await Promise.all([
    fetchText(SOURCES.docs),
    fetchText(SOURCES.llms),
    fetchJson(SOURCES.registry),
  ]);

  const names = new Set(registry.items.map((item) => item.name));
  for (const name of componentNamesFromText(docsHtml)) names.add(name);
  for (const name of componentNamesFromText(llmsText)) names.add(name);

  const registryByName = new Map(registry.items.map((item) => [item.name, item]));
  const items = [];

  for (const name of Array.from(names).sort()) {
    let item;
    try {
      item = await fetchJson(`${SOURCES.itemBase}/${name}.json`);
    } catch {
      item = registryByName.get(name);
    }

    if (!item) continue;

    item = {
      ...item,
      name,
      title: item.title || registryByName.get(name)?.title || slugToTitle(name),
      description: item.description || registryByName.get(name)?.description || "",
      sourceUrls: {
        docs: `${SOURCES.componentDocsBase}/${name}`,
        registryItem: `${SOURCES.itemBase}/${name}.json`,
      },
      files: await Promise.all((item.files || []).map(enrichFile)),
    };

    items.push(item);
    await writeFile(
      path.join(ITEMS_DIR, `${name}.json`),
      `${JSON.stringify(item, null, 2)}\n`,
    );

    for (const file of item.files || []) {
      if (!file.content) continue;
      const target = path.join(SOURCE_DIR, file.path);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, file.content);
    }

    await writeFile(
      path.join(CATALOG_DIR, `${name}.md`),
      catalogMarkdown(item),
    );
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    itemCount: items.length,
    sources: SOURCES,
    components: items.map((item) => ({
      name: item.name,
      title: item.title,
      description: item.description,
      dependencies: item.dependencies || [],
      registryDependencies: item.registryDependencies || [],
      files: (item.files || []).map((file) => ({
        path: file.path,
        type: file.type,
        hasContent: Boolean(file.content),
        sourceUrl: file.sourceUrl || `${SOURCES.rawBase}/${file.path}`,
      })),
    })),
  };

  await writeFile(
    path.join(SNAPSHOT_DIR, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  await writeFile(
    path.join(CATALOG_DIR, "README.md"),
    `# GAIA UI Component Catalog

Generated from official GAIA UI docs, llms.txt, registry metadata, and GitHub source fallback.

## Components

${items
  .map(
    (item) =>
      `- [${item.title || slugToTitle(item.name)}](./${item.name}.md) - ${
        item.description || "No upstream description."
      }`,
  )
  .join("\n")}
`,
  );

  console.log(`Captured ${items.length} GAIA UI components.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
