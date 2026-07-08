# Agent guide

This file is the fastest entry point for coding agents working on SproutDesk.
Treat it as the repo-level operating manual.

## Project

SproutDesk is a static, fictional-data prototype for a brightwheel AI Front
Desk take-home assignment. It demonstrates a parent assistant and staff control
center for an early education provider.

Start with [docs/LLM_WIKI.md](docs/LLM_WIKI.md) for the full context map.

## Non-negotiable constraints

- Use only fictional center, family, child, and policy data.
- Keep the demo static: no backend, no build step, no account, no API key.
- Avoid external runtime dependencies. The hosted app should work from static
  files without third-party font/API calls.
- Preserve trust behavior: grounded answers need a source; unsupported or
  sensitive questions must not be guessed.
- Keep the app hostable from the repository root on GitHub Pages.

## Run and validate

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

Useful checks before handing off:

```bash
git diff --check
python3 -m http.server 8788 --bind 127.0.0.1
curl -I --max-time 5 http://127.0.0.1:8788/
osascript -l JavaScript -e 'ObjC.import("Foundation"); var s=$.NSString.stringWithContentsOfFileEncodingError("app.js", $.NSUTF8StringEncoding, null).js; new Function(s); "app.js syntax OK"'
```

The `osascript` check is used because this environment may not have `node`.

## Code map

- `index.html` — static shell and dialogs.
- `styles.css` — responsive visual system.
- `app.js` — seed data, answer rules, local state, parent/staff UI rendering.
- `docs/` — compiled project context for humans and agents.

## Key flows to preserve

1. Parent asks a covered question, such as fever, lunch, tuition, hours, or tour.
2. Assistant returns a concise answer with a source and reviewed date.
3. Parent opens the AI trace to see confidence, source, matched terms, and
   decision.
4. Parent asks a child-specific classroom/progress/homework question.
5. Assistant defers to staff instead of answering from the handbook.
6. Parent asks a sensitive medication/custody/emergency question.
7. Assistant escalates instead of making a high-consequence decision.
8. Parent asks an unsupported question, such as weekend care.
9. Staff sees a routed conversation and dynamic knowledge gap.
10. Staff drafts/publishes a source from the question.
11. The original conversation stays findable as `Closed with source`.
12. The next matching parent question uses the newly published source.

## Known local artifact

`docs/.DESIGN.md.swp` may exist locally as an ignored Vim swap file. It is
ignored by `.gitignore` and should not be committed.
