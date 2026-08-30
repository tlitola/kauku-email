import { describe, it, expect } from 'vitest';
import { renderEmail } from './test-utils';
import { Img } from './Img';

describe('Img', () => {
	it('stretches to the full container width when no width is given', async () => {
		const doc = await renderEmail(<Img src="https://example.com/x.png" alt="x" />);
		const img = doc.querySelector('img')!;
		expect(img.getAttribute('style')).toContain('width:100%');
		expect(img.hasAttribute('width')).toBe(false);
	});

	it('uses a fixed width instead when one is given', async () => {
		const doc = await renderEmail(<Img src="https://example.com/x.png" alt="x" width={64} />);
		const img = doc.querySelector('img')!;
		expect(img.getAttribute('width')).toBe('64');
		expect(img.getAttribute('style')).not.toContain('width:100%');
	});

	it('passes the height through unchanged', async () => {
		const doc = await renderEmail(<Img src="https://example.com/x.png" alt="x" width={64} height={32} />);
		expect(doc.querySelector('img')!.getAttribute('height')).toBe('32');
	});
});
