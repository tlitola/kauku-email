import { describe, it, expect } from 'vitest';
import { render } from '@react-email/render';
import { Email } from './Email';

const renderDoc = async (node: React.ReactElement) => new DOMParser().parseFromString(await render(node), 'text/html');

describe('Email', () => {
	it('defaults the recipients line when none is given', async () => {
		const doc = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web">
				content
			</Email>
		);
		expect(doc.body.textContent).toContain('Jakelu: Lippukunnan jäsenet huoltajineen');
	});

	it('shows the given recipients instead of the default', async () => {
		const doc = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web" recipients="Everyone">
				content
			</Email>
		);
		expect(doc.body.textContent).toContain('Jakelu: Everyone');
	});

	it('links the web-version line to the given url', async () => {
		const doc = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web">
				content
			</Email>
		);
		const link = Array.from(doc.querySelectorAll('a')).find((a) => a.textContent === 'Lue se selaimessa.')!;
		expect(link.getAttribute('href')).toBe('https://example.com/web');
	});

	it('renders a title heading when one is given, otherwise a plain divider', async () => {
		const withTitle = await renderDoc(
			<Email titleShort="short" title="Full title" webVersionurl="https://example.com/web">
				content
			</Email>
		);
		expect(withTitle.querySelector('h1')!.textContent).toBe('Full title');

		const withoutTitle = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web">
				content
			</Email>
		);
		expect(withoutTitle.querySelector('h1')).toBeNull();
		expect(withoutTitle.querySelector('hr')).not.toBeNull();
	});

	it('renders the children content', async () => {
		const doc = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web">
				<p>unique body content</p>
			</Email>
		);
		expect(doc.body.textContent).toContain('unique body content');
	});

	it('renders the hero image only when one is given', async () => {
		const withHero = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web" heroImage="https://example.com/hero.png">
				content
			</Email>
		);
		const withoutHero = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web">
				content
			</Email>
		);
		expect(withHero.querySelector('img[src="https://example.com/hero.png"]')).not.toBeNull();
		expect(withoutHero.querySelector('img[alt="Hero image"]')).toBeNull();
	});

	it('passes the image source through to the footer credit', async () => {
		const doc = await renderDoc(
			<Email titleShort="short" webVersionurl="https://example.com/web" imageSource="EPT">
				content
			</Email>
		);
		expect(doc.body.textContent).toContain('Viestin kuvat:');
		expect(doc.body.textContent).toContain('EPT');
	});
});
