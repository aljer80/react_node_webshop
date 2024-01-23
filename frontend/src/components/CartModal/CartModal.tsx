import { useCartContext } from "../../context/CartContext";
import CartItemCard from "../CartItemCard/CartItemCard";
import { CartItem } from "../../types/cart.types";
import { use-BlaBla-Context } from "../../context/BlaBla-Context";

const CartModal = () => { 

const {
  handleToggleCartModalClick,
  cart, 
} = useCartContext();

const {
  handleCheckoutClick
} = use-BlaBla-Context();

  return (
    <div className="container" id="cartModal-div">
        <button type="submit" className="appButton" id="x-button" onClick={handleToggleCartModalClick}>X</button>
          <section id="item-list">
            {cart.map((item: CartItem) => (
                <CartItemCard key={ item.id } item={ item } />
            ))}
          </section>
        <button type="submit" className="appButton" id="toPaymentButton" onClick={handleCheckoutClick}>Till Kassan</button>
    </div>
  );
}

export default CartModal