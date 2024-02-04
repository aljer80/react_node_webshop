import { useEffect, useState } from "react"
import { useCheckoutContext } from "../../contexts/CheckoutContext"
import { useCartContext } from "../../contexts/CartContext"
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
        startNavigationTimer,
    } = useCheckoutContext();
    const cartContext = useCartContext();
    
    const [timerState, setTimerState] = useState<number | null>(null);
   
    useEffect(() => {
    cartContext.setCart([]);
    }, [cartContext]);

    useEffect(() => {
        const {intervalId, cleanup} = startNavigationTimer();
        setTimerState(intervalId)
        return() => {
            cleanup()
        }
    }, [startNavigationTimer]);

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