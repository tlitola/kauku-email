import { describe, it, expect } from 'vitest';
import { renderEmail } from './test-utils';
import { List, Li } from './List';

describe('List', () => {
	it('renders items in order inside an unordered list by default', async () => {
		const doc = await renderEmail(
			<List>
				<Li>first</Li>
				<Li>second</Li>
			</List>
		);
		expect(doc.querySelector('ul')).not.toBeNull();
		expect(Array.from(doc.querySelectorAll('li')).map((li) => li.textContent)).toEqual(['first', 'second']);
	});

	it('renders an ordered list when requested', async () => {
		const doc = await renderEmail(
			<List variant="ordered">
				<Li>first</Li>
			</List>
		);
		expect(doc.querySelector('ol')).not.toBeNull();
		expect(doc.querySelector('ul')).toBeNull();
	});
});
