import { describe, it, expect } from 'vitest';
import { renderEmail } from './test-utils';
import { Hr } from './Hr';

describe('Hr', () => {
	it('defaults to a 2px border', async () => {
		const doc = await renderEmail(<Hr />);
		expect(doc.querySelector('hr')!.getAttribute('style')).toContain('border-top-width:2px');
	});

	it('uses the given width instead', async () => {
		const doc = await renderEmail(<Hr width={5} />);
		expect(doc.querySelector('hr')!.getAttribute('style')).toContain('border-top-width:5px');
	});

	it('spans the full width with space below it', async () => {
		const doc = await renderEmail(<Hr />);
		const style = doc.querySelector('hr')!.getAttribute('style')!;
		expect(style).toContain('width:100%');
		expect(style).toContain('margin-bottom:12px');
	});
});
