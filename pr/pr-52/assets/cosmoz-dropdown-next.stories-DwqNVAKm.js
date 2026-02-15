import{b as m}from"./iframe-CAF0Okuf.js";import"./cosmoz-dropdown-next-DGiaAwHo.js";/* empty css                             */import"./preload-helper-PPVm8Dsz.js";const{expect:t,userEvent:w,waitFor:c}=__STORYBOOK_MODULE_TEST__,g={title:"Tests/Cosmoz Dropdown Next",component:"cosmoz-dropdown-next",tags:["!autodocs"],args:{placement:"bottom span-right"}},n=e=>e.shadowRoot.querySelector("[popover]"),p={render:e=>m`
        <div>
            <cosmoz-dropdown-next placement=${e.placement}>
                <cosmoz-button slot="button">Toggle</cosmoz-button>
                <div class="dropdown-content">
                    <button id="inside">Inside</button>
                </div>
            </cosmoz-dropdown-next>
            <button id="outside" style="margin-top: 1rem;">Outside</button>
        </div>
    `,play:async({canvasElement:e,step:s})=>{const o=e.querySelector("cosmoz-dropdown-next"),a=o.querySelector('[slot="button"]'),r=o.querySelector("#inside"),d=e.querySelector("#outside");await c(()=>{t(n(o)).toBeTruthy()}),await s("Open the dropdown",async()=>{await w.click(a),await c(()=>{t(n(o)?.matches(":popover-open")).toBe(!0)})}),await s("Focus inside then outside closes the dropdown",async()=>{r.focus(),d.focus(),await new Promise(l=>setTimeout(l,150)),t(n(o)?.matches(":popover-open")).toBe(!1)})}},i={render:e=>m`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="first">First</button>
                <button id="second">Second</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,step:s})=>{const o=e.querySelector("cosmoz-dropdown-next"),a=o.querySelector('[slot="button"]'),r=o.querySelector("#first"),d=o.querySelector("#second");await c(()=>{t(n(o)).toBeTruthy()}),await s("Open the dropdown",async()=>{await w.click(a),await c(()=>{t(n(o)?.matches(":popover-open")).toBe(!0)})}),await s("Moving focus within the popover keeps it open",async()=>{r.focus(),d.focus(),await new Promise(l=>setTimeout(l,150)),t(n(o)?.matches(":popover-open")).toBe(!0)})}},u={render:e=>m`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Toggle</cosmoz-button>
            <div class="dropdown-content">
                <button id="close-btn">Close</button>
            </div>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,step:s})=>{const o=e.querySelector("cosmoz-dropdown-next"),a=o.querySelector('[slot="button"]'),r=o.querySelector("#close-btn");await c(()=>{t(n(o)).toBeTruthy()}),await s("Open the dropdown",async()=>{await w.click(a),await c(()=>{t(n(o)?.matches(":popover-open")).toBe(!0)})}),await s("focus() then blur() closes the dropdown",async()=>{r.focus(),r.blur(),await new Promise(d=>setTimeout(d,150)),t(n(o)?.matches(":popover-open")).toBe(!1)})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Verifies the popover closes when focus leaves the dropdown.
The native Popover API only handles click-outside and Escape;
this tests the focusout handler that fills the Tab-out gap.`,...p.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`Verifies focus movement between elements inside the popover
does not close it. The debounced scheduleClose re-checks
:focus-within before closing.`,...i.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Verifies the focus() -> blur() close pattern works.
This is how cosmoz-omnitable-settings closes its dropdown
programmatically without relying on open-on-focus.`,...u.parameters?.docs?.description}}};const f=["CloseOnFocusout","FocusWithinStaysOpen","FocusBlurClose"];export{p as CloseOnFocusout,u as FocusBlurClose,i as FocusWithinStaysOpen,f as __namedExportsOrder,g as default};
