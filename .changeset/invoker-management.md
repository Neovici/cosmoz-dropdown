---
'@neovici/cosmoz-dropdown': minor
---

`cosmoz-dropdown-next` manages its invoker

The dropdown now reconciles the slotted invoker's `aria-expanded` against the popover's own `toggle` state - covering every close path: the `opened` API, light dismiss, Escape / back (the `popover="auto"` close-request stack), and a `select` dispatched from inside the content. Consumers no longer hand-roll the attribute sync from `dropdown-toggle` events.

It also restores focus to the invoker when the popover is dismissed. A manual popover moves no focus when it hides, so focus that was inside (or that fell to `<body>` after the display flip) used to be lost into the void. A choose-and-close (`select` from inside the content) skips the restore - the picked content acted on itself, e.g. a row that took focus, and handing focus back would undo the pick. Consumers that render no invoker are unaffected.
