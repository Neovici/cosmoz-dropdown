import { createRequire } from 'node:module';
import { fileURLToPath, URL } from 'node:url';
const repoUrl = new URL('../..', import.meta.url);
const { chromium, firefox } = createRequire(fileURLToPath(new URL('../../package.json', import.meta.url)))('playwright');
import { execSync } from 'node:child_process';
const plan = [
	['e1_hideEvents', false, ['#pp1', '#in1']],
	['e2_escProgrammatic', true, ['#pp2', '#in2']],
	['e3_toggleTiming', false, ['#pp2', '#in2']],
	['e4_offsetMatrix', false, []],
	['e5_invoker', true, ['#pp3', '#in3']],
	['e6a_focusinArm_stuck', false, ['#pp1', '#in1']],
	['e6b_focusinArm_deliberate', false, ['#pp1', '#in1']],
	['e7_delegateFocus', false, []],
	['e8a_sourceEsc', true, ['#pp1', '#in1']],
	['e8b_sourceStuckHide', false, ['#pp1', '#in1']],
	['e9_targetProp', true, ['#pp1', '#in1']],
	['e9b_targetPropHide', false, ['#pp1', '#in1']],
	['e9c_buttonPropEsc', true, ['#pp1', '#in1']],
];
const args = process.argv.slice(2);
const which = args.length ? args : ['chromium', 'firefox'];
for (const engine of which) {
	const launch = engine === 'chromium' ? chromium : firefox;
	const b = await launch.launch();
	const page = await b.newPage();
	page.on('console', m => console.log('  CONSOLE', m.text().slice(0, 150)));
	page.on('pageerror', e => console.log('  PAGEERROR', String(e).slice(0, 150)));
	await page.goto(String(new URL('index.html', import.meta.url)));
	for (const [id, esc, [ppSel, inSel]] of plan) {
		await page.goto(String(new URL('index.html', import.meta.url)));
		await page.evaluate(([id, ppSel, inSel]) =>
			window.EX[id](ppSel && document.querySelector(ppSel), inSel && document.querySelector(inSel)), [id, ppSel, inSel]).catch(e => console.log('  SETUP-ERR', String(e).slice(0, 200)));
		if (esc) { await page.waitForTimeout(120); await page.keyboard.press('Escape'); }
		await page.waitForTimeout(700);
		await page.evaluate(() => { const d = window.DEEP(); window.PUSH(["fin", "active=" + (d?.id ?? 'null'), "body=" + (document.activeElement === document.body)]); }).catch(() => {});
		const out = await page.evaluate(() => window.__L).catch(() => []);
		console.log(`\n===== ${engine} ${id} =====`);
		for (const row of out) console.log(' ', JSON.stringify(row));
	}
	await b.close();
}
