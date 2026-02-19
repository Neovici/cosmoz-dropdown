import{b as d}from"./iframe-U2RIhFh2.js";import"./cosmoz-dropdown-next-DvHWjtds.js";/* empty css                             */import"./preload-helper-PPVm8Dsz.js";const{expect:o,userEvent:f,waitFor:r}=__STORYBOOK_MODULE_TEST__,S={title:"Tests/Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["!autodocs"],args:{placement:"bottom span-right"}},s=t=>t.shadowRoot.querySelector("[popover]"),i={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await r(()=>{o(s(e)).toBeTruthy()}),await n("Popover is initially closed",async()=>{o(s(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)}),await n("Setting opened = true opens the popover",async()=>{e.opened=!0,await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})})}},l={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await r(()=>{o(s(e)).toBeTruthy()}),await n("Open via click",async()=>{a.click(),await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})}),await n("Setting opened = false closes the popover",async()=>{e.opened=!1,await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},u={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await r(()=>{o(s(e)).toBeTruthy()}),await n("Open via property",async()=>{e.opened=!0,await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!0)})}),await n("Native hidePopover() syncs property back to false",async()=>{s(e).hidePopover(),await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},m={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await r(()=>{o(s(e)).toBeTruthy()});const c=[];e.addEventListener("opened-changed",(p=>{c.push(p.detail.value)})),await n("Click to open fires opened-changed with true",async()=>{a.click(),await r(()=>{o(c).toContain(!0)})}),await n("Click to close fires opened-changed with false",async()=>{a.click(),await r(()=>{o(c).toContain(!1)})})}},w={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await r(()=>{o(s(e)).toBeTruthy()}),await n("Initially no opened attribute",async()=>{o(e.hasAttribute("opened")).toBe(!1)}),await n("opened = true adds attribute",async()=>{e.opened=!0,await r(()=>{o(e.hasAttribute("opened")).toBe(!0)})}),await n("opened = false removes attribute",async()=>{e.opened=!1,await r(()=>{o(e.hasAttribute("opened")).toBe(!1)})})}},v={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="inside">Inside</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await r(()=>{o(s(e)).toBeTruthy()}),await n("Open via click",async()=>{a.click(),await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0)})}),await n("Programmatic close via .opened = false",async()=>{e.opened=!1,await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},h={render:t=>d`
        <div>
            <cosmoz-dropdown-next placement=${t.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),c=e.querySelector("#inside"),p=t.querySelector("#outside");await r(()=>{o(s(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await f.click(a),await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!0)})}),await n("Focus inside then outside closes the dropdown",async()=>{c.focus(),p.focus(),await new Promise(g=>setTimeout(g,150)),o(s(e)?.matches(":popover-open")).toBe(!1)})}},y={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),c=e.querySelector("#first"),p=e.querySelector("#second");await r(()=>{o(s(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await f.click(a),await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!0)})}),await n("Moving focus within the popover keeps it open",async()=>{c.focus(),p.focus(),await new Promise(g=>setTimeout(g,150)),o(s(e)?.matches(":popover-open")).toBe(!0)})}},b={render:t=>d`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),c=e.querySelector("#close-btn");await r(()=>{o(s(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await f.click(a),await r(()=>{o(s(e)?.matches(":popover-open")).toBe(!0)})}),await n("focus() then blur() closes the dropdown",async()=>{c.focus(),c.blur(),await new Promise(p=>setTimeout(p,150)),o(s(e)?.matches(":popover-open")).toBe(!1)})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
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
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Popover is initially closed', async () => {
      expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
      expect(dropdown.opened).toBe(false);
      expect(dropdown.hasAttribute('opened')).toBe(false);
    });
    await step('Setting opened = true opens the popover', async () => {
      dropdown.opened = true;
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
        expect(dropdown.hasAttribute('opened')).toBe(true);
      });
    });
  }
}`,...i.parameters?.docs?.source},description:{story:"Verifies that setting `opened = true` programmatically opens the popover\nand reflects the `opened` attribute on the host element.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
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
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Open via click', async () => {
      button.click();
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
        expect(dropdown.opened).toBe(true);
        expect(dropdown.hasAttribute('opened')).toBe(true);
      });
    });
    await step('Setting opened = false closes the popover', async () => {
      dropdown.opened = false;
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
        expect(dropdown.hasAttribute('opened')).toBe(false);
      });
    });
  }
}`,...l.parameters?.docs?.source},description:{story:"Verifies that setting `opened = false` programmatically closes an open\npopover and removes the `opened` attribute.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Open via property', async () => {
      dropdown.opened = true;
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
      });
    });
    await step('Native hidePopover() syncs property back to false', async () => {
      // Simulate browser-initiated close (light-dismiss / Escape).
      // hidePopover() fires the native toggle event, same as
      // light-dismiss and Escape key.
      getPopover(dropdown)!.hidePopover();
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
        expect(dropdown.opened).toBe(false);
        expect(dropdown.hasAttribute('opened')).toBe(false);
      });
    });
  }
}`,...u.parameters?.docs?.source},description:{story:"Verifies that browser-initiated close (e.g., light-dismiss, Escape)\nsyncs the `opened` property and attribute back to `false`.\n\nWe simulate by calling `hidePopover()` directly on the native popover\nelement, which fires the same `toggle` event that light-dismiss and\nEscape produce. Synthetic click-outside and keyboard Escape don't\nreliably reach the top-layer popover in storybook's test iframe.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    const events: boolean[] = [];
    dropdown.addEventListener('opened-changed', ((e: CustomEvent<{
      value: boolean;
    }>) => {
      events.push(e.detail.value);
    }) as EventListener);
    await step('Click to open fires opened-changed with true', async () => {
      button.click();
      await waitFor(() => {
        expect(events).toContain(true);
      });
    });
    await step('Click to close fires opened-changed with false', async () => {
      button.click();
      await waitFor(() => {
        expect(events).toContain(false);
      });
    });
  }
}`,...m.parameters?.docs?.source},description:{story:"Verifies that `opened-changed` events fire when the state changes\nvia user interactions (click to open, Escape to close).\n\nNote: `opened-changed` is dispatched by `useProperty`'s internal setter,\nwhich is called from `toggle()` (click) and `onToggle` (Escape/light-dismiss).\nDirect property assignment (`dropdown.opened = true`) bypasses the setter\nand does not dispatch the event — this is by design, matching the\nconvention of other `useProperty`-based components.",...m.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Initially no opened attribute', async () => {
      expect(dropdown.hasAttribute('opened')).toBe(false);
    });
    await step('opened = true adds attribute', async () => {
      dropdown.opened = true;
      await waitFor(() => {
        expect(dropdown.hasAttribute('opened')).toBe(true);
      });
    });
    await step('opened = false removes attribute', async () => {
      dropdown.opened = false;
      await waitFor(() => {
        expect(dropdown.hasAttribute('opened')).toBe(false);
      });
    });
  }
}`,...w.parameters?.docs?.source},description:{story:"Verifies that the `opened` attribute is reflected on the host element:\npresent when open, absent when closed.",...w.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="inside">Inside</button>
            </div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Open via click', async () => {
      button.click();
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
        expect(dropdown.opened).toBe(true);
      });
    });
    await step('Programmatic close via .opened = false', async () => {
      // Simulate a parent component closing the dropdown
      dropdown.opened = false;
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
        expect(dropdown.opened).toBe(false);
        expect(dropdown.hasAttribute('opened')).toBe(false);
      });
    });
  }
}`,...v.parameters?.docs?.source},description:{story:"Verifies that a parent component can programmatically close the dropdown\nby setting `.opened = false` on the element.",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Open the dropdown', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
      });
    });
    await step('Focus inside then outside closes the dropdown', async () => {
      inside.focus();
      outside.focus();
      await new Promise(r => setTimeout(r, 150));
      expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
    });
  }
}`,...h.parameters?.docs?.source},description:{story:`Verifies the popover closes when focus leaves the dropdown.
The native Popover API only handles click-outside and Escape;
this tests the focusout handler that fills the Tab-out gap.`,...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Open the dropdown', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
      });
    });
    await step('Moving focus within the popover keeps it open', async () => {
      first.focus();
      second.focus();
      await new Promise(r => setTimeout(r, 150));
      expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
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
    await waitFor(() => {
      expect(getPopover(dropdown)).toBeTruthy();
    });
    await step('Open the dropdown', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
      });
    });
    await step('focus() then blur() closes the dropdown', async () => {
      closeBtn.focus();
      closeBtn.blur();
      await new Promise(r => setTimeout(r, 150));
      expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
    });
  }
}`,...b.parameters?.docs?.source},description:{story:`Verifies the focus() -> blur() close pattern works.
This is how cosmoz-omnitable-settings closes its dropdown
programmatically without relying on open-on-focus.`,...b.parameters?.docs?.description}}};const E=["OpenedPropertyOpens","OpenedPropertyCloses","NativeCloseSyncsProperty","OpenedChangedEvent","AttributeReflection","ProgrammaticCloseFromParent","CloseOnFocusout","FocusWithinStaysOpen","FocusBlurClose"];export{w as AttributeReflection,h as CloseOnFocusout,b as FocusBlurClose,y as FocusWithinStaysOpen,u as NativeCloseSyncsProperty,m as OpenedChangedEvent,l as OpenedPropertyCloses,i as OpenedPropertyOpens,v as ProgrammaticCloseFromParent,E as __namedExportsOrder,S as default};
