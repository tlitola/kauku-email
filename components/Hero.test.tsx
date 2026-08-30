import { describe, it, expect } from 'vitest';
import { renderEmail } from './test-utils';
import { Hero } from './Hero';

describe('Hero', () => {
	it('renders nothing when no image is given', async () => {
		const doc = await renderEmail(<Hero />);
		expect(doc.querySelector('img')).toBeNull();
	});

	it('renders the given image with its alt text', async () => {
		const doc = await renderEmail(<Hero imageUrl="https://example.com/hero.png" heroAlt="A hero" />);
		const img = doc.querySelector('img')!;
		expect(img.getAttribute('src')).toBe('https://example.com/hero.png');
		expect(img.getAttribute('alt')).toBe('A hero');
	});
});
