import { describe, it, expect } from 'vitest';
import { renderEmail, rgb } from './test-utils';
import { colors } from '../styles/colors';
import { Footer } from './Footer';

describe('Footer', () => {
	it('only shows the image source credit when one is given', async () => {
		const withSource = await renderEmail(<Footer imageSource="EPT" />);
		const withoutSource = await renderEmail(<Footer />);
		expect(withSource.body.textContent).toContain('EPT');
		expect(withoutSource.body.textContent).not.toContain('Viestin kuvat');
	});

	it('shows the current year in the copyright notice', async () => {
		const doc = await renderEmail(<Footer />);
		expect(doc.body.textContent).toContain(`Copyright © ${new Date().getFullYear()} Kauka-Kuutit ry`);
	});

	it('gives its text and links an explicit white color instead of relying on inheritance', async () => {
		const doc = await renderEmail(<Footer />);
		const emailLink = Array.from(doc.querySelectorAll('a')).find(
			(a) => a.getAttribute('href') === 'mailto:info@kauku.fi'
		)!;
		expect(emailLink.getAttribute('style')).toContain(`color:${rgb(colors.white)}`);
		const address = Array.from(doc.querySelectorAll('p')).find((p) => p.textContent === 'Hansatie 2B, 02780 Espoo')!;
		expect(address.getAttribute('style')).toContain(`color:${rgb(colors.white)}`);
	});

	it('links each social icon to the corresponding profile', async () => {
		const doc = await renderEmail(<Footer />);
		const facebookImg = doc.querySelector('img[alt="Facebook"]')!;
		expect(facebookImg.closest('a')!.getAttribute('href')).toBe('https://www.facebook.com/kaukakuutit');
		const instagramImg = doc.querySelector('img[alt="Instagram"]')!;
		expect(instagramImg.closest('a')!.getAttribute('href')).toBe('https://www.instagram.com/kaukakuutit/');
	});
});
