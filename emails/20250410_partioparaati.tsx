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
		title="Partioparaati 27.04.2025"
		heroImage="https://www.kauku.fi/wp-content/uploads/partio_johtaja_piirros_jan_lindstrom-e1744302553353.jpg"
		heroAlt="Kuvituskuva partiolaisesta tervehtimässä"
		imageSource="Suomen Partiolaiset / Jan Lindstrom"
		recipients="Lippukunnan jäsenet ja huoltajat"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					<b>Partioparaati</b> on perinteinen partiotapahtuma, joka järjestetään partioviikon huipennuksena Helsingissä
					yhdessä pääkaupunkiseudun muiden lippukuntien kanssa. Tänä vuonna partioparaatissa juhlistetaan
					Pääkaupunkiseudun Partiolaisten 50-vuotiasta taivalta! Juhlavuoden kunniaksi paraatikatselmuksessa puheen
					pitää ja ohimarssin vastaanottaa presidentti Sauli Niinistö. Paraatiin odotetaan osallistuvan kaikkiaan n.
					2000 pääkaupunkiseutulaista partiolaista!
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
				<Text>
					Partiopaitoja ja sudenpentupaitoja voi ostaa Scandinavian Outdoorista. Paitoja liikkuu myös paljon käytettynä.
					Kannattaa vilkaista tori.fi sekä Facebookin{' '}
					<Link href="https://www.facebook.com/groups/135042363304382">Partiokirpputori!-ryhmä</Link>.
				</Text>
				<Text>Kauka-Kuuteissa käytämme sinistä partiopaitaa.</Text>
				<Text>
					Tapahtuma järjestetään ulkona, eikä sisälle ole mahdollista päästä. Varatkaa siis mukaan sään mukaisesti
					esimerkiksi sadeviitta. Mukaan on myös hyvä varata pieni helposti mukana kulkeva vesipullo. Marssin ajaksi
					tavarat voi jättää narikkaan, mutta ylimääräistä tavaraa ei kannata ottaa mukaan.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Eväät</Section.SubTitle>
				<Text>
					Kauka-Kuutit tarjoaa osallistujille pientä evästä menomatkalla. Ennen tapahtumaa kannattaa kuitenkin syödä
					hyvin, sillä tapahtuma sisältää seisomista ja kävelyä.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Hinta</Section.SubTitle>
				<Text>Paraati on maksuton. Kauka-Kuutit maksavat osallistujien HSL:n liput.</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Ilmoittautuminen</Section.SubTitle>
				<Text>
					Ilmoittaudu partioparaatiin oheisen Kuksa-linkin kautta <b>viimeistään 23.4.</b>{' '}
				</Text>
				<Link href="http://kuksaan.fi/82140" variant="button" location={'left'}>
					Ilmoittaudu partioparaatiin
				</Link>
			</Section>
			<Hr />
			<Section>
				<Text>
					Partioparaatia kannattaa lähteä seuraamaan vaikka koko perheellä! Paraati alkaa klo 13.15 Senaatintorilta ja
					sitä voi seurata Aleksanterinkadulla sekä Pohjoisesplanadilla. Ohimarssin vastaanottopaikka on
					Pohjoisesplanadin ja Fabianinkadun risteyksestä joitain kymmeniä metrejä keskustaan päin.
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
