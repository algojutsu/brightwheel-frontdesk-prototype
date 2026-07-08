# Technical architecture

## Overview

brightwheel Front Desk is a static single-page application built with semantic HTML, CSS,
and dependency-free JavaScript.

```text
UI events
  ├─ parent question → intent and safety rules → source-backed response
  ├─ escalation → local conversation store → staff inbox, routing, and metrics
  ├─ knowledge gap → prefilled source draft → local knowledge store
  ├─ source creation → matching open gaps → closed linked conversations
  └─ source edit or creation → subsequent answer behavior
```

## Why a static architecture

- The prototype runs without credentials or an installation step.
- Every evaluator sees deterministic behavior.
- It can be hosted on GitHub Pages, Netlify, or Vercel at no cost.
- It avoids external runtime assets, so static hosting does not require
  third-party font or API requests.
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
- `icon`

### Conversation

- `id`
- `question`
- `topic`
- `status`
- `answer`
- `sourceId`
- `createdAt`
- `assignedTo`
- `trace`
- optional `resolvedAt`
- optional `resolutionNote`

### UI state

- active perspective and staff section
- active parent thread
- selected source or conversation
- local edits and demo activity

Knowledge edits, created sources, and conversation additions are serialized to
`localStorage`. Seed data remains in code so Reset can restore a known state.

### Knowledge gap

- `id`
- `title`
- `statuses`
- `keywords`
- `category`
- `description`
- `actionLabel`
- optional `sourceId`
- optional draft source fields

## Answer engine

The engine follows ordered rules:

1. Detect sensitive subjects such as medication, custody, emergencies, and
   individualized medical advice.
2. Detect child-specific classroom, development, homework, assignment, or daily
   child-status questions that need staff context.
3. Detect known ambiguous questions where related sources exist but no exact
   policy exists.
4. Match supported intents using normalized keyword groups with word/phrase
   boundaries.
5. Apply intent-specific response composition from the matching policy.
6. Return an unsupported result when no source reaches the match threshold.
7. Classify unresolved or sensitive conversations into knowledge gaps for the
   staff control center.

Every response includes a deterministic `trace` object with safety check,
detected topic, confidence, matched source, matched keywords, decision, and
reason. This is an AI-prototype affordance, not a live model call.

This emulates the product behavior of a grounded AI system while keeping the
exercise inspectable. A production service would use hybrid retrieval, structured
policy fields, an LLM response layer, confidence calibration, and logged
evaluations.

## Production evolution

1. Integrate with brightwheel identity, center tenancy, family messaging, and
   role-based staff access instead of creating a separate account system.
2. Store versioned knowledge in a database with approval and audit history.
3. Build an ingestion pipeline for center-authored sources such as handbooks,
   policies, menus, calendars, program updates, and billing data.
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
