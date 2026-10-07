import"./cosmoz-dropdown-next-DI_b1vDH.js";import{b as c}from"./iframe-DCDZv1A7.js";import"./cosmoz-dropdown-next-5asWEkmQ.js";import"./preload-helper-PPVm8Dsz.js";const q=null,T=globalThis.__vitest_worker__?.ctx?.pool;throw new Error("vitest/browser can be imported only inside the Browser Mode. "+(T?`Your test is running in ${T} pool. Make sure your regular tests are excluded from the "test.include" glob pattern.`:"Instead, it was imported outside of Vitest."));const{expect:o,userEvent:P,waitFor:r}=__STORYBOOK_MODULE_TEST__,k=q,L={title:"Tests/Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["!autodocs"],args:{placement:"bottom span-right"}},a=t=>t.shadowRoot.querySelector("[popover]"),i={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await r(()=>{o(a(e)).toBeTruthy()}),await n("Popover is initially closed",async()=>{o(a(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)}),await n("Setting opened = true opens the popover",async()=>{e.opened=!0,await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})})}},l={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await r(()=>{o(a(e)).toBeTruthy()}),await n("Open via click",async()=>{s.click(),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0),o(e.hasAttribute("opened")).toBe(!0)})}),await n("Setting opened = false closes the popover",async()=>{e.opened=!1,await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},u={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await r(()=>{o(a(e)).toBeTruthy()}),await n("Open via property",async()=>{e.opened=!0,await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Native hidePopover() syncs property back to false",async()=>{a(e).hidePopover?.(),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},m={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await r(()=>{o(a(e)).toBeTruthy()});const d=[];e.addEventListener("opened-changed",(p=>{d.push(p.detail.value)})),await n("Click to open fires opened-changed with true",async()=>{s.click(),await r(()=>{o(d).toContain(!0)})}),await n("Click to close fires opened-changed with false",async()=>{s.click(),await r(()=>{o(d).toContain(!1)})})}},w={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await r(()=>{o(a(e)).toBeTruthy()}),await n("Initially no opened attribute",async()=>{o(e.hasAttribute("opened")).toBe(!1)}),await n("opened = true adds attribute",async()=>{e.opened=!0,await r(()=>{o(e.hasAttribute("opened")).toBe(!0)})}),await n("opened = false removes attribute",async()=>{e.opened=!1,await r(()=>{o(e.hasAttribute("opened")).toBe(!1)})})}},v={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="inside">Inside</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await r(()=>{o(a(e)).toBeTruthy()}),await n("Open via click",async()=>{s.click(),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0),o(e.opened).toBe(!0)})}),await n("Programmatic close via .opened = false",async()=>{e.opened=!1,await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!1),o(e.opened).toBe(!1),o(e.hasAttribute("opened")).toBe(!1)})})}},h={render:t=>c`
        <div>
            <cosmoz-dropdown-next placement=${t.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),d=e.querySelector("#inside"),p=t.querySelector("#outside");await r(()=>{o(a(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await k.click(s),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Focus inside then outside closes the dropdown",async()=>{d.focus(),p.focus(),await new Promise(E=>setTimeout(E,150)),o(a(e)?.matches(":popover-open")).toBe(!1)})}},b={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),d=e.querySelector("#first"),p=e.querySelector("#second");await r(()=>{o(a(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await k.click(s),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Moving focus within the popover keeps it open",async()=>{d.focus(),p.focus(),await new Promise(E=>setTimeout(E,150)),o(a(e)?.matches(":popover-open")).toBe(!0)})}},y={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),d=e.querySelector("#close-btn");await r(()=>{o(a(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await k.click(s),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("focus() then blur() closes the dropdown",async()=>{d.focus(),d.blur(),await new Promise(p=>setTimeout(p,150)),o(a(e)?.matches(":popover-open")).toBe(!1)})}},g={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement} disabled passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next");await n("No popover element in shadow DOM",async()=>{const s=e.shadowRoot.querySelector("[popover]");o(s).toBeNull()}),await n("Default slot is rendered inline",async()=>{const s=e.shadowRoot.querySelector("slot:not([name])");o(s).toBeTruthy(),o(s.closest("[popover]")).toBeNull()}),await n("Slotted content is visible",async()=>{const d=e.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0});o(d.length).toBeGreaterThan(0)})}},x={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement} passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await n("Popover element exists (passthrough without disabled has no effect)",async()=>{const d=e.shadowRoot.querySelector("[popover]");o(d).toBeTruthy()}),await n("Click toggles popover normally",async()=>{await P.click(s),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Click closes popover normally",async()=>{await P.click(s),await r(()=>{o(a(e)?.matches(":popover-open")).toBe(!1)})})}},f={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <button slot="button" class="invoker">Toggle</button>
            <div class="dropdown-content">
                <button class="pick">Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-dropdown-next"),s=e.querySelector(".invoker"),d=a(e);await n("states false before the first toggle",async()=>{o(s.getAttribute("aria-expanded")).toBe("false")}),await n("opening reconciles",async()=>{e.opened=!0,await r(()=>o(s.getAttribute("aria-expanded")).toBe("true"))}),await n("platform close also reconciles",async()=>{d.hidePopover(),await r(()=>o(s.getAttribute("aria-expanded")).toBe("false"))}),await n("and a select-close",async()=>{e.opened=!0,await r(()=>o(s.getAttribute("aria-expanded")).toBe("true")),e.querySelector(".pick").dispatchEvent(new Event("select",{bubbles:!0})),await r(()=>o(s.getAttribute("aria-expanded")).toBe("false"))})}},z={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement}>
            <cosmoz-button class="cz" slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content"><button class="pick">Item 1</button></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t})=>{const n=t.querySelector("cosmoz-dropdown-next"),e=n.querySelector(".cz"),s=a(n);o(e.getAttribute("aria-expanded")).toBe("false"),n.opened=!0,await r(()=>{o(e.getAttribute("aria-expanded")).toBe("true"),o(e.shadowRoot.querySelector("button").getAttribute("aria-expanded")).toBe("true")}),s.hidePopover(),await r(()=>{o(e.getAttribute("aria-expanded")).toBe("false"),o(e.shadowRoot.querySelector("button").getAttribute("aria-expanded")).toBe("false")})}},B={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement} class="late">
            <div class="dropdown-content"><button class="pick">Item 1</button></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t})=>{const n=t.querySelector("cosmoz-dropdown-next.late"),e=a(n),s=document.createElement("button");s.setAttribute("slot","button"),s.className="late-invoker",s.textContent="Late toggle",n.opened=!0,await r(()=>o(e.matches(":popover-open")).toBe(!0)),n.appendChild(s),await r(()=>o(s.getAttribute("aria-expanded")).toBe("true")),e.hidePopover(),await r(()=>o(s.getAttribute("aria-expanded")).toBe("false"))}},S={render:t=>c`
        <cosmoz-dropdown-next placement=${t.placement} class="noinvoker">
            <div class="dropdown-content"><div>Item 1</div></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:t})=>{const n=t.querySelector("cosmoz-dropdown-next.noinvoker");o(n.getAttribute("aria-expanded")).toBeNull(),n.opened=!0,await r(()=>o(a(n)?.matches(":popover-open")).toBe(!0)),o(n.getAttribute("aria-expanded")).toBeNull(),n.opened=!1,await r(()=>o(a(n)?.matches(":popover-open")).toBe(!1)),o(n.getAttribute("aria-expanded")).toBeNull()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      getPopover(dropdown)!.hidePopover?.();
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
this tests the focusout handler that fills the Tab-out gap.`,...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Verifies focus movement between elements inside the popover
does not close it. The debounced scheduleClose re-checks
:focus-within before closing.`,...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Verifies the focus() -> blur() close pattern works.
This is how cosmoz-omnitable-settings closes its dropdown
programmatically without relying on open-on-focus.`,...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Verifies that when `disabled` + `passthrough` are both set, the default\nslot renders in normal document flow — no popover element exists in the\nshadow DOM, and the slotted content is visible.",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    \`,
  // storybookUserEvent's synthetic clicks are intentional here: the story pins the
  // toggle *mechanics*; trusted-click dismissal is light-dismiss+toggle, which
  // double-applies today (tracked as reopen-flicker; not this PR's scope).
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
      await storybookUserEvent.click(button);
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
      });
    });
    await step('Click closes popover normally', async () => {
      await storybookUserEvent.click(button);
      await waitFor(() => {
        expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
      });
    });
  }
}`,...x.parameters?.docs?.source},description:{story:"Verifies that `passthrough` without `disabled` has no effect — the popover\nelement is still rendered and the dropdown behaves normally.",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <button slot="button" class="invoker">Toggle</button>
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
    const button = dropdown.querySelector('.invoker') as HTMLElement;
    const popover = getPopover(dropdown)!;
    await step('states false before the first toggle', async () => {
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
}`,...f.parameters?.docs?.source},description:{story:"The dropdown reconciles the slotted invoker's `aria-expanded` to the\npopover's own toggle state, over every close path - the opened API,\nhidePopover (as Escape / light dismiss report themselves), and a\n`select` dispatched from inside the content.",...f.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button class="cz" slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content"><button class="pick">Item 1</button></div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    const cz = dropdown.querySelector('.cz') as HTMLElement;
    const popover = getPopover(dropdown)!;

    // the dropdown states the invoker on mount
    expect(cz.getAttribute('aria-expanded')).toBe('false');
    dropdown.opened = true;
    await waitFor(() => {
      expect(cz.getAttribute('aria-expanded')).toBe('true');
      expect(cz.shadowRoot!.querySelector('button')!.getAttribute('aria-expanded')).toBe('true');
    });
    popover.hidePopover();
    await waitFor(() => {
      expect(cz.getAttribute('aria-expanded')).toBe('false');
      expect(cz.shadowRoot!.querySelector('button')!.getAttribute('aria-expanded')).toBe('false');
    });
  }
}`,...z.parameters?.docs?.source},description:{story:`A custom-element invoker (e.g. cosmoz-button) has no light-DOM control
of its own: the dropdown states the host attribute, and the invoker
forwards to its native control from there.`,...z.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} class="late">
            <div class="dropdown-content"><button class="pick">Item 1</button></div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next.late') as HTMLElement & {
      opened: boolean;
    };
    const popover = getPopover(dropdown)!;
    const invoker = document.createElement('button');
    invoker.setAttribute('slot', 'button');
    invoker.className = 'late-invoker';
    invoker.textContent = 'Late toggle';
    dropdown.opened = true;
    await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
    dropdown.appendChild(invoker);
    await waitFor(() => expect(invoker.getAttribute('aria-expanded')).toBe('true'));
    popover.hidePopover();
    await waitFor(() => expect(invoker.getAttribute('aria-expanded')).toBe('false'));
  }
}`,...B.parameters?.docs?.source},description:{story:`An invoker slotted after mount reconciles with the popover's current
state via slotchange.`,...B.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} class="noinvoker">
            <div class="dropdown-content"><div>Item 1</div></div>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next.noinvoker') as HTMLElement & {
      opened: boolean;
    };
    expect(dropdown.getAttribute('aria-expanded')).toBeNull();
    dropdown.opened = true;
    await waitFor(() => expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true));
    expect(dropdown.getAttribute('aria-expanded')).toBeNull();
    dropdown.opened = false;
    await waitFor(() => expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false));
    expect(dropdown.getAttribute('aria-expanded')).toBeNull();
  }
}`,...S.parameters?.docs?.source},description:{story:"no slotted invoker, nothing to reconcile: opens and closes as before",...S.parameters?.docs?.description}}};const O=["OpenedPropertyOpens","OpenedPropertyCloses","NativeCloseSyncsProperty","OpenedChangedEvent","AttributeReflection","ProgrammaticCloseFromParent","CloseOnFocusout","FocusWithinStaysOpen","FocusBlurClose","PassthroughRendersInline","PassthroughWithoutDisabled","InvokerAriaReconciles","InvokerAriaOnCustomElementInvoker","LateInvokerReconciles","InvokerAriaWithoutInvokerIsANoop"];export{w as AttributeReflection,h as CloseOnFocusout,y as FocusBlurClose,b as FocusWithinStaysOpen,z as InvokerAriaOnCustomElementInvoker,f as InvokerAriaReconciles,S as InvokerAriaWithoutInvokerIsANoop,B as LateInvokerReconciles,u as NativeCloseSyncsProperty,m as OpenedChangedEvent,l as OpenedPropertyCloses,i as OpenedPropertyOpens,g as PassthroughRendersInline,x as PassthroughWithoutDisabled,v as ProgrammaticCloseFromParent,O as __namedExportsOrder,L as default};
