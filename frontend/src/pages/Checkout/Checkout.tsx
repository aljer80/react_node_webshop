import CartModal from "../../components/CartModal/CartModal";
import Checkout from "../../components/Checkout/Checkout"; 
import Payment from "../../components/Payment/Payment";
import ConfirmationModal from "../../components/ConfirmationPanel/ConfirmationPanel"; 
import { CheckoutContextProvider, useCheckoutContext } from "../../context/CheckoutContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(STRIPE_PK);


const Checkout = () => {
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

export default Checkout

