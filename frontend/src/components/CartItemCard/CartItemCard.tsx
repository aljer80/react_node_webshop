import { PropsWithChildren } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { cartItem } from "../../types/cart.types"
import { BsTrash } from "react-icons/bs";

/**
 * CartItem component responsible for rendering a single item in the cart.
 * Retrieves context functions for adding, removing, and removing a product from the cart.
 * @param {CartItemCardProps} item - The cart item to be displayed.
 * @returns {JSX.Element} JSX for the CartItem component.
 */
const CartItemCard: React.FC<PropsWithChildren<{item: cartItem}>> = ({ item }) => {
    const cartContext = useCartContext();

    return (
        <div className="cartItem" role="group">
            <button type="button" id="add-to-cart-button" className="appButton" onClick={() => cartContext.handleAddToCartButtonClick(item)}>+</button>
            {/* <img className="productImage" src={item.name} alt={item.name} /> */}
            <p id="item-name">{item.name}</p>
            <p id="item-price">{item.price} kr/st</p>
            <p id="item-count">Antal: {item.count}</p>
            <button type="button" id="remove-from-cart-button" className="appButton" onClick={() => cartContext.handleRemoveFromCartButtonClick(item.id)}>-</button>
            <button type="button" id="remove-product-from-cart-button" className="appButton" onClick={() => cartContext.handleRemoveProductFromCartButtonClick(item.id)}><BsTrash /></button>
        </div>
        );
}

export default CartItemCard 