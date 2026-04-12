import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, MailTo, Tel } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2026/04/11/rebekkan-reporetki-vaellus-14-5-17-5/';

export const Template: FC = () => (
	<Email
		titleShort="Rebekkan Reporetki – 1. Retkikirje"
		title="Rebekkan Reporetki -vaellus 14.5.–17.5."
		heroImage="https://www.kauku.fi/wp-content/uploads/repovesi_isto_hurmekoski.jpg"
		heroAlt=""
		recipients="Lippukunnan tarpojat ja heitä vanhemmat ikäkaudet huoltajineen"
		imageSource="Pixabay – Isto Hurmekoski"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Tervetuloa Kauka-Kuuttien kevätvaellukselle 14.5.–17.5.</Text>
				<Text>Vaellus järjestetään Repoveden kansallispuistossa ja tavoitteena on kiertää Kaakkurinkierros.</Text>
				<Text>
					Vaellus on sen rasittavuuden vuoksi suunnatattu lähinnä tarpojille ja sitä vanhemmille ikäkausille. Myös
					kaikki aikuiset ovat tervetulleita mukaan!
				</Text>
				<Text>
					Vaellus järjestetään, jos sille on ainakin 3 osallistujaa. Pyydättehän siis myös kaverit mukaan vaellukselle!
				</Text>
				<Text>
					<b>
						Huomioithan, että vaikka vaellus sijoittuu Kiirastorstaille, on perjantai 15.5. mahdollisesti koulu- ja
						työpäivä. Muistattehan hakea lomaa päivälle ajoissa!
					</b>
				</Text>
			</Section>
			<Hr />
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Sijainti</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>Repoveden kansallispuisto. Kierrämme Repoveden kansallispuiston Kaakkurinkierroksen.</Text>
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
						<Text>
							Vaellus kestää joko 3 tai 4 päivää. Ilmoittautumisen yhteydessä voitte ilmoittaa kumpi vaihtoehto olisi
							teidän mielestä parempi. Vaellus toteutuu enemmän ääniä saanen vaihtoehdon mukaisesti.
						</Text>
						<List>
							<Li>
								<b>Vaihtoehto 1:</b> 14.5.–16.5. Tällöin vaelluksen pituus on n. 27km
							</Li>
							<Li>
								<b>Vaihtoehto 2:</b> 14.5.–17.5. Tällöin vaelluksen pituus on n. 40km
							</Li>
						</List>
						<Text>Lähtö tapahtuu torstaina aikaisin aamulla, ja paluu tapahtuu paluupäivänä illasta.</Text>
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
							Kulku Repoveden kansallispuistoon tapahtuu joko junalla (IC 63) tai yhteisellä autokyydillä riippuen
							vaelluksen äänestystuloksesta ja osallistujamäärästä.
						</Text>
						<Text>Meno ja paluumatkan hinta on sisällytetty retkimaksuun.</Text>
						<Text>
							Lähtö ja paluu tapahtuu lippukunnan kololta, jotta voimme pakata vaellustarvikkeet rinkkoihin.{' '}
							<b>Jätättehän siis rinkkoihin vapaata tilaa yhteisiä varusteita varten.</b>
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
								<b>Kuksaan viimeistään 26.4.</b> <Link href="https://kuksaan.fi/92248">kuksaan.fi/92248</Link>
							</Li>
							<Li>
								Ilmoittautumisen voi peruuttaa maksutta 26.4.2026 mennessä laittamalla viestiä vaelluksen johtajille.
								Varaamme mahdolliset junamatkat heti ilmoittautumisen päätyttyä.
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
							Retkellä majoittaudutaan kupoliteltoissa. Toukokuussa Repovedellä yölämpötilat voivat tippua alle 10
							asteen, joten varauduttehan sen mukaisesti.
						</Text>
						<Text>
							Lisää ohjeita pakkaamiseen toisessa retkikirjeessä, jonka lisäksi järjestämme ennen vaellusta erillisen
							infotilaisuuden, jossa annamme vihjeitä vaellukselle valmistautumiseen.
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
							<b>käyttäen viitettä 75954</b>. Pankki veloittaa ilman viitettä tulevista maksuista korkean
							käsittelymaksun.
						</Text>
						<Text>
							Retkimaksu tulee maksaa <b>viimeistään 26.4.2026</b>
						</Text>
						<List>
							<Li>Vaelluksen osallistumismaksu on 45€.</Li>
						</List>
						<Text>
							Retkimaksulle voidaan myös myöntää vapautus taloudellisin, terveydellisin ja sosiaalisin perustein. Jos
							haluatte kuulla lisää mahdollisuudesta, olkaa yhteydessä lippukunnanjohtaja Toukoon (
							<MailTo>touko.litola@kauku.fi</MailTo>, p. <Tel>045 209 3886</Tel>)
						</Text>
						<Text>
							Vaellukselle on myös saatavilla tarvittaessa lainavarusteita. Lippukunnalla on lainattavana ainakin
							rinkkoja, makuupusseja ja makuualustoja. Näistä voit tiedustella lisää Toukolta.
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
							Vaelluksella on käytössä Suomen Partiolaisten{' '}
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
							<Li>Kieli</Li>
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
					Lisätietoa vaelluksesta, ja esimerkiksi pakkauslista, on luvassa ilmoittautuneille toisessa retkikirjeessä ja
					erikseen järjestettävässä infotilaisuudessa Toukokuun alussa. Sillä välin mahdollisiin kysymyksiin vastaa
					vaelluksen johtaja Touko (p. <Tel>045 209 3886</Tel>)
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
