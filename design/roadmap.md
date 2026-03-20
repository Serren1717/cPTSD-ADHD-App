# Roadmap — First Steps

Each step is one sitting. Do one, stop, come back later. No step depends on perfection — just completion.

---

## Phase 0 — Ground (Set up so you never lose work)

### 0.1 — Project skeleton
- [ ] Create folder structure: `src/`, `src/css/`, `src/js/`, `design/`
- [ ] Create `index.html` with a blank page that says "it works"
- [ ] Open it in a browser. See the words. Done.

### 0.2 — Version control habit
- [ ] `git add . && git commit -m "skeleton"`
- [ ] Push to GitHub
- [ ] Rule: commit after every step below. Not at the end — after each one.

---

## Phase 1 — The Pool (Your data, your words)

This is the foundation. Nothing else works without it.

### 1.1 — Pool data structure
- [x] In a JS file, define what a pool item looks like:
  - `id` (string — unique identifier for tracking accept/reject patterns later)
  - `name` (string — what the thing is)
  - `state` (which of the five states it belongs to)
  - `effort` (1, 2, or 3 — small, medium, big)
  - `duration` (number — honest estimate in minutes, not aspirational)
  - `category` (string — e.g. "Self-Care", "Learning", "Responsibility")
- [x] Hardcode 3–5 example items. Console.log them. Done.
- [x] Create micro and macro versions of the same activity for different states

### 1.2 — Pool display
- [ ] Render the hardcoded items as a visible list on the page
- [ ] Each item shows its name, state, and effort level
- [ ] Ugly is fine. Visible is the goal.

### 1.3 — Pool input
- [ ] Add a form: text input for name, dropdown for state, three buttons for effort
- [ ] Submitting the form adds the item to the list on screen
- [ ] No validation, no error handling. It works or it doesn't.

### 1.4 — Pool persistence
- [ ] Save the pool to `localStorage` on every change
- [ ] Load it back on page open
- [ ] Test: add an item, close the tab, reopen. It's still there. Done.

### 1.5 — Pool editing
- [ ] Add a delete button to each item
- [ ] Add an edit button (or tap-to-edit) so items can be changed
- [ ] This is pool hygiene — it matters more than it seems

**Commit. Push. Walk away if you want.**

---

## Phase 2 — The Check-In (Where are you right now?)

### 2.1 — Simple state selection
- [ ] Five large, coloured tap targets — one per state
- [ ] Each one has a colour, a shape or texture, and one small optional word
- [ ] Tapping one sets the current state in a JS variable
- [ ] No wheel yet. Just the targets. Get the mapping right first.

### 2.2 — State descriptions
- [ ] Under or beside each target, add 2–3 body-sensation words (e.g. Shutdown: "heavy, slow, flat")
- [ ] These are not labels — they're recognition prompts
- [ ] Test with yourself: can you find your state in under 5 seconds when you're actually in it?

### 2.3 — State-to-suggestion wiring
- [ ] After selecting a state, filter the pool to items matching that state
- [ ] Display one item from the filtered pool at random
- [ ] This is the core loop. It should feel like the app "knows" what to show you.

**Commit. Push. This is already a usable prototype.**

---

## Phase 3 — The Suggestion Loop (One thing at a time)

### 3.1 — Accept / not-this-one
- [ ] Two buttons under the suggestion: "I'll do this" and "Not this one"
- [ ] "Not this one" surfaces a different item from the filtered pool
- [ ] "I'll do this" records the choice (in memory for now) and shows a simple confirmation
- [ ] No other words. No "are you sure". No friction.

### 3.2 — Completion
- [ ] After accepting, add a "Done" button somewhere reachable
- [ ] Tapping "Done" marks the item as completed this session
- [ ] Show a small visual acknowledgement — a colour shift, a checkmark, a +1. Something.

### 3.3 — Effort filtering
- [ ] In Shutdown, only surface effort level 1 items
- [ ] In Blocked, surface effort 1–2
- [ ] In Activated/Momentum/Grounded, surface all effort levels
- [ ] This is the rule that makes the app feel safe in low states

### 3.4 — Exit cost filtering
- [ ] Add `exitCost` field to pool items ("low", "medium", "high")
- [ ] In Shutdown, never suggest high exit-cost tasks — you may not have the executive function to disengage
- [ ] In Blocked, limit to low–medium exit cost
- [ ] This protects against hyperfocus traps in low-energy states

### 3.5 — Task type and forced soothe
- [ ] Add `type` field to pool items: "productive", "soothe", or "maintenance"
- [ ] "Soothe" tasks are not productivity — they are nervous system regulation (e.g. "Listen to 1 song")
- [ ] If the user has been in Momentum for 3+ completed tasks, force-suggest a soothe item
- [ ] This is burnout prevention — the app should protect you from your own momentum

### 3.6 — Accept/reject tracking
- [ ] Track which task `id`s are rejected vs accepted
- [ ] Persist to `localStorage`
- [ ] This is the foundation for the app "learning" your patterns later

**Commit. Push. You now have the full MVP loop.**

---

## Phase 4 — The Points (Progress only goes forward)

### 4.1 — Point counter
- [ ] Award points on completion: effort 1 = 5pts, effort 2 = 15pts, effort 3 = 30pts
- [ ] Display a running total somewhere visible but not dominant
- [ ] Persist to `localStorage`

### 4.2 — Character placeholder
- [ ] Add a static pixel art sprite to the page (can be a placeholder image)
- [ ] It doesn't need to change yet — just be present
- [ ] The character is a promise. Its presence is enough for now.

### 4.3 — First evolution
- [ ] At a point threshold (100? 50?), swap the sprite for a second version
- [ ] Just two states for now: before and after
- [ ] The moment it changes for the first time is the emotional hook. Make it feel worth it.

**Commit. Push. The gamification loop exists.**

---

## Phase 5 — The Wheel (When you're ready)

### 5.1 — SVG wheel
- [ ] Replace the five tap targets with an SVG circle divided into five segments
- [ ] Tapping a segment still works the same way
- [ ] See `design/check-in-wheel.md` for the full interaction model

### 5.2 — Drag to spin
- [ ] Add touch/mouse drag to rotate the wheel
- [ ] Track angular velocity, apply friction on release
- [ ] Snap to nearest segment when velocity drops below threshold

### 5.3 — Tactile feedback
- [ ] Vibration API pulse at each segment boundary
- [ ] Visual tick for non-haptic devices
- [ ] Spring easing on the snap landing

### 5.4 — Shrink transition
- [ ] On landing, wheel contracts
- [ ] Landed segment becomes a new sub-wheel at smaller scale
- [ ] Second drag for sub-state selection

**This phase is a stretch goal. Everything before it is the real app.**

---

## Rules for yourself

1. **One phase per energy window.** Don't plan to do two.
2. **Commit after every numbered step**, not after every phase.
3. **Ugly is shipped. Pretty is later.** CSS comes after the loop works.
4. **If you open the project and don't want to code, add items to your pool.** Using the app is also building it.
5. **No step here requires another person's approval.** Every step ends with something that works on your machine.
