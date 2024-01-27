import { NavLink } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import { Logo } from "../../types/logo.types";
import logoPicture from "../../assets/logo/logo.svg";

/**
 * Header component containing navigation bar.
 * @component
 * @returns {JSX.Element} - Header component
 */
const Header: React.FC = () => {

    const logo: Logo = {
        src: logoPicture,
        alt: "logo", 
        title: "My logo",
    }

    return (
    <div className="container" id="header-div">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            >
                <img src={logo.src} alt={logo.alt} />
                    <h1 id="business-title" style={{ color: "#003049" }}>
                        <span style={{ color: "black" }}>P</span>adel<span style={{ color: "black" }}>R</span>acket
                    </h1>
        </NavLink>
        <NavBar />
    </div>
    );
}

export default Header;