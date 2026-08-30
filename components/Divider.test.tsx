import { describe, it, expect } from 'vitest';
import { renderEmail, rgb } from './test-utils';
import { colors } from '../styles/colors';
import { Divider } from './Divider';

describe('Divider', () => {
	it('renders a spacer row in the page background color', async () => {
		const doc = await renderEmail(<Divider />);
		expect(doc.querySelector('table')!.getAttribute('style')).toContain(`background-color:${rgb(colors.background)}`);
	});
});
