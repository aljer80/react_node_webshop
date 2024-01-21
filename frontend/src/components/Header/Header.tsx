import { FaShoppingBag, FaCheck } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";

/**
 * Header component displaying the PadelRacket logo and promotional banners.
 * @component
 * @returns {JSX.Element} - Header component
 */
const Header = () => {

    return(
        <div className="container header-div">
            <div className="logo-div">
                <GiTennisRacket className="logo"/>
                <p className="webShop-name">Padel<span>Racket</span></p>
            </div>
            <FaShoppingBag className="cart-icon"/>
            <div className="header-banner">
                <p>
                    <FaCheck />Öppet köp i 30 dagar
                </p>
                <p>
                    <FaCheck />Gratis frakt vid order över 500kr
                </p>
                <p>
                    <FaCheck />Fria returer
                </p>
            </div>
        </div>
    );
}

export default Header;