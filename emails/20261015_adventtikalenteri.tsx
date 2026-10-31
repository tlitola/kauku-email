import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, MailTo, Tel } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Li, List } from '../components/List';
import { Column, Row } from '@react-email/components';
import { Img } from '../components/Img';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/adventtikalenterit/';

export const Template: FC = () => (
	<Email
		titleShort="Adventtikalentit 2026"
		recipients="Adventtikalenterikamppanjaan osallistuvat Kauka-Kuutit ja huoltajat"
		title="Adventtikalenterikamppanja 2026"
		heroImage="https://www.kauku.fi/wp-content/uploads/adventtikalenteri26_kalenteripuput.png"
		heroAlt=""
		imageSource="Suomen partiolaiset"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Hei partiolaiset ja huoltajat!</Text>
				<Text>
					Partiolaisten ehkäpä suurin varainhankinta kampanja alkaa 15.10.2026 ja myös Kauka-Kuutit ovat mukana. Myymme
					siis Partiolaisten Adventtikalentereita!
				</Text>
				<Text>
					Saatat saada tämän viestin useaan kertaan, jos olet useamman Kauka-Kuutin huoltaja. Tämä viesti lähetetään
					jokaiselle myyjälle erikseen, joten olethan tarkkana, että katsot oikean myyjän tiedot.
				</Text>
				<Text>
					<b>Tässä viestissä</b>
				</Text>
				<List variant="ordered">
					<Li>Perustietoja kalenterista</Li>
					<Li>Kalentereiden myynti</Li>
					<Li>MobilePay</Li>
					<Li>Kalentereiden tilitys</Li>
					<Li>Tonttumerkit</Li>
					<Li>Myyntitempaukset</Li>
				</List>
			</Section>
			<Section>
				<Section.Title>Perustietoja kalenterista</Section.Title>
				<Row>
					<Column className="w-2/3 pl-md text-start" valign="top" align="center">
						<List>
							<Li>Adventtikalenterin myyntiaika on 15.10.-5.12.2026. Verkkokauppamyynti päättyy 30.11.2026.</Li>
							<Li>Kalenterin hinta on 13€/kpl.</Li>
							<Li>
								Lippukuntien osuus adventtikalenterin myyntihinnasta on 5,59 €, partiopiirin 3,77 € ja keskusjärjestön
								3,64 €.
							</Li>
							<Li>
								Lippukunnan tienattu osuus menee jäsenten vuoden 2027 kesäleirien osallistumisten tukemiseen sekä
								telttojen hankintaan.
							</Li>
							<Li>
								Myymättömät kalenteri tulee palauttaa viimeistään viikolla 49 (30.11.-3.12.) kokouksiin. Myyjä saa
								palauttaa vain puolet ottamistaan kalentereista.
							</Li>
							<Li>Kalentereita saa ryhmien kokouksien yhteydessä.</Li>
						</List>
					</Column>
					<Column className="w-1/3">
						<Img
							src="https://www.kauku.fi/wp-content/uploads/medium_partiolaisten-adventtikalenteri-2026.jpg"
							className="w-full"
							alt="Adventtikalenteri 2026"
						/>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>Kalentereiden myynti</Section.Title>
				<Text>
					Kalentereiden myynti tapahtuu ovelta ovelle, läheisiltä ja tuttavilta kysellen tai verkkokaupan kautta.
					Muistakaa aina myydessä pitää partiohuivia ja jos on partiopaita niin sitä. Iloinen olemus on myyjän
					valttikortti!
				</Text>
				<Text>
					Muistakaa, että myyntiä ei saa tehdä julkisilla alueilla eikä kauppojen ja kauppakeskusten lähellä, edessä
					taikka sisällä. Tällaista myyntiä varten lippukunnalla on omat myyntitapahtumat!
				</Text>
				<Text>
					Maksun voi ottaa vastaan käteisellä tai MobilePayllä. Maksuista on oltava tarkkana, että yksi
					adventtikalenteri maksaa 13€. Tämän lisäksi joissain tapauksissa lippukunnalta on mahdollista saada lainaan
					korttipääte. Korttipäätteen lainaamisesta tulee aina sopia kamppanjapäällikön kanssa erikseen.
				</Text>
				<Text>
					Jokaisella lippukunnan myyjällä on oma henkilökohtainen verkkokauppalinkki. Linkkiä voi jakaa sukulaisille ja
					tuttaville ja sen käyttö kartuttaa henkilökohtaista myyntiä. Oman verkkokauppalinkin voi hakea täältä:{' '}
					<Link>
						www.adventtikalenteri.fi/myyjille/myynti/verkkokauppa-myyntikanavana/henkilokohtaiset-myyntilinkit/
					</Link>
					<br />
					Myyjänumero on sama kuin jäsennumero joka löytyy Kuksasta helpoiten omista tiedoista. Jos tämä ei onnistu niin
					ole yhteydessä Heituun, alla yht.tiedot.
				</Text>
				<Text>
					Myös lippukunnalla on oma verkkokauppalinkki. Tämän linkin käyttö ei kerrytä henkilökohtaista myyntisaldoa.{' '}
					<Link>www.adventtikalenteri.fi/osta/lippukunta/kauka-kuutit-ry</Link>
				</Text>
			</Section>
			<Section>
				<Section.Title>MobilePay</Section.Title>
				<Row>
					<Column className="w-2/3 pl-md text-start" valign="top" align="center">
						<Text>
							Jokainen myyjä saa oman lyhytnumeron sekä QR-koodin MobilePay:n, jonka skannaamalla ostaja voi maksaa
							kalenterin myyntitilanteessa. Vaihtoehtoisesti ostaja voi syöttää kaupan numeron ja lyhytnymeron
							MobilePay:n. Lyhytnumero on sama kuin partiolaisen viitenumero lippukunnan tilille kalentereita
							tilittäessä.
						</Text>
						<Text>
							MobilePayllä maksaminen käydään läpi kokouksessa ja jokainen myyjä saa henkilökohtaisen kortin, jossa on
							MobilePayn QR-koodi ja ohjeet sen käyttöön.
						</Text>
						<Text>
							Jos MobilePayn käyttöön liittyen herää kysymyksiä, niissä voi olla yhteydessä Toukoon (
							<MailTo>touko.litola@kauku.fi</MailTo>).
						</Text>
					</Column>
					<Column className="w-1/3" valign="top">
						<Text>
							<b>Henkilökohtaiset myyjätiedot:</b>
						</Text>
						<List>
							<Li>
								<b>Myyjä:</b> {'{{myyja}}'}
							</Li>
							<Li>
								<b>Kaupan numero:</b> #46401
							</Li>
							<Li>
								<b>Henkilökohtainen lyhytnumero:</b> {'{{lyhytnumero}}'}
							</Li>
						</List>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>Kalentereiden tilitys</Section.Title>
				<Text>
					Tilitykset tapahtuvat joko maksamalla myydyt kalenterit lippukunnan tilille FI68 5037 0520 1154 58
					(Partiolippukunta Kauka-Kuutit r.y.) käyttäen partiolaiselle osoitettua viitettä tai maksamalla MobilePayn
					kautta lyhytnumerolla tai QR-koodilla.
				</Text>
				<Text>
					Suosittelemme tilittämään kalentereita lippukunnalle sitä mukaan, kun niitä saa myytyä tai pienissä erissä,
					niin ei jää maksamatta mikään. Lippukunta ei ota vastaan käteistä rahaa!
				</Text>
				<Text>Henkilökohtaiset tilitystiedot:</Text>
				<List>
					<Li>
						<b>Myyjä:</b> {'{{myyja}}'}
					</Li>
					<Li>
						<b>Tilinumero:</b> FI68 5037 0520 1154 58 (Partiolippukunta Kauka-Kuutit r.y.)
					</Li>
					<Li>
						<b>Henkilökohtainen viitenumero:</b> {'{{lyhytnumero}}'}
					</Li>
				</List>
			</Section>
			<Section>
				<Section.Title>Tonttumerkit</Section.Title>
				<Row>
					<Column className="w-2/3 pl-md text-start" valign="top" align="center">
						<Text>Partiolainen voi saada erilaisia tonttumerkkejä:</Text>
						<List>
							<Li>kun hän myy 12 kalenteria saa hän tonttumerkin</Li>
							<Li>kun hän myy 50 kalenteria saa hän hopeisen tonttumerkin</Li>
							<Li>kun hän myy 100 kalenteria saa hän kultaisen tonttumerkin (tähän on yltänyt vain 2 kuuttia)</Li>
						</List>
						<Text>Tonttumerkkien lisäksi lippukunta kiittää ansioituneita myyjiä pienellä lahjalla.</Text>
					</Column>
					<Column className="w-1/3">
						<Img
							src="https://www.kauku.fi/wp-content/uploads/advis-tonttumerkit-1-kaikki.jpg"
							className="w-full"
							alt="Tonttumerkit 2026"
						/>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>Myyntitempaukset</Section.Title>
				<Text>Teemme viikolla 47 lippukunnan yhteisen myyntitempauksen. Tästä tulee lähemmin tarkempaa tietoa.</Text>
				<Text>
					Muita paikkoja, joissa myymme Adventtikalentereita on 14.11. Lippuvaivassa Kirjafestereilla (Jamboreelle ja
					Jamboretelle osallistujille) 21.11. K-Supermarket Kunkkulla (kaikille jotka osallistuu tapahtumaan) ja 29.11.
					Adventtimessussa Kauklahden kappelilla (kaikille ketkä osallistuu tapahtumaan).
				</Text>
				<Hr />
				<Text>
					Adventtikalenteripäällikkönä toimii Heitu, joka toivottaa hyviä myyntejä kaikille!
					<br />
					Olkaahan yhteydessä matalalla kynnyksellä kaikissa askarruttavissa kysymyksissä!
					<br />
					Heidi ”Heitu” Taskinen, p. <Tel>0503554213</Tel> (soitto, wa-viestit, tekstarit),{' '}
					<MailTo>heidi.lehtikuja@partio.fi</MailTo>
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
