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
        <div className="container cartItem-div">
          <img alt="Product"/>
          <p id="cartItemName-p">Name</p>
          <p id="cartItemPrice-p">Price</p>
          <button id="add-to-cart" className="appButton cart-action-button" onClick={handleAddToCartButtonClick}>+</button>
          <button id="remove-from-cart" className="appButton cart-action-button" onClick={handleRemoveFromCartButtonClick}>-</button>
          <button id="remove-product-from-cart" className="appButton cart-action-button" onClick={handleRemoveProductFromCartButtonClick}>Delete</button>
        </div>
        //lägga till uträkning för totalsumma?
      );
}

export default CartItem