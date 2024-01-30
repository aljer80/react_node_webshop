import { useCartContext } from "../../contexts/CartContext"
import CartItemCard from "../CartItemCard/CartItemCard"
import { cartItem } from "../../types/cart.types"

/**
 * CartItemList component responsible for rendering the list of items in the cart.
 * Retrieves the cart items from the CartContext and maps each item to a CartItemCard component.
 * @returns {JSX.Element} JSX for the CartItemList component.
 */
const CartItemList: React.FC = () => {
    const cartContext = useCartContext()

    return (
        <section id="cart-list">
            {cartContext.cart.length > 0 ? (
                cartContext.cart.map((item: cartItem) => (
                <CartItemCard key={ item.id } item={ item } />
                ))
            ) : (
                <p className="appMessage">Inga varor i kundvagnen</p>
            )}
        </section>
    )
}

export default CartItemList