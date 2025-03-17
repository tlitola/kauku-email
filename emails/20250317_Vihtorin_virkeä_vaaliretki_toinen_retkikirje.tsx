import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2025/03/17/vihtorin-virkea-vaaliretki-2-retkikirje/';

export const Template: FC = () => (
	<Email
		titleShort="Vihtorin Virkeä Vaaliretki – 2. Retkikirje"
		title="Vihtorin Virkeä Vaaliretki"
		heroImage="https://www.kauku.fi/wp-content/uploads/vaalipollo-e1739488088566.jpeg"
		heroAlt="Vaalipöllö"
		imageSource="Suomen Partiolaiset – Vaalipöllö"
		webVersionurl={webVersionUrl}
		recipients="Retkelle ilmoittautuneet huoltajineen"
	>
		<SectionsWrapper final alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Kevätretkelle on ilmoittautunut kaiken kaikkiaan 44 retkeilijää! Hienoa, että sinäkin olet lähdössä mukaan!
				</Text>
				<Text>Luethan kirjeen kokonaan ja huolellisesti.</Text>
				<Text>Tässä kirjeessä:</Text>
				<Text>
					1. Yleistä
					<br />
					2. Retkipaikka
					<br />
					3. Kuljetukset
					<br />
					4. Majoitus
					<br />
					5. Varusteluettelo
					<br />
					6. Lisätietoa
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>1. Yleistä</Section.SubTitle>
				<Text>
					<b>Retken nimi:</b> Vihtorin virkeä vaaliretki
				</Text>
				<Text>
					<b>Retken ajankohta:</b>
				</Text>
				<Text>
					21.3. klo 17.30 - 22.3. klo 16.30 Rohkeat Apinat ja Tähtipanssariketut
					<br />
					22.3. klo 9.00 - 23.3. klo 14.30 Vesikauhu ja Salama-Ketut
					<br />
					22.3. klo 10.00-12.00 Perhepartio
					<br />
				</Text>
				<Text>
					<b>Johtajat</b>
				</Text>
				<Text>
					Touko Litola, <Link href="tel:045 209 3886">p. 045 209 3886</Link>,{' '}
					<Link href="mailto:touko@litola.net">touko@litola.net</Link>
					<br />
					Anna Kunnas, <Link href="tel:050 458 1670">p. 050 458 1670</Link>,{' '}
					<Link href="mailto:anna.nummela@gmail.com">anna.nummela@gmail.com</Link>
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>2. Retkipaikka</Section.SubTitle>
				<Text>Kattilaniemen leirikeskus, Kattilajärventie 30 Espoo</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>3. Kuljetukset</Section.SubTitle>
				<Text>
					<b>Lähtö:</b>
				</Text>
				<Text>
					<b>Rohkeat Apina ja Tähtipanssariketut</b>
					<br />
					Perjantaina <b>21.3.2025 klo 17.30 osoitteessa Vantinportti 5</b>, Espoo. Jaamme kyydintarvitsijat vanhempien
					autoihin ja lähdemme matkaan.
				</Text>
				<Text>
					<b>Vesikauhu ja Salama-Ketut</b>
					<br />
					Lauantaina <b>22.3.2025 lähtö Vantinportti 5:stä</b> (pysäköintialue) <b>klo 9:00</b> yhteiskyydeillä
					vanhempien kyydeillä.
				</Text>
				<Text>
					<b>Ketunpennut:</b>
					<br />
					Omilla kyydeillä Kattilajärvelle. Suosi kimppakyytejä mahdollisuuksien mukaan. Ohjelma alkaa leirikeskuksella
					klo 10.00. Perhepartiolaiset voivat ajaa leirikeskuksen parkkipaikalle tieolosuhteet huomioiden.
				</Text>
				<Text>
					<b>Paluu:</b>
				</Text>
				<Text>
					<b>Rohkeat Apina ja Tähtipanssariketut</b>
					<br />
					Lauantaina <b>22.3.2025 lähtö Kattilajärveltä noin kello 16.00</b> yhteiskyydeillä vanhempien toimesta. Olemme
					Vantinportti 5:ssä noin kello 16.30.
				</Text>
				<Text>
					<b>Vesikauhu ja Salama-Ketut</b>
					<br />
					Sunnuntaina <b>23.3.2025 lähtö Kattilajärveltä noin kello 14.00</b> yhteiskyydeillä vanhempien toimesta.
					Olemme Vanttiportti 5:ssä noin kello 14.30.
				</Text>
				<Text>
					<b>Autot tyhjennetään ja pakataan Kattilajärventien ja Erä-Mattilan tien risteyksessä olevassa lenkissä.</b>{' '}
					Tästä eteenpäin jatkamme jalkaisin mahdollisesta kelirikosta johtuen.
				</Text>
				<Text>
					<b>Kyytijärjestelyistä ilmoitetaan etukäteen Whatsapp-ryhmissä.</b>
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>4. Majoitus</Section.SubTitle>
				<Text>
					Tähtipanssariketut, Vesikauhu ja Salama-Ketut nukkuvat ensisijaisesti lämmitetyssä teltassa.{' '}
					<b>Varaa mukaan siis paksumpi makuupussi ja -alusta, ettei nukkuessa tule kylmä.</b> Jonkin verran
					nukkumapaikkoja on sisällä leirikeskuksessa, mikäli varusteita ei löydy, mutta nämä ryhmät nukkuvat
					ensisijaisesti ulkona.
				</Text>
				<Text>
					Sisällä nukkujat tarvitsevat mukaan makuupussin lisäksi <b>aluslakanan</b>.
				</Text>
				<Text>Rohkeat Apinat nukkuvat sisällä.</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>5. Varusteluettelo</Section.SubTitle>
				<Text>
					<b>Retkellä olemme ulkona säästä riippumatta</b>, joten huolehdithan matkaan sään mukaisen varustuksen.
				</Text>
				<Text>
					Tarkemman varusteluettelon löydät lippukunnan nettisivuilta:{' '}
					<Link href=">https://www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/">
						https://www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/
					</Link>
				</Text>
				<Text>
					<b>HUOM! Sisällänukkujat tarvitsevat oman aluslakanan mukaan! </b>
				</Text>
				<Text>
					Lauantai-iltana järjestetään mahdollisesti mahdollisuus saunomiseen ja uimiseenkin, joten Vesikauhu ja
					Salama-Ketut voivat pakata matkaan uikkarit ja pyyhkeen.
				</Text>
				<Text>Muistathan nimikoida kaikki tavarasi!</Text>
				<Text>
					Pyri pakkaamaan kaikki tavarat rinkan/repun sisälle, niin että niiden kanssa on helppo kävellä. Käveltävää
					autoilta retkipaikalle on n. 400 metriä.
				</Text>
				<Text>
					Omaa kännykkää tai muuta elektroniikkaa ei tarvitse retkellä. Jos kuitenkin otat mukaasi kännykän tai muuta
					elektroniikkaa, teet sen omalla vastuullasi. Partiovakuutus ei kata elektronisten laitteiden rikkoutumista.
					Retken aikana osallistujat pitävät matkapuhelimensa rinkassa suljettuna ja jos tämä ei onnistu, puhelimet
					voidaan kerätä päivän ohjelman ajaksi johtajien haltuun. Retkeläisillä ei ole mahdollisuutta ladata
					matkapuhelinta retkellä. Tarvittaessa lapsi/lapseen saa yhteyden retken johtajien kautta.
				</Text>
			</Section>
			<Hr />
			<Section>
				<Section.SubTitle>6. Lisätietoa</Section.SubTitle>
				<Text>
					Retkelle osallistutaan ainoastaan terveenä. Mikäli sairastut ennen retkeä, ilmoita asiasta retkenjohtajalle.
					Jos retkeläinen sairastuu retken aikana, huoltajalla on velvollisuus järjestää lapselle kyyti kotiin.
				</Text>
				<Text>
					Mikäli retkimaksusi on vielä maksamatta, maksathan sen pikimmiten Kauka-Kuutit ry:n tilille FI68 5037 0520
					1154 58 <b>käyttäen viitenumeroa 20530</b>. Hinnat vielä alla:
				</Text>
				<Text>
					Yksi yö 10 €<br />
					Perhepartio la aamupäivä 0 €<br />
					Johtaja- ja huoltotehtävissä oleville retki on maksuton.
				</Text>
				<Text>Muista käyttää viitettä! OP veloittaa hirmuisia summia ilman viitettä saapuneista maksuista.</Text>
				<Text>Tämä on viimeinen retkikirje. Tavataan retkellä! 😊</Text>
			</Section>
			<Hr />
			<Section>
				<Text>
					<b>Kysymyksiin vastaavat</b>
				</Text>
			</Section>
			<Section multiRow>
				<Row>
					<Column>
						<Text>Touko Litola</Text>
						<Text>Retken johtaja</Text>
						<Text>
							<Link href="tel:045 209 3886">puh. 045 209 3886</Link>
						</Text>
						<Text>
							<Link href="mailto:touko@litola.net">touko@litola.net</Link>
						</Text>
					</Column>
					<Column>
						<Text>Anna Kunnas</Text> <Text>Retken johtaja</Text>
						<Text>
							<Link href="tel:050 458 1670">puh. 050 458 1670</Link>
						</Text>
						<Text>
							<Link href="mailto:anna.nummela@gmail.com">anna.nummela@gmail.com</Link>
						</Text>
					</Column>
				</Row>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
