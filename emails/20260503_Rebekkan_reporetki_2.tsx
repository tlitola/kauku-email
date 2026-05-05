import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, Tel } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';

const webVersionUrl = 'https://www.kauku.fi/2026/05/05/rebekkan-reporetki-14-5-16-5-2-retkikirje/';

export const Template: FC = () => (
	<Email
		titleShort="Rebekkan reporetki – 2. Retkikirje"
		title="Rebekkan reporetki 14.5.–16.5. – 2. retkikirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/partio_vaellus_jan_lindstrom.jpg"
		heroAlt=""
		imageSource="Suomen Partiolaiset – Jan Lindstrom"
		recipients="Vaelluksen osallistujat huoltajineen"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Vaellukselle on nyt lähdössä 6 henkilöä! Mahtavaa, että vaellus toteutuu! Vaelluksen kestoksi valikoitui
					äänestyksen pohjalta 14.5.–16.5.
				</Text>
				<Text>
					Luethan tämän kirjeen kokonaan ja huolellisesti. Tässä kirjeessä kerrotaan vaelluksen käytännön
					järjestelyistä.
				</Text>
				<Text>
					Muistattehan myös, että vaellukseen liittyen järjestetään infotilaisuus osallistujille ja huoltajille 8.5. klo
					18:00–19:30.
				</Text>
				<Text>
					Tässä kirjeessä:
					<br />
					1. Yleistä
					<br />
					2. Vaellusreitti
					<br />
					3. Kuljetukset
					<br />
					4. Majoitus
					<br />
					5. Pukeutuminen
					<br />
					6. Vaellukselle valmistautuminen
					<br />
					7. Turvallisuus
					<br />
					8. Lisätietoa
				</Text>
			</Section>
			<Section multiRow>
				<Section.Title>1. Yleistä</Section.Title>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Vaelluksen nimi</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>Rebekkan reporetki</Text>
					</Column>
				</Row>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Ajankohta</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<List>
							<Li>14.5. klo 8:30 – 16.5. n. klo 16:00–20:00</Li>
						</List>
						<Text>
							Vaelluksen loppumisaika on vielä auki, ja se riippuu lauantain vaellusnopeudesta. Alustava arvio
							päätösajankohdasta on kello 16 ja 20 välillä, mutta viestimme tarkemman ajankohdan, kun lähdemme
							paluumatkalle.
						</Text>
					</Column>
				</Row>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Vaelluksen johtaja</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Touko Litola, p. <Tel>045 209 3886</Tel>
						</Text>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>2. Vaellusreitti</Section.Title>
				<Text>
					Kierrämme vaelluksen aikana Repoveden kansallispuiston Kaakkurinkierroksen vastapäivään Lapinsalmen
					pysäköintialueelta lähtien.
				</Text>
				<Text>
					Reittisuunnitelmaa voi esikatsella oheisesta linkistä:{' '}
					<Link href="https://www.outdooractive.fi/fi/route/usean-paeivaen-vaellus/kymenlaakso/rebekkan-reporetki-kevaetvaellus/332995170/?share=%7E33emiscx%244ossqznh">
						Reittisuunnitelma
					</Link>
					. Vaelluksen pituus on yhteensä 26km.
				</Text>
				<Text>Alustavat yöpymispaikat ovat</Text>
				<List>
					<Li>
						<Link href="https://www.luontoon.fi/fi/kohteet/repoveden-kansallispuisto/palvelu/kirnukangas-laavu-laavu-39294">
							Kirnukangas
						</Link>
					</Li>
					<Li>
						<Link href="https://www.luontoon.fi/fi/palvelut/olhava-opastustaulu-opastustaulu-187740">Olhava</Link>
					</Li>
				</List>
			</Section>
			<Section>
				<Section.Title>3. Kuljetukset</Section.Title>
				<Text>Kuljetukset retkelle ja pois retkeltä tapahtuu yhteisellä autokyydillä.</Text>
				<Text>
					<b>Lähtö</b>: 14.5. klo 8:30 Lippukunnan kololta osoitteessa Hansatie 2B. Pakkaamme yhteiset tavarat
					rinkkoihin, jonka jälkeen lähdemme matkaan.
				</Text>
				<Text>
					<b>Paluu</b>: 16.5. illalle Lippukunnan kololle, jossa puramme yhteiset tavarat ennen kotiinlähtöä. Viestimme
					tarkemmasta aikataulusta lauantaina.
				</Text>
				<Text>Ajomatkan pituus on noin 2 tuntia ja 30 minuuttia, ja suunnitteilla on pitää tauko ennen Kouvolaa.</Text>
			</Section>
			<Section>
				<Section.Title>4. Majoitus</Section.Title>
				<Text>
					Vaelluksella nukutaan ulkona lämmittämättömässä laavussa. Varauduthan siis riittävän lämpimällä makuupussilla
					ja paksulla makuualustalla, jotta yöt laavussa sujuvat mukavasti. Lämpötila Repovedellä voi pudota lähelle
					nollaa öisin, joten lämmin makuupussi ja oikea pukeutuminen ovat erityisen tärkeitä jaksamiselle.
				</Text>
			</Section>
			<Section>
				<Section.Title>5. Pukeutuminen</Section.Title>
				<Text>
					Vaelluksen aikana ei ole mahdollista päästä sisälle, joten huolehdithan mukaan säänmukaisen varustuksen.
				</Text>
				<Text>
					Vaeltaessa kerrospukeutuminen ja hyvä kosteudensiirto ovat erityisen tärkeitä. Liikkuessa tärkeintä on, että
					hiki pääsee siirtymään pois iholta, jolloin ei tule kylmä ja epämukava niin nopeasti. Hyviä vaihtoehtoja on
					erilaiset tekniset kuidut tai merinovilla. Alimman kerroksen päällä kannattaa olla lämpimämpiä ja suojaavia
					kerroksia sään mukaisesti, joita voi tarvittaessa ottaa pois tai lisätä. Taukoja varten mukana on hyvä olla
					jokin helposti päälle saatava takki.
				</Text>
				<Text>
					Viikonlopun sääennuste näyttää tällä hetkellä mukavan poutaiselta, mutta sääennustusta kannattaa seurata
					kuitenkin vielä lähempänä vaellusta. Varaudu joka tapauksessa vaihtelevaan ja märkään säähän. Mukana on hyvä
					olla ainakin sateenpitävä kuoritakki ja -housut, sekä kuivia vaihtovaatteita. Mukavuuden kannalta erityisen
					tärkeitä ovat kuivat vaihtosukat.
				</Text>
				<Text>
					Vaelluksen maasto ei ole erityisen kivikkoista, joten kengiksi vaellukselle sopii joko lenkkarit tai
					vaelluskengät. Tärkeintä on, että kengät istuvat hyvin ja ovat sisäänajetut. Mukana on lisäksi hyvä olla
					kevyemmät kengät, kuten Crocsit, iltoja varten.
				</Text>
			</Section>
			<Section>
				<Section.Title>6. Vaellukselle valmistautuminen</Section.Title>
				<Text>
					Tarkempi varusteluettelo löytyy lippukunnan nettisivuilta:{' '}
					<Link>https://www.kauku.fi/pakkauslista-vaellukselle/</Link>
				</Text>
				<Text>
					<b>Huomioittehan, että joudumme pakkaamaan myös oman juomaveden vaelluksella.</b> Repovedellä on vesipisteitä
					melko hyvin, mutta jotta vesi riittää juotavaksi, ruoanlaittoon ja tiskiin, vettä olisi hyvä olla mukana{' '}
					<b>2–3l</b>.
				</Text>
				<Text>
					Vaellukselle kannattaa tuoda mukana omia mieluisia herkkuja, jotka auttavat jaksamaan vaelluksella.
					Vaellukselle on mitoitettu lippukunnan puolesta aamupala, lämmin lounas, lämmin päivällinen ja iltapala.
				</Text>
				<Text>
					Kaikki vaellukselle mukaan otettavat tavarat tulee kantaa koko ajan mukana. Erityisen tärkeää on siis rinkan
					oikeaoppinen pakkaaminen. Painavat asiat kannattaa sijoittaa mahdollisimman lähelle rinkan selkää, ja rinkan
					ulkopuolelle kannattaa kinnittää mahdollisimman vähän tavaroita. Tarkemmat ohjeet rinkan pakkaamiseen löytyy
					esimerkiksi Partioaitan verkkosivuilta:{' '}
					<Link>https://www.partioaitta.fi/oppaat/retkeilytaidot/rinkan-pakkaaminen/</Link>.
				</Text>
				<Text>
					<b>Huomioittehan, että rinkan mukaan tulee pakata myös lippukunnan yhteisiä tavaroita</b>, kuten laavut ja
					trangiat. Jätättehän siis myös niille tilaa.
				</Text>
				<Text>
					Vaelluksen aikana ei ole erityistä peseytymismahdollisuutta, mutta rohkeimmat voivat käydä halutessaan uimassa
					alueen vesistöissä. Tätä varten tarvitsette mukaan pyyhkeen, uima-asun ja <b>biohajoavaa</b> pesuainetta.
				</Text>
				<Text>
					Omaa kännykkää tai muuta elektroniikkaa ei tarvitse retkellä. Jos kuitenkin otat mukaasi elektroniikkaa, teet
					sen omalla vastuullasi. Partiovakuutus ei kata elektronisten laitteiden rikkoutumista. Retken aikana
					osallistujat pitävät matkapuhelimensa rinkassa suljettuna ja jos tämä ei onnistu, puhelimet voidaan kerätä
					päivän ohjelman ajaksi johtajien haltuun. Retkeläisillä ei ole mahdollisuutta ladata matkapuhelinta retkellä.
					Tarvittaessa lapsi/lapseen saa yhteyden retken johtajien kautta.
				</Text>
				<Text>
					Repoveden kansallispuistossa on joitain katvealueita, mutta puhelimen kuuluvuus alueella on yleisesti ottaen
					riittävä puheluille.
				</Text>
			</Section>
			<Section>
				<Section.Title>7. Turvallisuus</Section.Title>
				<Text>
					Vaelluksella on voimassa{' '}
					<Link href="https://papa.partio.fi/partiolaiselle/tapahtumaosallistujalle/turvallisemman-tilan-periaatteet/">
						Suomen Partiolaisten turvallisemman tilan periaatteet
					</Link>
					.
				</Text>
				<Text>
					Tapahtuman häirintäyhdyshenkilöinä, eli turva-aikuisena, toimii Heitu Taskinen, p. <Tel>050 355 4213</Tel>.
				</Text>
				<Text>
					Turva-aikuisten kanssa voi jutella, jos jokin painaa mieltä. Turva-aikuiset neuvovat ja tukevat, jos
					partiolainen on kohdannut häirintää, syrjintää, kiusaamista tai muuta epätasa-arvoista kohtelua tapahtumassa.
					Turva-aikuisen kanssa käydyt keskustelut ovat aina luottamuksellisia.
				</Text>
				<Text>
					Vaellus kuljetaan ryhmässä ja merkittyä reittiä pitkin. Vaelluksella on mukana 2 karttaa, ja vaelluksen
					johtajalla on mukana puhelin vara-akun kanssa. Vaelluksella kuljetaan aina ryhmässä, ja mukaan on lähdössä 2
					johtajaikäistä partiolaista, joilla kummallakin on aiempaa vaelluskokeumusta.
				</Text>
				<Text></Text>
			</Section>
			<Section>
				<Section.Title>8. Lisätietoa</Section.Title>
				<Text>
					Vaellukselle osallistutaan ainoastaan terveenä. Mikäli sairastut ennen retkeä, ilmoita asiasta
					retkenjohtajalle.
				</Text>
				<Text>
					Mikäli retkimaksusi on vielä maksamatta, maksathan sen pikimmiten Kauka-Kuutit ry:n tilille FI68 5037 0520
					1154 58 <b>käyttäen viitenumeroa 75954</b>. Vaelluksen hinta on 45€.
				</Text>
				<Text>Muista käyttää viitettä! OP veloittaa hirmuisia summia ilman viitettä saapuneista maksuista.</Text>
			</Section>
			<Section>
				<Text>Tämä on viimeinen retkikirje. Nähdään vaelluksella ja infotilaisuudessa!</Text>
				<Text>Mahdollisiin kysymyksiin vastaa</Text>
				<Text>
					Touko Litola, p. <Tel>045 209 3886</Tel>
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
