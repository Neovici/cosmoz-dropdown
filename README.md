# cosmoz-dropdown

A dropdown web component built with [pionjs](https://github.com/pionjs/pion) and lit-html.

## Install

```sh
npm install @neovici/cosmoz-dropdown
```

## Components

### cosmoz-dropdown

Classic dropdown with floating-ui positioning.

```js
import '@neovici/cosmoz-dropdown';
```

```html
<cosmoz-dropdown-menu>
  <span slot="button">Menu</span>
  <div>Item 1</div>
  <div>Item 2</div>
</cosmoz-dropdown-menu>
```

### cosmoz-dropdown-next

Next-gen dropdown using the Popover API and CSS Anchor Positioning.

```js
import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
```

```html
<cosmoz-dropdown-next placement="bottom span-right">
  <button slot="button">Open</button>
  <div>Popover content</div>
</cosmoz-dropdown-next>
```

The `placement` prop accepts any CSS [`position-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/position-area) value.

## Storybook

https://neovici.github.io/cosmoz-dropdown/
