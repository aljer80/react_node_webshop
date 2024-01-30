import { useEffect } from "react"
import { useCheckoutContext } from "../../contexts/CheckoutContext"
import SuccessPanel from "../SuccessPanel/SuccessPanel"
import ErrorPanel from "../ErrorPanel/ErrorPanel"

const CheckoutModal = () => {
    const {
        isPaymentSuccessful,
        startNavigationTimer
    } = useCheckoutContext()

    useEffect(() => {
        startNavigationTimer()
    }, [])
//}, [startNavigationTimer]);

    return (
        <section id="confirmation-modal">
        isPaymentSuccessful ? <SuccessPanel /> : <ErrorPanel />
        </section>
    )
}

export default CheckoutModal