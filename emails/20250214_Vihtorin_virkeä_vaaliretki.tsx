import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2025/02/14/vihtorin-virkea-vaaliretki-21-23-3/';

export const Template: FC = () => (
	<Email
		titleShort="Vihtorin Virkeä Vaaliretki – 1. Retkikirje"
		title="Vihtorin Virkeä Vaaliretki"
		heroImage="https://www.kauku.fi/wp-content/uploads/vaalipollo-e1739488088566.jpeg"
		heroAlt="Vaalipöllö"
		imageSource="Suomen Partiolaiset – Vaalipöllö"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Tervetuloa Kauka-Kuuttien yhteiselle kevätretkelle Espoon Nuuksioon 21.–23.3. Retki järjestetään Kattilajärven
					leirikeskuksessa, jonka koon vuoksi retki on jaettu kahteen osaan. Perjantaista lauantaihin sudenpennut ja
					seikkailijat pääsevät nauttimaan retkielämästä ja lauantaista sunnuntaihin on tarpojien ja sitä vanhempien
					vuoro.
				</Text>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Sijainti</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>Kattilajärven leirikeskus, Kattilajärventie 30 Espoo</Text>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Aikataulu</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<List>
							<Li>
								<b>21.3. klo. 17:30 – 22.3. klo 16:00:</b> Rohkeat Apinat ja Tähtipanssariketut
							</Li>
							<Li>
								<b>22.3. klo. 9:00 – 23.3. klo 14:00:</b> Vesikauhu ja Salama-Ketut
							</Li>
							<Li>
								<b>22.3. klo 10:00 – 12:00:</b> Perhepartio
							</Li>
						</List>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Kuljetukset</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							<b>Rohkeat Apinat ja Tähtipanssariketut</b>
						</Text>
						<List>
							<Li>
								<b>Lähtö: 21.3. klo 17:30</b> Kauklahden aseman liityntäpysäköinnistä Vantinportti 5
							</Li>
							<Li>
								<b>Paluu: 22.3. klo 16:00</b> Kattilajärven leirikeskukselta. Takaisin Kauklahdessa ollaan noin 16:30.
							</Li>
						</List>
						<Text>
							<b>Vesikauhu ja Salama-Ketut</b>
						</Text>
						<List>
							<Li>
								<b>Lähtö: 22.3. klo 09:00</b> Kauklahden aseman liityntäpysäköinnistä Vantinportti 5
							</Li>
							<Li>
								<b>Paluu: 23.3. klo 14:00</b> Kattilajärven leirikeskukselta kimppakyydein. Takaisin Kauklahdessa ollaan
								noin 14:30. Kyytijaot viestitään viimeistään edeltävänä iltana.
							</Li>
						</List>
						<Text>
							<b>Perhepartio</b>
						</Text>
						<List>
							<Li>Perhepartiolaiset huolehtivat omista kyydityksistä, mutta parkkipaikan koon vuoksi kimppakyytejä</Li>
						</List>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Ilmoittautuminen</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<List>
							<Li>
								<b>Kuksaan viimeistään 7.3.</b> <Link href="http://kuksaan.fi/79096">kuksaan.fi/79096</Link>
							</Li>
							<Li>
								Perhepartiolaiset ilmoittautuvat kaikki omilla tunnuksillaan, lapset ja huoltajat erikseen (jos niitä ei
								ole, olkaa yhteydessä jäsensihteeri Mariaan,{' '}
								<Link href="mailto:kaukakuutit@gmail.com">kaukakuutit@gmail.com</Link>)
							</Li>
							<Li>Ilmoittautumisen voi peruuttaa maksutta 7.3.2024 mennessä laittamalla viestiä retken johtajille.</Li>
						</List>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Majoitus</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Retkellä sudenpennut nukkuvat pääsääntöisesti sisällä ja sitä vanhemmat ulkona kamiinalämmitteisessä
							teltassa. <b>Varauduttehan siis riittävän lämpimillä makuupusseilla ja paksuilla makuualustoilla.</b>
						</Text>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section>
				<Text>
					Lisätietoa retkestä on luvassa ilmoittautuneille toisessa retkikirjeessä maaliskuussa. Sillä välin
					mahdollisiin kysymyksiin vastaavat retkenjohtajat Touko (
					<Link href="mailto:touko@litola.net">touko@litola.net</Link>, p.{' '}
					<Link target="_self" href="tel:045 209 3886">
						045 209 3886
					</Link>
					) ja Anna (<Link href="mailto:anna.nummela@gmail.com">anna.nummela@gmail.com</Link>, p.{' '}
					<Link target="_self" href="tel:050 458 1670">
						050 458 1670
					</Link>
					)
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
