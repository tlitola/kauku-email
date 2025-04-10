import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';

const webVersionUrl = 'https://www.kauku.fi/2025/03/20/uutiskirje-20-03-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Uutiskirje"
		title="Uutiskirje 20.03.2025"
		recipients="Lippukunnan jäsenet, jäsenten huoltajat ja jonossa olevien lasten huoltajat"
		heroImage="https://www.kauku.fi/wp-content/uploads/huoltajailta_20250326.png"
		heroAlt="Kuvituskuva: Maisemakuva, jossa kävelee aikuisia partiolaisia"
		imageSource="Suomen Partiolaiset – Alex Inkiläinen"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={true}>
			<Section>
				<Section.Title>Uuden sudenpentumauman huoltajailta 26.3.</Section.Title>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Onko noin 7-vuotias lapsesi kiinnostunut aloittamaan uuden, monipuolisen ja kasvattavan harrastuksen?
					Haluaisitko itse aloittaa uuden harrastuksen lapsesi kanssa? Kauka-Kuutteihin ollaan perustamassa uusi
					sudenpentulauma vuoden 2025 aikana, johon liittyen järjestämme huoltajien infotilaisuuden{' '}
					<b>26.3. klo 18:00 lippukunnan kololla osoittessa Hansatie 2B.</b>
				</Text>
				<Text>
					Huoltajailtaan voi ilmoittautua vielä hetken, <b>23.3. asti</b>, suunnatkaa siis nopeasti oheiseen linkin
					kautta ilmoittautumaan tapahtumaan. Tapahtumaan on myös mahdollista osallistua{' '}
					<Link href="https://teams.live.com/meet/9393996880140?p=TYN5QiwG4NjBM3Cstw">Teamsin kautta</Link>,
					ilmoittautukaa siinäkin tapauksessa huoltajailtaan alla olevan linkin kautta.
				</Text>
				<Link variant="button" location="left" href="https://forms.gle/PpoFGCkLLVXoqt5F8">
					Ilmoittaudu huoltajailtaan
				</Link>
			</Section>
			<Section>
				<Section.Title>Lippukunnan kevätkokous</Section.Title>
				<Text>
					Kauka-Kuutit ry:n sääntömääräinen kevätkokous järjestetään{' '}
					<b>25.3. klo 18:00 lippukunnan kololla osoitteessa Hansatie 2B</b>.
				</Text>
				<Text>
					Kaikki lippukunnan jäsenet ovat tervetulleita seuraamaan kokousta, tarjolla on pientä syötävää. Lippukunnan
					sääntöjen mukaan kaikilla lippukunnan jäsenillä on kokouksessa puheoikeus. Äänioikeus on kaikilla 15 vuotta
					täyttäneillä jäsenillä.
				</Text>
			</Section>
			<Section>
				<Section.Title>Jiiri 25</Section.Title>
				<Text>
					Vuoden 2025 kesäleiri järjestetäään <b>25.-29.6.</b>Asikkalan Rismalahdessa yhdessä Korson Honkapartion
					kanssa. Leirin ilmoittautuminen on enää auki hetken, vain <b>28.3.</b> asti, joten nyt on erinomainen aika
					ilmoittautua leirille. Lisätietoa leiristä löydät aiemmin lähetetystä 2. leirikirjeestä, ja sitä voi pyytää
					sähköpostitse leirin sähköpostiosoitteesta{' '}
					<Link href="mailto:jiiri25@korsonhonkapartio.fi">jiiri25@korsonhonkapartio.fi</Link>
				</Text>
				<Link variant="button" location="left" href="http://kuksaan.fi/79811">
					Ilmoittaudu leirille
				</Link>
			</Section>
			<Section>
				<Section.Title>Kysely partiossa harrastamisesta</Section.Title>
				<Text>
					Pääkaupunkiseudun partiolaiset ja me-säätiö toteuttaa partiolaisten hyvinvointikysylä, joka on suunnttu
					lippukuntien 7–22-vuotiaille harrastajille.
				</Text>
				<Text>
					Kyselyn vastaukset auttavat kehittämään partiotoimintaa entistäkin yhdenvertaisemmaksi ja tukemaan entistäkin
					paremmin partiolaisten hyvinvointia.
				</Text>
				<Text>Vastaaminen vie vain viisi minuuttia ja siihen voi vastata useammalla eri kielellä.</Text>
				<Text>
					Alle 13-vuotiaiden tapauksessa kyselyyn vastaa huoltaja, ja yli 13-vuotiaat partiolaiset vastaavat kyselyyn
					itse.
				</Text>
				<Text>Lisätietoa kyselystä on saatavilla Pääkaupunkiseudun Partiolaisten lähettämässä sähköpostissa.</Text>
				<Link variant="button" location="left" href="https://bit.ly/mesaatio">
					Vastaa kyselyyn
				</Link>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
