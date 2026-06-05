# Component Map

## Assistant Core

- `composer`: AI input with attachments, auto-growing textarea, slash tools, context menu.
- `slash-command-dropdown`: tool picker grouped by category.
- `file-preview`: attached file chips, thumbnails, upload state.
- `message-bubble`: iOS-style chat transcript bubbles.
- `tool-calls-section`: expandable trace of agent tool calls.
- `model-selector`: select model/provider mode.

## Workflow And Productivity

- `workflow-card`: automation card with tool categories, run count, trigger, action.
- `notification-card`: actionable notifications and activity feed.
- `calendar-event-card`: meeting and scheduling cards.
- `todo-item`: priority config and task-list pattern. Check upstream before assuming full component implementation.
- `goal-card`: goal progress and step tracking.

## Product And Marketing

- `raised-button`: tactile CTA with dynamic contrast.
- `pricing-card`: plans, upgrade surfaces, subscription packaging.
- `navbar-menu`: dropdown navigation for product pages.
- `github-stars-button`: social proof for open-source pages.
- `author-tooltip`, `twitter-card`, `link-preview`: rich social/content previews.

## Visualization

- `stat-row`: compact KPI tile.
- `area-chart`, `bar-chart`, `line-chart`, `pie-chart`, `radar-chart`, `scatter-chart`, `gauge-chart`: Recharts-based data visualization.
- `knowledge-graph`: graph relationships for memory, entities, or knowledge maps.

## Presentation And Device Mockups

- `iphone-mockup`: realistic phone frame.
- `chat-demo`: platform-aware chat preview that can sit inside `iphone-mockup`.
- `holo-card`: interactive profile card.
- `wave-spinner`: GAIA loading state.
