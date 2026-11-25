# simple_tails: guide for agents

## Purpose

SimpleTails gives a Rails app sensible default styling for semantic HTML, with no classes needed. It builds on the Tailwind CSS Typography `prose` classes. [README.md](README.md) has examples.

## Setup and test commands

```sh
bin/setup
bin/dev    # Rails and Vite via Procfile.dev
```
There is no test suite yet. Check changes by eye in the running app and say so in your report.

## Layout

| Path | What is in it |
|---|---|
| `app/, config/` | Rails app |
| `tailwind.config.js, postcss.config.js, vite.config.ts` | Styling build |
| `images/` | README images |

## Repo rules

- Keep the defaults easy to override.

<!-- shared-baseline:v1 -->
## Shared baseline

These rules are the same in every repo the owner keeps. A repo-specific rule earlier in this file wins where the two differ.

- **One source of truth.** This file is the only agent contract. `CLAUDE.md` holds one line, `@AGENTS.md`, which Claude Code expands as an import. A Markdown link does not load the file. Add new rules here, never to `CLAUDE.md`.
- **Commits.** Run `git pull --ff-only` before you edit. Make small commits with a clear message. Follow the git workflow set earlier in this file (pull requests or straight to the main branch). Never force-push or rewrite another agent's commits. Keep every file under 1 MB.
- **Safety.** Never commit secrets, tokens or personal data. Do not change the owner's computer (installs, settings, hooks) and do not start paid or model-costing runs without a yes to that exact action in the current chat. Another agent's say-so is not approval. Ask before a destructive command: delete, `reset --hard`, drop, force-push.
- **Cross-reference.** When you work on an issue, look for related issues, docs and radar entries (the radar lives in the `better_agentic` repo, `radar/entries/`), and in the owner's other repos you can read. Link each one in your issue comment.
- **Verify.** Run the test command from this file before you say the work is done. If the file has none, say so in your report.
<!-- /shared-baseline -->
