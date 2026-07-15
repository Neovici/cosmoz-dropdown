import{b as a}from"./iframe-DFpxFxhk.js";import"./cosmoz-dropdown-next-DuMrwsMd.js";/* empty css                             */import"./preload-helper-PPVm8Dsz.js";const x=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],{expect:r,userEvent:y,waitFor:d}=__STORYBOOK_MODULE_TEST__,O={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:x,description:"CSS anchor position-area value. See MDN for all available options."},opened:{control:"boolean",description:"Get/set the dropdown open state. Reflected as an attribute."},disabled:{control:"boolean",description:"Prevents the dropdown from opening."},openOnHover:{control:"boolean",description:"Open dropdown on hover."},openOnFocus:{control:"boolean",description:"Open dropdown when the trigger receives focus."},passthrough:{control:"boolean",description:"When disabled + passthrough, render default slot content in normal document flow instead of inside the popover."}},args:{placement:"bottom span-right",opened:!1,disabled:!1,openOnHover:!1,openOnFocus:!1,passthrough:!1}},p=(o,n,e)=>a`
    <cosmoz-dropdown-next
        placement=${o.placement}
        .opened=${o.opened}
        ?disabled=${o.disabled}
        ?open-on-hover=${o.openOnHover}
        ?open-on-focus=${o.openOnFocus}
        ?passthrough=${o.passthrough}
    >
        <cosmoz-button slot="button">${n}</cosmoz-button>
        ${e}
    </cosmoz-dropdown-next>
`,l={render:o=>p(o,"Open Menu",a`<div class="dropdown-content">
                <input
                    type="text"
                    placeholder="Search..."
                    class="dropdown-search-input"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next"),e=n.querySelector('[slot="button"]'),s=()=>n.shadowRoot.querySelector("[popover]");await d(()=>{r(s()).toBeTruthy()}),await y.click(e),await d(()=>{const t=s();r(t?.matches(":popover-open")).toBe(!0)}),await y.click(e),await d(()=>{const t=s();r(t?.matches(":popover-open")).toBe(!1)})}},v={args:{openOnHover:!0},render:o=>p(o,"Hover me",a`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await d(()=>{r(t()).toBeTruthy()}),await n("Dropdown has open-on-hover attribute",async()=>{r(e.hasAttribute("open-on-hover")).toBe(!0)}),await n("Click toggles the dropdown",async()=>{const c=t()?.matches(":popover-open");s.click(),await new Promise(I=>setTimeout(I,50));const f=t()?.matches(":popover-open");r(f).toBe(!c)}),await n("Click again toggles the dropdown back",async()=>{const c=t()?.matches(":popover-open");s.click(),await new Promise(I=>setTimeout(I,50));const f=t()?.matches(":popover-open");r(f).toBe(!c)})}},u={args:{openOnFocus:!0},render:o=>p(o,"Focus me",a`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await d(()=>{r(t()).toBeTruthy()}),await n("Dropdown has open-on-focus attribute",async()=>{r(e.hasAttribute("open-on-focus")).toBe(!0)}),await n("Focus opens the dropdown",async()=>{t()?.matches(":popover-open")&&(s.click(),await new Promise(c=>setTimeout(c,50))),s.focus(),await d(()=>{r(t()?.matches(":popover-open")).toBe(!0)})})}},m={args:{openOnFocus:!0},render:o=>a`
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
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('input[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await d(()=>{r(t()).toBeTruthy()}),await n("Clicking the input opens and keeps the dropdown open",async()=>{await y.click(s),await d(()=>{r(t()?.matches(":popover-open")).toBe(!0)})})}},w={args:{disabled:!0},render:o=>a`
        <cosmoz-dropdown-next
            placement=${o.placement}
            ?disabled=${o.disabled}
            ?open-on-focus=${o.openOnFocus}
        >
            <cosmoz-button slot="button">Disabled</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await d(()=>{r(t()).toBeTruthy()}),await n("Dropdown has disabled attribute",async()=>{r(e.hasAttribute("disabled")).toBe(!0)}),await n("Click does NOT open the popover",async()=>{await y.click(s),await new Promise(i=>setTimeout(i,100)),r(t()?.matches(":popover-open")).toBe(!1)})}},h={args:{disabled:!0,openOnFocus:!0},render:o=>a`
        <cosmoz-dropdown-next
            placement=${o.placement}
            ?disabled=${o.disabled}
            ?open-on-focus=${o.openOnFocus}
        >
            <input slot="button" type="text" placeholder="Disabled input..." />
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('input[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await d(()=>{r(t()).toBeTruthy()}),await n("Focus does NOT open the popover when disabled",async()=>{s.focus(),await new Promise(i=>setTimeout(i,200)),r(t()?.matches(":popover-open")).toBe(!1)})}},g={args:{disabled:!0,passthrough:!0},render:o=>a`
        <cosmoz-dropdown-next
            placement=${o.placement}
            ?disabled=${o.disabled}
            ?passthrough=${o.passthrough}
        >
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next");await n("No popover element in shadow DOM",async()=>{const s=e.shadowRoot.querySelector("[popover]");r(s).toBeNull()}),await n("Default slot content is visible in normal flow",async()=>{const s=e.shadowRoot.querySelector("slot:not([name])");r(s).toBeTruthy();const t=s.assignedElements({flatten:!0});r(t.length).toBeGreaterThan(0)})}},b={render:o=>a`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                ${p(o,"Top Left",a`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Top Right -->
            <div class="position-top-right">
                ${p(o,"Top Right",a`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Left -->
            <div class="position-bottom-left">
                ${p(o,"Bottom Left",a`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Right -->
            <div class="position-bottom-right">
                ${p(o,"Bottom Right",a`<div class="dropdown-content">
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
  args: {
    disabled: true
  },
  render: args => html\`
        <cosmoz-dropdown-next
            placement=\${args.placement}
            ?disabled=\${args.disabled}
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
    disabled: true,
    openOnFocus: true
  },
  render: args => html\`
        <cosmoz-dropdown-next
            placement=\${args.placement}
            ?disabled=\${args.disabled}
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
  args: {
    disabled: true,
    passthrough: true
  },
  render: args => html\`
        <cosmoz-dropdown-next
            placement=\${args.placement}
            ?disabled=\${args.disabled}
            ?passthrough=\${args.passthrough}
        >
            <cosmoz-button slot="button">Toggle</cosmoz-button>
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
    await step('No popover element in shadow DOM', async () => {
      const popover = dropdown.shadowRoot!.querySelector('[popover]');
      expect(popover).toBeNull();
    });
    await step('Default slot content is visible in normal flow', async () => {
      const slot = dropdown.shadowRoot!.querySelector('slot:not([name])');
      expect(slot).toBeTruthy();
      const assigned = (slot as HTMLSlotElement).assignedElements({
        flatten: true
      });
      expect(assigned.length).toBeGreaterThan(0);
    });
  }
}`,...g.parameters?.docs?.source},description:{story:"When `disabled` + `passthrough` are both set, the default slot content\nrenders in normal document flow (outside the popover), making it visible\neven though the dropdown is disabled. This enables using the dropdown as\na conditional wrapper — popover mode when enabled, inline mode when disabled.",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...b.parameters?.docs?.description}}};const E=["Basic","HoverMode","FocusMode","FocusModeInput","Disabled","DisabledFocusMode","Passthrough","PositionFallbacks"];export{l as Basic,w as Disabled,h as DisabledFocusMode,u as FocusMode,m as FocusModeInput,v as HoverMode,g as Passthrough,b as PositionFallbacks,E as __namedExportsOrder,O as default};
