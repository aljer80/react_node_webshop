import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

/**
 * CartCounter is a React functional component that displays the total item count from the shopping cart.
 *
 * It utilizes the CartContext to access the cart items and calculate the total item count.
 *
 * @component
 * @returns {JSX.Element} The CartCounter component displaying the total item count.
 */
const CartCounter: React.FC = () => {
  const { cart } = useContext(CartContext);

  // Calculate the totalItemCount from the cart items
  const totalItemCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <span className="cartCounter">{totalItemCount}</span>
  );
};

export default CartCounter;
