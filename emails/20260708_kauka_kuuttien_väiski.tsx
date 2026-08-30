import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, MailTo, Tel } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2026/07/09/kauka-kuuttien-vaiski/';

export const Template: FC = () => (
	<Email
		titleShort="Väiski 2026"
		title="Kauka-Kuuttien Väiski"
		heroImage="https://www.kauku.fi/wp-content/uploads/vaiski_logo_26_vaalea_png.png"
		heroAlt=""
		imageSource="EPT – Väiski 2026"
		webVersionurl={webVersionUrl}
		recipients="Lippukunnan Väiskille ilmoittautuneet jäsenet huoltajineen"
	>
		<SectionsWrapper final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Väiski on jo aivan nurkan takana ja kesän huippuhetkeä täytyy odottaa enää vain hetki!</Text>
				<Text>
					Tästä viestistä löytyy tärkeimmät asiat, jotka kannattaa ottaa huomioon leirillä ja leirille valmistautuessa.
					Tarkempaa tietoa leiristä löytyy leiriorganisaation lähettämästä leirikirjeestä sekä{' '}
					<Link href="https://väiski.fi/osallistujalle.html">Väiskin verkkosivuilta</Link>!
				</Text>
				<Text>Kuulumme leirillä KaLaKa-savuun ja olemme osana alaleiri Hiitolaa.</Text>
			</Section>
			<Section>
				<Section.Title>Kulkeminen</Section.Title>
				<Text>
					Yhteiskuljetukset lähtevät ja palaavat leiriltä Omnia Kirkkokatu 16 parkkipaikkalta (os. Kirkkoväärtintie,
					02770 Espoo).
				</Text>
				<Text>
					Bussit eivät odota yksittäisiä myöhästelijöitä, joten kaikkien kyytiin haluavien on hyvä tulla hyvissä ajoin
					paikalle. Tavarat tulee pakata niin, että jokainen pystyy ne oman savun alueelle kantamaan.{' '}
				</Text>
				<Section.SubTitle>Yhteiskuljetusten aikataulu</Section.SubTitle>
				<List>
					<Li>Lähtö pitkälle leirille ja seikkailijaleirille tapahtuu torstaina 16.7. kello 08:00.</Li>
					<Li>Paluu seikkailijaleiriltä tapahtuu maanantaina 20.7. kello 13:00–14:00.</Li>
					<Li>Paluu pitkältä leiriltä tapahtuu torstaina 23.7. kello 16:00–17:00.</Li>
				</List>
				<Section.SubTitle>Saapuminen omalla autolla</Section.SubTitle>
				<Text>
					Omalla autolla leiriin tuleville on oma parkkipaikka, joka sijaitsee aivan leiriportin välittömässä
					läheisyydessä. Pysäköintilupia myydään ennakkoon{' '}
					<Link href="https://uutiskirje.partio.fi/go/31105752-1215921-73025591">Väiskin verkkokaupan</Link> kautta.
				</Text>
				<Text>
					Mikäli leiriläinen saapuu sovitusti leirille omalla kyydillä, voi tavarat sekä partiolaisen jättää
					leiriportille. Leiriportilla ei ole pysäköintimahdollisuutta.
				</Text>
				<Text>
					Mikäli osallistuja saapuu tai lähtee leiriltä muuten kuin yhteiskuljetuksella, tulee hänen ehdottomasti
					ilmoittaa tästä leirillä leiritoimistoon.
				</Text>
				<Text>
					Muistathan myös ilmoittaa savunjohtaja Toukolle (p. <Tel>045 209 3886</Tel>) jos tulette leirille sovitusti
					muina omilla kyydeillä ja aikataululla.
				</Text>
			</Section>
			<Section>
				<Section.Title>Pakkaaminen</Section.Title>
				<Text>Ikäkausikohtaiset pakkauslistat löytyvät Väiskin verkkosivuilta</Text>
				<Link variant="button" href="https://väiski.fi/osallistujalle.html" location="left">
					Väiskin pakkauslista
				</Link>
				<Text>Pakkauslistan ulkopuolelta mukaan kannattaa ottaa myös rannekello!</Text>
				<Text>
					Pakkaattehan kaikki tavarat rinkkaan ja päiväreppuun, ettekä ota mukaan irtonaisia pusseja, sillä ne katoavat
					helposti jo bussimatkan aikana. Muistattehan myös nimikoida kaikki varusteenne ja vaatteenne!
				</Text>
			</Section>
			<Section>
				<Section.Title>Puhelimet</Section.Title>
				<Text>
					Väiskillä samoajat ja heitä vanhemmat saavat käyttää puhelimia vapaasti. Muille puhelimelle ei ole tarvetta
					(poislukien haikin turvapuhelimet).
				</Text>
				<Text>
					Samoajat ja heitä vanhemmat (sekä haikin turvapuhelimet) pystyvät lataamaan leirillä omia matkalatureitaan.
					Omaa puhelinta ei voi ladata suoraan ja latauskapasiteettia on rajallisesti.
				</Text>
				<Section.SubTitle>Viestintä leirin ja kotiväen välillä</Section.SubTitle>
				<Text>
					Viestintä leiriläisten ja kotiväen välillä onnistuu nuoren omien johtajien tai savunjohtajien kautta, ja
					sudenpennuilla, seikkailijoilla ja tarpojilla ei tarvitse (ja kannata) olla puhelinta mukana.
				</Text>
				<Text>KaLaKan savunjohtajat</Text>
				<List>
					<Li>
						KauKu: Touko Litola (p. <Tel>045 209 3886</Tel>)
					</Li>
					<Li>
						KaPo: Milla Vironen (p. <Tel>044 222 4244</Tel>)
					</Li>
					<Li>
						LEV: Tuuli Tanni (p. <Tel>040 579 6846</Tel>)
					</Li>
				</List>
				<Text>
					Etenkin ensimmäisinä päivinä kannattaa harkita ennen kuin ottaa yhteyden omaan lapseen, sillä se voi lisätä
					koti-ikävän riskiä. Leiri onkin myös erinomainen mahdollisuus irtaantua arjesta ja nauttia metsäympäristöstä.
				</Text>
				<Text>
					Jos kuitenkin juttelette lapsenne kanssa suoraan, ja joitain huolia, tai esimerkiksi halu lähteä kotiin,
					ilmenee, ilmoitattehan näistä johtajille, sillä he pystyvät vaikuttamaan asiaan leirillä.
				</Text>
				<Text>
					Kotiväki voi myös lähettää leiriläisille postia lähettämällä sähköpostia osoitteeseen{' '}
					<MailTo>posti.vaiski@partio.fi</MailTo>. Kirjoita vastaanottajan etu- ja sukunimi ja lippukunta sekä
					sähköpostin otsikkoon että viestin alkuun, muuten posti ei löydä perille!{' '}
				</Text>
				<Text>
					Mikäli toivot saavasi yhteyden leiriorganisaatioon leirin aikana, voit olla yhteydessä leiritoimistoon, p.{' '}
					<Tel>041 481 6948</Tel>
				</Text>
			</Section>
			<Section>
				<Section.Title>Leiriarki</Section.Title>
				<Section.SubTitle>Leirillä maksaminen</Section.SubTitle>
				<Text>
					Leirillä maksuvälineinä toimivat vain korttimaksu sekä CoreGo-ranneke, johon ladataan rahaa. Jokainen
					ilmoittautunut/huoltaja on saanut ohjeet rahanlataukseen sähköpostitse
				</Text>
				<Section.SubTitle>Kuvauskielto</Section.SubTitle>
				<Text>
					Mikäli ilmoittautuessa on ilmoittanut kuvauskiellosta, annetaan osallistujalle leiriin saapuessa
					kuvauskieltopinssi merkiksi kuvauskiellosta. Pinssin saa omasta savusta. Pinssiä tulee pitää huivissa
					näkyvissä koko leirin ajan. Leirin loppuessa pinssi palautetaan savuun.{' '}
				</Text>
				<Section.SubTitle>Löytötavarat</Section.SubTitle>
				<Text>
					Leirillä löytötavarat kootaan leiritoimiston yhteydessä olevaan löytötavaratelttaan. Voit tulla etsimään
					kadonnutta tavaraasi toimistolta sen aukioloaikoina. Arvokkaat tavarat säilytetään toimistossa lukkojen
					takana, ja niitä luovutetaan vain tarkkoja tuntomerkkejä vastaan. Jos löydät leirialueelta vailla omistajaa
					olevan tavaran, voit tuoda sen leiritoimistolle.
				</Text>
				<Section.SubTitle>Majoittuminen</Section.SubTitle>
				<Text>
					Väiskillä majoittuminen tapahtuu savussa oman lippukuntansa kanssa. Riippumatoille sopivia paikkoja on
					leirialueella rajallisesti, joten jokaisen, joka suunnittelee nukkuvansa riippumatossa täytyy varustautua
					sellaisin varustein, joilla pystyy tarvittaessa nukkumaan myös teltassa.
				</Text>
				<Text>Omille teltoille ei leirialueen koon vuoksi ole muutamaan poikkeusta lukuunottamatta tilaa.</Text>
				<Section.SubTitle>Turvallisuus ja säännöt</Section.SubTitle>
				<Text>
					Väiskin turvallisuusohjeet ja säännöt löytyvät Väiskin verkkosivuilta osoitteesta{' '}
					<Link>https://väiski.fi/leirilaisenkirja/index.html</Link>. Tutustuttehan niihin etukäteen itsenäisesti tai
					yhdessä huoltajan kanssa!
				</Text>
				<Text>Huomioittehan leirivalmisteluissa myös seuraavat leiriorganisaation ohjeet:</Text>
				<List>
					<Li>Jäykkäkouristus- ja tuhkarokkorokotteen on oltava leirin aikana voimassa </Li>
					<Li>Suosittelemme myös TBE-rokotetta eli &quot;punkkirokotetta&quot;</Li>{' '}
					<Li>Piilolinssien käyttö leirillä ei ole suositeltavaa suuren silmätulehdusriskin takia</Li>
				</List>
				<Hr />
				<Text>Nähdään leirillä! Mahtavaa, että olette tulossa mukaan Väiskille!</Text>
				<Text>
					Leiritunnelmaan kannattaa valmistautua vielä ennen leiriä lukemalla{' '}
					<Link href="https://väiski.fi/leirilaisenkirja/index.html">Leiriläisen kirjan</Link>!
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
