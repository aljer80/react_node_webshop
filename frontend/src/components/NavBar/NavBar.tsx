import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";

/**
 * NavBar component representing the navigation bar.
 * @component
 * @returns {JSX.Element} - NavBar component
 */
const NavBar: React.FC = () => {

    return (
        <div className="container navBar-div">
            <div className="logo-div">
                <Link to="/">
                    <GiTennisRacket className="logo"/>
                    <p className="webShop-name"><span>P</span>adel<span>R</span>acket</p>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/">Hem</Link>
                <Link to="/about">Om oss</Link>
            </div>
            <div>
                <FaShoppingBag className="cart-icon"/>
            </div>
        </div>
    );
}

export default NavBar