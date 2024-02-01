import { useCheckoutContext } from "../../contexts/CheckoutContext"
import SuccessPanel from "../SuccessPanel/SuccessPanel"
import ErrorPanel from "../ErrorPanel/ErrorPanel"

export const CheckoutModal = () => {
    const {
        isPaymentSuccessful,
    } = useCheckoutContext()

    return (
        <section id="confirmation-modal">
            {isPaymentSuccessful ? <SuccessPanel /> : <ErrorPanel />}
        </section>
    )
}

export default CheckoutModal