# Decision log

This page records durable decisions so future agents do not have to rediscover
the same context.

## 1. Static app over full-stack app

Decision: implement SproutDesk as static HTML, CSS, and JavaScript.

Reasoning:

- The assignment values a persuasive prototype, not production infrastructure.
- Static hosting is fast, free, and reliable.
- No API keys, accounts, backend deploys, or build steps are required.

Tradeoff:

- No real authentication, multi-tenant database, message delivery, or audit
  trail. These are documented as production evolutions.

## 2. Deterministic answer engine over live LLM

Decision: use keyword and safety rules instead of a live LLM.

Reasoning:

- Reviewers get deterministic behavior.
- Sensitive health, medication, custody, and emergency cases stay inspectable.
- The demo cannot fail due to model latency, API limits, or missing credentials.

Tradeoff:

- It does not demonstrate natural language breadth. The prototype instead
  demonstrates product behavior and trust boundaries.

## 3. Sources are first-class UI

Decision: every grounded answer shows a source chip and review date.

Reasoning:

- In childcare, wrong answers can affect money, work, health, or safety.
- Source visibility is the clearest way to make AI answers inspectable.

Tradeoff:

- Answers are intentionally short and policy-like rather than chatty.

## 4. Escalation is a product state

Decision: unsupported or sensitive questions become visible staff work, not
generic errors.

Reasoning:

- The useful product is a front desk, not a chatbot that always answers.
- Ambiguity should preserve context and route to staff.

Tradeoff:

- Some questions that an LLM could attempt are deliberately not answered.

## 5. Staff can create knowledge from gaps

Decision: unsupported questions can prefill a new source draft.

Reasoning:

- This completes the feedback loop required by the assignment.
- It shows how an operator improves future automation with a small action.

Tradeoff:

- Prototype publishing is immediate. Production should require permissions,
  versioning, approvals, and audit history.

## 6. Avoid external runtime assets

Decision: use system fonts and local assets only.

Reasoning:

- The requirements say no network request is required during demo.
- GitHub Pages hosting stays simple and robust.

Tradeoff:

- Typography is less custom than using hosted web fonts.
