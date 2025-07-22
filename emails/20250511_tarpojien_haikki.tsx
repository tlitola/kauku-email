import { FC } from 'react';
import { Text } from '../components/Text';
import { Email } from '../components/Email';
import { Section, SectionsWrapper } from '../components/Section';
import { Link } from '../components/Link';
import { Hr } from '../components/Hr';

const webVersionUrl = 'https://www.kauku.fi/2025/05/05/esterin-paivan-haikki-16-17-5-2025/';

export const Template: FC = () => (
	<Email
		titleShort="Tarpojien haikki"
		title="Esterin päivän haikki 16.–17.5.2025"
		heroImage="https://www.kauku.fi/wp-content/uploads/tarpoja-haikki_20km_20210529_150235-e1746433127630.jpg"
		heroAlt="Tarpojien haikki vuodelta 2021. Kuva metsäiseltä polulta, jossa tarpojia kävelee"
		imageSource="Lippukunnan arkisto: Kuva tarpojien haikilta vuodelta 2021"
		webVersionurl={webVersionUrl}
		recipients="Salama-Kettujen ja Vesikauhujen jäsenet ja johtajat huoltajineen"
	>
		<SectionsWrapper alternateColors={false} final>
			<Section>
				<Text>
					Tervetuloa Kauka-Kuuttien tarpojien yhteiselle haikille Espoon Nuuksioon <b>16.–17.5.2025</b>. Haikin aikana
					kävelemme yhteensä n. 6 km, ja siten tämä onkin oiva tilaisuus kokeilla omia varusteita kesäleiriä ja tulevia
					pidempiä haikkeja varten. Haikin aikana yöpyminen tapahtuu joko omassa riippukeinussa tai lippukunnan teltassa
					tai telttalaavussa.
				</Text>
				<Hr />
				<Section.SubTitle>Lähtö:</Section.SubTitle>
				<Text>
					Kauklahden R-kioskilta 16.5. klo 17.10. Matkustamme tästä junalla ja bussilla Haltiaan, josta aloitamme
					haikin.
				</Text>
				<Hr />
				<Section.SubTitle>Paluu:</Section.SubTitle>
				<Text>
					Kauklahden asemalle 17.5. noin klo 12.00-13.15. Paluuaika riippuu siitä, mihin bussiin ehdimme Nuuksiossa.
					Viestimme tarkemmasta paluuajasta sen selvittyä huoltajaryhmissä Whatsapissa.
				</Text>
				<Hr />
				<Section.SubTitle>Ilmoittautuminen:</Section.SubTitle>
				<Text>Ilmoittautuminen haikille tapahtuu kuksaan oheisen linkin kautta 11.5. mennessä.</Text>
				<Link href="http://kuksaan.fi/83183" variant="button" location="left">
					Ilmoittaudu haikille
				</Link>
				<Hr />
				<Section.SubTitle>Retkimaksu:</Section.SubTitle>
				<Text>
					Haikin osallistumismaksu on 10 € / osallistuja ja se sisältää HSL:n liput sekä ruuan. Maksathan retkimaksun
					lippukunnan tilille <b>FI68 5037 0520 1154 58 käyttäen viitettä 20572</b> viimeistään 11.5.
				</Text>
				<Text>
					Retki-ilmoittautuminen on sitova ja retken voi peruuttaa veloituksetta 11.5. asti ilmoittamalla siitä retken
					johtajalle Annalle tai Toukolle. Tämän jälkeen peruutuksen voi tehdä maksutta vain lääkärintodistusta vastaan
					partiovakuutuksesta.
				</Text>
				<Hr />
				<Section.SubTitle>Varusteet:</Section.SubTitle>
				<Text>
					Haikille tarvitsee säänmukaiset ulkovaatteet ja haikin aikana sisätilaan ei ole mahdollista päästä. Nyt jos
					koskaan on tärkeää, että kaikki tavarat on pakattu rinkkaan eikä erillisiä pusseja ja nyssäköitä ole käsissä
					tai roikkumassa rinkasta. Näin varmistamme haikkailun turvallisuuden ja mukavuuden. Haikin aikana hyvät
					kävelyyn sopivat lenkkarit ovat tärkeät, ja vaatetusta kannattaa kerrostaa niin, että sitä on helppo lisätä
					tauoilla ja vähentää kävellessä.
				</Text>
				<Text>
					Kannamme kaiken haikille tarvittavan mukanamme rinkoissa itse, joten jätättehän rinkkoihin tilaa myös
					yhteisille varusteille, kuten laavuille, trangioille ja ruoalle. Myös vesi tulee huolehtia haikille itse.{' '}
					<b>Pakkaattehan siis mukaan noin 4 litraa vettä.</b> Vesi kannattaa pakata niin, että ainakin osa siitä on
					helposti saatavilla myös kävelyn aikana.
				</Text>
				<Text>
					Tarkemman pakkauslistan löytää lippukunnan verkkosivuilta, mutta käyttäkää omaa harkintaa, sillä kyseessä on
					vain yhden yön retki:{' '}
					<Link href="https://www.kauku.fi/lippukunta/about/tapahtumat-ja-ilmoittautuminen/retket-ja-leirit/">
						Pakkauslista
					</Link>
				</Text>
				<Text>
					Tarvittaessa lippukunnalla on lainata makuupusseja, makuualustoja ja rinkkoja, mikäli lainavarusteille on
					tarvetta. Tässä tapauksessa ole yhteydessä Annaan tai Toukoon hyvissä ajoin.
				</Text>
				<Text>
					Mukaan retkelle ei tarvitse mitään elektroniikkaa. Jos kuitenkin otat jotain mukaasi, teet sen omalla
					vastuullasi. Partiovakuutus ei kata elektronisten laitteiden rikkoutumista. Yhteys kodin ja retken välillä on
					mahdollista saada johtajien kautta.
				</Text>
				<Hr />
				<Text>Tämä on ainoa retkikirje! Toivottavasti näemme Haikilla!</Text>
				<Text>
					Mahdollisiin kysymyksiin vastaavat retken johtajat
					<br />
					Anna Kunnas, p.{' '}
					<Link target="_self" href="tel:050 458 1670">
						050 458 1670
					</Link>
					, <Link href="mailto:anna.nummela@gmail.com">anna.nummela@gmail.com</Link>
					<br />
					Touko Litola, p.{' '}
					<Link target="_self" href="tel:045 209 3886">
						045 209 3886
					</Link>
					, <Link href="mailto:touko@litola.net">touko@litola.net</Link>
				</Text>
			</Section>
		</SectionsWrapper>
	</Email>
);

export default Template;
