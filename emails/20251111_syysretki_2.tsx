import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2025/11/11/iiriksen-noitakattila-2-retkikirje/';

export const Template: FC = () => (
	<Email
		titleShort="Iiriksen noitakattila – 2. Retkikirje"
		title="Iiriksen noitakattila 14.11. – 16.11."
		heroImage="https://www.kauku.fi/wp-content/uploads/20211002_alex_inkilainen_kaannekohta_0347-e1760027967512.jpg"
		heroAlt=""
		imageSource="Suomen Partiolaiset – Alex Inkilainen"
		webVersionurl={webVersionUrl}
		recipients="Retkelle ilmoittautuneet huoltajineen"
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Syysretkelle on ilmoittautunut kaiken kaikkiaan 37 retkeilijää! Hienoa, että sinäkin olet lähdössä mukaan!
				</Text>
				<Text>Luethan kirjeen kokonaan ja huolellisesti.</Text>
				<Text>Tässä kirjeessä:</Text>
				<Text>
					1. Yleistä
					<br />
					2. Retkipaikka
					<br />
					3. Kuljetukset
					<br />
					4. Majoitus
					<br />
					5. Pukeutuminen
					<br />
					6. Varusteluettelo
					<br />
					7. Turvallisuus
					<br />
					8. Lisätietoa
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>1. Yleistä</Section.SubTitle>
				<Text>
					<b>Retken nimi:</b> Iiriksen noitakattila
				</Text>
				<Text>
					<b>Retken ajankohta:</b>
				</Text>
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
				<Text>
					<b>Retken johtajat</b>
				</Text>
				<Text>
					Hilla Sallinen, p.{' '}
					<Link target="_self" href="tel:045 695 4808">
						045 695 4808
					</Link>
					<br />
					Kalavanukas (Ella Schroderus), p.{' '}
					<Link target="_self" href="tel:050 458 1670">
						045 699 9811
					</Link>
					<br />
					Rané (Elsá Sihvola), p.{' '}
					<Link target="_self" href="tel:045 156 3073">
						045 156 3073
					</Link>
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>2. Retkipaikka</Section.SubTitle>
				<Text>Kirilä, Pekkasenkuja 1, 03220 Tervalampi</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>3. Kuljetukset</Section.SubTitle>
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
						<b>Lyhyt retki: 15.11. klo 16:00</b> Kirilästä. Jos lapsesi on mukana vain lyhyen retkiajan, huoltajan tulee
						huolehtia kyydit itse,
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
					Retkeilijät jätetään parkkipaikalle ja siitä kävellään polku ylös kämpälle. Samalta parkkipaikalta retkeilijät
					noudetaan sunnuntaina. Parkkipaikalla on tilaa noin kuudelle autolle.
				</Text>
				<Text>
					<b>Sunnuntain paluukyydeistä ilmoitetaan etukäteen Whatsapp-ryhmissä.</b>
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>4. Majoitus</Section.SubTitle>
				<Text>
					Retkellä Tähtipanssariketut ja Vesikauhut nukkuvat ensisijaisesti lämmitetyssä teltassa.{' '}
					<b>Varaa mukaan siis paksumpi makuupussi ja -alusta, ettei nukkuessa tule kylmä.</b>
				</Text>
				<Text>Kämpällä ei ole patjoja, joten myös sisällänukkujat mukaansa makuualustan.</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>5. Pukeutuminen</Section.SubTitle>
				<Text>
					<b>Retkellä ollaan ulkona säästä riippumatta</b>, joten huolehdithan matkaan sään mukaisen varustuksen.
				</Text>
				<Text>
					Retken ajaksi on luvattu pientä pakkasta, joten lämmin pukeutuminen on erittäin tärkeää. Kämppä lämpeää
					puilla, joten retken alussa ei suoraan pääse lämpimään.{' '}
					<b>
						Jos talvinen kerrospukeutuminen ei ole tuttu konsepti, siihen voi tutustua esimerkiksi oheisen videon
						kautta:
					</b>{' '}
					<Link href="https://youtu.be/kk5iCE8K0kM?si=UIJLjPfwep_2ZPxh&t=30">Kerrospukeutuminen talvella</Link>
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>6. Varusteluettelo</Section.SubTitle>

				<Text>
					Tarkemman varusteluettelon löydät lippukunnan nettisivuilta:{' '}
					<Link href=">https://www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/">
						https://www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/
					</Link>
				</Text>
				<Text>
					Lauantai-iltana järjestetään mahdollisuus saunomiseen ja peseytymiseen, joten pakatkaa mukaan uima-asu ja
					pyyhe. Jos kaipaatte retkellä yksityistä aikaa peseytyä, voitte kysyä asiasta retken johtajilta.
				</Text>
				<Text>Muistathan nimikoida kaikki tavarasi!</Text>
				<Text>
					Pyri pakkaamaan kaikki tavarat rinkan/repun sisälle, niin että niiden kanssa on helppo kävellä. Käveltävää
					autoilta retkipaikalle on parisataa metriä.
				</Text>
				<Text>
					Omaa kännykkää tai muuta elektroniikkaa ei tarvitse retkellä. Jos kuitenkin otat mukaasi kännykän tai muuta
					elektroniikkaa, teet sen omalla vastuullasi. Partiovakuutus ei kata elektronisten laitteiden rikkoutumista.
					Retken aikana osallistujat pitävät matkapuhelimensa rinkassa suljettuna ja jos tämä ei onnistu, puhelimet
					voidaan kerätä päivän ohjelman ajaksi johtajien haltuun. Retkeläisillä ei ole mahdollisuutta ladata
					matkapuhelinta retkellä. Tarvittaessa lapsi/lapseen saa yhteyden retken johtajien kautta.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>7. Turvallisuus</Section.SubTitle>
				<Text>
					Retkellä on voimassa{' '}
					<Link href="https://papa.partio.fi/partiolaiselle/tapahtumaosallistujalle/turvallisemman-tilan-periaatteet/">
						Suomen Partiolaisten turvallisemman tilan periaatteet
					</Link>
				</Text>
				<Text>
					Jos osallistuja ei pysty toimimaan näiden periaatteiden mukaisesti, retki voidaan hänen kohdalta keskeyttää.
				</Text>
				<Text>
					Tapahtuman häirintäyhdyshenkilöinä eli turva-aikuisina toimivat
					<br />
					Heitu Taskinen, p.{' '}
					<Link target="_self" href="tel:+358 50 355 4213">
						050 355 4213
					</Link>{' '}
					ja
					<br />
					Olle Suni, p.{' '}
					<Link target="_self" href="tel:+358 44 322 3352">
						044 322 3352
					</Link>
				</Text>
				<Text>
					Turva-aikuisien kanssa voi jutella, jos jokin painaa mieltä. Turva-aikuiset neuvovat ja tukevat, jos
					partiolainen on kohdannut häirintää, syrjintää, kiusaamista tai muuta epätasa-arvoista kohtelua tapahtumassa.
					Turva-aikuisen kanssa käydyt keskustelut ovat aina luottamuksellisia.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>8. Lisätietoa</Section.SubTitle>
				<Text>
					Retkelle osallistutaan ainoastaan terveenä. Mikäli sairastut ennen retkeä, ilmoita asiasta retkenjohtajalle.
					Jos retkeläinen sairastuu retken aikana, huoltajalla on velvollisuus järjestää lapselle kyyti kotiin.
				</Text>
				<Text>
					Mikäli retkimaksusi on vielä maksamatta, maksathan sen pikimmiten Kauka-Kuutit ry:n tilille FI68 5037 0520
					1154 58 <b>käyttäen viitenumeroa 20679</b>. Hinnat vielä alla:
				</Text>
				<List>
					<Li>Koko retki: 15€</Li>
					<Li>Lyhyt retki: 10€</Li>
					<Li>Perhepartiolaisille retken hinta on 5€ (yli 3-vuotiaille).</Li>
				</List>
				<Text>Muista käyttää viitettä! OP veloittaa hirmuisia summia ilman viitettä saapuneista maksuista.</Text>
				<Text>Tämä on viimeinen retkikirje. Tavataan retkellä! 😊</Text>
			</Section>
			<Hr />
			<Section>
				<Text>
					<b>Kysymyksiin vastaavat</b>
					<br /> Hilla (p.{' '}
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
