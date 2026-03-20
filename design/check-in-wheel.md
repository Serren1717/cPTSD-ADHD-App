# Check-in Wheel — Design Intentions

## Concept

The check-in is a draggable, spinning wheel. The user doesn't need to know their state before opening the app — they spin through the options and something catches. The act of searching *is* the check-in.

## Interaction Model

1. Wheel loads at full size, centred on screen
2. User drags to spin through the five state segments
3. Each segment boundary produces a tactile tick (haptic + visual)
4. On release, the wheel decelerates with friction and lands on a segment
5. A beat of stillness — the landed segment highlights
6. The wheel shrinks; the landed segment becomes a new full wheel at smaller scale
7. User drags again through sub-state descriptors
8. Final landing → wheel contracts to a small persistent dot, app proceeds to suggestion

## Feel

Not a game show spin — slower and heavier than that. More like tuning a dial to a frequency. The user is scanning, not gambling. The resistance mirrors the effort of identifying a state.

## Physics

- Angular momentum derived from drag velocity at release
- Friction coefficient brings the wheel to rest in 1–3 seconds
- Snap-to-segment only triggers below a velocity threshold (no snapping mid-spin)
- Snap landing uses spring easing: small overshoot, settle — satisfying, not abrupt

## Tactile Feedback

- Vibration API for haptic pulse at each segment boundary during drag
- Visual equivalent for non-haptic devices (segment briefly brightens as it passes the indicator)
- The snap/land moment has a distinct, heavier pulse

## Shrink Transition

- Each drill-down level reduces the wheel's physical size
- Meaning: narrowing focus, reducing noise, homing in
- The contraction itself is part of the regulation — each level is a small act of self-recognition

## Levels

- **Level 1** — five state segments (Shutdown, Blocked, Activated, Momentum, Grounded)
- **Level 2** — 3–4 sensory/felt-sense descriptors per state (e.g. Shutdown → heavy / flat / absent / slow)
- **Level 3** — optional intensity or body-location refinement (may be cut for MVP)

## Implementation Notes (for later)

- SVG or Canvas for the wheel rendering
- `requestAnimationFrame` for smooth animation loop
- Track angular velocity from pointer/touch events
- Apply friction coefficient each frame until below snap threshold
- Vibration API: `navigator.vibrate(10)` at each segment crossing
- CSS `transform: rotate()` on the wheel group, or manual canvas redraws
- Spring easing for the snap: ease-out with slight overshoot, not a hard stop
