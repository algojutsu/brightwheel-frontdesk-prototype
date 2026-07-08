# LLM wiki

This is the compiled project memory for SproutDesk. It is structured so an LLM
agent can quickly load the minimum context needed for a task, then follow links
to deeper pages.

## How to read this wiki

For most tasks:

1. Read this page.
2. Read [Problem statement](PROBLEM_STATEMENT.md).
3. Read the task-specific page:
   - product or scope work → [Requirements](REQUIREMENTS.md) and [Design](DESIGN.md)
   - implementation work → [Architecture](ARCHITECTURE.md) and [Operations](OPERATIONS.md)
   - review or submission work → [Submission summary](SUBMISSION.md)
4. Check [Decision log](DECISIONS.md) before changing architecture or product
   behavior.
5. Check [Error book](ERROR_BOOK.md) for known pitfalls.

## Canonical project facts

- App name: SproutDesk.
- Fictional center: Little Sprouts Early Learning.
- Assignment target: brightwheel AI Front Desk take-home prototype.
- Implementation: static HTML, CSS, and dependency-free JavaScript.
- Runtime persistence: browser `localStorage`.
- Deployment target: static hosting from repo root, especially GitHub Pages.
- Data policy: fictional data only; no real child, parent, staff, or center
  records.
- Product stance: a useful AI front desk should answer routine questions from
  center-authored sources and escalate ambiguity rather than hallucinate.

## Wiki graph

```text
LLM_WIKI.md
├── PROBLEM_STATEMENT.md       assignment, user goal, success criteria
├── REQUIREMENTS.md            functional and non-functional requirements
├── MARKET_CONTEXT.md          brightwheel/early education domain context
├── DESIGN.md                  product thesis, UX model, flows, omissions
├── ARCHITECTURE.md            implementation model, data, answer engine
├── OPERATIONS.md              run, validate, demo, host
├── DECISIONS.md               durable product/technical decisions
├── ERROR_BOOK.md              known traps and how to avoid repeating them
└── SUBMISSION.md              concise reviewer-facing summary
```

## Source-of-truth hierarchy

When docs disagree, use this order:

1. User's latest instruction in the conversation.
2. [Problem statement](PROBLEM_STATEMENT.md) and [Requirements](REQUIREMENTS.md).
3. [Design](DESIGN.md) for product intent.
4. [Architecture](ARCHITECTURE.md) for technical implementation.
5. `app.js`, `index.html`, and `styles.css` for current behavior.

## Current product shape

The prototype has two perspectives:

- Parent view: prompt chips, free-text question input, source-backed answers,
  parent-visible AI traces, honest unsupported states, and handoff cards.
- Staff view: overview metrics, conversations, assignment/routing, dynamic
  knowledge gaps, AI decision traces, source editing, source creation, closed
  source-linked conversations, and reset.

The key differentiator is the closed loop:

```text
family question → grounded answer or escalation → staff signal
→ source edit/create → future answer changes
```

## Agent task recipes

### Add or change product behavior

1. Confirm the behavior is consistent with [Requirements](REQUIREMENTS.md).
2. Update seed data or answer rules in `app.js`.
3. Preserve sensitive-topic escalation before keyword matching.
4. Preserve the handbook boundary: generic policy questions can mention a child
   name, but child-specific progress, homework, assignment, or daily-status
   questions must defer to staff.
5. Update docs if behavior changes.
6. Run checks in [Operations](OPERATIONS.md).

### Change visual design

1. Keep the parent view usable at 360 px width.
2. Preserve focus states and non-color-only status labels.
3. Do not add external font/runtime assets.
4. Validate with the demo script in [Operations](OPERATIONS.md).

### Prepare for submission

1. Confirm [Submission summary](SUBMISSION.md) matches current behavior.
2. Run the quick checks in [Operations](OPERATIONS.md).
3. Ensure `git status --short --ignored` has no untracked publishable files.
4. Host through GitHub Pages, Netlify Drop, or Vercel.

## Open product questions

- Whether to include a short video walkthrough or rely on the hosted prototype
  plus `SUBMISSION.md`.
- Whether to brand the public repo as `sproutdesk` or a more explicit
  take-home name such as `brightwheel-ai-frontdesk`.
- Whether to add screenshots before final submission. The current prototype is
  functional without screenshots.
