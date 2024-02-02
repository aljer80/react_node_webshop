import Navbar from "../Navbar/Navbar"
import logoPicture from "../../assets/logo/logo.png"
import { Link } from "react-router-dom"

/**
 * PageHeader is a React functional component representing the header section of a web page.
 *
 * @component
 * @returns {JSX.Element} The PageHeader component.
 */
const PageHeader: React.FC = () => {
    return (
    <header>
            <label id="logo" className="navButton">
                <Link to="/">
                    <img id="logo-image" src={ logoPicture } alt="myLogo" title="myWebshop" />
                </Link>
                <Link to="/">
                    <h1 id="business-title">Padel<span>R</span>acket</h1>
                </Link>
            </label>
        <Navbar />
    </header>
    );
}

export default PageHeader