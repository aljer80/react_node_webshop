import { PropsWithChildren } from "react"
import CartItemList from "../../components/CartItemList/CartItemList"
import { useCartContext } from "../../contexts/CartContext"
import { useCheckoutContext } from "../../contexts/CheckoutContext"

/**
 * CartModal component responsible for displaying the cart items and checkout button within a modal.
 * This component retrieves necessary functions from CartContext and CheckoutContext to handle closing modal and checkout.
 * @returns {JSX.Element} JSX for the CartModal component.
 */
const CartModal: React.FC<PropsWithChildren<{}>> = () => {
    const cartContext = useCartContext();
    const {
        handleCheckoutButtonClick
    } = useCheckoutContext();

    return (
        <section id="cart-modal">
        <h1>Din kundvagn</h1>
            <button type="button" className="appButton" onClick={cartContext.handleCloseModalButtonClick}>Stäng</button>
            <CartItemList />
            <button type="button" className="appButton" onClick={handleCheckoutButtonClick}>Betalning</button>
        </section>
 
    );
}

export default CartModal