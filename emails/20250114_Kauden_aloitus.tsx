import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Li, List } from '../components/List';
import { Link } from '../components/Link';
import { Img } from '../components/Img';
import { InfoText } from '../components/InfoText';

export const Template: FC = () => (
	<Email
		titleShort="Uutiskirje"
		title="Kauka-Kuuttien kevät"
		heroImage="https://www.kauku.fi/wp-content/uploads/20210205_kokkeli-talvella2-scaled.jpg"
		heroAlt="Talvinen maisemakuva Kauklahden metsästä"
		imageSource="Kansikuva: Katariina Luukkanen, Muut: Suomen partiolaisten materiaalipankki"
		webVersionurl="https://www.kauku.fi/2025/01/15/uutiskirje-15-1-2025/"
	>
		<SectionsWrapper>
			<Section>
				<InfoText>
					<Link href="https://www.kauku.fi/2025/01/15/uutiskirje-15-1-2025/">
						The English version is available on the website
					</Link>
				</InfoText>
				<Section.Title>Kauka-Kuuttien tapahtumakalenteri</Section.Title>
				<Section.SubTitle>Kevään tapahtumat</Section.SubTitle>
				<Text>
					Tuleva kevät on täynnä partioaiheista ohjelmaa. Ryhmänjohtajat osaavat kertoa tarkemmin ryhmäkohtaisista
					retkistä ja kisoista, mutta koko lippukunnan yhteiset tapahtumat ovat listattuna alla.
				</Text>
				<List variant="unordered">
					<Li>Koko lippukunnan kevätretki 21.3-23.3. </Li>
					<Li>Lippukunnan kevätkokous 25.3.</Li>
					<Li>Partioviikko 21.4-27.4., joka huipentuu partioparaatiin 27.4.</Li>
					<Li>Kevätkausi päättyy 25.5.</Li>
				</List>
				<Link variant="button" href="https://www.kauku.fi/lippukunta/about/vuosittaiset-tapahtumat/">
					Lippukunnan vuosikello
				</Link>
			</Section>
			<Section>
				<Section.SubTitle>Jiiri 25</Section.SubTitle>
				<Text>
					Juhannuksen jälkeen 25.6.–29.6. pääsemme nauttimaan kesäisestä Päijänteestä. Kauka-Kuutit järjestää yhdessä{' '}
					<Link href="https://korsonhonkapartio.fi">Korson honkapartion</Link> kanssa kesäleiri Jiiri 25:n Asikkalan
					Rismalahdessa. Leirin valmistelut ovat jo hyvässä vauhdissa ja lisätietoa leiristä on luvassa jo pian.
					Leirille ilmoittautuminen tapahtuu maaliskuussa.
				</Text>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper>
			<Section>
				<Section.Title>Uusi sudenpentulauma</Section.Title>
				<Img
					className="mb-md"
					src="https://www.kauku.fi/wp-content/uploads/aikuiset_fbfeed_12.png"
					alt={
						'Kuva aikuisesta partiolaisesta, joka neuvoo kahta sudenpentuikäistä partiolaista. Kuvan vieressä on teksti "Seikkailuja myös aikuisille #partioscout"'
					}
				/>
				<Text>
					Kauka-Kuutteihin perustetaan kevään aikana uusi sudenpentulauma. Nyt on siis oiva aika kertoa partiosta
					naapureilla ja kavereille, ja laittaa jäsenhakemus vireille. Laumaan liittyen järjestetään kevään aikana
					vanhempainilta.
				</Text>
				<Text>
					Lauma kaipaa vielä johtajia, joten jos haluaisit aloittaa uuden kasvattavan ja monipuolisen harrastuksen
					sudenpentuikäisen (7 - 9 vuotiaat) lapsesi kanssa, nyt siihen on oiva mahdollisuus! Ryhmää ei tarvitse johtaa
					yksin, ja apua ja koulutuksia on saatavilla. Ilmoitathan siis jäsenhakemuksen yhteydessä myös mahdollisesta
					kiinnostuksesta ryhmän johtamiseen. Samalla myös varmistat lapsesi mahtumisen ryhmään.
				</Text>
				<Text>
					Lisätietoa ryhmästä ja sen johtamisesta voi lukea{' '}
					<Link href="https://www.kauku.fi/liity-jaseneksi/">lippukunnan verkkosivuilta</Link> tai tiedustella
					sähköpostitse <Link href="mailto:kaukakuutit@gmail.com">kaukakuutit@gmail.com</Link>
				</Text>
				<Link href="https://www.kauku.fi/liity-jaseneksi/" variant="button">
					Liity jäseneksi
				</Link>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final={true}>
			<Section>
				<Section.Title>Lippukunnan ilme uudistuu</Section.Title>
				<Section.SubTitle>Kokeilemme uutta sähköpostimallia</Section.SubTitle>
				<Text>
					Kauka-Kuutit uudistavat viestintäänsä, jota osana kehitämme sähköpostimme ulkonäköä. Otamme mielellämme
					vastaan palautetta uudestä sähköpostistamme ja sen toimivuudesta. Ilmoitattehan etenkin, jos sähköposti ei
					toimi jollain alustalla. Palautteen ja tiedon mahdollisista ongelmista voi lähettää sähköpostilla osoitteeseen{' '}
					<Link href="mailto:kaukakuutit@gmail.com">kaukakuutit@gmail.com</Link>.
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
