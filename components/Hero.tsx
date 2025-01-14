import { FC } from 'react';
import { Img } from './Img';

export const Hero: FC<{
	imageUrl?: string;
}> = ({ imageUrl }) => (imageUrl ? <Img alt="hero image" src={imageUrl} /> : null);
