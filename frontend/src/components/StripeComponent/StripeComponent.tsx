import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js"
import { PaymentMethodResult } from "@stripe/stripe-js"
import { useCheckoutContext } from "../../contexts/CheckoutContext"
import { useCartContext } from "../../contexts/CartContext"
import { createOrder, requestPaymentIntent } from "../../utilities/ApiUtility"
import { PaymentData } from "../../types/checkout.types"
import { CheckoutModal } from "../../components/CheckoutModal/CheckoutModal"
/**
 * StripeComponent responsible for handling Stripe payment.
 * @returns {JSX.Element} JSX for the StripeComponent.
 */
const StripeComponent: React.FC = () => {
    const stripe = useStripe()
    const elements = useElements()
    const {
        customerDetailsFormData,
        isPaymentSuccessful,
        paymentResponse,
        setIsPaymentSuccessful,
        setPaymentResponse
    } = useCheckoutContext()
    const cartContext = useCartContext()

    /**
     * Handles form submission for Stripe payment.
     * @param {React.FormEvent} e - The form event.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const selectedCurrency = 'sek'
        const cartTotal = cartContext.cart.reduce((total, item) => total += item.price * item.count, 0)
        const customerDetails = JSON.stringify(customerDetailsFormData)

        if(!stripe || !elements){
            !stripe ? console.log("Stripe"):console.log("Elements")
        }

        const { paymentMethod }: PaymentMethodResult = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement) as any
        })

        const data: PaymentData = {
            paymentMethodId: paymentMethod.id,
            currency: selectedCurrency,
            amount: cartTotal
        }
        const orderData = {
            customerDetails: JSON.stringify(customerDetails),
            items: JSON.stringify(cartContext.cart)
        }
        const paymentIntent: unknown = await requestPaymentIntent(data)
        if(paymentIntent.status !== "succeeded"){
            setIsPaymentSuccessful(false)
            setPaymentResponse(paymentIntent.last_payment_error)
        }
        setIsPaymentSuccessful(true)
        setPaymentResponse(paymentIntent)
        createOrder(orderData)
    }
    return (
        <>
        {isPaymentSuccessful ?
            <CheckoutModal /> :
            <form id="payment-form" onSubmit={ handleSubmit }>
                <CardElement />
                <button type="submit" id="checkout-pay-button" className="appButton">Betala</button>
            </form>
        }
        </>
    )
}

export default StripeComponent