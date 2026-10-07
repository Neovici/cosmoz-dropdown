import"./cosmoz-dropdown-next-BEBCc6Ue.js";import{a as H}from"./cosmoz-dropdown-next-Cdz_kiee.js";import{b as d}from"./iframe-f7W3tJo-.js";import"./preload-helper-PPVm8Dsz.js";const O=null,M=globalThis.__vitest_worker__?.ctx?.pool;throw new Error("vitest/browser can be imported only inside the Browser Mode. "+(M?`Your test is running in ${M} pool. Make sure your regular tests are excluded from the "test.include" glob pattern.`:"Instead, it was imported outside of Vitest."));const{expect:t,userEvent:L,waitFor:r}=__STORYBOOK_MODULE_TEST__,l=O,D={title:"Tests/Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["!autodocs"],args:{placement:"bottom span-right"}},a=o=>o.shadowRoot.querySelector("[popover]"),m={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next");await r(()=>{t(a(e)).toBeTruthy()}),await n("Popover is initially closed",async()=>{t(a(e)?.matches(":popover-open")).toBe(!1),t(e.opened).toBe(!1),t(e.hasAttribute("opened")).toBe(!1)}),await n("Setting opened = true opens the popover",async()=>{e.opened=!0,await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0),t(e.hasAttribute("opened")).toBe(!0)})})}},w={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await r(()=>{t(a(e)).toBeTruthy()}),await n("Open via click",async()=>{s.click(),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0),t(e.opened).toBe(!0),t(e.hasAttribute("opened")).toBe(!0)})}),await n("Setting opened = false closes the popover",async()=>{e.opened=!1,await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!1),t(e.hasAttribute("opened")).toBe(!1)})})}},v={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next");await r(()=>{t(a(e)).toBeTruthy()}),await n("Open via property",async()=>{e.opened=!0,await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Native hidePopover() syncs property back to false",async()=>{a(e).hidePopover?.(),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!1),t(e.opened).toBe(!1),t(e.hasAttribute("opened")).toBe(!1)})})}},h={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await r(()=>{t(a(e)).toBeTruthy()});const c=[];e.addEventListener("opened-changed",(p=>{c.push(p.detail.value)})),await n("Click to open fires opened-changed with true",async()=>{s.click(),await r(()=>{t(c).toContain(!0)})}),await n("Click to close fires opened-changed with false",async()=>{s.click(),await r(()=>{t(c).toContain(!1)})})}},y={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next");await r(()=>{t(a(e)).toBeTruthy()}),await n("Initially no opened attribute",async()=>{t(e.hasAttribute("opened")).toBe(!1)}),await n("opened = true adds attribute",async()=>{e.opened=!0,await r(()=>{t(e.hasAttribute("opened")).toBe(!0)})}),await n("opened = false removes attribute",async()=>{e.opened=!1,await r(()=>{t(e.hasAttribute("opened")).toBe(!1)})})}},b={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="inside">Inside</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await r(()=>{t(a(e)).toBeTruthy()}),await n("Open via click",async()=>{s.click(),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0),t(e.opened).toBe(!0)})}),await n("Programmatic close via .opened = false",async()=>{e.opened=!1,await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!1),t(e.opened).toBe(!1),t(e.hasAttribute("opened")).toBe(!1)})})}},g={render:o=>d`
        <div>
            <cosmoz-dropdown-next placement=${o.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),c=e.querySelector("#inside"),p=o.querySelector("#outside");await r(()=>{t(a(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(s),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Focus inside then outside closes the dropdown",async()=>{c.focus(),p.focus(),await new Promise(i=>setTimeout(i,150)),t(a(e)?.matches(":popover-open")).toBe(!1)})}},x={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),c=e.querySelector("#first"),p=e.querySelector("#second");await r(()=>{t(a(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(s),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Moving focus within the popover keeps it open",async()=>{c.focus(),p.focus(),await new Promise(i=>setTimeout(i,150)),t(a(e)?.matches(":popover-open")).toBe(!0)})}},f={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]'),c=e.querySelector("#close-btn");await r(()=>{t(a(e)).toBeTruthy()}),await n("Open the dropdown",async()=>{await l.click(s),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("focus() then blur() closes the dropdown",async()=>{c.focus(),c.blur(),await new Promise(p=>setTimeout(p,150)),t(a(e)?.matches(":popover-open")).toBe(!1)})}},k={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement} disabled passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next");await n("No popover element in shadow DOM",async()=>{const s=e.shadowRoot.querySelector("[popover]");t(s).toBeNull()}),await n("Default slot is rendered inline",async()=>{const s=e.shadowRoot.querySelector("slot:not([name])");t(s).toBeTruthy(),t(s.closest("[popover]")).toBeNull()}),await n("Slotted content is visible",async()=>{const c=e.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0});t(c.length).toBeGreaterThan(0)})}},z={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement} passthrough>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <div>Item 1</div>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector('[slot="button"]');await n("Popover element exists (passthrough without disabled has no effect)",async()=>{const c=e.shadowRoot.querySelector("[popover]");t(c).toBeTruthy()}),await n("Click toggles popover normally",async()=>{await L.click(s),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!0)})}),await n("Click closes popover normally",async()=>{await L.click(s),await r(()=>{t(a(e)?.matches(":popover-open")).toBe(!1)})})}},B={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <button slot="button" class="invoker">Toggle</button>
            <div class="dropdown-content">
                <button class="pick">Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector(".invoker"),c=a(e);await n("states false before the first toggle",async()=>{t(s.getAttribute("aria-expanded")).toBe("false")}),await n("opening reconciles",async()=>{e.opened=!0,await r(()=>t(s.getAttribute("aria-expanded")).toBe("true"))}),await n("platform close also reconciles",async()=>{c.hidePopover(),await r(()=>t(s.getAttribute("aria-expanded")).toBe("false"))}),await n("and a select-close",async()=>{e.opened=!0,await r(()=>t(s.getAttribute("aria-expanded")).toBe("true")),e.querySelector(".pick").dispatchEvent(new Event("select",{bubbles:!0})),await r(()=>t(s.getAttribute("aria-expanded")).toBe("false"))})}},S={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <cosmoz-button class="cz" slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content"><button class="pick">Item 1</button></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next"),e=n.querySelector(".cz"),s=a(n);t(e.getAttribute("aria-expanded")).toBe("false"),n.opened=!0,await r(()=>{t(e.getAttribute("aria-expanded")).toBe("true"),t(e.shadowRoot.querySelector("button").getAttribute("aria-expanded")).toBe("true")}),s.hidePopover(),await r(()=>{t(e.getAttribute("aria-expanded")).toBe("false"),t(e.shadowRoot.querySelector("button").getAttribute("aria-expanded")).toBe("false")})}},E={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement} class="late">
            <div class="dropdown-content"><button class="pick">Item 1</button></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next.late"),e=a(n),s=document.createElement("button");s.setAttribute("slot","button"),s.className="late-invoker",s.textContent="Late toggle",n.opened=!0,await r(()=>t(e.matches(":popover-open")).toBe(!0)),n.appendChild(s),await r(()=>t(s.getAttribute("aria-expanded")).toBe("true")),e.hidePopover(),await r(()=>t(s.getAttribute("aria-expanded")).toBe("false"))}},T={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement} class="noinvoker">
            <div class="dropdown-content"><div>Item 1</div></div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o})=>{const n=o.querySelector("cosmoz-dropdown-next.noinvoker");t(n.getAttribute("aria-expanded")).toBeNull(),n.opened=!0,await r(()=>t(a(n)?.matches(":popover-open")).toBe(!0)),t(n.getAttribute("aria-expanded")).toBeNull(),n.opened=!1,await r(()=>t(a(n)?.matches(":popover-open")).toBe(!1)),t(n.getAttribute("aria-expanded")).toBeNull()}},u=()=>{let o=document.activeElement;for(;o?.shadowRoot;)o=o.shadowRoot.activeElement;return o},q={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <button slot="button" class="invoker">Toggle</button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector(".invoker"),c=a(e);await n("open with focus inside (autofocus lands on the pick)",async()=>{await l.click(s),await r(()=>t(c.matches(":popover-open")).toBe(!0))}),await n("dismissal returns focus to the invoker",async()=>{c.hidePopover(),await r(()=>t(c.matches(":popover-open")).toBe(!1)),t(u()).toBe(s)})}},P={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <button slot="button" class="invoker">Toggle</button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector(".invoker"),c=a(e);await n("open, focus the pick, select it",async()=>{s.focus(),await l.click(s),await r(()=>t(c.matches(":popover-open")).toBe(!0)),e.querySelector(".pick").focus(),e.querySelector(".pick").dispatchEvent(new Event("select",{bubbles:!0})),await r(()=>t(c.matches(":popover-open")).toBe(!1))}),await n("steady state: focus is on the invoker",async()=>{await new Promise(p=>setTimeout(p,300)),t(u()).toBe(s)})}},F={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement}>
            <button slot="button" class="invoker">Toggle</button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
            </div>
        </cosmoz-dropdown-next>
        <button id="outside">Outside</button>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector(".invoker"),c=a(e),p=o.querySelector("#outside");await n("open, then move focus outside on purpose",async()=>{s.focus(),await l.click(s),await r(()=>t(c.matches(":popover-open")).toBe(!0)),e.querySelector(".pick").focus(),p.focus(),await r(()=>t(c.matches(":popover-open")).toBe(!1))}),await n("the deliberate focus move sticks",async()=>{await new Promise(i=>setTimeout(i,300)),t(u()).toBe(p)})}},I={render:o=>d`
        <cosmoz-dropdown-next placement=${o.placement} open-on-focus>
            <button slot="button" class="invoker">Toggle</button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:o,step:n})=>{const e=o.querySelector("cosmoz-dropdown-next"),s=e.querySelector(".invoker"),c=a(e);await n("open-on-focus opens",async()=>{s.focus(),await r(()=>t(c.matches(":popover-open")).toBe(!0))}),await n("dismissal closes and stays closed",async()=>{c.hidePopover(),await new Promise(p=>setTimeout(p,400)),t(c.matches(":popover-open")).toBe(!1),t(u()).toBe(s)})}},A={render:()=>d`<nested-dropdown-host></nested-dropdown-host>`,play:async({canvasElement:o,step:n})=>{const s=o.querySelector("nested-dropdown-host").shadowRoot,c=s.querySelector("cosmoz-dropdown-next"),p=s.querySelector(".nested-invoker"),i=a(c);await n("open with focus inside",async()=>{await r(()=>t(p.isConnected).toBe(!0)),await l.click(p),await r(()=>t(i.matches(":popover-open")).toBe(!0)),s.querySelector(".nested-pick").focus(),t(u()).toBe(s.querySelector(".nested-pick"))}),await n("dismissal restores the nested invoker",async()=>{i.hidePopover(),await r(()=>t(i.matches(":popover-open")).toBe(!1)),t(u()).toBe(p)})}};customElements.get("nested-dropdown-host")||customElements.define("nested-dropdown-host",H(()=>d`<cosmoz-dropdown-next>
                    <button class="nested-invoker" slot="button">Nested toggle</button>
                    <div class="dropdown-content">
                        <button class="nested-pick" autofocus>Item 1</button>
                    </div>
                </cosmoz-dropdown-next>`));m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Verifies that `opened-changed` events fire when the state changes\nvia user interactions (click to open, Escape to close).\n\nNote: `opened-changed` is dispatched by `useProperty`'s internal setter,\nwhich is called from `toggle()` (click) and `onToggle` (Escape/light-dismiss).\nDirect property assignment (`dropdown.opened = true`) bypasses the setter\nand does not dispatch the event — this is by design, matching the\nconvention of other `useProperty`-based components.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Verifies that the `opened` attribute is reflected on the host element:\npresent when open, absent when closed.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Verifies that a parent component can programmatically close the dropdown\nby setting `.opened = false` on the element.",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
this tests the focusout handler that fills the Tab-out gap.`,...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Verifies focus movement between elements inside the popover
does not close it. The debounced scheduleClose re-checks
:focus-within before closing.`,...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Verifies the focus() -> blur() close pattern works.
This is how cosmoz-omnitable-settings closes its dropdown
programmatically without relying on open-on-focus.`,...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Verifies that when `disabled` + `passthrough` are both set, the default\nslot renders in normal document flow — no popover element exists in the\nshadow DOM, and the slotted content is visible.",...k.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"Verifies that `passthrough` without `disabled` has no effect — the popover\nelement is still rendered and the dropdown behaves normally.",...z.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"The dropdown reconciles the slotted invoker's `aria-expanded` to the\npopover's own toggle state, over every close path - the opened API,\nhidePopover (as Escape / light dismiss report themselves), and a\n`select` dispatched from inside the content.",...B.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`A custom-element invoker (e.g. cosmoz-button) has no light-DOM control
of its own: the dropdown states the host attribute, and the invoker
forwards to its native control from there.`,...S.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`An invoker slotted after mount reconciles with the popover's current
state via slotchange.`,...E.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"no slotted invoker, nothing to reconcile: opens and closes as before",...T.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <button slot="button" class="invoker">Toggle</button>
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
    const invoker = dropdown.querySelector('.invoker') as HTMLElement;
    const popover = getPopover(dropdown)!;
    await step('open with focus inside (autofocus lands on the pick)', async () => {
      await userEvent.click(invoker);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
    });
    await step('dismissal returns focus to the invoker', async () => {
      // hidePopover: the platform-close stand-in (Escape/light-dismiss
      // report the same close-request state; trusted keys are not
      // reachable from this harness - userEvent.keyboard is synthetic)
      popover.hidePopover();
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
      expect(deepestFocus()).toBe(invoker);
    });
  }
}`,...q.parameters?.docs?.source},description:{story:"dismissal restore: Escape closes with focus inside, focus lands back on the invoker",...q.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <button slot="button" class="invoker">Toggle</button>
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
    const invoker = dropdown.querySelector('.invoker') as HTMLElement;
    const popover = getPopover(dropdown)!;
    await step('open, focus the pick, select it', async () => {
      invoker.focus();
      await userEvent.click(invoker);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      (dropdown.querySelector('.pick') as HTMLElement).focus();
      dropdown.querySelector('.pick')!.dispatchEvent(new Event('select', {
        bubbles: true
      }));
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
    });
    await step('steady state: focus is on the invoker', async () => {
      await new Promise(r => setTimeout(r, 300));
      expect(deepestFocus()).toBe(invoker);
    });
  }
}`,...P.parameters?.docs?.source},description:{story:"select-close restores to the invoker in steady state (the picked row's DOM dies)",...P.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <button slot="button" class="invoker">Toggle</button>
            <div class="dropdown-content">
                <button class="pick" autofocus>Item 1</button>
            </div>
        </cosmoz-dropdown-next>
        <button id="outside">Outside</button>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const dropdown = canvasElement.querySelector('cosmoz-dropdown-next') as HTMLElement & {
      opened: boolean;
    };
    const invoker = dropdown.querySelector('.invoker') as HTMLElement;
    const popover = getPopover(dropdown)!;
    const outside = canvasElement.querySelector('#outside') as HTMLElement;
    await step('open, then move focus outside on purpose', async () => {
      invoker.focus();
      await userEvent.click(invoker);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      (dropdown.querySelector('.pick') as HTMLElement).focus(); // real focus inside first
      outside.focus();
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
    });
    await step('the deliberate focus move sticks', async () => {
      await new Promise(r => setTimeout(r, 300));
      expect(deepestFocus()).toBe(outside);
    });
  }
}`,...F.parameters?.docs?.source},description:{story:"focus moved away on purpose (tab-out / click-out) is not restored over",...F.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement} open-on-focus>
            <button slot="button" class="invoker">Toggle</button>
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
    const invoker = dropdown.querySelector('.invoker') as HTMLElement;
    const popover = getPopover(dropdown)!;
    await step('open-on-focus opens', async () => {
      invoker.focus();
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
    });
    await step('dismissal closes and stays closed', async () => {
      popover.hidePopover();
      await new Promise(r => setTimeout(r, 400));
      // beyond the #76 reopen loop's settle window: still closed
      expect(popover.matches(':popover-open')).toBe(false);
      expect(deepestFocus()).toBe(invoker);
    });
  }
}`,...I.parameters?.docs?.source},description:{story:"dismissal with open-on-focus stays closed (no reopen loop) and restores",...I.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    await step('open with focus inside', async () => {
      await waitFor(() => expect(invoker.isConnected).toBe(true));
      await userEvent.click(invoker);
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
      (shadow.querySelector('.nested-pick') as HTMLElement).focus();
      expect(deepestFocus()).toBe(shadow.querySelector('.nested-pick'));
    });
    await step('dismissal restores the nested invoker', async () => {
      popover.hidePopover(); // platform-close stand-in (see DismissalRestoresInvoker)
      await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
      expect(deepestFocus()).toBe(invoker);
    });
  }
}`,...A.parameters?.docs?.source},description:{story:"the nested shadow geometry: dismissal restores the projected invoker",...A.parameters?.docs?.description}}};const _=["OpenedPropertyOpens","OpenedPropertyCloses","NativeCloseSyncsProperty","OpenedChangedEvent","AttributeReflection","ProgrammaticCloseFromParent","CloseOnFocusout","FocusWithinStaysOpen","FocusBlurClose","PassthroughRendersInline","PassthroughWithoutDisabled","InvokerAriaReconciles","InvokerAriaOnCustomElementInvoker","LateInvokerReconciles","InvokerAriaWithoutInvokerIsANoop","DismissalRestoresInvoker","SelectCloseRestoresInvoker","FocusMovedStays","OpenOnFocusDismissalStaysClosed","DismissalRestoresInvokerNestedShadow"];export{y as AttributeReflection,g as CloseOnFocusout,q as DismissalRestoresInvoker,A as DismissalRestoresInvokerNestedShadow,f as FocusBlurClose,F as FocusMovedStays,x as FocusWithinStaysOpen,S as InvokerAriaOnCustomElementInvoker,B as InvokerAriaReconciles,T as InvokerAriaWithoutInvokerIsANoop,E as LateInvokerReconciles,v as NativeCloseSyncsProperty,I as OpenOnFocusDismissalStaysClosed,h as OpenedChangedEvent,w as OpenedPropertyCloses,m as OpenedPropertyOpens,k as PassthroughRendersInline,z as PassthroughWithoutDisabled,b as ProgrammaticCloseFromParent,P as SelectCloseRestoresInvoker,_ as __namedExportsOrder,D as default};
