import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, MailTo, Tel } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2026/10/20/soinnun-sykkiva-sydan-23-25-10/';

export const Template: FC = () => (
	<Email
		titleShort="Soinnun Sykkivä Sydän – 2. Retkikirje"
		title="Soinnun Sykkivä Sydän 23.–25.10. – 2. retkikirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/25_syysretki_iltaohjelma.jpeg"
		heroAlt=""
		imageSource="Kauka-Kuutit – Olle Suni"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Syysretkelle on ilmoittautunut yhteensä lähes 50 retkeläistä – hienoa, että sinäkin olet lähdössä mukaan!
				</Text>
				<Text>
					Luethan tämän kirjeen kokonaan ja huolellisesti. Tässä kirjeessä kerrotaan retken käytännön järjestelyistä.
				</Text>
				<Text>
					Retkellä on mukana osallistuja, jolla on vakava pähkinä- ja maapähkinäallergia.{' '}
					<b>Ethän pakkaa mukaan herkkuja tai muita ruokia, jotka sisältävät pähkinää tai maapähkinää.</b>
				</Text>
				<Text>
					Tässä kirjeessä:
					<br />
					1. Yleistä
					<br />
					2. Retkipaikka
					<br />
					3. Kuljetukset
					<br />
					4. Majoitus
					<br />
					5. Pukeutuminen
					<br />
					6. Varusteet
					<br />
					7. Turvallisuus
					<br />
					8. Lisätietoa
					<br />
					9.Erityishuomio
				</Text>
			</Section>
			<Section multiRow>
				<Section.Title>1. Yleistä</Section.Title>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Retken nimi</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>Soinnun Sykkivä Sydän</Text>
					</Column>
				</Row>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Ajankohta</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<List>
							<Li>Koko retki: 23.10. klo. 18:30 – 25.10. klo 13:00</Li>
							<Li>Päiväretki (Ketunpennut ja Tiikerit): 224.10. klo 10:00 – 16:15</Li>
						</List>
					</Column>
				</Row>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Retken johtaja</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Touko Litola, p. <Tel>045 209 3886</Tel>, <MailTo>touko.litola@kauku.fi</MailTo>
						</Text>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>2. Retkipaikka</Section.Title>
				<Text>
					<Link href="https://www.espoo.fi/fi/toimipisteet/luukin-leirikeskus">Luukin leirikeskus</Link>
					<br />
					Luukinranta 10,
					<br />
					02970 Espoo
				</Text>
			</Section>
			<Section>
				<Section.Title>3. Kuljetukset</Section.Title>
				<Text>Kuljetukset retkelle ja pois retkeltä tapahtuu julkisilla ja kimppakyydein.</Text>
				<Section.SubTitle>Koko retki</Section.SubTitle>
				<Text>
					<b>Meno perjantaina 23.10.</b> Perjantaina kaikki kulkevat retkipaikalle julkisilla. Tapaamme{'  '}
					<b>23.10. klo. 17:10</b> Kauklahden aseman 2/3 raiteelta. Jos ette pysty osallistumaan julkisilla tapahtuvaan
					kyytiin ja tulette retkelle omilla kyydeillä, olkaa yhteydessä Toukoon (<MailTo>touko.litola@kauku.fi</MailTo>
					).
				</Text>
				<Text>
					<b>Paluu sunnuntaina 25.10.</b> Myös paluumatka tapahtuu julkislla. Lähdemme luukista kello 13:05 ja olemme
					takaisin Kauklahden asemalla noin kello 14:30.
				</Text>
				<Text>
					Matkaan sisältyy noin 1km kävely, joten pakkaattehan tavarat sen mukaisesti. Matkaliput kuuluvat retkimaksuun.
				</Text>
				<Hr />
				<Section.SubTitle>Päiväretki (Ketunpennut ja Tiikerit)</Section.SubTitle>
				<Text>
					Päiväretkeläiset kulkevat retkelle omilla kyydeillään. Päiväretkiläisille järjestetään molempiin suuntiin
					yhteislähtö, jossa varmistetaan, että kaikille retkiläisille on kyyti.
				</Text>
				<Text>
					<b>Meno perjantaina 24.10.</b> Lähdemme <b>klo 9:15</b> Kauklahden aseman liityntäpysäköinnistä osoitteessa
					Vantinportti 5, josta jatkamme yhdessä kohti Luukin leirikeskusta (Luukinranta 10). Olettehan paikalla noin 10
					minuuttia ennen lähtöä!
				</Text>
				<Text>
					<b>Paluu perjantaina 24.10.</b> Kotimatkalle lähdetään kello <b>16:15</b> Luukin ulkoilualueen
					pysäköintipaikalta osoitteesta{' '}
					<Link href="https://maps.app.goo.gl/rW9vsvL4em3RfcU99?g_st=aw">Luukintie 33 (Luukki parking)</Link>.
					Sovittehan viennin yhteydessä myös mahdollisista kimppakyydeistä paluumatkaa varten!
				</Text>
			</Section>
			<Section>
				<Section.Title>4. Majoitus</Section.Title>
				<Text>
					Retkelle kaikki nukkuvat lähtökohtaisesti sisällä kerrossängyssä. Leirikeskuksessa on patjat, mutta niiden
					käyttö edellyttää <b>omat aluslakanat</b>. Luukissa ei ole peittoja tai tyynyjä, joten mukaan tarvitsee myös
					oman makuupussin.
				</Text>
			</Section>
			<Section>
				<Section.Title>5. Pukeutuminen</Section.Title>
				<Text>
					Viikonlopun sääennuste näyttää tällä hetkellä sateiselta. Varaudu siis vaihtelevaan ja kosteaan säähän jo
					pakatessa!
				</Text>
				<Text>
					Retkellä ollaan paljon ulkona säästä riippumatta, joten huolehdithan mukaan sään mukaisen varustuksen.{' '}
					<b>Villasukat ja kumpparit ovat lähtökohtaisesti hyvä kombo retkijalkineiksi.</b> Suosikaa kerrospukeutumista
					ja muistakaa sadevaatteet. Hyviä vaihtoehtoja on erilaiset tekniset kuidut tai merinovilla. Alimman kerroksen
					päällä kannattaa olla lämpimämpiä ja suojaavia kerroksia sään mukaisesti, joita voi tarvittaessa ottaa pois
					tai lisätä.
				</Text>
			</Section>
			<Section>
				<Section.Title>6. Varusteet</Section.Title>
				<Text>
					Tarkempi varusteluettelo löytyy lippukunnan nettisivuilta:{' '}
					<Link>www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/</Link>
				</Text>
				<Text>
					Retkelle saa tuoda mukana pienen määrän omia herkkuja, mutta niiden tarkoitus ei ole korvata retkellä
					tarjottavia ruokia. Herkkuja saa retkellä syödä vapaa-ajalla.
				</Text>
				<Text>
					Retkellä saatetaan harjoitella puukon käyttöä. Jos partiolainen omistaa oman puukon, sen voi ottaa mukaan
					retkelle. Puukkoa saa käyttää vain sille erikseen osoitetulla alueella johtajan valvonnan alaisena. Muina
					aikoina puukon tulee pysyä rinkassa. Jos puukkojen kanssa tulee ongelmia, johtajat voivat kerätä ne pois
					partiolaisilta.
				</Text>
				<Text>
					Pyri pakkaamaan kaikki tavarat rinkan / repun sisälle, niin että niiden kanssa on helppo kävellä.{' '}
					<b>Muistathan nimikoida kaikki tavarasi!</b>
				</Text>
				<Text>
					Lauantai-iltana on mahdollisuus <b>peseytymiseen, saunomiseen ja mahdollisesti uimiseen</b>. Jos kaipaatte
					retkellä yksityistä aikaa peseytyä, voitte kysyä asiasta retken johtajilta.
				</Text>
				<Text>
					Omaa kännykkää tai muuta elektroniikkaa ei tarvitse retkellä. Jos kuitenkin otat mukaasi elektroniikkaa, teet
					sen omalla vastuullasi. Partiovakuutus ei kata elektronisten laitteiden rikkoutumista. Retken aikana
					osallistujat pitävät matkapuhelimensa rinkassa suljettuna ja jos tämä ei onnistu, puhelimet voidaan kerätä
					päivän ohjelman ajaksi johtajien haltuun. Retkeläisillä ei ole mahdollisuutta ladata matkapuhelinta retkellä.
					Tarvittaessa lapsi/lapseen saa yhteyden retken johtajien kautta.
				</Text>
			</Section>
			<Section>
				<Section.Title>7. Turvallisuus</Section.Title>
				<Text>
					Retkellä on voimassa{' '}
					<Link href="https://papa.partio.fi/partiolaiselle/tapahtumaosallistujalle/turvallisemman-tilan-periaatteet/">
						Suomen Partiolaisten turvallisemman tilan periaatteet
					</Link>
					.
				</Text>
				<Text>
					Jos osallistuja ei pysty toimimaan näiden periaatteiden mukaisesti, retki voidaan hänen kohdalta keskeyttää.
				</Text>
				<Text>
					Tapahtuman häirintäyhdyshenkilönä eli turva-aikuisina toimii Heidi &quot;Heitu&quot; Taskinen, p.{' '}
					<Tel>050 3554213</Tel>.
				</Text>
				<Text>
					Turva-aikuisten kanssa voi jutella, jos jokin painaa mieltä. Turva-aikuiset neuvovat ja tukevat, jos
					partiolainen on kohdannut häirintää, syrjintää, kiusaamista tai muuta epätasa-arvoista kohtelua tapahtumassa.
					Turva-aikuisen kanssa käydyt keskustelut ovat aina luottamuksellisia.
				</Text>
			</Section>
			<Section>
				<Section.Title>8. Lisätietoa</Section.Title>
				<Text>
					Retkelle osallistutaan ainoastaan terveenä. Mikäli sairastut ennen retkeä, ilmoita asiasta retkenjohtajalle.
					Jos retkeläinen sairastuu retken aikana, huoltajalla on velvollisuus järjestää lapselle kyyti kotiin.
				</Text>
				<Text>
					Mikäli retkimaksusi on vielä maksamatta, maksathan sen pikimmiten Kauka-Kuutit ry:n tilille FI68 5037 0520
					1154 58 <b>käyttäen viitenumeroa 67946</b>. Hinnat vielä alla:
				</Text>
				<List>
					<Li>Koko retki: 15€</Li>
					<Li>Päivärekti: 5€ (3+ vuotiaille).</Li>
				</List>
				<Text>Muista käyttää viitettä! OP veloittaa hirmuisia summia ilman viitettä saapuneista maksuista.</Text>
			</Section>
			<Section>
				<Section.Title>9. Erityishuomio</Section.Title>
				<Text>
					Retkellä on mukana osallistuja, jolla on <b>vakava pähkinä- ja maapähkinäallergia</b>. Vaikka retkelle saakin
					tuoda pienen määrän omia herkkuja, huolehdithan että mukanasi tai lapsesi mukana ei ole herkkuja tai muita
					ruokia, jotka sisältävät pähkinää tai maapähkinää
				</Text>
			</Section>
			<Section>
				<Text>Tämä on viimeinen retkikirje. Nähdään retkellä!</Text>
				<Text>Mahdollisiin kysymyksiin vastaa</Text>
				<Text>
					Touko Litola, p. <Tel>045 209 3886</Tel>, <MailTo>touko.litola@kauku.fi</MailTo>
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
