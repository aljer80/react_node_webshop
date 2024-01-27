import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js"
import { PaymentIntentResult, PaymentMethodResult } from "@stripe/stripe-js"
import { useCheckoutContext } from "../../contexts/CheckoutContext"
import { useCartContext } from "../../contexts/CartContext"
import { requestPaymentIntent } from "../../utilities/ApiUtility"
import { PaymentData } from "../../types/checkout.types"

/**
 * StripeComponent responsible for handling Stripe payment.
 * @returns {JSX.Element} JSX for the StripeComponent.
 */
const StripeComponent: React.FC = () => {

    const stripe = useStripe();
    const elements = useElements();
    const { 
        customerDetailsFormData,
        setIsPaymentSuccessful,
        setPaymentResponse
    } = useCheckoutContext();
    const {
        cart
    } = useCartContext();

    /**
     * Handles form submission for Stripe payment.
     * @param {React.FormEvent} e - The form event.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const selectedCurrency = 'sek'
        const cartTotal = cart.reduce((total, item) => total += item.price, 0)
        const customerDetails = JSON.stringify(customerDetailsFormData);

        if(!stripe || !elements){
            !stripe ? console.log("Stripe"):console.log("Elements");
        }

        const { paymentMethod }: PaymentMethodResult = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement) as any
        });

        const data: PaymentData = {
            paymentMethodId: paymentMethod.id,
            currency: selectedCurrency,
            amount: cartTotal
        }
        const paymentIntent: PaymentIntentResult = await requestPaymentIntent(data)
        if(paymentIntent.error){
            setIsPaymentSuccessful(false);
        }
        setIsPaymentSuccessful(true);
        setPaymentResponse(paymentIntent);
    }
    return (
        <form onSubmit={ handleSubmit }>
            <CardElement />
            <button type="submit">Pay</button>
        </form>
    );
}

export default StripeComponent