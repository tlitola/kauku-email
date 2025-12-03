import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2025/12/03/kauka-kuutit-ryn-ylimaarainen-yhdistyksen-kokous-17-12-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Kauka-Kuuttien ylimääräinen yhdistyksen kokous"
		title=""
		recipients="Lippukunnan jäsenet"
		heroAlt=""
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<Section.Title>Kauka-Kuutit ry:n ylimääräinen yhdistyksen kokous 17.12.2025</Section.Title>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Tervetuloa partiolippukunta Kauka-Kuutit ry:n ylimääräiseen yhdistyksen kokoukseen{' '}
					<b>17.12. klo 18:00 lippukunnan kololle osoittessa Hansatie 2B</b> tai etänä Microsoft Teams palvelussa
					oheisen linkin kautta.
				</Text>
				<Text>
					<Link href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MjAwYTM2YWEtM2YwMi00ODI1LWFmNDQtMDU0NDc0ZjBlZWUx%40thread.v2/0?context=%7b%22Tid%22%3a%224721e731-b843-4f2d-9db0-d98197eeca06%22%2c%22Oid%22%3a%22e8be81da-a3bb-4501-a7f7-821136d99eae%22%7d">
						Etäosallistuminen Partiolippukunta Kauka-Kuutit ry:n ylimääräiseen yhdistyksen kokoukseen
					</Link>
				</Text>
				<Text>
					Lippukunnan sääntöjen mukaan kaikilla lippukunnan jäsenillä on kokouksessa puheoikeus. Äänioikeus on kaikilla
					15 vuotta täyttäneillä jäsenillä.
				</Text>
				<Text>Kutsun liitteenä on kokouksen esityslista.</Text>
				<Text>Toivottavasti näemme kokouksessa!</Text>
				<Text>
					Espoossa 3. joulukuuta 2025 <br />
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
					<Li>
						Hallituksen täydentäminen toimivuodelle 2026
						<br />
						Lippukunnan syyskokouksessa 28.10.2025 hallituksen puheenjohtajaksi valittiin Touko Litola ja jäseneksi
						Heidi Taskinen. Hallitus täydennetään 1–6 varsinaisella jäsenellä ja 0–7 varajäsenellä.
					</Li>
					<Li>
						Muut vastuuhenkilöt toimivuodelle 2026 <br />
						Kokousta pyydetään antamaan hallitukselle valtuus nimetä henkilöitä erilaisiin lippukunnan edustustehtäviin
						ja muihin lippukunnan pesteihin.
					</Li>

					<Li>Muut esille tulevat asiat</Li>
					<Li>Kokouksen päättäminen</Li>
				</List>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
