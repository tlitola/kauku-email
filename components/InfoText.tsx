import { PropsWithChildren } from 'react';
import { Text, TextProps } from '@react-email/components';

export const InfoText = ({ children, className, ...props }: PropsWithChildren<TextProps>) => (
	<Text className={`m-0 mb-md italic text-sm text-tertiary ${className ?? ''}`} {...props}>
		{children}
	</Text>
);
