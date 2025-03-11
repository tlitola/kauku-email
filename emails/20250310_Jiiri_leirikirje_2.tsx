import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { Img } from '../components/Img';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';

const webVersionUrl = 'https://www.kauku.fi/2025/03/10/jiiri-25-2-leirikirje-ja-ilmoittautuminen/';

export const Template: FC = () => (
	<Email
		titleShort="Jiiri 25 – 2. leirikirje"
		title="Jiiri 25  – 2. leirikirje ja ilmoittautuminen"
		heroImage="https://www.kauku.fi/wp-content/uploads/partio_tarpoja-haikki_20km_20210529_143123-scaled.jpg"
		heroAlt="Maisemakuva metsästä, jossa tarpojat ovat haikilla"
		imageSource="Kansikuva: Tarpojien haikki vuodelta 2021"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper alternateColors={false}>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Järjestämme yhdessä Korson Honkapartio ry:n kanssa kesäleirin Hämeen Partiopiirin leirialueella{' '}
					<b>Rismalahdessa Asikkalassa 25.-29.6.</b>
				</Text>
				<Text>
					Jiiri, mikä on jiiri, mitä tarkoittaa jiiri, mistä nimi Jiiri? Tässä muutamia kysymyksiä, joita on ilmaantunut
					kesäleirin nimeen liittyen.
				</Text>
				<Text>
					Jiiri on terminä monelle tuttu, ja moni jopa pystyy kuvittelemaan mitä se tarkoittaa, mutta lyhyesti sanottuna
					jiiri on kaksi asiaa saumattomasti toisiinsa liittävä termi. Termi on tutumpi toki rakennusmaailmasta ja mm.
					jiirilaatikosta tai -sahasta.
				</Text>
				<Text>
					Tästä myös muodostui leirin nimi, joka saumattomasti liittää yhteen kaksi lippukuntaa kesäleirin ajaksi ja
					varmasti rakentaa ystävyyttä yli rajojen senkin jälkeen! Nimenä se myös sopii erittäin hyvin leirin teemaan,
					joka on rakentelu ja nikkarointi!
				</Text>
				<Text>
					Mikä sen parempaa kuin liittää kaksi lippukuntaa saumattomasti yhteen, sekä toteuttaa mitä mahtavimpia
					nikkarointeja ja rakenteluja!
				</Text>
				<Text>
					Luvassa kaikenmoista mahtavaa käsillä tekemistä, hyvää ruokaa, hyvää seuraa ja kaunista Rismalahtea Päijänteen
					rannalla!
				</Text>
				<Text>Jiiriterveisin Leirijohtajat Anna & Ira</Text>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final={true}>
			<Section>
				<Section.Title>Lisätietoa leiristä</Section.Title>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final={true}>
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top" align="center">
						<Section.SubTitle>Leirimerkki</Section.SubTitle>
						<Img
							src="https://www.kauku.fi/wp-content/uploads/jiiri-logo-lapinakyva-tausta.png"
							alt="Jiiri25 logo"
							width={150}
						/>
					</Column>
					<Column className="w-2/3">
						<Text>Samassa rytäkässä on myös leirimerkki päätetty ja se on aivan mahtavan upea, katso vaikka itse!</Text>
						<Text>
							Ehdotuksia tuli useita ja tämä valittiin äänestämällä leiritoimikunnan kesken. Merkin suunnitteli Team
							Viljanen KHP:sta.
						</Text>
						<Text>
							Leirimerkin värimaailma koostuu lippukuntien väreistä, Kauka-Kuuttien sinisestä ja Korson Honkapartion
							vihreästä. Kesäinen oranssi toimii itse leirin värinä ja merkistä huokuu leirin teema mahtavasti! Merkin
							asettelu muodostaa saumattoman liitoksen taivaan ja maan välillä, joten se on hyvässä jiirissä.
						</Text>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.SubTitle>Otetaan vastaan 🙂</Section.SubTitle>
				<Text>
					Olisiko sinulla ylimääräistä lautaa/puutavaraa/narua/nauloja/maalia/yms. rakennustarviketta, joista olisit
					innokas luopumaan ja lahjoittamaan sen meidän kesäleirin teeman mukaiseen rakenteluun ja nikkarointiin?
				</Text>
				<Text>
					Laita sähköpostilla tietoa tarjolla olevasta materiaalista:{' '}
					<Link href="mailto:jiiri25@korsonhonkapartio.fi">jiiri25@korsonhonkapartio.fi</Link> (myös Kauka-Kuuttien
					huoltajat/jäsenet) ja olemme yhteydessä sinuun, jos tarjoamasi materiaali on yhä tarpeen!
				</Text>
				<Text>
					Tarjota saa kaikkea mahdollista listattua, kierrättäminen kannattaa ja leirikulut pysyvät pienempinä!
				</Text>
			</Section>
			<Section>
				<Section.SubTitle>Ilmoittautuminen</Section.SubTitle>
				<Text>
					Ilmoittautuminen on nyt auki! <b>Aikaa ilmoittautua on 28.3. asti</b>, joten toimithan nopeasti ja varmistat
					paikkasi kesän mahtavimmalle kesäleirille! Perhepartiolle tulee oma ilmoittautuminen myöhemmin.
				</Text>
				<Text>
					Onko herännyt kysyttävää? Ole meihin yhteydessä:{' '}
					<Link href="mailto:jiiri25@korsonhonkapartio.fi">jiiri25@korsonhonkapartio.fi</Link> (myös Kauka-Kuuttien
					huoltajat/jäsenet)
				</Text>
				<Link variant="button" href="http://kuksaan.fi/79811">
					Ilmoittaudu kesäleirille
				</Link>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
