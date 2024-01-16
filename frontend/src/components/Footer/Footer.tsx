import ContactPanel from "../ContactPanel/ContactPanel";
import DisclaimerPanel from "../DisclaimerPanel/DisclaimerPanel";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";


const Footer = () => {
    return(
        <div>
            <ContactPanel />
            <SocialMediaBar />
            <DisclaimerPanel />
        </div>
    )
};

export default Footer;