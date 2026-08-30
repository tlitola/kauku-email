import { describe, it, expect } from 'vitest';
import { renderEmail, rgb } from './test-utils';
import { colors } from '../styles/colors';
import { Title } from './Title';

describe('Title', () => {
	it('renders the given title as a heading on a primary-colored banner', async () => {
		const doc = await renderEmail(<Title title="Hello" />);
		const h1 = doc.querySelector('h1')!;
		expect(h1.textContent).toBe('Hello');
		expect(h1.getAttribute('style')).toContain(`background-color:${rgb(colors.primary)}`);
	});
});
