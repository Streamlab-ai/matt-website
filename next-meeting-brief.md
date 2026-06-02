# Next Meeting Brief — Matt Krall
**Prepared:** 2026-05-05 | **For:** StreamLab internal use before next call

---

## WHAT MATT ACTUALLY WANTS (synthesized from all sources)

### His core job
Matt is the operational and commercial engine behind ElevateU. Tamien is the face and program deliverer. Matt's job is to make sure the machine scales, gets funded, and doesn't collapse under its own weight. He thinks like a COO — he wants systems, not promises.

### What he told us he wants (direct from transcripts + emails)
1. **Remove the operational ceiling** — Right now ElevateU can run ~10 concurrent pilots manually. The automation system exists to break that ceiling.
2. **Diagnostic tool as lead gen** — He raised this unprompted on Apr 30: *"Is there an opportunity to use the diagnostic tool as a bit of a lead gen?"* This is a strategic priority he hasn't seen built yet.
3. **Inbound flow architecture** — He described it in Apr 30 decision log: Form → Insight → Interpretation → Expansion → Partnership. The diagnostic is the entry point, not a contact form.
4. **Personal brand for LinkedIn** — He wants to stay behind the scenes (Tamien = face), but he is posting 3x/week on LinkedIn and wants that activity to compound into credibility and outbound opportunity.
5. **Outbound to collaborations** — Not targeting end customers. Targeting podcast hosts, partners, and platforms that expand Tamien's and Vaney's audience.
6. **Franchise vision** — He and Tamien want to take ElevateU international. Everything they build now should be infrastructure for that.

### What makes Matt feel StreamLab is high-value
- Speed + execution with no surprises
- Proactive delivery (he didn't ask for the brand audit — we did it; that impressed him)
- Handling complexity so he doesn't have to manage it
- Systems that scale without adding headcount

---

## THE 5 HIGH-VALUE THINGS TO PRESENT IN THE NEXT MEETING

---

### 1. BRAND ENGINE OUTPUT — MATT'S BRAND (READY TO SHOW)

**What it is:** We've already built it from his input files. Ready to walk through now.
- `brand-doc.md` — 15-section brand identity document
- `brand-voice.md` — voice guide with sentence patterns, banned words, platform rules
- `seo-keyword-map.md` — LinkedIn keyword strategy + owned vocabulary
- `content-calendar.md` — 4 weeks of pre-planned LinkedIn posts (Mon/Wed/Fri)

**Why it's high-value to Matt:**
He's posting 3x/week already with no content system behind it. We can hand him a full month of drafted, on-brand posts. He can approve and publish without writing from scratch. Given his time constraints as a COO, this is immediate time savings.

**What to say:**
> "We built your brand guide from your bio, your interview, your Q2 LinkedIn posts, and the call transcript. Here's what we see as your voice, your 5 content pillars, and a 4-week calendar already mapped. You don't need to write these — you approve them."

**Next step:** Draft the first 3 posts from the calendar and present them alongside the guide.

---

### 2. DIAGNOSTIC AS LEAD GEN FUNNEL (STRATEGIC WIN — HE ASKED FOR THIS)

**What it is:** Turn the Ripple Diagnostic™ into a public-facing lead gen tool embedded in the goelevateyou.com website. The flow:

```
Website visitor lands
     ↓
Takes Ripple Diagnostic™ (5-10 min)
     ↓
Receives automated Insight Email (personalized to their results)
     ↓
Email drip: Interpretation → Expansion → Partnership invitation
     ↓
Booking link → Discovery call with Matt or Tamien
```

**Why this is high-value:**
- Matt explicitly asked for this on Apr 30
- The diagnostic is already built (Ripple Diagnostic™ form is live)
- The website is live (Framer, Josh)
- The email infrastructure is live (Microsoft 365 + Graph API)
- This is the "inbound flow" he described: Form → Insight → Interpretation → Expansion → Partnership
- It converts passive LinkedIn content into a lead capture system

**What needs to be built:**
- Framer form embed (John's work — already has access)
- n8n workflow: form submission → parse results → trigger personalized insight email
- 3-email drip sequence (Insight / Interpretation / Expansion) — Matt or StreamLab writes
- Pipedrive integration: lead auto-created when someone completes the diagnostic

**What to say:**
> "You asked in our last call whether the diagnostic could be a lead gen tool. Yes — and we can build it. Here's the architecture. The form is live, the website is live, the email infrastructure is there. What's missing is the connection logic and 3 emails. We can have this running in the next sprint."

---

### 3. WF1–WF3 LIVE DEMO — THE PILOT NUDGE ENGINE IN ACTION

**What it is:** Workflows 1–3 are launching May 1–3. By the time of the next meeting, they should be testable.
- WF1: Move deal to "Pilot Active" → AI reads cohort list → auto-creates Pipedrive contacts
- WF2: Sends pre-diagnostic (Ripple Diagnostic™) to each participant
- WF3: 48-hour reminder if not completed

**Why it's high-value:**
This is the core commercial promise. Show him it actually works — live in Pipedrive. Walk him through what happens when he activates a pilot. Let him feel the operational ceiling lifting.

**What to say:**
> "Let me show you what happens now when you move a deal to Pilot Active. Add a cohort list, check the box — and watch what the system does."

---

### 4. OUTBOUND MACHINE — WHAT APOLLO + HEYREACH WILL DO (AND WHAT WE NEED FROM HIM)

**What it is:** Phase 3 builds the outbound system — LinkedIn outreach via HeyReach and cold email via Apollo. This is how ElevateU gets in front of CHROs, CEOs, and CFOs at target companies, plus podcast hosts and collaboration partners for Tamien and Matt.

**Why this is high-value:**
Matt mentioned the franchise vision and the need to break out of the Sioux Falls market. The outbound machine is how that happens at scale without adding a sales team.

**The blocker:** Matt hasn't signed up for Apollo or HeyReach yet. This is also blocking the content scheduling system (Metricool) and the video repurposing workflow (Opus Clip for Tamien).

**What to say:**
> "The outbound machine is queued and ready to build. We need 4 signups from you: Apollo, HeyReach, Metricool, Opus Clip. Once those are in, we can have the first outreach campaign running within a week. Here's exactly what each one does and the cost."

**Show the tool stack with costs:**

| Tool | Job | Cost/mo |
|---|---|---|
| Apollo Professional | Cold email to ICPs (CHROs, CEOs, CFOs) | $99 |
| HeyReach Growth | LinkedIn outreach — Matt + Tamien | $79 |
| Metricool Starter | Schedule + analyze all social posts | $22 |
| Opus Clip Pro | Turn Tamien's long-form video into short clips | $29 |

---

### 5. ACT II TEMPLATES — THE ONE THING BLOCKING THE FULL ENGINE

**What it is:** The 6–8 Monday intention + Friday reflection email templates are the only thing blocking WF4 (the full pilot nudge sequence). Matt has been revising them since Apr 15.

**Why this matters:**
Without Act II, the pilot automation system only goes halfway. Participants get the diagnostic but don't get the weekly nudge emails that are the actual product delivery mechanism. This is the core IP of ElevateU — the 10-minutes-a-day behavioral installation.

**What to say:**
> "WF4 is the one that delivers the actual product — the Monday intention and Friday reflection emails. Everything else is support infrastructure. That workflow is ready to build the moment we have the templates. Where are you at on those? If it helps, we can turn your MBR framework doc and Morning Protocol into first drafts and you just edit."

**Offer:** StreamLab can draft the 6-8 templates from the existing documents Matt already sent (MBR Framework, Morning Protocol, the interview) and Matt just reviews and approves.

---

## WHAT TO BRING INTO THE MEETING

### Already ready to show
- [x] `brand-doc.md` — Matt's brand identity
- [x] `brand-voice.md` — voice guide
- [x] `content-calendar.md` — 4 weeks of posts
- [x] Diagnostic lead gen architecture (describe it, draw it)
- [x] WF1–3 live demo in Pipedrive
- [x] Tool signup list with costs

### To prepare before the meeting
- [ ] Draft first 3 LinkedIn posts from the content calendar (show him what pre-written looks like)
- [ ] Draft Act II email templates from his existing documents (remove his blocker)
- [ ] Confirm WF1-3 are tested and working before the call

---

## WHAT MATT NEEDS TO DECIDE / ACTION IN THE MEETING

| Item | Why it matters |
|---|---|
| Approve brand direction (brand doc, content calendar) | Unlocks post drafting and LinkedIn scheduling |
| Confirm diagnostic lead gen interest | Unlocks Framer form + WF6 build |
| Sign up: Apollo, HeyReach, Metricool, Opus Clip | Unlocks Phase 3 outbound build |
| DNS access (Namecheap) — SPF/DKIM for connect.goelevateyou.com | Unlocks Apollo cold email domain warmup |
| Review Act II template drafts (if we prep them) | Unlocks WF4 — the core product delivery |
| Provide Executive Brief Excel structure | Unlocks WF5 — reporting automation |

---

## HOW TO FRAME STREAMLAB'S VALUE IN THIS MEETING

Matt is a COO. He measures value by:
1. Things that got done without him having to manage them
2. Systems that scale his capacity
3. Speed relative to expectation

**The framing that will land:**
> "We've been running ahead of the build. Month 1 is complete. Month 2 workflows are launching. We also built your personal brand engine from your existing materials — you didn't ask for it, but you have a 4-week content calendar ready to go. The next things that are waiting are on your side — 4 tool signups and the Act II templates. Once those land, we can finish the engine."

That positions StreamLab as executing ahead of expectation and puts the ball clearly in Matt's court — without making him feel chased.
