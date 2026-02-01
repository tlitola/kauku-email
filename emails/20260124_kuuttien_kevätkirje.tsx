import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Hr } from '../components/Hr';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2026/01/25/kuuttien-kevatkirje/';

export const Template: FC = () => (
	<Email
		titleShort="Kuuttien kevätkirje"
		title="Kuuttien kevätkirje"
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
				<Text>
					Kauka-Kuuttien kuuttien kevätkausi on alkanut ihanan talvisisissa tunnelmissa! Vaikka nyt voimmekin vielä
					nauttia valkoisesta maasta ja pakkaspäivistä, on tässä vaiheessa aika kääntää katse myös tulevaan kevääseen ja
					kesään!
				</Text>
				<Text>
					Väiskiin liittyen lippukunnalla on tarjota pieni <b>yllätys</b> osallistujille! Kannattaa siis lukea viesti
					loppuun asti ja lähteä mukaan leirille!
				</Text>
				<Text>Tässä kirjeessä:</Text>
				<Text>
					1. Väiski 2026
					<br />
					2. Lippukunnan kevään 2026 tapahtumat
				</Text>
				<Text>
					🔔🔔 Tarpojaryhmä Vesikauhussa on vielä tilaa uusille vuosina 2011 ja 2012 syntyneille partiolaisille.
					Lisätietoja saa laittamalla sähköpostia osoitteeseen <Link href="mailto:info@kauku.fi">info@kauku.fi</Link>.
				</Text>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper alternateColors={false}>
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
				<Text>
					Kiitoksena ahkerasta adventtikalenterien myyntityöstä,{' '}
					<b>
						Kauka-Kuutit tukevat lippukunnasta leirille lähtevien jäsenten osallistumista 20% osallistumismaksun
						suuruudesta!
					</b>{' '}
					Tuesta on luvassa lisätietoa ilmoittautumisen alettua! Tuki maksetaan kesäkuussa, kun leirin stipendit ovat
					selvinneet ja ilmoittautumiset eivät voi muuttua enää työ-, varusmies- ja siviiliturvan myötä.
				</Text>
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
					Väiskin ilmoittautuminen alkaa viikon päästä! Nyt on siis viimeistään aika raivata kalenterista tilaa
					leirille!
				</Text>
				<Text>
					Osallistujailmoittautuminen on auki 1.2.–9.3.2026 välisenä aikana ja leirille ilmoittaudutaan jäsenrekisteri
					Kuksassa (huoltaja ilmoittaa alle 18-vuotiaan).
				</Text>
				<Text>
					Väiskille ovat tervetulleita myös partioon tutustujat (ei vielä partiolainen) tutustumaan leiriin ja partioon,
					joten ota kaverisi mukaan Väiskille. Ei-vielä-partiolainen ilmoittautuu saman linkin kautta, kuin
					partiolaiset, mutta hän ei kirjaudu Partio-ID:llä Kuksaan.
				</Text>
				<Hr />
				<Text>
					Lisätietoa väiskistä löytää EPT:n lähettämästä sähköpostista tai leirin verkkosivuilta{' '}
					<Link href="https://väiski.fi">väiski.fi</Link>. Leiriä koskevissa kysymyksissä voit olla myös yhteydessä
					osoitteeseen <Link href="mailto:vaiski@partio.fi">vaiski@partio.fi</Link> tai lippukunnan
					Väiski-yhteyshenkilöön Toukoon <Link href="mailto:touko.litola@kauku.fi">touko.litola@kauku.fi</Link>.
				</Text>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<Section.SubTitle>Lippukunnan kevään 2026 tapahtumat</Section.SubTitle>
				<Text>
					Kauka-Kuuteilla on taas luvassa toiminnan täyteinen kevät! Nappaa tästä kalenteriin kevään lippukunnan
					yhteiset tapahtumat, jotta ne eivät pääse unohtumaan!
				</Text>
				<Text>
					🤝 Kevätkokous 15.3.2026
					<br />
					⛺ Lippukunnan kevätretki maalis-huhtikuussa, päivämäärät tarkentuvat pian!
					<br />
					🫡 Partioparaati Helsingissä 26.4.2026
					<br />
					🥾 Vaellus tarpojille ja sitä vanhemmille 14.-17.5.2026
					<br />
					🏖 Kevätkausi päättyy sunnuntaina 24.5.2026
				</Text>
				<Text>
					Näiden lisäksi ryhmät tekevät aktiivisesti omia retkiä ja osallistuvat kilpailuin viikkokokouksien ohella.
					Näistä lisätietoa ryhmänjohtajilta kevään aikana!
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
