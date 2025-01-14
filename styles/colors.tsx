import tailwindConfig from '../tailwind.config';

export const colors = {
	primary: tailwindConfig.theme.extend.colors.primary,
	secondary: tailwindConfig.theme.extend.colors.secondary,
	tertiary: tailwindConfig.theme.extend.colors.tertiary,
	background: tailwindConfig.theme.extend.colors.background,
	white: '#fff',
} as const;

export type Colors = keyof typeof colors;
