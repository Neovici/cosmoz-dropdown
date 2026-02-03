import{b as o}from"./iframe-DCH9ByOY.js";import"./cosmoz-menu-label-CKxMYdFg.js";import"./cosmoz-dropdown-next-DoemZQmN.js";import{p as w,b as $,f as x,m,i as g,g as i,s as h,a as S}from"./story-helpers-BZ4qBkkK.js";import"./preload-helper-PPVm8Dsz.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,T={title:"Cosmoz Dropdown Menu Next",component:"cosmoz-dropdown-menu-next",tags:["autodocs"],argTypes:{searchable:{control:"boolean",description:"Show search input"},placeholder:{control:"text",description:"Search input placeholder text"},placement:{control:"select",options:w,description:"CSS anchor position-area value. See MDN for all available options."},onSelect:{action:"select",description:"Fired when a menu item is selected"}},args:{searchable:!1,placeholder:"Search...",placement:"bottom span-right",onSelect:f()}},n={render:e=>o`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                .source=${$}
                @select=${e.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    `},t={args:{searchable:!0,placeholder:"Search actions..."},render:e=>o`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Open Searchable Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                .source=${m(h)}
                @select=${e.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    `},r={render:e=>o`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Open Grouped Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                .source=${i}
                @select=${e.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    `},s={args:{searchable:!0,placeholder:"Type a command..."},render:e=>o`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Open Grouped Searchable Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                .source=${m(i)}
                @select=${e.onSelect}
            >
                <div slot="no-results">
                    <p style="padding: 16px; text-align: center; color: #666;">
                        No commands found. Try a different search term.
                    </p>
                </div>
            </cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    `},c={render:e=>o`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Open Menu with Disabled Items</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                .source=${g}
                @select=${e.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    `},a={args:{searchable:!0,placeholder:"Search (async)..."},render:e=>{const b=async p=>{await new Promise(d=>setTimeout(d,500));const u=h;if(!p.trim())return u;const z=p.toLowerCase();return u.filter(d=>d.label.toLowerCase().includes(z))};return o`
            <cosmoz-dropdown-next placement=${e.placement}>
                <cosmoz-button slot="button">Open Async Menu</cosmoz-button>
                <cosmoz-dropdown-menu-next
                    autofocus
                    ?searchable=${e.searchable}
                    placeholder=${e.placeholder}
                    .source=${b}
                    @select=${e.onSelect}
                ></cosmoz-dropdown-menu-next>
            </cosmoz-dropdown-next>
        `}},l={args:{searchable:!0,placeholder:"Filter by..."},render:e=>o`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button" variant="secondary">
                ${x} Filters
            </cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                .source=${m(S)}
                @select=${e.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
                .source=\${basicItems}
                @select=\${args.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    \`
}`,...n.parameters?.docs?.source},description:{story:"Basic menu with items using data-driven source.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    placeholder: 'Search actions...'
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Searchable Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
                .source=\${makeSearchable(searchableItems)}
                @select=\${args.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    \`
}`,...t.parameters?.docs?.source},description:{story:"Menu with search functionality. Type to filter menu items.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Grouped Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
                .source=\${groupedItems}
                @select=\${args.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    \`
}`,...r.parameters?.docs?.source},description:{story:"Menu with grouped items organized into sections with labels.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    placeholder: 'Type a command...'
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Grouped Searchable Menu</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
                .source=\${makeSearchable(groupedItems)}
                @select=\${args.onSelect}
            >
                <div slot="no-results">
                    <p style="padding: 16px; text-align: center; color: #666;">
                        No commands found. Try a different search term.
                    </p>
                </div>
            </cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    \`
}`,...s.parameters?.docs?.source},description:{story:"Menu with grouped items and search. Combines grouping with filtering.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Menu with Disabled Items</cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
                .source=\${itemsWithDisabled}
                @select=\${args.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    \`
}`,...c.parameters?.docs?.source},description:{story:"Disabled items cannot be selected and are skipped during keyboard nav.",...c.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    placeholder: 'Search (async)...'
  },
  render: args => {
    const asyncSource = async (query: string): Promise<MenuItem[]> => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const allItems = searchableItems;
      if (!query.trim()) return allItems;
      const q = query.toLowerCase();
      return allItems.filter(item => item.label.toLowerCase().includes(q));
    };
    return html\`
            <cosmoz-dropdown-next placement=\${args.placement}>
                <cosmoz-button slot="button">Open Async Menu</cosmoz-button>
                <cosmoz-dropdown-menu-next
                    autofocus
                    ?searchable=\${args.searchable}
                    placeholder=\${args.placeholder}
                    .source=\${asyncSource}
                    @select=\${args.onSelect}
                ></cosmoz-dropdown-menu-next>
            </cosmoz-dropdown-next>
        \`;
  }
}`,...a.parameters?.docs?.source},description:{story:"Async source - simulates loading items from an API.",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    placeholder: 'Filter by...'
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button" variant="secondary">
                \${filterIcon} Filters
            </cosmoz-button>
            <cosmoz-dropdown-menu-next
                autofocus
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
                .source=\${makeSearchable(filterItems)}
                @select=\${args.onSelect}
            ></cosmoz-dropdown-menu-next>
        </cosmoz-dropdown-next>
    \`
}`,...l.parameters?.docs?.source},description:{story:"Filter menu with grouped options and counts.",...l.parameters?.docs?.description}}};const D=["Basic","WithSearch","WithGroups","WithGroupsAndSearch","WithDisabledItems","AsyncSource","FilterMenu"];export{a as AsyncSource,n as Basic,l as FilterMenu,c as WithDisabledItems,r as WithGroups,s as WithGroupsAndSearch,t as WithSearch,D as __namedExportsOrder,T as default};
