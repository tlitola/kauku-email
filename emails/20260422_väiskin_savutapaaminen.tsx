import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, MailTo } from '../components/Link';
import { InfoText } from '../components/InfoText';

const webVersionUrl = 'https://www.kauku.fi/2026/04/22/vaiskin-savutapaaminen-ja-kyydit/';

export const Template: FC = () => (
	<Email
		titleShort="Väiski 2026"
		title="Väiskin savutapaaminen ja kyydit"
		heroImage="https://www.kauku.fi/wp-content/uploads/vaiski_logo_26_vaalea_png.png"
		heroAlt=""
		imageSource="EPT – Väiski 2026"
		webVersionurl={webVersionUrl}
		recipients="Lippukunnan Väiskille ilmoittautuneet jäsenet huoltajineen"
	>
		<SectionsWrapper final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Väiskille on ilmoittautunut yhteensä 34 kuuttia, ihanaa että sinäkin olet lähdössä mukaan!</Text>
				<Text>
					Tässä viestissä on tietoa seuraavista vaiheista leiriin liittyen ja niihin liittyvistä määräajoista!{' '}
					<b>Luethan viestin siis huolella!</b>
				</Text>
			</Section>
			<Section>
				<Section.Title>Väiskin kyydit</Section.Title>
				<Text>
					Väiskin leiriorganisaatio haluaa tarkistaa, miten leiriläiset kulkevat leirille.{' '}
					<b>Ilmoitattehan Toukolle viimeistään 28.4.</b> mikäli kuljette leirille omilla kyydeillä (kumpaan tahansa
					suuntaan), ettekä siis osallistu yhteiskuljetuksiin. Ilmoittakaa Toukolle myös, jos olette osallistumassa
					rakennus- tai purkuleirille.
				</Text>
				<Text>
					Touko Litola, <MailTo>touko.litola@kauku.fi</MailTo>
				</Text>
			</Section>
			<Section>
				<Section.Title>KaLaKan savutapaaminen 9.5. kello 13:00–15:00 (johtajille 16:00)</Section.Title>
				<Text>
					Lauantaina 9.5. pääsemme tapaamaan muita savumme lippukuntia Kaskenpolttajia ja Laajalahden Eräveikkoja.
				</Text>
				<Text>
					Savutapaamisen tavoitteena on tutustua muihin savumme partiolaisiin ja virittäytyä yhdessä Väiski-tunnelmaan!
					Tulethan siis mukaan viettämään hauskaa iltapäivää!
				</Text>
				<Text>
					<b>Mitä:</b> KaLaKan savutapaaminen
				</Text>
				<Text>
					<b>Missä:</b> Kasavuoren koululla ja luontopolulla. Olemme ulkona säästä riippumatta, joten pukeuduttehan sen
					mukaisesti! Mukaan on hyvä varata myös oma vesipullo.
				</Text>
				<Text>
					<b>Milloin:</b> Lauantaina 9.5. kello 13:00–15:00
				</Text>
				<Text>
					<b>Kulku:</b> Kuljemme Kasavuoren luontopolulle ja takaisin junalla ja kävellen. Lippukunta maksaa
					osallistujien matkaliput.
					<br />
					<b>Lähtö:</b> Tapaamme Kauklahden aseman laiturilla 2-3 kello 12:10
					<br />
					<b>Paluu:</b> Kauklahden asemalle noin kello 15:40
				</Text>
				<Text>
					<b>Ilmoittautuminen:</b> Kuksaan <Link href="https://kuksaan.fi/93034">kuksaan.fi/93034</Link> viimeistään
					7.5.
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
