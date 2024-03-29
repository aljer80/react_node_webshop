import { useState, useEffect, PropsWithChildren } from "react";
import HeroSlides from "../../services/HeroData/HeroData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
/**
* Hero component responsible for displaying a carousel of slides with product information.
* This component cycles through slides fetched from the HeroData service.
* @returns {JSX.Element} JSX for the Hero component.
*/
const ShopHero: React.FC<PropsWithChildren<{}>> = () => {
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
		}, slideChangeInterval * 2500)
		// Clear the interval after use
		return()=>{
			clearInterval(intervalId)
		}
	}, [totalSlides])

	return (
		<div id="hero-carousel" role="group">
			<section id="hero-slider">
				<button type="button" className="scrollButton" id="scroll-left-button" onClick={()=>{handleScrollButton("left")}}><FaAngleLeft /></button>
					<div className="slide" role="group">
						<img id="hero-img" src={HeroSlides[currentSlide].src} alt="hero image" />
						<p id="slide-text">{HeroSlides[currentSlide].text}</p>
					</div>
				<button type="button" className="scrollButton" id="scroll-right-button" onClick={()=>{handleScrollButton("right")}}><FaAngleRight /></button>
			</section>
			<p className="cta-text">Babolat utökar Juan Lebróns kollektion så att fler ska få möjlighet att spela som "El Lobo"! 10% rabatt på Juan Lebróns kollektion med rabattkoden "LEBRON24". </p>
		</div>
	);
}
export default ShopHero