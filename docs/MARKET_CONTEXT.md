# Market and domain context

This summary captures the supplied **Primer: Early Education // brightwheel**.
Figures are presented as claims from that primer and were not independently
verified for this prototype.

## Brightwheel's stated direction

- Vision: high-quality early education for every child.
- Product ambition: become the go-to experience for everything related to early
  education for providers and parents.
- Product principles relevant to this exercise include earning customer trust,
  solving high-value problems, moving pragmatically, staying close to details,
  iterating continuously, and doing more with limited resources.

## Provider reality

- The focus is early childhood before kindergarten: childcare, daycare,
  preschool, nursery, and after-school programs.
- Nearly all providers are private businesses and are highly regulated through
  government licensing.
- An operator must simultaneously manage the classroom experience, compliance,
  and business operations.
- Providers may use 15 or more disconnected systems across attendance and
  ratios, family communications, staffing, payroll, billing, accounting, and
  licensing.
- Many incumbent workflows are manual, paper-based, dated, or not designed for
  early education.

This makes a front-desk assistant valuable only if it reduces fragmentation. A
standalone chatbot that creates another inbox would work against the market
reality.

## Users

### Owner or administrator

Oversees daily operations and is usually the software buyer. This user needs
time savings, control, compliance awareness, and visibility into exceptions.

### Teacher

The most frequent daytime mobile user and the person interacting most with
administrators, staff, and parents. Teachers should receive only the handoffs
relevant to their classroom rather than becoming a general support queue.

### Parent or guardian

The provider's end customer. Childcare is described as a top-one or top-two
household expense for families with children under six and is essential for
working families. Answers about availability, price, health, and schedules are
therefore financially and emotionally consequential.

## Market shape

- The primer describes more than 850,000 U.S. providers and a roughly $175
  billion industry.
- Approximately 90% of the market is represented by independent providers,
  despite the visibility of large chains.
- The global market has similar characteristics: fragmented, SMB-heavy, and
  serving the same provider and family needs.
- Adjacent programs such as camps, Sunday schools, sports, and after-school care
  have similar operational needs but are not the current focus.

## Product implications for SproutDesk

1. **Embed, do not add another system.** The production experience should live
   inside brightwheel's existing family communication and operator workflows.
2. **Use existing context.** Center, classroom, calendar, billing plan, and
   authenticated family context can make answers specific without repeatedly
   asking parents for details.
3. **Keep the operator in control.** Independent providers differ significantly;
   center-authored policies must override generic guidance.
4. **Treat regulation as a product boundary.** Attendance ratios, health,
   medication, custody, and emergency issues need explicit rules and escalation.
5. **Route exceptions intelligently.** Billing questions belong with
   administrators; classroom logistics may go to teachers; health and safety
   exceptions need designated staff.
6. **Optimize for daily mobile use.** Brightwheel behaves partly like a consumer
   product, with frequent and personally meaningful teacher-parent interactions.
7. **Earn trust visibly.** A wrong answer can affect work, money, care, or child
   safety. Sources, freshness, and honest uncertainty are core interface
   elements, not implementation metadata.

