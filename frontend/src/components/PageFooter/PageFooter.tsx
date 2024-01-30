import ContactInformationPanel from "../ContactInformationPanel/ContactInformationPanel"
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar"
import { myIcons } from "../../services/SocialMediaData/SocialMediaData"

const PageFooter: React.FC = () => {
    return (
        <footer>
            <ContactInformationPanel />
            <SocialMediaBar myIcons = { myIcons }/>
        </footer>
    );
}

export default PageFooter