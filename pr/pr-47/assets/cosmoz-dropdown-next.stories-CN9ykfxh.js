import{b as l}from"./iframe-DowZj-MQ.js";import"./cosmoz-dropdown-next-DD-C4eGL.js";import"./preload-helper-PPVm8Dsz.js";const w=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],{expect:e,userEvent:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,x={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:w,description:"CSS anchor position-area value. See MDN for all available options."},hover:{control:"boolean",description:"Open dropdown on hover instead of click."}},args:{placement:"bottom span-right",hover:!1}},i={render:o=>l`
        <cosmoz-dropdown-next placement=${o.placement} ?hover=${o.hover}>
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
    `,play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next"),s=n.querySelector('[slot="button"]'),r=()=>n.shadowRoot.querySelector("[popover]");await d(()=>{e(r()).toBeTruthy()}),await u.click(s),await d(()=>{const t=r();e(t?.matches(":popover-open")).toBe(!0)}),await u.click(s),await d(()=>{const t=r();e(t?.matches(":popover-open")).toBe(!1)})}},c={args:{hover:!0},render:o=>l`
        <cosmoz-dropdown-next placement=${o.placement} ?hover=${o.hover}>
            <cosmoz-button slot="button">Hover me</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const s=o.querySelector("cosmoz-dropdown-next"),r=s.querySelector('[slot="button"]'),t=()=>s.shadowRoot.querySelector("[popover]");await d(()=>{e(t()).toBeTruthy()}),await n("Dropdown has hover attribute",async()=>{e(s.hasAttribute("hover")).toBe(!0)}),await n("Click toggles the dropdown",async()=>{const a=t()?.matches(":popover-open");r.click(),await new Promise(m=>setTimeout(m,50));const v=t()?.matches(":popover-open");e(v).toBe(!a)}),await n("Click again toggles the dropdown back",async()=>{const a=t()?.matches(":popover-open");r.click(),await new Promise(m=>setTimeout(m,50));const v=t()?.matches(":popover-open");e(v).toBe(!a)})}},p={render:o=>l`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                <cosmoz-dropdown-next placement=${o.placement} ?hover=${o.hover}>
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
                <cosmoz-dropdown-next placement=${o.placement} ?hover=${o.hover}>
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
                <cosmoz-dropdown-next placement=${o.placement} ?hover=${o.hover}>
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
                <cosmoz-dropdown-next placement=${o.placement} ?hover=${o.hover}>
                    <cosmoz-button slot="button">Bottom Right</cosmoz-button>
                    <div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </cosmoz-dropdown-next>
            </div>
        </div>
    `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} ?hover=\${args.hover}>
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
    \`,
  play: async ({
    canvasElement
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]');

    // Wait for component to render
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });

    // Click opens the popover
    await userEvent.click(button);
    await waitFor(() => {
      const popover = getPopover();
      expect(popover?.matches(':popover-open')).toBe(true);
    });

    // Click again closes it
    await userEvent.click(button);
    await waitFor(() => {
      const popover = getPopover();
      expect(popover?.matches(':popover-open')).toBe(false);
    });
  }
}`,...i.parameters?.docs?.source},description:{story:`Basic dropdown with custom content.
Click the button to toggle the popover.`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    hover: true
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} ?hover=\${args.hover}>
            <cosmoz-button slot="button">Hover me</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;

    // Wait for the component to render and the effect to set up
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Dropdown has hover attribute', async () => {
      expect(dropdown.hasAttribute('hover')).toBe(true);
    });

    // Note: Hover behavior is difficult to test in automated tests because
    // synthetic pointer events don't behave exactly like real user interactions.
    // The hover functionality works correctly in manual testing.
    // We test click toggle behavior here.

    await step('Click toggles the dropdown', async () => {
      // Get initial state
      const popover = getPopover();
      const wasOpen = popover?.matches(':popover-open');

      // Use direct click to avoid userEvent's pointer simulation
      // which triggers hover behavior
      button.click();

      // Small delay to let the click handler run
      await new Promise(r => setTimeout(r, 50));
      const isOpen = getPopover()?.matches(':popover-open');
      expect(isOpen).toBe(!wasOpen);
    });
    await step('Click again toggles the dropdown back', async () => {
      const popover = getPopover();
      const wasOpen = popover?.matches(':popover-open');
      button.click();
      await new Promise(r => setTimeout(r, 50));
      const isOpen = getPopover()?.matches(':popover-open');
      expect(isOpen).toBe(!wasOpen);
    });
  }
}`,...c.parameters?.docs?.source},description:{story:`Hover mode opens the dropdown on pointer enter and closes on pointer leave.
Click still works as a fallback for accessibility and mobile.`,...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                <cosmoz-dropdown-next placement=\${args.placement} ?hover=\${args.hover}>
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
                <cosmoz-dropdown-next placement=\${args.placement} ?hover=\${args.hover}>
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
                <cosmoz-dropdown-next placement=\${args.placement} ?hover=\${args.hover}>
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
                <cosmoz-dropdown-next placement=\${args.placement} ?hover=\${args.hover}>
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
}`,...p.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...p.parameters?.docs?.description}}};const y=["Basic","HoverMode","PositionFallbacks"];export{i as Basic,c as HoverMode,p as PositionFallbacks,y as __namedExportsOrder,x as default};
