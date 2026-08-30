import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Li, List } from '../components/List';
import { Link, MailTo } from '../components/Link';
import { InfoText } from '../components/InfoText';

const webVersionUrl = 'https://www.kauku.fi/2026/07/31/kuuttien-kesakirje-2026/';

export const Template: FC = () => (
	<Email
		titleShort="Kuuttien kesäkirje 2026"
		title="Kuuttien kesäkirje 2026"
		heroImage="https://www.kauku.fi/wp-content/uploads/20260719_vaiski26_olli_rantala_keskiaiset_057.jpg"
		heroAlt=""
		recipients="Lippukunnan jäsenet huoltajineen"
		imageSource="Kansikuva: EPT / Olli Rantala"
		webVersionurl={webVersionUrl}
	>
		<SectionsWrapper alternateColors={false} final>
			<Section>
				<InfoText>
					<Link href={webVersionUrl}>The English version is available on our website</Link>
				</InfoText>
				<Text>Kesän huppuhetki Väiski on jo takana ja kesäloma alkaa pikkuhiljaa lähestyä loppuaan.</Text>
				<Text>Nyt on siis hyvä aika kääntää katse kohti tulevaa syksyä ja syksyn partiokautta!</Text>
				<Text>Tässä viestissä:</Text>
				<List variant="ordered">
					<Li>Syyskauden ryhmät ja kokousajat</Li>
					<Li>Kuuttien kaudenaloitustapahtuma</Li>
				</List>
			</Section>
			<Section>
				<Section.Title>Syyskauden ryhmät ja kokousajat</Section.Title>
				<Text>
					Kauka-Kuuttien viikkokokoukset alkavat <b>viikolla 35 (24.8.2026 →)</b> elleivät ryhmänjohtajat ilmoita
					toisin.
				</Text>
				<Text>Syyskaudella 2026 lippukunnan ryhmät ovat:</Text>
				<Text>
					<b>Sudenpennut:</b>
				</Text>
				<List>
					<Li>
						Uusi sudenpentulauma kokoustaa maanantaisin kello 18:00–19:00.
						<br />
						Lauma muodostuu siirtyvistä perhepartiolaisista, sudenpentuikäisistä Rohkeista-Apinoista ja uusista
						sudenpenuista. Laumassa on siis vielä muutama paikka vapaana!
						<br />
						Lauman akelana toimii Laura, jonka lisäksi häntä auttaa lauman johdossa toinen johtaja.
						<br />
						Uusi sudenpentulauma aloittaa vasta viikolla 36.
					</Li>
				</List>
				<Text>
					<b>Seikkailijat:</b>
				</Text>
				<List>
					<Li>
						Seikkailijajoukkue Rohkeat Apinat kokoustavat tiistaisin kello 18:00–19:00
						<br />
						Joukkueen Sampoina toimivat Tomi ja Heidi. Heidän lisäksi ryhmässä on mukana samoajaikäisiä
						ryhmänohjaajaharjoittelijoita.
					</Li>
					<Li>
						Seikkailijajoukkue Tähtipanssariketut kokoustavat tuttuun tapaan torstaina kello 18:00–19:00.
						<br />
						Tähtipanssariketut suorittavat syksyn aikana siirtymää tarpojaikäkauteen ja suorittavat joustavasti sekä
						seikkailjoiden että tarpojien aktiviteetteja.
						<br />
						Lauman Sampoina toimivat Olle ja Maria. Heidän lisäksi ryhmässä on mukana samoajaikäisiä
						ryhmänohjaajaharjoittelijoita.
					</Li>
				</List>
				<Text>
					<b>Tarpojat:</b>
				</Text>
				<List>
					<Li>
						Tarpojavartio Vesikauhun jatko on vielä epävarma. Tähän liittyen ryhmän huoltajille on lähtenyt viesti,
						johon toivomme pikaista vastausta.
					</Li>
				</List>

				<Text>
					<b>Samoajat:</b>
				</Text>
				<List>
					<Li>
						Lippukunnan samoajat kokoontuvat toiveidensa mukaisesti ainakin kerran kuukaudessa. Kokouksien ajankohta ja
						sisältö päätetään yhdessä samoajaikäisten ja samoajaluotsien kanssa.
					</Li>
				</List>
				<Text>
					<b>Vaeltajat ja Aikuiset:</b>
				</Text>
				<List>
					<Li>
						Lippukuntaan ollaan aloittamassa aikuispartiotoimintaa syksyn aikana. Aikuispartio kokoustaa alustavasti
						kerran kuukaudessa ja ryhmästä tulee lisätietoa myöhemmin. Nyt kannattaa kuitenkin kertoa asiasta kaverille
						ja pohtia, minkälainen toiminta sinua voisi kiinnostaa!
					</Li>
				</List>
				<Text>
					<b>Perhepartio</b>
				</Text>
				<List>
					<Li>
						Perhepartioryhmä Ketunpennut jatkavat toimintaansa tuttuun tapaan syksyllä. Lisätietoa kokouksista on
						luvassa perhepartiolaisten Whatsapissa.
					</Li>
				</List>
				<Text>
					Jos sinulla on kysyttävää ryhmistä, ole yhteydessä ryhmäsi johtajaan tai sähköpostilla{' '}
					<MailTo>info@kauku.fi</MailTo>.
				</Text>
			</Section>
			<Section>
				<Section.Title>Kuuttien kaudenaloitustapahtuma</Section.Title>
				<Text>Tervetuloa tutustumaan partiotoimintaan Kauklahdessa yhdessä Kauka-Kuuttien kanssa!</Text>{' '}
				<Text>
					Kauka-Kuuttien avoimeen kaudenaloitustapahtumaan ovat kaikki tervetulleita, olitte sitten lippukuntalaisia,
					heidän huoltajiaan tai muuten partiosta kiinnostuneita paikallisia. Lippukunnastamme löytyy tekemistä
					kaikenikäisille aina 3-vuotiaista perhepartiolaisista alkaen.
				</Text>{' '}
				<Text>
					Kaudenaloitustapahtuma järjestetään 23.8. klo 14:00–16:00 Kylätalo Palttinan Asukaspuiston nurmikentällä.
				</Text>{' '}
				<Text>Kaudenaloitustapahtumassa on luvassa muun muassa:</Text>
				<List variant="unordered">
					<Li>Partioon ja Kauka-Kuutteihin tutustumista</Li>
					<Li>Yhteisiä ulkopelejä</Li>
					<Li>Hauskaa partioaiheista tekemistä</Li>
				</List>
				<Text>Toivotamme myös lasten huoltajat lämpimästi mukaan apukäsiksi tai vetäjiksi toimintaamme.</Text>
				<Text>Tervetuloa tutustumaan!</Text>{' '}
				<Text>
					Lisätietoja lippukunnastamme löytyy osoitteesta <Link>kauku.fi</Link>. Jos kaudenaloitustapahtumaan liittyen
					herää mitään kysymyksiä, lisätietoja voi kysellä osoitteesta <MailTo>info@kauku.fi</MailTo>.
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
