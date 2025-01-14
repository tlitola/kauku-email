import { FC } from 'react';
import { InfoText } from './InfoText';

export const Recipients: FC<{ recipients: string }> = ({ recipients }) => (
	<InfoText className="ml-lg mb-md mt-md">Jakelu: {recipients}</InfoText>
);
