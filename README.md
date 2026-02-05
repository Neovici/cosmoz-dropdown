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

| Property        | Type      | Default               | Description                                                                                                              |
| --------------- | --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `placement`     | `string`  | `'bottom span-right'` | CSS anchor `position-area` value. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position-area) for options. |
| `open-on-hover` | `boolean` | `false`               | Open on pointer hover.                                                                                                   |
| `open-on-focus` | `boolean` | `false`               | Open when the trigger receives focus.                                                                                    |

#### Auto-open Modes

The `open-on-hover` and `open-on-focus` attributes can be used independently or together:

```html
<!-- Open on hover only -->
<cosmoz-dropdown-next open-on-hover>
	<button slot="button">Hover me</button>
	<div>Content appears on hover</div>
</cosmoz-dropdown-next>

<!-- Open on focus only -->
<cosmoz-dropdown-next open-on-focus>
	<button slot="button">Focus me</button>
	<div>Content appears on focus</div>
</cosmoz-dropdown-next>

<!-- Open on hover or focus -->
<cosmoz-dropdown-next open-on-hover open-on-focus>
	<button slot="button">Hover or focus</button>
	<div>Content appears on either</div>
</cosmoz-dropdown-next>
```

When auto-open is enabled:

- The dropdown closes with a 100ms delay to allow moving between trigger and content
- Click still works as a toggle regardless of these settings

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
