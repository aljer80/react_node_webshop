import Navbar from "../Navbar/Navbar"
import logoPicture from "../../assets/logo/logo.png"
const PageHeader: React.FC = () => {
    return (
    <header>
        <div id="logo" role="group">
            <img src={ logoPicture } alt="myLogo" title="myWebshop" />
            <h1 id="business-title">Padel<span>R</span>acket</h1> 
        </div>
        <Navbar />
    </header>
    )
}

export default PageHeader;


{/* <h1 id="business-title" style={{ color: "#003049" }}>
    <span style={{ color: "black" }}>P</span>adel<span style={{ color: "black" }}>R</span>acket
</h1> */}