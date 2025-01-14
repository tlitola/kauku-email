import { FC } from 'react';
import { Text as ReactEmailText, TextProps } from '@react-email/components';

export const Text: FC<TextProps> = ({ children, className, ...props }) => (
	<ReactEmailText className={`m-0 mb-md text-md ${className ?? ''}`} {...props}>
		{children}
	</ReactEmailText>
);
