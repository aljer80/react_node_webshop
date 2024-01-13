import { useState } from "react";
import CartItem from "../CartItem/CartItem";

const CartModal = () => { 

  const [cart, setCart] = useState([]);
  //kolla cart

  function handleAddToCart(product) {
    //kolla product
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    //kolla existingProductIndex
    if(existingProductIndex !== -1) {
      const updatedCart = [...cart];
      //kolla updatedCart
      updatedCart[existingProductIndex].count += 1;
      setCart(updatedCart);
      //kolla resultat 
    } else {
      setCart(prevCart => [...prevCart, { ...CartItem, count: 1 }]);
      //kolla resultat
    }
  }

  function handleRemoveFromCart(itemId) {
    // kolla itemId
    const existingProductIndex = cart.findIndex(item => item.id === itemId);
    //kolla existingProductIndex
    if(existingProductIndex !== -1){
      const updatedCart = [...cart];
      //kolla updatedCart
      updatedCart[existingProductIndex].count -= 1
      setCart(updatedCart)
      // kolla resultat
    } else {
      setCart(cart.filter(item => item.id !== itemId))
      //kolla resultat
    }
  }

  function handleRemoveProductFromCart(itemId) {
    setCart(cart.filter(item => item.id !== itemId))
    // kolla cart
  }

  function handleCheckoutClick() {
    // lägg till navigering till checkout?
    console.log("Clicked on Checkout")
  }
  
  function handleCloseModalClick() {
    // lägg till navigering till "huvudsidan"
    console.log("Clicked on close modal")
  }

  const callbacks = {
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    removeProductFromCart: handleRemoveProductFromCart
  }

  return (
    //kolla att cartItem finns
    <div>
        <button type="submit" className="appButton">X</button>
          <section id="item-list">
          <CartItem callbacks={ callbacks } />
          </section>
          <button type="submit" className="appButton" onClick={handleCheckoutClick}>Checkout</button>
      </div>
    );
}

export default CartModal