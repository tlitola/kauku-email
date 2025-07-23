import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Li, List } from '../components/List';
import { Link } from '../components/Link';

const webVersionUrl = 'https://www.kauku.fi/2025/07/23/kuuttien-kesakirje/';

export const Template: FC = () => (
	<Email
		titleShort="Kuuttien kesäkirje"
		title="Kuuttien kesäkirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/riippumatto_jesse_braun-e1753170758745.jpeg"
		heroAlt="Ilmakuva Kajolta, jossa näkyy telttoja metsän keskellä"
		recipients="Lippukunnan jäsenet huoltajineen"
		imageSource="Kansikuva: Suomen Partiolaiset / Jesse Braun"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper alternateColors={false} final>
			<Section>
				<Text>
					Jiiri 25 -kesäleiristä on vierähtänyt jo lähes kuukausi ja myös Kuutit ovat päässeet nauttimaan hyvin
					ansaitusta kesälomasta! Nyt on kuitenkin aika kääntää katse kohti myös tulevaa kautta.
				</Text>
				<Text>Tässä viestissä:</Text>
				<List variant="ordered">
					<Li>Syyskauden ryhmät ja kokousajat</Li>
					<Li>Kuuttien kaudenaloitustapahtuma</Li>
				</List>
			</Section>
			<Section>
				<Section.Title>Syyskauden ryhmät ja kokousajat</Section.Title>
				<Text>
					Kauka-Kuuttien viikkokokoukset alkavat <b>viikolla 35 (25.8.2025 →)</b> elleivät ryhmänjohtajat ilmoita
					toisin.
				</Text>
				<Text>Syyskaudella 2025 lippukunnan ryhmät ovat:</Text>
				<Text>
					<b>Maanantaina:</b>
				</Text>
				<List>
					<Li>Vesikauhut johtajinaan Olle, Panu ja Pihla jatkavat samana tuttuna aikana</Li>
				</List>
				<Text>
					<b>Tiistaina:</b>
				</Text>
				<List>
					<Li>Rohkeat Apinat johtajinaan Tomi ja Heidi kello 18:00–19:00</Li>
				</List>
				<Text>
					<b>Keskiviikkona:</b>
				</Text>
				<List>
					<Li>Uusi sudenpentulauma johtajinaan Anna, Juho, Maria V., Ella, Elsa ja Hilla kello 18:00–19:00</Li>
				</List>
				<Text>
					<b>Torstaina:</b>
				</Text>
				<List>
					<Li>Tähtipanssariketut johtajinaan Olle ja Maria P. Ryhmä jatkaa kokoustamista tuttuun aikaan</Li>
				</List>
				<Text>
					Salama-Ketut kokoontuvat myös jatkossa maanantaisin ja torstaisin samalla kaavalla kuin kevätkaudella.
				</Text>
				<Text>
					Jos sinulla on kysyttävää ryhmistä, ole yhteydessä ryhmäsi johtajaan tai sähköpostilla{' '}
					<Link href="mailto:kaukakuutit@gmail.com">kaukakuutit@gmail.com</Link>.
				</Text>
			</Section>
			<Section>
				<Section.Title>Kuuttien kaudenaloitustapahtuma</Section.Title>
				<Text>
					Kauka-Kuuttien syyskausi aloitetaan yhteisellä kaudenaloitustapahtumalla Kauklahden Palttinan puistossa{' '}
					<b>sunnuntaina 17.8. Kello 12:00-14:00</b>. Tapahtuma on kaikille avoin ja paikalle saa tulla koko perheen
					voimin!
				</Text>
				<Text>
					Ohjelmassa on erilaisia ulkoaktiviteetteja ja tilaisuus on oiva mahdollisuus tutustua partioon sekä viettää
					aikaa uusien ja vanhojen ystävien kanssa!
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
