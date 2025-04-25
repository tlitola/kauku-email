import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2025/04/10/partioparaati-27-04-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Partioparaati"
		title="Partioparaati 27.4. – 2. retkikirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/partio_johtaja_piirros_jan_lindstrom-e1744302553353.jpg"
		heroAlt="Kuvituskuva partiolaisesta tervehtimässä"
		imageSource="Suomen Partiolaiset / Jan Lindstrom"
		recipients="Partioparaatiin osallistuvat ja heidän huoltajat"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Kauka-Kuuteista on lähdössä partioparaatiin huikeat 24 partiolaista! Mahtavaa, että sinäkin olet lähdössä
					mukaan. Tästä viestistä löydät kertauksena kaiken, mitä sinun tarvitsee tietää sunnuntaista.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Lähtö</Section.SubTitle>
				<Text>Kokoontuminen Kauklahden R-kioskilla sunnuntaina 27.4.2025 klo 11.05. Juna lähtee klo 11.19.</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Paluu</Section.SubTitle>
				<Text>
					Kauklahden asemalle noin klo 14.30-15.00. Laitamme viestiä huoltajaryhmiin Whatsappissa, kun tiedämme, missä
					junassa olemme.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Asu</Section.SubTitle>
				<Text>
					Partiohuivi sekä partiopaita tai sudenpentupaita ja tumma alaosa. Partioparaatiin voi osallistua myös tummassa
					yläosassa, mikäli ei omista partiopaitaa.
				</Text>
				<Text>Kauka-Kuuteissa käytämme sinistä partiopaitaa.</Text>
				<Text>
					Tapahtuma järjestetään ulkona, eikä sisälle ole mahdollista päästä. Pukeutukaa siis sään mukaisesti. Nykyisen
					ennusteen mukaan sunnuntai on viileä päivä, joten pukekaa päälle riittävästi kerroksia. Paraatiin sisältyy
					myös paljon paikoillaan olemista. Mukaan on myös hyvä varata pieni helposti mukana kulkeva vesipullo. Marssin
					ajaksi tavarat on mahdollista jättää narikkaan, mutta ylimääräistä tavaraa ei kannata ottaa mukaan.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Eväät</Section.SubTitle>
				<Text>
					Kauka-Kuutit tarjoaa osallistujille pientä evästä menomatkalla. Ennen tapahtumaa kannattaa kuitenkin syödä
					hyvin.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Hinta</Section.SubTitle>
				<Text>Paraati on maksuton. Kauka-Kuutit maksavat osallistujien HSL:n liput.</Text>
			</Section>
			<Hr />
			<Section>
				<Text>
					Partioparaatia kannattaa lähteä seuraamaan vaikka koko perheellä! Paraati alkaa klo 13.15 Senaatintorilta ja
					sitä voi seurata Aleksanterinkadulla sekä Pohjoisesplanadilla. Ohimarssin vastaanottopaikka on
					Pohjoisesplanadin ja Fabianinkadun risteyksestä joitain kymmeniä metrejä keskustaan päin.
				</Text>
				<Text>
					Mahdollisiin kysymyksiin vastaa Touko p. <Link href="tel:045 209 3886">045 209 3886</Link>,{' '}
					<Link href="mailto:touko@litola.net">touko@litola.net</Link>
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
