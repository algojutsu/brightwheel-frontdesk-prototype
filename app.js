const STORAGE_KEY = "sproutdesk-demo-v2";

const seedKnowledge = [
  {
    id: "hours",
    title: "Hours & calendar",
    category: "Schedule",
    icon: "◷",
    summary:
      "Little Sprouts is open Monday–Friday, 7:30 AM–6:00 PM. We are closed on Veterans Day, November 11.",
    details:
      "Regular hours are Monday through Friday, 7:30 AM to 6:00 PM.\n\n2026 closures include New Year’s Day, Martin Luther King Jr. Day, Memorial Day, Independence Day (observed), Labor Day, Veterans Day, Thanksgiving and the following Friday, and December 24–25.\n\nWeather-related changes are sent through the family app by 6:30 AM.",
    reviewedAt: "Jun 18, 2026",
    keywords: [
      "open",
      "close",
      "closed",
      "hours",
      "holiday",
      "veterans",
      "thanksgiving",
      "weather",
      "late",
      "calendar",
    ],
  },
  {
    id: "tuition",
    title: "2026 tuition guide",
    category: "Billing",
    icon: "$",
    summary:
      "Full-time infant care is $2,140 per month. Toddler care is $1,860 and preschool is $1,590 per month.",
    details:
      "Monthly full-time tuition:\n• Infants (6 weeks–18 months): $2,140\n• Toddlers (18–36 months): $1,860\n• Preschool (3–5 years): $1,590\n\nTuition includes breakfast, lunch, and two snacks. A one-time $150 enrollment fee holds a confirmed space. Financial assistance and sibling discounts are available; the director confirms eligibility.",
    reviewedAt: "Jun 25, 2026",
    keywords: [
      "tuition",
      "price",
      "cost",
      "rate",
      "fee",
      "infant",
      "toddler",
      "preschool",
      "discount",
      "financial",
    ],
  },
  {
    id: "health",
    title: "Health & wellness policy",
    category: "Health",
    icon: "+",
    summary:
      "Children must stay home with a temperature of 100.4°F or higher and may return after 24 hours fever-free without fever-reducing medicine.",
    details:
      "Keep your child home for a temperature of 100.4°F or higher, vomiting, two or more episodes of diarrhea, or symptoms that prevent comfortable participation.\n\nA child may return after being fever-free for 24 hours without fever-reducing medicine. After vomiting or diarrhea, the child must be symptom-free for 24 hours.\n\nStaff cannot diagnose illness. Families should contact their pediatrician for medical advice. Call 911 for an emergency.",
    reviewedAt: "Jun 12, 2026",
    keywords: [
      "fever",
      "sick",
      "ill",
      "temperature",
      "vomit",
      "diarrhea",
      "cough",
      "come in",
      "return",
      "symptom",
    ],
  },
  {
    id: "meals",
    title: "Meals & nutrition",
    category: "Daily care",
    icon: "⌁",
    summary:
      "Breakfast, lunch, and two snacks are provided. Today’s lunch is veggie chili, brown rice, melon, and milk.",
    details:
      "Breakfast, a morning snack, lunch, and an afternoon snack are included in tuition. Today’s lunch is veggie chili, brown rice, melon, and milk.\n\nFamilies do not need to replace a forgotten lunch. Please tell the classroom about documented allergies. Outside food is limited to approved allergy plans and classroom celebrations arranged in advance.",
    reviewedAt: "Jul 1, 2026",
    keywords: [
      "lunch",
      "breakfast",
      "snack",
      "food",
      "meal",
      "menu",
      "allergy",
      "pack",
      "vegetarian",
    ],
  },
  {
    id: "tours",
    title: "Tours & enrollment",
    category: "Enrollment",
    icon: "⌂",
    summary:
      "Tours are offered Tuesdays at 9:30 AM and Thursdays at 4:00 PM. The front desk confirms availability.",
    details:
      "Small-group tours are offered Tuesdays at 9:30 AM and Thursdays at 4:00 PM and usually take 25 minutes. Prospective families can request a time online; the enrollment coordinator confirms the appointment by the next business day.\n\nA tour request does not guarantee enrollment or a start date.",
    reviewedAt: "Jun 20, 2026",
    keywords: [
      "tour",
      "visit",
      "enroll",
      "enrollment",
      "waitlist",
      "space",
      "availability",
      "start",
    ],
  },
];

const seedConversations = [
  {
    id: 101,
    initials: "JR",
    family: "Jordan R.",
    question: "Are you open on Veterans Day?",
    topic: "Schedule",
    status: "answered",
    answer:
      "No. Little Sprouts is closed on Veterans Day, November 11, and returns to regular hours the next weekday.",
    sourceId: "hours",
    createdAt: "Today, 8:42 AM",
  },
  {
    id: 102,
    initials: "MP",
    family: "Morgan P.",
    question: "Can you give Theo another dose of his medicine at 2?",
    topic: "Health",
    status: "escalated",
    answer:
      "Medication requests need staff review. I shared the center’s general health guidance and offered a handoff.",
    sourceId: "health",
    createdAt: "Today, 8:18 AM",
  },
  {
    id: 103,
    initials: "SK",
    family: "Sam K.",
    question: "Do you offer weekend care?",
    topic: "Unknown",
    status: "unanswered",
    answer:
      "I couldn’t find a center policy that answers this, so I offered to send the question to staff.",
    sourceId: null,
    createdAt: "Yesterday, 5:36 PM",
  },
  {
    id: 104,
    initials: "NH",
    family: "Nina H.",
    question: "When does Maya move to the summer classroom?",
    topic: "Unknown",
    status: "unanswered",
    answer:
      "I couldn’t find a center policy for summer classroom transition dates, so I offered to send the question to staff.",
    sourceId: null,
    createdAt: "Yesterday, 2:20 PM",
  },
  {
    id: 105,
    initials: "DL",
    family: "Devon L.",
    question: "What is lunch today?",
    topic: "Daily care",
    status: "answered",
    answer:
      "Today’s lunch is veggie chili, brown rice, melon, and milk.",
    sourceId: "meals",
    createdAt: "Yesterday, 11:04 AM",
  },
  {
    id: 106,
    initials: "AC",
    family: "Alex C.",
    question: "How much is infant care?",
    topic: "Billing",
    status: "answered",
    answer: "Full-time infant care is $2,140 per month.",
    sourceId: "tuition",
    createdAt: "Yesterday, 9:12 AM",
  },
];

const suggestions = [
  "Are you open on Veterans Day?",
  "Can Maya come in with a fever?",
  "What is lunch today?",
  "How much is infant care?",
  "How can I schedule a tour?",
];

const sensitiveRules = [
  {
    words: ["medicine", "medication", "dose", "tylenol", "ibuprofen", "prescription"],
    topic: "Health",
    sourceId: "health",
    answer:
      "Medication is something our staff needs to review directly—I don’t want to make a decision about a child’s dose. I can send your question to the front desk with the context you shared.",
  },
  {
    words: ["custody", "restraining", "pick up my child", "authorized pickup", "court order"],
    topic: "Safety",
    sourceId: null,
    answer:
      "For your family’s privacy and safety, pickup and custody questions must be handled by the center director. I can alert the front desk without adding sensitive details here.",
  },
  {
    words: ["emergency", "not breathing", "unconscious", "seizure", "poison"],
    topic: "Emergency",
    sourceId: null,
    answer:
      "This may be an emergency. Call 911 now. After emergency help is on the way, contact Little Sprouts at (503) 555-0148.",
    emergency: true,
  },
];

const gapRules = [
  {
    id: "weekend-care",
    title: "Weekend & backup care",
    statuses: ["unanswered"],
    keywords: ["weekend", "saturday", "sunday", "backup", "after hours"],
    category: "Schedule",
    actionLabel: "Draft source",
    description: "No published policy covers weekend or backup-care availability.",
    draft: {
      title: "Weekend & backup care",
      summary:
        "Little Sprouts does not offer weekend care. Regular care is Monday–Friday, and families can ask the director about local backup-care resources.",
      details:
        "Care is offered Monday through Friday during regular center hours. Little Sprouts does not operate weekend classrooms.\n\nFamilies who need backup care may contact the center director for local referral resources. Referral information is not a guarantee of availability or enrollment.",
      keywords: ["weekend", "saturday", "sunday", "backup care", "after hours"],
    },
  },
  {
    id: "summer-transitions",
    title: "Summer classroom transitions",
    statuses: ["unanswered"],
    keywords: ["summer", "transition", "move", "classroom", "class"],
    category: "Daily care",
    actionLabel: "Draft source",
    description: "The current calendar does not explain classroom move timing.",
    draft: {
      title: "Summer classroom transitions",
      summary:
        "Summer classroom transition dates are shared with families by May 15. Children visit their next classroom during the final two weeks of June.",
      details:
        "The center director shares summer classroom transition dates with families by May 15 each year.\n\nTeachers schedule short visits to the next classroom during the final two weeks of June. Final classroom placement depends on age, readiness, licensing ratios, and available spaces.",
      keywords: ["summer", "transition", "classroom move", "move classroom", "new class"],
    },
  },
  {
    id: "medication-authorization",
    title: "Medication authorization",
    statuses: ["escalated"],
    keywords: ["medicine", "medication", "dose", "tylenol", "ibuprofen", "prescription"],
    category: "Health",
    actionLabel: "Review safety rule",
    sourceId: "health",
    description: "A policy exists, but individual medication requests correctly require staff review.",
  },
  {
    id: "pickup-safety",
    title: "Pickup and custody exceptions",
    statuses: ["escalated", "flagged"],
    keywords: ["custody", "restraining", "pick up", "pickup", "authorized", "court order"],
    category: "Safety",
    actionLabel: "Draft handling rule",
    description: "Sensitive pickup questions need designated staff and privacy-safe routing.",
    draft: {
      title: "Pickup and custody exceptions",
      summary:
        "Pickup, custody, and court-order questions must be handled directly by the center director. Families should not share sensitive legal details in chat.",
      details:
        "For pickup, custody, court-order, or authorized-adult changes, families should contact the center director directly.\n\nThe assistant should not collect sensitive legal details. Staff verify identity, documentation, and authorized pickup lists using the center’s private records.",
      keywords: ["custody", "court order", "authorized pickup", "pickup change", "restraining"],
    },
  },
];

let state = loadState();
let parentMessages = [];
let selectedConversationId = state.conversations[1]?.id || state.conversations[0]?.id;
let activeInboxFilter = "all";
let toastTimer;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function categoryIcon(category) {
  const icons = {
    Schedule: "◷",
    Billing: "$",
    Health: "+",
    "Daily care": "⌁",
    Enrollment: "⌂",
    Safety: "!",
    Operations: "◇",
  };
  return icons[category] || "◇";
}

function assignmentForTopic(topic, status = "answered") {
  if (status === "answered") return "Assistant resolved";
  const assignments = {
    Billing: "Ana Morales · Admin",
    Enrollment: "Ana Morales · Enrollment",
    Health: "Ana Morales · Health & safety",
    Safety: "Ana Morales · Director only",
    "Daily care": "Blue Room teachers",
    Schedule: "Front desk",
    Unknown: "Front desk triage",
  };
  return assignments[topic] || "Front desk triage";
}

function normalizePolicy(policy) {
  return {
    ...policy,
    category: policy.category || "Operations",
    icon: policy.icon || categoryIcon(policy.category || "Operations"),
    keywords: Array.isArray(policy.keywords) ? policy.keywords : [],
  };
}

function normalizeConversation(conversation) {
  return {
    ...conversation,
    assignedTo:
      conversation.assignedTo || assignmentForTopic(conversation.topic, conversation.status),
  };
}

function normalizeState(value) {
  return {
    knowledge: (Array.isArray(value?.knowledge) ? value.knowledge : seedKnowledge).map(
      normalizePolicy,
    ),
    conversations: (
      Array.isArray(value?.conversations) ? value.conversations : seedConversations
    ).map(normalizeConversation),
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.knowledge && saved?.conversations) return normalizeState(saved);
  } catch (_error) {
    // Corrupt browser state should not break the demo.
  }
  return normalizeState({ knowledge: clone(seedKnowledge), conversations: clone(seedConversations) });
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatStatus(status) {
  const labels = {
    answered: "Answered",
    escalated: "Needs staff",
    unanswered: "Knowledge gap",
    flagged: "Review",
  };
  return labels[status] || status;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function setView(view) {
  const isParent = view === "parent";
  document.querySelector("#parent-view").hidden = !isParent;
  document.querySelector("#staff-view").hidden = isParent;
  document.querySelectorAll(".switch-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (!isParent) renderStaff();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetParentChat() {
  parentMessages = [
    {
      role: "assistant",
      answer:
        "Hi! I’m the Little Sprouts assistant. I can help with center hours, tuition, health policies, meals, and tours. What can I find for you?",
      kind: "welcome",
    },
  ];
  renderMessages();
  renderSuggestions();
}

function renderSuggestions() {
  document.querySelector("#suggestions").innerHTML = suggestions
    .slice(0, 4)
    .map(
      (question) =>
        `<button class="suggestion-button" type="button" data-question="${escapeHtml(
          question,
        )}">${escapeHtml(question)}</button>`,
    )
    .join("");
}

function renderMessages() {
  const container = document.querySelector("#messages");
  container.innerHTML = parentMessages
    .map((message, index) => {
      if (message.role === "user") {
        return `<div class="message-row user"><div class="bubble"><p>${escapeHtml(
          message.text,
        )}</p></div></div>`;
      }
      if (message.typing) {
        return `<div class="message-row assistant"><div class="message-avatar">S</div>
          <div class="bubble"><div class="typing" aria-label="Assistant is typing"><i></i><i></i><i></i></div></div></div>`;
      }
      const source = state.knowledge.find((item) => item.id === message.sourceId);
      const meta = source
        ? `<div class="response-meta">
            <button class="source-chip" type="button" data-source-id="${source.id}">↗ ${escapeHtml(
              source.title,
            )}</button>
            <span class="reviewed">Reviewed ${escapeHtml(source.reviewedAt)}</span>
          </div>`
        : "";
      const handoff =
        message.canEscalate && !message.emergency
          ? `<div class="handoff-card ${message.sent ? "sent" : ""}">
              <strong>${message.sent ? "✓ Sent to the front desk" : "Want a person to follow up?"}</strong>
              <span>${
                message.sent
                  ? "Your question and this conversation are now in the staff inbox."
                  : "We’ll include your question so you won’t need to repeat it."
              }</span>
              ${
                message.sent
                  ? ""
                  : `<button class="handoff-button" type="button" data-handoff-index="${index}">Send to Little Sprouts</button>`
              }
            </div>`
          : "";
      return `<div class="message-row assistant">
        <div class="message-avatar">S</div>
        <div class="bubble"><p>${escapeHtml(message.answer)}</p>${meta}${handoff}</div>
      </div>`;
    })
    .join("");
  container.scrollTop = container.scrollHeight;
}

function normalizeQuestion(question) {
  return question.toLowerCase().replace(/[^\w\s$.-]/g, " ");
}

function parseKeywords(value) {
  return String(value)
    .split(",")
    .map((keyword) => keyword.trim().toLowerCase())
    .filter(Boolean);
}

function keywordsFromText(value) {
  const stopWords = new Set([
    "about",
    "after",
    "answer",
    "care",
    "center",
    "child",
    "does",
    "family",
    "little",
    "policy",
    "question",
    "sprouts",
    "that",
    "this",
    "with",
  ]);
  return [...new Set(normalizeQuestion(value).split(/\s+/))]
    .filter((word) => word.length > 3 && !stopWords.has(word))
    .slice(0, 8);
}

function slugify(value) {
  return (
    normalizeQuestion(value)
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "policy"
  );
}

function uniquePolicyId(title) {
  const base = slugify(title);
  let candidate = base;
  let index = 2;
  while (state.knowledge.some((policy) => policy.id === candidate)) {
    candidate = `${base}-${index}`;
    index += 1;
  }
  return candidate;
}

function inferKnowledgeGap(conversation) {
  if (!conversation || conversation.status === "answered") return null;
  const normalized = normalizeQuestion(conversation.question);
  const matched = gapRules.find(
    (rule) =>
      rule.statuses.includes(conversation.status) &&
      rule.keywords.some((keyword) => normalized.includes(keyword)),
  );
  if (matched) return matched;
  if (conversation.status === "unanswered") {
    return {
      id: `custom-${slugify(conversation.question).slice(0, 32)}`,
      title: "Uncovered family question",
      statuses: ["unanswered"],
      keywords: keywordsFromText(conversation.question),
      category: "Operations",
      actionLabel: "Draft source",
      description: "No published center source supported a confident answer.",
      draft: {
        title: "New family question policy",
        summary:
          "Add the center-approved answer here before publishing this source for families.",
        details:
          "This draft was created from a family question the assistant could not answer. Replace this text with the approved policy, exceptions, and staff owner before publishing.",
        keywords: keywordsFromText(conversation.question),
      },
    };
  }
  return {
    id: `review-${slugify(conversation.question).slice(0, 32)}`,
    title: "Sensitive handoff review",
    statuses: [conversation.status],
    keywords: keywordsFromText(conversation.question),
    category: conversation.topic || "Safety",
    actionLabel: "Review handoff",
    description: "The assistant deferred because this needs human judgment.",
  };
}

function buildKnowledgeGaps() {
  const gapMap = new Map();
  state.conversations.forEach((conversation) => {
    const gap = inferKnowledgeGap(conversation);
    if (!gap) return;
    const existing = gapMap.get(gap.id) || {
      ...gap,
      count: 0,
      firstConversationId: conversation.id,
      examples: [],
    };
    existing.count += 1;
    existing.examples.push(conversation);
    gapMap.set(gap.id, existing);
  });
  return [...gapMap.values()].sort((a, b) => b.count - a.count || a.title.localeCompare(b.title));
}

function draftFromConversation(conversation) {
  const gap = inferKnowledgeGap(conversation);
  const draft = gap?.draft || {
    title: "New family question policy",
    summary: "Add the center-approved answer here before publishing this source for families.",
    details:
      "This draft was created from a family question the assistant could not answer. Replace this text with the approved policy, exceptions, and staff owner before publishing.",
    keywords: keywordsFromText(conversation?.question || ""),
  };
  return {
    title: draft.title,
    category: gap?.category || conversation?.topic || "Operations",
    summary: draft.summary,
    details: `${draft.details}\n\nOriginal family question: “${conversation?.question || ""}”`,
    keywords: draft.keywords?.length ? draft.keywords : keywordsFromText(conversation?.question || ""),
  };
}

function answerQuestion(question) {
  const normalized = normalizeQuestion(question);
  const sensitive = sensitiveRules.find((rule) =>
    rule.words.some((word) => normalized.includes(word)),
  );
  if (sensitive) {
    return {
      answer: sensitive.answer,
      sourceId: sensitive.sourceId,
      topic: sensitive.topic,
      status: sensitive.emergency ? "flagged" : "escalated",
      canEscalate: !sensitive.emergency,
      emergency: Boolean(sensitive.emergency),
    };
  }

  const ranked = state.knowledge
    .map((policy) => ({
      policy,
      score: policy.keywords.reduce(
        (score, keyword) => score + (normalized.includes(keyword) ? keyword.split(" ").length : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score);

  if (ranked[0].score > 0) {
    const policy = ranked[0].policy;
    return {
      answer: policy.summary,
      sourceId: policy.id,
      topic: policy.category,
      status: "answered",
      canEscalate: false,
    };
  }

  return {
    answer:
      "I couldn’t find a Little Sprouts policy that answers that, and I don’t want to guess. I can send your question to the front desk so the team can answer and improve this for next time.",
    sourceId: null,
    topic: "Unknown",
    status: "unanswered",
    canEscalate: true,
  };
}

function submitQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  const input = document.querySelector("#question-input");
  input.value = "";
  input.style.height = "auto";
  parentMessages.push({ role: "user", text: cleanQuestion });
  parentMessages.push({ role: "assistant", typing: true });
  renderMessages();

  window.setTimeout(() => {
    parentMessages.pop();
    const response = answerQuestion(cleanQuestion);
    parentMessages.push({ role: "assistant", question: cleanQuestion, ...response });
    renderMessages();
  }, 480);
}

function createEscalation(message, messageIndex) {
  if (message.sent) return;
  const id = Date.now();
  const conversation = normalizeConversation({
    id,
    initials: "PF",
    family: "Parent follow-up",
    question: message.question,
    topic: message.topic,
    status: message.status === "unanswered" ? "unanswered" : "escalated",
    answer: message.answer,
    sourceId: message.sourceId,
    createdAt: "Just now",
  });
  state.conversations.unshift(conversation);
  parentMessages[messageIndex].sent = true;
  selectedConversationId = id;
  saveState();
  renderMessages();
  renderStaff();
  showToast("Question added to the staff inbox");
}

function openSource(sourceId) {
  const source = state.knowledge.find((item) => item.id === sourceId);
  if (!source) return;
  document.querySelector("#source-dialog-title").textContent = source.title;
  document.querySelector("#source-dialog-body").innerHTML = `
    <div class="source-summary">${escapeHtml(source.summary)}</div>
    <div class="source-details">${escapeHtml(source.details)}</div>
    <div class="source-footer"><span>${escapeHtml(source.category)}</span><span>Last reviewed ${escapeHtml(
      source.reviewedAt,
    )}</span></div>`;
  document.querySelector("#source-dialog").showModal();
}

function conversationRows(conversations, selected = false) {
  return conversations
    .map(
      (conversation) => `
        <button class="conversation-row ${
          selected && conversation.id === selectedConversationId ? "selected" : ""
        }" type="button" data-conversation-id="${conversation.id}">
          <span class="conversation-avatar">${escapeHtml(conversation.initials)}</span>
          <span class="conversation-copy">
            <strong>${escapeHtml(conversation.question)}</strong>
            <span>${escapeHtml(conversation.family)} · ${escapeHtml(
              conversation.createdAt,
            )} · <em>${escapeHtml(conversation.assignedTo)}</em></span>
          </span>
          <span class="status-pill ${escapeHtml(conversation.status)}">● ${escapeHtml(
            formatStatus(conversation.status),
          )}</span>
        </button>`,
    )
    .join("");
}

function updateInboxCount() {
  const attentionCount = state.conversations.filter((item) =>
    ["escalated", "unanswered", "flagged"].includes(item.status),
  ).length;
  document.querySelector("#inbox-count").textContent = attentionCount;
}

function renderOverview() {
  const recent = state.conversations.slice(0, 4);
  const answered = state.conversations.filter((item) => item.status === "answered").length;
  const total = state.conversations.length;
  const attention = state.conversations.filter((item) => item.status !== "answered").length;
  const automation = total ? Math.round((answered / total) * 100) : 0;
  const timeReturned = ((answered * 6) / 60).toFixed(1);
  const gaps = buildKnowledgeGaps().slice(0, 4);
  document.querySelector("#overview-section").innerHTML = `
    <div class="metric-grid">
      <article class="metric-card">
        <div class="metric-top"><span>Questions this week</span><span class="metric-icon">◫</span></div>
        <strong>${total}</strong>
        <small>Demo conversation set</small>
      </article>
      <article class="metric-card">
        <div class="metric-top"><span>Resolved instantly</span><span class="metric-icon">✓</span></div>
        <strong>${automation}%</strong>
        <small>No staff time needed</small>
      </article>
      <article class="metric-card">
        <div class="metric-top"><span>Time returned</span><span class="metric-icon">◷</span></div>
        <strong>${timeReturned}h</strong>
        <small>At 6 min per resolved question</small>
      </article>
      <article class="metric-card">
        <div class="metric-top"><span>Needs attention</span><span class="metric-icon">!</span></div>
        <strong>${attention}</strong>
        <small>Questions to review</small>
      </article>
    </div>
    <div class="dashboard-grid">
      <article class="panel">
        <div class="panel-header">
          <div><h2>Recent conversations</h2><p>What families are asking right now</p></div>
          <button class="text-button" type="button" data-go-section="inbox">View all →</button>
        </div>
        <div class="conversation-list">${conversationRows(recent)}</div>
      </article>
      <article class="panel">
        <div class="panel-header">
          <div><h2>Knowledge gaps</h2><p>Best opportunities to improve answers</p></div>
        </div>
        <div class="gap-list">
          ${
            gaps.length
              ? gaps
                  .map(
                    (gap) => `
                      <div class="gap-item">
                        <span class="gap-count">${gap.count}</span>
                        <div>
                          <strong>${escapeHtml(gap.title)}</strong>
                          <p>${escapeHtml(gap.description)}</p>
                          <div class="gap-actions">
                            ${
                              gap.sourceId
                                ? `<button class="text-button" type="button" data-source-id="${escapeHtml(
                                    gap.sourceId,
                                  )}">${escapeHtml(gap.actionLabel)} →</button>`
                                : `<button class="text-button" type="button" data-draft-conversation-id="${gap.firstConversationId}">${escapeHtml(
                                    gap.actionLabel,
                                  )} →</button>`
                            }
                            <span>${gap.count === 1 ? "1 conversation" : `${gap.count} conversations`}</span>
                          </div>
                        </div>
                      </div>`,
                  )
                  .join("")
              : `<p class="empty-state">No active gaps. New unsupported questions will appear here automatically.</p>`
          }
        </div>
      </article>
    </div>`;
}

function filteredConversations() {
  if (activeInboxFilter === "all") return state.conversations;
  if (activeInboxFilter === "attention") {
    return state.conversations.filter((item) => item.status !== "answered");
  }
  return state.conversations.filter((item) => item.status === "answered");
}

function renderInbox() {
  const filtered = filteredConversations();
  if (!filtered.some((item) => item.id === selectedConversationId)) {
    selectedConversationId = filtered[0]?.id;
  }
  const selected =
    state.conversations.find((item) => item.id === selectedConversationId) || state.conversations[0];
  const source = state.knowledge.find((item) => item.id === selected?.sourceId);
  document.querySelector("#inbox-section").innerHTML = `
    <div class="section-toolbar">
      <div><h2>Conversations</h2><p>Review family questions and improve weak answers.</p></div>
      <div class="filter-row">
        <button class="filter-button ${activeInboxFilter === "all" ? "active" : ""}" data-filter="all" type="button">All</button>
        <button class="filter-button ${
          activeInboxFilter === "attention" ? "active" : ""
        }" data-filter="attention" type="button">Needs attention</button>
        <button class="filter-button ${
          activeInboxFilter === "answered" ? "active" : ""
        }" data-filter="answered" type="button">Answered</button>
      </div>
    </div>
    <div class="panel inbox-layout">
      <div class="inbox-list">${conversationRows(filtered, true)}</div>
      ${
        selected
          ? `<div class="conversation-detail">
              <div class="detail-top">
                <div><h3>${escapeHtml(selected.family)}</h3><p>${escapeHtml(
                  selected.createdAt,
                )} · ${escapeHtml(selected.topic)}</p></div>
                <div class="detail-status-stack">
                  <span class="status-pill ${escapeHtml(selected.status)}">● ${escapeHtml(
                    formatStatus(selected.status),
                  )}</span>
                  <span class="assignment-chip">${escapeHtml(selected.assignedTo)}</span>
                </div>
              </div>
              <div class="detail-question">“${escapeHtml(selected.question)}”</div>
              <div class="detail-answer"><strong>SproutDesk response</strong><br>${escapeHtml(
                selected.answer,
              )}</div>
              ${
                selected.status !== "answered"
                  ? `<div class="detail-signal"><strong>Why this needs attention</strong><p>${
                      selected.status === "unanswered"
                        ? "No published center source supported a confident answer. Add or update a policy to close this gap."
                        : "This question may involve an individual health or safety decision, so the assistant deferred to staff."
                    }</p></div>`
                  : ""
              }
              ${
                source
                  ? `<button class="source-chip source-action" type="button" data-source-id="${
                      source.id
                    }">↗ ${escapeHtml(source.title)}</button>`
                  : selected.status === "unanswered"
                    ? `<div class="inline-actions"><button class="primary-button" type="button" data-draft-conversation-id="${selected.id}">Draft source from question</button><button class="secondary-button" type="button" data-go-section="knowledge">View knowledge</button></div>`
                    : `<div class="inline-actions"><span class="assignment-chip">Routed for human review</span></div>`
              }
            </div>`
          : `<div class="conversation-detail"><p>No conversations match this filter.</p></div>`
      }
    </div>`;
}

function renderKnowledge() {
  document.querySelector("#knowledge-section").innerHTML = `
    <div class="section-toolbar">
      <div><h2>Center knowledge</h2><p>Published sources SproutDesk can use in family answers.</p></div>
      <div class="staff-header-actions">
        <span class="system-status"><i></i> ${state.knowledge.length} sources active</span>
        <button class="primary-button" type="button" data-new-policy>Add source</button>
      </div>
    </div>
    <div class="knowledge-grid">
      ${state.knowledge
        .map(
          (policy) => `
          <article class="knowledge-card">
            <div class="knowledge-top">
              <span class="category-icon">${escapeHtml(policy.icon)}</span>
              <button class="edit-policy" data-edit-id="${policy.id}" type="button">Edit</button>
            </div>
            <h3>${escapeHtml(policy.title)}</h3>
            <p>${escapeHtml(policy.summary)}</p>
            <div class="knowledge-meta"><span>${escapeHtml(
              policy.category,
            )}</span><span>Reviewed ${escapeHtml(policy.reviewedAt)}</span></div>
          </article>`,
        )
        .join("")}
    </div>`;
}

function renderStaff() {
  renderOverview();
  renderInbox();
  renderKnowledge();
  updateInboxCount();
}

function setStaffSection(section) {
  const labels = {
    overview: ["Good morning, Ana", "Here’s how SproutDesk is helping families this week."],
    inbox: ["Family conversations", "Review where the assistant answered, deferred, or struggled."],
    knowledge: ["Center knowledge", "Keep family answers accurate and up to date."],
  };
  document.querySelectorAll(".staff-section").forEach((element) => {
    element.hidden = element.id !== `${section}-section`;
  });
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === section);
  });
  document.querySelector("#staff-title").textContent = labels[section][0];
  document.querySelector("#staff-subtitle").textContent = labels[section][1];
  if (section === "inbox") renderInbox();
  if (section === "knowledge") renderKnowledge();
}

function openEditPolicy(policyId) {
  const policy = state.knowledge.find((item) => item.id === policyId);
  if (!policy) return;
  document.querySelector("#edit-dialog-title").textContent = "Edit policy";
  document.querySelector("#edit-policy-id").value = policy.id;
  document.querySelector("#edit-policy-conversation-id").value = "";
  document.querySelector("#edit-policy-title").value = policy.title;
  document.querySelector("#edit-policy-category").value = policy.category;
  document.querySelector("#edit-policy-summary").value = policy.summary;
  document.querySelector("#edit-policy-details").value = policy.details;
  document.querySelector("#edit-policy-keywords").value = policy.keywords.join(", ");
  document.querySelector("#edit-dialog").showModal();
}

function openBlankPolicy() {
  document.querySelector("#edit-dialog-title").textContent = "Add source";
  document.querySelector("#edit-policy-id").value = "";
  document.querySelector("#edit-policy-conversation-id").value = "";
  document.querySelector("#edit-policy-title").value = "";
  document.querySelector("#edit-policy-category").value = "Operations";
  document.querySelector("#edit-policy-summary").value = "";
  document.querySelector("#edit-policy-details").value = "";
  document.querySelector("#edit-policy-keywords").value = "";
  document.querySelector("#edit-dialog").showModal();
}

function openDraftPolicyFromConversation(conversationId) {
  const conversation = state.conversations.find((item) => item.id === Number(conversationId));
  if (!conversation) return;
  const draft = draftFromConversation(conversation);
  setStaffSection("knowledge");
  document.querySelector("#edit-dialog-title").textContent = "Draft source from question";
  document.querySelector("#edit-policy-id").value = "";
  document.querySelector("#edit-policy-conversation-id").value = conversation.id;
  document.querySelector("#edit-policy-title").value = draft.title;
  document.querySelector("#edit-policy-category").value = draft.category;
  document.querySelector("#edit-policy-summary").value = draft.summary;
  document.querySelector("#edit-policy-details").value = draft.details;
  document.querySelector("#edit-policy-keywords").value = draft.keywords.join(", ");
  document.querySelector("#edit-dialog").showModal();
}

function savePolicy(event) {
  event.preventDefault();
  const id = document.querySelector("#edit-policy-id").value;
  const conversationId = Number(document.querySelector("#edit-policy-conversation-id").value);
  const title = document.querySelector("#edit-policy-title").value.trim();
  const category = document.querySelector("#edit-policy-category").value;
  const summary = document.querySelector("#edit-policy-summary").value.trim();
  const details = document.querySelector("#edit-policy-details").value.trim();
  const submittedKeywords = parseKeywords(document.querySelector("#edit-policy-keywords").value);
  const keywords = submittedKeywords.length
    ? submittedKeywords.slice(0, 12)
    : keywordsFromText(`${title} ${summary}`);
  let policy = state.knowledge.find((item) => item.id === id);
  if (!policy) {
    policy = {
      id: uniquePolicyId(title),
      icon: categoryIcon(category),
      title,
      category,
      summary,
      details,
      reviewedAt: "Just now",
      keywords,
    };
    state.knowledge.unshift(policy);
  } else {
    policy.title = title;
    policy.category = category;
    policy.icon = categoryIcon(category);
    policy.summary = summary;
    policy.details = details;
    policy.keywords = keywords.length ? keywords : keywordsFromText(`${title} ${summary}`);
  }
  policy.reviewedAt = "Just now";
  if (conversationId) {
    const conversation = state.conversations.find((item) => item.id === conversationId);
    if (conversation) {
      conversation.topic = policy.category;
      conversation.status = "answered";
      conversation.sourceId = policy.id;
      conversation.assignedTo = assignmentForTopic(policy.category, "answered");
      conversation.answer = `Staff published “${policy.title}” so future families can receive a source-backed answer.`;
      selectedConversationId = conversation.id;
    }
  }
  saveState();
  document.querySelector("#edit-dialog").close();
  renderStaff();
  showToast(id ? "Policy published — future answers are updated" : "Source published — gap closed");
}

document.querySelectorAll(".switch-button").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelector("#preview-parent").addEventListener("click", () => setView("parent"));
document.querySelector("#new-chat").addEventListener("click", resetParentChat);
document.querySelector("#question-form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion(document.querySelector("#question-input").value);
});

document.querySelector("#question-input").addEventListener("input", (event) => {
  event.target.style.height = "auto";
  event.target.style.height = `${Math.min(event.target.scrollHeight, 100)}px`;
});

document.querySelector("#question-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    document.querySelector("#question-form").requestSubmit();
  }
});

document.querySelector("#messages").addEventListener("click", (event) => {
  const sourceButton = event.target.closest("[data-source-id]");
  if (sourceButton) openSource(sourceButton.dataset.sourceId);
  const handoffButton = event.target.closest("[data-handoff-index]");
  if (handoffButton) {
    const index = Number(handoffButton.dataset.handoffIndex);
    createEscalation(parentMessages[index], index);
  }
});

document.querySelector("#suggestions").addEventListener("click", (event) => {
  const button = event.target.closest("[data-question]");
  if (button) submitQuestion(button.dataset.question);
});

document.querySelector(".staff-sidebar nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (button) setStaffSection(button.dataset.section);
});

document.querySelector(".staff-main").addEventListener("click", (event) => {
  const draftButton = event.target.closest("[data-draft-conversation-id]");
  if (draftButton) {
    openDraftPolicyFromConversation(draftButton.dataset.draftConversationId);
    return;
  }

  const newPolicyButton = event.target.closest("[data-new-policy]");
  if (newPolicyButton) {
    openBlankPolicy();
    return;
  }

  const sectionButton = event.target.closest("[data-go-section]");
  if (sectionButton) setStaffSection(sectionButton.dataset.goSection);

  const conversationButton = event.target.closest("[data-conversation-id]");
  if (conversationButton) {
    selectedConversationId = Number(conversationButton.dataset.conversationId);
    setStaffSection("inbox");
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeInboxFilter = filterButton.dataset.filter;
    renderInbox();
  }

  const sourceButton = event.target.closest("[data-source-id]");
  if (sourceButton) openSource(sourceButton.dataset.sourceId);

  const editButton = event.target.closest("[data-edit-id]");
  if (editButton) openEditPolicy(editButton.dataset.editId);
});

document.querySelectorAll(".dialog-close").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelector("#edit-policy-form").addEventListener("submit", savePolicy);

document.querySelector("#reset-demo").addEventListener("click", () => {
  state = normalizeState({ knowledge: clone(seedKnowledge), conversations: clone(seedConversations) });
  selectedConversationId = state.conversations[1].id;
  saveState();
  resetParentChat();
  renderStaff();
  showToast("Demo data reset");
});

resetParentChat();
renderStaff();
