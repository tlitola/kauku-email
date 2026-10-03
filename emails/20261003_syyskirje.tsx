import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link, MailTo } from '../components/Link';
import { InfoText } from '../components/InfoText';
import { Li, List } from '../components/List';
import { Column, Row } from '@react-email/components';
import { Img } from '../components/Img';

const webVersionUrl = 'https://www.kauku.fi/2026/10/03/kauka-kuuttien-syyskirje/';

export const Template: FC = () => (
	<Email
		titleShort="Kuuttien syyskirje"
		title="Kauka-Kuuttien syyskirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/img_3238-scaled.jpeg"
		heroAlt=""
		imageSource="Kauka-Kuutit – Touko Litola"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final alternateColors>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>
					Lehdet putoilevat pikkuhiljaa puista ja syksy lähestyy. Tästä viestistä löydät tärkeää tietoa Kauka-Kuuttien
					syksyyn liittyen!
				</Text>
				<Text>
					Muistathan myös ilmoittautua Soinnun Sykkivä Sydän -syysretkelle. Lippukunnan syysretken ilmoittautuminen on
					auki 16.10. asti: <Link href="https://kuksaan.fi/96439">kuksaan.fi/96439</Link>
				</Text>
				<Text>
					<b>Tässä viestissä</b>
				</Text>
				<List variant="ordered">
					<Li>Kauka-Kuuttien vaatteet</Li>
					<Li>Syysloma ja syyskausi</Li>
					<Li>Kestävästi partiossa</Li>
					<Li>Verkkosivun uudistukset</Li>
				</List>
			</Section>
			<Section>
				<Section.Title>Kauka-Kuuttien vaatteet</Section.Title>
				<Row>
					<Column className="w-2/3 pl-md text-start" valign="top" align="center">
						<Text>Kauka-Kuuteille on luotu uusi vaatemallisto yhteistyössä Rockserin (R-Collection) kanssa.</Text>
						<Text>
							Nyt on siis oiva mahdollisuus hankkia itsellenne KauKun logolla varustettuja huppareita, T-paitoja ja
							Anorakkeja!
						</Text>
						<Text>
							Vaatteet on luotu lippukunnan jäsenten toiveesta ja vaatteissa olevasta logosta äänestettiin viime vuoden
							syysretkellä. Voittaneen logon suunnitteli Touko Litola.
						</Text>
						<Text>Lippukunta ei tee myynnillä varainhankintaa ja Rockseri vastaa tuotteiden myynnistä täysin.</Text>
						<Text>
							Lippukunnalla on hupparista ja T-paidasta L ja 12A (12 vuotialle) kokoiset sovituskappaleet. Näitä voi
							sovittaa lippukunnan syysretkellä tai kokouksien yhteydessä.
						</Text>
						<Link variant="button" href="https://www.rockseri.fi/category/401" location="center">
							Verkkokauppaan -&gt;
						</Link>
					</Column>
					<Column className="w-1/3">
						<Img
							src="https://www.kauku.fi/wp-content/uploads/kauku_logo_uusi-scaled.png"
							className="w-full"
							alt="Kauka-Kuuttien uusi logo"
						/>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>Syysloma ja syyskausi</Section.Title>
				<Text>
					Myös Kauka-Kuutit lomailevat syyslomalla viikolla 42 (12.–18.10.) eikä silloin järjestetä kokouksia. Kokoukset
					jatkuvat taas viikolla 43!
				</Text>
				<Text>
					Kauka-Kuuttien syyskausi jatkuu aina viikolla 50 asti, jolloin järjestetään viimeiset kokoukset. Tämän jälkeen
					järjestetään vielä lippukunnan puurojuhla, joka järjestetään alustavasti maanantaina 21.12., ennen joulun
					viettoon siirtymistä.
				</Text>
			</Section>
			<Section>
				<Section.Title>Kestävästi partiossa</Section.Title>
				<Row>
					<Column className="w-2/3 pl-md text-start" valign="top" align="center">
						<Text>
							Kauka-Kuuteille on myönnetty Kestävästi Partiossa -tunnus osoituksena lippukunnan pyrkimyksestä toimia
							kestävän kehityksen periaatteiden mukaan.
						</Text>
						<Text>
							Tunnus myönnetään lippukunnille, jotka täyttävät toiminnassaan vakiintuneesti vähintään 25 tunnuksen
							kriteeriä. Tunnus on voimassa aina hakuvuodesta seuraavan kalenterivuoden loppuun.
						</Text>
						<Text>
							Lisätietoa tunnuksesta ja tunnuksen tarkan merkityksen ja kriteerit löytyy lippukunnan verkkosivuilta!
						</Text>
						<Link href="https://www.kauku.fi/lippukunta/kestavasti-partiossa/" variant="button" location="center">
							Lue lisää Kestävästi Partiossa -tunnuksesta
						</Link>
					</Column>
					<Column className="w-1/3">
						<Img
							src="https://www.kauku.fi/wp-content/uploads/medium_kestavasti_partiossa_tunnus_pyorea.webp"
							className="w-full"
							alt="Kauka-Kuuttien uusi logo"
						/>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>Verkkosivun uudistukset</Section.Title>
				<Text>
					Lippukunnan verkkosivuille on tehty syksyn aikana pieniä parannuksia ja nyt esimerkiksi navigointi
					mobiililaitteella toimii taas ja on entistä helpompaa ja sujuvampaa!
				</Text>
				<Text>
					Jos kohtaatte verkkosivuillamme (<Link>kauku.fi</Link>) ongelmia tai saatte ideoita, miten niitä voisi
					parantaa, voitte olla yhteydessä WWW-vastaava Toukoon (<MailTo>touko.litola@kauku.fi</MailTo>).
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
