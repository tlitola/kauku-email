import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, MailTo, Tel } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2026/02/22/kimin-kevainen-kiepautus-20-3-22-3/';

export const Template: FC = () => (
	<Email
		titleShort="Soinnun Sykkivä Sydän – 1. Retkikirje"
		title="Soinnun Sykkivä Sydän 23.10.–25.10."
		heroImage="https://www.kauku.fi/wp-content/uploads/kauku-vaellus-teltat.jpeg"
		heroAlt=""
		imageSource="Kauka-Kuutit – Katariina Luukkanen"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Tervetuloa kaikkien Kauka-Kuuttien yhteiselle syysretkelle Luukin leirikeskukseen 23.–25.10.</Text>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Sijainti</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>Luukin leirikeskus, Luukinranta 10, 02970 Espoo</Text>
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
								Koko retki: <b>23.10. klo. 18:30 – 25.10. klo 13:00</b>
							</Li>
							<Li>
								Päiväretki (Ketunpennut ja Tiikerit): <b>24.10. klo 10:00 – 16:15</b>, Perhepartiolaiset voivat oman
								harkinnan mukaan olla paikalla myös lyhyemmän ajan.
							</Li>
						</List>
						<Text>
							Päiväretki on suunnattu perhepartiolaisille ja sudenpennuille, koko retki tätä vanhemmille ikäkausille.
						</Text>
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
							<b>Tähtipanssariketut ja samoajat</b> kulkevat retkelle julkisilla Kestävästi partiossa -hengessä.
							Retkimatkaan sisältyy tällöin <b>noin 1 km kävely</b>, pakkaattehan tavarat sen mukaisesti!
						</Text>
						<Text>
							<b>Perhepartiolaiset, Tiikerit ja Rohkeat Apinat</b> tulevat retkelle lähtökohtaisesti kimppakyydeillä
							huoltajien avulla. Kerrothan ilmoittautumisen yhteydessä mikäli pääset kuljettamaan retkeilijöitä.
							Kimppakyydit lähtevät ja palaavat Kauklahden aseman liityntäpysäköinnistä.
						</Text>
						<Hr />
						<Text>
							<b>Rohkeat apinat</b> (koko retki)
						</Text>
						<List>
							<Li>
								<b>Lähtö: 23.10. klo. 17:45</b> Kauklahden aseman liityntäpysäköinnistä osoitteessa Vantinportti 5.
								Lähdemme ajamaan kohti retkipaikkaa kello 18:00, mutta olethan ajoissa paikalla!
							</Li>
							<Li>
								<b>Paluu: 25.10. klo 13:15</b> Luukista. Takaisin Kauklahdessa noin kello 13:45.
							</Li>
						</List>
						<Hr />
						<Text>
							<b>Tähtipanssariketut ja samoajat</b> (koko retki)
						</Text>
						<List>
							<Li>
								<b>Lähtö: 23.10. klo. 17:10</b> Kauklahden aseman 2/3 raiteelta.
							</Li>
							<Li>
								<b>Paluu: 25.10. klo 13:05</b> Luukista. Takaisin Kauklahdessa noin kello 14:30.
							</Li>
						</List>
						<Hr />
						<Text>
							<b>Päiväretki</b>
						</Text>
						<Text>
							Myös päiväretkiläisille järjestetään yhteislähtö ja kimppakyydit. Ilmoitattehan ilmoittautumisen
							yhteydessä lisätietoihin, jos ette aio osallistua kimppakyyteihin. Kestävästi Partiossa -hengessä haluamme
							kuitenkin välttää ylimääräisiä autoja.
						</Text>
						<List>
							<Li>
								<b>Lähtö: 24.10. klo 9:15</b> Kauklahden aseman liityntäpysäköinnistä osoitteessa Vantinportti 5.
							</Li>
							<Li>
								<b>Paluu: 24.10. klo 16:15</b> Luukista. Takaisin Kauklahdessa noin kello 16:45.
							</Li>
						</List>
						<Hr />
						<Text>
							Retkeilijät jätetään parkkipaikalle ja siitä kävellään kämpälle. Samalta parkkipaikalta retkeilijät
							noudetaan sunnuntaina. Parikkipaikalla on tilaa rajatulle määrälle autoja.
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
								<b>Kuksaan viimeistään 16.10.</b> <Link>kuksaan.fi/96439</Link>
							</Li>
							<Li>
								Perhepartiolaiset ilmoittautuvat kaikki omilla tunnuksillaan, lapset ja huoltajat erikseen (jos niitä ei
								ole, olkaa yhteydessä jäsensihteeri Mariaan, <MailTo>info@kauku.fi</MailTo>)
							</Li>
							<Li>
								Ilmoittautumisen voi peruuttaa maksutta 16.10.2026 mennessä laittamalla viestiä retken johtajalle.
							</Li>
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
							Retkellä kaikki osallistujat majoittuvat lähtökohtaisesti sisällä kerrossängyissä. Leirikeskuksen
							varustukseen kuuluvat patjat, mutta niiden päälle <b>täytyy ottaa mukaan oma lakana</b>.
							<br />
							Nukkumajärjestelyt voivat vielä muuttua osallistujamäärästä riippuen.
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
							<b>käyttäen viitettä 67946</b>. Pankki veloittaa ilman viitettä tulevista maksuista korkean
							käsittelymaksun.
						</Text>
						<Text>
							Retkimaksu tulee maksaa <b>viimeistään 16.10.2026</b>
						</Text>
						<List>
							<Li>Koko retki: 15€</Li>
							<Li>Päiväretki: 5€</Li>
						</List>
						<Text>
							Retkimaksulle voidaan myös myöntää vapautus taloudellisin, terveydellisin ja sosiaalisin perustein. Jos
							haluatte kuulla lisää mahdollisuudesta, olkaa yhteydessä lippukunnanjohtaja Toukoon (
							<MailTo>touko.litola@kauku.fi</MailTo>, p. <Tel>045 209 3886</Tel>)
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
							, joka auttaa viestimään tapahtuman saavutettavuudesta.
						</Text>
						<Text>Tapahtuman suunnittelussa on otettu huomioon seuraavat tunnuksen kriteerit.</Text>
						<List>
							<Li>Hyvä olla</Li>
							<Li>Ruoka</Li>
							<Li>Raha</Li>
							<Li>Hygienia</Li>
							<Li>Lepo ja yöpyminen</Li>
							<Li>Lääkitys ja ensiapu</Li>
							<Li>Näköaisti ja hajuaisti</Li>
							<Li>Lapsiperhe</Li>
							<Li>Katsomus</Li>
						</List>
						<Text>
							Saavutettavuuteen liittyvissä asioissa voi olla matalalla kynnyksellä yhteydessä retken johtajaan. Retken
							aikana tapahtumassa on myös nimetty Turva-aikuinen, jonka kanssa voi keskustella aiheeseen liittyen.
						</Text>
						<Text>
							Muistattehan myös tehdä oman osanne varmistaaksenne sen, että jokainen kokee olonsa tervettulleeksi
							tapahtumaan. Älkää esimerkiksi käyttäkö retkellä vahvasti hajustettuja tuotteita ja muistakaa toimia{' '}
							<Link href="https://www.partio.fi/suomen-partiolaiset/partiofaktat/tasa-arvo-ja-yhdenvertaisuus-partiossa/turvallisemman-tilan-periaatteet-ja-vihapuheesta-vapaan-keskustelun-saannot/">
								Turvallisemman tilan periaatteiden
							</Link>{' '}
							mukaisesti.
						</Text>
						<Text>
							Lisätietoa Luukin leirikeskuksen esteettömyydestä löytyy osoitteesta{' '}
							<Link>https://www.espoo.fi/fi/toimipisteet/luukin-leirikeskus</Link>.
						</Text>
					</Column>
				</Row>
			</Section>
			<Hr />
			<Section>
				<Text>
					Lisätietoa retkestä, ja esimerkiksi pakkauslista, on luvassa ilmoittautuneille toisessa retkikirjeessä
					lokakuussa. Sillä välin mahdollisiin kysymyksiin vastaava retkenjohtaja Touko (p. <Tel>045 209 3886</Tel>,{' '}
					<MailTo>touko.litola@kauku.fi</MailTo>)
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
