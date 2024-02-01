import CartItemList from "../../components/CartItemList/CartItemList"
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import StripePayment from "../../components/StripePayment/StripePayment"
import { useCartContext } from "../../contexts/CartContext";
import { useState, useEffect } from "react";


const Checkout: React.FC = () => {

    const cartContext = useCartContext();

    const [totalSum, setTotalSum] = useState<number>(0);

    useEffect(() => {
        const sum = cartContext.cart.reduce((total, item) => {
          return total + item.price * item.count;
        }, 0);
    
        setTotalSum(sum);
      }, [cartContext.cart]);

    return (
        <main>
            <article id="checkout">
                <CartItemList />
                <p className="totalSum">Summa: {totalSum} kr</p>
                <CheckoutForm />
                <StripePayment/>
            </article>
        </main>
    )
}

export default Checkout