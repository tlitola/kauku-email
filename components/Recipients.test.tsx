import { describe, it, expect } from 'vitest';
import { renderEmail } from './test-utils';
import { Recipients } from './Recipients';

describe('Recipients', () => {
	it('shows who the message was distributed to', async () => {
		const doc = await renderEmail(<Recipients recipients="Everyone" />);
		expect(doc.body.textContent).toBe('Jakelu: Everyone');
	});
});
