import{b as a}from"./iframe-D531RR4Q.js";import"./cosmoz-dropdown-next-B8eART19.js";import"./preload-helper-PPVm8Dsz.js";const S=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],{expect:s,userEvent:u,waitFor:p}=__STORYBOOK_MODULE_TEST__,I={title:"Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["autodocs"],argTypes:{placement:{control:"select",options:S,description:"CSS anchor position-area value. See MDN for all available options."},openOnHover:{control:"boolean",description:"Open dropdown on hover."},openOnFocus:{control:"boolean",description:"Open dropdown when the trigger receives focus."}},args:{placement:"bottom span-right",openOnHover:!1,openOnFocus:!1}},l=(o,n,e)=>a`
    <cosmoz-dropdown-next
        placement=${o.placement}
        ?open-on-hover=${o.openOnHover}
        ?open-on-focus=${o.openOnFocus}
    >
        <cosmoz-button slot="button">${n}</cosmoz-button>
        ${e}
    </cosmoz-dropdown-next>
`,v={render:o=>l(o,"Open Menu",a`<div class="dropdown-content">
                <input
                    type="text"
                    placeholder="Search..."
                    class="dropdown-search-input"
                    autofocus
                />
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next"),e=n.querySelector('[slot="button"]'),r=()=>n.shadowRoot.querySelector("[popover]");await p(()=>{s(r()).toBeTruthy()}),await u.click(e),await p(()=>{const t=r();s(t?.matches(":popover-open")).toBe(!0)}),await u.click(e),await p(()=>{const t=r();s(t?.matches(":popover-open")).toBe(!1)})}},m={args:{openOnHover:!0},render:o=>l(o,"Hover me",a`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await p(()=>{s(t()).toBeTruthy()}),await n("Dropdown has open-on-hover attribute",async()=>{s(e.hasAttribute("open-on-hover")).toBe(!0)}),await n("Click toggles the dropdown",async()=>{const c=t()?.matches(":popover-open");r.click(),await new Promise(T=>setTimeout(T,50));const d=t()?.matches(":popover-open");s(d).toBe(!c)}),await n("Click again toggles the dropdown back",async()=>{const c=t()?.matches(":popover-open");r.click(),await new Promise(T=>setTimeout(T,50));const d=t()?.matches(":popover-open");s(d).toBe(!c)})}},w={args:{openOnFocus:!0},render:o=>l(o,"Focus me",a`<div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>`),play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await p(()=>{s(t()).toBeTruthy()}),await n("Dropdown has open-on-focus attribute",async()=>{s(e.hasAttribute("open-on-focus")).toBe(!0)}),await n("Focus opens the dropdown",async()=>{t()?.matches(":popover-open")&&(r.click(),await new Promise(c=>setTimeout(c,50))),r.focus(),await p(()=>{s(t()?.matches(":popover-open")).toBe(!0)})})}},h={args:{openOnFocus:!0},render:o=>a`
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
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('input[slot="button"]'),t=()=>e.shadowRoot.querySelector("[popover]");await p(()=>{s(t()).toBeTruthy()}),await n("Clicking the input opens and keeps the dropdown open",async()=>{await u.click(r),await p(()=>{s(t()?.matches(":popover-open")).toBe(!0)})})}},g={render:o=>a`
        <div>
            <cosmoz-dropdown-next placement=${o.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=e.querySelector("#inside"),i=o.querySelector("#outside"),c=()=>e.shadowRoot.querySelector("[popover]");await p(()=>{s(c()).toBeTruthy()}),await n("Open the dropdown",async()=>{await u.click(r),await p(()=>{s(c()?.matches(":popover-open")).toBe(!0)})}),await n("Focus inside then outside closes the dropdown",async()=>{t.focus(),i.focus(),await new Promise(d=>setTimeout(d,150)),s(c()?.matches(":popover-open")).toBe(!1)})}},y={render:o=>a`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=e.querySelector("#first"),i=e.querySelector("#second"),c=()=>e.shadowRoot.querySelector("[popover]");await p(()=>{s(c()).toBeTruthy()}),await n("Open the dropdown",async()=>{await u.click(r),await p(()=>{s(c()?.matches(":popover-open")).toBe(!0)})}),await n("Moving focus within the popover keeps it open",async()=>{t.focus(),i.focus(),await new Promise(d=>setTimeout(d,150)),s(c()?.matches(":popover-open")).toBe(!0)})}},b={render:o=>a`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),r=e.querySelector('[slot="button"]'),t=e.querySelector("#close-btn"),i=()=>e.shadowRoot.querySelector("[popover]");await p(()=>{s(i()).toBeTruthy()}),await n("Open the dropdown",async()=>{await u.click(r),await p(()=>{s(i()?.matches(":popover-open")).toBe(!0)})}),await n("focus() then blur() closes the dropdown",async()=>{t.focus(),t.blur(),await new Promise(c=>setTimeout(c,150)),s(i()?.matches(":popover-open")).toBe(!1)})}},f={render:o=>a`
        <div class="position-grid">
            <!-- Top Left -->
            <div class="position-top-left">
                ${l(o,"Top Left",a`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Top Right -->
            <div class="position-top-right">
                ${l(o,"Top Right",a`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Left -->
            <div class="position-bottom-left">
                ${l(o,"Bottom Left",a`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>

            <!-- Bottom Right -->
            <div class="position-bottom-right">
                ${l(o,"Bottom Right",a`<div class="dropdown-content">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>`)}
            </div>
        </div>
    `};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Basic dropdown with custom content.
Click the button to toggle the popover.`,...v.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Hover mode opens the dropdown on pointer enter and closes on pointer leave.
Click still works as a fallback for accessibility and mobile.`,...m.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Focus mode opens the dropdown when the trigger receives keyboard focus.
Useful for navigation menus where keyboard accessibility is important.`,...w.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Focus mode with a text input as the trigger.
Regression test: clicking an input triggers focusin (on mousedown) before
the click event. If the click handler used toggle() instead of open(),
the popover would open on focusin then immediately close on click.`,...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div>
            <cosmoz-dropdown-next placement=\${args.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    const inside = dropdown.querySelector('#inside') as HTMLElement;
    const outside = canvasElement.querySelector('#outside') as HTMLElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Open the dropdown', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover()?.matches(':popover-open')).toBe(true);
      });
    });
    await step('Focus inside then outside closes the dropdown', async () => {
      inside.focus();
      outside.focus();
      await new Promise(r => setTimeout(r, 150));
      expect(getPopover()?.matches(':popover-open')).toBe(false);
    });
  }
}`,...g.parameters?.docs?.source},description:{story:`Verifies the popover closes when focus leaves the dropdown.
The native Popover API only handles click-outside and Escape;
this tests the focusout handler that fills the Tab-out gap.`,...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    const first = dropdown.querySelector('#first') as HTMLElement;
    const second = dropdown.querySelector('#second') as HTMLElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Open the dropdown', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover()?.matches(':popover-open')).toBe(true);
      });
    });
    await step('Moving focus within the popover keeps it open', async () => {
      first.focus();
      second.focus();
      await new Promise(r => setTimeout(r, 150));
      expect(getPopover()?.matches(':popover-open')).toBe(true);
    });
  }
}`,...y.parameters?.docs?.source},description:{story:`Verifies focus movement between elements inside the popover
does not close it. The debounced scheduleClose re-checks
:focus-within before closing.`,...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    const closeBtn = dropdown.querySelector('#close-btn') as HTMLElement;
    const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;
    await waitFor(() => {
      expect(getPopover()).toBeTruthy();
    });
    await step('Open the dropdown', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover()?.matches(':popover-open')).toBe(true);
      });
    });
    await step('focus() then blur() closes the dropdown', async () => {
      closeBtn.focus();
      closeBtn.blur();
      await new Promise(r => setTimeout(r, 150));
      expect(getPopover()?.matches(':popover-open')).toBe(false);
    });
  }
}`,...b.parameters?.docs?.source},description:{story:`Verifies the focus() → blur() close pattern works.
This is how cosmoz-omnitable-settings closes its dropdown
programmatically without relying on open-on-focus.`,...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Demonstrates position fallbacks when near viewport edges.
The dropdown will flip to stay visible when there's not enough space.`,...f.parameters?.docs?.description}}};const P=["Basic","HoverMode","FocusMode","FocusModeInput","CloseOnFocusout","FocusWithinStaysOpen","FocusBlurClose","PositionFallbacks"];export{v as Basic,g as CloseOnFocusout,b as FocusBlurClose,w as FocusMode,h as FocusModeInput,y as FocusWithinStaysOpen,m as HoverMode,f as PositionFallbacks,P as __namedExportsOrder,I as default};
