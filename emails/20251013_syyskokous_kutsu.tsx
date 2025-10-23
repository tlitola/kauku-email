import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2025/10/13/kauka-kuutit-ryn-syyskokous-28-10-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Kauka-Kuuttien syyskokous 28.10."
		title="Kauka-Kuutit ry:n syyskokous 28.10.2025"
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
					Tervetuloa partiolippukunta Kauka-Kuutit ry:n sääntömääräiseen syyskokoukseen{' '}
					<b>28.10. klo 19:15 Kauklahden nuorisotilalle osoittessa Hansakallio 2.</b>
				</Text>
				<Text>
					Lippukunnan sääntöjen mukaan kaikilla lippukunnan jäsenillä on kokouksessa puheoikeus. Äänioikeus on kaikilla
					15 vuotta täyttäneillä jäsenillä.
				</Text>
				<Text>
					Kutsun liitteenä on syyskokouksen esityslista, lippukunnan toimintasuunnitelma vuodelle 2026 ja lippukunnan
					talousarvio vuodelle 2026.
				</Text>
				<Text>Toivottavasti näemme kokouksessa!</Text>
				<Text>
					Espoossa 12. lokakuuta 2025 <br />
					Kauka-Kuutit ry:n hallitus
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>Esityslista</Section.SubTitle>
				<List variant="ordered">
					<Li>Kokouksen avaus</Li>
					<Li>Kokouksen laillisuuden ja päätösvaltaisuuden toteaminen</Li>
					<Li>Kokouksen puheenjohtajan, sihteerin, pöytäkirjantarkastajien (2) sekä ääntenlaskijoiden (2) valinta</Li>
					<Li>Kokouksen työjärjestyksen hyväksyminen</Li>
					<Li>Toimintasuunnitelman hyväksyminen vuodelle 2026, liite 1</Li>
					<Li>Talousarvion vahvistaminen vuodelle 2026, liite 2</Li>
					<Li>Lippukunnanjohtajan valinta toimivuodelle 2026</Li>
					<Li>Hallituksen jäsenten valinta toimivuodelle 2026</Li>
					<Li>Toiminnantarkastajien valinta toimivuodelle 2026</Li>
					<Li>
						Muut vastuuhenkilöt toimivuodelle 2026 <br />
						Kokousta pyydetään antamaan hallitukselle valtuus nimetä henkilöitä erilaisiin lippukunnan edustustehtäviin.
					</Li>
					<Li>
						Lippukunnan logon valinta
						<br />
						Hallitus esittelee vaihtoehtoja Kauka-Kuuttien tuotteisiin (huppari, tarra, tms.) käytettävästä logosta.
					</Li>
					<Li>Muut esille tulevat asiat</Li>
					<Li>Kokouksen päättäminen</Li>
				</List>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
