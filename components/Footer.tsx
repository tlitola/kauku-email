import { FC, ReactNode } from 'react';
import { Section } from './Section';
import { Section as ReactEmailSection, Column, Row } from '@react-email/components';
import { Text } from './Text';
import { Link } from './Link';
import { Img } from './Img';
import { InfoText } from './InfoText';

const Title: FC<{ children: ReactNode }> = ({ children }) => (
	<Text className="font-bold text-white text-md text-nowrap">{children}</Text>
);

export const Footer: FC<{ imageSource?: string }> = ({ imageSource }) => (
	<Section backgroundColor="primary" className="section-odd" multiRow>
		<Row className="mb-lg mt-md">
			<Column>
				{imageSource && (
					<InfoText className="text-center text-background mb-lg">
						<b>Viestin kuvat:</b> {imageSource}
					</InfoText>
				)}
				<InfoText className="text-center text-background mb-lg">
					<b>Osoitelähde:</b> <Link>Jäsenrekisteri Kuksa</Link>
				</InfoText>
				<InfoText className="text-center text-background mb-lg">
					Copyright © {new Date().getFullYear()} Kauka-Kuutit ry
				</InfoText>
			</Column>
		</Row>
		<Row>
			<Column className="w-1/3" valign="top" align="center">
				<Title>Kauka-Kuutit ry</Title>
				<Text>Hansatie 2B, 02780 Espoo</Text>
				<Text>
					<Link className="text-wrap" href="mailto:kaukakuutit@gmail.com">
						kaukakuutit@&#8203;gmail.com
					</Link>
				</Text>
				<Text>
					<Link href="https://www.kauku.fi">kauku.fi</Link>
				</Text>
			</Column>
			<Column className="w-1/3 mx-sm" align="center" valign="top">
				<Title>Lisätietoja</Title>
				<Text>
					<Link href="https://www.kauku.fi/liity-jaseneksi/">Mukaan toimintaan</Link>
				</Text>
				<Text>
					<Link href="https://www.kauku.fi/lippukunta/hyva-tietaa-usein-kysytyt-kysymykset-ukk/">UKK </Link>
				</Text>
				<Text>
					<Link href="https://www.kauku.fi/lippukunta/ryhmien-kokoontumisajat/">Ryhmät </Link>
				</Text>
				<Text>
					<Link href="https://www.kauku.fi/lippukunta/about/yhteystiedot/">Yhteystiedot </Link>
				</Text>
			</Column>
			<Column className="w-1/3" align="center" valign="top">
				<Title>Seuraa meitä</Title>
				<ReactEmailSection>
					<Row align="center" className="w-full mb-md">
						<Column align="right" className="w-5/12">
							<Link href="https://www.facebook.com/kaukakuutit">
								<Img
									src="https://www.kauku.fi/wp-content/uploads/facebook_logo_colored.png"
									alt="Facebook"
									width={24}
									className="mr-md"
								/>
							</Link>
						</Column>
						<Column className="w-7/12">
							<Link href="https://www.facebook.com/kaukakuutit">
								<Text className="mb-0">Facebook</Text>
							</Link>
						</Column>
					</Row>
					<Row align="center" className="w-full">
						<Column className="w-5/12" align="right">
							<Link href="https://www.instagram.com/kaukakuutit/">
								<Img
									src="https://www.kauku.fi/wp-content/uploads/instagram_logo_colored.png"
									alt="Instagram"
									width={24}
									className="mr-md"
								/>
							</Link>
						</Column>
						<Column className="w-7/12">
							<Link href="https://www.instagram.com/kaukakuutit/">
								<Text className="mb-0">Instagram</Text>
							</Link>
						</Column>
					</Row>
				</ReactEmailSection>
			</Column>
		</Row>
	</Section>
);
