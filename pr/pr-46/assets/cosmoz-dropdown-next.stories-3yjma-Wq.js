import{b as i}from"./iframe-DO-sCaDZ.js";import"./cosmoz-dropdown-next-Cz8EMp8e.js";import"./preload-helper-PPVm8Dsz.js";const d=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],c={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:d,description:"CSS anchor position-area value. See MDN for all available options."}},args:{placement:"bottom span-right"}},e=`
    background: var(--cz-color-bg-primary);
    border-radius: var(--cz-radius-md);
    box-shadow: var(--cz-shadow-lg);
    padding: calc(var(--cz-spacing) * 2);
`,o={render:t=>i`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <div style=${e}>
                <input
                    type="text"
                    placeholder="Search..."
                    style="margin-bottom: 8px; padding: 4px;"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    `},n={render:t=>i`
        <div
            style="
                position: relative;
                height: 100vh;
                padding: 8px;
                box-sizing: border-box;
            "
        >
            <!-- Top Left -->
            <div style="position: absolute; top: 8px; left: 8px;">
                <cosmoz-dropdown-next placement=${t.placement}>
                    <cosmoz-button slot="button">Top Left</cosmoz-button>
                    <div style=${e}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Top Right -->
            <div style="position: absolute; top: 8px; right: 8px;">
                <cosmoz-dropdown-next placement=${t.placement}>
                    <cosmoz-button slot="button">Top Right</cosmoz-button>
                    <div style=${e}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Left -->
            <div style="position: absolute; bottom: 8px; left: 8px;">
                <cosmoz-dropdown-next placement=${t.placement}>
                    <cosmoz-button slot="button">Bottom Left</cosmoz-button>
                    <div style=${e}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Right -->
            <div style="position: absolute; bottom: 8px; right: 8px;">
                <cosmoz-dropdown-next placement=${t.placement}>
                    <cosmoz-button slot="button">Bottom Right</cosmoz-button>
                    <div style=${e}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>
        </div>
    `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <div style=\${contentStyle}>
                <input
                    type="text"
                    placeholder="Search..."
                    style="margin-bottom: 8px; padding: 4px;"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    \`
}`,...o.parameters?.docs?.source},description:{story:`Basic dropdown with custom content.
Click the button to toggle the popover.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div
            style="
                position: relative;
                height: 100vh;
                padding: 8px;
                box-sizing: border-box;
            "
        >
            <!-- Top Left -->
            <div style="position: absolute; top: 8px; left: 8px;">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Top Left</cosmoz-button>
                    <div style=\${contentStyle}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Top Right -->
            <div style="position: absolute; top: 8px; right: 8px;">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Top Right</cosmoz-button>
                    <div style=\${contentStyle}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Left -->
            <div style="position: absolute; bottom: 8px; left: 8px;">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Bottom Left</cosmoz-button>
                    <div style=\${contentStyle}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>

            <!-- Bottom Right -->
            <div style="position: absolute; bottom: 8px; right: 8px;">
                <cosmoz-dropdown-next placement=\${args.placement}>
                    <cosmoz-button slot="button">Bottom Right</cosmoz-button>
                    <div style=\${contentStyle}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>
        </div>
    \`
}`,...n.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...n.parameters?.docs?.description}}};const r=["Basic","PositionFallbacks"];export{o as Basic,n as PositionFallbacks,r as __namedExportsOrder,c as default};
