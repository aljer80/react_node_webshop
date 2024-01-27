import { FaEnvelope } from "react-icons/fa";

/**
 * Component for displaying contact information.
 * @component
 * @returns {JSX.Element} - ContactPanel component
 */
const ContactPanel = () => {
    return (
        <div className="container" id="contactPanel-container">
          <p>Alexandra Jernberg</p>
          <p>E-post:{" "}
          <a href="mailto:alexandra.jernberg@medieinstitutet.se"><FaEnvelope style={{ color: "#ffffff" }} /></a>
          </p>
        </div>
      )
    
}

export default ContactPanel