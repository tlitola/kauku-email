import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2025/06/16/jiiri-25-neljas-leirikirje/';

export const Template: FC = () => (
	<Email
		titleShort="Jiiri 25 – 4. leirikirje"
		title="Tervetuloa Jiiri 25 -kesäleirille"
		heroImage="https://www.kauku.fi/wp-content/uploads/kajo_ilmakuva_teltta_iiro_kaisla.jpg"
		heroAlt="Ilmakuva Kajolta, jossa näkyy telttoja metsän keskellä"
		recipients="Leiriläiset huoltajineen"
		imageSource="Kansikuva: Suomen Partiolaiset / Iiro Kaisla"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper alternateColors final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Se on aivan kohta! Pian olemme Rismalahdessa aivan JIIRISSÄ n. 70 osallistujan voimin! 🥳</Text>
				<Text>
					Tässä kirjeessä on kaikki tärkeä ja tarpeellinen tieto leirille osallistuville, sekä huoltajille! ℹ️
				</Text>
				<Text>
					Jiiriterveisin,
					<br />
					Leirijohtajat <br />
					Anna 0504581670 & Ira 0451374446
				</Text>
			</Section>
			<Section>
				<Section.Title>Bussikuljetukset leirille ja takaisin 🚌🚏</Section.Title>
				<Text>Kuljemme yhdellä bussilla mennen tullen!</Text>
				<Text>
					Aikataulu on listattuna alla ja lähtöajat ovat bussin lähtöaikoja, joten ole ajoissa paikalla, vähintään 15
					min ennen lähtöä! 🙂
				</Text>
				<Text>
					<b>Lähtö</b> ke 25.6.:
				</Text>
				<List variant="unordered">
					<Li>
						<b>Kau-Ku</b> Kauklahdesta Vantinportin parkkipaikalta <b>Vantinportti 5 klo 09:00</b>
					</Li>
					<Li>
						<b>KHP</b> Korsosta Kirkon Kulman edustalta <b>Korsonpolulta klo 10:00</b>
					</Li>
					<Li>Perillä Rismalahdessa n. klo 12:00</Li>
				</List>
				<Text>
					<b>Paluu</b> su 29.6.:
				</Text>
				<List variant="unordered">
					<Li>Lähtö Rismalahdesta klo 14:00</Li>
					<Li>Perillä Korsossa Korsonpolulla n. klo 16:00</Li>
					<Li>Perillä Kauklahdessa Vantinportin parkkipaikalla klo 17:00 mennessä</Li>
				</List>
			</Section>
			<Section>
				<Section.SubTitle>Poikkeava osallistuminen/poistuminen</Section.SubTitle>
				<Text>
					Ilmoita poikkeavasta saapumisesta ja poistumisesta:{' '}
					<Link href="mailto:jiiri25@korsonhonkapartio.fi">jiiri25@korsonhonkapartio.fi</Link> (myös Kauka-Kuuttien
					huoltajat/jäsenet)
				</Text>
			</Section>
			<Section>
				<Section.Title>Terveysturvallisuus</Section.Title>
				<Text>Mikäli osallistuja sairastuu leirin aikana, kotiväki on velvollinen noutamaan osallistujan kotiin.</Text>
				<Text>Muistutus: Leirille ei voi osallistua sairaana.</Text>
			</Section>
			<Section>
				<Section.Title>Huomioitavaa</Section.Title>
				<List variant="unordered">
					<Li>
						Leirille ei tule sähköä eli puhelimia ja muita elektronisia laitteita ei voida ladata. Yhteys kodin ja
						leirin välillä on mahdollista saada johtajien kautta.
					</Li>
					<Li>Majoitumme leirillä teltoissa, ota siis itsellesi sopiva makuualusta mukaan.</Li>
					<Li>Koska olemme metsässä, muista ottaa VAIN biohajoavia pesunesteitä mukaan. </Li>
					<Li>Leirillä on käytössä sauna ja suihkutilat.</Li>
					<Li>Hiljaisuus leirillä on 22:00–07:00 eli päivät ovat täynnä tekemistä ohjelman parissa.</Li>
					<Li>
						Leirillä ei ole kioskia, joten mukaan saa ottaa kohtuullisen määrän omia herkkuja. Ota kuitenkin huomioon
						sää ja herkkujen säilyvyys. Herkut säilytetään omassa rinkassa.
					</Li>
				</List>
			</Section>
			<Section>
				<Section.SubTitle>Leirille pakkaaminen 📝</Section.SubTitle>
				<Text>
					Pakkaus-/varustelista löytyy sähköpostin PDF-liitteenä ja sähköisesti:{' '}
					<Link href="https://docs.google.com/document/d/e/2PACX-1vT6G7SuFvBUbQs-QnQrlbs-dPQcCCoDkjAlsEypVYeQ9_XkWQCpepz-rAXL01crftl34XODOpmjAkZV/pub">
						Pakkauslista
					</Link>
				</Text>
				<Text>
					Nimikoi kaikki tavarasi, ja pakkaa ne vesitiiviisti yhteen rinkkaan/reppuun sekä päiväreppuun. Ei siis
					erillisiä nyssäköitä. Kaikki mukaan otetut tavarat täytyy pystyä kantamaan itse. Jokaisen osallistujan täytyy
					pakata tavaransa itse, jotta tietää mitä on mukana, ja mistä päin rinkkaa tavarat löytyvät.
				</Text>
				<Text>
					Jos sinulta puuttuu rinkka, makuupussi tai makuualusta, löytyy lippukunnilta muutamia lainakappaleita. Ole
					tällöin hyvissä ajoin ennen leiriä yhteydessä:{' '}
					<Link href="mailto:jiiri25@korsonhonkapartio.fi">jiiri25@korsonhonkapartio.fi</Link> (myös Kauka-Kuuttien
					huoltajat/jäsenet)
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Yleistä 🤔</Section.SubTitle>
				<Text>
					Heräsikö kysyttävää?
					<br />
					Ole meihin yhteydessä: <Link href="mailto:jiiri25@korsonhonkapartio.fi">
						jiiri25@korsonhonkapartio.fi
					</Link>{' '}
					(myös Kauka-Kuuttien huoltajat/jäsenet)
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
