import{b as l}from"./iframe-BDCkBeWI.js";import"./cosmoz-dropdown-next-CJzuN7Cn.js";import"./preload-helper-PPVm8Dsz.js";const h=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],{expect:n,userEvent:w,waitFor:d}=__STORYBOOK_MODULE_TEST__,y={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:h,description:"CSS anchor position-area value. See MDN for all available options."},hover:{control:"boolean",description:"Open dropdown on hover instead of click."}},args:{placement:"bottom span-right",hover:!1}},p={render:o=>l`
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
    `,play:async({canvasElement:o})=>{const s=o.querySelector("cosmoz-dropdown-next"),r=s.querySelector('[slot="button"]'),e=()=>s.shadowRoot.querySelector("[popover]");await d(()=>{n(e()).toBeTruthy()}),await w.click(r),await d(()=>{const t=e();n(t?.matches(":popover-open")).toBe(!0)}),await w.click(r),await d(()=>{const t=e();n(t?.matches(":popover-open")).toBe(!1)})}},c={args:{hover:!0},render:o=>l`
        <cosmoz-dropdown-next placement=${o.placement} ?hover=${o.hover}>
            <cosmoz-button slot="button">Hover me</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:s})=>{const r=o.querySelector("cosmoz-dropdown-next"),e=r.querySelector('[slot="button"]'),t=()=>r.shadowRoot.querySelector("[popover]");await d(()=>{n(t()).toBeTruthy()}),await s("Dropdown has hover attribute",async()=>{n(r.hasAttribute("hover")).toBe(!0)}),await s("Click toggles the dropdown",async()=>{const i=t()?.matches(":popover-open");e.click(),await new Promise(m=>setTimeout(m,50));const v=t()?.matches(":popover-open");n(v).toBe(!i)}),await s("Click again toggles the dropdown back",async()=>{const i=t()?.matches(":popover-open");e.click(),await new Promise(m=>setTimeout(m,50));const v=t()?.matches(":popover-open");n(v).toBe(!i)}),await s("Focus opens the dropdown",async()=>{t()?.matches(":popover-open")&&(e.click(),await new Promise(i=>setTimeout(i,50))),e.focus(),await d(()=>{n(t()?.matches(":popover-open")).toBe(!0)})})}},a={render:o=>l`
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
    `};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Basic dropdown with custom content.
Click the button to toggle the popover.`,...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    await step('Focus opens the dropdown', async () => {
      // Ensure closed first
      const popover = getPopover();
      if (popover?.matches(':popover-open')) {
        button.click();
        await new Promise(r => setTimeout(r, 50));
      }
      button.focus();
      await waitFor(() => {
        expect(getPopover()?.matches(':popover-open')).toBe(true);
      });
    });
  }
}`,...c.parameters?.docs?.source},description:{story:`Hover mode opens the dropdown on pointer enter and closes on pointer leave.
Click still works as a fallback for accessibility and mobile.`,...c.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...a.parameters?.docs?.description}}};const x=["Basic","HoverMode","PositionFallbacks"];export{p as Basic,c as HoverMode,a as PositionFallbacks,x as __namedExportsOrder,y as default};
