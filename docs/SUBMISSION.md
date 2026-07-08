# Submission summary

Prototype URL: `<paste hosted URL>`

Source repo: `<paste public GitHub repo URL>`

brightwheel Front Desk is a multi-tier AI Front Desk prototype for a fictional early
education center, Little Sprouts. The parent tier answers common family
questions from center-authored sources and shows why the answer should be
trusted: source, review date, confidence, matched terms, and decision. When the
question is sensitive, unsupported, or specific to an individual child, the
assistant does not guess. It creates a clear staff handoff with the original
conversation preserved.

The staff tier closes the feedback loop. Operators can review conversations,
see the simulated AI decision trace, identify unresolved demand, and edit or
create knowledge sources. Publishing a new source closes and links matching open
conversations, keeps them searchable under Closed, and immediately changes the
next relevant parent answer. This demonstrates a product loop rather than a
standalone chatbot: family question → AI decision → staff review → knowledge
update → better future answer.

I used a deterministic, browser-local answer engine instead of a live LLM API so
the hosted demo is reliable, free to run, and inspectable without credentials or
external services. In production, this would become tenant-scoped retrieval over
approved center sources, schema-constrained generation with required citations,
calibrated escalation rules, policy approval history, and an evaluation set built
from real center questions.

Suggested review path: ask “Can Maya come with a fever?” for a grounded policy
answer, “When will my kid learn to read?” for a child-specific staff handoff,
“Can you give Maya medicine?” for a sensitive handoff, and “Do you offer weekend
care?” for an unsupported knowledge gap. Then switch to Staff view, inspect the
trace, draft and publish the weekend-care source, and ask about weekend care
again to see the improved answer.
