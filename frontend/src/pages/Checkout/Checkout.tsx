import CartItemList from "../../components/CartItemList/CartItemList"
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import StripePayment from "../../components/StripePayment/StripePayment"

const Checkout = () => {
    return (
        <>
        <CartItemList />
        <CheckoutForm />
        <StripePayment/>
        </>
    )
}

export default Checkout