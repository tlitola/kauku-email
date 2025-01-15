import { FC } from 'react';
import { Img } from './Img';

export const Hero: FC<{
	imageUrl?: string;
	heroAlt?: string;
}> = ({ imageUrl, heroAlt = 'Hero image' }) => (imageUrl ? <Img alt={heroAlt} src={imageUrl} /> : null);
