import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2025/09/23/kuuttien-syyskirje/';

export const Mail: FC = () => (
	<Email
		titleShort="Kuuttien syyskirje"
		title="Kuuttien syyskirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/luonto_syksy_eevahelle-27-e1758443827540.jpg"
		heroAlt=""
		recipients="Lippukunnan jäsenet huoltajineen"
		imageSource="Suomen Partiolaiset / Eeva Helle"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper alternateColors final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Section.SubTitle>Tässä kirjeessä</Section.SubTitle>
				<List variant="ordered">
					<Li>Jäsenlaskutus alkaa pian</Li>
					<Li>Lippukunnan sähkäpostiosoite muuttuu!</Li>
					<Li>Tulevia tapahtumia</Li>
					<Li>Jiiri 25 löytötavarat</Li>
				</List>
			</Section>
			<Section>
				<Section.SubTitle>Jäsenlaskutus alkaa pian</Section.SubTitle>
				<Text>
					Ensimmäiset vuoden 2026 jäsenlaskut on nyt lähetetty. Nyt lähetetyt jäsenlaskut ovat menneet partion syksyllä
					aloittaneille uusille partiolaisille. Jo toiminnassa olevat partiolaiset jäsenlaskutetaan marraskuussa.
				</Text>
				<Text>Jäsenmaksu koostuu Suomen Partiolaisten, partiopiirin ja lippukunnan omasta jäsenmaksusta.</Text>
				<Text>
					Jäsenmaksulle voidaan myös myöntää vapautus taloudellisin, terveydellisin ja sosiaalisin perustein.
					Jäsenmaksuvapautus tulee hakea ennen jäsenmaksun maksamista ja jo maksettuja jäsenmaksuja ei hyvitetä.
				</Text>
				<Text>
					Lisätietoa jäsenmaksuvapautuksesta voi tiedustella sähköpostilla osoitteesta{' '}
					<Link href="mailto:info@kauku.fi">info@kauku.fi</Link> tai lukea verkosta osoitteesta{' '}
					<Link href="https://www.partio.fi/partiolaiselle/jasenpalvelut/jasenmaksut-ja-laskutus/">
						https://www.partio.fi/partiolaiselle/jasenpalvelut/jasenmaksut-ja-laskutus/
					</Link>
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Lippukunnan sähkäpostiosoite muuttuu!</Section.SubTitle>
				<Text>
					Lippukunnan sähköpostiosoite muuttuu 25.9. alkaen ja jatkossa Kauka-Kuuteille kohdistuvat sähköpostit tulee
					lähettää osoitteeseen <Link href="mailto:info@kauku.fi">info@kauku.fi</Link>.
				</Text>
				<Text>
					Vanha sähköpostiosoite on toiminnassa lokakuun loppuun saakka, jonka jälkeen kaikki uudet viestit tulee
					lähettää uuteen osoitteeseen.
				</Text>
				<Text>
					Jos huomaatte uuden sähköpostiosoitteen toiminnassa mitään ongelmia, kerrottehan asiasta Toukolle{' '}
					<Link href="mailto:touko.litola@kauku.fi">touko.litola@kauku.fi</Link>.
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Tulevia tapahtumia</Section.SubTitle>
				<Text>
					Alle on listattu loppusyksyn ja tulevan vuoden tapahtumia, jotka on hyvä kirjata kalenteriin jo nyt.
					Ryhmänjohtajat kertovat tarkemmin mihin tapahtumiin ryhmä osallistuu.
				</Text>
				<List>
					<Li>
						<b>Lokakuu:</b> Adventtikalentereiden myynti alkaa lokakuussa. Tapahtuma on lippukunnan tärkein
						varainhankintakeino ja kannustammekin kaikkia partiolaisia osallistumaan myyntiin aktiivisesti. Lisätietoa
						adventtikalentereiden myynnistä on luvassa lähiaikoina.
					</Li>
					<Li>
						<b>
							5.10. <Link href="https://ept.fi/pinkki/">Disney-Pinkki</Link>.
						</b>{' '}
						Pinkki on perhepartiolaisten, sudenpentujen ja ensimmäisen vuoden seikkailijoiden partiotaitokilpailu.
						Ryhmänjohtajat kertovat onko ryhmänne osallistumassa kilpailuun.
					</Li>
					<Li>
						<b>
							2.11. <Link href="https://hh.ilvesveikot.fi">Hiipivä Haamu</Link>.
						</b>{' '}
						Hiipivä Haamu on tarpojille ja sitä vanhemmille suunnattu vuosittain järjestettävä salapoliisi- ja
						kaupunkituntemuskilpailu. Ryhmänjohtajat kertovat onko ryhmänne osallistumassa kilpailuun.
					</Li>
					<Li>
						<b>14.–16.11. Koko lippukunnan syysretki.</b> Retki järjestetään Kirilässä Vihdissä. Retkestä lisätietoa
						lähiaikoina.
					</Li>
					<Li>
						<b>6.12. Itsenäisyyspäivän partiokirkko.</b> Tapahtumassa on mahdollista antaa oman ikäkauden partiolupaus.
						Vaihtoehtoinen lupauksenantotilaisuus järjestetään lippukunnan puurojuhlassa joulukuussa.
					</Li>
				</List>
				<Text>Ja vielä katsaus vuoteen 2026</Text>
				<List>
					<Li>
						<b>16.–23.7.2026 Väiski.</b> Osallistumme kesällä 2026 Väiski-kesäleirille! Tarkemmat leiriajat ovat
						saatavilla Väiskin verkkosivuilla <Link href="https://väiski.fi">väiski.fi</Link>.
					</Li>
				</List>
			</Section>
			<Section>
				<Section.SubTitle>Jiiri 25 löytötavarat</Section.SubTitle>
				<Text>
					Muutamia Jiirin löytötavaroita on vielä leirin jäljiltä ilman omistajaa. Jos teiltä uupuu vielä jotain
					leirillä hukkunutta, tavaroita voi tiedustella tuntomerkkejä vastaan Annalta (
					<Link href="anna.nummela@gmail.com">anna.nummela@gmail.com</Link>).
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Mail;
