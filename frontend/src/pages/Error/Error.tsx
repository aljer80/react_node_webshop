/**
 * Error component displaying an error message.
 *
 * This component renders an error message indicating that the requested page is not found.
 *
 * @component
 * @returns {JSX.Element} JSX for the Error component.
 */
const Error: React.FC = () => {
    return (
        <main>
            <p className="error-text">This is not the page you are looking for!</p>
        </main>
    );
}

export default Error