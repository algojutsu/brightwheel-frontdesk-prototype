# Problem statement

## Assignment context

The assignment is to create a prototype for a brightwheel AI Front Desk concept.
The prototype should show how AI could help early education providers answer
routine family questions while preserving trust, safety, and staff control.

The original assignment and linked market primer were provided through:

- Ashby assignment page:
  `https://you.ashbyhq.com/brightwheel/assignment/69debbe8-3787-456a-86ce-5dda694125d6`
- Market/domain primer:
  `https://docs.google.com/document/d/1aLMQ77r2rQNsQdZ-U9VXpje1pWKZYJxtyJwCJ3H1TPc/edit?tab=t.0#heading=h.qauc1cg9qhu3`

The implementation in this repo is based on captured requirements from those
sources plus the user's stated goal: build a realistic, shareable app with
fictional data, clear documentation, and a Git-ready codebase.

## Core problem

Early education administrators spend significant time answering repeat family
questions across phone, email, text, and app messages. Parents need quick,
accurate answers because childcare questions affect work schedules, money,
health, and child safety. But center staff are busy, policies are hard to search
on mobile, and generic AI answers can be unsafe if they invent policy or make
individual health/safety decisions.

The product problem is therefore:

> How might brightwheel provide an AI front desk that resolves routine parent
> questions from center-specific sources while escalating ambiguous,
> unsupported, or sensitive situations to the right staff member?

## Prototype goal

Create a hosted static prototype that can be reviewed in under five minutes and
shows both sides of the workflow:

- Parent/guardian gets a fast, source-backed answer or a clear handoff.
- Staff can see what happened, identify weak spots, and improve the source of
  truth so future answers get better.

## Required demonstration

The prototype should make these outcomes visibly different:

1. A grounded answer with a source and last-reviewed date.
2. A sensitive question that does not receive unsafe automated judgment.
3. An unsupported question that becomes a staff-visible knowledge gap.
4. A staff knowledge update that changes a future parent answer.

## Domain constraints

- Early education providers are regulated and operationally fragmented.
- Many providers are small independent businesses with limited time and tooling.
- Parents, teachers, and administrators have distinct jobs.
- Teachers are frequent app users but should not become the default destination
  for billing, enrollment, or policy exceptions.
- Center-authored policy should override generic childcare guidance.
- Health, medication, custody, emergency, and similar topics require explicit
  escalation rules.

## Delivery constraints

- Use fictional data only.
- Make the app easy to host and share.
- Avoid requiring credentials, API keys, accounts, or live services.
- Favor a reliable, persuasive prototype over production-scale ingestion,
  authentication, or LLM infrastructure.

## Current solution summary

brightwheel Front Desk is a static single-page app for a fictional center,
Juniper Lane Preschool. It includes:

- parent assistant with free-text and guided prompts;
- source-backed answers for hours, tuition, health, meals, and tours;
- sensitive-topic escalation;
- unsupported-question handoff;
- staff dashboard, conversation review, topic assignment, and dynamic knowledge
  gaps;
- policy editing and policy creation from unsupported questions;
- browser-local state and one-click reset.

See [Requirements](REQUIREMENTS.md), [Design](DESIGN.md), and
[Architecture](ARCHITECTURE.md) for the detailed breakdown.
