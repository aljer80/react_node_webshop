import { useEffect } from "react"
import { useCheckoutContext } from "../../contexts/CheckoutContext"
import SuccessPanel from "../SuccessPanel/SuccessPanel"
import ErrorPanel from "../ErrorPanel/ErrorPanel"

const CheckoutModal = () => {
    const {
        isPaymentSuccessful,
        startNavigationTimer
    } = useCheckoutContext();

    useEffect(() => {
        startNavigationTimer();
    }, []);

    return (
        isPaymentSuccessful ? <SuccessPanel /> : <ErrorPanel />
    )
}

export default CheckoutModal