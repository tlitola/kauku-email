import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2026/02/22/kimin-kevainen-kiepautus-20-3-22-3/';

export const Template: FC = () => (
	<Email
		titleShort="Kimin keväinen kiepautus – 1. Retkikirje"
		title="Kimin keväinen kiepautus 20.3.–22.3."
		heroImage="https://www.kauku.fi/wp-content/uploads/20210205_kokkeli-talvella1-scaled.jpg"
		heroAlt=""
		imageSource="Kauka-Kuutit – Katariina Luukkanen"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Tervetuloa kaikkien Kauka-Kuuttien yhteiselle kevätretkelle KiMen Karhukololle 20.–22.3.</Text>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Sijainti</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>Karhukolo, Dalkullantie 162, 02400 Kirkkonummi</Text>
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
								Koko retki: <b>20.3. klo. 18:30 – 22.3. klo 13:00</b>
							</Li>
							<Li>
								Perhepartio: <b>21.3. klo 10:00 – 13:00</b>
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
						<Text>Kuljetukset retkelle ja pois retkeltä tapahtuu julkisilla ja kimppakyydein.</Text>
						<Text>
							<b>Kaikki tarpojat ja samoajat</b> kulkevat retkelle julkisilla Kestävästi partiossa -hengessä.
							Retkimatkaan sisältyy tällöin <b>noin 2,5 km kävely</b>, pakkaattehan tavarat sen mukaisesti! Tarkka
							lähtö- ja paluuaika varmistetaan toisessa leirikirjeessä.
						</Text>
						<Text>
							<b>Tarpojia nuoremmat ikäkaudet</b> tulevat retkelle lähtökohtaisesti kimppakyydeillä. Kerrothan
							ilmoittautumisen yhteydessä mikäli pääset kuljettamaan retkeilijöitä. Kimppakyydit lähtevät ja palaavat
							Kauklahden aseman liityntäpysäköinnistä.
						</Text>
						<Text>
							<b>Lähtö</b>
						</Text>
						<List>
							<Li>
								<b>Tarpojat ja Samoajat: 20.3. noin klo. 17:00</b> Kauklahden aseman 1 raiteelta.
							</Li>
							<Li>
								<b>Sudenpennut ja Seikkailijat 20.3. klo. 17:45</b> Kauklahden aseman liityntäpysäköinnistä osoitteessa
								Vantinportti 5. Lähdemme ajamaan kohti retkipaikkaa kello 18:00, mutta olethan ajoissa paikalla!
							</Li>
						</List>
						<Text>
							<b>Paluu</b>
						</Text>
						<List>
							<Li>
								<b>Sudenpennut ja Seikkailijat: 22.3. klo 13:00</b> Karhukololta. Takaisin Kauklahdessa noin kello
								13:30.
							</Li>
							<Li>
								<b>Tarpojat ja Samoajat: 22.3. noin klo 12:40</b> Karhukololta. Takaisin Kauklahdessa noin kello 13:50.
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
							Retkeilijät jätetään parkkipaikalle ja siitä kävellään kämpälle. Samalta parkkipaikalta retkeilijät
							noudetaan sunnuntaina. Parikkipaikalla on tilaa rajatulle määrälle autoja, ja kelirikko voi vaikuttaa
							kämpälle pääsyyn.
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
								<b>Kuksaan viimeistään 13.3.</b> <Link href="https://kuksaan.fi/90622">kuksaan.fi/87483</Link>
							</Li>
							<Li>
								Perhepartiolaiset ilmoittautuvat kaikki omilla tunnuksillaan, lapset ja huoltajat erikseen (jos niitä ei
								ole, olkaa yhteydessä jäsensihteeri Mariaan, <Link href="mailto:info@kauku.fi">info@kauku.fi</Link>)
							</Li>
							<Li>Ilmoittautumisen voi peruuttaa maksutta 13.3.2026 mennessä laittamalla viestiä retken johtajille.</Li>
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
							Retkellä kaikki seikkailijat ja sitä vanhemmat nukkuvat pääsääntöisesti ulkona kamiinalla lämmitetyssä
							teltassa. <b>Varauduttehan siis riittävän lämpimillä makuupusseilla ja paksuilla makuualustoilla.</b>
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
							Retkimaksu tulee maksaa lippukunnan tilille FI68 5037 0520 1154 58 (Partiolippukunta Kauka-Kuutit r.y.){' '}
							<b>käyttäen viitettä 40798</b>. Pankki veloittaa ilman viitettä tulevista maksuista korkean
							käsittelymaksun.
						</Text>
						<Text>
							Retkimaksu tulee maksaa <b>viimeistään 13.3.2026</b>
						</Text>
						<List>
							<Li>Koko retki: 15€</Li>
							<Li>Perhepartiolaisille retken hinta on 5€ (3+ vuotiaille).</Li>
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
							<Li>Katsomus</Li>
						</List>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section>
				<Text>
					Lisätietoa retkestä, ja esimerkiksi pakkauslista, on luvassa ilmoittautuneille toisessa retkikirjeessä
					maaliskuussa. Sillä välin mahdollisiin kysymyksiin vastaavat retkenjohtajat Hilla (p.{' '}
					<Link target="_self" href="tel:045 695 4808">
						045 695 4808
					</Link>
					) ja Olle (p.{' '}
					<Link target="_self" href="tel:044 322 3352">
						044 322 3352
					</Link>
					)
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
