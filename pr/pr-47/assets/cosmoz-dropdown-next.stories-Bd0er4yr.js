import{b as e}from"./iframe-DoqgaviG.js";import"./cosmoz-dropdown-next-ApcTRU35.js";import"./preload-helper-PPVm8Dsz.js";const d=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],p={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:d,description:"CSS anchor position-area value. See MDN for all available options."}},args:{placement:"bottom span-right"}},t={render:o=>e`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <div class="dropdown-content">
                <input
                    type="text"
                    placeholder="Search..."
                    class="dropdown-search-input"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    `},n={render:o=>e`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                <cosmoz-dropdown-next placement=${o.placement}>
                    <cosmoz-button slot="button">Top Left</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Top Right -->
            <div class="position-top-right">
                <cosmoz-dropdown-next placement=${o.placement}>
                    <cosmoz-button slot="button">Top Right</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Left -->
            <div class="position-bottom-left">
                <cosmoz-dropdown-next placement=${o.placement}>
                    <cosmoz-button slot="button">Bottom Left</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Right -->
            <div class="position-bottom-right">
                <cosmoz-dropdown-next placement=${o.placement}>
                    <cosmoz-button slot="button">Bottom Right</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>
        </div>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <div class="dropdown-content">
                <input
                    type="text"
                    placeholder="Search..."
                    class="dropdown-search-input"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    \`
}`,...t.parameters?.docs?.source},description:{story:`Basic dropdown with custom content.
Click the button to toggle the popover.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Top Left</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Top Right -->
            <div class="position-top-right">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Top Right</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Left -->
            <div class="position-bottom-left">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Bottom Left</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Right -->
            <div class="position-bottom-right">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Bottom Right</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>
        </div>
    \`
}`,...n.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...n.parameters?.docs?.description}}};const m=["Basic","PositionFallbacks"];export{t as Basic,n as PositionFallbacks,m as __namedExportsOrder,p as default};
