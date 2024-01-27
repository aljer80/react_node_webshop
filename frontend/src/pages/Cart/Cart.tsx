import { PropsWithChildren } from "react"
import { CartContextProvider } from "../../contexts/CartContext"
import { CheckoutContextProvider } from "../../contexts/CheckoutContext"
import CartPanel from "../../components/CartPanel/CartPanel"

/**
 * Cart component responsible for rendering the cart modal.
 * This component wraps the CartModal component with CartContextProvider and CheckoutContextProvider.
 * @returns {JSX.Element} JSX for the Cart component.
 */
const Cart: React.FC<PropsWithChildren<{}>> = () => {
    return (
        <CartContextProvider>
            <CheckoutContextProvider>
                <CartPanel />
            </CheckoutContextProvider>
        </CartContextProvider>
    )
}

export default Cart