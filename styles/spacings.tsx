import tailwindConfig from '../tailwind.config';

export const spacings = {
	xs: tailwindConfig.theme.extend.spacing.xs,
	sm: tailwindConfig.theme.extend.spacing.sm,
	md: tailwindConfig.theme.extend.spacing.md,
	lg: tailwindConfig.theme.extend.spacing.lg,
	xl: tailwindConfig.theme.extend.spacing.xl,
	'2xl': tailwindConfig.theme.extend.spacing['2xl'],
	'3xl': tailwindConfig.theme.extend.spacing['3xl'],
};
