import{b as i}from"./iframe-XJXXQxNL.js";import"./cosmoz-dropdown-next-CN2q76yJ.js";import"./preload-helper-PPVm8Dsz.js";const b=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],{expect:r,userEvent:g,waitFor:a}=__STORYBOOK_MODULE_TEST__,T={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:b,description:"CSS anchor position-area value. See MDN for all available options."},openOnHover:{control:"boolean",description:"Open dropdown on hover."},openOnFocus:{control:"boolean",description:"Open dropdown when the trigger receives focus."}},args:{placement:"bottom span-right",openOnHover:!1,openOnFocus:!1}},p=(o,n,t)=>i`
    <cosmoz-dropdown-next
        placement=${o.placement}
        ?open-on-hover=${o.openOnHover}
        ?open-on-focus=${o.openOnFocus}
    >
        <cosmoz-button slot="button">${n}</cosmoz-button>
        ${t}
    </cosmoz-dropdown-next>
`,c={render:o=>p(o,"Open Menu",i`<div class="dropdown-content">
                <input
                    type="text"
                    placeholder="Search..."
                    class="dropdown-search-input"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next"),t=n.querySelector('[slot="button"]'),s=()=>n.shadowRoot.querySelector("[popover]");await a(()=>{r(s()).toBeTruthy()}),await g.click(t),await a(()=>{const e=s();r(e?.matches(":popover-open")).toBe(!0)}),await g.click(t),await a(()=>{const e=s();r(e?.matches(":popover-open")).toBe(!1)})}},v={args:{openOnHover:!0},render:o=>p(o,"Hover me",i`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const t=o.querySelector("cosmoz-dropdown-next"),s=t.querySelector('[slot="button"]'),e=()=>t.shadowRoot.querySelector("[popover]");await a(()=>{r(e()).toBeTruthy()}),await n("Dropdown has open-on-hover attribute",async()=>{r(t.hasAttribute("open-on-hover")).toBe(!0)}),await n("Click toggles the dropdown",async()=>{const d=e()?.matches(":popover-open");s.click(),await new Promise(w=>setTimeout(w,50));const u=e()?.matches(":popover-open");r(u).toBe(!d)}),await n("Click again toggles the dropdown back",async()=>{const d=e()?.matches(":popover-open");s.click(),await new Promise(w=>setTimeout(w,50));const u=e()?.matches(":popover-open");r(u).toBe(!d)})}},l={args:{openOnFocus:!0},render:o=>p(o,"Focus me",i`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const t=o.querySelector("cosmoz-dropdown-next"),s=t.querySelector('[slot="button"]'),e=()=>t.shadowRoot.querySelector("[popover]");await a(()=>{r(e()).toBeTruthy()}),await n("Dropdown has open-on-focus attribute",async()=>{r(t.hasAttribute("open-on-focus")).toBe(!0)}),await n("Focus opens the dropdown",async()=>{e()?.matches(":popover-open")&&(s.click(),await new Promise(d=>setTimeout(d,50))),s.focus(),await a(()=>{r(e()?.matches(":popover-open")).toBe(!0)})})}},m={render:o=>i`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                ${p(o,"Top Left",i`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Top Right -->
            <div class="position-top-right">
                ${p(o,"Top Right",i`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Left -->
            <div class="position-bottom-left">
                ${p(o,"Bottom Left",i`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Right -->
            <div class="position-bottom-right">
                ${p(o,"Bottom Right",i`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>
        </div>
    `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => renderDropdown(args, 'Open Menu', html\`<div class="dropdown-content">
                <input
                    type="text"
                    placeholder="Search..."
                    class="dropdown-search-input"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>\`),
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
}`,...c.parameters?.docs?.source},description:{story:`Basic dropdown with custom content.
Click the button to toggle the popover.`,...c.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    openOnHover: true
  },
  render: args => renderDropdown(args, 'Hover me', html\`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>\`),
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Dropdown has open-on-hover attribute', async () => {
      expect(dropdown.hasAttribute('open-on-hover')).toBe(true);
    });

    // Note: Hover behavior is difficult to test in automated tests because
    // synthetic pointer events don't behave exactly like real user interactions.
    // The hover functionality works correctly in manual testing.
    // We test click toggle behavior here.

    await step('Click toggles the dropdown', async () => {
      const popover = getPopover();
      const wasOpen = popover?.matches(':popover-open');

      // Use direct click to avoid userEvent's pointer simulation
      // which triggers hover behavior
      button.click();
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
}`,...v.parameters?.docs?.source},description:{story:`Hover mode opens the dropdown on pointer enter and closes on pointer leave.
Click still works as a fallback for accessibility and mobile.`,...v.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    openOnFocus: true
  },
  render: args => renderDropdown(args, 'Focus me', html\`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>\`),
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Dropdown has open-on-focus attribute', async () => {
      expect(dropdown.hasAttribute('open-on-focus')).toBe(true);
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
}`,...l.parameters?.docs?.source},description:{story:`Focus mode opens the dropdown when the trigger receives keyboard focus.
Useful for navigation menus where keyboard accessibility is important.`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                \${renderDropdown(args, 'Top Left', html\`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>\`)}
            </div>

            <!-- Top Right -->
            <div class="position-top-right">
                \${renderDropdown(args, 'Top Right', html\`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>\`)}
            </div>

            <!-- Bottom Left -->
            <div class="position-bottom-left">
                \${renderDropdown(args, 'Bottom Left', html\`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>\`)}
            </div>

            <!-- Bottom Right -->
            <div class="position-bottom-right">
                \${renderDropdown(args, 'Bottom Right', html\`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>\`)}
            </div>
        </div>
    \`
}`,...m.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...m.parameters?.docs?.description}}};const B=["Basic","HoverMode","FocusMode","PositionFallbacks"];export{c as Basic,l as FocusMode,v as HoverMode,m as PositionFallbacks,B as __namedExportsOrder,T as default};
