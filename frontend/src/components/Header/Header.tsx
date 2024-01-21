import { FaCheck } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";

/**
 * Header component containing navigation bar and header banner.
 * @component
 * @returns {JSX.Element} - Header component
 */
const Header = () => {

    return(
        <div className="container header-div">
            <div id="navBar">
                <NavBar />
            </div>
            <div className="header-banner">
                <p><FaCheck />Öppet köp i 30 dagar</p>
                <p><FaCheck />Gratis frakt vid order över 500kr</p>
                <p><FaCheck />Fria returer</p>
            </div>
        </div>
    );
}

export default Header;