import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2026/03/01/partiolippukunta-kauka-kuutit-ry-kevatkokous-15-3-2026/';

export const Template: FC = () => (
	<Email
		titleShort="Kauka-Kuuttien kevätkokous 15.3."
		title="Kauka-Kuutit ry:n kevätkokous 15.3.2026"
		recipients="Lippukunnan jäsenet"
		heroImage="https://www.kauku.fi/wp-content/uploads/kokous_jan_lindstrom-scaled.jpg"
		heroAlt=""
		imageSource="Suomen Partiolaiset – Jan Lindstrom"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Tervetuloa partiolippukunta Kauka-Kuutit ry:n sääntömääräiseen kevätkokoukseen{' '}
					<b>15.3. klo 10:00 Kauklahden nuorisotilaan osoittessa Hansakallio 2.</b>
				</Text>
				<Text>
					Lippukunnan sääntöjen mukaan kaikilla lippukunnan jäsenillä on kokouksessa puheoikeus. Äänioikeus on kaikilla
					15 vuotta täyttäneillä jäsenillä.
				</Text>
				<Text>
					Kutsun liitteenä on kevätkokouksen esityslista, lippukunnan toimintakertomus vuodelta 2025 ja lippukunnan
					tilinpäätös vuodelta 2025.
				</Text>
				<Text>Toivottavasti näemme kokouksessa!</Text>
				<Text>
					Espoossa 1. maaliskuuta 2026 <br />
					Kauka-Kuutit ry:n hallitus
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Esityslista</Section.SubTitle>
				<List variant="ordered">
					<Li>Kokouksen avaus</Li>
					<Li>Kokouksen laillisuus ja päätösvaltaisuus</Li>
					<Li>Kokouksen puheenjohtajan, sihteerin, pöytäkirjantarkastajien (2) sekä ääntenlaskijoiden (2) valinta</Li>
					<Li>Kokouksen työjärjestyksen hyväksyminen</Li>
					<Li>Vuoden 2025 toimintakertomuksen vahvistaminen (Liite 1)</Li>
					<Li>Vuoden 2025 tilinpäätöksen vahvistaminen (Liite 2)</Li>
					<Li>
						Vastuuvapauden myöntäminen vuoden 2025 hallitukselle ja muille tilivelvollisille
						<br />
						Hallitus esittää toiminnantarkastajien lausunnon vastuuvapauden myöntämiseksi.
					</Li>
					<Li>
						Yhdistyksen jäsenmaksujen vahvistaminen vuodelle 2027
						<br />
						Hallitus esittää vuoden 2027 yhdistyksen jäsenmaksuksi
						<br />
						1. jäsenelle 15€
						<br />
						2. jäsenelle 10€
						<br /> 3. jäsenelle 0€.
					</Li>
					<Li>Muut esille tulevat asiat</Li>
					<Li>Kokouksen päättäminen</Li>
				</List>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
