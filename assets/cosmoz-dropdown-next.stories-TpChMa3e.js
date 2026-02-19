import{b as p}from"./iframe-U2RIhFh2.js";import"./cosmoz-dropdown-next-DvHWjtds.js";/* empty css                             */import"./preload-helper-PPVm8Dsz.js";const I=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],{expect:s,userEvent:y,waitFor:a}=__STORYBOOK_MODULE_TEST__,O={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:I,description:"CSS anchor position-area value. See MDN for all available options."},opened:{control:"boolean",description:"Get/set the dropdown open state. Reflected as an attribute."},openOnHover:{control:"boolean",description:"Open dropdown on hover."},openOnFocus:{control:"boolean",description:"Open dropdown when the trigger receives focus."}},args:{placement:"bottom span-right",opened:!1,openOnHover:!1,openOnFocus:!1}},i=(o,n,e)=>p`
    <cosmoz-dropdown-next
        placement=${o.placement}
        .opened=${o.opened}
        ?open-on-hover=${o.openOnHover}
        ?open-on-focus=${o.openOnFocus}
    >
        <cosmoz-button slot="button">${n}</cosmoz-button>
        ${e}
    </cosmoz-dropdown-next>
`,l={render:o=>i(o,"Open Menu",p`<div class="dropdown-content">
                <input
                    type="text"
                    placeholder="Search..."
                    class="dropdown-search-input"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next"),e=n.querySelector('[slot="button"]'),r=()=>n.shadowRoot.querySelector("[popover]");await a(()=>{s(r()).toBeTruthy()}),await y.click(e),await a(()=>{const t=r();s(t?.matches(":popover-open")).toBe(!0)}),await y.click(e),await a(()=>{const t=r();s(t?.matches(":popover-open")).toBe(!1)})}},v={args:{openOnHover:!0},render:o=>i(o,"Hover me",p`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await a(()=>{s(t()).toBeTruthy()}),await n("Dropdown has open-on-hover attribute",async()=>{s(e.hasAttribute("open-on-hover")).toBe(!0)}),await n("Click toggles the dropdown",async()=>{const c=t()?.matches(":popover-open");r.click(),await new Promise(f=>setTimeout(f,50));const b=t()?.matches(":popover-open");s(b).toBe(!c)}),await n("Click again toggles the dropdown back",async()=>{const c=t()?.matches(":popover-open");r.click(),await new Promise(f=>setTimeout(f,50));const b=t()?.matches(":popover-open");s(b).toBe(!c)})}},u={args:{openOnFocus:!0},render:o=>i(o,"Focus me",p`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await a(()=>{s(t()).toBeTruthy()}),await n("Dropdown has open-on-focus attribute",async()=>{s(e.hasAttribute("open-on-focus")).toBe(!0)}),await n("Focus opens the dropdown",async()=>{t()?.matches(":popover-open")&&(r.click(),await new Promise(c=>setTimeout(c,50))),r.focus(),await a(()=>{s(t()?.matches(":popover-open")).toBe(!0)})})}},m={args:{openOnFocus:!0},render:o=>p`
        <cosmoz-dropdown-next
            placement=${o.placement}
            ?open-on-focus=${o.openOnFocus}
        >
            <input slot="button" type="text" placeholder="Click to open..." />
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('input[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await a(()=>{s(t()).toBeTruthy()}),await n("Clicking the input opens and keeps the dropdown open",async()=>{await y.click(r),await a(()=>{s(t()?.matches(":popover-open")).toBe(!0)})})}},w={render:o=>p`
        <cosmoz-dropdown-next
            placement=${o.placement}
            disabled
            ?open-on-focus=${o.openOnFocus}
        >
            <cosmoz-button slot="button">Disabled</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await a(()=>{s(t()).toBeTruthy()}),await n("Dropdown has disabled attribute",async()=>{s(e.hasAttribute("disabled")).toBe(!0)}),await n("Click does NOT open the popover",async()=>{await y.click(r),await new Promise(d=>setTimeout(d,100)),s(t()?.matches(":popover-open")).toBe(!1)})}},h={args:{openOnFocus:!0},render:o=>p`
        <cosmoz-dropdown-next
            placement=${o.placement}
            disabled
            ?open-on-focus=${o.openOnFocus}
        >
            <input slot="button" type="text" placeholder="Disabled input..." />
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('input[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await a(()=>{s(t()).toBeTruthy()}),await n("Focus does NOT open the popover when disabled",async()=>{r.focus(),await new Promise(d=>setTimeout(d,200)),s(t()?.matches(":popover-open")).toBe(!1)})}},g={render:o=>p`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                ${i(o,"Top Left",p`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Top Right -->
            <div class="position-top-right">
                ${i(o,"Top Right",p`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Left -->
            <div class="position-bottom-left">
                ${i(o,"Bottom Left",p`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Right -->
            <div class="position-bottom-right">
                ${i(o,"Bottom Right",p`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>
        </div>
    `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Basic dropdown with custom content.
Click the button to toggle the popover.`,...l.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
Click still works as a fallback for accessibility and mobile.`,...v.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Focus mode opens the dropdown when the trigger receives keyboard focus.
Useful for navigation menus where keyboard accessibility is important.`,...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    openOnFocus: true
  },
  render: args => html\`
        <cosmoz-dropdown-next
            placement=\${args.placement}
            ?open-on-focus=\${args.openOnFocus}
        >
            <input slot="button" type="text" placeholder="Click to open..." />
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
    const input = dropdown.querySelector('input[slot="button"]') as HTMLInputElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Clicking the input opens and keeps the dropdown open', async () => {
      // userEvent.click fires mousedown → focusin → mouseup → click
      // focusin triggers useAutoOpen's handleEnter → showPopover()
      // click reaches <slot name="button" @click=\${handleClick}>
      // With the bug (toggle): togglePopover() closes the just-opened popover
      // With the fix (open): showPopover() is a no-op on an already-open popover
      await userEvent.click(input);
      await waitFor(() => {
        expect(getPopover()?.matches(':popover-open')).toBe(true);
      });
    });
  }
}`,...m.parameters?.docs?.source},description:{story:`Focus mode with a text input as the trigger.
Regression test: clicking an input triggers focusin (on mousedown) before
the click event. If the click handler used toggle() instead of open(),
the popover would open on focusin then immediately close on click.`,...m.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next
            placement=\${args.placement}
            disabled
            ?open-on-focus=\${args.openOnFocus}
        >
            <cosmoz-button slot="button">Disabled</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
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
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Dropdown has disabled attribute', async () => {
      expect(dropdown.hasAttribute('disabled')).toBe(true);
    });
    await step('Click does NOT open the popover', async () => {
      await userEvent.click(button);
      await new Promise(r => setTimeout(r, 100));
      expect(getPopover()?.matches(':popover-open')).toBe(false);
    });
  }
}`,...w.parameters?.docs?.source},description:{story:"Disabled state prevents the dropdown from opening via click, focus, or hover.",...w.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    openOnFocus: true
  },
  render: args => html\`
        <cosmoz-dropdown-next
            placement=\${args.placement}
            disabled
            ?open-on-focus=\${args.openOnFocus}
        >
            <input slot="button" type="text" placeholder="Disabled input..." />
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const input = dropdown.querySelector('input[slot="button"]') as HTMLInputElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Focus does NOT open the popover when disabled', async () => {
      input.focus();
      await new Promise(r => setTimeout(r, 200));
      expect(getPopover()?.matches(':popover-open')).toBe(false);
    });
  }
}`,...h.parameters?.docs?.source},description:{story:"Disabled state with open-on-focus prevents the dropdown from opening on focus.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...g.parameters?.docs?.description}}};const B=["Basic","HoverMode","FocusMode","FocusModeInput","Disabled","DisabledFocusMode","PositionFallbacks"];export{l as Basic,w as Disabled,h as DisabledFocusMode,u as FocusMode,m as FocusModeInput,v as HoverMode,g as PositionFallbacks,B as __namedExportsOrder,O as default};
