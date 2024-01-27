import { PropsWithChildren } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { cartItem } from "../../types/cart.types"

/**
 * CartItem component responsible for rendering a single item in the cart.
 * Retrieves context functions for adding, removing, and removing a product from the cart.
 * @param {CartItemCardProps} item - The cart item to be displayed.
 * @returns {JSX.Element} JSX for the CartItem component.
 */
const CartItem: React.FC<PropsWithChildren<{item: cartItem}>> = ({ item }) => {
    const {
        handleAddToCartButtonClick,
        handleRemoveFromCartButtonClick,
        handleRemoveProductFromCartButtonClick
    } = useCartContext();

    return (
    <div className="cartItem">
        <button onClick={() => handleAddToCartButtonClick(item)}>Add to Cart</button>
        <img src={item.name} alt={item.name} />
        <p>{item.price}</p>
        <button onClick={() => handleRemoveFromCartButtonClick(item.id)}>Remove from Cart</button>
        <button onClick={() => handleRemoveProductFromCartButtonClick(item.id)}>Remove Product</button>
    </div>
    );
}

export default CartItem