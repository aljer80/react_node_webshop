import { useEffect } from "react"
import { useCheckoutContext } from "../../contexts/CheckoutContext"

/**
 * SuccessPanel component responsible for displaying information related to a payment success response.
 *
 * This component renders details about the payment response and starts a navigation timer.
 *
 * @component
 * @returns {JSX.Element} JSX for the SuccessPanel component.
 */
const SuccessPanel: React.FC = () => {
    // Access data and functions from the CheckoutContext
    const {
        paymentResponse,
        startNavigationTimer
    } = useCheckoutContext();

    useEffect(() => {
        startNavigationTimer();
    }, []);

    return (
        <main>
            {paymentResponse && (
                <div>
                    <h2>Payment Response:</h2>
                    <strong>Status:</strong> {paymentResponse.status}<br />
                    <strong>Amount:</strong> {paymentResponse.amount / 100}<br />
                </div>
            )}
        </main>
    );
}

export default SuccessPanel