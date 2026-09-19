import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderEmail, rgb } from './test-utils';
import { colors } from '../styles/colors';
import { Header } from './Header';

afterEach(() => {
	vi.useRealTimers();
});

describe('Header', () => {
	it('renders the navigation links with a primary-colored background', async () => {
		const doc = await renderEmail(<Header title="Väiski 2026" />);
		const links = doc.querySelectorAll('a[target="_blank"]');
		const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
		expect(hrefs).toEqual(
			expect.arrayContaining([
				'https://www.kauku.fi/ajankohtaiset/',
				'https://www.kauku.fi/lippukunta/kestavasti-partiossa/',
				'https://www.kauku.fi/lippukunta/hyva-tietaa-usein-kysytyt-kysymykset-ukk/',
			])
		);
		const navCells = doc.querySelectorAll('.navigation-link');
		expect(navCells.length).toBe(3);
		navCells.forEach((cell) => expect(cell.getAttribute('style')).toContain(`background-color:${rgb(colors.primary)}`));
	});

	it('links the logo to the homepage', async () => {
		const doc = await renderEmail(<Header title="Väiski 2026" />);
		const logo = doc.querySelector('img[alt="KauKu logo"]')!;
		expect(logo.closest('a')!.getAttribute('href')).toBe('https://kauku.fi');
	});

	it('shows the given title alongside today’s date', async () => {
		vi.setSystemTime(new Date('2026-08-30T00:00:00Z'));
		const doc = await renderEmail(<Header title="Väiski 2026" />);
		expect(doc.body.textContent).toContain('Väiski 2026 | 30.08.2026');
	});
});
