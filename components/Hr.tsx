import { FC } from 'react';
import { Hr as ReactEmailHr, HrProps } from '@react-email/components';
import { spacings } from '../styles/spacings';

export const Hr: FC<HrProps & { width?: number }> = ({ width, ...props }) => (
	<ReactEmailHr style={{ borderTopWidth: width ?? 2, marginTop: 0, marginBottom: spacings.lg }} {...props} />
);
