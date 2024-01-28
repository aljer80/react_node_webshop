import { useState, useEffect, PropsWithChildren } from "react";
import HeroSlides from "../../services/HeroData/HeroData"
/**
* Hero component responsible for displaying a carousel of slides with product information.
* This component cycles through slides fetched from the HeroData service.
* @returns {JSX.Element} JSX for the Hero component.
*/
const Hero: React.FC<PropsWithChildren<{}>> = () => {
    const slideChangeInterval: number = 5
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const totalSlides = HeroSlides.length
    /**
     * Handles scrolling to the next or previous slide based on the specified direction.
     * @param {("left" | "right")} direction - The direction of the scroll ('left' or 'right').
     */
    const handleScrollButton = (direction: "left" | "right") => {
        let newIndex = direction === "left" ? currentSlide - 1 : currentSlide + 1
        if(newIndex < 0) {
            newIndex = totalSlides - 1
        } else if (newIndex >= totalSlides) {
            newIndex = 0
        }
        setCurrentSlide(newIndex)
    }
    useEffect(() => {
        // Set timing interval for carousel movement
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
        }, slideChangeInterval * 1000)
        // Clear the interval after use
        return()=>{
            clearInterval(intervalId)
        }
    }, [totalSlides])
    return (
        <div className="container" id="hero-div">
            <div id="hero-slider">
                <button type="button" id="scroll-left-button" onClick={()=>{handleScrollButton("left")}}>P</button>
                <div className="slide">
                    <img id="hero-img" src={HeroSlides[currentSlide].src} alt="hero image" />
                    <p id="slide-text">{HeroSlides[currentSlide].text}</p>
                </div>
                <button type="button" id="scroll-right-button" onClick={()=>{handleScrollButton("right")}}>N</button>
            </div>
            <p className="CTA-text">Babolat utökar Juan Lebróns kollektion så att fler ska få möjlighet att spela som "El Lobo"! 10% rabatt på Juan Lebróns kollektion med rabattkoden "LEBRON24". </p>
        </div>
    );
}
export default Hero