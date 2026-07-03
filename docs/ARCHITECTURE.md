# Technical architecture

## Overview

SproutDesk is a static single-page application built with semantic HTML, CSS,
and dependency-free JavaScript.

```text
UI events
  ├─ parent question → intent and safety rules → source-backed response
  ├─ escalation → local conversation store → staff inbox and metrics
  └─ policy edit → local knowledge store → subsequent answer behavior
```

## Why a static architecture

- The prototype runs without credentials or an installation step.
- Every evaluator sees deterministic behavior.
- It can be hosted on GitHub Pages, Netlify, or Vercel at no cost.
- The implementation keeps attention on product judgment instead of scaffolding.

This is a prototype decision, not the recommended production architecture.

## Data model

### Knowledge source

- `id`
- `title`
- `category`
- `summary`
- `details`
- `reviewedAt`
- `keywords`
- `status`

### Conversation

- `id`
- `question`
- `topic`
- `status`
- `answer`
- `sourceId`
- `createdAt`
- `escalated`

### UI state

- active perspective and staff section
- active parent thread
- selected source or conversation
- local edits and demo activity

Knowledge edits and conversation additions are serialized to `localStorage`.
Seed data remains in code so Reset can restore a known state.

## Answer engine

The engine follows ordered rules:

1. Detect sensitive subjects such as medication, custody, emergencies, and
   individualized medical advice.
2. Match supported intents using normalized keyword groups.
3. Apply intent-specific response composition from the matching policy.
4. Return an unsupported result when no source reaches the match threshold.

This emulates the product behavior of a grounded AI system while keeping the
exercise inspectable. A production service would use hybrid retrieval, structured
policy fields, an LLM response layer, confidence calibration, and logged
evaluations.

## Production evolution

1. Integrate with brightwheel identity, center tenancy, family messaging, and
   role-based staff access instead of creating a separate account system.
2. Store versioned knowledge in a database with approval and audit history.
3. Build an ingestion pipeline for handbooks, calendars, billing data, and
   center-authored structured policies.
4. Retrieve candidate passages with metadata and permission filtering.
5. Generate answers under a strict schema requiring citations and an escalation
   decision.
6. Evaluate answers against a curated center-specific question set before policy
   changes publish.
7. Route human handoffs through brightwheel messaging using center, classroom,
   and staff-role context, with consent and delivery status.
8. Add privacy retention controls, observability, rate limits, and abuse
   protections.

## Security and privacy notes

- The demo contains no real family data and sends no data off-device.
- Browser storage is suitable only for a prototype.
- Production conversation data would require tenant isolation, encryption,
  retention limits, access auditing, and redaction.
- Medical and emergency content should remain policy navigation, never diagnosis.
