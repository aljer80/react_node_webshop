import { useCheckoutContext } from "../../contexts/CheckoutContext"

const ErrorPanel: React.FC = () => {
    const {
        paymentResponse
    } = useCheckoutContext();

    return (
        <>
        { paymentResponse }
        <button type="button" id="retry-button" className="appButton" title="Retry operation" onClick={handleRetryButtonClick}>Försök igen</button>
        </>
    );
}

export default ErrorPanel