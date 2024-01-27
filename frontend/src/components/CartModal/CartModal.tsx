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
    const {
        handleCloseModalButtonClick
    } = useCartContext();
    const {
        handleCheckoutButtonClick
    } = useCheckoutContext();
    return (
        <>
        <h1>Your Cart</h1>
            <button type="button" className="appButton" onClick={handleCloseModalButtonClick}>x</button>
            <CartItemList />
            <button type="button" className="appButton" onClick={handleCheckoutButtonClick}>Checkout</button>
        </>
    );
}

export default CartModal