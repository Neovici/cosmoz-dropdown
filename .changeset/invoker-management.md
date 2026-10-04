---
'@neovici/cosmoz-dropdown': minor
---

`cosmoz-dropdown-next` manages its invoker

The dropdown now reconciles the slotted invoker's `aria-expanded` against the popover's own `toggle` state - covering every close path: the `opened` API, light dismiss, Escape / back (the `popover="auto"` close-request stack), and a `select` dispatched from inside the content. Consumers no longer hand-roll the attribute sync from `dropdown-toggle` events.

Where focus lands when a popover hides decides the restore: focus that went to something real - a picked row, the thing that took it on purpose - stays; **lost focus** (nobody has it: `<body>`) is handed back to the invoker. A manual popover moves no focus when it hides, so focus that was inside used to be lost into the void - and in shadow-host geometries (a dropdown inside another component's shadow root) the platform's own focus fixup misfires and drops it to `<body>` even where the spec says to restore, so the dropdown's restore is the only functioning one there. The reconciler waits out the display flip before checking, since the platform's fixup is a queued task that may run after the `toggle` event.

This makes `cosmoz-dropdown-next` renderable inside other components' shadow trees (menus, tabs with overflow menus) without losing keyboard focus on dismissal. Consumers that render no invoker are unaffected.
