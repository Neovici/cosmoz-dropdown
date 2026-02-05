# @neovici/cosmoz-dropdown

Dropdown components for Neovici applications.

## Installation

```bash
npm install @neovici/cosmoz-dropdown
```

## Components

### cosmoz-dropdown-next

Modern dropdown using the Popover API and CSS Anchor Positioning.

#### Usage

```html
<script type="module">
	import '@neovici/cosmoz-dropdown';
</script>

<cosmoz-dropdown-next placement="bottom span-right">
	<button slot="button">Open Menu</button>
	<div>Dropdown content</div>
</cosmoz-dropdown-next>
```

#### Properties

| Property    | Type      | Default               | Description                                                                                                              |
| ----------- | --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `placement` | `string`  | `'bottom span-right'` | CSS anchor `position-area` value. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position-area) for options. |
| `hover`     | `boolean` | `false`               | Open on hover instead of click.                                                                                          |

#### Hover Mode

Enable hover-based opening by adding the `hover` attribute:

```html
<cosmoz-dropdown-next hover>
	<button slot="button">Hover me</button>
	<div>Content appears on hover</div>
</cosmoz-dropdown-next>
```

When `hover` is enabled:

- Dropdown opens on `pointerenter` or `focusin`
- Dropdown closes on `pointerleave` / `focusout` (with 100ms delay to allow moving between trigger and content)
- Click still works as a toggle for accessibility and mobile fallback

#### Slots

| Slot      | Description                                 |
| --------- | ------------------------------------------- |
| `button`  | The trigger element that opens the dropdown |
| (default) | The dropdown content                        |

#### Events

The dropdown listens for a `select` event on its content and automatically closes when triggered. This allows menu items to close the dropdown when selected:

```javascript
menuItem.dispatchEvent(new Event('select', { bubbles: true }));
```

## Development

```bash
npm install
npm run storybook:start
```

## Testing

```bash
npm test
```

## License

Apache-2.0
