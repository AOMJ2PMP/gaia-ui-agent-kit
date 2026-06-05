"use client";

import { useMemo, useState } from "react";
import {
  Archive,
  BookOpen,
  Bot,
  ChevronRight,
  GitBranch,
  Layers3,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Composer, type Tool, type UploadedFile } from "@/registry/new-york/ui/composer";
import { ChatMessage } from "@/registry/new-york/ui/message-bubble";
import { ModelSelector, type AIModel } from "@/registry/new-york/ui/model-selector";
import { NotificationCard } from "@/registry/new-york/ui/notification-card";
import { PricingCard } from "@/registry/new-york/ui/pricing-card";
import { RaisedButton } from "@/registry/new-york/ui/raised-button";
import { StatRow } from "@/registry/new-york/ui/stat-row";
import { ToolCallsSection, type ToolCallEntry } from "@/registry/new-york/ui/tool-calls-section";
import { priorityConfig, type TodoPriority } from "@/registry/new-york/ui/todo-item";
import { WaveSpinner } from "@/registry/new-york/ui/wave-spinner";
import { WorkflowCard, type WorkflowStep } from "@/registry/new-york/ui/workflow-card";

const tools: Tool[] = [
  {
    name: "sync_gaia_registry",
    category: "development",
    description: "Refresh registry snapshots and component catalog.",
  },
  {
    name: "write_agent_recipe",
    category: "memory",
    description: "Turn component patterns into AGENTS.md guidance.",
  },
  {
    name: "compose_demo_screen",
    category: "creative",
    description: "Assemble components into a product-ready surface.",
  },
  {
    name: "audit_component_usage",
    category: "support",
    description: "Check imports, dependencies, and accessibility states.",
  },
];

const files: UploadedFile[] = [
  {
    id: "registry",
    name: "registry-snapshot/manifest.json",
    type: "application/json",
    url: "#",
    description: "39 captured components",
  },
  {
    id: "rules",
    name: "AGENTS.md",
    type: "text/markdown",
    url: "#",
    description: "Agent rules",
  },
];

const toolCalls: ToolCallEntry[] = [
  {
    tool_name: "sync_gaia_registry",
    tool_category: "development",
    integration_name: "Registry Sync",
    message: "Captured GAIA UI source from docs, llms.txt, registry, and GitHub.",
    output: JSON.stringify({ components: 39, missingContent: 0 }, null, 2),
  },
  {
    tool_name: "write_agent_recipe",
    tool_category: "memory",
    integration_name: "Agent Memory",
    message: "Mapped components to chat, workflow, dashboard, pricing, and upload recipes.",
  },
  {
    tool_name: "compose_demo_screen",
    tool_category: "creative",
    integration_name: "Demo Builder",
    message: "Built a Next.js workspace with official GAIA registry components.",
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    id: "sync",
    title: "Sync registry",
    description: "Fetch docs and source",
    toolCategory: "development",
  },
  {
    id: "catalog",
    title: "Write catalog",
    description: "Generate per-component Markdown",
    toolCategory: "memory",
  },
  {
    id: "demo",
    title: "Render demo",
    description: "Compose product screens",
    toolCategory: "creative",
  },
];

const models: AIModel[] = [
  {
    id: "gaia-default",
    name: "GAIA Product Agent",
    provider: "Local recipe",
    isPro: true,
    description: "Best for chat, workflow, and assistant surfaces.",
  },
  {
    id: "gaia-docs",
    name: "GAIA Docs Agent",
    provider: "Registry snapshot",
    description: "Best for install commands and prop lookup.",
  },
  {
    id: "gaia-design",
    name: "GAIA Design Agent",
    provider: "Demo patterns",
    description: "Best for landing pages and app shells.",
  },
];

const tasks: Array<{
  title: string;
  description: string;
  priority: TodoPriority;
  status: string;
}> = [
  {
    title: "Prefer Composer for agent input",
    description: "Use it when files, slash commands, or tool routing are needed.",
    priority: "high",
    status: "Core",
  },
  {
    title: "Show tool execution explicitly",
    description: "Pair chat responses with ToolCallsSection for trust and auditability.",
    priority: "medium",
    status: "Pattern",
  },
  {
    title: "Keep registry snapshots current",
    description: "Run the sync script before major GAIA UI migrations.",
    priority: "low",
    status: "Maintenance",
  },
];

const componentGroups = [
  {
    name: "Assistant core",
    items: ["Composer", "Slash Command Dropdown", "Message Bubble", "Tool Calls Section"],
  },
  {
    name: "Workflows",
    items: ["Workflow Card", "Todo Item", "Notification Card", "Calendar Event Card"],
  },
  {
    name: "Product surfaces",
    items: ["Pricing Card", "Raised Button", "Model Selector", "Stat Row"],
  },
  {
    name: "Visualization",
    items: ["Knowledge Graph", "Area Chart", "Line Chart", "Gauge Chart"],
  },
];

export function GaiaAgentDemo() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [lastMessage, setLastMessage] = useState(
    "Build me a GAIA-style workflow dashboard with traceable agent actions.",
  );
  const [readNotifications, setReadNotifications] = useState<string[]>([]);

  const visibleNotifications = useMemo(
    () => [
      {
        id: "docs",
        title: "Catalog ready for agents",
        body: "components-catalog now maps every captured component to install commands, source files, and use cases.",
        createdAt: "2026-06-05T21:58:00+08:00",
      },
      {
        id: "demo",
        title: "Demo app imports GAIA registry components",
        body: "The workspace uses Composer, WorkflowCard, ModelSelector, PricingCard, StatRow, and more.",
        createdAt: "2026-06-05T20:45:00+08:00",
      },
    ],
    [],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,187,255,0.16),transparent_32rem),linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] px-4 py-5 text-zinc-950 dark:bg-[radial-gradient(circle_at_top_left,rgba(0,187,255,0.18),transparent_28rem),linear-gradient(180deg,#09090b_0%,#111113_100%)] dark:text-zinc-50 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-5">
        <header className="flex w-full min-w-0 flex-col justify-between gap-4 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 md:flex-row md:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-md dark:bg-white dark:text-zinc-950">
              <Bot className="size-5" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-semibold tracking-tight">GAIA UI Agent Kit</h1>
              <p className="break-words text-sm text-zinc-500 dark:text-zinc-400">
                Registry snapshot, coding-agent rules, and a reusable Next.js demo.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/catalog"
              className="hidden items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:flex"
            >
              <BookOpen className="size-4" />
              Catalog
            </a>
            <RaisedButton color="#00bbff" onClick={() => setLastMessage("Use GAIA UI to build an assistant workspace with files, tools, and workflow cards.")}>
              <Sparkles className="size-4" />
              Try Prompt
            </RaisedButton>
          </div>
        </header>

        <section className="grid min-w-0 gap-5 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          <aside className="flex min-w-0 flex-col gap-4">
            <ModelSelector
              models={models}
              selectedModel={selectedModel}
              onSelect={setSelectedModel}
            />

            <div className="min-w-0 overflow-hidden rounded-[28px] border bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-zinc-950/70">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Component Groups</h2>
                <Layers3 className="size-4 text-zinc-400" />
              </div>
              <div className="space-y-3">
                {componentGroups.map((group) => (
                  <div key={group.name} className="rounded-2xl bg-zinc-100/70 p-3 dark:bg-zinc-900">
                    <div className="mb-2 text-xs font-semibold uppercase text-zinc-500">
                      {group.name}
                    </div>
                    <div className="flex min-w-0 flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="shrink-0 rounded-lg bg-white px-2 py-1 text-[11px] text-zinc-600 shadow-sm dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <PricingCard
              title="Agent Kit"
              price={0}
              description="A local reference pack for Codex, Claude Code, Cursor, and any coding agent."
              features={["Official source snapshots", "Agent rules and recipes", "Runnable Next.js demo"]}
              featuresTitle="Included"
              buttonLabel="Local"
              buttonFootnote="No service key required"
            />
          </aside>

          <section className="flex min-w-0 flex-col gap-4 rounded-[32px] border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/75">
            <div className="flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Assistant Workspace Demo</h2>
                <p className="max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">
                  This screen composes official GAIA registry components into a practical agent-product surface.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 px-3 py-2 text-xs text-zinc-500 dark:bg-zinc-900">
                <WaveSpinner size="sm" color="primary" dotShape="rounded" />
                Synced 39 components
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
              <div className="flex min-w-0 flex-col gap-4">
                <div className="rounded-[24px] bg-zinc-50 p-4 dark:bg-zinc-900/80">
                  <ChatMessage
                    variant="received"
                    timestamp="9:41 AM"
                    messages={[
                      "I found GAIA UI's registry and docs.",
                      "Want me to turn it into reusable rules, demos, and component recipes?",
                    ]}
                  />
                  <ChatMessage
                    variant="sent"
                    timestamp="9:42 AM"
                    messages={[lastMessage]}
                    className="mt-4"
                  />
                  <div className="mt-5">
                    <ToolCallsSection toolCalls={toolCalls} defaultExpanded className="w-full max-w-full" />
                  </div>
                </div>

                <Composer
                  placeholder="Ask for a GAIA UI page, workflow, or component recipe..."
                  tools={tools}
                  attachedFiles={files}
                  onRemoveFile={() => undefined}
                  onToolSelect={(tool) => setLastMessage(`Run /${tool.name} for ${tool.category}`)}
                  onSubmit={(message) => setLastMessage(message || "Use the attached GAIA registry context.")}
                  contextOptions={[
                    {
                      id: "snapshot",
                      label: "Attach registry snapshot",
                      description: "Use manifest and source files as grounding context",
                    },
                    {
                      id: "recipe",
                      label: "Attach recipe",
                      description: "Use recipes for the requested product surface",
                    },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-3">
                <WorkflowCard
                  title="GAIA UI Reference Builder"
                  description="Sync official component source, generate catalog docs, and render a verified demo."
                  steps={workflowSteps}
                  totalExecutions={1280}
                  triggerLabel="Manual or scheduled"
                  actionLabel="Run"
                  variant="user"
                  isActivated
                  onAction={() => setLastMessage("Run the registry sync and regenerate catalog docs.")}
                />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <StatRow title="Components" value="39" trend="up" trendLabel="+11 found" />
                  <StatRow title="Missing source" value="0" trend="neutral" trendLabel="clean" />
                </div>
                <AgentTaskList />
              </div>
            </div>
          </section>

          <aside className="flex min-w-0 flex-col gap-4">
            <div className="rounded-[28px] border bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-zinc-950/70">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Agent Files</h2>
                <Archive className="size-4 text-zinc-400" />
              </div>
              <div className="space-y-2">
                {[
                  ["AGENTS.md", "Rules for Codex/Cursor-style agents"],
                  ["CLAUDE.md", "Claude Code pointer to AGENTS.md"],
                  [".cursor/rules/gaia-ui.mdc", "Cursor rule file"],
                  ["registry-snapshot/manifest.json", "Captured upstream source map"],
                  ["recipes/*.md", "Reusable product patterns"],
                ].map(([name, detail]) => (
                  <div key={name} className="rounded-2xl bg-zinc-100/70 p-3 dark:bg-zinc-900">
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate font-mono text-xs text-zinc-800 dark:text-zinc-100">
                        {name}
                      </span>
                      <ChevronRight className="size-3.5 shrink-0 text-zinc-400" />
                    </div>
                    <p className="mt-1 text-xs text-zinc-500">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {visibleNotifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  {...notification}
                  status={readNotifications.includes(notification.id) ? "read" : "unread"}
                  onMarkAsRead={(id) => setReadNotifications((prev) => [...prev, id])}
                  actions={[
                    {
                      id: "open",
                      label: "Open",
                      type: "redirect",
                      style: "primary",
                    },
                  ]}
                  onAction={() => setLastMessage(`Open ${notification.title}`)}
                />
              ))}
            </div>

            <a
              href="https://github.com/theexperiencecompany/gaia-ui"
              className="flex items-center justify-between rounded-[24px] border bg-zinc-950 p-4 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-zinc-950"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <GitBranch className="size-4" />
                Upstream GAIA UI
              </span>
              <ChevronRight className="size-4" />
            </a>
          </aside>
        </section>
      </div>
    </main>
  );
}

function AgentTaskList() {
  return (
    <div className="rounded-[24px] bg-zinc-50 p-3 dark:bg-zinc-900/80">
      <div className="mb-2 px-1 text-sm font-semibold">Usage Checklist</div>
      <div className="space-y-2">
        {tasks.map((task) => {
          const style = priorityConfig[task.priority];
          return (
            <div
              key={task.title}
              className={cn("rounded-2xl border-l-4 bg-white p-3 shadow-sm dark:bg-zinc-950", style.borderColor)}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-medium leading-tight">{task.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">{task.description}</p>
                </div>
                <span className={cn("rounded-lg px-2 py-1 text-[10px] font-semibold", style.bgColor, style.textColor)}>
                  {task.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
