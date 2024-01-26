import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import logoPicture from "../../assets/logo/logo.svg";

/**
 * Header component containing navigation bar.
 * @component
 * @returns {JSX.Element} - Header component
 */
const Header: React.FC = () => {
    return (
    <div id="header-div">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            >
            <img src={ logoPicture } alt="logo" />
            <h1 className="business-title"><span>P</span>adel<span>R</span>acket</h1>
        </NavLink>
        <NavBar />
    </div>
    );
}

export default Header;