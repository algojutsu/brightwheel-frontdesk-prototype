# Submission summary

SproutDesk is a two-sided AI front desk concept for a fictional early education
center. The parent experience gives short, center-specific answers and makes the
supporting policy visible instead of asking families to trust a generic chatbot.
Sensitive or unsupported questions become an explicit staff handoff with the
conversation preserved.

The staff control center closes the feedback loop: it shows which questions were
answered, escalated, or unsupported, routes exceptions to the right owner, and
builds a dynamic knowledge-gap queue from unresolved conversations. An operator
can edit an existing source or draft a new one directly from an unsupported
question. Publishing a source immediately changes the next relevant parent
response.

I deliberately used a deterministic, browser-local answer engine rather than a
live LLM. For this proof of concept, that makes safety behavior inspectable and
the hosted demo reliable without credentials or external runtime services. A
production version would use
tenant-scoped hybrid retrieval, schema-constrained generation with required
citations, calibrated escalation rules, versioned policy approvals, and an
evaluation set built from real center questions.

Suggested demo: ask about a fever (grounded answer), medication (sensitive
handoff), and weekend care (knowledge gap), then switch to Staff view to inspect
the resulting queue. Draft and publish the weekend-care source, then ask the
same question again to see the newly grounded answer.
