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
        text: 'Technical Veron har fått en unik design tillägnad världstjärnan. Technical Veron Juan Lebrón är valet för den offensiva spelaren som använder sig av främst smash och tunga overhead-slag i sitt spel.'
    },
    {
        src: vertuo,
        text: 'Technical Vertuo har fått en unik design tillägnad världstjärnan. Technical Vertuo Juan Lebrón är det perfekta valet för spelaren som vill ha ett lättspelat racket. Modellen har en diamantformad design och topptung balans, egenskaper som ger extra fart och tyngd bakom bollen.'
    },
    {
        src: viper,
        text: 'Technical Viper Juan Lebrón är framtagen tillsammans med Lebrón och noga anpassad för hans aggressivt offensiva stil. Technical Viper Juan Lebrón har alla de egenskaperna som behövs för att leverera en överlägsen fart och spinn på bollen. Vid hårda slag såsom smash svarar kärnan fort och skickar ut bollen med grym fart.'
    },
  ];

export default HeroSlides