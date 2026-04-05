import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, Tel } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2026/03/17/kimin-kevainen-kiepautus-20-3-22-3-2-retkikirje/';

export const Template: FC = () => (
	<Email
		titleShort="Kimin keväinen kiepautus – 2. Retkikirje"
		title="Kimin keväinen kiepautus 20.3.–22.3. – 2. retkikirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/cropped-2021talvimaisema_metsa-scaled-1.jpg"
		heroAlt=""
		imageSource="Kauka-Kuutit – Katariina Luukkanen"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Kevätretkelle on ilmoittautunut yhteensä 34 retkeläistä – hienoa, että sinäkin olet lähdössä mukaan!
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
						<Text>Kimin keväinen kiepautus</Text>
					</Column>
				</Row>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Ajankohta</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<List>
							<Li>Koko retki: 20.3. klo 18:30 – 22.3. klo 13:00</Li>
							<Li>Perhepartio: 21.3. klo 10:00 – 13:00</Li>
						</List>
					</Column>
				</Row>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Retken johtajat</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Olle Suni, p. <Tel>044 322 3352</Tel>
							<br />
							Hilla Sallinen, p. <Tel>045 695 4808</Tel>
						</Text>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>2. Retkipaikka</Section.Title>
				<Text>
					<Link href="https://kime.fi/karhukolo/">Kirkkonummen Metsänkävijöiden (KiMe) Karhukolo</Link>
					<br />
					Dalkullantie 162
					<br />
					02400 Kirkkonummi
				</Text>
				<Text className="italic text-gray-700">
					Koordinaatit: 60.153806, 24.442972 tai 60°09&apos;14.0&quot;N 24°26&apos;35.4&quot;E
				</Text>
			</Section>
			<Section>
				<Section.Title>3. Kuljetukset</Section.Title>
				<Text>Kuljetukset retkelle ja pois retkeltä tapahtuu julkisilla ja kimppakyydein.</Text>
				<Text>
					<b>Tarpojat ja samoajat</b> (poislukien keittiöpestissä olevat) kulkevat retkelle julkisilla
					liikennevälineillä. Retkimatkaan sisältyy tällöin <b>noin 2,5 km kävely</b>, pakkaattehan tavarat sen
					mukaisesti!
				</Text>
				<Text>
					<b>Tarpojia nuoremmat ikäkaudet</b> tulevat retkelle lähtökohtaisesti kimppakyydeillä.
				</Text>
				<Text>
					<b>Lähtö</b>
				</Text>
				<List>
					<Li>
						<b>Tarpojat ja Samoajat: 20.3. klo. 17:00</b> Kauklahden aseman 1 raiteelta. Juna lähtee klo 17:11.
					</Li>
					<Li>
						<b>Sudenpennut ja Seikkailijat 20.3. klo. 17:45</b> Kauklahden aseman liityntäpysäköinnistä osoitteessa
						Vantinportti 5. Lähdemme ajamaan kohti retkipaikkaa kello 18:00, joten olethan ajoissa paikalla!
					</Li>
				</List>
				<Text>
					<b>Paluu</b>
				</Text>
				<List>
					<Li>
						<b>Sudenpennut ja Seikkailijat: 22.3. klo 13:00</b> Karhukololta. Takaisin Kauklahdessa noin kello 13:30.
					</Li>
					<Li>
						<b>Tarpojat ja Samoajat: 22.3. noin klo 12:40</b> Karhukololta. Takaisin Kauklahdessa noin kello 13:50.
					</Li>
				</List>
				<Text>
					<b>Perhepartio</b>
				</Text>
				<List>
					<Li>Perhepartiolaiset huolehtivat omista kyydityksistä.</Li>
				</List>
				<Text>
					Retkeilijät jätetään parkkipaikalle ja siitä kävellään kämpälle. Samalta parkkipaikalta retkeilijät noudetaan
					sunnuntaina. Parikkipaikalla on tilaa rajatulle määrälle autoja, ja kelirikko voi vaikuttaa kämpälle pääsyyn.
				</Text>
			</Section>
			<Section>
				<Section.Title>4. Majoitus</Section.Title>
				<Text>
					Retkellä kaikki <b>seikkailijat</b> nukkuvat lähtökohtaisesti ulkona kamiinalla lämmitetyssä teltassa.
					Varauduthan siis riittävän lämpimällä makuupussilla ja paksulla makuualustalla, jotta yö teltassa sujuu
					mukavasti.
				</Text>
				<Text>
					Kämpällä ei ole tiettävästi patjoja, joten myös sisällä nukkuvien tulee ottaa mukaan{' '}
					<b>oma makuualusta ja makuupussi</b>.
				</Text>
			</Section>
			<Section>
				<Section.Title>5. Pukeutuminen</Section.Title>
				<Text>
					Viikonlopun sääennuste näyttää tällä hetkellä mukavan poutaiselta. Varaudu kuitenkin vaihtelevaan ja talviseen
					säähän.
				</Text>
				<Text>
					Retkellä ollaan paljon ulkona säästä riippumatta, joten huolehdithan mukaan sään mukaisen varustuksen.{' '}
					<b>Villasukat ja kumpparit ovat lähtökohtaisesti hyvä kombo retkijalkineiksi.</b>
				</Text>
			</Section>
			<Section>
				<Section.Title>6. Varusteet</Section.Title>
				<Text>
					Tarkempi varusteluettelo löytyy lippukunnan nettisivuilta:
					<Link href="https://www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/">
						https://www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/
					</Link>
				</Text>
				<Text>
					Retkelle saa tuoda mukana pienen määrän omia herkkuja, mutta niiden tarkoitus ei ole korvata retkellä
					tarjottavia ruokia. Herkkuja saa retkellä syödä vapaa-ajalla.
				</Text>
				<Text>
					Retkellä harjoitellaan puukon käyttöä. Jos partiolainen omistaa oman puukon, sen voi ottaa mukaan retkelle.
					Puukkoa saa käyttää vain sille erikseen osoitetulla alueella johtajan valvonnan alaisena. Muina aikoina puukon
					tulee pysyä rinkassa. Jos puukkojen kanssa tulee ongelmia, johtajat voivat kerätä ne pois partiolaisilta.
				</Text>
				<Text>
					Pyri pakkaamaan kaikki tavarat rinkan / repun sisälle, niin että niiden kanssa on helppo kävellä.{' '}
					<b>Muistathan nimikoida kaikki tavarasi!</b>
				</Text>
				<Text>
					Lauantai-iltana on mahdollisuus <b>peseytymiseen ja saunomiseen</b>. Jos kaipaatte retkellä yksityistä aikaa
					peseytyä, voitte kysyä asiasta retken johtajilta.
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
					Tapahtuman häirintäyhdyshenkilöinä eli turva-aikuisina toimivat Olle Suni, p. <Tel>044 322 3352</Tel> ja Anna
					Kunnas, puh. <Tel>050 4581670</Tel>
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
					1154 58 <b>käyttäen viitenumeroa 40798</b>. Hinnat vielä alla:
				</Text>
				<List>
					<Li>Koko retki: 15€</Li>
					<Li>Perhepartiolaisille retken hinta on 5€ (3+ vuotiaille).</Li>
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
				<Text>Mahdollisiin kysymyksiin vastaavat</Text>
				<Text>
					Olle Suni, p. <Tel>044 322 3352</Tel>
					<br />
					Hilla Sallinen, p. <Tel>045 695 4808</Tel>
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
