import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Column, Row } from '@react-email/components';

const webVersionUrl = 'https://www.kauku.fi/2025/03/02/uuden-sudenpentulauman-infotilaisuus-26-3-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Huoltajailta 26.3."
		title="Uuden sudenpentulauman infotilaisuus"
		recipients="Lippukunnan täysi-ikäiset jäsenet, jäsenten huoltajat ja jonossa olevien lasten huoltajat"
		heroImage="https://www.kauku.fi/wp-content/uploads/huoltajailta_20250326.png"
		heroAlt="Kuvituskuva: Maisemakuva, jossa kävelee aikuisia partiolaisia"
		imageSource="Suomen Partiolaiset – Alex Inkiläinen"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Onko noin 7-vuotias lapsesi kiinnostunut aloittamaan uuden, monipuolisen ja kasvattavan harrastuksen?
					Haluaisitko itse aloittaa uuden harrastuksen lapsesi kanssa? Kauka-Kuutteihin ollaan perustamassa uusi
					sudenpentulauma vuoden 2025 aikana, johon liittyen järjestämme huoltajien infotilaisuuden{' '}
					<b>26.3. klo 18:00 lippukunnan kololla osoittessa Hansatie 2B.</b>
				</Text>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Mitä</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Infotilaisuus mahdollisten uusien sudenpentujen huoltajille, jossa käydään läpi mitä partio on,{' '}
							minkälainen partio käytännössä on harrastuksena ja minkälaisia harrastusmahdollisuuksia KauKu tarjoaa.
							Kauka-Kuutteihin ollaan perustamassa uutta sudenpentulaumaa vuoden 2025 aikana, mutta ryhmä kaipaa vielä
							johtajia.
						</Text>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Missä</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							<b>Lippukunnan kololla osoitteessa Hansatie 2B.</b>
							<br />
							Huomioittehan, että kolon pihalle ei voi pysäköidä. Kauklahden Lidlin vieressä on muutama kiekollinen
							parkkipaikka, johon auton joi jättää. Suoraan kolon vieressä on myös bussipysäkki.
						</Text>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Milloin</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							<b>Keskiviikkona 26.3. klo 18:00</b>
						</Text>
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
						<Text>
							Ilmoittauduttehan huoltajailtaan oheisen linkin kautta <b>viimeistään 23.3.</b> Näin osaamme varautua
							oikein osallistujamäärään. Mahdolliset peruutukset ja kysymykset voi lähettää Toukolle p.{' '}
							<Link href="tel:+358452093886">+358 45 209 3886</Link> tai{' '}
							<Link href="mailto:touko@litola.net">touko@litola.net</Link>.
						</Text>
						<Link variant="button" location="left" href="https://forms.gle/PpoFGCkLLVXoqt5F8">
							Ilmoittaudu huoltajailtaan
						</Link>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Etäosallistuminen</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Kokoukseen pyritään järjestämään myös etäosallistumismahdollisuus. Ensisijainen toive on kuitenkin, että
							mahdollisimman moni osallistuu kokoukseen paikan päällä. Ilmoittauduthan tapahtumaan, vaikka
							suunnittelisitkin osallistuvan kokoukseen etänä.
						</Text>
						<Link
							variant="button"
							location="left"
							href="https://teams.live.com/meet/9393996880140?p=TYN5QiwG4NjBM3Cstw"
						>
							Osallistu kokoukseen Microsoft Teamsillä
						</Link>
					</Column>
				</Row>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
