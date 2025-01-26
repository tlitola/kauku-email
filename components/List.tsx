import { FC, ReactNode } from 'react';
import { Text } from './Text';

export const List: FC<{ children: ReactNode; variant?: 'ordered' | 'unordered'; className?: string }> = ({
	children,
	variant = 'unordered',
	className,
}) => {
	const classes = `m-0 pl-xl mb-md ${className ?? ''}`;

	return variant === 'ordered' ? <ol className={classes}>{children}</ol> : <ul className={classes}>{children}</ul>;
};

export const Li: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<li className={`pl-lg ${className ?? ''}`}>
		<Text>{children}</Text>
	</li>
);
