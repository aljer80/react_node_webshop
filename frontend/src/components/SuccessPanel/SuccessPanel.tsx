import { useCheckoutContext } from "../../contexts/CheckoutContext"
import { useEffect } from "react"

const SuccessPanel: React.FC = () => {
    const {
        paymentResponse,
        startNavigationTimer
    } = useCheckoutContext()

    useEffect(() => {
        startNavigationTimer()
    }, []);

    return (
        <main>
            {paymentResponse && paymentResponse.length > 0 && (
                <div id="response-text">
                    <h2>Payment Response:</h2>
                    <ul>
                        {paymentResponse.map((response, index) => (
                            <li key={index}>
                                <strong>Status:</strong> {response.status}<br />
                                <strong>Amount:</strong> {response.amount}<br />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}

export default SuccessPanel