# Product and UX design

## Product thesis

The valuable product is not a chatbot that always answers. It is a front desk
that resolves routine demand, proves where an answer came from, and converts
uncertainty into a manageable staff workflow.

The prototype is called **SproutDesk** and uses the fictional **Little Sprouts
Early Learning** center.

In production, SproutDesk should be a capability inside brightwheel rather than
a new standalone destination. Brightwheel already has the center, classroom,
family, calendar, billing, and messaging context needed to provide a specific
answer and route an exception. The standalone shell exists only to make both
perspectives easy to evaluate in this prototype.

## Experience model

### Parent: answer, evidence, next step

Each response is designed around three layers:

1. A direct answer in plain language
2. A compact trust cue showing the source and review date
3. A next step, only when the situation needs one

This is intentionally different from a long, conversational AI response. Parents
are often asking while coordinating work and care; the useful interface is short,
specific, and scannable.

### Staff: signal, diagnose, improve

The control center follows a closed loop:

```text
Family asks → assistant answers or escalates → staff sees the outcome
→ staff updates knowledge → future answer improves
```

The overview reports outcomes, the inbox exposes individual conversations, and
the knowledge area is the intervention point.

## Key design decisions

### Two modes in one app

A persistent Parent/Staff switch makes the two-sided concept easy to evaluate
without authentication or separate URLs. In production these would be distinct,
permissioned surfaces.

### Confidence is translated into behavior

The UI does not show a fake percentage to parents. Confidence controls one of
three understandable states:

- **Answered:** a matching, reviewed source exists.
- **Needs context:** the policy is relevant but a person should decide.
- **Sent to staff:** the center lacks a source or the topic is sensitive.

The staff view can see these states and their underlying signals.

### Sources are first-class

Source chips open the exact center policy used for an answer. This makes
trustworthiness inspectable and gives operators a direct route to correct the
system.

### Human handoff preserves context

Escalation carries the original question and detected topic into the staff inbox.
The prototype does not pretend to send a real message; the state change is
clearly labeled as a demo.

Production routing should use brightwheel roles and classroom context. A tuition
exception goes to an administrator, a forgotten item may go to the classroom,
and medication or custody questions go only to designated staff. This matters in
a domain where teachers are frequent mobile users but should not become the
catch-all front desk.

### Fictional but realistic data

Policies include dates, exceptions, price bands, and operational language. This
creates enough specificity to demonstrate grounding without using personal or
proprietary data.

## Primary flows

### Grounded parent answer

1. Parent chooses a prompt or types a question.
2. Assistant identifies a covered topic.
3. A concise answer appears with a source chip and review date.
4. Parent can inspect the full policy.

### Sensitive or ambiguous question

1. Parent asks about medication, symptoms, custody, or another high-risk case.
2. Assistant states what it can safely say.
3. The UI recommends contacting the center and carries the question forward.

### Knowledge-gap improvement

1. An unsupported question produces an honest limitation and escalation option.
2. The conversation appears in the staff inbox and gap queue.
3. Staff edits or adds the relevant source of truth.
4. Future matching questions use the improved knowledge.

## Visual direction

- Warm green and cream communicate care without imitating brightwheel branding.
- Parent view uses a focused phone-like conversation canvas.
- Staff view becomes a denser responsive dashboard.
- Rounded cards and restrained shadows create approachability while typography,
  labels, and status treatments keep operational information precise.

## Accessibility

- Semantic buttons, forms, headings, and navigation
- Visible keyboard focus
- Live-region announcements for new assistant messages
- Status communicated through labels and icons, not color alone
- Motion reduced when the operating system requests it

## Deliberate omissions

- Voice input: useful, but permission prompts and transcription variance weaken a
  short hosted demo.
- Live LLM: would introduce cost, latency, and nondeterministic safety behavior.
- Real outbound messaging: requires credentials and creates external side effects.
- Full handbook ingestion: the assignment explicitly values response quality over
  parsing.
- New parent onboarding: an embedded brightwheel experience would already know
  the authenticated family, center, and classroom.
