import { useCheckoutContext } from "../../contexts/CheckoutContext"

const ErrorPanel: React.FC = () => {
    const {
        paymentResponse
    } = useCheckoutContext()

    return (
        <main>
            {paymentResponse && paymentResponse.length > 0 && (
                <div>
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
    )
}

export default ErrorPanel