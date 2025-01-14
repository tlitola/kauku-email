import { FC } from 'react';

export const Title: FC<{ title: string }> = ({ title }) => (
	<h1 className="w-full m-0 py-lg bg-primary text-center text-white text-2xl font-bold">{title}</h1>
);
