---
'@neovici/cosmoz-dropdown': patch
---

`cosmoz-dropdown-next` forwards `aria-expanded` onto its slotted trigger, following the popover's own state on every close path: the `opened` API, light dismiss, Escape/back, and a `select` from the content. The attribute states `false` on mount and follows slotted changes. Slot the trigger element itself — a native button/controlled element, or a custom element that forwards (e.g. `cosmoz-button` 2.2.3+); any wrapper receives the attributes without exposing state, so a wrapper that isn't itself a slot announces nothing. No trigger slotted: nothing is written.

Consumers syncing `aria-expanded` from `dropdown-toggle` can stop: the dropdown writes it now.
