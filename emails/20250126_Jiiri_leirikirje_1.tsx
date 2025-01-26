import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { Img } from '../components/Img';
import { InfoText } from '../components/InfoText';
import { Column, Row } from '@react-email/components';
import { Li, List } from '../components/List';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2025/01/25/kesaleiri-jiiri-25-25-29-6-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Jiiri 25 – 1. leirikirje"
		title="Jiiri 25"
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
					Luvassa tulee olemaan lippukunnat yhteen liittävä, ohjelmarikas, hauska ja mahdottoman partiohenkinen leiri
					upeissa maisemissa Päijänteen rannalla. Leiri toteutetaan yhteistyössä paripestein, joten omasta lippukunnasta
					löytyy varmaa tietoa mitä, missä ja milloin tapahtuu!
				</Text>
				<Text>Rismalahteen matkaamme mukavasti yhteiskuljetuksella!</Text>
				<Text>
					Ilmoittautuminen leirille aukeaa maaliskuun alussa, joten ole valmiina tarttumaan toimeen ja lähde kokemaan
					kesäleirin mahtava tunnelma! Partiolainen on aina valmiina, joten tämä tulee olemaan helppoa!
				</Text>
				<Text>
					Lisätietoja leiristä tipahtelee säännöllisesti sähköpostiin ja lippukuntien sosiaalisiin medioihin, joten pidä
					sähköposti lähellä ja käy seuraamassa meitä somessa!
				</Text>
				<Text>
					Terveisin
					<br />
					Leirinjohtajat Anna (Kauka-Kuutit) ja Ira (Korson Honkapartio)
				</Text>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final={true} alternateColors={false}>
			<Section>
				<Section.Title>Tietoisku lippukunnista ja leirialueesta</Section.Title>
			</Section>
			<Section multiRow>
				<Row>
					<Column className="w-1/3 pr-md" valign="top" align="center">
						<Section.SubTitle>Kauka-Kuutit</Section.SubTitle>
						<Img src="https://www.kauku.fi/wp-content/uploads/kauku-e1735839745743.png" alt="KauKu logo" width={96} />
					</Column>
					<Column className="w-2/3">
						<List className={'list-["\\269C"] '}>
							<Li>Sekalippukunta Espoon Kauklahdesta.</Li>
							<Li>Jäseniä n. 100 hlö.</Li>
							<Li>Perustettu 1962, toiminta alkanut jo vuotta aiemmin.</Li>
							<Li>
								Tunnuksena sininen kuutin pää ja sinisen huivin reunassa rahnikasnyöritekniikalla punottu sini-hopea
								nauha.
							</Li>
							<Li>
								Kotisivut: <Link href="https://www.kauku.fi">Kauka-Kuutit ry</Link>
							</Li>
							<Li>
								Instagram: <Link href="https://www.instagram.com/kaukakuutit/">Kauka-Kuutit ry (@kaukakuutit)</Link>
							</Li>
							<Li>
								Facebook: <Link href="https://www.facebook.com/kaukakuutit/">Kauka-Kuutit ry (kaukakuutit)</Link>
							</Li>
						</List>
					</Column>
				</Row>
				<Hr />
				<Row>
					<Column className="w-1/3 pr-md" valign="top" align="center">
						<Section.SubTitle>Korson Honkapartio</Section.SubTitle>
						<Img
							src="https://www.kauku.fi/wp-content/uploads/korson_honkapartio.png"
							alt="Korson honkapartio logo"
							width={96}
						/>
					</Column>
					<Column className="w-2/3">
						<List className={'list-["\\269C"] '}>
							<Li>Sekalippukunta Vantaan Korsosta.</Li>
							<Li>Jäseniä n. 100 hlö.</Li>
							<Li>Perustettu 1946, partiotoimintaa jo 1930-luvulta.</Li>
							<Li>Tunnuksena hopeinen honka vihreällä taustalla, musta huivi hopeisella heijastavalla reunuksella.</Li>
							<Li>
								Kotisivut: <Link href="https://korsonhonkapartio.fi/">Korson Honkapartio ry</Link>
							</Li>
							<Li>
								Instagram:{' '}
								<Link href="https://www.instagram.com/korsonhonkapartio/">
									Korson honkapartio ry (@korsonhonkapartio)
								</Link>
							</Li>
							<Li>
								Facebook:{' '}
								<Link href="https://www.facebook.com/korsonhonkapartio">Korson Honkapartio ry (korsonhonkapartio)</Link>
							</Li>
						</List>
					</Column>
				</Row>
				<Hr />
				<Row>
					<Column className="w-1/3 pr-md" valign="top" align="center">
						<Section.SubTitle>Rismalahti</Section.SubTitle>
						<Img
							src="https://www.kauku.fi/wp-content/uploads/rismalahti.jpg"
							alt="Korson honkapartio logo"
							width={96}
						/>
					</Column>
					<Column className="w-2/3">
						<List className={'list-["\\269C"] '}>
							<Li>
								Rismalahti on Hämeen Partiopiirin leirikeskus. Se sijaitsee Asikkalan Salonsaaressa, Päijänteen rannalla
								noin 30 kilometriä Lahdesta pohjoiseen.
							</Li>
							<Li>
								Rismalahden ovat rakentaneet Lions Clubit Lahti ja Vesijärvi. Ne lahjoittivat sen vuonna 1960
								Salpausselän Partiopoikapiiri ry:lle, jolta se myöhemmin siirtyi Salpausselän Partiolaiset ry:lle.
								Salpausselän Partiolaiset luovuttivat yhdistyksen purkautuessa Rismalahden majan Hämeen Partiosäätiölle
								syksyllä 2009. (Lähde:{' '}
								<Link href="https://fi.scoutwiki.org/H%C3%A4meen_Partiopiiri/Rismalahti">PartioWiki</Link>)
							</Li>
						</List>
					</Column>
				</Row>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
