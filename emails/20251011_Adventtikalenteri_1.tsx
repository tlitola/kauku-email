import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2025/10/11/adventtikalenterikamppanja-alkaa-taas/';

export const Template: FC = () => (
	<Email
		titleShort="Adventtikalenterikamppanja 2025"
		title="Adventtikalenterikamppanja alkaa taas!"
		heroImage="https://www.kauku.fi/wp-content/uploads/adventtikalenteri25_nettahautamaki-8.jpg"
		heroAlt=""
		imageSource="Suomen Partiolaiset – Netta Hautamäki"
		recipients="Lippukunnan jäsenet huoltajineen. Tiedoksi johtajistolle."
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Olette toivottavasti saaneet jo Suomen Partiolaisilta tietoa kalenterikamppanjan yleisistä ohjeista. Tässä
					viestissä kerrotaan vielä myynnin <b>lippukuntakohtaisista asioista</b>.
				</Text>
				<Text>
					Kauka-Kuutit ry hankkii varoja myymällä partiolaisten adventtikalentereita 15.10. – 5.12.2025 välisenä aikana.
					Adventtikalenterikampanja on Kauka-Kuuttien vuoden tärkein varainhankintakampanja. Kiitos jo etukäteen, että
					osallistutte yhteiseen varainhankintaan ottamalla kalentereita myyntiin!
				</Text>
				<Text>
					<b>
						Vuonna 2025 keräämme kalenterimyynnillä rahaa ensisijaisesti vuoden 2026 Väiski-kesälerin
						osallistumismaksuja ja kolon vuokraa varten.
					</b>{' '}
					Lippukunnan tavoite on myydä vähintään 600 adventtikalenteria.
				</Text>
				<Text>
					Kalentereiden tuotto menee kokonaisuudessaan partiotoiminnan tukemiseen. <b>Kalenterin myyntihinta on 10€.</b>
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Myyntiaika ja kalenterien jakelu</Section.SubTitle>
				<Text>
					<b>Adventtikalentereiden myyntiaika alkaa 15.10. ja kestää 5.12. asti.</b> Kalentereita jaetaan kokouksien
					yhteydessä 6.10. alkaen, mutta niitä ei saa myydä ennen myyntiajan alkua 15.10.
				</Text>
				<Text>
					Perhe voi itse valita myyntiin otettavien kalentereiden määrän (aloittaa voi vaikka vain muutamalla
					kalenterilla). <b>Palauttaa voi maksimissaan puolet myyntiin otetuista kalentereista.</b>
				</Text>
				<Text>Lisää kalentereita saa kokouksissa, kun edelliset kalenterit on tilitetty lippukunnalle.</Text>
			</Section>
			<Section>
				<Section.SubTitle>Tilitys</Section.SubTitle>
				<Text>
					Myydyt kalenterit tilitetään Kauka-Kuuttien tilille <b>FI68 5037 0520 1154 58</b> käyttäen{' '}
					<b>ryhmäkohtaista viitenumeroa</b>:
				</Text>
				<List>
					<Li>Vesikauhut 206613</Li>
					<Li>Rohkeat Apinat 206626</Li>
					<Li>Salama-Ketut 206639</Li>
					<Li>Tähtipanssariketut 206642</Li>
					<Li>Banaanihahmot 206655</Li>
					<Li>Perhepartiolaiset ja johtajisto 206668</Li>
				</List>
				<Text>
					Pankkipalveluiden hinnottelun takia pyydämme, että kalentereitä tilitettäisin pankkitilille suuremmissa
					erissä.
				</Text>
				<Text>
					TIlityksen voi myös tehdä kamppanjapäällikön MobilePay numeroon 0400 81 00 78 // Vaike Õiglane. Kirjoita
					viestikenttään MobilePay:llä rahat tilittävän lapsen nimi ja ryhmä.
				</Text>
				<Text>
					Huomioithan, että MobilePay ja tilinumero ovat käytössä vain kalentereiden tilitykseen eikä lapsen omaan
					myyntiin. Tiesithän, että jokaisella partiolaisella on myös mahdollisuus ottaa käyttöön oma myyjäkohtainen
					linkki verkkomyyntiä varten. Listätietoa on saatavilla{' '}
					<Link href="https://www.adventtikalenteri.fi/myyjille/myynti/verkkokauppa-myyntikanavana/henkilokohtaiset-myyntilinkit/">
						adventtikalenterikamppanjan omilla sivuilla
					</Link>
					.
				</Text>
				<Text>
					<b>Jokainen partiolainen on itse vastuussa rahoista ja kalentereista.</b>
				</Text>
				<Hr />
				<Section.SubTitle>Lopputilitys</Section.SubTitle>
				<Text>
					Kalenterit tulee tilittää ja myymättömät kalenterit palauttaa ryhmänjohtajalle{' '}
					<b>5.12. mennessä ryhmän oman kokouksen aikana!</b>
				</Text>
				<Text>
					<b>
						Veloitamme täyden myyntihinnan (10€ / kpl), kaikista kalentereista joita ei olla myyty tai palautettu
						määräpäivään mennessä.
					</b>
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Myynti</Section.SubTitle>
				<Text>
					Partiolainen on adventtikalentereiden paras myyjä! Adventtikalenterimyyjät tunnistaa <b>partiohuivista</b> ja
					hyvästä käytöksestä! Kalentereita myydään pääasiassa itsenäisesti, jonka lisäksi viikkokouksissa oman ryhmän
					kanssa myydään kalentereita yhteisen myyntitempausviikon 10.–16.11. aikana.
				</Text>
				<Hr />
				<Section.SubTitle>Vinkkejä myyntiin</Section.SubTitle>
				<Text>
					Jokainen partiolainen päättää itse kenelle ja miten haluaa kalentereita myydä. Vaihtoehtoina on esimerkiksi
					tehdä ovelta ovelle -myyntiä tai myydä vain tutuille ja sukulaisille. Myynnin yhteydessä raha vaihtaa
					kätevästi omistajaa vanhemman MobilePaylla, tilisiirtolla tai käteisellä. Toimivaksi todettuja tapoja ovat:
				</Text>
				<List>
					<Li>
						Ota lapsestasi kuva adventtikalenterin kanssa partiohuivi kaulassa. Lähettäkää kuva (tai video) esimerkiksi
						WhatsAppilla sukulaisille.
					</Li>
					<Li>
						Kerro huoltajan omissa sosiaalisen median kanavissa, että lapsesi myy kalentereita. Kerro lapsen
						kalenterimyyntitavoitteesta, mihin myyntituotot käytetään ja miten kalenterin saa teidän perheeltä ostettua.
					</Li>
					<Li>
						Laittakaa oman taloyhtiön ilmoitustaululle myynti-ilmoitus, jossa kerrot mistä ja miten kalenterin voi
						ostaa.
					</Li>
					<Li>
						Tulosta työpaikan kahvipöydälle myyntitilauslista tai jaa mainos adeventtikalenterikamppanjasta työpaikan
						sisäisellä sähköisellä keskustelukanavalla.
					</Li>
				</List>
				<Text>
					Kauppojen edustalle <b>ei saa</b> mennä myymään kalentereita ilman, että asiasta on sovittu kauppian kanssa.
				</Text>
				<Text>
					Turvallisuus on adventtikalenterikampanjassa – kuten kaikessa partiotoiminnassa – ensiarvoisen tärkeää.
					Kalentereita myydään vain, mikäli se on mahdollista turvallisesti. Jokainen perhe voi tukea Kauka-Kuuttien
					kalenterimyyntiä auttamalla omaa lastaan kampanjassa. Nuoret myyjät liikkuvat aina pareittain tai
					täysi-ikäisen saattajan ollessa kuulomatkan päässä.
				</Text>
				<Text>Neuvottehan nuoria myös rahankäsittelyn kanssa.</Text>
				<Text>
					Lippukunnasta on mahdollista lainata kalenterimyyntiä varten päiväksi tai illaksi lapsen käyttöön
					korttimaksupääte vanhemman vastuulla. Sovithan maksupäätteen lainaamisesta ajoissa kampanjapäällikön kanssa.
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Palkitseminen</Section.SubTitle>
				<Text>Parhaat myyjät palkitaan tonttumerkillä sekä muilla palkinnoilla.</Text>
				<Text>Partiolaisten tonttumerkki on tunnustus aktiivisesta osallistumisesta kalenterikamppanjaan.</Text>
				<List>
					<Li>vähintään 12 kalenteria myyneet saavat tavallisen tonttumerkin</Li>
					<Li>vähintään 50 kalenteria myyneet saavat hopeisen tonttumerkin</Li>
					<Li>vähintään 100 kalenteria myyneet saavat kultaisen tonttumerkin</Li>
				</List>
				<Text>Lisäksi kaikille huippumyyjille ja hyville tsemppareille jaetaan erityispalkintoja!</Text>
			</Section>
			<Section>
				<Text>
					Lisää tietoa partiolaisten adventtikalenterikamppanjasta on saatavilla lippukunnan verkkosivuilta{' '}
					<Link href="https://kauku.fi/adventtikalenterit">kauku.fi/adventtikalenterit</Link> ja Suomen Partiolaisten
					sivuilta <Link href="https://www.adventtikalenteri.fi">www.adventtikalenteri.fi</Link>. Myös
					kamppanjapäällikkö Vaikelta voi kysellä lisätietoja.
				</Text>
				<Text>Kiitos kun jaksoit lukea tänne asti, vaikka viesti olikin pitkä! 💥</Text>
				<Text>
					Joulunodotusterveisin,
					<br />
					Adventtikalenterikampanjapäällikkö Vaike Õiglane
					<br />
					<Link href="mailto:talous@kauku.fi">talous@kauku.fi</Link>
					<br />
					<Link href="tel:0400 81 00 78" target="_self">
						0400 81 00 78
					</Link>{' '}
					– Soitathan tai laitathan viestiä, jos lisäkysymyksiä herää.
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
