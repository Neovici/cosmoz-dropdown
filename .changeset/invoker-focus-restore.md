---
'@neovici/cosmoz-dropdown': patch
---

`cosmoz-dropdown-next` restores keyboard focus to the slotted trigger on dismissal. After the dropdown closes, focus either went to something visible or is back on the trigger — never lost to nothing-active, `<body>`, or now-hidden content. Escape, back, light dismiss, `select` from the content, and `opened = false` all restore; a deliberate focus move (to a visible element) is never stolen over.
