---
'@neovici/cosmoz-dropdown': patch
---

Guard `showPopover`/`hidePopover` calls with optional chaining to prevent crashes on browsers without Popover API support (Chrome < 114, Edge < 114, Safari < 17, Firefox < 125).
