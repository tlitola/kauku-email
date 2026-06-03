import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/404';

export const Template: FC = () => (
	<Email
		titleShort="Rebekkan reporetki – Loppukirje"
		title="Rebekkan reporetki 14.5.–16.5. – Loppukirje"
		heroImage="https://www.kauku.fi/wp-content/uploads/rebekkan_reporetki-scaled.jpeg"
		heroAlt=""
		imageSource="Suomen Partiolaiset – Jan Lindstrom"
		recipients="Vaelluksen osallistujat"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper final>
			<Section>
				<Text>
					Kiitos kaikille ihanasta vaelluksesta! Mahtavaa, että pääsimme yhdessä luomaan lippukunnan vaelluskulttuuria!
				</Text>
				<Text>
					Tässä kirjeessä on vähän fiilistelyä vaellukselta ja vaelluksen palautekysely. Toivottavasti ehditte
					vastaamaan lyhyeen kyselyyn!
				</Text>
				<Hr />
				<Section.SubTitle>Vaellusreitti</Section.SubTitle>
				<Text>
					Lopullinen vaellusmatkamme oli vähän alle 30km, jossa nousua oli yli 400m! Jaksoitte kaikki matkan hienosti,
					vaikka mieli olikin vähän uupunut sateen vuoksi. Toivottavasti opitte reissussa jotain uutta vaeltamisesta,
					oli ihana nähdä, kuinka vaeltaminen alkoi sujua loppua kohti paremmin!
				</Text>
				<Text>
					Lopullinen vaellusreittimme on piirrettynä täällä:{' '}
					<Link>
						https://www.outdooractive.fi/fi/route/usean-paeivaen-vaellus/kymenlaakso/rebekkan-reporetki-kevaetvaellus/332995170/?share=%7E33emiscx%244ossqznh
					</Link>
				</Text>
				<Hr />
				<Section.SubTitle>Kuvia vaellukselta</Section.SubTitle>
				<Text>
					Oheiseen kansioon on kerätty kuvia vaellukselta. Puhelinta ei tullut vaelluksella käytettyä paljoa, joten
					kuviakaan ei ole kovin paljoa, mutta niillä pääsee toivottavasti takaisin vaellustunnelmaan!
				</Text>
				<Link
					href="https://drive.google.com/drive/folders/15QxSYVhyT1LaOTn1hWA9F-mLFWRC8gtZ?usp=sharing"
					variant="button"
					location="left"
				>
					Vaelluksen kuvia
				</Link>
				<Hr />
				<Section.SubTitle>Palautekysely</Section.SubTitle>
				<Text>
					Ohessa linkki lyhyeen palautekyselyyn vaellukselta. Kaikki palaute on anonyymiä. Arvostamme kaikkea
					palautetta, sillä se auttaa meitä kehittämään vaelluksia tulevaisuudessa etenkin nyt, kun edellisestä
					vaelluksesta on 9 vuotta!
				</Text>
				<Link href="https://forms.gle/dVDApzr2ywpV2FGB8" variant="button" location="left">
					Palautekysely
				</Link>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
