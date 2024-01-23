import { CartItemProps } from "../../types/cart.types";
import { useCartContext } from "../../context/CartContext";

const CartItemCard: React.FC<CartItemProps> = ( {item} ) => {
  
  const {
    handleAddToCartButtonClick,
    handleRemoveFromCartButtonClick,
    handleRemoveProductFromCartButtonClick
} = useCartContext()

  
    return (
        <div className="container" id="cartItem-div">
          <button data-cart-item={JSON.stringify(item)} onClick={handleAddToCartButtonClick}>Add to Cart</button>
          <img src={item.name} alt={item.name} />
          <p>{item.price}</p>
          <button data-cart-item={JSON.stringify(item)} onClick={handleRemoveFromCartButtonClick}>Remove from Cart</button>
          <button data-cart-item={JSON.stringify(item)} onClick={handleRemoveProductFromCartButtonClick}>Remove Product</button>
        </div>
        //lägga till uträkning för totalsumma?
      );
}

export default CartItemCard

          // <img alt="Product"/>
          // <p id="cartItemName-p">Namn</p>
          // <p id="cartItemPrice-p">Pris</p>
          // <button id="add-to-cart" className="appButton cart-action-button" onClick={handleAddToCartButtonClick}>+</button>
          // <button id="remove-from-cart" className="appButton cart-action-button" onClick={handleRemoveFromCartButtonClick}>-</button>
          // <button id="remove-product-from-cart" className="appButton cart-action-button" onClick={handleRemoveProductFromCartButtonClick}>Radera</button>