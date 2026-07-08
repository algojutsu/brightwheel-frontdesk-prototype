# Error book

This page captures known pitfalls and corrections for future agents.

## Do not rely on port 4173 being this app

Observed issue: port `4173` was already serving an unrelated local app in one
session.

Correction: verify response content with `curl`, or use a fresh port such as
`8788`.

## Browser automation may be unavailable

Observed issue: the in-app/browser Node tooling failed with sandbox metadata
errors in this environment.

Correction: use local HTTP checks, static HTML parsing, and macOS
`osascript -l JavaScript` for JS syntax checks when Node/browser automation is
unavailable.

## Keep sensitive matching before policy matching

Medication, custody, emergency, and similar subjects must be detected before
generic keyword matching. Otherwise a health policy could incorrectly produce a
grounded-looking answer for a high-consequence question.

Relevant code: `answerQuestion()` in `app.js`.

## Do not add external runtime dependencies casually

The app previously loaded Google Fonts, which conflicted with the requirement
that no network request be required during the demo.

Correction: use system fonts or local assets only.

## Local storage can hide seed-data changes

The app persists demo state in `localStorage`. If seed data changes but the
storage key stays the same, reviewers may see stale browser state.

Correction: bump `STORAGE_KEY` when seed state changes materially, or use Reset
demo data.

## Ignored Vim swap file may appear

`docs/.DESIGN.md.swp` may exist locally and is binary. It is ignored by
`.gitignore`. Do not stage or discuss it as a publishable file.

## Do not introduce real data

All names, phone numbers, policies, prices, and family/child references must
remain fictional. If adding examples, preserve this pattern.

## Preserve the weekend-care proof path

The most complete demo path depends on weekend care being unsupported until the
staff user publishes a new source. Avoid adding weekend-care coverage to seed
knowledge unless the demo script is updated.

## Avoid substring keyword matches

Observed issue: the health keyword `ill` matched inside the word `will`, causing
`When will my kid learn to read?` to incorrectly return the fever policy.

Correction: keyword matching must use normalized word/phrase boundaries. Keep
regression coverage for:

- `Can Maya come with a fever?` → Health policy answer.
- `When will my kid learn to read?` → Classroom staff handoff.
- `What did Maya eat today?` → Classroom staff handoff.
- `What is lunch today?` → Meals source answer.
