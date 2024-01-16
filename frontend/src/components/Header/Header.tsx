import { FaShoppingBag, FaCheck } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";


const Header = () => {

    return(
        <>
            <div>
                <GiTennisRacket />
                <h1>Padel<span>Racket</span></h1>
                <FaShoppingBag />
            </div>
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
        </>
    );
}

export default Header;