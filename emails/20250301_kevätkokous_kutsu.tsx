import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2025/03/01/lippukunnan-kevatkokous-25-3-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Kauka-Kuuttien kevätkokous 25.3."
		title="Kauka-Kuutit ry:n kevätkokous 25.3.2025"
		recipients="Lippukunnan jäsenet"
		heroImage="https://www.kauku.fi/wp-content/uploads/kokous_jan_lindstrom-scaled.jpg"
		heroAlt="Kuvituskuvat kokouksesta"
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
					<b>25.3. klo 18:00 lippukunnan kololle osoittessa Hansatie 2B.</b>
				</Text>
				<Text>
					Lippukunnan sääntöjen mukaan kaikilla lippukunnan jäsenillä on kokouksessa puheoikeus. Äänioikeus on kaikilla
					15 vuotta täyttäneillä jäsenillä.
				</Text>
				<Text>
					Kutsun liitteenä on kevätkokouksen esityslista, lippukunnan toimintakertomus vuodelta 2024 ja lippukunnan
					tilinpäätös vuodelta 2024.
				</Text>
				<Text>Toivottavasti näemme kokouksessa!</Text>
				<Text>
					Espoossa 25. helmikuuta 2025 <br />
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
					<Li>Vuoden 2024 toimintakertomuksen vahvistaminen (Liite 1)</Li>
					<Li>Vuoden 2024 tilinpäätöksen vahvistaminen (Liite 2)</Li>
					<Li>
						Vastuuvapauden myöntäminen vuoden 2024 hallitukselle ja muille tilivelvollisille
						<br />
						Hallitus esittää toiminnantarkastajien lausunnon vastuuvapauden myöntämiseksi.
					</Li>
					<Li>
						Yhdistyksen jäsenmaksujen vahvistaminen vuodelle 2026
						<br />
						Hallitus esittää vuoden 2026 yhdistyksen jäsenmaksuksi perheen
						<br />
						1. jäsenelle 15€
						<br />
						2. jäsenelle 10€
						<br /> 3. jäsenestä eteenpäin 0€.
					</Li>
					<Li>Muut esille tulevat asiat</Li>
					<Li>Kokouksen päättäminen</Li>
				</List>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
