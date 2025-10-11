import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';

const webVersionUrl = 'https://www.kauku.fi/2025/08/12/kuuttien-syyskarkelot-17-8-1200-1400/';

export const Template: FC = () => (
	<Email
		titleShort="Kuuttien Syyskarkelot 17.8."
		title="Kuuttien Syyskarkelot 17.8. 12:00–14:00"
		heroImage="https://www.kauku.fi/wp-content/uploads/sudenpentujenwwfretki-2020-1-e1755014622693.jpeg"
		heroAlt=""
		recipients="Lippukunnan jäsenet huoltajineen"
		imageSource="Kauka-Kuuttien sudenpentujen WWF retki vuodelta 2020"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper alternateColors final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Partiokokousten alku viikolla 35 häämöttää jo horisontissa ja nyt onkin jälleen aika etsiä partiohuivit
					kaulaan ja aloittaa partiosyksy yhdessä kavereiden kanssa!
				</Text>
				<Text>
					Kauka-Kuuttien yhteinen kaudenaloitustapahtuma <i>Syyskarkelot</i> järjestetään tulevana sunnuntaina 17.8.
					Palttinapuistossa!
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Mitä</Section.SubTitle>
				<Text>
					Kauka-Kuuttien kaikille avoin kaudenaloitustapahtuma. Ohjelmassa on yhdessä olemista erilaisten
					ulkoaktiviteettien muodossa, joiden ohella on mahdollista tutustua siihen mitä partio on! Tulethan siis
					moikkaamaan partiotuttujasi ja viettämään hauskan iltapäivän uusien ja vanhojen kavereiden kanssa!
				</Text>
				<Text>
					Tilaisuus on kaikille avoin! Voit siis tulla paikalle myös perheesi ja EVP-kavereidesi kanssa ja esitellä
					harrastustasi myös heille!
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Missä</Section.SubTitle>
				<Text>
					Kauklahden Palttinapuistossa osoitteessa{' '}
					<Link href="https://maps.app.goo.gl/MahwmuHvMcogAtj2A">Palttinapolku 3, 02780 Espoo</Link>.
				</Text>
				<Text>Alueella on rajallisesti parkkipaikkoja, joten saavuthan mahdollisuuksien mukaan paikalle kävellen.</Text>
			</Section>
			<Section>
				<Section.SubTitle>Milloin</Section.SubTitle>
				<Text>Sunnuntaina 17.8.2025 kello 12:00–14:00</Text>
				<Text>
					Paikalle saa tulla joustavasti oman aikataulun mukaisesti joko koko ajaksi tai vain lyhyelle visiitille.
				</Text>
			</Section>
			<Section>
				<Section.Title>Katse tulevaan</Section.Title>
				<Text>
					Syksyn kokoukset alkavat maanantaina 25.8. Lisätietoja kauden ryhmistä löydät{' '}
					<Link href="https://www.kauku.fi/2025/07/23/kuuttien-kesakirje/">Kuuttien kesäkirjeestä</Link> ja ryhmiesi
					johtajilta. Jos partiotoiminta Kauka-Kuuteissa kiinnostaa, lisätietoa on saatavilla{' '}
					<Link href="https://www.kauku.fi/liity-jaseneksi/">lippukunnan verkkosivuilta</Link>, sähköpostitse
					osoitteesta <Link href="mailto:kaukakuutit@gmail.com">kaukakuutit@gmail.com</Link> tai lippukunnan
					Facebookissa & Instagramissa. Ihan pian on taas kivojen kokousten ja retkien aika!
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
