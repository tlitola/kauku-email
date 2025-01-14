import { Img as ReactEmailImg, ImgProps } from '@react-email/components';
import { FC } from 'react';

export const Img: FC<{ src: string; alt: string; className?: string } & ImgProps> = ({
	src,
	alt,
	className,
	width,
	height,
	...props
}) => (
	<ReactEmailImg
		className={`${width === undefined ? 'w-full' : ''} ${className ?? ''}`}
		src={src}
		alt={alt}
		width={width}
		height={height}
		{...props}
	/>
);
