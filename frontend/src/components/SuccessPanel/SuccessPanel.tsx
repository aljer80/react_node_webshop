import { useCheckoutContext } from "../../contexts/CheckoutContext"

const SuccessPanel: React.FC = () => {
    const {
        paymentResponse
    } = useCheckoutContext()

    return (
        <>
        { paymentResponse }
        </>
    )
}

export default SuccessPanel