import { CheckoutContextProvider, useCheckoutContext } from "../../contexts/CheckoutContext";
import ConfirmationModal from "../ConfirmationPanel/ConfirmationPanel"; 
import CartModal from "../CartModal/CartModal";
import Checkout from "../../pages/Checkout/Checkout"; 
import Payment from "../../components/Payment/Payment";//paymentElement
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(STRIPE_PK);


const CheckoutComponent = () => {
    const {
        isConfirmationModalOpen
    } = useCheckoutContext


  return (
    <CheckoutContextProvider>
        {
            isConfirmationModalOpen? <ConfirmationModal /> : 
            <>
                <CartModal/>
                <Elements stripe={stripePromise}>
                    <Checkout />
                </Elements>
                <Payment />
            </>
        }
    </CheckoutContextProvider>
  )
}

export default CheckoutComponent

