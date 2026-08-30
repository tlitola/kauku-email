import { ReactNode } from 'react';
import { render } from '@react-email/render';
import { Tailwind } from '@react-email/components';
import tailwindConfig from '../tailwind.config';

export const renderEmail = async (node: ReactNode): Promise<Document> => {
	const html = await render(<Tailwind config={tailwindConfig}>{node}</Tailwind>);
	return new DOMParser().parseFromString(html, 'text/html');
};

export const rgb = (hex: string): string => {
	const digits = hex.replace('#', '');
	const expanded = digits.length === 3 ? digits.replace(/./g, (c) => c + c) : digits;
	const value = parseInt(expanded, 16);
	const r = (value >> 16) & 255;
	const g = (value >> 8) & 255;
	const b = value & 255;
	return `rgb(${r},${g},${b})`;
};
