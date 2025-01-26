import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Li, List } from '../components/List';
import { Column, Img, Row } from '@react-email/components';
import { Link } from '../components/Link';
import { InfoText } from '../components/InfoText';

export const Template: FC = () => (
	<Email
		titleShort="Esimerkki viesti"
		title="Esimerkki otsikko"
		heroImage="https://www.kauku.fi/wp-content/uploads/cropped-20201207_083818-scaled-1.jpg"
		imageSource="Aapo Rainio"
		webVersionurl=""
	>
		<SectionsWrapper>
			<Section>
				<Section.Title>Esimerkki aihe 1</Section.Title>
				<Section.SubTitle>Esimerkki aliotsikko 1</Section.SubTitle>
				<Text>
					<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b> Adipisci aspernatur culpa cumque debitis
					dignissimos dolor dolorem dolores enim hic itaque nihil nisi provident quam quidem quisquam, sequi similique
					vel voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate dignissimos
					itaque natus neque, sed sit. Accusamus dignissimos dolorum fuga iusto laborum molestiae, quod repudiandae,
					rerum temporibus tenetur voluptas voluptates?
				</Text>
				<Text>
					<Link href="https://kauku.fi">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link> Adipisci
					aspernatur culpa cumque debitis dignissimos dolor dolorem dolores enim hic itaque nihil nisi provident quam
					quidem quisquam, sequi similique vel voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium cupiditate dignissimos itaque natus neque, sed sit. Accusamus dignissimos dolorum fuga iusto
					laborum molestiae, quod repudiandae, rerum temporibus tenetur voluptas voluptates?
				</Text>
				<Link variant="button" href="https://kauku.fi">
					Lue lisää
				</Link>
			</Section>
			<Section>
				<Section.Title>Esimerkki aihe 2</Section.Title>
				<Section.SubTitle>Esimerkki alaotsikko 2</Section.SubTitle>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur culpa cumque debitis dignissimos
					dolor dolorem dolores enim hic itaque nihil nisi provident quam quidem quisquam, sequi similique vel
					voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate dignissimos
					itaque natus neque, sed sit. Accusamus dignissimos dolorum fuga iusto laborum molestiae, quod repudiandae,
					rerum temporibus tenetur voluptas voluptates?
				</Text>
				<Text>
					<Link href="https://kauku.fi">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link> Adipisci
					aspernatur culpa cumque debitis dignissimos dolor dolorem dolores enim hic itaque nihil nisi provident quam
					quidem quisquam, sequi similique vel voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium cupiditate dignissimos itaque natus neque, sed sit. Accusamus dignissimos dolorum fuga iusto
					laborum molestiae, quod repudiandae, rerum temporibus tenetur voluptas voluptates?
				</Text>
			</Section>
			<Section>
				<Section.Title>Esimerkki aihe 3</Section.Title>
				<Section.SubTitle>Esimerkki alaotsikko 3</Section.SubTitle>
				<List variant="ordered">
					<Li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Li>
					<Li>
						Architecto at earum eligendi, esse iure maiores minima nobis numquam perspiciatis placeat quasi quo ratione
						reiciendis saepe unde ut voluptas.
					</Li>
					<Li>Consequatur, vitae.</Li>
				</List>
			</Section>
		</SectionsWrapper>
		<SectionsWrapper final={true}>
			<Section>
				<Section.Title>Esimerkki aihe 1</Section.Title>
				<Img className="w-full" src="https://www.kauku.fi/wp-content/uploads/20171007_aapo_rainio__mg_3961.jpg" />
				<InfoText>Kuvaaja: Aapo Rainio</InfoText>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur illo numquam saepe tempore. A
					commodi corporis dolorem, dolores ducimus esse eveniet facere id inventore odio quos unde voluptatem
					voluptatum!
				</Text>
			</Section>

			<Section multiRow>
				<Row>
					<Section.Title>Esimerkki aihe 2</Section.Title>
				</Row>
				<Row>
					<Column className="w-1/3 pr-md" valign="top">
						<Section.SubTitle>Esimerkki alaotsikko 2</Section.SubTitle>
					</Column>
					<Column className="w-2/3">
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam corporis cumque doloremque enim eos
							eum fugit hic ipsam laborum necessitatibus nulla pariatur quae quas quo sequi, sint unde velit.
						</Text>
						<Link variant="button" location="left" href="https://kauku.fi">
							Lue lisää
						</Link>
					</Column>
				</Row>
			</Section>
			<Section>
				<Section.Title>Esimerkki aihe 3</Section.Title>
				<Section.SubTitle>Esimerkki alaotsikko 3</Section.SubTitle>
				<List variant="unordered">
					<Li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Li>
					<Li>
						Architecto at earum eligendi, esse iure maiores minima nobis numquam perspiciatis placeat quasi quo ratione
						reiciendis saepe unde ut voluptas.
					</Li>
					<Li>Consequatur, vitae.</Li>
				</List>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
