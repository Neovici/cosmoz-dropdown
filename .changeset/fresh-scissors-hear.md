---
'@neovici/cosmoz-dropdown': minor
---

Keep dropdown content mounted when closed (#57): the popover content is no longer unmounted on close, so slotted element state (focus, input values, expanded state) is preserved across open/close cycles; popover show/hide lifecycle moved to an effect driven by the active state
