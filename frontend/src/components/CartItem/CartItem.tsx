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
    const cartContext = useCartContext()
    const modifiedProductName = item.name.toLowerCase().replace(/\s+/g, '-')
    const modifiedBrandName = item.brand.toLowerCase()

    return (
    <div className="cartItem" role="group">
        <button type="button" id="add-to-cart-button" className="appButton" onClick={() => cartContext.handleAddToCartButtonClick(item)}>+</button>
        <img className="productPicture" src={`/images/products/${modifiedBrandName}/${modifiedProductName}.jpg`} alt={item.name} />
        <p className="productPrice">{item.price}</p>
        <button type="button" id="remove-from-cart-button" className="appButton" onClick={() => cartContext.handleRemoveFromCartButtonClick(item.id)}>-</button>
        <button type="button" id="remove-product-from-cart-button" className="appButton" onClick={() => cartContext.handleRemoveProductFromCartButtonClick(item.id)}>x</button>
    </div>
    )
}

export default CartItem