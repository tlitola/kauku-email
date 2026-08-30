import { describe, it, expect } from 'vitest';
import { renderEmail } from './test-utils';
import { Link, Tel, MailTo } from './Link';

describe('Link', () => {
	it('opens external links in a new tab without leaking referrer info', async () => {
		const doc = await renderEmail(<Link href="https://example.com">click</Link>);
		const a = doc.querySelector('a')!;
		expect(a.getAttribute('href')).toBe('https://example.com');
		expect(a.getAttribute('target')).toBe('_blank');
		expect(a.getAttribute('rel')).toBe('noreferrer noopener');
	});

	it('falls back to the children as the href when none is given', async () => {
		const doc = await renderEmail(<Link>https://fallback.example.com</Link>);
		expect(doc.querySelector('a')!.getAttribute('href')).toBe('https://fallback.example.com');
	});

	it('renders the button variant with a solid background', async () => {
		const doc = await renderEmail(
			<Link variant="button" href="https://example.com">
				click
			</Link>
		);
		expect(doc.querySelector('a')!.getAttribute('style')).toContain('background-color:rgb(37,55,101)');
	});

	it('lets a custom color override the inherited text color', async () => {
		const doc = await renderEmail(
			<Link className="text-white" href="https://example.com">
				click
			</Link>
		);
		expect(doc.querySelector('a')!.getAttribute('style')).toContain('color:rgb(255,255,255)');
	});

	it('centers the button variant by default', async () => {
		const doc = await renderEmail(
			<Link variant="button" href="https://example.com">
				click
			</Link>
		);
		expect(doc.querySelector('a')!.getAttribute('style')).toContain('margin-right:auto;margin-left:auto');
	});

	it.each([
		['left', 'margin-left:0'],
		['right', 'margin-left:auto'],
	] as const)('aligns the button variant to the %s when requested', async (location, expectedStyle) => {
		const doc = await renderEmail(
			<Link variant="button" location={location} href="https://example.com">
				click
			</Link>
		);
		expect(doc.querySelector('a')!.getAttribute('style')).toContain(expectedStyle);
	});

	it('Tel builds a tel: link that opens in the same tab', async () => {
		const doc = await renderEmail(<Tel>040 1234567</Tel>);
		const a = doc.querySelector('a')!;
		expect(a.getAttribute('href')).toBe('tel:040 1234567');
		expect(a.getAttribute('target')).toBe('_self');
	});

	it('MailTo builds a mailto: link that opens in the same tab', async () => {
		const doc = await renderEmail(<MailTo>info@kauku.fi</MailTo>);
		const a = doc.querySelector('a')!;
		expect(a.getAttribute('href')).toBe('mailto:info@kauku.fi');
		expect(a.getAttribute('target')).toBe('_self');
	});
});
