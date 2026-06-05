import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

type Manifest = {
  generatedAt: string;
  itemCount: number;
  components: Array<{
    name: string;
    title: string;
    description: string;
    dependencies: string[];
    registryDependencies: string[];
    files: Array<{ path: string; hasContent: boolean; sourceUrl: string }>;
  }>;
};

async function readManifest(): Promise<Manifest> {
  const file = await readFile(
    path.join(process.cwd(), "registry-snapshot/manifest.json"),
    "utf8",
  );
  return JSON.parse(file);
}

export default async function CatalogPage() {
  const manifest = await readManifest();

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm font-medium shadow-sm dark:bg-zinc-900"
        >
          <ArrowLeft className="size-4" />
          Demo
        </Link>

        <div className="mb-6 rounded-[28px] border bg-white p-5 shadow-sm dark:bg-zinc-900">
          <h1 className="text-2xl font-semibold tracking-tight">
            GAIA UI Component Catalog
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            {manifest.itemCount} components captured from official GAIA UI sources.
            Generated at {new Date(manifest.generatedAt).toLocaleString()}.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {manifest.components.map((component) => (
            <article
              key={component.name}
              className="flex min-h-56 flex-col rounded-[24px] border bg-white p-4 shadow-sm dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold">{component.title}</h2>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {component.name}
                  </p>
                </div>
                <a
                  href={`https://ui.heygaia.io/docs/components/${component.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                  aria-label={`${component.title} docs`}
                >
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {component.description || "No upstream description."}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {component.dependencies.slice(0, 3).map((dependency) => (
                  <span
                    key={dependency}
                    className="rounded-lg bg-zinc-100 px-2 py-1 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {dependency}
                  </span>
                ))}
                {component.dependencies.length > 3 && (
                  <span className="rounded-lg bg-zinc-100 px-2 py-1 text-[11px] text-zinc-500 dark:bg-zinc-800">
                    +{component.dependencies.length - 3}
                  </span>
                )}
              </div>

              <div className="mt-auto pt-4 text-xs text-zinc-500">
                {component.files.length} file{component.files.length === 1 ? "" : "s"} captured
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
