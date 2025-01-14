import { FC, PropsWithChildren } from 'react';
import { Column, Link, Row, Section, Text } from '@react-email/components';
import { Img } from './Img';

const NavigationLink = ({ children, href }: PropsWithChildren<{ href: string }>) => (
	<Column className="navigation-link w-1/3 text-nowrap" align="center">
		<Link className="block text-white font-bold p-lg" href={href} rel="noreferrer noopener" target="_blank">
			{children}
		</Link>
	</Column>
);

export const Header: FC<{ title: string }> = ({ title }) => (
	<Section>
		<Row className="mb-lg">
			<NavigationLink href="https://www.kauku.fi/ajankohtaiset/">Ajankohtaista</NavigationLink>
			<NavigationLink href="https://www.kauku.fi/calendar/tapahtumat/">Kalenteri</NavigationLink>
			<NavigationLink href="https://www.kauku.fi/lippukunta/hyva-tietaa-usein-kysytyt-kysymykset-ukk/">
				UKK
			</NavigationLink>
		</Row>
		<Row className="mb-lg">
			<Column className="pl-3xl">
				<Link href="https://kauku.fi" rel="noreferrer noopener" target="_blank">
					<Img src="https://www.kauku.fi/wp-content/uploads/kauku-e1735839745743.png" alt="KauKu logo" width={64} />
				</Link>
			</Column>
			<Column align="right" className="pr-3xl">
				<Text className="text-base m-0 ">Partiolippukunta Kauka&#8209;Kuutit ry</Text>
				<Text className="text-base m-0 text-tertiary">
					{title} |{' '}
					{new Intl.DateTimeFormat('fi-FI', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric',
					}).format(new Date())}
				</Text>
			</Column>
		</Row>
	</Section>
);
