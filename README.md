# brightwheel Front Desk

brightwheel Front Desk is a functional proof of concept for brightwheel's AI Front Desk
take-home exercise. It demonstrates how an early education center could answer
common parent questions quickly while keeping staff in control of the source of
truth.

The prototype uses only fictional center data. It is intentionally implemented
as a static web app: there are no API keys, accounts, build tools, or backend
services required. It also avoids external runtime assets, so the demo can run
without network access once the files are available.

## What the prototype demonstrates

- A mobile-first parent assistant with guided prompts and free-text questions
- Center-specific answers for policies, menus, daily activities, and program
  updates with visible sources and review dates
- Parent-facing “why this answer” traces for source, confidence, and decision
- Explicit uncertainty handling and human escalation
- Topic-aware staff routing for admin, teacher, front desk, and safety handoffs
- A staff control center showing demand, unresolved questions, and dynamic knowledge gaps
- Editable and creatable knowledge that immediately changes future answers
- Browser-local persistence, plus a one-click demo reset

For agent-readable context, start with [AGENTS.md](AGENTS.md) and
[LLM wiki](docs/LLM_WIKI.md). The core project docs are
[Problem statement](docs/PROBLEM_STATEMENT.md), [Requirements](docs/REQUIREMENTS.md),
[Market and domain context](docs/MARKET_CONTEXT.md),
[Product and UX design](docs/DESIGN.md), [Technical architecture](docs/ARCHITECTURE.md),
[Operations](docs/OPERATIONS.md), [Decision log](docs/DECISIONS.md),
[Test scenarios](docs/TEST_SCENARIOS.md), [Error book](docs/ERROR_BOOK.md), and the concise
[Submission summary](docs/SUBMISSION.md).

## Run locally

No install is required. From this directory:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Opening `index.html` directly also works in most browsers, but a local server is
recommended.

## Demo walkthrough

1. Start in **Parent view** and ask “Can Maya come in with a fever?”
2. Open the cited Health & wellness source.
3. Open **Why this answer?** to see the simulated AI decision trace.
4. Ask “When will my kid learn to read?” to see a child-specific classroom handoff.
5. Ask “Can you give Maya medicine?” to see a sensitive-question handoff.
6. Ask an unsupported question such as “Do you offer weekend care?” and send it
   to the center.
7. Switch to **Staff view** and inspect how the conversation is routed and
   surfaced in the knowledge-gap queue.
8. Click **Draft source from question**, review the prefilled weekend-care
   source, and save it.
9. Return to Parent view and ask about weekend care again. The next answer uses
   the newly published source.

## Hosting

Because the app is static, the fastest options are:

- **Netlify Drop:** drag this folder onto Netlify Drop for a temporary public URL.
- **GitHub Pages:** push the repository to GitHub, then enable Pages from the
  repository root on the default branch.
- **Vercel:** import the repository as a project and select “Other” as the
  framework; no build command is needed and the output directory is `.`.

Deployment is intentionally not performed by this repository because it requires
access to the owner's external hosting account.

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── AGENTS.md
├── docs/
│   ├── LLM_WIKI.md
│   ├── PROBLEM_STATEMENT.md
│   ├── REQUIREMENTS.md
│   ├── MARKET_CONTEXT.md
│   ├── DESIGN.md
│   ├── ARCHITECTURE.md
│   ├── OPERATIONS.md
│   ├── DECISIONS.md
│   ├── TEST_SCENARIOS.md
│   ├── ERROR_BOOK.md
│   └── SUBMISSION.md
└── README.md
```

## Limitations

- The answer engine is deterministic and intent-based, not a live LLM or RAG
  service.
- AI behavior is simulated through visible safety checks, source matching,
  confidence states, and review-required draft generation.
- Data persists only in the current browser through `localStorage`.
- “Send to center” creates an in-app escalation; it does not send a real message.
- Staff publishing a new source updates prototype state immediately; production
  would require approval history, permissions, and audit trails.
- Authentication, multi-center tenancy, ingestion, analytics pipelines, and
  production safety review are outside this prototype's scope.
