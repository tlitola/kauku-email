import { FC, ReactElement, ReactNode } from 'react';
import { Column, Row, Section as ReactEmailSection } from '@react-email/components';
import { colors, Colors } from '../styles/colors';
import { Divider } from './Divider';
import { Hr } from './Hr';

export const SectionsWrapper: FC<{
	children: ReactElement | ReactElement[];
	final?: boolean;
	alternateColors?: boolean;
	backgroundColor?: Colors | string;
}> = ({ children, final, alternateColors = true, backgroundColor }) => {
	return (
		<>
			{(Array.isArray(children) ? children : [children]).map((child, i) => (
				<div
					className={`w-full ${alternateColors ? (i % 2 === 0 ? 'section-even' : 'section-odd') : 'section-even'} ${backgroundColor ? `bg-[${backgroundColor in colors ? colors[backgroundColor as Colors] : backgroundColor}]` : ''} `}
					key={`section-${i}`}
				>
					{child}
				</div>
			))}
			{!final && <Divider />}
		</>
	);
};

const Title: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<>
		<h2 className={`w-full text-center m-0 mt-xl mb-xl uppercase text-xl ${className ?? ''}`}>{children}</h2>
		<Hr />
	</>
);

Title.displayName = 'Section.Title';
Section.Title = Title;

const SubTitle: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<h3 className={`w-full m-0 mb-lg text-lg ${className ?? ''}`}>{children}</h3>
);

Title.displayName = 'Section.SubTitle';
Section.SubTitle = SubTitle;

export function Section({
	children,
	backgroundColor,
	multiRow = false,
	className,
}: {
	children: ReactNode;
	backgroundColor?: Colors;
	multiRow?: boolean;
	className?: string;
}) {
	return (
		<ReactEmailSection
			className={`px-xl py-md ${backgroundColor ? `bg-[${colors[backgroundColor]}]` : 'bg-transparent'} ${className ?? ''}`}
		>
			{multiRow ? (
				children
			) : (
				<Row>
					<Column>{children}</Column>
				</Row>
			)}
		</ReactEmailSection>
	);
}
