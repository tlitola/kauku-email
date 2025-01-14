import { FC } from 'react';
import { Hr as ReactEmailHr, HrProps } from '@react-email/components';
import { spacings } from '../styles/spacings';

export const Hr: FC<HrProps> = (props) => (
	<ReactEmailHr style={{ borderTopWidth: 2, marginTop: 0, marginBottom: spacings.lg }} {...props} />
);
