# Requirements

## Problem statement

Early education administrators repeatedly answer routine questions by phone,
email, and text. Parents need immediate, accurate answers, but center staff are
busy and handbooks are difficult to search on mobile. A useful AI front desk
must reduce this work without inventing policy or mishandling sensitive issues.

The standalone assignment capture is maintained in
[Problem statement](PROBLEM_STATEMENT.md).

## Users and jobs

### Parent or guardian

- Get a fast answer specific to their child's center.
- Understand why the answer should be trusted.
- Know what to do when a policy does not cleanly answer the situation.
- Reach a person without repeating the full context.

### Center administrator

- Maintain the center's source of truth without technical help.
- See what families ask and which answers are weak or unresolved.
- Improve future answers with a small, clear action.
- Retain control over sensitive or exceptional cases.

### Teacher

- Receive only classroom-relevant questions that require human context.
- Avoid becoming the default destination for billing, enrollment, or policy
  questions.
- See the family question and assistant response without requiring the parent to
  repeat context.

## Functional requirements

### Parent experience

1. Accept free-text questions and offer common guided prompts.
2. Answer center-specific questions about:
   - operating hours and closures;
   - tuition;
   - health and attendance;
   - meals and school menu;
   - center-wide daily activities and program updates;
   - tours.
3. Show the center source and its last-reviewed date for grounded answers.
4. Avoid pretending to know an answer when no source supports it.
5. Route sensitive, ambiguous, or unsupported questions to staff.
6. Preserve the question and relevant context in the handoff.
7. Work comfortably on a phone-sized screen.

### Operator experience

1. Show an overview of inquiry volume, automation, and unresolved demand.
2. List recent conversations with answer status and topic.
3. Make struggling conversations easy to find.
4. Display the knowledge sources used by the assistant.
5. Allow staff to edit a source and have the update affect future answers.
6. Surface knowledge gaps as an improvement queue.
7. Make all prototype state resettable for repeatable demos.

## Trust and response behavior

- A grounded answer must identify its source.
- Health and medication responses must not present medical judgment.
- Individual child progress, homework, assignment, daily-status, or classroom
  context questions must route to staff instead of receiving a generic center
  update.
- Low-confidence or uncovered questions must explicitly state the limitation.
- Escalation must be an intentional product state, not a generic error.
- The system must never use real personal data; all names and policies are
  fictional.

## Non-functional requirements

- No account, API key, or network request is required during the demo.
- The page must be responsive from 360 px mobile widths through desktop.
- Core controls must be keyboard accessible and visibly focusable.
- Content must remain readable with sufficient contrast.
- Prototype data must be deterministic and recoverable after a reset.
- The codebase must be hostable as static files.

## Domain requirements

- The future production experience should integrate with existing brightwheel
  family communications rather than create another disconnected operator inbox.
- Center-authored policies must take precedence over generic early-education
  guidance.
- Knowledge and handoffs should be scoped by center and, where appropriate,
  classroom.
- Regulated or high-consequence topics must have explicit safety and escalation
  rules.
- Handoffs should route by topic: billing and enrollment to administrators,
  classroom logistics to teachers, and health or safety exceptions to designated
  staff.

## Success criteria

- A reviewer can complete both core perspectives in under five minutes.
- At least one grounded, one sensitive, and one unsupported question visibly
  produce different, appropriate outcomes.
- A staff source edit changes the next relevant parent answer.
- A weak answer creates a visible feedback loop in the control center.
- The demo is persuasive without relying on a scripted explanation.

## Scope decisions

The prototype prioritizes breadth with depth in answer trust. It does not attempt
production document ingestion or a real language model because response quality,
control, and a reliable hosted demo are more important in the exercise timebox.

## Source and constraints

These requirements were captured from the brightwheel take-home assignment:

- Recommended effort: 3 hours
- Submission window: 3 business days
- Deliverable: hosted prototype plus a sub-one-page document or sub-two-minute
  video
- Evaluation: scope and completeness, persuasiveness, user empathy, and
  uniqueness

The supplied brightwheel market primer was subsequently reviewed and is captured
in [Market and domain context](MARKET_CONTEXT.md). It reinforces that providers
are regulated, predominantly independent small businesses managing many
disconnected systems, while owners/administrators, teachers, and parents have
distinct jobs and escalation needs.
