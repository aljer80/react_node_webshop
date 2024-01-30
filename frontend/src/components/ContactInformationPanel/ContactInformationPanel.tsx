/**
 * Component for displaying contact information.
 * @component
 * @returns {JSX.Element} - ContactPanel component
 */
const ContactInformationPanel: React.FC = () => {
    return (
      <section id="contact-information-panel">
          <p>Skanslyckan 56, 43973, Fjärås, Sweden</p>
          <a href="mailto:alexandra.jernberg@medieinstitutet.se">Alexandra</a>
          <a href="tel:" >+46(0)708-48 45 44</a>
        </section>
      );
}

export default ContactInformationPanel