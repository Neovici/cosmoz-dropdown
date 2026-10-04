import"./cosmoz-dropdown-next-D9rqpLQZ.js";import{a as I}from"./cosmoz-dropdown-next-WljbCy9B.js";import{b as p}from"./iframe-DZLx8CrX.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o,userEvent:l,waitFor:s}=__STORYBOOK_MODULE_TEST__,C={title:"Tests/Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["!autodocs"],args:{placement:"bottom span-right"}},c=t=>t.shadowRoot.querySelector("[popover]"),m={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await s(()=>{o(c(e)).toBeTruthy()}),await n("Popover is initially closed",async()=>{o(c(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)}),await n("Setting opened = true opens the popover",async()=>{e.opened=!0,await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})})}},w={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await s(()=>{o(c(e)).toBeTruthy()}),await n("Open via click",async()=>{a.click(),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})}),await n("Setting opened = false closes the popover",async()=>{e.opened=!1,await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},v={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await s(()=>{o(c(e)).toBeTruthy()}),await n("Open via property",async()=>{e.opened=!0,await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0)})}),await n("Native hidePopover() syncs property back to false",async()=>{c(e).hidePopover?.(),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},h={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await s(()=>{o(c(e)).toBeTruthy()});const r=[];e.addEventListener("opened-changed",(d=>{r.push(d.detail.value)})),await n("Click to open fires opened-changed with true",async()=>{a.click(),await s(()=>{o(r).toContain(!0)})}),await n("Click to close fires opened-changed with false",async()=>{a.click(),await s(()=>{o(r).toContain(!1)})})}},b={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await s(()=>{o(c(e)).toBeTruthy()}),await n("Initially no opened attribute",async()=>{o(e.hasAttribute("opened")).toBe(!1)}),await n("opened = true adds attribute",async()=>{e.opened=!0,await s(()=>{o(e.hasAttribute("opened")).toBe(!0)})}),await n("opened = false removes attribute",async()=>{e.opened=!1,await s(()=>{o(e.hasAttribute("opened")).toBe(!1)})})}},y={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="inside">Inside</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await s(()=>{o(c(e)).toBeTruthy()}),await n("Open via click",async()=>{a.click(),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0)})}),await n("Programmatic close via .opened = false",async()=>{e.opened=!1,await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},g={render:t=>p`
        <div>
            <cosmoz-dropdown-next placement=${t.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),r=e.querySelector("#inside"),d=t.querySelector("#outside");await s(()=>{o(c(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(a),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0)})}),await n("Focus inside then outside closes the dropdown",async()=>{r.focus(),d.focus(),await new Promise(i=>setTimeout(i,150)),o(c(e)?.matches(":popover-open")).toBe(!1)})}},f={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),r=e.querySelector("#first"),d=e.querySelector("#second");await s(()=>{o(c(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(a),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0)})}),await n("Moving focus within the popover keeps it open",async()=>{r.focus(),d.focus(),await new Promise(i=>setTimeout(i,150)),o(c(e)?.matches(":popover-open")).toBe(!0)})}},x={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]'),r=e.querySelector("#close-btn");await s(()=>{o(c(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(a),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0)})}),await n("focus() then blur() closes the dropdown",async()=>{r.focus();const d=document.createElement("button");document.body.appendChild(d),r.blur(),d.focus(),await s(()=>o(c(e)?.matches(":popover-open")).toBe(!1),{timeout:3e3}),d.remove()})}},B={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement} disabled passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await n("No popover element in shadow DOM",async()=>{const a=e.shadowRoot.querySelector("[popover]");o(a).toBeNull()}),await n("Default slot is rendered inline",async()=>{const a=e.shadowRoot.querySelector("slot:not([name])");o(a).toBeTruthy(),o(a.closest("[popover]")).toBeNull()}),await n("Slotted content is visible",async()=>{const r=e.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0});o(r.length).toBeGreaterThan(0)})}},E={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement} passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=e.querySelector('[slot="button"]');await n("Popover element exists (passthrough without disabled has no effect)",async()=>{const r=e.shadowRoot.querySelector("[popover]");o(r).toBeTruthy()}),await n("Click toggles popover normally",async()=>{await l.click(a),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!0)})}),await n("Click closes popover normally",async()=>{await l.click(a),await s(()=>{o(c(e)?.matches(":popover-open")).toBe(!1)})})}},F=t=>t.querySelector('[slot="button"]'),z={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button class="pick">Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=F(e),r=c(e);await s(()=>o(a).toBeTruthy()),await n("closed reads aria-expanded=false",async()=>{o(a.getAttribute("aria-expanded")).toBe("false")}),await n("opening reconciles",async()=>{e.opened=!0,await s(()=>o(a.getAttribute("aria-expanded")).toBe("true"))}),await n("platform close also reconciles",async()=>{r.hidePopover(),await s(()=>o(a.getAttribute("aria-expanded")).toBe("false"))}),await n("and a select-close",async()=>{e.opened=!0,await s(()=>o(a.getAttribute("aria-expanded")).toBe("true")),e.querySelector(".pick").dispatchEvent(new Event("select",{bubbles:!0})),await s(()=>o(a.getAttribute("aria-expanded")).toBe("false"))})}},k={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),a=F(e),r=c(e),d=()=>e.querySelector(".pick");await n("dismissal with focus inside restores the invoker",async()=>{a.focus(),l.click(a),await s(()=>o(r.matches(":popover-open")).toBe(!0)),d().focus(),r.hidePopover(),await s(()=>o(document.activeElement===a||r.getRootNode().activeElement===a).toBe(!0))}),await n("select-close: the pick that took focus keeps it",async()=>{a.focus(),l.click(a),await s(()=>o(r.matches(":popover-open")).toBe(!0)),d().focus(),d().dispatchEvent(new Event("select",{bubbles:!0})),await s(()=>o(r.matches(":popover-open")).toBe(!1)),o(r.getRootNode().activeElement===d()||document.activeElement===d()).toBe(!0)}),await n("a select from a non-focused row hands focus back",async()=>{a.focus(),l.click(a),await s(()=>o(r.matches(":popover-open")).toBe(!0)),e.querySelector(".pick").dispatchEvent(new Event("select",{bubbles:!0})),await s(()=>o(document.activeElement===a||r.getRootNode().activeElement===a).toBe(!0))}),await n("dismissal with focus elsewhere does not steal it",async()=>{a.focus(),l.click(a),await s(()=>o(r.matches(":popover-open")).toBe(!0));const i=document.createElement("button");document.body.appendChild(i),i.focus(),r.hidePopover(),await s(()=>o(r.matches(":popover-open")).toBe(!1)),o(document.activeElement).toBe(i),i.remove()})}},S={render:t=>p`
        <cosmoz-dropdown-next placement=${t.placement}>
            <div class="dropdown-content"><div>Item 1</div></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t})=>{const n=t.querySelector("cosmoz-dropdown-next");n.opened=!0,await s(()=>{o(c(n)?.matches(":popover-open")).toBe(!0)}),n.opened=!1,await s(()=>{o(c(n)?.matches(":popover-open")).toBe(!1)})}};customElements.get("nested-dropdown-host")||customElements.define("nested-dropdown-host",I(()=>p`
                <cosmoz-dropdown-next>
                    <button class="nested-invoker" slot="button">Nested toggle</button>
                    <div class="dropdown-content">
                        <button class="nested-pick" autofocus>Item 1</button>
                    </div>
                </cosmoz-dropdown-next>
            `));const P={render:()=>p`<nested-dropdown-host></nested-dropdown-host>`,play:async({canvasElement:t,step:n})=>{const a=t.querySelector("nested-dropdown-host").shadowRoot,r=a.querySelector("cosmoz-dropdown-next"),d=a.querySelector(".nested-invoker"),i=c(r),u=()=>r.querySelector(".nested-pick"),q=()=>{let T=document.activeElement;for(;T?.shadowRoot;)T=T.shadowRoot.activeElement;return T};await n("dismissal restores the nested invoker",async()=>{await s(()=>o(d.isConnected).toBe(!0)),l.click(d),await s(()=>o(i.matches(":popover-open")).toBe(!0)),u().focus(),o(q()).toBe(u()),i.hidePopover(),await s(()=>{o(i.matches(":popover-open")).toBe(!1),o(q()).toBe(d)})}),await n("select-close: the focused pick keeps focus",async()=>{l.click(d),await s(()=>o(i.matches(":popover-open")).toBe(!0)),u().focus(),u().dispatchEvent(new Event("select",{bubbles:!0})),await s(()=>o(i.matches(":popover-open")).toBe(!1)),o(q()).toBe(u())})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Verifies that setting `opened = true` programmatically opens the popover\nand reflects the `opened` attribute on the host element.",...m.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Verifies that setting `opened = false` programmatically closes an open\npopover and removes the `opened` attribute.",...w.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Verifies that browser-initiated close (e.g., light-dismiss, Escape)\nsyncs the `opened` property and attribute back to `false`.\n\nWe simulate by calling `hidePopover()` directly on the native popover\nelement, which fires the same `toggle` event that light-dismiss and\nEscape produce. Synthetic click-outside and keyboard Escape don't\nreliably reach the top-layer popover in storybook's test iframe.",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Verifies that `opened-changed` events fire when the state changes\nvia user interactions (click to open, Escape to close).\n\nNote: `opened-changed` is dispatched by `useProperty`'s internal setter,\nwhich is called from `toggle()` (click) and `onToggle` (Escape/light-dismiss).\nDirect property assignment (`dropdown.opened = true`) bypasses the setter\nand does not dispatch the event — this is by design, matching the\nconvention of other `useProperty`-based components.",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Verifies that the `opened` attribute is reflected on the host element:\npresent when open, absent when closed.",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Verifies that a parent component can programmatically close the dropdown\nby setting `.opened = false` on the element.",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Verifies the popover closes when focus leaves the dropdown.
The native Popover API only handles click-outside and Escape;
this tests the focusout handler that fills the Tab-out gap.`,...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Verifies focus movement between elements inside the popover
does not close it. The debounced scheduleClose re-checks
:focus-within before closing.`,...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      // blur alone does not move focus inside an unfocused runner
      // window - the element keeps activeElement and the dropdown
      // stays focused-within. Move focus outside for real (what a
      // user's Tab/click-out does), which is the dismissal intent.
      const outside = document.createElement('button');
      document.body.appendChild(outside);
      closeBtn.blur();
      outside.focus();
      await waitFor(() => expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false), {
        timeout: 3000
      });
      outside.remove();
    });
  }
}`,...x.parameters?.docs?.source},description:{story:`Verifies the focus() -> blur() close pattern works.
This is how cosmoz-omnitable-settings closes its dropdown
programmatically without relying on open-on-focus.`,...x.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Verifies that when `disabled` + `passthrough` are both set, the default\nslot renders in normal document flow — no popover element exists in the\nshadow DOM, and the slotted content is visible.",...B.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Verifies that `passthrough` without `disabled` has no effect — the popover\nelement is still rendered and the dropdown behaves normally.",...E.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"The dropdown reconciles the slotted invoker's `aria-expanded` to the\npopover's own `toggle` state, over every close path - the API, light\ndismiss, Escape (simulated as `hidePopover()`, see NativeCloseSyncs\nProperty), and a `select` from the content.",...z.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
      // the popover's display flip can settle focus a few ticks after
      // the toggle event; the restore follows whatever focus settles
      // to: on the pick it stays, into the void it goes to the invoker
      await waitFor(() => expect(document.activeElement === button || (popover.getRootNode() as Document).activeElement === button).toBe(true));
    });
    await step('select-close: the pick that took focus keeps it', async () => {
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
      // on the pick is real focus; only lost focus gets restored
      expect((popover.getRootNode() as Document).activeElement === pick() || document.activeElement === pick()).toBe(true);
    });
    await step('a select from a non-focused row hands focus back', async () => {
      button.focus();
      (userEvent as never as {
        click: (t: HTMLElement) => Promise<void>;
      }).click(button);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      // the row was never focused; when the close settles, focus is
      // lost and the invoker adopts it
      dropdown.querySelector('.pick')!.dispatchEvent(new Event('select', {
        bubbles: true
      }));
      await waitFor(() => expect(document.activeElement === button || (popover.getRootNode() as Document).activeElement === button).toBe(true));
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
}`,...k.parameters?.docs?.source},description:{story:`Focus restore. A manual popover moves no focus when it hides; the
dropdown hands it back to the invoker on dismissal, but not on a
select-close, where the picked content acted on itself.`,...k.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"no invoker, none of the above: rendering with an empty button slot is a no-op",...S.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`<nested-dropdown-host></nested-dropdown-host>\`,
  play: async ({
    canvasElement,
    step
  }) => {
    const nestedHost = canvasElement.querySelector('nested-dropdown-host') as HTMLElement;
    const shadow = nestedHost.shadowRoot!;
    const dropdown = shadow.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    const invoker = shadow.querySelector('.nested-invoker') as HTMLElement;
    const popover = getPopover(dropdown)!;
    const pick = () => dropdown.querySelector('.nested-pick') as HTMLElement;
    const activeInNested = () => {
      // deepest focus across the nested shadow roots
      let el = document.activeElement as HTMLElement | null;
      while (el?.shadowRoot) {
        el = el.shadowRoot.activeElement as HTMLElement | null;
      }
      return el;
    };
    await step('dismissal restores the nested invoker', async () => {
      await waitFor(() => expect(invoker.isConnected).toBe(true));
      (userEvent as never as {
        click: (t: HTMLElement) => Promise<void>;
      }).click(invoker);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      pick().focus();
      expect(activeInNested()).toBe(pick());
      // platform close (Escape / light dismiss report the same state)
      popover.hidePopover();
      await waitFor(() => {
        expect(popover.matches(':popover-open')).toBe(false);
        expect(activeInNested()).toBe(invoker);
      });
    });
    await step('select-close: the focused pick keeps focus', async () => {
      (userEvent as never as {
        click: (t: HTMLElement) => Promise<void>;
      }).click(invoker);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      pick().focus();
      pick().dispatchEvent(new Event('select', {
        bubbles: true
      }));
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
      // focus on the pick is real focus, not lost focus
      expect(activeInNested()).toBe(pick());
    });
  }
}`,...P.parameters?.docs?.source}}};const O=["OpenedPropertyOpens","OpenedPropertyCloses","NativeCloseSyncsProperty","OpenedChangedEvent","AttributeReflection","ProgrammaticCloseFromParent","CloseOnFocusout","FocusWithinStaysOpen","FocusBlurClose","PassthroughRendersInline","PassthroughWithoutDisabled","InvokerAriaExpandedReconciles","DismissalRestoresInvokerFocus","NoInvokerIsANoop","DismissalRestoresInvokerFocusNestedShadow"];export{b as AttributeReflection,g as CloseOnFocusout,k as DismissalRestoresInvokerFocus,P as DismissalRestoresInvokerFocusNestedShadow,x as FocusBlurClose,f as FocusWithinStaysOpen,z as InvokerAriaExpandedReconciles,v as NativeCloseSyncsProperty,S as NoInvokerIsANoop,h as OpenedChangedEvent,w as OpenedPropertyCloses,m as OpenedPropertyOpens,B as PassthroughRendersInline,E as PassthroughWithoutDisabled,y as ProgrammaticCloseFromParent,O as __namedExportsOrder,C as default};
