import ContactPanel from "../ContactInformationPanel/ContactPanel";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import DisclaimerPanel from "../DisclaimerPanel/DisclaimerPanel";

/**
 * Footer component containing contact information, social media links, and disclaimers.
 * @component
 * @returns {JSX.Element} - Footer component
 */
const Footer = () => {
    return(
        <div className="container" id="footer-div">
            <ContactPanel/>
            <SocialMediaBar />
            <DisclaimerPanel />
        </div>
    )
};

export default Footer;