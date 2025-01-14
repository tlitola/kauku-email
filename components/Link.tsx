import { FC } from 'react';
import { LinkProps } from '@react-email/link';

export const Link: FC<{ variant?: 'inline' | 'button'; location?: 'left' | 'center' | 'right' } & LinkProps> = ({
	children,
	href,
	className,
	variant = 'inline',
	location = 'center',
	...props
}) =>
	variant === 'button' ? (
		<a
			className={`block w-fit mb-md px-xl py-lg bg-primary text-white rounded font-bold cursor-pointer ${location === 'center' ? 'mx-auto' : location === 'right' ? 'ml-auto' : 'ml-0'} ${className ?? ''}`}
			rel="noreferrer noopener"
			target="_blank"
			href={href}
			{...props}
		>
			{children}
		</a>
	) : (
		<a
			className={`underline text-inherit ${className ?? ''}`}
			rel="noreferrer noopener"
			target="_blank"
			href={href}
			{...props}
		>
			{children}
		</a>
	);
