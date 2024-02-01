import veron from "../../assets/images/products/babolat/veron.jpg"
import vertuo from "../../assets/images/products/babolat/vertuo.jpg"
import viper from "../../assets/images/products/babolat/viper.jpg"
import { slide } from "../../types/hero.types"

/**
 * HeroSlides is an array of slide objects used in a hero slider or carousel.
 *
 * Each slide object contains an image source (src) and accompanying text description.
 *
 * @type {slide[]}
 */
const HeroSlides: slide[] = [
    {
        src: veron,
        text: 'Technical Veron Juan Lebrón är samma modell som den ordinarie Technical Veron men med en unik design tillägnad världstjärnan. Med den innovativa Carbon Flex Technology utnyttjar Babolat fördelarna med två material för att hitta en perfekt kombination mellan fart och tillgänglighet. Resultatet är ett mer förlåtande racket som enklare ger spelaren fart på bollen. Technical Veron är valet för den offensiva spelaren som använder sig av främst smash och tunga overhead-slag i sitt spel.'
    },
    {
        src: vertuo,
        text: 'Technical Vertuo Juan Lebrón är samma modell som den ordinarie Technical Vertuo men med en unik design tillägnad världstjärnan. Babolats Vertuo-serie är det perfekta valet för spelaren som vill ha ett lättspelat racket som tack vare en mjuk träffyta ger en lättillgänglig fart. Technical Vertuo har en träffyta tillverkad av mjuk glasfiber. Med en mjukare träffyta får spelaren tillgång till en större sweetspot där även felträffar får extra fart i slagen. Modellen har en diamantformad design och topptung balans, egenskaper som ger extra fart och tyngd bakom bollen.'
    },
    {
        src: viper,
        text: 'Denna modell från Babolat är framtagen tillsammans med Lebrón och noga anpassad för hans aggressivt offensiva stil. Technical Viper Juan Lebrón har alla de egenskaperna som behövs för att leverera en överlägsen fart och spinn på bollen. Rackets kärna består av en solid styv kärna för maximal kraft vid bollträff. Vid hårda slag såsom smash svarar kärnan fort och skickar ut bollen med grym fart. Jämfört med Babolats ordinarie Technical Viper så består detta racks träffyta av ett 40% tjockare karbon-lager. Resultatet är en extra styv träffyta för dominerande explosivitet i slagen.'
    },
  ];

export default HeroSlides