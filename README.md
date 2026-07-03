# SproutDesk

SproutDesk is a functional proof of concept for brightwheel's AI Front Desk
take-home exercise. It demonstrates how an early education center could answer
common parent questions quickly while keeping staff in control of the source of
truth.

The prototype uses only fictional center data. It is intentionally implemented
as a static web app: there are no API keys, accounts, build tools, or backend
services required. This makes the demo reliable and easy to host.

## What the prototype demonstrates

- A mobile-first parent assistant with guided prompts and free-text questions
- Center-specific answers with visible sources and review dates
- Explicit uncertainty handling and human escalation
- A staff control center showing demand, unresolved questions, and knowledge gaps
- Editable knowledge that immediately changes future answers
- Browser-local persistence, plus a one-click demo reset

See [Requirements](docs/REQUIREMENTS.md),
[Market and domain context](docs/MARKET_CONTEXT.md),
[Product and UX design](docs/DESIGN.md), [Technical architecture](docs/ARCHITECTURE.md),
and the concise [Submission summary](docs/SUBMISSION.md) for the reasoning and
scope.

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
3. Ask “Can you give Maya medicine?” to see a sensitive-question handoff.
4. Ask an unsupported question such as “Do you offer weekend care?” and send it
   to the center.
5. Switch to **Staff view**, inspect the flagged conversation, and open
   **Knowledge**.
6. Edit a policy, save it, and return to Parent view. The next answer uses the
   updated source.

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
├── docs/
│   ├── REQUIREMENTS.md
│   ├── MARKET_CONTEXT.md
│   ├── DESIGN.md
│   ├── ARCHITECTURE.md
│   └── SUBMISSION.md
└── README.md
```

## Limitations

- The answer engine is deterministic and intent-based, not a live LLM or RAG
  service.
- Data persists only in the current browser through `localStorage`.
- “Send to center” creates an in-app escalation; it does not send a real message.
- Authentication, multi-center tenancy, ingestion, analytics pipelines, and
  production safety review are outside this prototype's scope.
