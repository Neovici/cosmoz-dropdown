---
'@neovici/cosmoz-dropdown': patch
---

`cosmoz-dropdown-next` now closes when the open trigger is clicked again, also with `open-on-focus`. Before, light dismiss closed it on pointerup and the click reopened it. With `open-on-hover` a click still only opens.
