import { CheckoutContextProvider } from "../../contexts/CheckoutContext"
import { CartContextProvider } from "../../contexts/CartContext"
import CartModal from "../../components/CartModal/CartModal"
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import StripePayment from "../../components/StripePayment/StripePayment"

const Checkout: React.FC = () => {
  
    return (
        <CheckoutContextProvider>
                <CartContextProvider>
                    <CartModal />
                </CartContextProvider>
                <CheckoutForm />
                <StripePayment/>
        </CheckoutContextProvider>
    )
}
export default Checkout