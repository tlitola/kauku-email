import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2025/04/28/jiiri-25-kolmas-leirikirje-ja-ilmoittautumisia/';

export const Template: FC = () => (
	<Email
		titleShort="Jiiri 25 – 3. leirikirje"
		title="Jiiri 25 – 3. leirikirje ja ilmoittautumisia"
		heroImage="https://www.kauku.fi/wp-content/uploads/kajo_ilmakuva_teltta_iiro_kaisla.jpg"
		heroAlt="Ilmakuva Kajolta, jossa näkyy telttoja metsän keskellä"
		imageSource="Kansikuva: Suomen Partiolaiset / Iiro Kaisla"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper alternateColors final={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Mahtavaa! Meitä on nyt lähdössä n. 70 iloista partiolaista nauttimaan Päijänteen upeista rannoista sekä
					Rismalahden kauniista maisemista Jiiri 25:lle 25.-29.6.! 🥳 Lippukunnista osallistujamäärä on melkoisen
					tasainen, joten tämäkin on ihanasti JIIRISSÄ, mutta bussissa on vielä tilaa muutamalle nopealle! Täällä
					leiritoimikunta jo innolla odottaa kesäkuun koittavan, jolloin voimme partiohenkeä uhkuen aloittaa kesäleirin!
				</Text>
				<Text>Olethan muistanut maksaa leirimaksun jo? Jos et, niin nyt on hyvä hetki hoitaa se! ☺️</Text>
			</Section>

			<Section>
				<Section.SubTitle>Jälki-ilmoittautuminen</Section.SubTitle>
				<Text>Jälki-ilmoittautuminen on nyt auki!</Text>
				<Text>
					Bussissa paikkoja rajoitetusti, jos haluat bussikuljetukseen mukaan ilmoittaudu nopeasti! Jälki-ilmo ja omalla
					kyydillä kulkevien ilmo auki <b>11.5.</b> asti. Käy ilmoittautumassa:
				</Text>
				<Link variant="button" location="left" href="http://kuksaan.fi/82393">
					Ilmoittaudu leirille
				</Link>
			</Section>
			<Section>
				<Section.SubTitle>Perhepartiolaisten ilmoittautuminen</Section.SubTitle>
				<Text>
					Perhepartion ilmoittautuminen on nyt myös auki <b>11.5.</b> asti.{' '}
				</Text>
				<Text>
					Perhepartion leiriaika on la klo 10 - su aamupäivään, halutessaan saa jäädä leirin päättymiseen asti.
					Perhepartion kulkeminen leirille ja takaisin omin kyydein, osoite Rismalahti 24, 17200 Asikkala. Sunnuntaille
					ei ole varsinaista ohjelmaa luvassa leirin purkamisen ja pakkaamisen lisäksi.
				</Text>
				<Text>Lisätietoja ja perhapartion ilmoittautuminen linkin takaa:</Text>
				<Link variant="button" location="left" href="http://kuksaan.fi/82997">
					Perhepartiolaisten ilmoittautuminen
				</Link>
				<Hr />
				<Text>
					Jälki-ilmoittautuminen ja perhepartion ilmoittautuminen myös mahdollista kololta löytyvän julisteen QR-koodin
					kautta 😉
				</Text>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<Section.Title>Bussikuljetukset leirille ja takaisin 🚌🚏</Section.Title>
				<Text>
					Kuljemme yhdellä bussilla Kauklahdesta Korsoon ja sieltä Rismalahteen Asikkalaan. Aikataulu tarkentuu
					viimeistään viimeisessä leirikirjeessä ennen leiriä kesäkuussa. Alla alustavasti suunniteltu aikataulu ja
					lähtöpaikat.
				</Text>
				<Text>
					Bussikuljetusten alustava aikataulu <b>LÄHTIESSÄ</b>:
				</Text>
				<List variant={'unordered'}>
					<Li>
						Kauklahdesta <b>Vantinportti 5</b> klo 8:00-9:00
					</Li>
					<Li>
						Korsosta Kirkon Kulman edustalta <b>Korsonpolulta</b> klo 9:00-10:00
					</Li>
					<Li>Perillä Rismalahdessa klo 11:00-12:00</Li>
				</List>
				<Text>
					Bussikuljetusten alustava aikataulu <b>PALATESSA:</b>
				</Text>
				<List variant={'unordered'}>
					<Li>Lähtö Rismalahdesta klo 13:00-14:00</Li>
					<Li>Perillä Korsossa klo 15:00-16:00</Li>
					<Li>Perillä Kauklahdessa klo 16:00-17:00</Li>
				</List>
			</Section>
			<Section>
				<Section.Title>Otetaan vastaan 🙂</Section.Title>
				<Text>
					Jos et ilmoittautumisen yhteydessä kertonut mahdollisesta lahjoitettavasta materiaalista, tai sinulla
					sellaista on vaikket leirille lähdekään, niin laita meille sähköpostia:{' '}
					<Link href="mailto:jiiri25@korsonhonkapartio.fi">jiiri25@korsonhonkapartio.fi</Link> (myös Kauka-Kuuttien
					huoltajat/jäsenet) ja olemme yhteydessä sinuun, jos tarjoamasi materiaali on yhä tarpeen!
				</Text>
				<Text>
					Olisiko sinulla ylimääräistä lautaa/puutavaraa/narua/nauloja/maalia/yms. rakennustarviketta, joista olisit
					innokas luopumaan ja lahjoittamaan sen meidän kesäleirin teeman mukaiseen rakenteluun ja nikkarointiin?
				</Text>
				<Text>
					Tarjota saa kaikkea mahdollista listattua, kierrättäminen kannattaa ja leirikulut pysyvät pienempinä!
				</Text>
			</Section>
			<Section>
				<Section.Title>Yleistä 🤔</Section.Title>
				<Text>
					Kesäkuun leirikirjeessä osallistujille on pakkauslistat, tarkat aikataulut ja muuta tarvittavaa tietoa, mutta
					onko herännyt muuta kysyttävää?
				</Text>
				<Text>
					Ole meihin yhteydessä: <Link href="mailto:jiiri25@korsonhonkapartio.fi">jiiri25@korsonhonkapartio.fi</Link>{' '}
					(myös Kauka-Kuuttien huoltajat/jäsenet)
				</Text>
				<Text>
					Jiiriterveisin
					<br />
					Leirijohtajat Anna & Ira
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
