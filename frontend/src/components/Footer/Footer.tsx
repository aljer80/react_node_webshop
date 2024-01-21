import ContactPanel from "../ContactPanel/ContactPanel";
import DisclaimerPanel from "../DisclaimerPanel/DisclaimerPanel";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

/**
 * Footer component containing contact information, social media links, and disclaimers.
 * @component
 * @returns {JSX.Element} - Footer component
 */
const Footer = () => {
    return(
        <div className="container footer-div">
            <ContactPanel/>
            <SocialMediaBar />
            <DisclaimerPanel />
        </div>
    )
};

export default Footer;