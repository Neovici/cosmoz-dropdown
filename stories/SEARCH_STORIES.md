# Searchable Dropdown Storybook Stories

This document describes the Storybook stories available for the searchable dropdown feature.

## Available Stories

### 1. **SearchableList**
Basic searchable dropdown list with fruit items. Demonstrates the core search and filter functionality.

**Component:** `cosmoz-dropdown-list-searchable`

### 2. **SearchableMenu**
Searchable dropdown menu with navigation items. Shows how the searchable dropdown works in a menu context.

**Component:** `cosmoz-dropdown-menu-searchable`

### 3. **WithClickHandlers**
Demonstrates integration with click event handlers. Each item dispatches a custom `item-selected` event when clicked.

**Features:**
- Custom event dispatching
- Event bubbling and composition
- Integration pattern example

### 4. **LargeDataset**
Tests the search feature with a large dataset (195+ countries). Ideal for performance testing and demonstrating search efficiency.

**Use Case:** Shows how search helps users quickly find items in long lists.

### 5. **WithButtons**
Searchable dropdown containing button elements. Shows keyboard and mouse interaction with focusable elements.

**Features:**
- Button elements with click handlers
- Action-based event dispatching
- Mixed interactive content

### 6. **MixedContent**
Demonstrates handling of mixed content types: div elements, buttons, and anchor links.

**Use Case:** Real-world scenario where dropdowns contain various HTML elements.

### 7. **SearchableMenuWithStyling**
Styled searchable menu showing custom CSS integration.

**Features:**
- Custom styling example
- Hover effects
- Professional appearance

### 8. **AutoFocusDemo**
Demonstrates the automatic focus behavior on the search input when the dropdown opens.

**Feature Highlight:** Search input receives focus automatically for immediate typing.

### 9. **KeyboardNavigationDemo**
Comprehensive demonstration of all keyboard navigation features with instructions.

**Keyboard Controls:**
- **ArrowDown:** Move focus to next item (or first item from search)
- **ArrowUp:** Move focus to previous item (or last item from search)
- **Enter:** Select focused item (or single filtered result from search)
- **Escape:** Clear search and return focus to search input

## Testing the Stories

1. Run Storybook:
   ```bash
   npm run storybook
   ```

2. Navigate to "Cosmoz Dropdown/Search" in the sidebar

3. Try each story to explore different aspects of the searchable dropdown

## Key Features to Test

### Search Functionality
- Type in the search input to filter items
- Search is case-insensitive
- Partial matches are supported

### Keyboard Navigation
- Use arrow keys to navigate filtered results
- Press Enter to select an item
- Press Escape to clear search

### Auto-Focus
- Search input receives focus when dropdown opens
- Allows immediate typing without clicking

### Accessibility
- ARIA attributes for screen readers
- Keyboard-only navigation support
- Proper focus management

## Development Notes

The stories are built using:
- **@pionjs/pion** for web component hooks
- **lit-html** for templating
- **@storybook/web-components** for story framework

Each story is self-contained and demonstrates a specific use case or feature of the searchable dropdown component.
