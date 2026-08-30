import { describe, it, expect } from 'vitest';
import { renderEmail, rgb } from './test-utils';
import { colors } from '../styles/colors';
import { Text } from './Text';

describe('Text', () => {
	it('renders its children as a paragraph', async () => {
		const doc = await renderEmail(<Text>hi</Text>);
		expect(doc.querySelector('p')!.textContent).toBe('hi');
	});

	it('lets a custom class override the default styling', async () => {
		const doc = await renderEmail(<Text className="text-white">hi</Text>);
		expect(doc.querySelector('p')!.getAttribute('style')).toContain(`color:${rgb(colors.white)}`);
	});
});
