# Test scenarios

This document captures the product-level questions used to validate brightwheel Front Desk.
Use it as a regression checklist before submission or after changing the answer
engine.

## Parent question regression set

| Question | Expected outcome | Expected source | Why this matters |
| --- | --- | --- | --- |
| `Can Maya come with a fever?` | Answered | Health & wellness policy | A child name inside a generic policy question should not force escalation. |
| `Can Maya come in with a fever?` | Answered | Health & wellness policy | Same as above, with slightly different phrasing. |
| `What is the fever policy?` | Answered | Health & wellness policy | Clean handbook-policy health question. |
| `When will my kid learn to read?` | Escalated to classroom staff | None | Individual child development needs teacher context; do not answer from handbook. |
| `What did Maya eat today?` | Escalated to classroom staff | None | Daily child-specific status needs classroom context. |
| `How did Maya do today?` | Escalated to classroom staff | None | Daily child-specific classroom status needs staff context. |
| `What is lunch today?` | Answered | Meals & nutrition | Generic menu/policy question should be answerable. |
| `What is the late pickup fee?` | Unsupported/low confidence handoff | None | Related sources exist, but no exact late-pickup fee policy exists. |
| `Do you offer weekend care?` | Unsupported knowledge gap, then staff handoff | None until staff publishes source | Demonstrates uncertainty, handoff, and gap creation. |
| `Can you give Maya medicine?` | Sensitive handoff | Health & wellness policy as related context | Medication decisions require staff review. |
| `Are you open on Veterans Day?` | Answered | Hours & calendar | Calendar/closure question from source. |
| `How much is infant care?` | Answered | 2026 tuition guide | Billing question from source. |
| `How can I schedule a tour?` | Answered | Tours & enrollment | Enrollment question from source. |

## Staff workflow regression set

1. Ask `Do you offer weekend care?` in Parent view.
2. Click `Send to Juniper Lane`.
3. Switch to Staff view.
4. Confirm the conversation appears in Conversations and the knowledge-gap queue.
5. Confirm the staff detail shows:
   - assignment/routing;
   - AI decision trace;
   - low confidence;
   - no matched source.
6. Click `Draft source from question`.
7. Confirm the edit dialog is labeled `AI-generated draft`.
8. Confirm the draft includes:
   - review-before-publishing note;
   - original family question;
   - extracted keywords.
9. Save and publish.
10. Confirm the original conversation remains visible under the `Closed` filter
    with status `Closed with source`.
11. Open the new source and confirm it lists the linked conversation.
12. Return to Parent view and ask about weekend care again.
13. Confirm the answer is now grounded in the newly published source.

## Manual source linking regression

1. Reset demo data.
2. Switch to Staff view.
3. Open Knowledge.
4. Click `Add source`.
5. Add a source with keywords that match an open unsupported conversation, such
   as `weekend, backup care`.
6. Save and publish.
7. Confirm matching open conversations are marked `Closed with source`.
8. Confirm they remain findable through Conversations search and the `Closed`
   filter.

## Keyword boundary regression

This specific bug must stay fixed:

| Question | Expected outcome |
| --- | --- |
| `When will my kid learn to read?` | Classroom staff handoff |
| `How did Maya do today?` | Classroom staff handoff |

The word `will` must not match the health keyword `ill`.

## Suggested automated smoke check

In this environment, `node` may not be available. The following macOS
JavaScriptCore command exercises the answer engine without a browser:

```bash
osascript -l JavaScript <<'JXA'
ObjC.import('Foundation');
const source = $.NSString.stringWithContentsOfFileEncodingError('app.js', $.NSUTF8StringEncoding, null).js;

function elementStub() {
  return {
    hidden: false,
    value: '',
    innerHTML: '',
    textContent: '',
    scrollTop: 0,
    scrollHeight: 0,
    style: {},
    dataset: {},
    classList: { add(){}, remove(){}, toggle(){} },
    addEventListener(){},
    close(){},
    showModal(){},
    requestSubmit(){},
    focus(){},
    matches(){ return false; },
    closest(){ return null; },
  };
}

const documentStub = { querySelector(){ return elementStub(); }, querySelectorAll(){ return []; } };
const storage = { data: {}, getItem(k){ return this.data[k] || null; }, setItem(k, v){ this.data[k] = v; } };
const windowStub = { scrollTo(){}, setTimeout(fn){ fn(); } };
const boot = new Function('document', 'localStorage', 'window', source + '\nreturn { answerQuestion };');
const { answerQuestion } = boot(documentStub, storage, windowStub);

const tests = [
  ['Can Maya come with a fever?', 'answered', 'Health', 'health'],
  ['Can Maya come in with a fever?', 'answered', 'Health', 'health'],
  ['When will my kid learn to read?', 'escalated', 'Classroom', null],
  ['What did Maya eat today?', 'escalated', 'Classroom', null],
  ['How did Maya do today?', 'escalated', 'Classroom', null],
  ['What is lunch today?', 'answered', 'Daily care', 'meals'],
  ['What is the late pickup fee?', 'unanswered', 'Operations', null],
  ['Do you offer weekend care?', 'unanswered', 'Unknown', null],
  ['Can you give Maya medicine?', 'escalated', 'Health', 'health'],
];

const results = tests.map(([question, status, topic, sourceId]) => {
  const result = answerQuestion(question);
  return {
    question,
    pass: result.status === status && result.topic === topic && (result.sourceId || null) === sourceId,
    actual: {
      status: result.status,
      topic: result.topic,
      sourceId: result.sourceId || null,
      confidence: result.trace && result.trace.confidence,
    },
  };
});

JSON.stringify(results, null, 2);
JXA
```

All entries should return `"pass": true`.
