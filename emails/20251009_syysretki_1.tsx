import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2025/10/22/iiriksen-noitakattila-14-11-16-11/';

export const Template: FC = () => (
	<Email
		titleShort="Iiriksen noitakattila – 1. Retkikirje"
		title="Iiriksen noitakattila 14.11. – 16.11."
		heroImage="https://www.kauku.fi/wp-content/uploads/20211002_alex_inkilainen_kaannekohta_0347-e1760027967512.jpg"
		heroAlt=""
		imageSource="Suomen Partiolaiset – Alex Inkilainen"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Tervetuloa Kauka-Kuuttien yhteiselle syysretkelle Vihdin Tervalammelle 14.–16.11. Retki järjestetään Mustien
					Veljien ja Kirisiskojen kämpällä Kirilässä. Retkelle voi osallistua oman halun mukaan joko koko ajaksi tai
					ainoastaan perjantaista lauantaihin.
				</Text>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Sijainti</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>Kirilä, Pekkasenkuja 1, 03220 Tervalampi</Text>
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
								Koko retki: <b>14.11. klo. 17:45 – 16.11. klo 13:00</b>
							</Li>
							<Li>
								Lyhyt retki: <b>14.11. klo. 17:45 – 15.11. klo 16:00</b>
							</Li>
							<Li>
								Perhepartio: <b>15.11. klo 10:00 – 13:00</b>
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
							Kuljeteukset retkelle ja pois retkeltä tapahtuu kimppakyydein. Kerrothan ilmoittautumisen yhteydessä
							mikäli pääset kuljettamaan retkeilijöitä. Kimppakyydit lähtevät ja palaavat Kauklahden aseman
							liityntäpysäköinnistä.
						</Text>
						<Text>
							<b>Lähtö</b>
						</Text>
						<List>
							<Li>
								<b>14.11. klo. 17:45</b> Kauklahden aseman liityntäpysäköinnistä osoitteessa Vantinportti 5. Lähdemme
								ajamaan kohti retkipaikkaa kello 18:00, mutta olethan ajoissa paikalla!
							</Li>
						</List>
						<Text>
							<b>Paluu</b>
						</Text>
						<List>
							<Li>
								<b>Koko retki: 16.11. klo 13:00</b> Kirilästä. Takaisin Kauklahdessa noin kello 13:40.
							</Li>
							<Li>
								<b>Lyhyt retki: 15.11. klo 16:00</b> Kirilästä. Jos lapsesi on mukana vain lyhyen retkiajan, varauduthan
								hakemaan hänet retkeltä itse. Pyrimme järjestämään kimppakyydit, jos lähtijöitä on tarpeeksi.
							</Li>
						</List>
						<Text>
							<b>Perhepartio</b>
						</Text>
						<List>
							<Li>
								Perhepartiolaiset huolehtivat omista kyydityksistä, mutta parkkipaikan koon vuoksi kimppakyytejä
								suositellaan!
							</Li>
						</List>
						<Text>
							Retkeilijät jätetään parkkipaikalle ja siitä kävellään polku ylös kämpälle. Samalta parkkipaikalta
							retkeilijät noudetaan sunnuntaina. Parkkipaikalla on tilaa noin kuudelle autolle.
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
						<List>
							<Li>
								<b>Kuksaan viimeistään 2.11.</b> <Link href="https://kuksaan.fi/87483">kuksaan.fi/87483</Link>
							</Li>
							<Li>
								Perhepartiolaiset ilmoittautuvat kaikki omilla tunnuksillaan, lapset ja huoltajat erikseen (jos niitä ei
								ole, olkaa yhteydessä jäsensihteeri Mariaan, <Link href="mailto:info@kauku.fi">info@kauku.fi</Link>)
							</Li>
							<Li>Ilmoittautumisen voi peruuttaa maksutta 2.11.2025 mennessä laittamalla viestiä retken johtajille.</Li>
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
							Retkellä kaikki sudenpentuja vanhemmat nukkuvat pääsääntöisesti ainakin toisen yön ulkona.{' '}
							<b>Varauduttehan siis riittävän lämpimillä makuupusseilla ja paksuilla makuualustoilla.</b>
						</Text>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Retkimaksu</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Retken hinta määräytyy retken pituuden mukaan. Tarkemmat maksutiedot löytyvät ilmoittautumisen yhteydessä
							lähetettävästä ilmoittautumisvahvistuksesta.
						</Text>
						<List>
							<Li>Koko retki: 15€</Li>
							<Li>Lyhyt retki: 10€</Li>
							<Li>Perhepartiolaisille retken hinta on 5€ (yli 3-vuotiaille).</Li>
						</List>
						<Text>
							Retkimaksulle voidaan myös myöntää vapautus taloudellisin, terveydellisin ja sosiaalisin perustein. Jos
							haluatte kuulla lisää mahdollisuudesta, olkaa yhteydessä lippukunnanjohtaja Toukoon (
							<Link href="mailto:touko.litola@kauku.fi">touko.litola@kauku.fi</Link>, p.{' '}
							<Link target="_self" href="tel:045 209 3886">
								045 209 3886
							</Link>
							)
						</Text>
						<Text>
							Retkelle on myös saatavilla tarvittaessa lainavarusteita. Lippukunnalla on lainattavana ainakin rinkkoja,
							makuupusseja ja makuualustoja. Näistä voit tiedustella lisää Toukolta.
						</Text>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Helppo tulla</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Retkellä on käytössä Suomen Partiolaisten{' '}
							<Link href="https://www.partio.fi/partiolaiselle/apua-ja-ohjeita/tapahtumien-saavutettavuus/helppo-tulla-tunnus/">
								Helppo tulla -tunnus
							</Link>
							.
						</Text>
						<Text>
							Tapahtuman suunnittelussa on otettu huomioon seuraavat tunnuksen kriteerit. Huomioithan, että kämppä ja
							sen ympäristö ei ole helppokulkuinen.
						</Text>
						<List>
							<Li>Hygienia</Li>
							<Li>Kieli</Li>
							<Li>Lapsiperhe</Li>
							<Li>Lepo ja yöpyminen</Li>
							<Li>Lääkitys ja ensiapu</Li>
							<Li>Ohjelma</Li>
							<Li>Hyvä olla</Li>
							<Li>Raha</Li>
							<Li>Ruoka</Li>
						</List>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section>
				<Text>
					Lisätietoa retkestä, ja esimerkiksi pakkauslista, on luvassa ilmoittautuneille toisessa retkikirjeessä
					marraskuussa. Sillä välin mahdollisiin kysymyksiin vastaavat retkenjohtajat Hilla (p.{' '}
					<Link target="_self" href="tel:045 695 4808">
						045 695 4808
					</Link>
					), Kalavanukas (Ella, p.{' '}
					<Link target="_self" href="tel:050 458 1670">
						045 699 9811
					</Link>
					) ja Rané (Elsá, p.{' '}
					<Link target="_self" href="tel:045 156 3073">
						045 156 3073
					</Link>
					)
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
