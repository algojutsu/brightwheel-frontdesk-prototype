# Submission summary

SproutDesk is a two-sided AI front desk concept for a fictional early education
center. The parent experience gives short, center-specific answers and makes the
supporting policy visible instead of asking families to trust a generic chatbot.
Sensitive or unsupported questions become an explicit staff handoff with the
conversation preserved. A visible "why this answer" trace shows the simulated AI
decision: safety check, topic, confidence, source, matched terms, and action.

The staff control center closes the feedback loop: it shows which questions were
answered, escalated, or unsupported, routes exceptions to the right owner, and
builds a dynamic knowledge-gap queue from unresolved conversations. An operator
can edit an existing source or draft a new one directly from an unsupported
question. Publishing a source closes and links the original conversation instead
of hiding it, and immediately changes the next relevant parent response.

I deliberately used a deterministic, browser-local answer engine rather than a
live LLM. For this proof of concept, that makes safety behavior and confidence
boundaries inspectable while keeping the hosted demo reliable without
credentials or external runtime services. A
production version would use
tenant-scoped hybrid retrieval, schema-constrained generation with required
citations, calibrated escalation rules, versioned policy approvals, and an
evaluation set built from real center questions.

Suggested demo: ask whether Maya can come with a fever (grounded policy answer),
ask when a child will learn to read (child-specific staff handoff), ask about
medication (sensitive handoff), and ask about weekend care (knowledge gap). Then
switch to Staff view, inspect the AI trace, draft and publish the weekend-care
source, and find the original conversation under Closed.
