import { useState, useEffect } from "react";
import { Slide } from "../../types/slide.types";
import veron from "../../assets/images/babolat-technical-veron-juan-lebron-2024.jpg"
import vertuo from "../../assets/images/babolat-technical-vertuo-juan-lebron-2024.jpg"
import viper from "../../assets/images/babolat-technical-viper-juan-lebron-2024.jpg"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Hero.css";

const slides: Slide[] = [
  { src: veron, text: 'Babolat utökar Juan Lebróns kollektion så att fler ska få möjlighet att spela som "El Lobo"! Technical Veron Juan Lebrón är samma modell som den ordinarie Technical Veron men med en unik design tillägnad världstjärnan. Veron är de rack från Babolat med allra bredast målgrupp, detta tack vare sin innovativa design. Med den innovativa Carbon Flex Technology utnyttjar Babolat fördelarna med två material för att hitta en perfekt kombination mellan fart och tillgänglighet. Resultatet är ett mer förlåtande racket som enklare ger spelaren fart på bollen. Technical Veron är valet för den offensiva spelaren som använder sig av främst smash och tunga overhead-slag i sitt spel.'},
  { src: vertuo, text: 'Babolat utökar Juan Lebróns kollektion så att fler ska få möjlighet att spela som "El Lobo"! Technical Vertuo Juan Lebrón är samma modell som den ordinarie Technical Vertuo men med en unik design tillägnad världstjärnan. En mjuk träffyta och lätt vikt är viktiga egenskaper för ett lättspelat racket. Babolats Vertuo-serie är det perfekta valet för spelaren som vill ha ett lättspelat racket som tack vare en mjuk träffyta ger en lättillgänglig fart. Technical Vertuo har en träffyta tillverkad av mjuk glasfiber. Med en mjukare träffyta får spelaren tillgång till en större sweetspot där även felträffar får extra fart i slagen. Modellen har en diamantformad design och topptung balans, egenskaper som ger extra fart och tyngd bakom bollen.' },
  { src: viper, text: 'En ny och fräsch färg på ett av världens mest kända padelracket, Technical Viper Juan Lebrón. Ta chansen att spela som en av världens högst rankade padelspelare, Juan ”El Lobo” Lebrón! Denna modell från Babolat är framtagen tillsammans med Lebrón och noga anpassad för hans aggressivt offensiva stil. Technical Viper Juan Lebrón har alla de egenskaperna som behövs för att leverera en överlägsen fart och spinn på bollen. Rackets kärna består av en solid styv kärna för maximal kraft vid bollträff. Vid hårda slag såsom smash svarar kärnan fort och skickar ut bollen med grym fart. Jämfört med Babolats ordinarie Technical Viper så består detta racks träffyta av ett 40% tjockare karbon-lager. Resultatet är en extra styv träffyta för dominerande explosivitet i slagen.' },
];

/**
 * Hero component responsible for displaying a carousel of slides with product information.
 * @returns {JSX.Element} JSX for the Hero component.
 */
const Hero: React.FC = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 20000);
    return () => clearInterval(intervalId);
  }, [totalSlides]);

  /**
   * Scrolls to the next or previous slide based on the specified direction.
   * @param {string} direction - The direction of the scroll ('left' or 'right').
   */
  const scroll = (direction: "left" | "right") => {
    let newIndex = direction === "left" ? currentSlide - 1 : currentSlide + 1;

    if(newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setCurrentSlide(newIndex);
  }


    return (
      <div className="container" id="hero-div">
        <div id="hero-slider">
          <MdOutlineKeyboardArrowLeft className="arrows" id="arrow-left" onClick={() => scroll('left')} />
            <div className="slide">
              {/* göra bilderna i Hero klickbara så de leder till ProductDetail för den produkten  */}
              <img id="hero-img" src={slides[currentSlide].imageUrl} alt="hero image" />
              <p id="slide-text">{slides[currentSlide].text}</p>
            </div>
          <MdOutlineKeyboardArrowRight className="arrows" id="arrow-right" onClick={() => scroll('right')} />
        </div>
          <p className="CTA-text">Babolat utökar Juan Lebróns kollektion så att fler ska få möjlighet att spela som "El Lobo"! 10% rabatt på Juan Lebróns kollektion med rabattkoden "LEBRON24". </p>
      </div>
    );
}

export default Hero