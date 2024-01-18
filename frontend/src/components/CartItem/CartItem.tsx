import { CartItemProps } from "../../types/cartItem.types";

const CartItem = ({ callbacks }: CartItemProps) => {
  
  const handleAddToCartButtonClick = () => {
    callbacks.addToCart();
  }

  const handleRemoveFromCartButtonClick = () => {
    callbacks.removeFromCart();
  }

  const handleRemoveProductFromCartButtonClick = () => {
    callbacks.removeProductFromCart();
  }

    return (
        <div>
          <img alt="Product"/>
          <p>Name</p>
          <p>Price</p>
          <button id="add-to-cart" className="appButton" onClick={handleAddToCartButtonClick}>+</button>
          <button id="remove-from-cart" className="appButton" onClick={handleRemoveFromCartButtonClick}>-</button>
          <button id="remove-product-from-cart" className="appButton" onClick={handleRemoveProductFromCartButtonClick}>Delete</button>
        </div>
        //lägga till uträkning för totalsumma?
      );
}

export default CartItem