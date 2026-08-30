import { describe, it, expect } from 'vitest';
import { Row, Column } from '@react-email/components';
import { renderEmail, rgb } from './test-utils';
import { colors } from '../styles/colors';
import { Section, SectionsWrapper } from './Section';

describe('SectionsWrapper', () => {
	it('alternates background and text color between sections', async () => {
		const doc = await renderEmail(
			<SectionsWrapper final>
				<div>a</div>
				<div>b</div>
			</SectionsWrapper>
		);
		const [first, second] = doc.querySelectorAll('table');
		expect(first.getAttribute('style')).toContain(`background-color:${rgb(colors.white)};color:${rgb(colors.primary)}`);
		expect(second.getAttribute('style')).toContain(
			`background-color:${rgb(colors.secondary)};color:${rgb(colors.white)}`
		);
	});

	it('uses the same styling for every section when alternation is disabled', async () => {
		const doc = await renderEmail(
			<SectionsWrapper final alternateColors={false}>
				<div>a</div>
				<div>b</div>
			</SectionsWrapper>
		);
		const [first, second] = doc.querySelectorAll('table');
		expect(first.getAttribute('style')).toBe(second.getAttribute('style'));
	});

	it('cycles back to the first styling every other section', async () => {
		const doc = await renderEmail(
			<SectionsWrapper final>
				<div>a</div>
				<div>b</div>
				<div>c</div>
			</SectionsWrapper>
		);
		const [first, , third] = doc.querySelectorAll('table');
		expect(third.getAttribute('style')).toBe(first.getAttribute('style'));
	});

	it('renders each section as a table rather than a div', async () => {
		const doc = await renderEmail(
			<SectionsWrapper final>
				<div>a</div>
			</SectionsWrapper>
		);
		expect(doc.querySelector('div.section-even, div.section-odd')).toBeNull();
		expect(doc.querySelector('table.section-even')).not.toBeNull();
	});

	it('appends a spacer after the last section unless marked final', async () => {
		const withSpacer = await renderEmail(
			<SectionsWrapper>
				<div>a</div>
			</SectionsWrapper>
		);
		const final = await renderEmail(
			<SectionsWrapper final>
				<div>a</div>
			</SectionsWrapper>
		);
		expect(withSpacer.querySelectorAll('table').length).toBe(2);
		expect(final.querySelectorAll('table').length).toBe(1);
	});
});

describe('Section', () => {
	it('wraps single-row content in exactly one column', async () => {
		const doc = await renderEmail(<Section>content</Section>);
		expect(doc.querySelectorAll('[data-id="__react-email-column"]').length).toBe(1);
	});

	it('keeps each row as its own column when multiRow is set', async () => {
		const doc = await renderEmail(
			<Section multiRow>
				<Row>
					<Column>a</Column>
				</Row>
				<Row>
					<Column>b</Column>
				</Row>
			</Section>
		);
		const columns = doc.querySelectorAll('[data-id="__react-email-column"]');
		expect(Array.from(columns).map((c) => c.textContent)).toEqual(['a', 'b']);
	});

	it('applies the given background color inline', async () => {
		const doc = await renderEmail(<Section backgroundColor="primary">content</Section>);
		expect(doc.querySelector('table')!.getAttribute('style')).toContain(`background-color:${rgb(colors.primary)}`);
	});
});

describe('Section.Title and Section.SubTitle', () => {
	it('renders a title followed by a divider', async () => {
		const doc = await renderEmail(<Section.Title>Heading</Section.Title>);
		expect(doc.querySelector('h2')!.textContent).toBe('Heading');
		expect(doc.querySelector('h2 + hr')).not.toBeNull();
	});

	it('renders a subtitle', async () => {
		const doc = await renderEmail(<Section.SubTitle>Sub heading</Section.SubTitle>);
		expect(doc.querySelector('h3')!.textContent).toBe('Sub heading');
	});

	it('lets a custom class extend the title styling', async () => {
		const doc = await renderEmail(<Section.Title className="text-white">Heading</Section.Title>);
		expect(doc.querySelector('h2')!.getAttribute('style')).toContain(`color:${rgb(colors.white)}`);
	});
});
