import { describe, it, expect } from 'vitest';
import { renderEmail, rgb } from './test-utils';
import { colors } from '../styles/colors';
import { InfoText } from './InfoText';

describe('InfoText', () => {
	it('renders muted italic text by default', async () => {
		const doc = await renderEmail(<InfoText>hi</InfoText>);
		const p = doc.querySelector('p')!;
		expect(p.textContent).toBe('hi');
		expect(p.getAttribute('style')).toContain('font-style:italic');
		expect(p.getAttribute('style')).toContain(`color:${rgb(colors.tertiary)}`);
	});

	it('lets a custom color override the default one', async () => {
		const doc = await renderEmail(<InfoText className="text-white">hi</InfoText>);
		expect(doc.querySelector('p')!.getAttribute('style')).toContain(`color:${rgb(colors.white)}`);
	});
});
