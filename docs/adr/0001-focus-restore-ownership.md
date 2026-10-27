# 1. `cosmoz-dropdown-next` owns dismissal focus restore programmatically

- Status: accepted (PR #85)
- Date: 2026-10-27

## Context

`cosmoz-dropdown-next` shows its popover programmatically (`showPopover()`)
and drives state from the `opened` property. The slotted trigger is an
arbitrary element — a native button for some consumers, a custom widget
surface for others (cosmoz-autocomplete's field).

The popover platform restores focus to the invoker on dismissal, but only
for attribute invocations (`popovertarget` on a button element). Every
JS-driven arrangement was measured and gets no such service:

| arrangement                                          | UA restores on dismissal? |
| ---------------------------------------------------- | ------------------------- |
| `popovertarget` attribute invocation                 | yes — the invoker         |
| `showPopover({ source })`                            | no (tab order only)       |
| `popoverTargetElement = x`, JS show, non-button host | no                        |
| `popoverTargetElement = x`, JS show, real button     | no                        |
| bare `showPopover()`                                 | no                        |

(Evidence: a 12-experiment vanilla probe in current Chromium and Firefox,
reproducible with `node docs/adr/lab/run.mjs chromium|firefox`. The
attribute invocation restores in both engines; none of the JS forms
restore in either.)

Consequences of the platform gap:

- `#81` added the component's own dismissal restore. Its loss check ran at
  the popover's toggle task, which fires ~150 ms before the hide commits,
  so a focused element behind nested shadow roots with a positioned
  wrapper (cosmoz-input's search field) reads a non-null `offsetParent`
  for the whole window; Chromium keeps the read non-null until the commit
  while Firefox reads it `null` immediately. The check therefore misread
  "deliberate move" and Chromium dropped focus to `body` on dismissal.
- PR #85 completes that restore: after the first check it re-checks while
  the hide commits and restores only when focus still reads lost; visible
  deliberate moves stay untouched.

Adopting invocation was considered and rejected for now:

- The trigger is an arbitrary element. Invocation requires the activation
  to flow through a button, so it can never serve all consumers — the
  custom-trigger case would still need the component's own restore.
  Nothing is deleted by a hybrid; two systems coexist.
- The popover element lives inside the component's shadow root. Consumers
  cannot wire `popovertarget` themselves: the IDREF resolves in the light
  tree, and the component would have to know the trigger kind.
- `opened` is a public, consumer-driven property. Under invocation the UA
  owns show and close (light dismiss, Escape), making `opened` derived
  and `open-on-focus` / `open-on-hover` second close owners beside the
  UA's light dismiss — a rearchitecture with a regression surface for
  every consumer.

## Decision

1. Keep the programmatic show/hide with `opened` as the single source of
   state truth.
2. Keep dismissal focus restore as the component's own job for all trigger
   shapes (`#81` plus the PR #85 commit-phase re-check).
3. Do not adopt `popovertarget` invocation. Revisit when: the platform
   extends the hide restore to `source`-shown or property-recorded
   invokers (whatwg/html#9169 discusses related semantics), or a
   requirement pins all consumers to native-button triggers.

## Consequences

- The re-check stays in the core: a bounded ~250 ms visibility poll on
  dismissal, negligible on Firefox and instant-commit paths.
- The component keeps two close owners (its own `focusout` scheduling and
  the UA light dismiss); acceptable because both close paths funnel into
  the same toggle handler.
- A future platform change that grants hide restore to JS-recorded
  invokers can replace the restore layer wholesale without API change;
  consumers are unaffected either way.
- Button-trigger consumers do not gain the UA's free restore; the
  component's own restore covers them identically.
