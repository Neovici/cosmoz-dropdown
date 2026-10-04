import"./cosmoz-dropdown-next-CuQ9QRCx.js";import{b as p}from"./iframe-CN03i2pC.js";import"./cosmoz-dropdown-next-CP5UayFg.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o,userEvent:l,waitFor:s}=__STORYBOOK_MODULE_TEST__,I={title:"Tests/Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["!autodocs"],args:{placement:"bottom span-right"}},r=t=>t.shadowRoot.querySelector("[popover]"),u={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await s(()=>{o(r(e)).toBeTruthy()}),await n("Popover is initially closed",async()=>{o(r(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)}),await n("Setting opened = true opens the popover",async()=>{e.opened=!0,await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})})}},m={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await s(()=>{o(r(e)).toBeTruthy()}),await n("Open via click",async()=>{a.click(),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})}),await n("Setting opened = false closes the popover",async()=>{e.opened=!1,await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},w={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await s(()=>{o(r(e)).toBeTruthy()}),await n("Open via property",async()=>{e.opened=!0,await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0)})}),await n("Native hidePopover() syncs property back to false",async()=>{r(e).hidePopover?.(),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},v={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await s(()=>{o(r(e)).toBeTruthy()});const c=[];e.addEventListener("opened-changed",(d=>{c.push(d.detail.value)})),await n("Click to open fires opened-changed with true",async()=>{a.click(),await s(()=>{o(c).toContain(!0)})}),await n("Click to close fires opened-changed with false",async()=>{a.click(),await s(()=>{o(c).toContain(!1)})})}},h={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await s(()=>{o(r(e)).toBeTruthy()}),await n("Initially no opened attribute",async()=>{o(e.hasAttribute("opened")).toBe(!1)}),await n("opened = true adds attribute",async()=>{e.opened=!0,await s(()=>{o(e.hasAttribute("opened")).toBe(!0)})}),await n("opened = false removes attribute",async()=>{e.opened=!1,await s(()=>{o(e.hasAttribute("opened")).toBe(!1)})})}},b={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="inside">Inside</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await s(()=>{o(r(e)).toBeTruthy()}),await n("Open via click",async()=>{a.click(),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0)})}),await n("Programmatic close via .opened = false",async()=>{e.opened=!1,await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},y={render:t=>p`
        <div>
            <cosmoz-dropdown-next placement=${t.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),c=e.querySelector("#inside"),d=t.querySelector("#outside");await s(()=>{o(r(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(a),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0)})}),await n("Focus inside then outside closes the dropdown",async()=>{c.focus(),d.focus(),await new Promise(i=>setTimeout(i,150)),o(r(e)?.matches(":popover-open")).toBe(!1)})}},g={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),c=e.querySelector("#first"),d=e.querySelector("#second");await s(()=>{o(r(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(a),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0)})}),await n("Moving focus within the popover keeps it open",async()=>{c.focus(),d.focus(),await new Promise(i=>setTimeout(i,150)),o(r(e)?.matches(":popover-open")).toBe(!0)})}},x={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),c=e.querySelector("#close-btn");await s(()=>{o(r(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(a),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0)})}),await n("focus() then blur() closes the dropdown",async()=>{c.focus(),c.blur(),await new Promise(d=>setTimeout(d,150)),o(r(e)?.matches(":popover-open")).toBe(!1)})}},f={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement} disabled passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await n("No popover element in shadow DOM",async()=>{const a=e.shadowRoot.querySelector("[popover]");o(a).toBeNull()}),await n("Default slot is rendered inline",async()=>{const a=e.shadowRoot.querySelector("slot:not([name])");o(a).toBeTruthy(),o(a.closest("[popover]")).toBeNull()}),await n("Slotted content is visible",async()=>{const c=e.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0});o(c.length).toBeGreaterThan(0)})}},z={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement} passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await n("Popover element exists (passthrough without disabled has no effect)",async()=>{const c=e.shadowRoot.querySelector("[popover]");o(c).toBeTruthy()}),await n("Click toggles popover normally",async()=>{await l.click(a),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!0)})}),await n("Click closes popover normally",async()=>{await l.click(a),await s(()=>{o(r(e)?.matches(":popover-open")).toBe(!1)})})}},T=t=>t.querySelector('[slot="button"]'),B={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button class="pick">Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=T(e),c=r(e);await s(()=>o(a).toBeTruthy()),await n("closed reads aria-expanded=false",async()=>{o(a.getAttribute("aria-expanded")).toBe("false")}),await n("opening reconciles",async()=>{e.opened=!0,await s(()=>o(a.getAttribute("aria-expanded")).toBe("true"))}),await n("platform close also reconciles",async()=>{c.hidePopover(),await s(()=>o(a.getAttribute("aria-expanded")).toBe("false"))}),await n("and a select-close",async()=>{e.opened=!0,await s(()=>o(a.getAttribute("aria-expanded")).toBe("true")),e.querySelector(".pick").dispatchEvent(new Event("select",{bubbles:!0})),await s(()=>o(a.getAttribute("aria-expanded")).toBe("false"))})}},E={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=T(e),c=r(e),d=()=>e.querySelector(".pick");await n("dismissal with focus inside restores the invoker",async()=>{a.focus(),l.click(a),await s(()=>o(c.matches(":popover-open")).toBe(!0)),d().focus(),c.hidePopover(),await s(()=>o(document.activeElement===a||c.getRootNode().activeElement===a).toBe(!0))}),await n("select-close keeps focus on the pick",async()=>{a.focus(),l.click(a),await s(()=>o(c.matches(":popover-open")).toBe(!0)),d().focus(),d().dispatchEvent(new Event("select",{bubbles:!0})),await s(()=>o(c.matches(":popover-open")).toBe(!1)),o(c.getRootNode().activeElement===d()||document.activeElement===d()).toBe(!0)}),await n("dismissal with focus elsewhere does not steal it",async()=>{a.focus(),l.click(a),await s(()=>o(c.matches(":popover-open")).toBe(!0));const i=document.createElement("button");document.body.appendChild(i),i.focus(),c.hidePopover(),await s(()=>o(c.matches(":popover-open")).toBe(!1)),o(document.activeElement).toBe(i),i.remove()})}},S={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <div class="dropdown-content"><div>Item 1</div></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t})=>{const n=t.querySelector("cosmoz-dropdown-next");n.opened=!0,await s(()=>{o(r(n)?.matches(":popover-open")).toBe(!0)}),n.opened=!1,await s(()=>{o(r(n)?.matches(":popover-open")).toBe(!1)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Verifies that setting `opened = true` programmatically opens the popover\nand reflects the `opened` attribute on the host element.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Verifies that setting `opened = false` programmatically closes an open\npopover and removes the `opened` attribute.",...m.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      getPopover(dropdown)!.hidePopover?.();
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
        expect(dropdown.opened).toBe(false);
        expect(dropdown.hasAttribute('opened')).toBe(false);
      });
    });
  }
}`,...w.parameters?.docs?.source},description:{story:"Verifies that browser-initiated close (e.g., light-dismiss, Escape)\nsyncs the `opened` property and attribute back to `false`.\n\nWe simulate by calling `hidePopover()` directly on the native popover\nelement, which fires the same `toggle` event that light-dismiss and\nEscape produce. Synthetic click-outside and keyboard Escape don't\nreliably reach the top-layer popover in storybook's test iframe.",...w.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Verifies that `opened-changed` events fire when the state changes\nvia user interactions (click to open, Escape to close).\n\nNote: `opened-changed` is dispatched by `useProperty`'s internal setter,\nwhich is called from `toggle()` (click) and `onToggle` (Escape/light-dismiss).\nDirect property assignment (`dropdown.opened = true`) bypasses the setter\nand does not dispatch the event — this is by design, matching the\nconvention of other `useProperty`-based components.",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Verifies that the `opened` attribute is reflected on the host element:\npresent when open, absent when closed.",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Verifies that a parent component can programmatically close the dropdown\nby setting `.opened = false` on the element.",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Verifies the popover closes when focus leaves the dropdown.
The native Popover API only handles click-outside and Escape;
this tests the focusout handler that fills the Tab-out gap.`,...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Verifies focus movement between elements inside the popover
does not close it. The debounced scheduleClose re-checks
:focus-within before closing.`,...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Verifies the focus() -> blur() close pattern works.
This is how cosmoz-omnitable-settings closes its dropdown
programmatically without relying on open-on-focus.`,...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} disabled passthrough>
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
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement;
    await step('No popover element in shadow DOM', async () => {
      const popover = dropdown.shadowRoot!.querySelector('[popover]');
      expect(popover).toBeNull();
    });
    await step('Default slot is rendered inline', async () => {
      const slot = dropdown.shadowRoot!.querySelector('slot:not([name])');
      expect(slot).toBeTruthy();
      expect(slot!.closest('[popover]')).toBeNull();
    });
    await step('Slotted content is visible', async () => {
      const slot = dropdown.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const assigned = slot.assignedElements({
        flatten: true
      });
      expect(assigned.length).toBeGreaterThan(0);
    });
  }
}`,...f.parameters?.docs?.source},description:{story:"Verifies that when `disabled` + `passthrough` are both set, the default\nslot renders in normal document flow — no popover element exists in the\nshadow DOM, and the slotted content is visible.",...f.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} passthrough>
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
    await step('Popover element exists (passthrough without disabled has no effect)', async () => {
      const popover = dropdown.shadowRoot!.querySelector('[popover]');
      expect(popover).toBeTruthy();
    });
    await step('Click toggles popover normally', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
      });
    });
    await step('Click closes popover normally', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
      });
    });
  }
}`,...z.parameters?.docs?.source},description:{story:"Verifies that `passthrough` without `disabled` has no effect — the popover\nelement is still rendered and the dropdown behaves normally.",...z.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button class="pick">Item 1</button>
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
    const button = getInvoker(dropdown);
    const popover = getPopover(dropdown)!;
    await waitFor(() => expect(button).toBeTruthy());
    await step('closed reads aria-expanded=false', async () => {
      expect(button.getAttribute('aria-expanded')).toBe('false');
    });
    await step('opening reconciles', async () => {
      dropdown.opened = true;
      await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('true'));
    });
    await step('platform close also reconciles', async () => {
      popover.hidePopover();
      await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('false'));
    });
    await step('and a select-close', async () => {
      dropdown.opened = true;
      await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('true'));
      dropdown.querySelector('.pick')!.dispatchEvent(new Event('select', {
        bubbles: true
      }));
      await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('false'));
    });
  }
}`,...B.parameters?.docs?.source},description:{story:"The dropdown reconciles the slotted invoker's `aria-expanded` to the\npopover's own `toggle` state, over every close path - the API, light\ndismiss, Escape (simulated as `hidePopover()`, see NativeCloseSyncs\nProperty), and a `select` from the content.",...B.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
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
    const button = getInvoker(dropdown);
    const popover = getPopover(dropdown)!;
    const pick = () => dropdown.querySelector('.pick') as HTMLElement;
    await step('dismissal with focus inside restores the invoker', async () => {
      button.focus();
      (userEvent as never as {
        click: (t: HTMLElement) => Promise<void>;
      }).click(button);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      pick().focus();
      // platform close path, as Escape and light dismiss report themselves
      popover.hidePopover();
      // the popover's display flip settles focus a few ticks after the
      // toggle event; the dropdown restores the invoker once it does
      await waitFor(() => expect(document.activeElement === button || (popover.getRootNode() as Document).activeElement === button).toBe(true));
    });
    await step('select-close keeps focus on the pick', async () => {
      button.focus();
      (userEvent as never as {
        click: (t: HTMLElement) => Promise<void>;
      }).click(button);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      pick().focus();
      pick().dispatchEvent(new Event('select', {
        bubbles: true
      }));
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
      expect((popover.getRootNode() as Document).activeElement === pick() || document.activeElement === pick()).toBe(true);
    });
    await step('dismissal with focus elsewhere does not steal it', async () => {
      button.focus();
      (userEvent as never as {
        click: (t: HTMLElement) => Promise<void>;
      }).click(button);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      const outside = document.createElement('button');
      document.body.appendChild(outside);
      outside.focus();
      popover.hidePopover();
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
      expect(document.activeElement).toBe(outside);
      outside.remove();
    });
  }
}`,...E.parameters?.docs?.source},description:{story:`Focus restore. A manual popover moves no focus when it hides; the
dropdown hands it back to the invoker on dismissal, but not on a
select-close, where the picked content acted on itself.`,...E.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <div class="dropdown-content"><div>Item 1</div></div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    dropdown.opened = true;
    await waitFor(() => {
      expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
    });
    dropdown.opened = false;
    await waitFor(() => {
      expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
    });
  }
}`,...S.parameters?.docs?.source},description:{story:"no invoker, none of the above: rendering with an empty button slot is a no-op",...S.parameters?.docs?.description}}};const A=["OpenedPropertyOpens","OpenedPropertyCloses","NativeCloseSyncsProperty","OpenedChangedEvent","AttributeReflection","ProgrammaticCloseFromParent","CloseOnFocusout","FocusWithinStaysOpen","FocusBlurClose","PassthroughRendersInline","PassthroughWithoutDisabled","InvokerAriaExpandedReconciles","DismissalRestoresInvokerFocus","NoInvokerIsANoop"];export{h as AttributeReflection,y as CloseOnFocusout,E as DismissalRestoresInvokerFocus,x as FocusBlurClose,g as FocusWithinStaysOpen,B as InvokerAriaExpandedReconciles,w as NativeCloseSyncsProperty,S as NoInvokerIsANoop,v as OpenedChangedEvent,m as OpenedPropertyCloses,u as OpenedPropertyOpens,f as PassthroughRendersInline,z as PassthroughWithoutDisabled,b as ProgrammaticCloseFromParent,A as __namedExportsOrder,I as default};
