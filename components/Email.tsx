import { CSSProperties, FC, ReactNode } from 'react';
import { Body, Container, Head, Html, Tailwind } from '@react-email/components';
import { Header } from './Header';
import tailwindConfig from '../tailwind.config';
import { Hero } from './Hero';
import { Title } from './Title';
import { Recipients } from './Recipients';
import { colors } from '../styles/colors';
import { Footer } from './Footer';
import { InfoText } from './InfoText';
import { Link } from './Link';
import { Hr } from './Hr';

export const Email: FC<{
	children: ReactNode;
	titleShort: string;
	title?: string;
	recipients?: string;
	heroImage?: string;
	heroAlt?: string;
	imageSource?: string;
	webVersionurl: string;
}> = ({
	children,
	titleShort,
	title,
	heroImage,
	imageSource,
	webVersionurl,
	recipients = 'Lippukunnan jäsenet huoltajineen',
}) => (
	<Tailwind config={tailwindConfig}>
		<Html>
			<Head>
				<style>
					{
						/* language=CSS */ `
						.navigation-link {
							background-color: ${colors.primary};
						}

						.navigation-link:hover {
							background-color: ${colors.secondary};
						}

						.section-odd {
							color: white;
							background-color: ${colors.secondary};
						}

						.section-even {
							color: ${colors.primary};
							background-color: white;
						}

						a {
							text-decoration: none;
						}

						a:hover {
							text-decoration: underline;
						}
					`
					}
				</style>
			</Head>
			<Body style={main} className={`bg-background py-xl px-md`}>
				<InfoText className="w-full text-center">
					Eikö viesti näy oikein? <Link href={webVersionurl}>Lue se selaimessa.</Link>
				</InfoText>
				<Container className="bg-white shadow-sm max-w-screen-md">
					<Recipients recipients={recipients} />
					<Header title={titleShort} />
					<Hero imageUrl={heroImage} />
					{title ? <Title title={title} /> : <Hr className="mb-0" />}
					<main>{children}</main>
					<Footer imageSource={imageSource} />
				</Container>
			</Body>
		</Html>
	</Tailwind>
);

const main: CSSProperties = {
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
