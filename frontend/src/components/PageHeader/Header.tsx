import Navbar from "../Navbar/Navbar"
import logoPicture from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom"

const Header: React.FC = () => {

    const navigate = useNavigate();

    return (
    <>
    <section id="logo">
        <img src={ logoPicture } alt="" onClick={navigate("/")}/>
        <h1 id="business-title" style={{ color: "#003049" }}>
            <span style={{ color: "black" }}>P</span>adel<span style={{ color: "black" }}>R</span>acket
        </h1>
    </section>
  
    <Navbar />
    </>
    )
}

export default Header;