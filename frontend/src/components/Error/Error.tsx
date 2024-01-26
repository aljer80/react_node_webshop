import { useCheckoutContext } from "../../contexts/CheckoutContext";

const Error: React.FC= () => {

  const {
    paymentResponse
  } = useCheckoutContext();

    return (
        <div id="errorMessage">
          { paymentResponse }
          <button type="button" id="retry-button" className="appButton" title="Retry operation" onClick={handleRetryButtonClick}>Försök igen</button>
        </div>
      );
}

export default Error