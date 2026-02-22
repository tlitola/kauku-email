import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2026/02/02/kauka-kuuttien-vaiski-2026/';

export const Template: FC = () => (
	<Email
		titleShort="Väiski 2026"
		title="Kauka-Kuuttien Väiski 2026"
		heroImage="https://www.kauku.fi/wp-content/uploads/vaiski_logo_26_vaalea_png.png"
		heroAlt=""
		imageSource="EPT – Väiski 2026"
		webVersionurl={webVersionUrl}
		recipients="Lippukunnan jäsenet huoltajineen"
	>
		<SectionsWrapper alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Väiskin ilmoittautuminen on nyt alkanut!</Text>
				<Text>Tulethan mukaan kokemaan yhteistä leirielämää Kauka-Kuuttien kanssa!</Text>
				<Text>
					Lisätietoa leiristä ja leirin ilmoittautuminen löytyy Väiskin verkkosivuilta ja EPT:ltä tulleista
					sähköposteista!
				</Text>
				<Link variant="button" location="left" href="https://väiski.fi/osallistujalle.html">
					Ilmoittaudu nyt!
				</Link>
			</Section>
			<Section>
				<Text>
					Kauka-Kuutit tukevat leirille osallistuvia jäseniään <b>20% leirimaksun suuruudesta</b> kiitoksena hyvin
					tehdystä adventtikalenterimyynnistä!
				</Text>
				<Text>
					Tuki on tarkoitettu kaikille lippukunnan aktiivisille jäsenille, jotka osallistuvat leirille koko ajaksi
					(sudenpentu-, seikkailija- tai pitkä leiri).
				</Text>
				<Text>
					Tuki maksetaan kesäkuussa, ja sen maksamista varten tarvitsemme maksajien tilitiedot. Tuki täytyy siis hakea
					erikseen!
				</Text>
				<Text>Lisätietoa tuesta ja sen hakuohjeet löytyy oheisesta linkistä.</Text>
				<Text>
					<b>Haettehan tukea 9.3. mennessä!</b>
				</Text>
				<Link variant="button" location="left" href="https://forms.gle/dexmc7TfAYYEvkhB8">
					Hae osallistumistukea
				</Link>
			</Section>
			<Section>
				<Section.SubTitle>Ikäkaudet</Section.SubTitle>
				<Text>Leirille osallistutaan siinä ikäkaudessa, missä on ollut kevään aikana.</Text>
				<Text>Käytännössä tämä tarkoittaa että:</Text>
				<List>
					<Li>
						<b>Rohkeista apinoista</b> 2016 ja 2015 syntyneet osallistuvat seikkailijaleirille ja 2017 ja 2018 syntyneet
						osallistuvat sudenpentuleirille
					</Li>
					<Li>
						<b>Tähtipanssariketut</b> osallistuvat seikkailijaleirille
					</Li>
					<Li>
						<b>Vesikauhut</b> osallistuvat pitkälle leirille tarpojina
					</Li>
					<Li>
						<b>Salama-Ketut</b> osallistuvat pitkälle leirille tarpojina.
					</Li>
				</List>
			</Section>
			<Hr />
			<Section>
				<Text>
					Leiriä koskevissa kysymyksissä voit olla myös yhteydessä osoitteeseen{' '}
					<Link href="mailto:vaiski@partio.fi">vaiski@partio.fi</Link> tai lippukunnan Väiski-yhteyshenkilöön Toukoon{' '}
					<Link href="mailto:touko.litola@kauku.fi">touko.litola@kauku.fi</Link>.
				</Text>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<Section.Title>Väiski 2026</Section.Title>
				<Text>
					Väiski on Espoon ja Granin partioleiri, joka järjestetään nyt 12. kertaa. Väiskin järjestää Espoon Partiotuki
					eli EPT, joka on Espoon ja Kauniaisten partiolippukuntien aluejärjestö. Leiri järjestetään heinäkuussa 2026
					Sauvon Ahtelassa ja sinne odotetaan 2200 osallistujaa.
				</Text>
				<Section.SubTitle>Milloin?</Section.SubTitle>
				<List variant="unordered">
					<Li>Pitkä leiri: 16.–23.7.2026</Li>
					<Li>Seikkailijaleiri: 16.–20.7.2026</Li>
					<Li>Sudenpentuleiri: 17.–20.7.2026</Li>
				</List>

				<Section.SubTitle>Hinta</Section.SubTitle>
				<Text>Väiskin leirimaksut ovat</Text>
				<List variant="unordered">
					<Li>Pitkä leiri: 245 € (16.–23.7.2026; tarpojat, samoajat, vaeltajat, aikuiset)</Li>
					<Li>Seikkailijaleiri: 200 € (16.–20.7.2026; seikkailijat ja heidän lähijohtajansa)</Li>
					<Li>Sudenpentuleiri: 180 € (17.–20.7.2026; sudenpennut ja heidän lähijohtajansa)</Li>
					<Li>Partioon tutustujan leiri: 260 € (16.–23.7.2026)</Li>
					<Li>Päiväleiri: 50 €/päivä (Huom.! Kuljetukset eivät sisälly hintaan)</Li>
					<Li>3–6-vuotiaat perhepartiolaiset: Sudenpentu- tai seikkailijaleiri 110 €, Pitkä leiri 125 €</Li>
					<Li>0–2-vuotiaat perhepartiolaiset: Ei leirimaksua</Li>
				</List>
				<Text>
					Väiskin leirimaksu sisältää yhteiskuljetukset Espoosta, ellei toisin mainita. Leirimaksu maksetaan heti
					ilmoittautumisen yhteydessä.
				</Text>
				<Section.SubTitle>Ilmoittautuminen</Section.SubTitle>
				<Text>
					Osallistujailmoittautuminen on auki 1.2.–9.3.2026 välisenä aikana ja leirille ilmoittaudutaan jäsenrekisteri
					Kuksassa (huoltaja ilmoittaa alle 18-vuotiaan).
				</Text>
				<Text>
					Väiskille ovat tervetulleita myös partioon tutustujat (ei vielä partiolainen) tutustumaan leiriin ja partioon,
					joten ota kaverisi mukaan Väiskille. Ei-vielä-partiolainen ilmoittautuu saman linkin kautta, kuin
					partiolaiset, mutta hän ei kirjaudu Partio-ID:llä Kuksaan.
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
