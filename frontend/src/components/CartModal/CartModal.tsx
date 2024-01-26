import { useCartContext } from "../../contexts/CartContext"
import { useCheckoutContext } from "../../contexts/CheckoutContext"
import CartItemCard from "../CartItemCard/CartItemCard"
import { CartItem } from "../../types/cart.types"

const CartModal: React.FC = () => {

    const {
        cart,
        handleToggleCartModalClick,
    } = useCartContext()

    const {
        handleCheckoutButtonClick
    } = useCheckoutContext()

    return (

        <div id="cartModal-div">
            <button type="button" className="appButton" onClick={handleToggleCartModalClick}>x</button>
            {cart.length > 0 ? (
            cart.map((item: CartItem) => (
                <CartItemCard key={ item.id } item={ item } />
            ))
    ) : (
        <p>No items in cart</p>
    )}
            <button type="button" className="appButton" onClick={handleCheckoutButtonClick}>Checkout</button>
        </div>
    )
}

export default CartModal