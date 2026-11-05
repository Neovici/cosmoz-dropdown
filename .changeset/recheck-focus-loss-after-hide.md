---
'@neovici/cosmoz-dropdown': patch
---

`cosmoz-dropdown-next` still restores focus to the trigger when the dismissal
content holds focus through its own shadow roots with a positioned wrapper
(a nested search input, like cosmoz-autocomplete's): the inner input's
`offsetParent` stays non-null for the whole hide transition, so the immediate
loss check read it as a deliberate move and the platform's focus drop landed
on `<body>`. The restore now re-checks briefly while the hide commits;
deliberate focus moves are visible afterwards and stay untouched.
