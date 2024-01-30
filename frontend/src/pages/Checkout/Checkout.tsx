import CartItemList from "../../components/CartItemList/CartItemList"
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import StripePayment from "../../components/StripePayment/StripePayment"

const Checkout = () => {
    return (
        <main>
            <article id="checkout">
                <CartItemList />
                <CheckoutForm />
                <StripePayment/>
            </article>
        </main>
    )
}

export default Checkout